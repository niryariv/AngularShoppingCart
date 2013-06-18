'use strict';

describe('Directive: addToCart', function () {
  beforeEach(module('AngularShoppingCartApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<add-to-cart></add-to-cart>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the addToCart directive');
  }));
});
