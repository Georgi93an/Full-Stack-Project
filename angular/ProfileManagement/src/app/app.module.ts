import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SortByPipe } from './pipe/sort-by.pipe';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { TypeUserListComponent } from './components/type-user-list/type-user-list.component';
import { TypeUserFormComponent } from './components/type-user-form/type-user-form.component';
import { ProfileService } from './service/profile.service';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    SortByPipe,
    UserListComponent,
    UserFormComponent,
    TypeUserListComponent,
    TypeUserFormComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
