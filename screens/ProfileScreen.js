import {StyleSheet, Text, View} from 'react-native';
import {MainBg, MainLayout} from '../components/layout';
import {COLORS} from '../constant/colors';

const ProfileScreen = () => {
  return (
    <MainBg>
      <MainLayout style={{backgroundColor: COLORS.black + 90}}></MainLayout>
    </MainBg>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
