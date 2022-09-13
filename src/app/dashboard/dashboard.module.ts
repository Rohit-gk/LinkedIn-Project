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


@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    AddProfileComponent,
    UpdateProfileComponent,
    ReuestsComponent,
    JobsComponent,
    MynetworkComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
