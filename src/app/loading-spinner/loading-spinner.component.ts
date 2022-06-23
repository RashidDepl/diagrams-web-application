import { Component, OnInit, Input } from '@angular/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss']
})
export class LoadingSpinnerComponent implements OnInit {

  constructor() { }

  @Input() value : number = 100;
  @Input() diameter: number = 100;
  @Input() mode : ProgressSpinnerMode = "indeterminate";
  @Input() strokeWidth : number = 10;
  @Input() overlay: string = "false";
  @Input() color: string = getComputedStyle(document.body).getPropertyValue('--primary-color').substring(1);


  ngOnInit(): void {
  }

}
