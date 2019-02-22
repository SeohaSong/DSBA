import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


declare const db: any;
declare const auth: any
declare const tinymce: any;


@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(
    private router: Router
  ) { }

  save_post(board, id) {
    let title = board.updating_title
    let content = this.getEditorContent();
    db.collection('posts').doc(board.id2id[id]).set({
      title: title,
      content: content
    },{merge: true})
    return [title, content]
  }

  update_view_count(id) {
    console.log('뷰카운트 업데이트는 서버측에서 작업해야함');
  }

  get_userid = () => auth.currentUser.uid;
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

  setEditor() {
    setTimeout(() => {
      tinymce.remove();
      tinymce.init({
        selector: '[data-editor=w]',
        plugins : 'lists link image charmap preview hr table code autoresize',
        menubar: false,
        toolbar: "undo redo | formatselect | bold italic | underline strikethrough | charmap link image | alignleft aligncenter alignright | outdent indent | bullist numlist | preview code | hr table",
        default_link_target: "_blank"
      });
      tinymce.init({
        selector: '[data-editor=r]',
        plugins : 'autoresize',
        readonly: true,
        toolbar: false,
        menubar: false,
        statusbar: false,
        default_link_target: "_blank"
      });
    });
  }

  setEditorContent = (content) => tinymce.activeEditor.setContent(content);
  getEditorContent = () => tinymce.activeEditor.getContent({format : 'raw'});
}
