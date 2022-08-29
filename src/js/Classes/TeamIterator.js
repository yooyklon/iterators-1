export default class TeamIterator {
  constructor(team) {
    this.Team = team;
    this.idx = 0;
    this.myTeam = Array.from(this.Team.members);
  }

  next() {
    if (this.idx === this.myTeam.length) {
      return { done: true };
    }

    const result = {
      value: this.myTeam[this.idx],
      done: false,
    };

    this.idx += 1;

    return result;
  }
}
