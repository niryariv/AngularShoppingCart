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
        scope.lineItem = {};
        scope.lineItem.quantity = 1;

        scope.$watch('product.sizes', function(sizes, oldval) {
          // Set the first selected size that is in stock.
          for (var key in sizes) {
            var size = sizes[key];
            if (size.available) {
              scope.lineItem.sizeId = size.sizeId;
              break;
            }
          }
        });

        // Set the "available" property.
        scope.$watch('lineItem.sizeId ', function(lineItemID, oldval) {
          angular.forEach(scope.product.sizes, function(size, key){
            if (size.sizeId == lineItemID) {
              return scope.lineItem.available = size.available;
            }
          });
        });
      }
    };
  });

/**
 * Show a mini cart, with the lineItem quantity.
 */
angular.module('AngularShoppingCartApp')
  .directive('miniCart', function () {
    return {
      template: '<div>{{ lineItemsCount.length }}</div>',
      restrict: 'E',
      scope: {
        'lineItemsCount': '='
      }
    };
  });

/**
 * Show a mini cart, with the line Item quantity.
 */
angular.module('AngularShoppingCartApp')
  .directive('cartCheckout', function () {
    return {
      templateUrl: 'views/cart-checkout.html',
      restrict: 'E',
      scope: {
        'cart': '='
      }
    };
  });

