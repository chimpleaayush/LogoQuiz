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

interface InputBoxProps {
  name: string;
  enteredName: string;
  decreaseScore: Function;
  increaseScore: Function;
}

const InputBox = ({
  name,
  enteredName,
  decreaseScore,
  increaseScore,
}: InputBoxProps) => {
  const [isCorrect, setIsCorrect] = useState(false);
  const length = name?.length;
  const dummyArray = new Array(length).fill(0);

  useEffect(() => {
    if (enteredName?.length === length) {
      if (enteredName === name) {
        setIsCorrect(true);
        setTimeout(() => {
          increaseScore(2);
        }, 500);
      } else {
        setIsCorrect(false);
        setTimeout(() => {
          decreaseScore(1);
        }, 500);
      }
    }
  }, [enteredName]);

  return (
    <View
      style={[
        styles.backgroundStyle,
        {
          backgroundColor:
            enteredName?.length !== length
              ? 'grey'
              : isCorrect
              ? 'green'
              : 'red',
        },
      ]}>
      {dummyArray.map((item, index) => {
        return (
          <View key={index} style={styles.box}>
            <Text>{enteredName?.[index] || ''}</Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'white',
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  backgroundStyle: {
    backgroundColor: 'grey',
    marginTop: 10,
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  enteredName: {
    fontSize: 24,
    fontWeight: '600',
  },
  name: {
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

export default InputBox;
