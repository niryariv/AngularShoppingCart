'use strict';

angular.module('AngularShoppingCartApp')
  .directive('addToCart', function () {
    return {
      templateUrl: 'views/addtocart.html',
      restrict: 'E',
      // Isolated scope.
      scope: {
        sizes: '=sizes'
      },
      link: function postLink(scope, element, attrs) {
      }
    };
  });
