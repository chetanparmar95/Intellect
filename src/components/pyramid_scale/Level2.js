import React from 'react';
import Svg, { Polygon } from 'react-native-svg';

const Level2 = ({color}) => {
    return (
        <Svg viewBox='0 0 10 4'>
            <Polygon
                points="1 0 C 2 0 3 0 9 0 C 11 0 9 4 8 4 C 4 4 3 4 2 4 C 1 4 -1 0 1 0"
                fill={color}
            />
        </Svg>
    )
}


export default Level2