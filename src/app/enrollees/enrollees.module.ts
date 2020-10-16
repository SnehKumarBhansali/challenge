import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { EnrolleesListComponent } from './enrollees-list/enrollees-list.component';
import { EnrolleesRoutingModule } from './enrolless-routing.module';
import { EnrolleesComponent } from './enrollees/enrollees.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EnrolleesListComponent,
    EnrolleesComponent,
  ],
  imports: [
    CommonModule,
    ClarityModule,
    EnrolleesRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    EnrolleesComponent
  ],
  providers: [
    DataService
  ]
})
export class EnrolleesModule { }
