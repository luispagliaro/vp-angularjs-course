(function() {
  angular
    .module('gemStore')
    .directive('productSpecification', productSpecification);

  function productSpecification() {
  	return {
  		restrict: 'A',
  		templateUrl: 'views/product-specification.html'
  	}
  }
})();
