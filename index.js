var path = require('path');
var Metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var layouts = require('metalsmith-layouts');
var browserSync = require('metalsmith-browser-sync');

var bsOpts = {
  server: 'build',
  port: 3000,
  files: [
    'src/**/*.*',
    'templates/**/*.hbs'
  ],
  open: false,
  notify: false
};

Metalsmith(__dirname)
  .ignore([
    '**/images/background/temp',
    '**/js/photoswipe.js',
    '**/js/photoswipe-ui-default.js'
  ])
  .source(path.join(__dirname, 'src'))
  .destination(path.join(__dirname, 'build'))
  .use(markdown())
  .use(layouts({
    engine: 'handlebars',
    default: 'main.hbs',
    pattern: '*.html',
    directory: 'templates',
    partials: 'templates/partials'
  }))
  .use(browserSync(bsOpts))
  .build(function(err){
    if(err){throw err;}
    console.log('ready...');
  });