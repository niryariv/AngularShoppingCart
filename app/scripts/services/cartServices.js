'use strict';

AngularShoppingCartApp.factory('Cart', function (localStorageService, $q) {

  return {

    data: {
      "cart": {
        "lineItems": [],
        "quantity": 0,
        "total": 0
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

    /**
     * Iterate over existing products, and add a new product, or append
     * to and existing one.
     *
     * @param product
     */
    addLineItem: function(lineItem, product) {
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

      this.data.cart.quantity += lineItem.quantity;
      this.data.cart.total += lineItem.quantity * product.price[0].usd;

      localStorageService.add('cart', JSON.stringify(this.data.cart));
    },

    removeProduct: function(product) {
    }

  };
});
