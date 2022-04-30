import React from 'react';
import Svg, { Polygon } from 'react-native-svg';

const Level3 = ({color}) => {
    return (
        <Svg viewBox='0 0 15 4'>
            <Polygon
                points="1 0 C 2 0 3 0 14 0 C 16 0 14 4 13 4 C 4 4 3 4 2 4 C 1 4 -1 0 1 0"
                fill={color}
            />
        </Svg>
    )
}


export default Level3