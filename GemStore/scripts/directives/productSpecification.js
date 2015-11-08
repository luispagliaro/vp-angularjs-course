(function() {
  'use strict';

  angular
    .module('gemStore')
    .directive('productSpecification', productSpecification);

  function productSpecification() {
    var directive = {
      restrict: 'A',
      templateUrl: 'views/product-specification.html'
    };

    return directive;
  }
})();