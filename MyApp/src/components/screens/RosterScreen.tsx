import React, { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import RosterAPI from '../../services/RosterService';
import RosterRouter from '../RosterRouter';

const style = StyleSheet.create({
  teamName: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default function RosterScreen() {
  const [teamName, setTeamName] = useState('');

  useEffect(() => {
    async function fetchTeamName(): Promise<void> {
      const fetchedTeamName: string = await RosterAPI.getTeamName();
      setTeamName(fetchedTeamName);
    }
    fetchTeamName();
  }, []);

  return (
    <>
      <Text style={style.teamName}>{teamName}</Text>
      <RosterRouter />
    </>
  );
}
