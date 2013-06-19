'use strict';

angular.module('cartServices', ['LocalStorageModule'])
  .factory('Cart', function (localStorageService) {

    return {
      getCart: function() {
        var values = localStorageService.get('cart');
        if (values == undefined) {
          return {};
        }
        return JSON.parse(values);
      },

      setCart: function(values) {
        this.clearCart();
        localStorageService.add('cart', JSON.stringify(values));
      },

      clearCart: function() {
        localStorageService.clearAll();
      }
    };
  });
