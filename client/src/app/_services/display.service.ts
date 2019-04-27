import { Router } from '@angular/router'
import { Location } from '@angular/common'
import { isPlatformBrowser } from '@angular/common'
import { Injectable, Inject, PLATFORM_ID } from '@angular/core'

import { DatabaseService } from "./database.service"


declare const App: any
declare const FancyBox: any
declare const StyleSwitcher: any
declare const OwlCarousel: any

declare const $: any
declare const db: any
declare const auth: any
declare const tinymce: any
declare const firebase: any


@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  constructor(
    private router: Router,
    private location: Location,
    private databaseService :DatabaseService,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) { }
  

  _getUrlHead = () => {
    return this.router.url.split("?")[0].split("/")[1]
  }
  _getUrlTail = () => {
    let pipes = this.router.url.split("?")[0].split("/")
    return pipes[pipes.length-1]
  }
  _groupList = (size, list) => {
    let groups = []
    let group_idxs = []
    let n_group = parseInt(""+(list.length-1)/size)+1
    for (let i=0; i < n_group; i++) {
      groups.push([])
      for (let i_=0; i_ < size; i_++) group_idxs.push(i)
    }
    for (let i=0; i < list.length; i++) {
      groups[group_idxs[i]].push(list[i])
    }
    return groups
  }
  _initScroll(doc, top_pad, bottom_pad) {
    let nav = $("[data-nav]")
    let init_top = parseInt(nav.css('top'))
    let run = () => {
      let scroll_top = doc.scrollTop()
      let top = init_top-scroll_top
      let nav_h = parseInt(nav.css('height'))
      let body_h = parseInt($('body').css('height'))
      let bottom = body_h-top_pad-scroll_top-nav_h
      let top_cutoff = top-top_pad
      let bottom_cutoff = bottom-bottom_pad
      if (top_cutoff > 0) {nav.css('top', top)}
      else if (bottom_cutoff < 0) {nav.css('top', top_pad+bottom_cutoff)}
      else {nav.css('top', top_pad)}
    }
    doc.on('scroll resize', run)
    setTimeout(run)
  }
  _setEditorContent = content => {
    let editor = tinymce.activeEditor
    if (editor) editor.setContent(content)
  }
  _updateViewCount = () => {
    console.log('뷰카운트 업데이트는 서버측에서 작업해야함');
  }
  _setEditor() {
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
  _savePost = (board, idx) => {
    let title = board.updating_title
    let content = tinymce.activeEditor.getContent({format : 'raw'})
    db.collection('posts').doc(board.posts[idx].id).set({
      title: title,
      content: content
    },{merge: true})
    return [title, content]
  }

  getUserName = () => auth.currentUser.displayName;
  getUserID = () => {
    if (auth.currentUser) return auth.currentUser.uid
  }

  _startPage(loadData) {
    return new Promise(resolve => {
      if (isPlatformBrowser(this.platformId)) loadData(resolve)
    })
    .then(() => new Promise(resolve => {
      $("[data-_initScroll8Nav]").click(() => {
        $(document).scrollTop(0)
        $('.navbar-collapse.mega-menu.navbar-responsive-collapse.collapse')
        .removeClass("in")
      })
      resolve()
    }))
  }

  startApp(app) {

    app.signIn = () => {
      let provider = new firebase.auth.GoogleAuthProvider()
      auth.languageCode = 'ko-KR'
      auth.signInWithRedirect(provider)
    }
    app.signOut = () => {
      auth.signOut()
      this.router.navigate(['main'])
    }

    if (isPlatformBrowser(this.platformId)) {
      new Promise(resolve => {
        app.categories = this.databaseService.categories
        resolve()
      })
      .then(() => {
        App.init()
        FancyBox.initFancybox()
        StyleSwitcher.initStyleSwitcher()
        this.router.events.subscribe(() => {
          let head = this._getUrlHead()
          if (head) {
            $("[data-_category]").removeClass("active")
            $("[data-_category="+head+"]").addClass('active')
          }
        })
      })
      let intervalId = setInterval(() => console.log('인증 과정이 진행중입니다.'))
      let _closeProcess = (message) => {
        app.currentUser = auth.currentUser
        $("#loading-ui").fadeOut(() => {
          clearInterval(intervalId)
          console.log(message)
        })
      }
      auth.onAuthStateChanged((user) => {
        if (user) {
          let data = {name: user.displayName, email: user.email, status: 0}
          db.collection('users').doc(user.uid).set(data)
          .then(() => '신규 가입되었습니다.').catch(() => '기존 사용자입니다.')
          .then(msg => {
            _closeProcess(msg+'\n'+data.name+': '+data.email)
          })
        } else _closeProcess('비회원입니다.')
      })
    }
  }


  initMain(comoponent) {

    let groupList = this._groupList
    let databaseService = this.databaseService

    let loadData = resolve => {
      let projects = databaseService.projects
      comoponent.project_groups = groupList(4, projects).slice(0, 1)
      let researches = databaseService.researches
      comoponent.research_groups = groupList(4, researches).slice(0, 1)
      comoponent.cooperations = databaseService.cooperations
      resolve()
    }
    this._startPage(loadData).then(() => {
      OwlCarousel.initOwlCarousel()
      $('#da-slider').cslider({autoplay: false})
    })
  }


  initMembers(component) {

    component.checkPage = pageTypes => {
      if (component.pageType == 'overall') return true;
      if (pageTypes.indexOf(component.pageType) >= 0) return true;
      return false;
    }

    let loadData = resolve => {
      let statuses = [
        "Ph.D. Candidate",
        "Ph.D. Student",
        "Integrated M.S/Ph.D. Candidate",
        "Integrated M.S/Ph.D. Student",
        "M.S. Candidate",
        "M.S. Student",
      ]
      db.collection("members").get().then(data => {
        let objs = []
        data.forEach(obj => objs.push(obj.data()))
        objs.sort((a, b): number => {
          [a, b] = [statuses.indexOf(a.status)+a.admission+a.name_ko,
                    statuses.indexOf(b.status)+b.admission+b.name_ko]
          if (a < b) return -1
          if (a >= b) return 1
        })
        component.totalStudents = objs
        component.loadingStatus = false
        resolve()
      })
    }
    this._startPage(loadData).then(() => {
      let turnPage = () => {
        let tail = this._getUrlTail()
        $("[data-_membersBtn]").removeClass("active")
        $("[data-_membersBtn="+tail+"]").addClass("active")
        this.router.navigate(['members', tail]).then(() => {
          component.pageType = tail
          let members: any[]
          let overall = component.totalStudents.slice()
          let students = overall.filter(val => val.type == 'students')
          let alumni = overall.filter(val => val.type == 'alumni').reverse()
          if (tail == 'overall') members = students.concat(alumni)
          if (tail == 'students') members = students
          if (tail == 'alumni') members = alumni
          if (tail != 'professor') {
            component.studentPairs = this._groupList(2, members)
          }
        })
      }
      $("[href^='/members']").click(() => turnPage())
      turnPage()
    })
  }


  initSlides(component) {

    let initSection = (doc, top_pad) => {
      $("a[data-section]").click((e) => {
        let id = $(e.currentTarget).data('section')
        let scroll_top = $("div[data-section="+id+"]").offset().top
        doc.scrollTop(scroll_top-top_pad)
      })
    }
    let initPagenation = () => {
      let lsts = $("[data-pagenation-lst]")
      let btns = $("[data-pagenation-btn]")
      $(lsts[0]).addClass('in')
      $(btns[0]).addClass('in')
      btns.click((e) => {
        let btn = $(e.currentTarget)
        let lst = lsts[btn.data('pagenation-btn')]
        lsts.removeClass('in')
        btns.removeClass('in')
        btn.addClass('in')
        $(lst).addClass('in')
      })
    }

    let loadData = resolve => {
      let head = this._getUrlHead()
      let datas: any
      if (head == 'researches') datas = this.databaseService.researches
      else if (head == 'projects') datas = this.databaseService.projects
      component.datas = datas
      component.dataGroups = this._groupList(4, datas)
      component.isPagination = () => component.dataGroups.length > 1
      resolve()
    }
    this._startPage(loadData).then(() => {
      let doc = $(document)
      initSection(doc, 100)
      initPagenation()
      this._initScroll(doc, 150, 450)
    })
  }


  initPublications(component) {

    let initTab = () => {
      let type = this._getUrlTail()
      $("[data-type0]").removeClass('in')
      $("[data-type0="+type+"]").addClass('in')
    }

    let loadData = resolve => {
      component.publications = this.databaseService.publications
      resolve()
    }
    this._startPage(loadData).then(() => {
      initTab()
      $("a[href^='/publications/']").click(() => {initTab()})
    })
  }

  initBoard(component) {

    let getUpdatedUrl = f => {
      let url = this.location.path()
      let updatedUrl = url.split('?')[0]
      let paramMap = this.router.parseUrl(url).queryParams
      f(paramMap)
      updatedUrl += "?"
      let keys = Object.keys(paramMap)
      updatedUrl += keys.map(k => [k, paramMap[k]].join("=")).join("&")
      return updatedUrl
    }
    let getPreview = content => {
      let txt = content.replace(/<.+?>/g, " ")
      let preview = txt.slice(0, 200)+" ..."
      return preview
    }

    component.category = this.router.url.split("?")[0].split("/").reverse()[0]
    component.initPost = () => {
      let url = this.location.path()
      let idx = this.router.parseUrl(url).queryParams['postIdx']
      if (!isNaN(idx)) component.showPost(idx)
    }
    component.initPage = () => {
      let url = getUpdatedUrl(paramMap => {
        let page = parseInt(paramMap["page"])
        if (isNaN(page)) paramMap["page"] = page = 1
        component.post_group = component.post_groups[page-1]
      })
      this.location.go(url)
    }
    component.turnPage = change => {
      let post_groups = component.post_groups;
      let url = getUpdatedUrl(paramMap => {
        let page = parseInt(paramMap["page"])
        let cond1 = change < 0 && 1 < page
        let cond2 = change > 0 && post_groups.length > page
        if (cond1 || cond2) {page+=change
                             paramMap["page"] = page
                             component.post_group = post_groups[page-1]}        
      })
      this.location.go(url)
    }
    component.turnPost = change => {
      let posts = component.posts
      let url = getUpdatedUrl(paramMap => {
        let idx = parseInt(paramMap["postIdx"])
        let cond1 = change < 0 && 0 < idx
        let cond2 = change > 0 && posts.length-1 > idx
        if (cond1 || cond2) {
          idx += change
          paramMap["postIdx"] = idx
          component.post = posts[idx]
          this._setEditorContent(component.post.content)
        }
      })
      this.location.go(url)
    }
    component.showPost = idx => {
      component.updating_status = false
      component.post = component.posts[idx]
      this._setEditorContent(component.post.content)
      let url = getUpdatedUrl(paramMap => paramMap["postIdx"] = idx)
      this.location.go(url)
      this._updateViewCount()
      this._setEditor()
    }
    component.hidePost = () => {
      component.updating_status = false
      component.post = null
      let url = getUpdatedUrl(paramMap => delete paramMap["postIdx"])
      this.location.go(url)
    }
    component.toggleEditStatus = idx => {
      let uid = this.getUserID()
      if (uid) {
        if (component.updating_status) {
          let post = component.posts[idx];
          [post.title, post.content] = this._savePost(component, idx);
        } else {
          let post = component.posts[idx];
          component.updating_title = post.title;
        }
        new Promise((resolve, reject) => {
          resolve(component.updating_status = !component.updating_status)
        }).then(() => this._setEditor());
      } else alert('권한이 없습니다.')
    }
    component.deletePost = () => {
      if (confirm('삭제합니까?')) alert(
        '서버에서 직접 삭제하세요.삭제 방법은 가이드북을 참조하세요. (%VALUE%)'
        .replace('%VALUE%', component.post.id)
      )
    }
  
    let loadData = resolve => {
      let category = component.category
      let posts = component.posts
      let thumbnails = component.thumbnails
      let ref: any
      if (category == "overall") ref = db.collection("posts")
      else ref = db.collection("posts").where("category", "==", category)
      ref.orderBy('date', 'desc').get().then(data => {
        let idx = 0
        data.forEach(post_ => {
          let post = post_.data()
          post.idx = idx
          post.id = post_.id
          post.preview = getPreview(post.content)
          if (post.thumbnail) thumbnails.push(post.thumbnail)
          posts.push(post)
          idx += 1
        })
        let post_groups = this._groupList(5, component.posts)
        for (let i=0; i < post_groups.length; i++) post_groups[i].page = i+1
        component.post_groups = post_groups
        component.initPage()
        component.initPost()
        component.latest_posts = component.posts.slice(0, 2)
        resolve()
      })
    }
    this._startPage(loadData).then(() => {
      component.loading_status = false
      let doc = $(document)
      this._initScroll(doc, 80, 425)
      // ng for를 통한 랜더링 이후에 아래 스크립트가 적용 되도록.
      setTimeout(() => {
        let top = 0
        top += $('#daba-board').offset()['top']
        top -= $('.breadcrumbs-v1').offset()['top']
        $("[data-_scrollToContent]").click(() => $(document).scrollTop(top))
      })
    })
  }
}
