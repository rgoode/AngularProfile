import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  updateForm(event: string){
    const value = event;
    const value2 = event;
  }



    public emailFormControl = new FormControl('');
    public messageFormControl = new FormControl('');
 

  submitForm(){
    alert(JSON.stringify(this.emailFormControl.value));
  }

}
