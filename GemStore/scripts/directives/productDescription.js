(function() {
	'use strict';
	
  angular
    .module('storeDirectives')
    .directive('productDescription', productDescription);

  function productDescription() {
  	var directive = {
  		restrict: 'E',
  		templateUrl: 'views/product-description.html',
  		replace: true
  	};

  	return directive;
  }
})();