'use strict';

AngularShoppingCartApp.factory('ProductVariant', function ($http, localStorageService, $q) {
    return {

      gettingData: function (variantId) {
        var defer = $q.defer();

        var uniqueId = 'variant:' + variantId;

        var timestamp = new Date().getTime();

        // LocalStorage.
        var variantData = localStorageService.get(uniqueId) ? JSON.parse(localStorageService.get(uniqueId)) : false;

        if (!variantData || variantData.expire < timestamp) {
          // Fetch data from server.
          // @todo: Fix URL.
          $http.get('products/product.json').success(function(data) {
            // Cache values for 10 minutes.
            data.expire = timestamp + (60 * 10);
            // Add to localStorage.
            localStorageService.add(uniqueId, JSON.stringify(data));
            variantData = data;
          });
        }

        defer.resolve(variantData);
        return defer.promise;
      }
    };
  });
