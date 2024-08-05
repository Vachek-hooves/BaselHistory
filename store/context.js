import {createContext, useEffect, useState} from 'react';
import {BASEL} from '../data/basel_data';
import {fetchGameData, storeQuizzData} from './asyncUtils';

export const GameContext = createContext({
  easyLevel: [],
  hardLevel: [],
  choosenLevel: () => [],
  //   saveLevelPoints: [],
  nextLevelOpenHandler: () => [],
});

export const GameProvider = ({children}) => {
  const [easyLevel, setEasyLevel] = useState([]);
  const [hardLevel, setHardLevel] = useState([]);
  const [totalScore, setTotalScore] = useState([]);

  useEffect(() => {
    initializeGameData();
  }, []);

  const nextLevelOpenHandler = async (id, level) => {
    console.log('open next level', id, level);
    try {
      const AllQuizData = await fetchGameData(level);
      console.log(AllQuizData);
      const thisQuizIndex = AllQuizData.findIndex(quiz => quiz.id === id);
      if (thisQuizIndex !== -1 && thisQuizIndex + 1 < AllQuizData.length) {
        const updatedData = AllQuizData.map((quiz, i) =>
          i === thisQuizIndex + 1 ? {...quiz, isClose: false} : quiz,
        );

        switch (level) {
          case 'easy':
            setEasyLevel(updatedData);
            break;
          case 'hard':
            setHardLevel(updatedData);
            break;
          default:
            break;
        }

        await storeQuizzData(updatedData, level);
      }
    } catch (error) {
      console.log('error accured', error);
    }
  };

  const choosenLevel = level => {
    switch (level) {
      case 'easy':
        return easyLevel;
      case 'hard':
        return hardLevel;
      default:
        break;
    }
  };

  const initializeGameData = async () => {
    try {
      let easy = await fetchGameData('easy');
      let hard = await fetchGameData('hard');
      if (easy.length === 0) {
        await storeQuizzData(BASEL, 'easy');
        easy = await fetchGameData('easy');
      }
      setEasyLevel(easy);

      if (hard.length === 0) {
        await storeQuizzData(BASEL, 'hard');
        hard = await fetchGameData('hard');
      }
      setHardLevel(hard);
    } catch (error) {
      console.log('data set error', error);
    }
  };


  const contextValue = {
    easyLevel,
    hardLevel,
    choosenLevel,
    nextLevelOpenHandler,

  };
  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
};
