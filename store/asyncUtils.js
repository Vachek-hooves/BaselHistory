import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeQuizzData = async (data, level) => {
  try {
    await AsyncStorage.setItem(level, JSON.stringify(data));
  } catch (error) {
    console.log('Data saving error', error);
    return [];
  }
};

export const fetchGameData = async level => {
  try {
    const data = await AsyncStorage.getItem(level);
    return data != null ? JSON.parse(data) : [];
  } catch (error) {
    console.log('Data fetching error', error);
    return [];
  }
};
