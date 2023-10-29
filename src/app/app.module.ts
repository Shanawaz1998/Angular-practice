import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { InlineComponent } from './MyComponents/inline/inline.component';
import { MyModuleModule } from './my-module/my-module.module';
import { HeaderComponent } from './MyComponents/header/header.component';
import { FormsComponent } from './MyComponents/forms/forms.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { ChildComponent } from './MyComponents/child/child.component';
import { InrToUsdPipe } from './Pipes/inr-to-usd.pipe'
import { ReactiveFormsModule } from '@angular/forms';
import { RedElDirective } from './red-el.directive';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { UserDetailsComponent } from './MyComponents/user-details/user-details.component';
import { CompDetailsComponent } from './MyComponents/comp-details/comp-details.component';
import { FooterComponent } from './MyComponents/footer/footer.component';
import { HttpClientModule} from '@angular/common/http';
import { AdminLLComponent } from './MyComponents/admin-ll/admin-ll.component';
import { UserLLComponent } from './MyComponents/user-ll/user-ll.component'




@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    InlineComponent,
    HeaderComponent,
    FormsComponent,
    ChildComponent,
    InrToUsdPipe,
    RedElDirective,
    ErrorPageComponent,
    HomeComponent,
    UserDetailsComponent,
    CompDetailsComponent,
    FooterComponent,
    AdminLLComponent,
    UserLLComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyModuleModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
