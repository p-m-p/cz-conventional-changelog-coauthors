const { prompter: ccPrompter } = require('cz-conventional-changelog')

module.exports = {
  prompter: function(cz, commit) {
    ccPrompter(cz, (message) => {
      cz.prompt([
        {
          type: 'confirm',
          name: 'hasCoAuthor',
          message: 'Does this commit have co-authors?',
          default: false,
        },
        {
          type: 'checkbox',
          name: 'coAuthors',
          message: 'Select additional authors',
          choices: [],
          when(answers) {
            return answers.hasCoAuthor
          }
        },
      ])
        .then(answers => {
          let coAuthors = ''

          if (Array.isArray(answers.coAuthors)) {
            const coAuthorLines = answers.coAuthors.map(ca => `Co-authored-by: ${ca}`).join('\n')
            coAuthors = `\n\n${coAuthorLines}`
          }

          commit(message + coAuthors)
        })
    })
  }
}
