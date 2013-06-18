'use strict';

angular.module('AngularShoppingCartApp')
  .controller('MainCtrl', ['$scope', 'Products', function ($scope, Products) {

    // angularLocalStorage.constant('prefix', 'AngularShoppingCartApp');

    $scope.sizes = {
      "small": {
        "entityId": 1,
        "stock": 100
      },
      "medium": {
        "entityId": 2,
        "stock": 50
      }
    };

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
