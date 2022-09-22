import { Ranger, Warrior } from './Archetypes';
import Character from './Character';
import { Dwarf, Halfling, Elf } from './Races';
import Monster from './Monster';
import Dragon from './Dragon';
import getRandomInt from './utils';
import Battle, { PVE, PVP } from './Battle';

// create players~
const myElf = new Elf('Luric Ithamecath', getRandomInt(1, 10));
const myRanger = new Ranger(myElf.name);
const player1 = new Character(myElf.name, myElf, myRanger);

const myDwarf = new Dwarf('Guldur Tollack', getRandomInt(1, 10));
const myWarrior = new Warrior(myDwarf.name);
const player2 = new Character(myDwarf.name, myDwarf, myWarrior);

const myHalfling = new Halfling('Hilda Keenbloom', getRandomInt(1, 10));
const player3 = new Character(myHalfling.name, myHalfling);

// level up my elf~
for (let i = 0; i < getRandomInt(1, 15); i += 1) {
  player1.levelUp();
}

// create monsters~

const monster1 = new Monster();
const monster2 = new Dragon();

// create PVP~
const pvp = new PVP(player2, player3);

// create PVE~
const pve = new PVE(player1, [monster1, monster2]);

// create function runBattles~
const runBattles = (battlesToRun: Battle[]) => {
  for (let i = 0; i < battlesToRun.length; i += 1) {
    battlesToRun[i].fight();
  }
};

export { player1, player2, player3 };
export { monster1, monster2 };
export { pvp, pve };
export { runBattles };