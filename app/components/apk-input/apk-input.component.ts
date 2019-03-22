import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'apk-input',
  templateUrl: './apk-input.component.html',
  styleUrls: ['./apk-input.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class ApkInputComponent implements OnInit {

@Input() disabled = false;
@Input() placeholder ='';
  constructor() { }

  ngOnInit() {
  }

}