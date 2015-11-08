(function() {
  angular
    .module('gemStore')
    .directive('productDescription', productDescription);

  function productDescription() {
  	return {
  		restrict: 'E',
  		templateUrl: 'views/product-description.html',
  		replace: true
  	}
  }
})();
