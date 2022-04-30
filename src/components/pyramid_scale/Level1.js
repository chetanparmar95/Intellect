import React from 'react';
import Svg, { Polygon } from 'react-native-svg';

//This component draws polygon
const Level1 = ({color}) => {
    return (
        <Svg viewBox='0 0 5 4'>
            <Polygon
                points="1 0 C 2 0 3 0 4 0 C 6 0 4 4 3 4 C 3 4 3 4 2 4 C 1 4 -1 0 1 0"
                fill={color}
            />
        </Svg>
    )
}


export default Level1