'use strict';

angular.module('AngularShoppingCartApp', ['LocalStorageModule', 'productsServices'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/products/:productId', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/products/:productId/:variantId', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
