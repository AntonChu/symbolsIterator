export default class Team {
  constructor(...initialHeroes) {
    this.members = new Set(initialHeroes);
  }

  [Symbol.iterator]() {
    let counter = 0;
    const length = this.members.size - 1;
    const arr = [];
    this.members.forEach((hero) => arr.push(hero));
    return {
      next() {
        if (counter <= length) {
          return {
            done: false,
            value: arr[counter++].type,
          };
        }

        return {
          done: true,
        };
      },
    };
  }
}
