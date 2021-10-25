import Game from './game';
import Player from './player';

class GameNotFound extends Error {
    constructor(message: string) {
        super(message);
    }
}

export default class GameManager {
    private static instance : GameManager;
    private games : Map<number, Game>;
    private constructor() {
        this.games = new Map();
    }

    public static getInstance(): GameManager {
        if(!GameManager.instance) {
            GameManager.instance = new GameManager();
        }
        return GameManager.instance;
    }

    public create(gameId : number) {
        if (this.games.has(gameId)) {
            return this.games.get(gameId);
        }
        else {
            const newGame = new Game(gameId);
            this.games.set(newGame.gameId, newGame);
        }
    }

    public get(gameId: number) : Game | undefined {
        return this.games.get(gameId);
    }

    public addPlayer(gameId: number, player: Player): boolean {
        const game = this.games.get(gameId);
        if(game) {
            game.addPlayer(player);
            return true;
        }
        else {
            return false;
        }
    }
}
