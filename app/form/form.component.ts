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
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            description: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            phone: ['', [Validators.required]],
            field1: ['', [Validators.required]],
            field2: ['', [Validators.required]],
            field3: ['', [Validators.required]],
            field4: ['', [Validators.required]],
            field5: ['', [Validators.required]]

        });
  }

}