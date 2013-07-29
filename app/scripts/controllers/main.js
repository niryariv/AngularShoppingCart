'use strict';

function MainCtrl($scope, Cart, Product) {
  $scope.addToCart = function(item, productInfo) {
    console.log(item);
    console.log(productInfo);
    // Cart.addToCart();
  };

  // @todo: Make dynamic.
  var productID = 1;

  Product.gettingData(productID).then(function(data) {
    $scope.product = data;
  });

  /*

  Cart.gettingData().then(function(data) {
    $scope.cart = data;
  });

  */

};

MainCtrl.$inject = ['$scope', 'Cart', 'Product'];
