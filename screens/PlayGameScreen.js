import {Modal, StyleSheet, View, Text} from 'react-native';
import {COLORS} from '../constant/colors';
import GameLayout from '../components/layout/GameLayout';
import {useNavigation} from '@react-navigation/native';
import {useContext, useEffect, useState} from 'react';
import {GameContext} from '../store/context';
import {
  GameOverModal,
  Options,
  Questions,
  Statistic,
} from '../components/PlayGameComponents';
import {GameTimer} from '../components/ui';

const PlayGameScreen = ({route}) => {
  const {choosenLevel} = useContext(GameContext);
  const subjectId = route.params.itemId;
  const level = route.params.level;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentOption, setCurrectOption] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [disableOption, setDisableOption] = useState(false);
  const [score, setScore] = useState(0);
  const [next, setNext] = useState(false);
  const [levelIDone, setLevelIsDone] = useState(false);
  const [timerFinish, setTimerFinish] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const dataSet = choosenLevel(level);
  const questions = dataSet?.find(quiz => quiz.id === subjectId).levelQuestions;

  const thisQuestion = questions[currentIndex].question;
  const thisOptions = questions[currentIndex].options;

  useEffect(() => {
    if (timerFinish) {
      setShowModal(true);
    }
  }, [timerFinish]);

  return (
    <GameLayout>
      <Statistic
        score={score}
        length={questions.length}
        currentIndex={currentIndex}
        level={level}
        setTimeOut={setTimerFinish}
      />
      <Questions question={thisQuestion} />
      <Options options={thisOptions} />
      {next && <NextBtn />}
      <Modal visible={showModal} animationType="slide" transparent={true} >
        <GameOverModal closeModal={() => setShowModal(false)} />
      </Modal>
    </GameLayout>
  );
};

export default PlayGameScreen;

const styles = StyleSheet.create({});
