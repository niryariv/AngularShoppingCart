'use strict';

angular.module('cartServices')
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

      getProductsCount: function() {
        var products = this.getProducts();

        if (!products) {
          return 0;
        }

        var count = 0;
        for (var key in products) {
          ++count;
        }

        return count;
      },

      getLineItems: function() {
        return this.getItems('lineItems');
      },

      addProduct: function(product) {
        var products = this.getProducts();

        products[product.entityId] = product;

        localStorageService.add('cart.products', JSON.stringify(products));
      },

      addLineItem: function(name, price) {

      }

    };
  });
