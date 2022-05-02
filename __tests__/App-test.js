/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react-native';

it('renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders meters scale", () => {
  const { queryByTestId } = render(<App />)
  const meters = queryByTestId("meter")
  const pyramid = queryByTestId("pyramid")
  expect(meters).not.toEqual(null)
  expect(pyramid).toEqual(null)
})

it("updates UI when clicking on next button", () => {
  const { queryByTestId, getByTestId, container } = render(<App />)
  fireEvent.press(getByTestId('Next'))
  const pyramid = queryByTestId("pyramid")
  const meters = queryByTestId("meter")
  expect(pyramid).not.toEqual(null)
  expect(meters).toEqual(null)
})
