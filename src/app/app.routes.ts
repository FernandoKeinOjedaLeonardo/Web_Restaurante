import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CartaComponent } from './pages/carta/carta.component';
import { EquipoComponent } from './pages/equipo/equipo.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { LocalesComponent } from './pages/locales/locales.component';
import { AccederComponent } from './pages/acceder/acceder.component';

export const routes: Routes = [
    {path: "inicio", component: InicioComponent},
    {path: "carta", component: CartaComponent},
    {path: "equipo", component: EquipoComponent},
    {path: "contacto", component: ContactoComponent},
    {path: "locales", component: LocalesComponent},
    {path: "acceder", component: AccederComponent}

];
