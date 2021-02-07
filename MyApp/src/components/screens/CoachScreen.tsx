import { DrawerActions, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Coach from '../../models/Coach';
import RosterAPI from '../../services/RosterService';
import CoachLine from '../line/CoachLine';

const style = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default function CoachScreen() {
  const [coaches, setCoaches] = useState<Coach[]>([]);

  useEffect(() => {
    async function fetchPlayers(): Promise<void> {
      const fetchedCoaches: Coach[] = await RosterAPI.getCoaches();
      setCoaches(fetchedCoaches);
    }
    fetchPlayers();
  }, []);

  const { dispatch } = useNavigation();

  return (
    <FlatList
      data={coaches}
      renderItem={({ item: coach }) => <CoachLine item={coach} />}
      keyExtractor={coach => coach.id.toString()}
      ListHeaderComponent={() => (
        <TouchableOpacity onPress={() => dispatch(DrawerActions.openDrawer())}>
          <Text style={style.header}>COACH</Text>
        </TouchableOpacity>
      )}
    />
  );
}
