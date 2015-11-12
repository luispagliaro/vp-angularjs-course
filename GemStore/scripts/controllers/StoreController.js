(function() {
  'use strict';

  angular
    .module('gemStore', ['storeDirectives', 'storeServices'])
    .controller('StoreController', StoreController);

  StoreController.$inject = ['productService'];

  function StoreController(productService) {
    var vm = this;
    vm.products = [];

    productService.getProducts().then(function(data) {
      vm.products = data;
    });

    /*activate();

    function activate() {
      return getProducts().then(function() {
        console.log(vm.products);
      });
    };

    function getProducts() {
      return productService.getProducts().then(function(data) {
        vm.products = data;
        return vm.products;
      })
    }*/
  }
})();