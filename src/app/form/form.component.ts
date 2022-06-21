import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/apiservice/api.service';
import { DiagramPoint } from '../services/models/DiagramPoint';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  years = [
    2005, 2006, 2007, 2008, 2009, 2010,
    2011, 2012, 2013, 2014, 2015, 2016,
    2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025
  ]

  checkoutForm = this.formBuilder.group({
    year: [this.years[0]],
    sales: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
    expenses: ['', [Validators.required, Validators.pattern("^[0-9]*$")]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService) { }

  onSubmit(): void {
    if (this.isValuesAreValid()) {
      var salesTemp: number = Number(this.checkoutForm.value.sales)
      var expensesTemp: number = Number(this.checkoutForm.value.expenses)
      var diagramPoint: DiagramPoint = {
        year: this.checkoutForm.value.year as number,
        sales: salesTemp,
        expenses: expensesTemp
      };
      console.log(this.checkoutForm.getRawValue())
      this.apiService.addPoint(diagramPoint).subscribe(
        (result) =>{
          console.log("Point sending succeed")
        },
        ()=>{
          console.log("Error while sending point")
        }
      )
    } else {
      //TODO: add error message
    }
  }

  private isValuesAreValid(): boolean{
    if(this.checkoutForm.value.sales == undefined || this.checkoutForm.value.expenses == undefined){
      return false
    }
    return !Number.isNaN(this.checkoutForm.value.sales) && this.checkoutForm.value.sales!.length !== 0 &&
    !Number.isNaN(this.checkoutForm.value.expenses) && this.checkoutForm.value.expenses!.length !== 0
  }
}
