'use strict';

function MainCtrl($scope, Cart, ProductVariant) {
  $scope.addToCart = function(product) {
  };

  // @todo: Make dynamic.
  var productID = 1;

  ProductVariant.gettingData(productID).then(function(data) {
    $scope.sizes = data.sizes;
    $scope.variant = data.variant;
  });

  /*

  Cart.gettingData().then(function(data) {
    $scope.cart = data;
  });

  */

};

MainCtrl.$inject = ['$scope', 'Cart', 'ProductVariant'];
