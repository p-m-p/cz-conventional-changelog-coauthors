module.exports = {
  getAuthors(config, envCoAuthors) {
    let authors = []

    if (envCoAuthors) {
      authors.push(...envCoAuthors.trim().split(/\s*,\s*/))
    }

    if (
      authors.length === 0 &&
      config &&
      Array.isArray(config.defaultCoAuthors)
    ) {
      authors.push(
        ...config.defaultCoAuthors
          .map((coAuthor) => {
            if (typeof coAuthor === 'string') {
              return coAuthor
            }

            if (coAuthor.name) {
              return coAuthor.email
                ? `${coAuthor.name} <${coAuthor.email}>`
                : coAuthor.name
            }

            return null
          })
          .filter((co) => co !== null),
      )
    }

    return authors
  },
}
