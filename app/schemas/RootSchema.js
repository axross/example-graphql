const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} = require('graphql/type');
const { ArticleType } = require('../types');

const RootSchema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      article: {
        type: ArticleType,
        args: {
          id: {
            type: GraphQLString,
          },
        },
        resolve(rootValue, args) {
          // promiseいける

          console.log(args);

          if (args.id !== 'abcdefgh') return null;

          return Promise.resolve({
            id: 'abcdefgh',
            title: 'サンプル記事',
            body: '中身じゃよ？',
            status: 1,
            publishedAt: 0,
          });
        },
      },
    },
  }),
});

module.exports = RootSchema;
