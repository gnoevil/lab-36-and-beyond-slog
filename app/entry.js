'use strict';

require('./scss/main.scss');

const angular = require('angular');
const ngMarked = require('angular-marked');
const uiRouter = require('angular-ui-router');
const ngClipboard = require('angular-clipboard');
const ngAnimate = require('angular-animate');
const ngTouch = require('angular-touch');

angular.module('myBlogAssignment', [uiRouter, ngMarked, ngClipboard.name, 'ngTouch', 'ngAnimate'])
.config(['$stateProvider', '$urlRouterProvider',  function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('', '/home');
  let routes = [
    {
      name: 'home',
      url: '/home',
      template: '<home></home>',
    },
    {
      name: 'homepage',
      url: '/home/:id',
      template: '<home></home>',
    },
    {
      name: 'admin',
      url: '/admin',
      template: '<admin></admin>',
    },
    {
      name: 'dashboard',
      url: '/dashboard',
      template: '<dashboard></dashboard>',
    },
  ];

  routes.forEach(route => $stateProvider.state(route));
}]);

// require services
require('./service/admin-service.js');
require('./service/page-service.js');


// require containers
require('./container/admin');
require('./container/dashboard');
require('./container/home');

// require components
require('./component/login');
require('./component/page-editor');
require('./component/page-select');
require('./component/page-searchbar');
require('./component/navbar');
