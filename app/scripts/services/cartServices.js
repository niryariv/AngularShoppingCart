'use strict';

AngularShoppingCartApp.factory('Cart', function (localStorageService, $q) {

  return {

    cart: {'items': []},

    /**
     * Return all the cart items (products, line items).
     */
    getCart: function() {
      var values = localStorageService.get('cart');
      if (values) {
        this.cart = values;
      }
      return this.cart;
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
    addItem: function(item, product) {
      var self = this;
      angular.forEach(this.cart.items, function(values, key) {
        if (values.product.id == product.id) {
          // Add quantity.
          self.cart.items[key].item.quantity += item.quantity;
          return;
        }
      });

      this.cart.items.push({"item": item, "product": product});
      localStorageService.add('cart', JSON.stringify(this.cart));

    },

    removeProduct: function(product) {
    }

  };
});
