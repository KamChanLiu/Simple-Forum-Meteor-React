Package.describe({
  name: 'simpleforum:lib',
  version: '0.0.1',
  summary: 'Simple Forum base libraries',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  var packages = [
    'meteor-base',
    'mobile-experience',
    'mongo',
    'session',
    'tracker',
    'standard-minifiers',
    'es5-shim',
    'ecmascript',
    'underscore',
    'check',
    'fourseven:scss',
    'reywood:bootstrap3-sass',
    'kadira:flow-router',
    'kadira:react-layout',
    'react',
    'momentjs:moment',
    'lbee:lunr',
    'aldeed:collection2',
    'accounts-base',
    'accounts-password',
    'sanjo:jasmine',
    'velocity:html-reporter'
  ];

  api.use(packages);

  api.imply(packages);

  api.addFiles([
    'lib/core.js',
    'lib/utils.js'
  ], ['client', 'server']);
});
