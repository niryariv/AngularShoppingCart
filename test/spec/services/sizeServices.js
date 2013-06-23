'use strict';

describe('Service: sizeServices', function () {

  // load the service's module
  beforeEach(module('AngularShoppingCartApp'));

  // instantiate service
  var sizeServices;
  beforeEach(inject(function (_sizeServices_) {
    sizeServices = _sizeServices_;
  }));

  it('should do something', function () {
    expect(!!sizeServices).toBe(true);
  });

});
