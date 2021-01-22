import { DrawerActions, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Coach from '../../models/Coach';
import RosterAPI from '../../services/RosterService';
import Line from '../common/Line';

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
      renderItem={({ item: coach }) => <Line item={coach} />}
      keyExtractor={coach => coach.id.toString()}
      ListHeaderComponent={() => (
        <TouchableOpacity onPress={() => dispatch(DrawerActions.openDrawer())}>
          <Text style={style.header}>COACH</Text>
        </TouchableOpacity>
      )}
    />
  );
}
