(function() {
  angular
    .module('gemStore')
    .directive('productSpecification', ProductSpecification);

  function ProductSpecification() {
  	return {
  		restrict: 'A',
  		templateUrl: 'views/product-specification.html'
  	}
  }
})();
