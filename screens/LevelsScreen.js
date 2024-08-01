import {StyleSheet, Text, Vibration, View} from 'react-native';
import {MainLayout} from '../components/layout';
import {LevelsGrid} from '../components/levelsScreen';
import {useContext} from 'react';
import {GameContext} from '../store/context';

const LevelsScreen = ({route}) => {
  const {level} = route.params;
  const {choosenLevel} = useContext(GameContext);
  const DATA = choosenLevel(level);
  console.log(DATA);

  return (
    <MainLayout>
      {/* <View style={{flex: 1, justifyContent: 'center'}}> */}
        <Text>{level}</Text>
        <LevelsGrid data={DATA} />
      {/* </View> */}
    </MainLayout>
  );
};

export default LevelsScreen;

const styles = StyleSheet.create({});
