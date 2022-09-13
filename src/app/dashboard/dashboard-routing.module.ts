import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProfileComponent } from './add-profile/add-profile.component';
import { DashboardComponent } from './dashboard.component';
import { JobsComponent } from './jobs/jobs.component';
import { MynetworkComponent } from './mynetwork/mynetwork.component';
import { PostComponent } from './post/post.component';
import { ProfileComponent } from './profile/profile.component';
import { ReuestsComponent } from './reuests/reuests.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'addprofile', component: AddProfileComponent },
      { path: 'updateprofile', component: UpdateProfileComponent },
      { path: 'requests', component: ReuestsComponent },
      { path: 'jobs', component: JobsComponent },
      { path: 'posts', component: PostComponent },
      { path: 'mynetwork', component: MynetworkComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
