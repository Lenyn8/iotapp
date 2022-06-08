import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { MenuComponent } from './componentes/menu/menu.component';
import { LoginComponent } from './paginas/login/login.component';

import { HomeComponent } from './paginas/home/home.component';
import { RegistroComponent } from './registro/registro.component';


const routes: Routes = [
  { path: 'menu', component: MenuComponent},
  { path: 'login', component: LoginComponent},
  {path: "registro", component: RegistroComponent},  
  {path: 'home', component: HomeComponent},

  


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
