import { getLocaleDateFormat } from '@angular/common';
import { Component, Directive, ElementRef, HostBinding, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { DarkModeService } from 'angular-dark-mode';
declare let google: any;
@Component({
  selector: 'app-diagrams',
  templateUrl: './diagrams.component.html',
  styleUrls: ['./diagrams.component.scss']
})
export class DiagramsComponent implements OnInit {
  
  darkMode$: Observable<boolean> = this.darkModeService.darkMode$;

  constructor(private darkModeService: DarkModeService){}

  ngOnInit(): void {
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(this.drawChart);
    this.darkMode$.subscribe(this.drawChart)
  }
  onResize() {
    console.log('resizing called')
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(this.drawChart);
  }

  drawChart():void {
    var primaryColor = getComputedStyle(document.body).getPropertyValue('--primary-color').substring(1)
    var primaryColorDark = getComputedStyle(document.body).getPropertyValue('--primary-dark-color').substring(1)
    var secondaryColor = getComputedStyle(document.body).getPropertyValue('--secondary-color').substring(1)
    var secondaryTextColor = getComputedStyle(document.body).getPropertyValue('--text-on-secondary-color').substring(1)
    var data = google.visualization.arrayToDataTable([
      ['Year', 'Sales', 'Expenses'],
      ['2013',  1000,      400],
      ['2014',  1170,      460],
      ['2015',  660,       1120],
      ['2016',  1030,      540]
    ]);

    var options = {
      title: 'Company Performance',
      titleTextStyle: {color: secondaryTextColor},
      hAxis: {title: 'Year',  titleTextStyle: {color: secondaryTextColor}, textStyle: {color: secondaryTextColor}},
      vAxis: {minValue: 0, textStyle: {color: secondaryTextColor}},
      legendTextStyle: {color: secondaryTextColor},
      colors: [primaryColor, primaryColorDark],
      backgroundColor: {fill: secondaryColor},
      animation: {"startup": true} 
    };

    var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  }
}
