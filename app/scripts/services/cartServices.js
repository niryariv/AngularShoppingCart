'use strict';

angular.module('cartServices', ['LocalStorageModule'])
  .factory('Cart', function (localStorageService) {

    return {

      /**
       * Return all the cart items (products, line items).
       */
      getCart: function() {
        var values = localStorageService.get('cart');
        if (values == undefined) {
          return {};
        }
        return JSON.parse(values);
      },

      /**
       * Clear all the cart items (products, line items).
       */
      clearCart: function() {
        localStorageService.clearAll();
      },


      /**
       * Return items of a certain type.
       *
       * @param type
       *   - products
       *   - lineItems
       */
      getItems: function(type) {
        var name = 'cart.' + type;
        return localStorageService.get(name) ? JSON.parse(localStorageService.get(name)) : {};
      },

      getProducts: function() {
        return this.getItems('products');
      },

      getLineItems: function() {
        return this.getItems('LineItems');
      },

      addProduct: function(values) {
        var products = this.getProducts();

        // Check if we already have this product, and append the quantity.

        localStorageService.add('cart.products', JSON.stringify(values));
      },

      addLineItem: function(name, price) {

      }

    };
  });
