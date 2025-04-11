const {
  User,
  ArticleKeywordContract,
  EntityWhoFoundArticle,
  EntityWhoCategorizedArticle,
  ArtificialIntelligence,
  State,
  Report,
  ArticleStateContract,
  ArticleReportContract,
  ArticleReviewed,
  ArticleApproved,
  ArticleDuplicate,
  NewsApiRequest,
  NewsRssRequest,
  NewsArticleAggregatorSource,
  Article,
  ArticleContent,
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

console.log("✅ Associations have been set up");
