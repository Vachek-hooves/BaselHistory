import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {MainLayout} from '../components/layout';

const MainScreen = ({navigation}) => {
  return (
    <MainLayout>
      <TouchableOpacity style={styles.btnStyle} onPress={()=>navigation.navigate('ModeScreen')}>
        <Text>Start</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnStyle}>
        <Text>Book of knowledge</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnStyle}>
        <Text>Profile</Text>
      </TouchableOpacity>
    </MainLayout>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  btnStyle: {padding: 20, borderWidth: 1, width: '50%', marginVertical: 20},
  text: {},
});
