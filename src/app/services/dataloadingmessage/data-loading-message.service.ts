import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataLoadingMessageService {
  private loadingSubject: Subject<boolean> = new Subject<boolean>();
  public readonly loadingStatetChanged$: Observable<boolean> = this.loadingSubject.asObservable();

  public broadcastLoadingStateChanged(isLoading: boolean){
    this.loadingSubject.next(isLoading);
  }
}
