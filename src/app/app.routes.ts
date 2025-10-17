import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/tabela', pathMatch: 'full' },
  { 
    path: 'tabela', 
    loadComponent: () => import('./features/tabela/tabela.component').then(m => m.TabelaComponent)
  },
  { 
    path: 'artilharia', 
    loadComponent: () => import('./features/artilharia/artilharia.component').then(m => m.ArtilhariaComponent)
  },
  { 
    path: 'noticias', 
    loadComponent: () => import('./features/noticias/noticias.component').then(m => m.NoticiasComponent)
  },
  { 
    path: 'equipe', 
    loadComponent: () => import('./features/equipe/equipe.component').then(m => m.EquipeComponent)
  },
  { 
    path: 'bolao', 
    loadComponent: () => import('./features/bolao/bolao.component').then(m => m.BolaoComponent)
  },
  { 
    path: 'resultados', 
    loadComponent: () => import('./features/resultados/resultados.component').then(m => m.ResultadosComponent)
  },
  { path: '**', redirectTo: '/tabela' }
];
