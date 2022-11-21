import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { styles } from './styles';

export function Participant() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Rodrigo Dias de Figueiredo</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}> - </Text>
      </TouchableOpacity>
    </View>
  );
}
