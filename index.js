const { configLoader } = require('commitizen')
const { prompter: ccPrompter } = require('cz-conventional-changelog')
const { getAuthors } = require('./src/authors')
const prompter = require('./src/prompter')

const config = configLoader.load()
const coAuthors = getAuthors(config, process.env.CZ_CO_AUTHORS)

module.exports = {
  prompter: prompter(coAuthors, ccPrompter),
}
