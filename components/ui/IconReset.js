import {Image, TouchableOpacity} from 'react-native';
import {COLORS} from '../../constant/colors';
import {useContext} from 'react';
import {GameContext} from '../../store/context';

const IconReset = ({level}) => {
  const {resetLevelHandler} = useContext(GameContext);
  function resetFunctionCall() {
    resetLevelHandler(level);
  }

  return (
    <TouchableOpacity onPress={resetFunctionCall}>
      <Image
        source={require('../../assets/img/icons/resetFinger.png')}
        style={{width: 50, height: 50, tintColor: COLORS.beige}}
      />
    </TouchableOpacity>
  );
};

export default IconReset;
