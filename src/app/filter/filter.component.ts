import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  showAdultContent: boolean = false;
  options = [
    { label: 'Мультиплеер', checked: false },
    { label: 'Выживание', checked: false },
    { label: 'Шутер', checked: false },
    { label: 'Бесплатно', checked: false },
    { label: 'MOBA', checked: false }, { label: 'Гонки', checked: false },
    { label: 'Файтинг', checked: false }
  ];

  minPrice: number | undefined;
  maxPrice: number | undefined;

  @Output('changed') filtersChanged = new EventEmitter<unknown[]>()


  applyFilters(): void {
    var genres = this.options.filter(option => option.checked).map(option => option.label);

    var args = [genres, this.showAdultContent, this.minPrice, this.maxPrice]
    console.log('applyFilters');

    this.filtersChanged.emit(args)
  }

  resetFilters(): void {
    this.options = this.options.map(option => ({ ...option, checked: false }));
    this.showAdultContent = false;
    this.minPrice = undefined;
    this.maxPrice = undefined;
    this.filtersChanged.emit(undefined)
  }

}
