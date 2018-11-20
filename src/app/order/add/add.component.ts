/**
 * @author Sonal Prajapati
 */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';

//---------------------------//

import { OrderService } from '../order.service';
import { Router } from '@angular/router';
import { Order } from '../order.model';

@Component({
	selector: 'app-add',
	templateUrl: './add.component.html',
	styleUrls: [ './add.component.css' ]
})
export class AddComponent implements OnInit {
	public state1: string[];
	public order: Order;

	public addOrderForm: FormGroup;
	// Declare variable for regular expression
	public charecterRegEx: string;
	public emailRegEx: string;
	public numberRegEx: string;
	constructor(private fb: FormBuilder, private orderService: OrderService, private router: Router) {
		this.state1 = [
			'gujrat',
			'Andhra Pradesh(Hyderabad)',
			'Arunachal Pradesh(Itanagar)',
			'Assam(Dispur)',
			'Bihar(Patna)',
			'Chhattisgarh(Raipur)'
		];
		this.charecterRegEx = "^[a-zA-Z -']+";
		this.emailRegEx = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$';
		this.numberRegEx = '^[0-9]*$';
	}
	ngOnInit() {
		this.form();
	}

	/**
	 * get the  form value for a validation
	 */

	public get emailId(): AbstractControl {
		return this.addOrderForm.get('emailId');
	}
	public get name(): AbstractControl {
		return this.addOrderForm.get('name');
	}
	public get mobileNumber(): AbstractControl {
		return this.addOrderForm.get('mobileNumber');
	}
	public get date(): AbstractControl {
		return this.addOrderForm.get('date');
	}
	public get pincode(): AbstractControl {
		return this.addOrderForm.get('pincode');
	}
	public get address(): AbstractControl {
		return this.addOrderForm.get('address');
	}
	public get city(): AbstractControl {
		return this.addOrderForm.get('city');
	}
	public get state(): AbstractControl {
		return this.addOrderForm.get('state');
	}

	/**
	 * Add the user orderDetails
	 */
	public addOrder(data: any): void {
		/**
     * change the date format;
     */
		let dateFormatChange = data.date.day + '/' + data.date.month + '/' + data.date.year;
		/**
     * add the formatted value of the date.
     */
		data.date = dateFormatChange;
		this.order = data;

		this.orderService.addOrder(this.order).subscribe(() => this.router.navigate([ '/order/view' ]));
	}
	private form(): void {
		this.addOrderForm = this.fb.group({
			emailId: [ '', [ Validators.required, Validators.pattern(this.emailRegEx) ] ],
			name: [ '', [ Validators.required ] ],
			mobileNumber: [
				'',
				[ Validators.required, Validators.minLength(10), Validators.pattern(this.numberRegEx) ]
			],
			date: [ '', [ Validators.required ] ],
			pincode: [ '', [ Validators.required ] ],
			address: [ '', [ Validators.required ] ],
			city: [ '', [ Validators.required ] ],
			state: [ '', [ Validators.required ] ]
		});
	}
}
