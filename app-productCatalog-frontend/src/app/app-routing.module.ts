import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  { 
    path: 'home', 
    loadChildren:'./components/home/home.module#HomeModule'
  },  
  { 
    path: 'products', 
    loadChildren:'./components/products/products.module#ProductsModule'
  },
  { 
    path: 'sign-in', 
    loadChildren:'./components/sign-in/sign-in.module#SignInModule'
  },
  { 
    path: 'sign-up', 
    loadChildren:'./components/sign-up/sign-up.module#SignUpModule'
  },
  
  { path: '', redirectTo: "/home", pathMatch: "full" }, 
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
