/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

import PageProgress from './src/components/PageProgress';
import PyramidScale from './src/components/pyramid_scale';
import MetersScale from './src/components/meters_scale';
import Colors from './src/utils/Colors';

const closeIcon = <Ionicons name="close-outline" size={30} color="#fff" />;

const App = () => {
  const [progress, setProgress] = useState(1) //for maintaining progress of meter scale
  const [level, setLevel] = useState(3) // for maintaining level of pyramid scale
  const [page, setPage] = useState(1) // for maintaining current page indicator
  
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar barStyle={'light-content'} />
      {/* PageProgress indicates current page*/}
      <PageProgress page={page}/>
      <View style={styles.container}>
        {/* For showing current session type */}
        <View style={styles.sessionView}>
          <Text style={styles.sessionText}>RESCUE SESSION: ANGER & FRUSTRATION</Text>
          {closeIcon}
        </View>

        <Text style={styles.headerText}>
          Pick the level your anger & frustration right now
        </Text>
        {/* showing widgets based on the page  */}
        {page == 1 && <MetersScale progress={progress} onProgressChanges = {setProgress}/>}
        {page == 2 && <PyramidScale level={level} setLevel={setLevel}/>}
        {/* Button for navigating between the pages  */}
        <TouchableOpacity testID='Next' activeOpacity={0.8} style={styles.button} onPress={() => setPage(2)}>
          <Text style={styles.buttonText}>{"Next"}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: Colors.primary,
    flex: 1,
  },
  container:{
    marginHorizontal: 10, 
    flex: 1, 
    marginBottom: 5
  },
  sessionView:{
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    marginTop: 10
  },
  sessionText:{
    color: 'white', 
    fontSize: 12
  },
  headerText:{
    color: 'white', 
    fontSize: 18, 
    fontWeight: 'bold', 
    marginTop: 15
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
    elevation: 3,
    backgroundColor: 'white',
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
});

export default App;
