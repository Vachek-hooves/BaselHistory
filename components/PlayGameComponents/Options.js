import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../constant/colors';

const Options = ({options}) => {
  return (
    <>
      {options.map((option, index) => (
        <View key={index} style={styles.container}>
          <Text style={styles.text}>{option}</Text>
        </View>
      ))}
    </>
  );
};

export default Options;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    backgroundColor: COLORS.warm,
    borderRadius: 32,
    padding: 5,
    height: 70,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontWeight: '800',
    color: COLORS.maroon,
    fontSize: 20,
  },
});
