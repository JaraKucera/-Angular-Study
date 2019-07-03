import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from '../app/components/users/users.component'
import { DetailsComponent } from '../app/components/details/details.component';
import { PostsComponent } from '../app/components/posts/posts.component';

const routes: Routes = [
{
  path:'',
  component: UsersComponent
},
{
  path: 'details/:id',
  component: DetailsComponent
},
{
  path:'posts',
  component: PostsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
