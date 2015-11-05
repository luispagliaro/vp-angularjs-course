(function() {
	angular
		.module('gemStore')
		.controller('ReviewController', ReviewController);

		function ReviewController() {
			var vm = this;

			vm.review = {};
			vm.addReview = addReview;

			function addReview(product) {
				product.reviews.push(vm.review);

				vm.review = {};
			}
		}
})();