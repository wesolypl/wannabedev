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
  const posts = articlesQuery.data.wbd.articles.edges;
  const postsPerPage = 9;
  const numPages = Math.ceil(posts.length / postsPerPage);
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve("./src/templates/paginationTemplate.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1
      }
    });
  });
};
