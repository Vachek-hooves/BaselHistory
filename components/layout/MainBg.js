import {ImageBackground, View} from 'react-native';

const MainBg = ({children, style}) => {
  return (
    <ImageBackground
      // source={require('../../assets/img/bg/BaselBg.jpg')}
      source={require('../../assets/img/bg/bg.png')}
      style={{flex: 1}}>
      <View style={[style, {flex: 1}]}>{children}</View>
    </ImageBackground>
  );
};

export default MainBg;
