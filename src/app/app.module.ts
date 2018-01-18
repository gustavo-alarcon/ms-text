import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms' ;
import { MatButtonModule, 
          MatToolbarModule, 
          MatSidenavModule, 
          MatIconModule, 
          MatInputModule,
          MatCardModule,
          MatCheckboxModule,
          MatListModule,
          MatGridListModule,
          MatTableModule,
          MatPaginatorModule,
          MatTooltipModule,
          MatDialogModule,
          MatDatepickerModule,
          MatNativeDateModule,
          MatSelectModule,
          MatProgressBarModule,
          MatProgressSpinnerModule
        } from '@angular/material';
import { RouterModule , CanActivate } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MessagesComponent } from './components/messages/messages.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import {HttpClientModule} from '@angular/common/http';
import { ClientsService } from './services/clients.service';
import { InputModalComponent } from './components/input-modal/input-modal.component';
import { MessagesService } from './services/messages.service';
import { AuthService } from './services/auth.service';
import { ToastrModule } from 'ngx-toastr';
import { AuthGuard } from './guards/auth.guard';
import { AuthLoginGuard } from './guards/auth-login.guard';
import { ReactiveFormsModule } from '@angular/forms';
import { AddClientComponent } from './components/add-client/add-client.component';
import { HashLocationStrategy, LocationStrategy } from "@angular/common"; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MessagesComponent,
    DashboardComponent,
    ConfigurationComponent,
    InputModalComponent,
    AddClientComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule,
    MatListModule,
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    MatTooltipModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    RouterModule.forRoot([
     {
       path:'',
       canActivate: [AuthLoginGuard],
       component:LoginComponent
     } ,
     {
       path:"dashboard",
       canActivate: [AuthGuard],
       component:DashboardComponent
     },
     {
       path:"**",
       component: LoginComponent
     }
    ]),
    ToastrModule.forRoot(), // ToastrModule added
    ReactiveFormsModule,
  ],
  entryComponents:[
    InputModalComponent,
    AddClientComponent
  ],
  providers: [
    ClientsService,
    MessagesService,
    AuthService,
    AuthGuard,
    AuthLoginGuard,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
