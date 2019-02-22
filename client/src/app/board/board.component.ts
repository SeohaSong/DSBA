import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { ActivatedRoute } from '@angular/router';

import { DisplayService } from "../_services/display.service";
import { UtilsService } from "../_services/utils.service";


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  constructor(
    private displayService: DisplayService,
    private utilsService: UtilsService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  id2id = [];
  all_posts = {};
  post_n: number;

  posts = [];
  post: any;
  post_groups: any;
  post_group: any;
  latest_posts: any;
  images = []
  page_length: number;
  page: number;

  updating_status = false;
  updating_title: string;

  loading_status = true;

  category = this.route.snapshot.routeConfig.path
  .replace(/board\/*/, '')
  .replace(/\/.*/, '')

  post_id = this.route.snapshot.paramMap.get('id');

  turn_page: Function;

  ngOnInit() {
    this.displayService.initBoard(this)
  }

  getUpdatedUrl(f) {
    let [updatedUrl, pStr] = this.location.path().split('?')

    let k2v = {}
    pStr.split('&').forEach(a => {
      let [k, v] = a.split("=")
      k2v[k] = v
    })

    f(k2v)

    updatedUrl += "?"
    updatedUrl += Object.keys(k2v).map(k => [k, k2v[k]].join("=")).join("&")

    return updatedUrl
  }

  showPost(id) {
    this.updating_status = false;

    if (this.post) {
      this.post = this.all_posts[id];
      this.utilsService.setEditorContent(this.post.content);
    } else {
      this.post = this.all_posts[id];
    }

    let updatedUrl = this.getUpdatedUrl(k2v => k2v["postId"] = id)
    this.location.go(updatedUrl)
    this.utilsService.update_view_count(this.id2id[id])
    this.utilsService.setEditor()
  }

  hidePost() {
    this.updating_status = false
    this.post = null
    let updatedUrl = this.getUpdatedUrl(k2v => delete k2v["postId"])
    this.location.go(updatedUrl)
  }

  turn_post(change=0) {
    let id = this.post.id+change;
    if (!(id < 1 || id > this.post_n)) {
      this.post = this.all_posts[id]
      let updatedUrl = this.getUpdatedUrl(k2v => k2v["postId"] = id)
      this.location.go(updatedUrl)
      this.utilsService.setEditorContent(this.post.content)
    }
  }

  toggleEditStatus(id) {
    let uid = this.utilsService.get_userid();
    if (uid) {
      if (this.updating_status) {
        let post = this.all_posts[id];
        [post.title, post.content] = this.utilsService.save_post(this, id);
      } else {
        let post = this.all_posts[id];
        this.updating_title = post.title;
      }
      new Promise((resolve, reject) => {
        resolve(this.updating_status = !this.updating_status)
      }).then(() => this.utilsService.setEditor());
    } else {
      console.log('로그인을 해야합니다.')
    }
  }

}
