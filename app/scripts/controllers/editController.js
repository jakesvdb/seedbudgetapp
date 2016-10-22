
angular.module('angularJsApp') 
.controller('editCtrl', function ($scope, $rootScope, $location, $routeParams, services, category) {
    var categoryID = ($routeParams.categoryID) ? parseInt($routeParams.categoryID) : 0;
    $rootScope.title = (categoryID > 0) ? 'Edit Category' : 'Add Category';
    $scope.buttonText = (categoryID > 0) ? 'Update Category' : 'Add New Category';
      var original = category;
      original.id = categoryID;
      $scope.category = angular.copy(original);
      $scope.category._id = categoryID;
 
      $scope.isClean = function() {
        return angular.equals(original, $scope.category);
      }
 
      $scope.deleteCategory = function(category) {
        $location.path('/');
        if(confirm("Are you sure to delete category number: "+$scope.category._id)==true)
        services.deleteCategory(category.CategoryNumber);
      };
 
      $scope.saveCategory = function(category) {
        $location.path('/');
        if (categoryID <= 0) {
            services.insertCategory(category);
        }
        else {
            services.updateCategory(categoryID, category);
        }
    };
});