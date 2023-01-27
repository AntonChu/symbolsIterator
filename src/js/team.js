export default class Team {
    constructor(...initialHeroes) {
      this.members = new Set(initialHeroes);
      console.log(this.members);
    }


}