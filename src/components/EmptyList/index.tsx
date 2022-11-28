import React from 'react';
import { Text } from 'react-native';
import { styles } from './styles';

export function EmptyList() {
  return (
    <Text style={styles.listEmptyText}>
      Nenhum participante! Adicione participantes a sua lista.
    </Text>
  );
}
