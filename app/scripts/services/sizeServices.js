'use strict';

angular.module('AngularShoppingCartApp')
  .factory('sizeServices', function (localStorageService, $q) {
    return {

      gettingSizes: function () {
        var defer = $q.defer();

        // LocalStorage.
        var sizes = localStorageService.get('sizes') ? JSON.parse(localStorageService.get('sizes')) : false;

        if (!sizes) {
          // HTTP.
          $http.get('product.json').success(function(data) {
            // Add to localStorage.
            sizes = data;
          });
        }

        defer.resolve(sizes);
        return defer.promise;
      }
    };
  });
