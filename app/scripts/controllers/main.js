'use strict';

angular.module('AngularShoppingCartApp')
  .controller('MainCtrl', ['$scope', 'Products', function ($scope, Products) {

    // angularLocalStorage.constant('prefix', 'AngularShoppingCartApp');

    $scope.sizes = {'small': 1, 'medium': 2};

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
