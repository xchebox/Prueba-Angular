import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './private/documents/index/index.component'


const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    data: {
      title: 'Documentos',
      description: 'Documentos',
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
