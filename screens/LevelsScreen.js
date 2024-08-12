import {Text, View, Dimensions, StyleSheet} from 'react-native';
import {MainBg, MainLayout} from '../components/layout';
import {LevelsGrid} from '../components/levelsScreen';
import {COLORS} from '../constant/colors';
import {IconReset, IconReturn} from '../components/ui';

const {width} = Dimensions.get('window');
const ITEM_SIZE = width * 0.6;

const LevelsScreen = ({route}) => {
  const {level} = route.params;

  return (
    <MainBg style={{flex: 1}}>
      <MainLayout>
        <LevelShow level={level} />
        <LevelsGrid level={level} />
        <View style={styles.btnContainer}>
          <IconReset level={level} />
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

const styles = StyleSheet.create({
  btnContainer: {
    position: 'absolute',
    bottom: 60,
    right: 70,
    flexDirection: 'row',
    gap: 110,
    width: ITEM_SIZE,
  },
});
