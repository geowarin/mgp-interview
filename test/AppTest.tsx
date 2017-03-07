import * as React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../src/components/App';

it('App should display an introduction message', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.text()).toContain("Welcome to React")
});

it('App should display a custom message', () => {
  const wrapper = shallow(<App message="Hello toto" />);

  expect(wrapper.text()).toContain("Hello toto")
});
