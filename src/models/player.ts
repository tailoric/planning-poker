export default class Player{
    name: string;

    constructor(name?: string){
        this.name = name || `Guest${Math.round((Math.random()+1) * 10e3)}`;
    }
}
