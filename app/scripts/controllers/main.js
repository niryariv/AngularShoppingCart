'use strict';

angular.module('AngularShoppingCartApp')
  .controller('MainCtrl', ['$scope', 'Products', 'Cart', function ($scope, Products, Cart) {

    // angularLocalStorage.constant('prefix', 'AngularShoppingCartApp');

    $scope.setActiveSize = function(size) {
      $scope.activeSize = size;
    };

    $scope.addToCart = function(quantity) {
      var entityId = $scope.sizes[$scope.activeSize].entityId;
      $scope.cart[entityId] = {
        "quantity": quantity,
        "price": 100,
      };

      // @todo: Move to $watch()?
      Cart.setCart($scope.cart);
    };

    $scope.waitList = function() {
      alert('Add to waiting list');
    };

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

    $scope.quantity = 1;
    $scope.cart = Cart.getCart();

    // Assign a defualt active size.
    for (var size in $scope.sizes) {
      if ($scope.sizes[size].stock) {
        $scope.activeSize = size;
        break;
      }
    }


  }]);
