var React = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var expect = require('expect');

var App = require('../App');

describe('App', function () {
  it('renders without problems', function () {
    var component = TestUtils.renderIntoDocument(
      <App/>
    );

    expect(component).toExist();
    expect(TestUtils.isCompositeComponentWithType(
      component, App
    )).toBe(true);
  });
});
