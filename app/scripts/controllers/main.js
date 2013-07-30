'use strict';

function MainCtrl($scope, Cart, Product) {
  $scope.addToCart = function(item, productInfo) {
    Cart.addItem(item, productInfo);
  };

  // @todo: Make dynamic.
  var productID = 1;

  Product.gettingData(productID).then(function(data) {
    $scope.product = data;
  });

  Cart.gettingCart().then(function(data) {
    $scope.cart = Cart.data.cart;
  });

  /*

  Cart.gettingData().then(function(data) {
    $scope.cart = data;
  });

  */

};

MainCtrl.$inject = ['$scope', 'Cart', 'Product'];
