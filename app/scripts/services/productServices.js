'use strict';

AngularShoppingCartApp.factory('Product', function ($http, localStorageService, $q) {
    return {

      gettingData: function (productId) {
        var defer = $q.defer();

        var uniqueId = 'product:' + productId;

        var timestamp = new Date().getTime();

        // LocalStorage.
        var productData = localStorageService.get(uniqueId) ? localStorageService.get(uniqueId) : false;


        if (!productData || productData.expire < timestamp) {
          // Fetch data from server.
          // @todo: Fix URL.
          $http.get('products/product.json').success(function(data) {
            // Cache values for 10 minutes.
            data.expire = timestamp + (60 * 10);
            // Add to localStorage.
            localStorageService.add(uniqueId, JSON.stringify(data));
            productData = data;
          });
        }

        defer.resolve(productData);
        return defer.promise;
      }
    };
  });
