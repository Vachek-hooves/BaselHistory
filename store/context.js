import {createContext, useEffect, useState} from 'react';
import {BASEL} from '../data/basel_data';
import {fetchGameData, storeQuizzData} from './asyncUtils';

export const GameContext = createContext({
  easyLevel: [],
  hardLevel: [],
  choosenLevel: () => [],
  //   saveLevelPoints: [],
});

export const GameProvider = ({children}) => {
  const [easyLevel, setEasyLevel] = useState([]);
  const [hardLevel, setHardLevel] = useState([]);
  const [totalScore, setTotalScore] = useState([]);

  useEffect(() => {
    initializeGameData();
  }, []);

  const choosenLevel = async level => {
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
        hard = fetchGameData('hard');
      }
      setHardLevel(hard);
    } catch (error) {
      console.log('data set error', error);
    }
  };

  const contextValue = {easyLevel, hardLevel, choosenLevel};
  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
};
