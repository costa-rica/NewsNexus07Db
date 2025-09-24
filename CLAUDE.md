# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

NewsNexus07Db is a Sequelize SQLite module for the NewsNexus07Db and microservices suite of applications. It provides database models and associations for a news aggregation and analysis system.

## Commands

- **Install dependencies**: `yarn add sequelize sqlite3`
- **Import to other apps**: `yarn add file:../NewsNexus07Db`
- **Test**: Currently no test script configured (shows "Error: no test specified")

## Architecture

### Database Layer
- **ORM**: Sequelize with SQLite
- **Connection**: Configured in `models/_connection.js` using environment variables `PATH_DATABASE` and `NAME_DB`
- **Entry Point**: `index.js` exports the complete database module from `models/_index.js`

### Model Structure
All models are located in the `models/` directory and follow a specific pattern:

1. **Core Models**: Individual entity files (e.g., `Article.js`, `User.js`, `Report.js`)
2. **Contract Models**: Junction tables for many-to-many relationships (e.g., `ArticleKeywordContract.js`, `ArticleReportContract.js`)
3. **Special Files**:
   - `_index.js`: Central model registry and exports
   - `_associations.js`: Defines all Sequelize associations between models
   - `_connection.js`: Database connection configuration

### Key Entities and Relationships

**Core Entities:**
- `Article`: Central entity for news articles
- `User`: System users who can review, approve, and categorize
- `Report`: Generated reports containing articles
- `NewsArticleAggregatorSource`: External sources (e.g., GNews)
- `EntityWhoFoundArticle`: Tracks who/what found each article
- `EntityWhoCategorizedArticle`: Tracks who/what categorized articles
- `ArtificialIntelligence`: AI systems used for categorization

**Key Relationships:**
- Articles have many states through `ArticleStateContract`
- Articles belong to reports through `ArticleReportContract`
- Articles have keywords through `ArticleKeywordContract`
- Users can review, approve, and mark articles as duplicates or relevant
- AI systems can categorize articles through `EntityWhoCategorizedArticle`
- News sources have requests (`NewsApiRequest`, `NewsRssRequest`) that produce articles

### Association Pattern
The codebase uses a centralized association pattern where:
1. Models are defined individually in separate files
2. All associations are configured in `_associations.js`
3. Models are exported from `_index.js` after associations are loaded

### Environment Variables
- `PATH_DATABASE`: Directory path for the SQLite database
- `NAME_DB`: Database filename
- No `.env` file needed - inherits environment variables from importing application

## Usage Example

To leverage associations (from README):

```js
const { NewsArticleAggregatorSource } = require("./NewsArticleAggregatorSource");
const { EntityWhoFoundArticle } = require("./EntityWhoFoundArticle");

const gNewsSource = await NewsArticleAggregatorSource.findOne({
  where: { nameOfOrg: "GNews" },
  include: [{ model: EntityWhoFoundArticle }],
});

const entityWhoFoundArticleId = gNewsSource.EntityWhoFoundArticle?.id;
```

## Important Notes

- This is a database module meant to be imported by other applications
- Database schema includes tracking for AI/human categorization and semantic analysis
- The system supports multiple news aggregator sources and request types (API and RSS)
- All model relationships are pre-configured; modify `_associations.js` when adding new relationships