(function() {
  angular
    .module('gemStore')
    .controller('StoreController', Store);

  var gems = [{
    name: 'Azurite',
    price: 2.95,
    canPurchase: true,
    soldOut: false
  }, {
    name: 'Bloodstone',
    price: 5.95,
    canPurchase: false,
    soldOut: false
  }, {
    name: 'Zircon',
    price: 3.95,
    canPurchase: true,
    soldOut: false
  }];

  function Store() {
    var vm = this;
    
    vm.products = gems;
  }
})();