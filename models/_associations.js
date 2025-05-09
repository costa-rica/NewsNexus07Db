const {
  User,
  ArticleKeywordContract,
  EntityWhoCategorizedArticle,
  ArtificialIntelligence,
  State,
  ArticleStateContract,
  Report,
  ArticleReportContract,
  ArticleReviewed,
  ArticleApproved,
  ArticleDuplicate,
  NewsApiRequest,
  ArticleContent,
  NewsRssRequest,
  Keyword,
  NewsArticleAggregatorSource,
  Article,
  EntityWhoFoundArticle,
  NewsArticleAggregatorSourceStateContract,
  ArticleIsRelevant,
  NewsApiRequestWebsiteDomainContract,
  WebsiteDomain,
  ArticleEntityWhoCategorizedArticleContract,
} = require("./_index");

// --- EntityWhoCategorizedArticle associations ---
EntityWhoCategorizedArticle.hasMany(ArticleKeywordContract, {
  foreignKey: "entityWhoCategorizesId",
});

ArticleKeywordContract.belongsTo(EntityWhoCategorizedArticle, {
  foreignKey: "entityWhoCategorizesId",
});
// --- ArtificialIntelligence associations ---
ArtificialIntelligence.hasMany(EntityWhoCategorizedArticle, {
  foreignKey: "artificialIntelligenceId",
});
EntityWhoCategorizedArticle.belongsTo(ArtificialIntelligence, {
  foreignKey: "artificialIntelligenceId",
});
// --- State associations ---
State.hasMany(ArticleStateContract, { foreignKey: "stateId" });
ArticleStateContract.belongsTo(State, { foreignKey: "stateId" });
// --- Report associations ---
Report.hasMany(ArticleReportContract, { foreignKey: "reportId" });
ArticleReportContract.belongsTo(Report, { foreignKey: "reportId" });

// --- User associations ---
User.hasMany(EntityWhoCategorizedArticle, { foreignKey: "userId" });
EntityWhoCategorizedArticle.belongsTo(User, { foreignKey: "userId" });

User.hasMany(EntityWhoFoundArticle, { foreignKey: "userId" });
EntityWhoFoundArticle.belongsTo(User, { foreignKey: "userId" });

User.hasMany(Report, { foreignKey: "userId" });
Report.belongsTo(User, { foreignKey: "userId" });

User.hasMany(ArticleReviewed, { foreignKey: "userId" });
ArticleReviewed.belongsTo(User, { foreignKey: "userId" });

User.hasMany(ArticleApproved, { foreignKey: "userId" });
ArticleApproved.belongsTo(User, { foreignKey: "userId" });

User.hasMany(ArticleDuplicate, { foreignKey: "userId" });
ArticleDuplicate.belongsTo(User, { foreignKey: "userId" });

User.hasMany(ArticleIsRelevant, { foreignKey: "userId" });
ArticleIsRelevant.belongsTo(User, { foreignKey: "userId" });

// --- NewsArticleAggregatorSource associations ---
NewsArticleAggregatorSource.hasOne(EntityWhoFoundArticle, {
  foreignKey: "newsArticleAggregatorSourceId",
});
EntityWhoFoundArticle.belongsTo(NewsArticleAggregatorSource, {
  foreignKey: "newsArticleAggregatorSourceId",
});

NewsArticleAggregatorSource.hasMany(NewsApiRequest, {
  foreignKey: "newsArticleAggregatorSourceId",
});
NewsApiRequest.belongsTo(NewsArticleAggregatorSource, {
  foreignKey: "newsArticleAggregatorSourceId",
});

NewsArticleAggregatorSource.hasMany(NewsRssRequest, {
  foreignKey: "newsArticleAggregatorSourceId",
});
NewsRssRequest.belongsTo(NewsArticleAggregatorSource, {
  foreignKey: "newsArticleAggregatorSourceId",
});

// --- Article associations ---
Article.hasMany(ArticleStateContract, { foreignKey: "articleId" });
ArticleStateContract.belongsTo(Article, { foreignKey: "articleId" });

Article.hasMany(ArticleKeywordContract, { foreignKey: "articleId" });
ArticleKeywordContract.belongsTo(Article, { foreignKey: "articleId" });

Article.hasMany(ArticleContent, { foreignKey: "articleId" });
ArticleContent.belongsTo(Article, { foreignKey: "articleId" });

