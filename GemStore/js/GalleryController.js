(function() {
	angular
		.module('gemStore')
		.controller('GalleryController', GalleryController);

	function GalleryController() {
		var vm = this;

		vm.current = 0;
		vm.setCurrent = setCurrent;

		function setCurrent(value) {
			value ? vm.current = 0 : vm.current = value;
		};
	}
})();