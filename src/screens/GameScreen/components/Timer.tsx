import React from 'react';
import {
  StyleSheet,
  useColorScheme,
  View,
  Button,
  Image,
  Text,
} from 'react-native';

interface TimerProps {
  time: any;
}

const Timer = ({time}: TimerProps) => {
  return (
    <View style={styles.backgroundStyle}>
      <Text style={styles.timer}>Timer : {time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  timer: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
    alignSelf: 'center',
  },
  backgroundStyle: {
    backgroundColor: 'grey',
  },
});

export default Timer;
