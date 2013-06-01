'use strict';

angular.module('AngularShoppingCartApp')
  .controller('MainCtrl', ['$scope', 'localStorageService', function ($scope, localStorageService) {

    angularLocalStorage.constant('prefix', 'AngularShoppingCartApp');

    var productsInStore = localStorageService.get('products');
    $scope.products = productsInStore || [];
    $scope.$watch(function() {
      localStorageService.add('products', $scope.products);
    });

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
