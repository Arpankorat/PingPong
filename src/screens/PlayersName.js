import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet,TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {addPlayers} from '../Redux/Reducers/PlayersReducers';
import store from '../Redux/Store';

const PlayerNameScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');

  const handleContinue = () => {
    if (!player1Name.trim()) {
      alert('Please enter player 1 name.');
      return;
    }

    if (!player2Name.trim()) {
      alert('Please enter player 2 name.');
      return;
    }

    dispatch(addPlayers(player1Name));
    dispatch(addPlayers(player2Name));
    navigation.navigate('Score')
    setPlayer1Name('')
    setPlayer2Name('')
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Player 1 Name"
        value={player1Name}
        onChangeText={setPlayer1Name}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Player 2 Name"
        value={player2Name}
        onChangeText={setPlayer2Name}
      />
      <TouchableOpacity style={styles.saveBtn} onPress={handleContinue}>
        <Text style={[styles.btnText, {fontSize: 18}]}>Continue</Text>
      </TouchableOpacity>
      {/* <Button title="Continue" onPress={handleContinue} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius:5,
  },
  saveBtn: {
    width: '50%',
    backgroundColor: '#2196F3',
    alignSelf: 'center',
    alignItems: 'center',
    padding: 11,
    borderRadius: 5,
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default PlayerNameScreen;
