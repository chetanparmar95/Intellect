/**
 * @format
 */

import 'react-native';
import React from 'react';
import PageProgress from '../src/components/PageProgress';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders PageProgress correctly', () => {
    const tree = renderer.create(<PageProgress />).toJSON();
    expect(tree).toMatchSnapshot();
});
