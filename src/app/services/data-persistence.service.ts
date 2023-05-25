import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataPersistenceService {
  saveData(data: any): Observable<boolean> {
    // Data persistence logic
    // Make API calls, handle response, etc.
    // Return an observable indicating successful or failed data persistence
    return EMPTY;
  }
}
