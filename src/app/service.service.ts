import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ServiceService {
  public searchTerm;
  public searchActivated = new Subject();
  constructor(public http: HttpModule) {

  }
  // this.searchActivated.subscribe
}
