import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {MainLayout} from '../components/layout';

const ModeScreen = ({navigation}) => {
  return (
    <MainLayout>
      <TouchableOpacity
        style={styles.btnStyle}
        onPress={() =>
          navigation.navigate('LevelsScreen', {level: 'easy'})
        }>
        <Text>EASY</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnStyle}
        onPress={() =>
          navigation.navigate('LevelsScreen', {level: 'hard'})
        }>
        <Text>HARD</Text>
      </TouchableOpacity>
    </MainLayout>
  );
};

export default ModeScreen;

const styles = StyleSheet.create({
  btnStyle: {padding: 20, borderWidth: 1, width: '50%', marginVertical: 20},
  text: {},
});
