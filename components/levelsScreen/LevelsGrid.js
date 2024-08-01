import {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  Animated,
  TouchableOpacity,
} from 'react-native';

const {width} = Dimensions.get('window');

const SPACING = 10;
const ITEM_SIZE = width * 0.74;
const SPACER_ITEM_SIZE = (width - ITEM_SIZE) / 2;

const LevelsGrid = ({data}) => {
  const [gameData, setGameData] = useState([]);
  const scrollX = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    setGameData([{key: 'leftSpacer'}, ...data, {key: 'rightSpacer'}]);
  }, []);

  function renderList({item, index}) {
    console.log(item);

    if (!item.subject) {
      return (
        <View
          key={1 + 1}
          style={{
            width: SPACER_ITEM_SIZE,
            // backgroundColor: 'red',
            // height: 200,
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
      outputRange: [0, -50, 0],
    });

    return (
      <View style={{width: ITEM_SIZE}}>
        <Animated.View
          style={{
            backgroundColor: 'gray',
            justifyContent: 'center',
            marginHorizontal: SPACING,
            // width: ITEM_SIZE,
            padding: SPACING * 2,
            borderRadius: 34,
            transform: [{translateY}],
          }}>
          <Text style={{textAlign: 'center'}}>{item.subject}</Text>
        </Animated.View>
      </View>
    );
  }

  return (
    <Animated.FlatList
      // data={data}
      data={gameData}
      keyExtractor={item => item.id}
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

const styles = StyleSheet.create({});
