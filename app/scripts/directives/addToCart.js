'use strict';

angular.module('AngularShoppingCartApp')
  .directive('addToCart', function () {
    return {
      templateUrl: 'views/addtocart.html',
      restrict: 'E',
      scope: {
        "sizes": '=',
        "onAddToCart": '&'
      },
      link: function(scope, element, attrs) {

        scope.product = {};
        scope.product.quantity = 1;

        scope.$watch('sizes', function(sizes, oldval) {
          // Assign a default active size.
          if (!sizes) {
            return;
          }

          for (var size in sizes) {
            if (sizes[size].stock) {
              scope.product.selectedSize = size;
              break;
            }
          }
        });
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
      restrict: 'E',
      scope: {
        'productsCount': '@'
      }
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
      scope: {
        'products': '='
      }
    };
  });

