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
      .when('/edit-category/:categoryID', {
        title: 'Edit Category',
        templateUrl: '/views/categories/edit-category.html',
        controller: 'editCtrl',
        resolve: {
          category: function(services, $route) {
            var categoryID = $route.current.params.categoryID;
            return services.getCategory(categoryID);
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

app.run(['$location', '$rootScope', function($location, $rootScope) {
  $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
    $rootScope.title = current.$$route.title;
  });
}]);
