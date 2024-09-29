// fiveserver.config.js
// if 'chrome' does not work, try 'google chrome' or 'google-chrome'

module.exports = {
  highlight: true, // enable highlight feature
  injectBody: true, // enable instant update
  remoteLogs: true, // enable remoteLogs
  remoteLogs: "yellow", // enable remoteLogs and use the color yellow
  injectCss: false, // disable injecting css
  navigate: true, // enable auto-navigation
  port: 8085,
  root: './',
  open: 'index.html',
  host: '0.0.0.0',
  browser: ['firefox','chrome'],
  https: true,
  watch: ['./', 'css', 'files', 'img']
};
