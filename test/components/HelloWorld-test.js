import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import HelloWorld from '../../src/components/HelloWorld';

describe('HelloWorld component', () => {
  it('should render correctly', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<HelloWorld />);

    const output = renderer.getRenderOutput();
    expect(output.type).toBe('h1');
    expect(output.props.children).toBe('Hello, World!');
  });
});
