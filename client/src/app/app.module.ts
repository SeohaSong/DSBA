import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'

import { UploaderComponent } from './uploader/uploader.component';
import { MainComponent } from './main/main.component';
import { MembersComponent } from './members/members.component';
import { ProfessorComponent } from './members/professor/professor.component';
import { StudentsComponent } from './members/students/students.component';
import { ResearchesComponent } from './researches/researches.component';
import { PublicationsComponent } from './publications/publications.component';
import { ProjectsComponent } from './projects/projects.component';
import { BoardComponent } from './board/board.component';


@NgModule({
  declarations: [
    AppComponent,
    UploaderComponent,
    MainComponent,
    MembersComponent,
    ProfessorComponent,
    StudentsComponent,
    ResearchesComponent,
    PublicationsComponent,
    ProjectsComponent,
    BoardComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
