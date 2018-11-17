/**
 * @author Sonal Prajapati
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//-----------------------
import { OrderRoutingModule } from './order-routing.module';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { OrderService } from './order.service';

@NgModule({
	imports: [ CommonModule, OrderRoutingModule, ReactiveFormsModule, NgbModule ],
	declarations: [ AddComponent, ViewComponent, EditComponent ],
	providers: [ OrderService ]
})
export class OrderModule {}
