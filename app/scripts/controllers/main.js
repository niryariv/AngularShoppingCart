'use strict';

function MainCtrl($scope, Cart, Product) {
  $scope.addToCart = function(product) {
    // Cart.addToCart();
  };

  // @todo: Make dynamic.
  var productID = 1;

  Product.gettingData(productID).then(function(data) {
    $scope.sizes = data.sizes;
    $scope.product = data.product;
  });

  /*

  Cart.gettingData().then(function(data) {
    $scope.cart = data;
  });

  */

};

MainCtrl.$inject = ['$scope', 'Cart', 'Product'];
