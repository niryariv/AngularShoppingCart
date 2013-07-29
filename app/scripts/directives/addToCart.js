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
          // Set the first selected size that is in stock.
          for (var key in sizes) {
            var size = sizes[key];
            if (size.available) {
              scope.product.selectedSize = size.id;
              break;
            }
          }
        });

        // Set the "avaialble" property.
        scope.$watch('product.selectedSize ', function(productID, oldval) {
          angular.forEach(scope.sizes, function(size, key){
            if (size.id == productID) {
              return scope.product.available = size.available;
            }
          });

          // scope.product.available = sizes[key].available;
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

