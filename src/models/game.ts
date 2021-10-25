import Player from './player';

export default class Game{
    private readonly id : number;
    private _players: Player[];
    public constructor(gameId?: number){
        this.id = gameId || Math.round((Math.random() + 1) * 10e3);
        this._players = [];
    }

    public addPlayer(player: Player | string): void {
        if (typeof player === 'string'){
            this.players.push(new Player(player));
        }
        else{
            this.players.push(player);
        }
    }

    get players() : Player[] {
        return this._players;
    }

    get gameId(): number {
        return this.id;
    }
}
