var gem = {
  name: 'Azurite',
  price: 2.95
};

angular.module('gemStore', [])
  .controller('StoreController', function() {
  	this.product = gem;
  });