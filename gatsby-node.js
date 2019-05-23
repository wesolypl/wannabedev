const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const articleTemplate = path.resolve(`src/templates/articleTemplate.js`);
  const articlesQuery = await graphql(`
    {
      wbd {
        articles: articlesConnection(first: 100) {
          edges {
            node {
              status
              createdAt
              id
              title
              content
              thumbnail
              slug
            }
          }
        }
      }
    }
  `);
  articlesQuery.data.wbd.articles.edges.forEach(article => {
    createPage({
      path: article.node.slug,
      component: articleTemplate,
      context: {
        data: article.node
      }
    });
  });
};
