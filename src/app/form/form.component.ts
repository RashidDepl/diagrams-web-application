import { Component} from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  checkoutForm = this.formBuilder.group({
    year: '',
    sales: '',
    expenses: ''
  });

  constructor(private formBuilder: FormBuilder){}

  onSubmit(): void{

  }
}
