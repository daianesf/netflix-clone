import { Routes } from '@angular/router';

import { ListaFilmesComponent } from './views/lista-filmes/lista-filmes.component';
import { BombandoComponent } from './views/bombando/bombando.component';
import { MinhaListaComponent } from './views/minha-lista/minha-lista.component';
import { NotFoundComponent } from './views/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        component: ListaFilmesComponent,
    },
    {
        path: 'bombando',
        component: BombandoComponent,
    },
    {
        path: 'minha-lista',
        component: MinhaListaComponent,
    },
    {
        path: 'not-found',
        component: NotFoundComponent,
    },
    {
        path: '**',
        redirectTo: 'not-found',
    },
];
