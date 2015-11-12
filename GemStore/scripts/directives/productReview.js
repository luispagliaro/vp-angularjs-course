(function() {
  'use strict';

  angular
    .module('storeDirectives')
    .directive('productReview', productReview);

  function productReview() {
    var directive = {
      restrict: 'E',
      templateUrl: 'views/product-review.html',
      controller: ReviewController,
      controllerAs: 'reviewCtrl'
    };

    return directive;

    function ReviewController() {
      var vm = this;

      vm.addReview = addReview;
      vm.resetReview = resetReview;

      function addReview(product) {
        vm.review.createdOn = Date.now();

        product.reviews.push(vm.review);

        vm.review = {};

        return true;
      }

      function resetReview() {
        vm.review = {};
        vm.review.createdOn = Date.now();
      }

      resetReview();
    }
  }
})();
