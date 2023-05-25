import { Injectable } from '@angular/core';
import { EMPTY, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataRetrievalService {
  getData(): Observable<any> {
    // Data retrieval logic
    // Make API calls, handle data transformation, etc.
    // Return an observable with the retrieved data
    return of([1, 2, 3]);
  }
}
