'use strict';

// TODO: Move to respective packages

describe('Categories', function() {
  it('must be created with a name', function() {
    var validMessage = {name: 'hello', active: true};
    var invalidMessage = {};

    expect(function () { Categories.insert(validMessage); }).not.toThrow();
    expect(function () { Categories.insert(invalidMessage); }).toThrow();
  });
});
