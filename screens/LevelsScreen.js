import {Text, View} from 'react-native';
import {MainBg, MainLayout} from '../components/layout';
import {LevelsGrid} from '../components/levelsScreen';
import {useContext} from 'react';
import {GameContext} from '../store/context';
import {COLORS} from '../constant/colors';
import {IconReturn} from '../components/ui';

const LevelsScreen = ({route}) => {
  const {level} = route.params;
  const {choosenLevel} = useContext(GameContext);
  const data = choosenLevel(level);

  return (
    <MainBg style={{flex: 1, backgroundColor: COLORS.black + 90}}>
      <MainLayout>
        <LevelShow level={level} />
        <LevelsGrid level={level} />
        <View style={{position: 'absolute', bottom: 60, right: 70}}>
          <IconReturn />
        </View>
      </MainLayout>
    </MainBg>
  );
};

export default LevelsScreen;

const LevelShow = ({level}) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.maroon,
        paddingVertical: 20,
        paddingHorizontal: 15,
        borderRadius: 32,
      }}>
      <Text style={{fontSize: 26, color: COLORS.beige, fontWeight: '600'}}>
        {level.toUpperCase()}
      </Text>
    </View>
  );
};
