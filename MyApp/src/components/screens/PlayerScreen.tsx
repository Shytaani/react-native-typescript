import { DrawerActions, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Player from '../../models/Player';
import RosterAPI from '../../services/RosterService';
import Line from '../common/Line';

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
      renderItem={({ item: player }) => <Line item={player} />}
      keyExtractor={player => player.id.toString()}
      ListHeaderComponent={() => (
        <TouchableOpacity onPress={() => dispatch(DrawerActions.openDrawer())}>
          <Text style={style.header}>PLAYER</Text>
        </TouchableOpacity>
      )}
    />
  );
}
