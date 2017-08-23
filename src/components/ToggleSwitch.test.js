import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

// yarn add enzyme react-test-renderer
import { shallow } from 'enzyme';

import ToggleSwitch from './ToggleSwitch';

/**
 * Setup a before each
 */


/**
 * This test mounts a component and makes sure that 
 * it didn’t throw during rendering. 
 */
it('ToggleSwitch renders without crashing', () => {
  shallow( <ToggleSwitch name="required-name" /> );
});

/**
 * jest-enzyme matchers https://github.com/blainekasten/enzyme-matchers
 * jest https://facebook.github.io/jest/docs/expect.html
 * enzyme http://airbnb.io/enzyme/docs/api/
 */
it('ToggleSwitch initial value should be TRUE if CHECKED', () => {
  const wrapper = shallow( <ToggleSwitch name='ui-test' checked/> );
  expect(wrapper.state('value')).toBe(true);
});

it('ToggleSwitch initial value should be FALSE if NOT CHECKED', () => {
  const wrapper = shallow( <ToggleSwitch name='ui-test'/> );
  expect(wrapper.state('value')).toBe(false);
});

it('ToggleSwitch value will change onClick', () => {
  const wrapper = shallow( <ToggleSwitch name='ui-test'/> );
  expect(wrapper.state('value')).toBe(false);
  wrapper.simulate('click');
  expect(wrapper.state('value')).toBe(true);
});

/**
 * Props
 */
it('ToggleSwitch must have a name on {props}', () => {
  const wrapper = shallow( <ToggleSwitch name='...'/> );
  const name = wrapper.instance().props.name;
  expect(name).toBeDefined();
});