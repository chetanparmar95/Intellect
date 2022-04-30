/**
 * @format
 */

import 'react-native';
import React from 'react';
import MetersScale from '../src/components/meters_scale';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react-native';

it('renders MetersScale correctly', () => {
    const tree = renderer.create(<MetersScale />).toJSON();
    expect(tree).toMatchSnapshot();
});

it("updates progress when slider value change", () => {
    const mockProgressCallback = jest.fn()
    const { getAllByTestId } = render(<MetersScale progress={2} onProgressChanges={mockProgressCallback} />)
    const progress = getAllByTestId('progressText')
    expect(progress[0].props.children).toBe(2)
    const slider = getAllByTestId("slider")
    slider[0].props.onValueChange(4)
    expect(mockProgressCallback).toBeCalledWith(4)
})
