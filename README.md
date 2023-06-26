# cz-conventional-changelog-coauthors

Status:
[![npm version](https://img.shields.io/npm/v/cz-conventional-changelog-coauthors.svg?style=flat-square)](https://www.npmjs.org/package/cz-conventional-changelog-coauthors)

A simple wrapper around [cz-conventional-changelog](https://github.com/commitizen/cz-conventional-changelog) to provide an addition `Co-authored-by` prompt for teams that use pair/mob programming and wish to attribute additional authors to a commit.

## Configuration

### package.json

Like commitizen, you specify the configuration of [cz-conventional-changelog](https://github.com/commitizen/cz-conventional-changelog#configuration) through the package.json's `config.commitizen` key. In addition to that configuration you can provide a default list of co-authors as raw strings or as objects with name and email fields.

```json5
{
  config: {
    commitizen: {
      path: './node_modules/cz-conventional-changelog-coauthors',
      defaultCoAuthors: [
        'Joe Bloggs <joe.bloggs@github.user>',
        {
          name: 'Jane Doe',
          email: 'jane.doe@github.user',
        },
      ],
    },
  },
}
```

### Environment variable

As with the environment variables for [cz-conventional-changelog](https://github.com/commitizen/cz-conventional-changelog#environment-variables) the default co-author list can be provideed in the `CZ_CO_AUTHORS` environment variable.

```sh
export CZ_CO_AUTHORS = "Joe Bloggs <joe.bloggs@github.user>, Jane Doe <jane.doe@github.user>"
```
