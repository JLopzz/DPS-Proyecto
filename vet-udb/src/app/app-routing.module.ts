import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { HomeComponent } from './pages/home/home.component'
import { LoginComponent } from './pages/login/login.component';
import { MascotasComponent } from './pages/mascotas/mascotas.component';
import { SignupComponent } from './pages/signup/signup.component';
import { VisitasComponent } from './pages/visitas/visitas.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'about', component: AboutComponent },
  { path: 'mascotas', component: MascotasComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'visitas', component: VisitasComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
