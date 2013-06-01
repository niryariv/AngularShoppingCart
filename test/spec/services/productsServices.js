'use strict';

describe('Service: productsServices', function () {

  // load the service's module
  beforeEach(module('AngularShoppingCartApp'));

  // instantiate service
  var productsServices;
  beforeEach(inject(function (_productsServices_) {
    productsServices = _productsServices_;
  }));

  it('should do something', function () {
    expect(!!productsServices).toBe(true);
  });

});
