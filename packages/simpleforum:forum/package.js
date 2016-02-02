Package.describe({
  name: 'simpleforum:forum',
  version: '0.0.1',
  summary: 'SimpleForum forum package',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('kam:forum');
  api.addFiles('forum-tests.js');
});
