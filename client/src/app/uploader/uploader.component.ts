import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";

import { UtilsService } from '../_services/utils.service'

declare const db: any;
declare const tinymce: any;


@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private router: Router,
    private utilsService: UtilsService
  ) { }

  creating_title: string;
  creating_category = '';

  post_collection = db.collection("posts");

  ngOnInit() {
    this.utilsService.setEditor();
  }

  create_post() {
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
      post['writer'] = this.utilsService.get_username();
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
      this.post_collection.doc().set(post);
      this.router.navigate(['board', post['category']]);
    }
  }

  delete_all_remote_data() {
    let post_collection = this.post_collection;
    post_collection.get().then(data => {
      data.forEach(post => {
        post_collection.doc(post.id).delete()
        .then(data => console.log('delete success'))
        .catch(error => console.log('delete fail'));
      });
    });
  }

  upload_all_local_data() {
    let post_collection = this.post_collection;
    let posts: any;
    this.http.get('assets/db/posts.json')
    .subscribe(data => {
      posts = data;
      for (let i=0; i < posts.length; i++) {
        let post = posts[i];
        delete post['thumbnail'];
        delete post['id'];
        let date = post.date;
        let yyyy = date.slice(0, 4);
        let mm = date.slice(4, 6);
        let dd = date.slice(6, 8);
        let hh = date.slice(8, 10);
        let mM = date.slice(10, 12);
        let ss = date.slice(12, 14);
        post.date = yyyy+'.'+mm+'.'+dd+' '+hh+':'+mM+':'+ss;
        post.view_count = parseInt(post.view_count);
        if (post.images.length) {
          let parts = post.images[0].split('/');
          post.images = ['/assets/img/posts/'+parts[parts.length-1]];
        }
        post_collection.doc().set(post)
        .then(data => console.log('create success'))
        .catch(error => console.log('create fail'));
      }
    });

  }

  upload_all_seminar_data() {
    let post_collection = this.post_collection;
    let posts: any;
    this.http.get('assets/db/seminars.json')
    .subscribe(data => {
      posts = data;
      for (let i=0; i < posts.length; i++) {
        let post = {};
        let post_ = posts[i].fields;
        let keys = Object.keys(post_);
        for (let i_=0; i_ < keys.length; i_++) {
          let attr = post_[keys[i_]];
          post[keys[i_]] = attr[Object.keys(attr)[0]];
        }
        post['view_count'] = parseInt(post['view_count']);
        if(Object.keys(post['images']).length){
          let parts = post['images']['values'][0]['stringValue'].split('/');
          post['images'] = ['/assets/img/posts/'+parts[parts.length-1]];
        }
        post_collection.doc().set(post)
        .then(data => console.log('create success'))
        .catch(error => console.log('create fail'));
      }
    });
  }

  upload_all_members_data() {
    let collection = db.collection("members");
    let objs: any;
    this.http.get('assets/db/members.json')
    .subscribe(data => {
      objs = data;
      for (let i=0; i < objs.length; i++) {
        collection.doc().set(objs[i])
        .then(data => console.log('create success'))
        .catch(error => console.log('create fail'));
      }
    });
  }
}
