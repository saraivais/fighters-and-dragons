import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';

class PVE extends Battle {
  private _player: Fighter;
  private _enemies: SimpleFighter[];

  constructor(player: Fighter, enemies: SimpleFighter[]) {
    super(player);
    this._player = player;
    this._enemies = enemies;
  }

  fight(): number {
    let whoAttacks = 1;
    while (this._player.lifePoints !== -1
      && this._enemies.every((enemy) => enemy.lifePoints !== -1)) {
      const firstEnemyAlive = this._enemies
        .find((enemy) => enemy.lifePoints !== -1);
      if (whoAttacks === 1) {
        this._player.attack(firstEnemyAlive as SimpleFighter);
        whoAttacks = 2;
      } else {
        firstEnemyAlive?.attack(this._player);
      }
    }
    return super.fight();
  }
}

export default PVE;