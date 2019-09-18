import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { CheckTutorialGuard } from './services/tutorial/check-tutorial.guard';

const routes: Routes = [
  { path: '', redirectTo: 'tutorial', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'tutorial', loadChildren: './pages/tutorial/tutorial.module#TutorialPageModule'},
  { path: 'einstein', loadChildren: './pages/einstein/einstein.module#EinsteinPageModule' },
  { path: 'computadores', loadChildren: './pages/computadores/computadores.module#ComputadoresPageModule' },
  { path: 'profissoes', loadChildren: './pages/profissoes/profissoes.module#ProfissoesPageModule' },
  { path: 'aulas', loadChildren: './pages/aulas/aulas.module#AulasPageModule' },
  { path: 'encerramento', loadChildren: './pages/encerramento/encerramento.module#EncerramentoPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
