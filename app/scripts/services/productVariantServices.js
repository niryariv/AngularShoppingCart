'use strict';

AngularShoppingCartApp.factory('ProductVariant', function ($http, localStorageService, $q) {
    return {

      gettingData: function (productId) {
        var defer = $q.defer();

        var uniqueId = 'product:' + productId;

        // LocalStorage.
        var sizes = localStorageService.get(uniqueId) ? JSON.parse(localStorageService.get(uniqueId)) : false;

        if (!sizes) {
          // HTTP.
          $http.get('product.json').success(function(data) {
            // Add to localStorage.
            localStorageService.set(uniqueId, data);
            sizes = data;
          });
        }

        defer.resolve(sizes);
        return defer.promise;
      }
    };
  });
