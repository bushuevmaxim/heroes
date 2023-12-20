import { Pipe, PipeTransform } from '@angular/core';
import { Game } from 'src/app/services/game-service/models/game';

@Pipe({
    name: 'filterGames'
})

export class FilterGamesPipe implements PipeTransform {

    transform(games: Game[] | null | undefined, args: unknown[] | undefined): Game[] | null | undefined {
        console.log('FilterGamesPipe');
        console.log(args);
        if (args === undefined || games === null || games == undefined) {
            return games;
        }
        console.log('FilterGamesPipe 2');
        var genres = args[0] as String[];
        var hideAlult = args[1] as boolean;
        var minPrice = args[2] as number;
        var maxPrice = args[3] as number;
        var filterGames: Game[];
        if (minPrice === undefined) {
            minPrice = 0;
        }
        if (maxPrice === undefined) {
            maxPrice = Infinity;
        }
        console.log('med FilterGamesPipe');
        filterGames = games.filter(game => minPrice <= game.price && game.price <= maxPrice);
        if (genres.length != 0) {
            filterGames = games.filter(game => game.genres.some(genre => genres.includes(genre)));
        }
        if (hideAlult) {
            filterGames = games.filter(game => game.isViolence != hideAlult);

        }


        console.log(filterGames);
        console.log('end FilterGamesPipe');
        return filterGames;
    }

}