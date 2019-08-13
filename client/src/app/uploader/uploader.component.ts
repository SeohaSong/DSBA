import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { DisplayService } from "../_services/display.service"


declare const tinymce: any
declare const firebase: any

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent implements OnInit {

  constructor(
    private router: Router,
    private displayService: DisplayService,
  ) { }

  creating_title: string;
  creating_category = '';
  db: any

  member = {
    'img': '',
    'mail': '',
    'name_ko': '',
    'name_en': '',
    'BS': '',
    'MS': '',
    'PHD': '',
    'admission': '',
    'career': '',
    'current': '',
    'homepage': '',
    'CV': '',
    'type': '',
    'status': '',
    'research_areas': '',
 }

  ngOnInit() {
    this.displayService._setEditor();
    this.db = firebase.firestore();
  }

  createPost() {
    let post = {view_count: 0, images: []};
    post['title'] = this.creating_title;
    post['category'] = this.creating_category;
    post['content'] = tinymce.activeEditor.getContent({format : 'raw'});
    let condition1 = !post['title'];
    let condition2 = !post['category'];
    let condition3 = post['content'] == "<p><br data-mce-bogus=\"1\"></p>";
    if( condition1 || condition2 || condition3 ) {
      alert('양식을 모두 채워주세요.');
    } else {
      post['writer'] = this.displayService.getUserName();
      let dt = new Date();
      let yyyy = ''+dt.getFullYear()
      let mm_ = dt.getMonth()+1
      let mm = ''+parseInt(mm_/10+'')+mm_%10;
      let dd_ = dt.getDate()
      let dd = ''+parseInt(dd_/10+'')+dd_%10;
      let hh_ = dt.getHours()
      let hh = ''+parseInt(hh_/10+'')+hh_%10;
      let mM_ = dt.getMinutes()
      let mM = ''+parseInt(mM_/10+'')+mM_%10;
      let ss_ = dt.getSeconds()
      let ss = ''+parseInt(ss_/10+'')+ss_%10;
      let date = yyyy+'.'+mm+'.'+dd+' '+hh+':'+mM+':'+ss;
      post['date'] = date;
      this.db.collection("posts").doc().set(post);
      this.router.navigate(['board', post['category']]);
    }
  }
}
