'use strict';

angular.module('AngularShoppingCartApp')
  .directive('addToCart', function () {
    return {
      templateUrl: 'views/addtocart.html',
      restrict: 'E',
      scope: {
        "product": '=',
        "onAddToCart": '&'
      },
      link: function(scope, element, attrs) {
        scope.item = {};
        scope.item.quantity = 1;

        scope.$watch('product.sizes', function(sizes, oldval) {
          // Set the first selected size that is in stock.
          for (var key in sizes) {
            var size = sizes[key];
            if (size.available) {
              scope.item.selectedSize = size.id;
              break;
            }
          }
        });

        // Set the "avaialble" property.
        scope.$watch('item.selectedSize ', function(itemID, oldval) {
          angular.forEach(scope.product.sizes, function(size, key){
            if (size.id == itemID) {
              return scope.item.available = size.available;
            }
          });
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
      template: '<div>{{ itemsCount.length }}</div>',
      restrict: 'E',
      scope: {
        'itemsCount': '='
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

