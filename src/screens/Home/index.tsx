import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useCallback, useState } from 'react';
import { Participant } from '../../components/Participant';
import { EmptyList } from '../../components/EmptyList';
import { styles } from './styles';

export function Home() {
  const [participants, setParticipants] = useState(['Rodrigo']);
  const [participantName, setParticipantName] = useState('');

  const handleRemoveParticipant = (name: string) => {
    Alert.alert('Remover', `Desejar Remover o participant ${name}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert('Participante deletado'),
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ]);
  };

  const handleParticipantAdd = useCallback(() => {
    if (participants.includes(participantName)) {
      Alert.alert(
        'Participante existe',
        'Já existe um participante na lista com esse nome.',
      );
      return;
    }
    setParticipants([...participants, participantName]);
    setParticipantName('');
  }, [participantName, participants]);

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          onChangeText={setParticipantName}
          value={participantName}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleRemoveParticipant(item)}
          />
        )}
        ListEmptyComponent={<EmptyList />}
      />
    </View>
  );
}
