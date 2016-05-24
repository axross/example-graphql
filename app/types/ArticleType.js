const {
  GraphQLEnumType,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} = require('graphql/type');

const ArticleStatusType = new GraphQLEnumType({
  name: 'ArticleStatus',
  description: '',
  values: {
    DRAFT: {
      value: 1000,
      descripiton: '',
    },
    PUBLISHED: {
      value: 2000,
      description: '',
    },
    CLOSED: {
      value: 3000,
      description: '',
    },
  },
});

const ArticleType = new GraphQLObjectType({
  name: 'Article',
  description: '',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: '',
    },
    title: {
      type: new GraphQLNonNull(GraphQLString),
      description: '',
    },
    body: {
      type: new GraphQLNonNull(GraphQLString),
      description: '',
    },
    status: {
      type: new GraphQLNonNull(ArticleStatusType),
      description: '',
    },
    publishedAt: {
      type: new GraphQLNonNull(GraphQLInt),
      description: '',
    },
  },
});

module.exports = ArticleType;
