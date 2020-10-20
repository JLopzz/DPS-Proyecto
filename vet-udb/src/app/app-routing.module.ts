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
import { DetalleVisitaComponent } from './pages/detalle-visita/detalle-visita.component'

//guard
import { AuthGuard } from './guard/auth.guard'

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },//a login
  { path: 'login', component: LoginComponent },
  { path: 'nuevo-cliente', component: NuevoClienteComponent, canActivate:[AuthGuard] },
  { path: 'clientes', component: ClientesComponent, canActivate:[AuthGuard] },
  { path: 'visitas', component: VisitasComponent, canActivate:[AuthGuard] },
  { path: 'nueva-visita', component: NuevaVisitaComponent, canActivate:[AuthGuard] },
  { path: 'visitas/:id', component: DetalleVisitaComponent, canActivate:[AuthGuard] },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
