'use strict';

angular.module('productsServices')
  .factory('Products', function ($resource) {

    return $resource('products/:productId.json');
  });
