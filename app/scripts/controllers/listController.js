
angular.module('angularJsApp') 
  .controller('categoriesCtrl', function ($scope, services) {

    $scope.categories = services.getCategories();


  });