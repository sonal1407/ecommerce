/**
 * @author Sonal Prajapati
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
/**
 * route to the url
 */
const routes: Routes = [
	{ path: 'view', component: ViewComponent },
	{ path: 'add', component: AddComponent },
	{ path: 'edit/:id', component: EditComponent },
	{ path: '', redirectTo: 'view', pathMatch: 'full' }
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class OrderRoutingModule {}
