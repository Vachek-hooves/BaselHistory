import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS} from '../../constant/colors';

const GameOverModal = ({closeModal}) => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <Text>GameOverModal</Text>
      <TouchableOpacity onPress={closeModal}>
        <Text>Close</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default GameOverModal;

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: COLORS.maroon + 90,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 40,
    borderWidth: 2,
    borderRadius: 32,
    borderColor: COLORS.orange,
  },
});
