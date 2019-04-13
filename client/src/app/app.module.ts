import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { UploaderComponent } from './uploader/uploader.component';
import { MainComponent } from './main/main.component';
import { MembersComponent } from './members/members.component';
import { ProfessorComponent } from './members/professor/professor.component';
import { StudentsComponent } from './members/students/students.component';
import { ResearchesComponent } from './researches/researches.component';
import { PublicationsComponent } from './publications/publications.component';
import { ProjectsComponent } from './projects/projects.component';
import { BoardComponent } from './board/board.component';

import { DisplayService } from './_services/display.service';
import { DatabaseService } from './_services/database.service';


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
    BrowserModule.withServerTransition({appId: 'DSBA'}),
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    DisplayService,
    DatabaseService,
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
