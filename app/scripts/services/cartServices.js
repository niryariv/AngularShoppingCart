'use strict';

AngularShoppingCartApp.factory('Cart', function (localStorageService, $q) {

  return {

    data: {
      "cart": {
        "lineItems": []
      }
    },

    /**
     * Return all the cart items (products, line items).
     */
    gettingCart: function() {
      var defer = $q.defer();

      var values = localStorageService.get('cart');
      if (values) {
        this.data.cart = values;
      }

      defer.resolve(this.data.cart);
      return defer.promise;
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
      return this.getItems('lineItems');
    },

    addLineItem: function(name, price) {

    },

    /**
     * Iterate over existing products, and add a new product, or append
     * to and existing one.
     *
     * @param product
     */
    addItem: function(lineItem, product) {
      var self = this;
      var itemExists = false;
      angular.forEach(this.data.cart.lineItems, function(values, key) {
        if (values.sizeId == lineItem.sizeId) {
          // Add quantity.
          self.data.cart.lineItems[key].quantity += lineItem.quantity;
          itemExists = true;
          return;
        }
      });

      if (!itemExists) {
        this.data.cart.lineItems.push(angular.extend({}, lineItem, product));
      }

      localStorageService.add('cart', JSON.stringify(this.data.cart));
    },

    removeProduct: function(product) {
    }

  };
});
