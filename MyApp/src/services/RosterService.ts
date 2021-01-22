import Axios, { AxiosResponse } from 'axios';
import CamelcaseKeys from 'camelcase-keys';
import Coach from '../models/Coach';
import Player from '../models/Player';
import Roster from '../models/Roster';

type SortFunc = (a: Player | Coach, b: Player | Coach) => number;

const defaultSortFunc = (a: Player | Coach, b: Player | Coach) => {
  if (a.sortLetter < b.sortLetter) {
    return -1;
  }
  if (a.sortLetter > b.sortLetter) {
    return 1;
  }
  return 0;
};

export default class RosterAPI {
  private static async fetchRoster(sortFunc?: SortFunc): Promise<Roster> {
    try {
      const response: AxiosResponse = await Axios.get('http://data.nba.net/json/cms/noseason/team/lakers/roster.json');
      const { roster } = CamelcaseKeys(response.data).sportsContent;
      const team = CamelcaseKeys(roster.team);
      const teamName = `${team.teamCity} ${team.teamNickname}`;
      const players: Player[] = CamelcaseKeys(roster.players.player).map((p: any) => ({
        id: p.personId,
        name: `${p.firstName} ${p.lastName}`,
        sortLetter: p.sortLetter,
        height: `${p.heightFt}.${p.heightIn}`,
        weight: p.weightLbs,
        jerseyNo: p.jerseyNumber,
        position: p.positionShort,
        affiliation: p.affiliation,
        birthDate: p.birthDate,
        yearsPro: p.yearsPro,
      }));
      const coaches: Coach[] = CamelcaseKeys(roster.coaches.coach).map((c: any, i: number) => ({
        id: i,
        name: `${c.firstName} ${c.lastName}`,
        sortLetter: c.lastName.charAt(0),
        college: c.college,
      }));
      return {
        teamName: teamName,
        players: players.sort(sortFunc || defaultSortFunc),
        coaches: coaches.sort(sortFunc || defaultSortFunc),
      };
    } catch (error) {
      console.error('getRoster: error', error);
      return {
        teamName: '',
        players: [],
        coaches: [],
      };
    }
  }

  static async getTeamName(): Promise<string> {
    return (await this.fetchRoster()).teamName;
  }

  static async getPlayers(sortFunc?: SortFunc): Promise<Player[]> {
    return (await this.fetchRoster(sortFunc)).players;
  }

  static async getCoaches(sortFunc?: SortFunc): Promise<Coach[]> {
    return (await this.fetchRoster(sortFunc)).coaches;
  }
}
