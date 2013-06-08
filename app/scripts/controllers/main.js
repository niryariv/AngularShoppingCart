'use strict';

angular.module('AngularShoppingCartApp')
  .controller('MainCtrl', ['$scope', '$routeParams', 'localStorageService', 'Products', function ($scope, $routeParams, localStorageService, Products) {

    angularLocalStorage.constant('prefix', 'AngularShoppingCartApp');

    var productsInStore = localStorageService.get('products');

    // @todo: Add local storage.
    // $scope.products = productsInStore || Products.query();

    $scope.products = Products.query(function(products) {

      $scope.variants = products.variants;

      // Check if the variant exists, and if it's a valid key. Otherwise get the
      // first variant of the product.
      var variantId;
      if ($routeParams.variantId) {
        variantId = $routeParams.variantId;
      }
      else {
        for (var key in products.variants) {
          // Get the first variant ID.
          variantId = key;
          break
        }
      }

      $scope.variant = products.variants[variantId];
    });

    // $scope.$watch(function() {
      // localStorageService.add('products', $scope.products);
    // });

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
