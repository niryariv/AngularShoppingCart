'use strict';

angular.module('AngularShoppingCartApp')
  .directive('addToCart', function () {
    return {
      templateUrl: 'views/addtocart.html',
      restrict: 'E',
      // @todo: Add Isolated scope.
      link: function postLink(scope, element, attrs) {
      }
    };
  });

/**
 * Show a mini cart, with the item quantity.
 */
angular.module('AngularShoppingCartApp')
  .directive('miniCart', function () {
    return {
      template: '<div>{{ productsCount }}</div>',
      restrict: 'E'
      // @todo: Add Isolated scope.
    };
  });

/**
 * Show a mini cart, with the item quantity.
 */
angular.module('AngularShoppingCartApp')
  .directive('cartCheckout', function () {
    return {
      templateUrl: 'views/cart-checkout.html',
      restrict: 'E',
      // @todo: Add Isolated scope.
      scope: {
        'products': '='
      }
    };
  });

