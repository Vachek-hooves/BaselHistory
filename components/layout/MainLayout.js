import {SafeAreaView, View} from 'react-native';

const MainLayout = ({children}) => {
  return (
    // <View>
    <SafeAreaView
      style={{alignItems: 'center', flex: 1, justifyContent: 'center'}}>
      {children}
    </SafeAreaView>
    // </View>
  );
};

export default MainLayout;
