export class Game {
    id: number;
    name: string;
    isViolence: boolean;
    genres: Array<String>
    price: number;
    constructor(id: number, name: string, isViolence: boolean, genres: Array<String>, price: number) {
        this.id = id;
        this.name = name;
        this.isViolence = isViolence;
        this.genres = genres;
        this.price = price;
    }
}
