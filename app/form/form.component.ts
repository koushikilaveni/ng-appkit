import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.form = this.fb.group({
            firstName: [''],
            lastName: ['' ],
            description: [''],
            email: ['' ],
            phone: [''],
            field1: [''],
            field2: [''],
            field3: [''],
            field4: [''],
            field5: ['']

        });
  }

}