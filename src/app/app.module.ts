import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AccountComponent } from "./account/account.component";
import { ServicesComponent } from "./services/services.component";
import { LoginComponent } from "./account/login/login.component";
import { RegisterComponent } from "./account/register/register.component";
import { PasswordResetComponent } from "./account/password-reset/password-reset.component";
import { EmployeeComponent } from "./employee/employee.component";
import { AddEmployeeComponent } from "./employee/add-employee/add-employee.component";
import { DeleteEmployeeComponent } from "./employee/delete-employee/delete-employee.component";
import { EditEmployeeComponent } from "./employee/edit-employee/edit-employee.component";
import { ProjectsComponent } from "./projects/projects.component";
import { AddProjectComponent } from "./projects/add-project/add-project.component";
import { EditProjectComponent } from "./projects/edit-project/edit-project.component";
import { DeleteProjectComponent } from "./projects/delete-project/delete-project.component";
import { MaterialModule } from "./material.module";
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccountComponent,
    ServicesComponent,
    LoginComponent,
    RegisterComponent,
    PasswordResetComponent,
    EmployeeComponent,
    AddEmployeeComponent,
    DeleteEmployeeComponent,
    EditEmployeeComponent,
    ProjectsComponent,
    AddProjectComponent,
    EditProjectComponent,
    DeleteProjectComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
