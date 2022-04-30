import React from 'react'
import Level5 from './Level5';
import Level4 from './Level4';
import Level3 from './Level3';
import Level2 from './Level2';
import Level1 from './Level1';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../../utils/Colors';

//Component that renders Pyramid Scale
const PyramidScale = ({level, setLevel}) => {

    /**
     * 
     * @returns string based on the selected level
     */
    const selectedLevel = () => {
        switch(level){
            case 1:
                return "Very low";
            case 2:
                return "Low";
            case 3:
                return "Medium";
            case 4:
                return "High";
            case 5:
                return "Very high";
        }
    }

    return (
        <View testID='pyramid' style={styles.container}>
            {/* Shows anger level based on the scale selection */}
            <Text style={styles.angerLevel}>{selectedLevel()}</Text>
            {/* individual buttons for showing levels and click events for updating state */}
            <TouchableOpacity
                testID='level5'
                onPress={() => setLevel(5)}
                style={[styles.levelItem, { width: 270 }]}>
                <Level5 color={level == 5 ? 'white' : Colors.pyramidScaleUnselected} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => setLevel(4)}
                style={[styles.levelItem, { width: 220 }]}>
                <Level4 color={level >= 4 ? 'white' : Colors.pyramidScaleUnselected} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => setLevel(3)}
                style={[styles.levelItem, { width: 170 }]}>
                <Level3 color={level >= 3 ? 'white' : Colors.pyramidScaleUnselected} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => setLevel(2)}
                style={[styles.levelItem, { width: 120 }]}>
                <Level2 color={level >= 2 ? 'white' : Colors.pyramidScaleUnselected} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => setLevel(1)}
                style={[styles.levelItem, { width: 70 }]}>
                <Level1 color={level >= 1 ? 'white' : Colors.pyramidScaleUnselected} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginTop: 50
    },
    angerLevel: {
        color: 'white', 
        fontSize: 20, 
        marginBottom: 20
    },
    levelItem: {
        height: 42,
        backgroundColor: 'transparent',
        marginVertical: 5
    }
})
export default PyramidScale;