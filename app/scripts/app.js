'use strict';
var app = angular.module('angularJsApp', ['ngRoute']);


app.config(['$routeProvider', 
    function($routeProvider) {
    $routeProvider.
      when('/', {
        title: 'Categories',
        templateUrl: '/views/categories/categories.html',
        controller: 'categoriesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
