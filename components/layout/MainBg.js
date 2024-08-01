import {ImageBackground} from 'react-native';

const MainBg = ({children}) => {
  return (
    <ImageBackground
      source={require('../../assets/img/bg/BaselBg.jpg')}
      style={{flex: 1}}>
      {children}
    </ImageBackground>
  );
};

export default MainBg;
