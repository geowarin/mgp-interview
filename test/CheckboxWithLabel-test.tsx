import * as React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../src/components/App';

it('App should display text', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.text()).toContain("Welcome to React")
});
