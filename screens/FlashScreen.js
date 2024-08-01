import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {MainBg, MainLayout} from '../components/layout';

const FlashScreen = ({navigation}) => {
  return (
    <MainBg>
      <MainLayout>
        <Text style={styles.text}>YOU ARE WELCOME </Text>
        <Text style={styles.text}>BASEL HISTORY QUIZ</Text>
        <TouchableOpacity
          style={{padding: 20, borderWidth: 1}}
          onPress={() => navigation.navigate('MainScreen')}>
          <Text>MAIN PAGE</Text>
        </TouchableOpacity>
      </MainLayout>
    </MainBg>
  );
};

export default FlashScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 55,
    fontWeight: '800',
    textAlign: 'center',
    color: 'white',
  },
});
