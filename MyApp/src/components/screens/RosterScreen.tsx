import React, { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import RosterAPI from '../../services/RosterService';
import Logo from '../common/Logo';
import RosterRouter from '../RosterRouter';

const style = StyleSheet.create({
  teamName: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  image: {
    height: 30,
    width: 30,
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
      <Text>
        <Logo style={style.image} />
        <Text style={style.teamName}>{teamName}</Text>
      </Text>
      <RosterRouter />
    </>
  );
}
