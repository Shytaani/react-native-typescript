import { DrawerActions, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Player from '../../models/Player';
import RosterAPI from '../../services/RosterService';
import PlayerLine from '../line/PlayerLine';

const style = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default function PlayerScreen() {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    async function fetchPlayers(): Promise<void> {
      const fetchedPlayers: Player[] = await RosterAPI.getPlayers();
      setPlayers(fetchedPlayers);
    }
    fetchPlayers();
  }, []);

  const { dispatch } = useNavigation();

  return (
    <FlatList
      data={players}
      renderItem={({ item: player }) => <PlayerLine item={player} />}
      keyExtractor={player => player.id.toString()}
      ListHeaderComponent={() => (
        <TouchableOpacity onPress={() => dispatch(DrawerActions.openDrawer())}>
          <Text style={style.header}>PLAYER</Text>
        </TouchableOpacity>
      )}
    />
  );
}
