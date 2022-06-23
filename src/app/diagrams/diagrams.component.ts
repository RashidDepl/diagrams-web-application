import { Component, OnInit } from '@angular/core';
import { catchError, Observable, tap, of } from 'rxjs';
import { DarkModeService } from 'angular-dark-mode';
import { ApiService } from '../services/apiservice/api.service';
import { DiagramPoint } from '../services/models/DiagramPoint';
import { DialogService } from '../services/dialogservice/dialog.service';
import { DataLoadingMessageService } from '../services/dataloadingmessage/data-loading-message.service';
declare let google: any;
@Component({
  selector: 'app-diagrams',
  templateUrl: './diagrams.component.html',
  styleUrls: ['./diagrams.component.scss']
})
export class DiagramsComponent implements OnInit {

  darkMode$: Observable<boolean> = this.darkModeService.darkMode$;
  errorHappened = false;

  private pointsArray: Array<DiagramPoint> = new Array<DiagramPoint>;
  private varInitDraw = function(){}

  constructor(private darkModeService: DarkModeService, 
    private apiService: ApiService,
    private dialogService:DialogService,
    private dataLoadingMessageService: DataLoadingMessageService) {
      this.dataLoadingMessageService.broadcastLoadingStateChanged(true);
    }

  ngOnInit(): void {
    this.apiService.getList().subscribe(
      (result) => {
        this.pointsArray = result as Array<DiagramPoint>;
        this.varInitDraw = this.drawChart(this.pointsArray)
        this.initDraw(this.varInitDraw, this.darkMode$)
        this.dataLoadingMessageService.broadcastLoadingStateChanged(false)
      },
      () => {
        this.dialogService.openDialog('Server error', 'Please try later')
        this.dataLoadingMessageService.broadcastLoadingStateChanged(false)
        this.errorHappened = true;
       }
    )
  }
  onResize() {
    this.varInitDraw()
  }

  private initDraw(fn:()=> any, darkModeObservable: Observable<boolean>) {
    if (this.pointsArray != undefined && this.pointsArray.length > 0) {
      google.charts.load('current', { 'packages': ['corechart'] });
      google.charts.setOnLoadCallback(function(){
        fn();
        darkModeObservable.subscribe(fn)
      });
    }
  }

  private drawChart(behavArray: Array<DiagramPoint>){
    var arrayD = behavArray;
    return function () {
      var primaryColor = getComputedStyle(document.body).getPropertyValue('--primary-color').substring(1);
      var primaryColorDark = getComputedStyle(document.body).getPropertyValue('--primary-dark-color').substring(1);
      var secondaryColor = getComputedStyle(document.body).getPropertyValue('--secondary-color').substring(1);
      var secondaryTextColor = getComputedStyle(document.body).getPropertyValue('--text-on-secondary-color').substring(1);
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Year');
      data.addColumn('number', 'Sales');
      data.addColumn('number', 'Expenses');
      data.addRows(arrayD.length);
      arrayD.forEach(element => {
        data.setValue(arrayD.indexOf(element), 0, element.year.toString());
        data.setValue(arrayD.indexOf(element), 1, element.sales);
        data.setValue(arrayD.indexOf(element), 2, element.expenses);
      });

      var options = {
        title: 'Company Performance',
        titleTextStyle: { color: secondaryTextColor },
        hAxis: { title: 'Year', titleTextStyle: { color: secondaryTextColor }, textStyle: { color: secondaryTextColor } },
        vAxis: { minValue: 0, textStyle: { color: secondaryTextColor } },
        legendTextStyle: { color: secondaryTextColor },
        colors: [primaryColor, primaryColorDark],
        backgroundColor: { fill: secondaryColor },
        animation: { "startup": true }
      };

      var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
