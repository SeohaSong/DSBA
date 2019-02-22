import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.scss']
})
export class ProfessorComponent implements OnInit {

  constructor() { }

  @Input() pageType: string;

  ngOnInit() { }

}
