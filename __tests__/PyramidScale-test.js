/**
 * @format
 */

import 'react-native';
import React from 'react';
import PyramidScale from '../src/components/pyramid_scale';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react-native';

it('renders PyramidScale correctly', () => {
    const tree = renderer.create(<PyramidScale />).toJSON();
    expect(tree).toMatchSnapshot();
});

it("updates level on item press", () => {
    const mockLevelCallback = jest.fn()
    const { getAllByTestId } = render(<PyramidScale level={1} setLevel={mockLevelCallback}/>)
    const level5Button = getAllByTestId("level5")
    fireEvent.press(level5Button[0])
    expect(mockLevelCallback).toBeCalledWith(5)
})