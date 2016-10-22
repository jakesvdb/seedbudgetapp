
angular.module('angularJsApp')
    .factory('services', ['$http',  function($http, $scope) {
      var serviceBase = 'services/';
        var obj = {};
        obj.getCategories = function(){
            //return $http.get(serviceBase + 'customers');
          var categories = [
              {
                id: '1',
                description: 'Fast just got faster with Nexus S.',
                monthly: 1,
                budgetAmount: 200.00
              }, {
                id: '2',
                description: 'The Next, Next Generation tablet.',
                monthly: 2,
                budgetAmount: 200.00
              }, {
                id: '3',
                description: 'The Next, Next Generation tablet.',
                monthly: 3,
                budgetAmount: 200.00
              }
            ];
          return categories;
        }
        obj.getCategory = function(categoryID){
            //return $http.get(serviceBase + 'customer?id=' + customerID);
            var data = {
                id: 3,
                description: "The Next, Next Generation tablet.",
                monthly: 3,
                budgetAmount: 200.00
              };
            return data;
        }
     
        obj.insertCategory = function (category) {
          //$scope.categories = this.getCategories();
          $scope.categories.push(category);
/*        return $http.post(serviceBase + 'insertCustomer', customer).then(function (results) {
            return results;
        });*/
     };
     
     obj.updateCategory = function (id,customer) {
         return $http.post(serviceBase + 'updateCustomer', {id:id, customer:customer}).then(function (status) {
             return status.data;
         });
     };
     
     obj.deleteCategory = function (id) {
         return $http.delete(serviceBase + 'deleteCustomer?id=' + id).then(function (status) {
             return status.data;
         });
     };
     
        return obj;   
    }]);