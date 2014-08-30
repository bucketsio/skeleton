buckets = require('buckets');

buckets({
  templatePath: __dirname + "/templates/",
  publicPath: __dirname + "/public/",
  db: 'mongodb://localhost/buckets-blog'
});
