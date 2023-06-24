module.exports = function (coAuthors, ccPrompter) {
  return function (cz, commit) {
    ccPrompter(cz, (message) => {
      cz.prompt([
        {
          type: 'confirm',
          name: 'hasCoAuthor',
          message: 'Does this change have additional authors?',
          default: false,
        },
        {
          type: 'checkbox',
          name: 'coAuthors',
          message: 'Select additional authors',
          choices: coAuthors,
          when(answers) {
            return answers.hasCoAuthor
          },
        },
      ]).then((answers) => {
        let coAuthors = ''

        if (Array.isArray(answers.coAuthors) && answers.coAuthors.length > 0) {
          const coAuthorLines = answers.coAuthors
            .map((coAuthor) => `Co-authored-by: ${coAuthor}`)
            .join('\n')
          coAuthors = `\n\n${coAuthorLines}`
        }

        commit(message + coAuthors)
      })
    })
  }
}
