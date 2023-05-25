import { Component } from '@angular/core';
import { SorterService } from 'src/app/services/sorter.service';
import { QuickSortStrategy } from './strategies';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss'],
})
export class SortingComponent {
  constructor(private sorterService: SorterService) {}

  public sortData(): void {
    const data = [5, 2, 8, 1, 9];
    console.log(`Original data: ${data}`);

    this.sorterService.setStrategy(new QuickSortStrategy());
    const sortedData = this.sorterService.sort(data);
    console.log(`Sorted data: ${sortedData}`);
  }
}
