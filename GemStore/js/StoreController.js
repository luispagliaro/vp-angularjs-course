(function() {
  angular
    .module('gemStore')
    .controller('StoreController', StoreController);

  var gems = [{
    name: 'Azurite',
    description: 'Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.',
    price: 110.50,
    canPurchase: true,
    soldOut: false,
    images: ['Azurite_1.gif', 'Azurite_2.gif', 'Azurite_3.gif'],
    shine: 8
  }, {
    name: 'Bloodstone',
    description: 'Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.',
    price: 22.90,
    canPurchase: false,
    soldOut: false,
    images: ['Bloodstone_1.gif', 'Bloodstone_2.gif', 'Bloodstone_3.gif'],
    shine: 9
  }, {
    name: 'Zircon',
    description: 'Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.',
    price: 1100,
    canPurchase: true,
    soldOut: false,
    images: ['Zircon_1.gif', 'Zircon_2.gif', 'Zircon_3.gif'],
    shine: 70
  }];

  function StoreController() {
    var vm = this;

    vm.products = gems;
  }
})();