import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const LogOutButton = (): JSX.Element => {
  return (
    <TouchableOpacity>
      <Text style={styles.text}>ログアウト</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 12,
    lineHeight: 24,
  },
});

export default LogOutButton;
