import React from 'react';
import {StyleSheet, useColorScheme, View, Button, Image} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

interface ImageBoxProps {
  url: string;
}

const ImageBox = ({url}: ImageBoxProps) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.backgroundStyle}>
      <Image source={{uri: url}} style={styles.image} resizeMode="contain" />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 120,
    width: 120,
    alignSelf: 'center',
  },
  backgroundStyle: {
    backgroundColor: 'grey',
    marginTop: 10,
  },
});

export default ImageBox;
