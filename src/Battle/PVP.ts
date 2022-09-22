import Battle from './Battle';
import Fighter from '../Fighter';

class PVP extends Battle {
  protected _player2: Fighter;
  protected _player1: Fighter;

  constructor(player1: Fighter, player2: Fighter) {
    super(player1);
    this._player1 = player1;
    this._player2 = player2;
  }

  fight(): number {
    let whoAttacks = 1;
    while (this._player1.lifePoints !== -1 && this._player2.lifePoints !== -1) {
      if (whoAttacks === 1) {
        this._player1.attack(this._player2);
        whoAttacks = 2;
      } else {
        this._player2.attack(this._player1);
        whoAttacks = 1;
      }
    }
    return super.fight();
  }
}

export default PVP;