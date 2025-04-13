![Logo](./docs/images/logoAndNameRound.png)

A Sequelize SQLite module for the NewsNexus05Db and microservices suite of applications.

## installation

1. `npm init -y`
2. `yarn add sequelize sqlite3`

## import to other apps

`yarn add file:../NewsNexus05Db`

## Environmental Variables

- No .env file is needed becuase this package will use the .env vars from the project it is imported into.

## Example of How to leverage associations

1. Get the EntityWhoFoundArticle.id from the GNews NewsArticleAggregatorSource

```js
const {
  NewsArticleAggregatorSource,
} = require("./NewsArticleAggregatorSource");
const { EntityWhoFoundArticle } = require("./EntityWhoFoundArticle");

const gNewsSource = await NewsArticleAggregatorSource.findOne({
  where: { nameOfOrg: "GNews" },
  include: [{ model: EntityWhoFoundArticle }],
});

const entityWhoFoundArticleId = gNewsSource.EntityWhoFoundArticle?.id;
```
