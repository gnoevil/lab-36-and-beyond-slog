'use strict';
require('./scss/main.scss');

const angular = require('angular');
const uiRouter = require('angular-ui-router');

angular.module('myBlogAssignment', [uiRouter])
.config(['$stateProvider', '$urlRouterProvider',  function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.when('', '/admin');
  let routes = [
    {
      name: 'layout',
      url: '/layout',
      template: '<layout></layout>',
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

// require containers
require('./container/admin');

// require components
require('./component/login');
require('./component/layout');
