import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Header = props => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    paddingTop: 45,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.2,
    },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
});

export { Header };
