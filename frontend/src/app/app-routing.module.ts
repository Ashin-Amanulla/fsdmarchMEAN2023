import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddItemComponent } from './pages/add-item/add-item.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { EditItemComponent } from './pages/edit-item/edit-item.component';

const routes: Routes = [
  {
    path:'',component: HomeComponent
  },
  {
    path:'addItem',component: AddItemComponent
  },
  {
    path:'editItem/:id',component: EditItemComponent
  },
  {
    path:'**',component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
