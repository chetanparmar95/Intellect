import React from 'react';
import Svg, { Polygon } from 'react-native-svg';

const Level4 = ({color}) => {
    return (
        <Svg viewBox='0 0 20 4'>
            <Polygon
                points="1 0 C 10.6667 0 13 0 19 0 C 21 0 19 4 18 4 C 12 4 11 4 2 4 C 1 4 -1 0 1 0"
                fill={color}
            />
        </Svg>
    )
}


export default Level4