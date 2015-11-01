(function() {
  angular
    .module('gemStore')
    .controller('TabController', TabController);

  function TabController() {
    var vm = this;

    vm.tab = 1;
    vm.isSet = isSet;
    vm.setTab = setTab;

    function isSet(value) {
      return vm.tab === value;
    };

    function setTab(value) {
      vm.tab = value;
    };
  }
})();
