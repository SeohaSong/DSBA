import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

declare const auth: any

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(
    private router: Router
  ) { }


  get_username = () => auth.currentUser.displayName;

  get_url_head = () => this.router.url.split("?")[0].split("/")[1];
  get_url_tail = () => {
    let pipes = this.router.url.split("?")[0].split("/");
    return pipes[pipes.length-1];
  }

  beautifyAdmission(admission: string) {
    let parts: Array<string> = admission.split('-');
    let head: string = ['March 1', 'September 1'][parseInt(parts[1])-1];
    let beautified: string  = [head, parts[0]].join(', ');
    return beautified;
  }
}
