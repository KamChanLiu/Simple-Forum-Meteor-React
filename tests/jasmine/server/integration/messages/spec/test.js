'use strict';

describe('Messages', function() {
  it('must be created with title and message', function() {
    var validMessage = {title: 'hello', message: 'world'};
    var invalidMessage = {};

    expect(function () { Messages.insert(validMessage); }).not.toThrow();
    expect(function () { Messages.insert(invalidMessage); }).toThrow();
  });
});
