import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useRef, useState, useEffect} from 'react';
import {Animated, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {GameProvider} from './store/context';
import {
  BookScreen,
  FlashScreen,
  LevelsScreen,
  MainScreen,
  ModeScreen,
  PlayGameScreen,
  ProfileScreen,
} from './screens';

const Stack = createNativeStackNavigator();

const frames = [
  require('./assets/img/frame/loader1.png'),
  require('./assets/img/frame/loader2.png'),
];

function App() {
  const [i, setI] = useState(0);
  const fadeItem = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    fadeStart();
    const timeOut = setTimeout(() => {
      navigateToMenu();
    }, 6000);
    return () => clearTimeout(timeOut);
  }, []);
  const fadeStart = () => {
    Animated.timing(fadeItem, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start(() => fadeFinish());
  };

  const fadeFinish = () => {
    Animated.timing(fadeItem, {
      toValue: 0,
      duration: 1500,
      useNativeDriver: true,
    }).start(() => {
      setI(prevState => prevState + 1);
      fadeStart();
    });
  };
  const navigateToMenu = () => {
    setI(2);
  };

  return (
    <GameProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {i < 2 ? (
            <Stack.Screen name="Welcome" options={{headerShown: false}}>
              {() => (
                <View style={{flex: 1}}>
                  <Animated.Image
                    source={frames[i]}
                    style={[{width: '100%', flex: 1}, {opacity: fadeItem}]}
                  />
                </View>
              )}
            </Stack.Screen>
          ) : (
            <Stack.Screen name="MainScreen" component={MainScreen} />
          )}
          {/* <Stack.Screen name="FlashScreen" component={FlashScreen} /> */}
          {/* <Stack.Screen name="MainScreen" component={MainScreen} /> */}
          <Stack.Screen name="ModeScreen" component={ModeScreen} />
          <Stack.Screen name="LevelsScreen" component={LevelsScreen} />
          <Stack.Screen name="PlayGameScreen" component={PlayGameScreen} />
          <Stack.Screen name="BookScreen" component={BookScreen} />
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GameProvider>
  );
}

export default App;
