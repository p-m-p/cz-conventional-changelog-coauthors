module.exports = {
  getAuthors(config, envCoAuthors) {
    const authors = []

    if (envCoAuthors) {
      try {
        authors.push(...envCoAuthors.trim().split(/\s*,\s*/))
      } catch (ex) {}
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
