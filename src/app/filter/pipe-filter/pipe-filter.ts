import { Pipe, PipeTransform } from '@angular/core';
import { Game } from 'src/app/services/game-service/models/game';

@Pipe({
    name: 'filterGames'
})

export class FilterPeoplePipe implements PipeTransform {

    transform(values: Game[], ...args: unknown[]): any[] {
        return values.filter(v => v.price > 0);
    }

}