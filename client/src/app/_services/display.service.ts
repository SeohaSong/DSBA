import { Router } from '@angular/router'
import { Location } from '@angular/common'
import { isPlatformBrowser } from '@angular/common'
import { Injectable, Inject, PLATFORM_ID } from '@angular/core'

import { UtilsService } from './utils.service'
import { DatabaseService } from "./database.service"
import { resolve } from 'url';
import { strictEqual } from 'assert';


declare const App: any
declare const FancyBox: any
declare const StyleSwitcher: any
declare const OwlCarousel: any

declare const $: any
declare const db: any
declare const auth: any
declare const firebase: any


@Injectable({
  providedIn: 'root'
})
export class DisplayService {


  constructor(
    private router: Router,
    private location: Location,
    private databaseService :DatabaseService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }


  _getUrlHead = () => {
    return this.router.url.split("?")[0].split("/")[1]
  }
  _getUrlTail = () => {
    let pipes = this.router.url.split("?")[0].split("/")
    return pipes[pipes.length-1]
  }
  _groupList(size, list){
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


  _initDisplay(resolve) {
    $("[data-_initScroll8Nav]").click(() => {
      $(document).scrollTop(0)
      $('.navbar-collapse.mega-menu.navbar-responsive-collapse.collapse')
      .removeClass("in")
    })
    resolve()
  }
  _startPage(loadData) {
    return new Promise(resolve => {
      if (isPlatformBrowser(this.platformId)) loadData(resolve)
    })
    .then(() => new Promise(this._initDisplay))
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


  startApp(app) {

    let getUrlHead = this._getUrlHead

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
          let head = getUrlHead()
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

    let turnPage = (() => {
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
    })

    let loadData = resolve => {
      let statuses = [
        "Ph.D. Candidate",
        "Ph.D. Student",
        "Integrated M.S/Ph.D. Candidate",
        "Integrated M.S/Ph.D. Student",
        "M.S. Student"
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

    component.turn_page = (change=0) => {
      let maxPage = component.page_length;
      let post_groups = component.post_groups;
      let updatedUrl = getUpdatedUrl(k2v => {
        let page = k2v["page"]
        let postId = k2v["postId"]

        if (!page) {page = 1} else {page = parseInt(page)+change}
        if(page < 1) {k2v["page"] = 1}
        else if (page > maxPage) {k2v["page"] = maxPage}
        else {k2v["page"] = page}

        if (postId) k2v["postId"] = parseInt(postId)

        component.page = k2v["page"]
        component.post_id = k2v["postId"]
      })
      component.post_group = post_groups[component.page-1];
      component.location.go(updatedUrl);
    }

    let getUpdatedUrl = f => {
      let [updatedUrl, pStr] = this.location.path().split('?')
      let k2v = {}
      if(pStr){
        pStr.split('&').forEach(a => {
          let [k, v] = a.split("=")
          k2v[k] = v
        })
      }
      f(k2v)
      updatedUrl += "?"
      updatedUrl += Object.keys(k2v).map(k => [k, k2v[k]].join("=")).join("&")
      return updatedUrl
    }

    let getPreview = (content) => {
      let txt = content.replace(/<.+?>/g, " ")
      let preview = txt.slice(0, 200)+" ..."
      return preview
    }

    let loadData = resolve => {
      let category = component.category
      let all_posts = component.all_posts
      let posts = component.posts
      let images = component.images
      let id2id = component.id2id
      let id = 0
      db.collection("posts").orderBy('date').get().then(data => {
        data.forEach(post_ => {
          id += 1
          id2id[id] = post_.id
          let post = post_.data()
          post.id = id
          post.preview = getPreview(post.content)
          all_posts[id] = post
          post.images.forEach(img => images.push(img))
          posts.push(post)
        })
        posts.reverse()
        if (category != 'overall') {
          component.posts = posts.filter(post => post.category == category)
        }
        component.post_n = Object.keys(all_posts).length
        component.post_groups = this._groupList(10, component.posts)
        component.page_length = component.post_groups.length
        component.turn_page()
        if (component.post_id) {component.showPost(component.post_id)}
        component.latest_posts = component.posts.slice(0, 2)
        resolve()
      })
    }
    this._startPage(loadData).then(() => {
      component.loading_status = false
      let doc = $(document)
      this._initScroll(doc, 80, 425)
      // ng for 이 랜더링 이후에 적용가능하도록.
      setTimeout(() => {
        let top = 0
        top += $('#daba-board').offset()['top']
        top -= $('.breadcrumbs-v1').offset()['top']
        $("[data-_scrollToContent]").click(() => $(document).scrollTop(top))
      })
    })
  }
}
