'use strict';

describe('Service: cartServices', function () {

  // load the service's module
  beforeEach(module('AngularShoppingCartApp'));

  // instantiate service
  var cartServices;
  beforeEach(inject(function (_cartServices_) {
    cartServices = _cartServices_;
  }));

  it('should do something', function () {
    expect(!!cartServices).toBe(true);
  });

});
