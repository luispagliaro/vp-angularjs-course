(function() {
	angular
		.module('gemStore')
		.controller('ReviewController', ReviewController);

		function ReviewController() {
			var vm = this;

			vm.review = {};
			vm.addReview = addReview;
			vm.getDate = getDate;

			function addReview(product, form) {
				vm.review.createdOn = vm.getDate();

				product.reviews.push(vm.review);

				vm.review = {};

				form.$setPristine();
				form.$setUntouched();
			}

			function getDate() {
				return Date.now();
			}
		}
})();