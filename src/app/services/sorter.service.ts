import { Injectable } from '@angular/core';
import { SortingStrategy } from '../components/sorting/sorting.model';

@Injectable({
  providedIn: 'root',
})
export class SorterService {
  private strategy!: SortingStrategy;

  public setStrategy(strategy: SortingStrategy): void {
    this.strategy = strategy;
  }

  public sort(data: number[]): number[] {
    if (!this.strategy) {
      throw new Error('No sorting strategy set');
    }
    return this.strategy.sort(data);
  }
}
