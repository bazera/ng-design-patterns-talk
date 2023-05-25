import { Injectable } from '@angular/core';
import { UserAuthenticationService } from './user-authentication.service';
import { DataRetrievalService } from './data-retrieval.service';
import { DataPersistenceService } from './data-persistence.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BackendApiService {
  constructor(
    private userAuthenticationService: UserAuthenticationService,
    private dataRetrievalService: DataRetrievalService,
    private dataPersistenceService: DataPersistenceService
  ) {}

  login(username: string, password: string): Observable<boolean> {
    return this.userAuthenticationService.authenticate(username, password);
  }

  getData(): Observable<any> {
    return this.dataRetrievalService.getData();
  }

  saveData(data: any): Observable<boolean> {
    return this.dataPersistenceService.saveData(data);
  }
}
