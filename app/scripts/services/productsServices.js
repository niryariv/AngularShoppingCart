'use strict';

angular.module('AngularShoppingCartApp', ['ngResource'])
  .factory('productsServices', function ($resource) {

    return $resource('products/products.json', {}, {
      // We query all the products at once.
      // @todo: Add option to limit those products.
      query: {method:'GET', isArray:true}
    });
  });
