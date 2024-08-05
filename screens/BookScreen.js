import {StyleSheet, Text, View} from 'react-native';
import {MainBg, MainLayout} from '../components/layout';
import {COLORS} from '../constant/colors';

const BookScreen = () => {
  return (
    <MainBg>
      <MainLayout style={{backgroundColor: COLORS.beige + 70}}></MainLayout>
    </MainBg>
  );
};

export default BookScreen;

const styles = StyleSheet.create({});
