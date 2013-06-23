'use strict';

angular.module('AngularShoppingCartApp')
  .controller('MainCtrl', ['$scope', 'Products', 'Cart', 'sizeServices', function ($scope, Products, Cart, sizeServices) {

    // angularLocalStorage.constant('prefix', 'AngularShoppingCartApp');

    $scope.setActiveSize = function(size) {
      $scope.activeSize = size;
    };

    $scope.addToCart = function(product) {
      console.log(product);
      return;

      var entityId = $scope.sizes[$scope.activeSize].entityId;
      var product = {
        "entityId": entityId,
        "quantity": quantity,
        "price": 100
      };

      Cart.addProduct(product);

      // @todo: Move to $watch()?
      $scope.cart = Cart.gettingProducts();
    };

    $scope.$watch('cart', function() {
      $scope.productsCount = Cart.getProductsCount();
    });

    $scope.waitList = function() {
      alert('Add to waiting list');
    };

    /*

    $scope.sizes = {
      "small": {
        "entityId": 1,
        "stock": 100
      },
      "medium": {
        "entityId": 2,
        "stock": 50
      },
      "out": {
        "entityId": 3,
        "stock": 0
      }
    };

    */

    sizeServices.gettingSizes().then(function(sizes) {
      $scope.sizes = sizes;
    })



    $scope.cart = Cart.getProducts();
    $scope.productsCount = Cart.getProductsCount();

  }]);
