import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {GetComponent} from "./get/get.component";
import {PostComponent} from "./post/post.component";

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "get", component: GetComponent},
  {path: "post", component: PostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
