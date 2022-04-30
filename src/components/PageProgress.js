import React from 'react';
import { StyleSheet, View } from 'react-native';

const PageProgress = ({page}) => {
    return (
        <View style={styles.container}>
            <View style={[styles.progressItem, { backgroundColor: page >= 1 ? 'white' : '#ffffff55' }]} />
            <View style={[styles.progressItem, { backgroundColor: page >= 2 ? 'white' : '#ffffff55' }]} />
            <View style={[styles.progressItem, { backgroundColor: page >= 3 ? 'white' : '#ffffff55' }]} />
            <View style={[styles.progressItem, { backgroundColor: page >= 4 ? 'white' : '#ffffff55' }]} />
            <View style={[styles.progressItem, { backgroundColor: page >= 5 ? 'white' : '#ffffff55' }]} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        height: 4, 
        marginHorizontal: 5, 
        marginTop: 10
    },
    progressItem: {
        marginHorizontal: 5, 
        flex: 1, 
        height: 4, 
        borderRadius: 2
    }
})

export default PageProgress