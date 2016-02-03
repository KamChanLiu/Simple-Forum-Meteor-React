Package.describe({
  name: 'simpleforum:core',
  version: '0.0.1',
  summary: 'SimpleForum core package',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  var packages = [
    'simpleforum:lib'
  ];

  api.use(packages);

  api.imply(packages);

  api.addFiles([
    'lib/client/components/layouts/MainFooter.jsx',
    'lib/client/components/layouts/MainHeader.jsx',
    'lib/client/components/layouts/MainLayout.jsx',
    'lib/client/components/general/formerrors.jsx',
    'lib/client/components/public/home.jsx',
    'lib/client/stylesheets/main.scss',
    'lib/routes.jsx'
  ], 'client');

  api.export([
    'FormErrors'
  ]);
});