Article.hasMany(ArticleReportContract, { foreignKey: "articleId" });
ArticleReportContract.belongsTo(Article, { foreignKey: "articleId" });

Article.hasMany(ArticleReviewed, { foreignKey: "articleId" });
ArticleReviewed.belongsTo(Article, { foreignKey: "articleId" });

Article.hasMany(ArticleApproved, { foreignKey: "articleId" });
ArticleApproved.belongsTo(Article, { foreignKey: "articleId" });

Article.hasMany(ArticleDuplicate, { foreignKey: "articleId" });
ArticleDuplicate.belongsTo(Article, { foreignKey: "articleId" });

Article.hasMany(ArticleIsRelevant, { foreignKey: "articleId" });
ArticleIsRelevant.belongsTo(Article, { foreignKey: "articleId" });

// --- EntityWhoFoundArticle associations ---
EntityWhoFoundArticle.hasMany(Article, {
  foreignKey: "entityWhoFoundArticleId",
});
Article.belongsTo(EntityWhoFoundArticle, {
  foreignKey: "entityWhoFoundArticleId",
});

// --- NewsArticleAggregatorSourceStateContract associations ---
NewsArticleAggregatorSource.hasMany(NewsArticleAggregatorSourceStateContract, {
  foreignKey: "newsArticleAggregatorSourceId",
});
NewsArticleAggregatorSourceStateContract.belongsTo(
  NewsArticleAggregatorSource,
  {
    foreignKey: "newsArticleAggregatorSourceId",
  }
);

State.hasMany(NewsArticleAggregatorSourceStateContract, {
  foreignKey: "stateId",
});
NewsArticleAggregatorSourceStateContract.belongsTo(State, {
  foreignKey: "stateId",
});

// --- Article has many to many State (through ArticleStateContract) ---
Article.belongsToMany(State, {
  through: ArticleStateContract,
  foreignKey: "articleId",
});
State.belongsToMany(Article, {
  through: ArticleStateContract,
  foreignKey: "stateId",
});

// --- NewsApiRequest 0/1 to Many Articles ---
NewsApiRequest.hasMany(Article, { foreignKey: "newsApiRequestId" });
Article.belongsTo(NewsApiRequest, { foreignKey: "newsApiRequestId" });

// --- NewsRssRequest 0/1 to Many Articles ---
NewsRssRequest.hasMany(Article, { foreignKey: "newsRssRequestId" });
Article.belongsTo(NewsRssRequest, { foreignKey: "newsRssRequestId" });

// // --- Keywords has 1 to Many NewsApiRequests ---
// Keyword.hasMany(NewsApiRequest, {
//   foreignKey: "keywordId",
// });
// NewsApiRequest.belongsTo(Keyword, {
//   foreignKey: "keywordId",
// });

// --- NewsApiRequestWebsiteDomainContract associations: create a many to many relationship between NewsApiRequest and WebsiteDomain ---
NewsApiRequest.hasMany(NewsApiRequestWebsiteDomainContract, {
  foreignKey: "newsApiRequestId",
});
NewsApiRequestWebsiteDomainContract.belongsTo(NewsApiRequest, {
  foreignKey: "newsApiRequestId",
});

WebsiteDomain.hasMany(NewsApiRequestWebsiteDomainContract, {
  foreignKey: "websiteDomainId",
});
NewsApiRequestWebsiteDomainContract.belongsTo(WebsiteDomain, {
  foreignKey: "websiteDomainId",
});

// --- Article has many to many EntityWhoCategorizedArticle (through ArticleEntityWhoCategorizedArticleContract) ---
Article.hasMany(ArticleEntityWhoCategorizedArticleContract, {
  foreignKey: "articleId",
});
ArticleEntityWhoCategorizedArticleContract.belongsTo(Article, {
  foreignKey: "articleId",
});

EntityWhoCategorizedArticle.hasMany(
  ArticleEntityWhoCategorizedArticleContract,
  {
    foreignKey: "entityWhoCategorizesId",
  }
);
ArticleEntityWhoCategorizedArticleContract.belongsTo(
  EntityWhoCategorizedArticle,
  {
    foreignKey: "entityWhoCategorizesId",
  }
);

console.log("✅ Associations have been set up");
