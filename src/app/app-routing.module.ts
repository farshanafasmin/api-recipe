import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinglerecipeComponent } from './singlerecipe/singlerecipe.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent },
  {path:'single/:id',component:SinglerecipeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
