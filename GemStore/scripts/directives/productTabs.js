(function() {
  angular
    .module('gemStore')
    .directive('productTabs', productTabs);

  function productTabs() {
    var directive = {
      restrict: 'E',
      templateUrl: 'views/product-tabs.html',
      controller: TabController,
      controllerAs: 'tab',
      replace: true
    };

    return directive;

    function TabController() {
      var vm = this;

      vm.tab = 1;
      vm.isSet = isSet;
      vm.setTab = setTab;

      function isSet(value) {
        return vm.tab === value;
      }

      function setTab(value) {
        vm.tab = value;
      }
    }
  }
})();