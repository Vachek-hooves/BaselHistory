import {Image, TouchableOpacity} from 'react-native';
import {COLORS} from '../../constant/colors';
import {useNavigation} from '@react-navigation/native';

const IconReturn = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image
        source={require('../../assets/img/icons/back.png')}
        style={{width: 50, height: 50, tintColor: COLORS.beige}}
      />
    </TouchableOpacity>
  );
};

export default IconReturn;
