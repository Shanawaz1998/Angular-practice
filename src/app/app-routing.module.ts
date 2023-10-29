import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './MyComponents/forms/forms.component';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { ChildComponent } from './MyComponents/child/child.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { UserDetailsComponent } from './MyComponents/user-details/user-details.component';
import { CompDetailsComponent } from './MyComponents/comp-details/comp-details.component';

const routes: Routes = [
  {
    path:'', component: HomeComponent
  },
  {
    path:'forms', component: FormsComponent
  },
  {
    path:'todo', component: TodosComponent,
    children:[
      {
        path:'userDetails', component: UserDetailsComponent
      },
      {
        path:'compDetails', component: CompDetailsComponent
      },
    ]
  },
  {
    path:'alphabets/:id', component: ChildComponent
  },
  {
    path:'**', component: ErrorPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
