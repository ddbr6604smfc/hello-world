import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import jsdomReact from '../helpers/jsdomReact';
import HelloWorld from '../../src/components/HelloWorld';

describe('HelloWorld component', () => {
  jsdomReact();

  it('should render correctly', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<HelloWorld />);

    const output = renderer.getRenderOutput();
    expect(output.type).toBe('h1');
    expect(output.props.children).toBe('Hello, World!');
  });
});
