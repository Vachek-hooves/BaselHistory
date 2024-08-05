import {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  Animated,
  Pressable,
  Image,
  ImageBackground,
} from 'react-native';
import {useContext} from 'react';
import {GameContext} from '../../store/context';
import {COLORS} from '../../constant/colors';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import {IconLock} from '../ui';

const {width} = Dimensions.get('window');

const SPACING = 10;
const ITEM_SIZE = width * 0.74;
const SPACER_ITEM_SIZE = (width - ITEM_SIZE) / 2;

const LevelsGrid = ({level}) => {
  const {choosenLevel, } = useContext(GameContext);
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const [gameData, setGameData] = useState([]);
  const scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const loadData = async () => {
      const DATA = await choosenLevel(level);

      if (Array.isArray(DATA) && DATA.length > 0) {
        setGameData([{key: 'leftSpacer'}, ...DATA, {key: 'rightSpacer'}]);
      } else {
        console.error('Provided data is not an array or is empty:', DATA);
      }
    };

    if (isFocused) {
      // Load data only when the screen is focused
      loadData();
    }
  }, [isFocused]); // Dependency on isFocused

  function renderList({item, index}) {
    // console.log(item.id);
    const itemId = item.id;

    const levelIsLocked = item?.isClose;

    if (!item.subject) {
      return (
        <View
          style={{
            width: SPACER_ITEM_SIZE,
          }}
        />
      );
    }
    const inputRange = [
      (index - 2) * ITEM_SIZE,
      (index - 1) * ITEM_SIZE,
      index * ITEM_SIZE,
    ];
    const translateY = scrollX.interpolate({
      inputRange,
      outputRange: [30, -50, 30],
    });

    return (
      <Pressable
        disabled={levelIsLocked}
        onPress={() => navigation.navigate('PlayGameScreen', {level, itemId})}
        style={({pressed}) => [
          pressed ? [styles.pressed, {width: ITEM_SIZE}] : {width: ITEM_SIZE},
        ]}>
        <Animated.View
          style={[
            styles.itemContainer,
            {
              transform: [{translateY}],
              backgroundColor: levelIsLocked
                ? COLORS.black + 90
                : COLORS.maroon,
            },
          ]}>
          <ImageBackground source={{uri: item.image}} style={[styles.image]}>
            <View
              style={{
                backgroundColor: levelIsLocked ? COLORS.black + 90 : null,
                flex: 1,
              }}
            />
          </ImageBackground>
          <View style={styles.textContainer}>
            <Text
              style={[
                styles.text,
                {color: levelIsLocked ? COLORS.black + 40 : COLORS.maroon},
              ]}>
              {item.subject}
            </Text>
          </View>
          {levelIsLocked ? (
            <View
              style={{
                position: 'absolute',
                left: '40%',
              }}>
              <IconLock />
            </View>
          ) : null}
        </Animated.View>
      </Pressable>
    );
  }

  return (
    <Animated.FlatList
      data={gameData}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderList}
      horizontal
      contentContainerStyle={{alignItems: 'center'}}
      showsHorizontalScrollIndicator={false}
      snapToInterval={ITEM_SIZE}
      decelerationRate={0}
      bounces={false}
      onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {
        useNativeDriver: true,
      })}
      scrollEventThrottle={16}
    />
  );
};

export default LevelsGrid;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  itemContainer: {
    backgroundColor: COLORS.maroon,
    justifyContent: 'center',
    marginHorizontal: SPACING,
    padding: SPACING * 2,
    borderRadius: 34,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 350,
    borderRadius: 20,
  },
  textContainer: {
    backgroundColor: COLORS.beige,
    marginVertical: 10,
    borderRadius: 34,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    padding: 10,
    // color: COLORS.maroon,
    fontWeight: 'bold',
  },
});
