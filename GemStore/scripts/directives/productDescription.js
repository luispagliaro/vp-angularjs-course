(function() {
  angular
    .module('gemStore')
    .directive('productDescription', ProductDescription);

  function ProductDescription() {
  	return {
  		restrict: 'E',
  		templateUrl: 'views/product-description.html',
  		replace: true
  	}
  }
})();
