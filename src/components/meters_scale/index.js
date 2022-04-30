import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Slider from 'react-native-slider'
import Colors from '../../utils/Colors';

const gif = require('../../assets/images/headspace-progressbar.gif')
const width = Dimensions.get('window').width

//Component that renders progress circle and slider
const MetersScale = ({ progress, onProgressChanges}) => {
    return (
        <View testID='meter' style={styles.container}>
            {/* Outer dashed circle  */}
            <View style={styles.dashedCircle}>
                {/* Image container which includes image in center, progress count and animated circular progress */}
                <View style={styles.imageContainer}>
                    <Image style={styles.gif} source={gif} />
                    <Text testID='progressText' style={styles.progressCount}>
                        {Math.round(progress)}
                    </Text>
                    <AnimatedCircularProgress
                        size={width * 0.625}
                        width={5}
                        fill={progress * 10}
                        tintColor="#FFF"
                        rotation={-0}
                        backgroundWidth={10}
                        lineCap={'round'}
                        style={{ position: 'absolute' }}
                        onAnimationComplete={() => {}}
                        backgroundColor="transparent" />
                </View>
            </View>
            {/* Slider for updating progress */}
            <View style={styles.sliderContainer}>
                <Slider
                    testID={"slider"}
                    trackStyle={styles.trackStyle}
                    thumbStyle={styles.thumbStyle}
                    minimumTrackTintColor={Colors.sliderTint}
                    value={progress}
                    onValueChange={value => onProgressChanges(value)}
                    minimumValue={0}
                    maximumValue={10}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'space-evenly', 
        marginVertical: 50
    },
    dashedCircle: {
        width: width * 0.8,
        height: width * 0.8,
        borderColor: Colors.dashedBorder, 
        borderWidth: 1,
        borderRadius: width * 0.8 / 2, 
        borderStyle: 'dashed',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer:{
        width: width * 0.6, 
        height: width * 0.6,
        borderRadius: width * 0.6 / 2, 
        backgroundColor: Colors.imageBackground,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center'
    },
    gif:{
        width: width * 0.5, 
        height: width * 0.5
    },
    progressCount: {
        position: 'absolute', 
        color: 'white',
        fontSize: 32, 
        fontWeight: 'bold'
    },
    sliderContainer: {
        width: width * 0.8, 
        alignSelf: 'center'
    },
    trackStyle: {
        height: 10,
        borderRadius: 4,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 1,
        shadowOpacity: 0.15,
    },
    thumbStyle: {
        width: 20,
        height: 20,
        backgroundColor: Colors.sliderTint,
        borderColor: Colors.sliderThumbBorder,
        borderWidth: 3,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
        shadowOpacity: 0.35,
    }
})

export default MetersScale;