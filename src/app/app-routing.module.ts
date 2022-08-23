import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FromSystemComponent } from './from-system/from-system.component';
import { ToSystemComponent } from './to-system/to-system.component';

const routes: Routes = [
  { path: 'to-system', component: ToSystemComponent },
  { path: 'from-system', component: FromSystemComponent },
  { path: '', redirectTo: 'to-system', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
