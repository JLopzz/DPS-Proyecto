import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { HomeComponent } from './pages/home/home.component'
import { LoginComponent } from './pages/login/login.component';
import { MascotasComponent } from './pages/mascotas/mascotas.component';
import { VisitasComponent } from './pages/visitas/visitas.component';
import { NuevoClienteComponent } from './pages/nuevo-cliente/nuevo-cliente.component'
import { NuevaVisitaComponent } from './pages/nueva-visita/nueva-visita.component'

const routes: Routes = [
  { path: 'home', component: HomeComponent },//quitar
  { path: '', redirectTo: 'login', pathMatch: 'full' },//a login
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'mascotas', component: MascotasComponent },//quitar
  { path: 'nuevo-cliente', component: NuevoClienteComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'visitas', component: VisitasComponent },
  { path: 'nueva-visita', component: NuevaVisitaComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
