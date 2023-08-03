import React, {useEffect} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {incrementScore, resetGame} from '../Redux/Reducers/PlayersReducers';

const Score = ({navigation}) => {
  const players = useSelector(state => state.playersData);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {dispatch(resetGame())}
  },[]);

  const handleIncrement = name => {
    dispatch(incrementScore(name));
  };

  const findWinnerDiff = () => {
    return players[0].score > players[1].score
      ? players[0].score - players[1].score
      : players[0].score < players[1].score
      ? players[1].score - players[0].score
      : 0;
  };

  const findWinnerName = () => {
    return players[0].score > players[1].score
      ? players[0].name
      : players[0].score < players[1].score
      ? players[1].name
      : '';
  };

  const handleSave = () => {
    Alert.alert('Game Saved',`Winner is ${findWinnerName()} with ${findWinnerDiff()} point.`)
    // dispatch(resetGame())
    navigation.goBack()
  };

  return (
    <View style={{flex: 1}}>
      {players.map((player, index) => {
        return (
          <>
            <View style={styles.wrapper} key={index}>
              <Text style={styles.text}>{player?.name}</Text>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => handleIncrement(player.name)}>
                <Text style={styles.btnText}>Add Win</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.wrapper, {margin: 10}]} key={index + 1}>
              <Text style={styles.text}>Wins</Text>
              <Text style={styles.text}>-</Text>
              <Text style={[styles.text, {fontSize: 25}]}>{player?.score}</Text>
            </View>
            {/* <View style={styles.wrapper}>
              <Text style={styles.text}>Player 1</Text>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Add Win</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.wrapper, {margin: 10}]}>
              <Text style={styles.text}>Wins</Text>
              <Text style={styles.text}>-</Text>
              <Text style={[styles.text, {fontSize: 25}]}>0</Text>
            </View> */}
          </>
        );
      })}

      <View style={styles.seprator} />
      <Text style={[styles.text, {fontSize: 20}]}>
        {`Current Winner : ${findWinnerName()} ${findWinnerDiff()}`}
      </Text>
      <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
        <Text style={[styles.btnText, {fontSize: 18}]}>Save Game</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-around',
  },
  text: {
    fontSize: 18,
    alignSelf: 'center',
    fontWeight: '500',
  },
  btn: {
    width: '30%',
    backgroundColor: '#2196F3',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 3,
    // margin:10
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  seprator: {
    borderWidth: 1,
    margin: 20,
  },
  saveBtn: {
    position: 'absolute',
    width: '50%',
    bottom: 30,
    backgroundColor: '#2196F3',
    alignSelf: 'center',
    alignItems: 'center',
    padding: 13,
    borderRadius: 5,
  },
});

export default Score;
