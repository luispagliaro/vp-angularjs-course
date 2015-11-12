(function() {
  'use strict';

  angular
    .module('storeServices')
    .factory('productService', productService);

  productService.$inject = ['$http'];

  function productService($http) {
    var service = {
      getProducts: getProducts
    };

    return service;

    function getProducts() {
      return $http.get('/scripts/store-products.json')
        .then(getProductsComplete);

      function getProductsComplete(response) {
      	return response.data;
      }
    }
  }
})();