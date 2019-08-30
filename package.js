Package.describe({
  name: 'rikishi:flag-icon',
  version: '0.0.1',
  summary: 'CSS for vector based country flags.',
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.8.1');
  api.use('ecmascript');
  api.mainModule('flag-icon.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('rikishi:flag-icon');
  api.mainModule('flag-icon-tests.js');
});
