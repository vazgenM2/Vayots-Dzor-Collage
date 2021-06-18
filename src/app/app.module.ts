import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { ProfessionComponent } from './profession/profession.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { DirectorComponent } from './director/director.component';
import { AdministrativeComponent } from './administrative/administrative.component';
import { DistanseLearningComponent } from './distanse-learning/distanse-learning.component';
import { StudentComponent } from './student/student.component';
import { QualityComponent } from './quality/quality.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { ForeignLangComponent } from './foreign-lang/foreign-lang.component';
import { ReportsComponent } from './reports/reports.component';
import { LawsComponent } from './laws/laws.component';
import { WorkGroupComponent } from './work-group/work-group.component';
import { ErrorComponent } from './error/error.component';
import { TeachersComponent } from './teachers/teachers.component';
import { LibraryComponent } from './library/library.component';
import { StratedicPlanComponent } from './stratedic-plan/stratedic-plan.component';
import { CharterComponent } from './charter/charter.component';
import { ContractStudentComponent } from './contract-student/contract-student.component';
import { ContractOrganizationComponent } from './contract-organization/contract-organization.component';
import { IntershipProgramsComponent } from './intership-programs/intership-programs.component';
import { ResearchWorksComponent } from './research-works/research-works.component';
import { PracticeComponent } from './practice/practice.component';
import { ContractUniverComponent } from './contract-univer/contract-univer.component';
import { ContractEmployersComponent } from './contract-employers/contract-employers.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { AlumniComponent } from './alumni/alumni.component';
import { IncollegeLifeComponent } from './incollege-life/incollege-life.component';
import { VocationalEduComponent } from './vocational-edu/vocational-edu.component';
import { CollaborationComponent } from './collaboration/collaboration.component';
import { VisitsComponent } from './visits/visits.component';
import { CareerCenterComponent } from './career-center/career-center.component';
import { DirectorBoardComponent } from './director-board/director-board.component';
import { BoardDirectorComponent } from './board-director/board-director.component';
import { EducationBoardComponent } from './education-board/education-board.component';
import { EditorialBoardComponent } from './editorial-board/editorial-board.component';
import { EdumethodBoardComponent } from './edumethod-board/edumethod-board.component';
import { SubjectBoardComponent } from './subject-board/subject-board.component';
import { CoWorkersComponent } from './co-workers/co-workers.component';
import { RegulationsComponent } from './regulations/regulations.component';
import { StudentBoardComponent } from './student-board/student-board.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ProfessionComponent,
    FeedbackComponent,
    DirectorComponent,
    AdministrativeComponent,
    DistanseLearningComponent,
    StudentComponent,
    QualityComponent,
    ApplicantComponent,
    ForeignLangComponent,
    ReportsComponent,
    LawsComponent,
    WorkGroupComponent,
    ErrorComponent,
    TeachersComponent,
    LibraryComponent,
    StratedicPlanComponent,
    CharterComponent,
    ContractStudentComponent,
    ContractOrganizationComponent,
    IntershipProgramsComponent,
    ResearchWorksComponent,
    PracticeComponent,
    ContractUniverComponent,
    ContractEmployersComponent,
    AnnouncementComponent,
    AlumniComponent,
    IncollegeLifeComponent,
    VocationalEduComponent,
    CollaborationComponent,
    VisitsComponent,
    CareerCenterComponent,
    DirectorBoardComponent,
    BoardDirectorComponent,
    EducationBoardComponent,
    EditorialBoardComponent,
    EdumethodBoardComponent,
    SubjectBoardComponent,
    CoWorkersComponent,
    RegulationsComponent,
    StudentBoardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // AgmCoreModule.forRoot({
    // apiKey:'AIzaSyCpKEwZkICP7L4D-GBbIFJ_coqsq0sRqRA'
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
