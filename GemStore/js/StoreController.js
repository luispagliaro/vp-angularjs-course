(function() {
  angular
    .module('gemStore')
    .controller('StoreController', Store);

  var gems = [{
    name: 'Azurite',
    price: 2.95,
    canPurchase: true,
    soldOut: false,
    images: [] /*['01-Azurite.png', '02-Azurite.png', '03-Azurite.png']*/
  }, {
    name: 'Bloodstone',
    price: 5.95,
    canPurchase: false,
    soldOut: false,
    images: ['01-Bloodstone.png', '02-Bloodstone.png']
  }, {
    name: 'Zircon',
    price: 3.95,
    canPurchase: true,
    soldOut: false,
    images: ['01-Zircon.jpg', '02-Zircon.jpg']
  }];

  function Store() {
    var vm = this;

    vm.products = gems;
  }
})();