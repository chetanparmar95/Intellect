import React from 'react';
import Svg, { Polygon } from 'react-native-svg';

const Level5 = ({color}) => {
    return (
        <Svg viewBox='0 0 25 4'>
            <Polygon
                points="1 0 C 10.6667 0 19.3333 0 24 0 C 26 0 24 4 23 4 C 19 4 11 4 2 4 C 1 4 -1 0 1 0"
                fill={color}
            />
        </Svg>
    )
}


export default Level5