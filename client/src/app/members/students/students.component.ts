import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent implements OnInit {

  constructor() { }

  @Input() pageType: string;
  @Input() studentPairs: any[];

  ngOnInit() { }

  beautifyAdmission(admission: string) {
    let parts: Array<string> = admission.split('-');
    let head: string = ['March 1', 'September 1'][parseInt(parts[1])-1];
    let beautified: string  = [head, parts[0]].join(', ');
    return beautified;
  }
}
