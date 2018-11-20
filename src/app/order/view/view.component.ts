/**
 * @author Sonal Prajapati
 */
import { Component, OnInit } from '@angular/core';
//--------------------------
import { OrderService } from '../order.service';
import { Order } from '../order.model';

@Component({
	selector: 'app-view',
	templateUrl: './view.component.html',
	styleUrls: [ './view.component.css' ]
})
export class ViewComponent implements OnInit {
	public orders: Order[];
	constructor(private orderService: OrderService) {
		this.orders = [];
	}
	/**
 * Get the value of the user from the server
 */
	public getOrders(): void {
		this.orderService.getOrder().subscribe((order) => {
			this.orders = order;
			console.log(this.orders);
		});
	}
	ngOnInit() {
		this.getOrders();
	}
	/**
   * @param id by the particular iddelete the record of the user
   */
	public deleteOrder(id: number) {
		this.orderService.deleteOrder(id).subscribe(() => {
			this.getOrders();
		});
	}
}
