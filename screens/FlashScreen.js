import {StyleSheet, Text, View} from 'react-native';
import {MainBg, MainLayout} from '../components/layout';
import {Btn} from '../components/ui';
import {COLORS} from '../constant/colors';

const FlashScreen = ({navigation}) => {
  return (
    <MainBg>
      <MainLayout>
        <View style={{marginBottom: '70%'}}>
          <Text style={styles.text}>YOU ARE WELCOME </Text>
          <Text style={styles.text}>BASEL HISTORY QUIZ</Text>
        </View>
        <Btn onPress={() => navigation.navigate('MainScreen')}>MAIN PAGE</Btn>
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
    color: COLORS.beige,
  },
});
