'use strict';

angular.module('productsServices', ['ngResource'])
  .factory('Products', function ($resource) {

    return $resource(':productId.json', {}, {
      // We query all the products at once.
      query: {method:'GET', params:{productId: 'products'}, isArray: false}
    });
  });
