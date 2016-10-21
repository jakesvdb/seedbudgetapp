
angular.module('angularJsApp') 
.controller('editCtrl', function ($scope, $rootScope, $location, $routeParams, services, customer) {
    var categoryID = ($routeParams.id) ? parseInt($routeParams.id) : 0;
    $rootScope.title = (categoryID > 0) ? 'Edit Customer' : 'Add Customer';
    $scope.buttonText = (categoryID > 0) ? 'Update Customer' : 'Add New Customer';
      var original = customer.data;
      original._id = categoryID;
      $scope.customer = angular.copy(original);
      $scope.customer._id = categoryID;
 
      $scope.isClean = function() {
        return angular.equals(original, $scope.customer);
      }
 
      $scope.deleteCustomer = function(customer) {
        $location.path('/');
        if(confirm("Are you sure to delete customer number: "+$scope.customer._id)==true)
        services.deleteCustomer(customer.customerNumber);
      };
 
      $scope.saveCustomer = function(customer) {
        $location.path('/');
        if (categoryID <= 0) {
            services.insertCustomer(customer);
        }
        else {
            services.updateCustomer(categoryID, customer);
        }
    };
});