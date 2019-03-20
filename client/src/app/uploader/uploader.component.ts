import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { DisplayService } from "../_services/display.service"


declare const db: any;
declare const tinymce: any;


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

  ngOnInit() {
    this.displayService._setEditor();
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
      db.collection("posts").doc().set(post);
      this.router.navigate(['board', post['category']]);
    }
  }

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


  uploadNewPeople() {
    let new_members = [
      {
        'img': 'assets/img/members/026.jpg',
        'mail': 'youngbin_ro@korea.ac.kr',
        'name_ko': '노영빈',
        'name_en': 'Youngbin Ro',
        'BS': 'Business Administration, Korea University, 2018',
        'admission': '2019-1',
        'status': 'M.S. Student',
        'type': 'students',
        'research_areas': 'Data Mining, Machine Learning',
      },
      {
        'img': 'assets/img/members/027.jpg',
        'mail': 'pack1205@korea.ac.kr',
        'name_ko': '박중민',
        'name_en': 'Joongmin Park',
        'BS': 'School of Industrial Management Engineering, Korea University, 2017',
        'admission': '2019-1',
        'status': 'M.S. Student',
        'type': 'students',
        'research_areas': 'Data Mining, Machine Learning',
      },
      {
        'img': 'assets/img/members/028.jpg',        
        'mail': '284764@korea.ac.kr',
        'name_ko': '이정훈',
        'name_en': 'Junghoon Lee',
        'BS': 'School of Industrial Management Engineering, Korea University, 2018',
        'admission': '2019-1',
        'status': 'M.S. Student',
        'type': 'students',
        'research_areas': 'NLP, Deep Learning',
      },
      {
        'img': 'assets/img/members/029.jpg',
        'mail': '',
        'name_ko': '조규원',
        'name_en': 'Gyuwon Cho',
        'BS': 'School of Business Administration,  Hongik University, 2018',
        'admission': '2019-1',
        'status': 'M.S. Student',
        'type': 'students',
        'research_areas': 'NLP, Deep Learning, Data Analysis',
      },
      {
        'img': 'assets/img/members/030.jpg',
        'mail': 'excelsiorcjh@korea.ac.kr',
        'name_ko': '최종현',
        'name_en': 'Jonghyun Choi',
        'BS': 'School of Industrial Management Engineering, Hankuk Univ. of Foreign Studies, 2016',
        'admission': '2019-1',
        'career': 'WIPS (2016.04 ~ 2018.08)',
        'status': 'M.S. Student',
        'type': 'students',
        'research_areas': 'NLP, Deep Learning, Data Analysis',
      },
    ]
    new_members.forEach((member) => {
      member = Object.assign(Object.assign(this.member), member)
      db.collection("members").doc(member.name_ko).set(member);
    })
  }
}
