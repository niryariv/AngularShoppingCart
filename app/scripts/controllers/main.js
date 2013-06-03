'use strict';

angular.module('AngularShoppingCartApp')
  .controller('MainCtrl', ['$scope', '$routeParams', 'localStorageService', 'Products', function ($scope, $routeParams, localStorageService, Products) {

    angularLocalStorage.constant('prefix', 'AngularShoppingCartApp');

    var productsInStore = localStorageService.get('products');

    // @todo: Add local storage.
    // $scope.products = productsInStore || Products.query();

    // @todo: Remove hardcoding and get the productID form the URL.
    var productID = 1;

    $scope.products = Products.query(function(products) {
      console.log(products);


      // Check if the variant exists, and if it's a valid key. Otherwise get the
      // first variant of the product.
      var defaultVariant;
      for (var key in products[productID].variants) {
        // Get the first variant ID.
        defaultVariant = key;
        break
      }

      $scope.variant = $routeParams.variantId || defaultVariant;
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
