import * as core from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { People } from './people';
import { environment } from 'src/environments/environment';

@core.Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private httpClient: HttpClient) { }

  getAll(page: number): Observable<People> {
    return this.httpClient.get<People>(`${environment.API_URL}/people?page=${page + 1}`);
  }

}
