import { MainComponent } from './main/main.component';
import { ProfessionComponent } from './profession/profession.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { DirectorComponent } from './director/director.component';
import { AdministrativeComponent } from './administrative/administrative.component';
import { DistanseLearningComponent } from './distanse-learning/distanse-learning.component';
import { StudentComponent } from './student/student.component';
import { QualityComponent } from './quality/quality.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { ForeignLangComponent } from './foreign-lang/foreign-lang.component';
import { LawsComponent } from './laws/laws.component';
import { WorkGroupComponent } from './work-group/work-group.component';
import { ReportsComponent } from './reports/reports.component';
import { TeachersComponent } from './teachers/teachers.component';
import { CharterComponent } from './charter/charter.component';
import { ContractOrganizationComponent } from './contract-organization/contract-organization.component';
import { ContractStudentComponent } from './contract-student/contract-student.component';
import { IntershipProgramsComponent } from './intership-programs/intership-programs.component';
import { PracticeComponent } from './practice/practice.component';
import { ResearchWorksComponent } from './research-works/research-works.component';
import { StratedicPlanComponent } from './stratedic-plan/stratedic-plan.component';
import { LibraryComponent } from './library/library.component';
import { ContractUniverComponent } from './contract-univer/contract-univer.component';
import { ContractEmployersComponent } from './contract-employers/contract-employers.component'
import { AnnouncementComponent } from './announcement/announcement.component'
import { AlumniComponent } from './alumni/alumni.component'
import { IncollegeLifeComponent } from './incollege-life/incollege-life.component'
import { VisitsComponent } from './visits/visits.component'
import { CollaborationComponent } from './collaboration/collaboration.component'
import { VocationalEduComponent } from './vocational-edu/vocational-edu.component'
import { CareerCenterComponent } from './career-center/career-center.component'
import { CoWorkersComponent } from './co-workers/co-workers.component';
import { BoardDirectorComponent } from './board-director/board-director.component';
import { DirectorBoardComponent } from './director-board/director-board.component';
import { EducationBoardComponent } from './education-board/education-board.component';
import { SubjectBoardComponent } from './subject-board/subject-board.component';
import { EditorialBoardComponent } from './editorial-board/editorial-board.component';
import { EdumethodBoardComponent } from './edumethod-board/edumethod-board.component';
import { RegulationsComponent } from './regulations/regulations.component';
import { StudentBoardComponent } from './student-board/student-board.component';

import { ErrorComponent } from './error/error.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'professions', component: ProfessionComponent},
  {path: 'feedback', component: FeedbackComponent},
  
  {path: 'director', component: DirectorComponent},
  {path: 'administrative', component: AdministrativeComponent},
  {path: 'teachers', component: TeachersComponent},
  {path: 'library', component: LibraryComponent},
  {path: 'contract-univer', component: ContractUniverComponent},
  {path: 'contract-employers', component: ContractEmployersComponent},
  {path: 'announcement', component: AnnouncementComponent},
  {path: 'alumni', component: AlumniComponent},
  {path: 'career-center', component: CareerCenterComponent},

  
  {path: 'distance-learning', component: DistanseLearningComponent},
  {path: 'incollege-life', component: IncollegeLifeComponent},
  {path: 'collaboration', component: CollaborationComponent},
  {path: 'vocational-eduaction', component: VocationalEduComponent},
  {path: 'visits', component: VisitsComponent},
  {path: 'student-board', component: StudentBoardComponent},

  {path: 'applicant', component: ApplicantComponent},
  {path: 'student', component: StudentComponent},
  {path: 'quality', component: QualityComponent},
  {path: 'foreign-lang', component: ForeignLangComponent},
  {path: 'laws', component: LawsComponent},
  {path: 'work-group', component: WorkGroupComponent},
  {path: 'reports', component: ReportsComponent},
  {path: 'charter', component: CharterComponent},
  {path: 'contract-student', component: ContractStudentComponent},
  {path: 'intership-programs', component: IntershipProgramsComponent},
  {path: 'practice', component: PracticeComponent},
  {path: 'stratedic-plan', component: StratedicPlanComponent},
  {path: 'research-works', component: ResearchWorksComponent},
  {path: 'contract-organization', component: ContractOrganizationComponent},
  {path: 'regulations', component: RegulationsComponent},
  
  {path: 'subject-board', component: SubjectBoardComponent},
  {path: 'board-director', component: BoardDirectorComponent},
  {path: 'director-board', component: DirectorBoardComponent},
  {path: 'education-board', component:EducationBoardComponent },
  {path: 'co-workers', component: CoWorkersComponent },
  {path: 'edumethod-board', component:EdumethodBoardComponent },
  {path: 'editorial-board', component:EditorialBoardComponent },

  {path: 'error', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
