import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { AddProfileComponent } from './add-profile/add-profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { ReuestsComponent } from './reuests/reuests.component';
import { JobsComponent } from './jobs/jobs.component';
import { MynetworkComponent } from './mynetwork/mynetwork.component';
import { PostComponent } from './post/post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewAllPostsComponent } from './view-all-posts/view-all-posts.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { FormsModule } from '@angular/forms';
import { ProfileListComponent } from './profile-list/profile-list.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    AddProfileComponent,
    UpdateProfileComponent,
    ReuestsComponent,
    JobsComponent,
    MynetworkComponent,
    PostComponent,
    ViewAllPostsComponent,
    AllPostsComponent,
    CreatePostComponent,
    ProfileListComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class DashboardModule { }
