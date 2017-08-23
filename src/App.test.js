import React from 'react';
import ReactDOM from 'react-dom';

// yarn add enzyme react-test-renderer
import { shallow } from 'enzyme';

import App from './App';
import ToggleSwitch from './components/ToggleSwitch';

/**
 * Setup a before each
 */


/**
 * This test mounts a component and makes sure that 
 * it didn’t throw during rendering. 
 */
it('App renders without crashing', () => {
  shallow( <App /> );
});


/**
 * jest-enzyme matchers https://github.com/blainekasten/enzyme-matchers
 */
it('App should contain a toggle-switch size: Small', () => {
  const wrapper = shallow( <App /> );
  expect(wrapper).toContainReact(<ToggleSwitch name='ui-test' size='Small' checked/>);
});

it('App should contain a toggle-switch size: Medium', () => {
  const wrapper = shallow( <App /> );
  expect(wrapper).toContainReact(<ToggleSwitch name='ui-test' size='Medium' />);
});

it('App should contain a toggle-switch size: Large', () => {
  const wrapper = shallow( <App /> );
  expect(wrapper).toContainReact(<ToggleSwitch name='ui-test' size='Large' />);
});