
angular.module('angularJsApp')
    .factory('services', ['$http', function($http) {
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
        obj.getCustomer = function(customerID){
            return $http.get(serviceBase + 'customer?id=' + customerID);
        }
     
        obj.insertCustomer = function (customer) {
        return $http.post(serviceBase + 'insertCustomer', customer).then(function (results) {
            return results;
        });
     };
     
     obj.updateCustomer = function (id,customer) {
         return $http.post(serviceBase + 'updateCustomer', {id:id, customer:customer}).then(function (status) {
             return status.data;
         });
     };
     
     obj.deleteCustomer = function (id) {
         return $http.delete(serviceBase + 'deleteCustomer?id=' + id).then(function (status) {
             return status.data;
         });
     };
     
        return obj;   
    }]);