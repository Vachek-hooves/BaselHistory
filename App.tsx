import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {GameProvider} from './store/context';
import {
  FlashScreen,
  LevelsScreen,
  MainScreen,
  ModeScreen,
  PlayGameScreen,
} from './screens';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <GameProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="FlashScreen" component={FlashScreen} />
          <Stack.Screen name="MainScreen" component={MainScreen} />
          <Stack.Screen name="ModeScreen" component={ModeScreen} />
          <Stack.Screen name="LevelsScreen" component={LevelsScreen} />
          <Stack.Screen name="PlayGameScreen" component={PlayGameScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GameProvider>
  );
}

export default App;
