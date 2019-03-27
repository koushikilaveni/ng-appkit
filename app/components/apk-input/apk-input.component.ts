import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'apk-input',
  templateUrl: './apk-input.component.html',
  styleUrls: ['./apk-input.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class ApkInputComponent implements OnInit {

@Input() disabled = false;
@Input() placeholder ='';
@Input() label = 'Text field';
@Input() control: FormControl;
@Input() controlName: string = ''; 
  constructor() { }

  ngOnInit() {
  }

}