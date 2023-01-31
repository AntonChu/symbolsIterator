export default class Team {
  constructor(...initialHeroes) {
    this.members = new Set(initialHeroes);
  }

  [Symbol.iterator]() {
    let counter = 0;
    return {
      next() {
        if (counter <= this.members.size) {
          counter++;
          const arr = [];
          this.members.forEach((hero) => arr.push(hero));
          return {
            done: false,
            value: arr[counter - 1].type
          }
        };

        return {
          done: true
        };
      }
    }
  }
}

const anton = new Team ({
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10
},
{
  name: 'Лучник',
  type: 'Anton',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10
},
{
  name: 'Лучник',
  type: 'Vlad',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10
});

for (let item of anton) {
  console.log(item);
}