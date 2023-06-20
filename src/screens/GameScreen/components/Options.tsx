import React, {Children} from 'react';
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

interface OptionsProps {
  callback: Function;
  disable: boolean;
}

const Options = ({callback, disable}: OptionsProps) => {
  const alphabet = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  return (
    <View style={styles.backgroundStyle}>
      {alphabet.map((item, index) => (
        <View key={index} style={{height: 60, width: 60, marginRight: 5}}>
          <Button
            disabled={disable}
            color={'maroon'}
            title={item}
            onPress={() => callback(item)}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginTop: 10,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
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

export default Options;
