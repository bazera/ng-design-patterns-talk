import { SortingStrategy } from '../sorting.model';

export class QuickSortStrategy implements SortingStrategy {
  public sort(data: number[]): number[] {
    // Implementation of quick sort algorithm
    console.log('Sorting using Quick Sort');
    return this.quickSort(data, 0, data.length - 1);
  }

  private quickSort(data: number[], low: number, high: number): number[] {
    if (low < high) {
      const pivotIndex = this.partition(data, low, high);
      this.quickSort(data, low, pivotIndex - 1);
      this.quickSort(data, pivotIndex + 1, high);
    }
    return data;
  }

  private partition(data: number[], low: number, high: number): number {
    const pivot = data[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
      if (data[j] <= pivot) {
        i++;
        [data[i], data[j]] = [data[j], data[i]];
      }
    }
    [data[i + 1], data[high]] = [data[high], data[i + 1]];
    return i + 1;
  }
}
