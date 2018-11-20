/**
 * @author Sonal Prajapati
 */

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
//-----------------------
import { OrderService } from '../order.service';
import { Order } from '../order.model';

@Component({
	selector: 'app-edit',
	templateUrl: './edit.component.html',
	styleUrls: [ './edit.component.css' ]
})
export class EditComponent implements OnInit {
	public editOrderForm: FormGroup;
	public orderDetails: Order;

	constructor(
		private fb: FormBuilder,
		private router: Router,
		private route: ActivatedRoute,
		private service: OrderService
	) {}

	ngOnInit() {
		this.editForm();
		this.getDetails();
	}
	public editForm(): void {
		this.editOrderForm = this.fb.group({
			id: [ '' ],
			emailId: [ '' ],
			name: [ '' ],
			date: [ '' ],
			mobileNumber: [ '' ],
			pincode: [ '' ],
			address: [ '' ],
			city: [ '' ],
			state: [ '' ]
		});
	}

	/**
	 * get the  form value for a validation
	 */

	public get emailId(): AbstractControl {
		return this.editOrderForm.get('emailId');
	}
	public get name(): AbstractControl {
		return this.editOrderForm.get('name');
	}
	public get mobileNumber(): AbstractControl {
		return this.editOrderForm.get('mobileNumber');
	}

	public get pincode(): AbstractControl {
		return this.editOrderForm.get('pincode');
	}
	public get address(): AbstractControl {
		return this.editOrderForm.get('address');
	}
	public get city(): AbstractControl {
		return this.editOrderForm.get('city');
	}

	public get date(): AbstractControl {
		return this.editOrderForm.get('date');
	}

	public get state(): AbstractControl {
		return this.editOrderForm.get('state');
	}

	public getDetails(): void {
		/**
     * get the id from the url using the snapshot
     */
		const id = +this.route.snapshot.paramMap.get('id');
		this.service.getOrderById(id).subscribe((data) => {
			this.orderDetails = data;

			/**
 * patch the value by getting the id and set into the form
 */
			this.editOrderForm.patchValue({
				id: this.orderDetails.id,
				emailId: this.orderDetails.emailId,
				name: this.orderDetails.name,
				mobileNumber: this.orderDetails.mobileNumber,
				pincode: this.orderDetails.pincode,
				address: this.orderDetails.address,
				city: this.orderDetails.city,
				state: this.orderDetails.state
			});
		});
	}

	/**
   * Edit the user order
   */
	public editOrder(): void {
		this.service.updateOrder(this.editOrderForm.value).subscribe(() => {
			this.router.navigate([ '/order/view' ]);
		});
	}
}
