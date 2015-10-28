var gem = {
  name: 'Azurite',
  price: 2.95,
  canPurchase: true,
  soldOut: false
};

angular.module('gemStore', [])
  .controller('StoreController', function() {
  	this.product = gem;
  });