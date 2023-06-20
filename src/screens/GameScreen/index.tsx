import React, {Children, useEffect, useState} from 'react';
import type {PropsWithChildren, ReactNode} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
} from 'react-native/Libraries/NewAppScreen';

import {Timer, Options, InputBox, ImageBox} from './components';

interface GameScreenProps {
  navigation: any;
}

const GameScreen = ({navigation}: GameScreenProps) => {
  const [score, setScore] = useState(0);
  const [enteredName, setEnteredName] = useState('');
  let logos = require('../../assets/data.json');
  const [timer, setTimer] = useState(30);

  //some bug need to corect timer
  // useEffect(() => {
  //   let timerIn: any = null;
  //   const callback = () => {
  //     timerIn && clearTimeout(timerIn);
  //     setTimer(timer - 1);
  //   };
  //   if (timer > 0) {
  //     timerIn = setTimeout(callback, 1000);
  //   } else {
  //     if (logos?.length === 1) {
  //       navigation.navigate('ScoreScreen', {score: score});
  //     }
  //     //some bug need to corect timer
  //     // if (logos?.length === 0) {
  //     //   navigation.navigate('ScoreScreen', {score: score});
  //     // } else {
  //     //   logos.shift();
  //     //   setEnteredName('');
  //     //   setTimer(30);
  //     // }
  //   }
  //   return () => timerIn && clearTimeout(timerIn);
  // }, [timer]);

  useEffect(() => {
    if (logos?.length === 0) {
      navigation.navigate('ScoreScreen', {score: score});
    } else {
      setEnteredName('');
      setTimer(30);
    }
  }, [score]);

  const onLetterSelection = (l: string) => {
    setEnteredName(enteredName + l);
  };

  const increaseScore = (number: number) => {
    logos.shift();
    setScore(score + number);
  };
  const decreaseScore = (number: number) => {
    logos.shift();
    setScore(score - number);
  };

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}>
      <Text style={styles.score}>Score : {score}</Text>
      {/* <Timer time={timer} /> */}
      <ImageBox url={logos[0]?.imgUrl} />
      <InputBox
        increaseScore={increaseScore}
        decreaseScore={decreaseScore}
        enteredName={enteredName}
        name={logos[0]?.name}
      />
      <Options
        callback={onLetterSelection}
        disable={logos[0]?.name?.length === enteredName?.length}
      />
      {/* {timer === 0 && enteredName !== logos[0]?.name && <Text style={styles.timeUp}>Time up !!</Text>} */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  timeUp: {
    fontSize: 30,
  },
  scrollView: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'white',
  },
  score: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default GameScreen;
