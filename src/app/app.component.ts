import { Component, OnDestroy } from '@angular/core';
import { DataLoadingMessageService } from './services/dataloadingmessage/data-loading-message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy{
  title = 'sm-project';
  Tab1 = "Home"
  Tab2 = "Diagrams"
  Tab3 = "Form"
  
  public isLoading = false;
  private subscription;

  constructor(private dataLoadingMessageService: DataLoadingMessageService){
    this.subscription = dataLoadingMessageService.loadingStatetChanged$.subscribe(
      result =>{
        this.isLoading = result
      }
    )
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  public getIsLoading(){
    return this.isLoading;
  }
}
