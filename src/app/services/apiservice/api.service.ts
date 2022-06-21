import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl: string = 'http://api.mocklets.com/p68496/';

  private postQueue: string = 'list/add';

  private getQueue: string = 'get/list';

  constructor(private httpClient: HttpClient) { }

  public getList(){
    return this.httpClient.get(this.apiUrl + this.getQueue)
  }
}
