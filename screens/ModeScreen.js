import {View} from 'react-native';
import {MainBg, MainLayout} from '../components/layout';
import {COLORS} from '../constant/colors';
import {Btn, IconReturn} from '../components/ui';

const ModeScreen = ({navigation}) => {
  return (
    <MainBg style={{flex: 1, backgroundColor: COLORS.black + 90}}>
      <MainLayout style={{justifyContent: 'center'}}>
        <Btn
          onPress={() => navigation.navigate('LevelsScreen', {level: 'easy'})}>
          EASY
        </Btn>
        <Btn
          onPress={() => navigation.navigate('LevelsScreen', {level: 'hard'})}>
          HARD
        </Btn>
        <View style={{position: 'absolute', bottom: 60, right: 70}}>
          <IconReturn />
        </View>
      </MainLayout>
    </MainBg>
  );
};

export default ModeScreen;
