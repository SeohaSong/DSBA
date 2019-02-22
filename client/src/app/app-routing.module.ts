import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { UploaderComponent } from './uploader/uploader.component';
import { MainComponent } from './main/main.component';
import { MembersComponent } from './members/members.component';
import { ResearchesComponent } from './researches/researches.component'
import { PublicationsComponent } from './publications/publications.component';
import { ProjectsComponent } from './projects/projects.component';
import { BoardComponent } from './board/board.component';


const routes: Routes = [
  { path: 'uploader', component: UploaderComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'members', component: MembersComponent,
    children: [
      { path: '', redirectTo: 'overall', pathMatch: 'full' },
      { path: 'overall', component: MembersComponent},
      { path: 'professor', component: MembersComponent},
      { path: 'students', component: MembersComponent },
      { path: 'alumni', component: MembersComponent }
    ]
  },
  { path: 'researches', component: ResearchesComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'publications', component: PublicationsComponent,
    children: [
      { path: 'international-journal', component: PublicationsComponent},
      { path: 'domestic-journal', component: PublicationsComponent},
      { path: 'international-conference', component: PublicationsComponent },
      { path: 'domestic-conference', component: PublicationsComponent }
    ]
  },
  { path: 'board', component: BoardComponent },
  { path: 'board/overall', component: BoardComponent },
  { path: 'board/notice', component: BoardComponent },
  { path: 'board/news', component: BoardComponent },
  { path: 'board/seminar', component: BoardComponent },
  { path: 'board/photo', component: BoardComponent },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
