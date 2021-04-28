import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgenciesComponent } from './sections/agencies/agencies.component';
import { AgencyEditContainerComponent } from './sections/agencies/agency-edit/agency-edit.container';


const routes: Routes = [
  {
    path: '',
    component: AgenciesComponent,
  },
  {
    path: 'agencies',
    component: AgenciesComponent,
  },
  {
    path: 'edit/:id',
    data: { title: 'Edit' },
    component: AgencyEditContainerComponent,
  },
  {
    path: '**',
    redirectTo: '',
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
