'use strict';

angular.module('AngularShoppingCartApp')
  .controller('MainCtrl', ['$scope', 'localStorageService', 'Products', function ($scope, localStorageService, Products) {

    angularLocalStorage.constant('prefix', 'AngularShoppingCartApp');

    var productsInStore = localStorageService.get('products');
    $scope.products = productsInStore || Products.get();
    $scope.$watch(function() {
      localStorageService.add('products', $scope.products);
    });

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
