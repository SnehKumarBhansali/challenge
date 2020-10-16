import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnrolleesListComponent } from './enrollees-list/enrollees-list.component';

const routes: Routes = [
    {
        path: '',
        component: EnrolleesListComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class EnrolleesRoutingModule { }
