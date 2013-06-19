'use strict';

angular.module('AngularShoppingCartApp')
  .directive('addToCart', function () {
    return {
      templateUrl: 'views/addtocart.html',
      restrict: 'E',
      // @todo: Add Isolated scope.
      link: function postLink(scope, element, attrs) {
      }
    };
  });
