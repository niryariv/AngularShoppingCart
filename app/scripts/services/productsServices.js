'use strict';

angular.module('productsServices', ['ngResource'])
  .factory('Products', function ($resource) {

    return $resource('products/:productId.json');
  });
