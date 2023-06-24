const { prompter: ccPrompter } = require('cz-conventional-changelog')
const { configLoader } = require('commitizen')
const { getAuthors } = require('./authors')
const prompter = require('./prompter')

const config = configLoader.load()
const coAuthors = getAuthors(config, process.env.CZ_CO_AUTHORS)

module.exports = {
  prompter: prompter(coAuthors, ccPrompter),
}
