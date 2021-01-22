import Coach from "./Coach";
import Player from "./Player";

export default interface Roster {
  teamName: string,
  players: Player[],
  coaches: Coach[]
}
