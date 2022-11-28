import {
  FlatList,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Participant } from '../../components/Participant';
import { EmptyList } from '../../components/EmptyList';
import { styles } from './styles';

export function Home() {
  const participants = [
    'Rodrigo',
    'Lucas',
    'Beatriz',
    'Liliane',
    'João',
    'José',
    'Manoel',
    'Maria',
    'Sebastião',
    'Pedro',
    'Thiago',
    'Eric',
  ];

  const handleRemoveParticipant = (name: string) => {
    console.log(`clickou em remover o participante ${name}`);
  };

  const handleAddParticipant = () => {
    console.log('adicionar');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />
        <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
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
