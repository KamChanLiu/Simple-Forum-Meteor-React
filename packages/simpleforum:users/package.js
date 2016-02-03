Package.describe({
  name: 'simpleforum:users',
  version: '0.0.1',
  summary: 'SimpleForum users package',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use(['simpleforum:lib']);

  api.addFiles([
    'lib/users.js'
  ], ['client', 'server']);

  api.addFiles([
    'lib/client/components/users/register.jsx',
    'lib/client/components/users/login.jsx',
    'lib/client/components/users/menu.jsx'
  ], 'client');

  // api.addFiles([
  //   ''
  // ], 'server');

  api.export([
    'Users',
    'UserRegister',
    'UserLogin',
    'UserMenu'
  ])
});

// // TODO
// Package.onTest(function(api) {
//   api.use('ecmascript');
//   api.use('tinytest');
//   api.use('simpleforum:users');
//   api.addFiles('users-tests.js');
// });
