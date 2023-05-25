import { SortingStrategy } from '../sorting.model';

export class BubbleSortStrategy implements SortingStrategy {
  public sort(data: number[]): number[] {
    // Implementation of bubble sort algorithm
    console.log('Sorting using Bubble Sort');
    return data.sort((a, b) => a - b);
  }
}
