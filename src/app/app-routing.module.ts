import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { IndexComponent } from './index/index.component';
import { TerrainComponent } from './terrain/terrain.component';
import { CategoryComponent } from './category/category.component';
import { TaxeComponent } from './taxe/taxe.component';
import { DetailsComponent } from './details/details.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'user', component: UserComponent },
  { path: 'index', component: IndexComponent },
  {path:'terrain',component:TerrainComponent},
  {path:'category',component:CategoryComponent},
  {path:'taxe',component:TaxeComponent},
  {path:'details',component:DetailsComponent},
  {path:'profile',component:ProfileComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
