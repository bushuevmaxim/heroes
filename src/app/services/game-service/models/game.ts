export class Game {
    id: number;
    name: string;
    constructor(id: number, name: string,) {
        this.id = id;
        this.name = name;
    }
}

export const GAMES: Game[] = [
    { id: 0, name: 'Volverine' },
    { id: 1, name: 'Thanos' },
    { id: 2, name: 'Spider-Man' },
    { id: 3, name: 'Hulk' },
    { id: 4, name: 'Doctor Doom' },
    { id: 5, name: 'Iron Man' },
]