# cz-conventional-changelog-coauthors

[![npm version](https://img.shields.io/npm/v/cz-conventional-changelog-coauthors.svg?style=flat-square)](https://www.npmjs.org/package/cz-conventional-changelog-coauthors)

A simple wrapper around [cz-conventional-changelog](https://github.com/commitizen/cz-conventional-changelog) to provide an addition `Co-authored-by` prompt for teams that use pair/mob programming and wish to attribute additional authors to a commit.

## Installation

Make your repository [commitizen friendly](https://github.com/commitizen/cz-cli#making-your-repo-commitizen-friendly) using the commitizen cli.

```sh
# npm
commitizen init cz-conventional-changelog-coauthors --save-dev --save-exact

# yarn
commitizen init cz-conventional-changelog-coauthors --yarn --dev --exact

# pnpm
commitizen init cz-conventional-changelog-coauthors --pnpm --save-dev --save-exact
```

## Configuration

### package.json

See [cz-conventional-changelog](https://github.com/commitizen/cz-conventional-changelog#configuration) for a full list of configuration options. Co-authors can be provided in the `defaultCoAuthors` option as list of raw strings or objects with name and email fields.

```json
{
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-conventional-changelog-coauthors",
      "defaultCoAuthors": [
        "Joe Bloggs <joe.bloggs@github.user>",
        {
          "name": "Jane Doe",
          "email": "jane.doe@github.user"
        }
      ]
    }
  }
}
```

You can also install and configure the adapter globally in `~/.czrc`

```json
{
  "path": "cz-conventional-changelog-coauthors",
  "defaultCoAuthors": [
    {
      "name": "Jane Doe",
      "email": "jane.doe@github.user"
    },
    {
      "name": "Joe Bloggs",
      "email": "joe.bloggs@github.user"
    }
  ]
}
```

### Environment variable

As with the environment variables for [cz-conventional-changelog](https://github.com/commitizen/cz-conventional-changelog#environment-variables) the co-author list can be provideed in the `CZ_CO_AUTHORS` environment variable. The environment variable overrides the `defaultCoAuthors` configuration option and can be used to populate the author list dynamically.

```sh
export CZ_CO_AUTHORS = "Joe Bloggs <joe.bloggs@github.user>, Jane Doe <jane.doe@github.user>"
```
