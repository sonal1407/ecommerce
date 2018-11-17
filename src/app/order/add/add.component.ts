/**
 * @author Sonal Prajapati
 */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

//---------------------------
import { Order } from '../order';
import { OrderService } from '../order.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-add',
	templateUrl: './add.component.html',
	styleUrls: [ './add.component.css' ]
})
export class AddComponent implements OnInit {
	public orders: Order[];
	public state1:string[];
	// Declare variable for regular expression
	public charecterRegEx: string;
	public emailRegEx: string;
	public numberRegEx: string;
	constructor(private fb: FormBuilder, private orderService: OrderService,private router:Router) {
		this.orders = [];
		this.state1=[
			'gujrat',
		'	Andhra Pradesh(Hyderabad)',
			'Arunachal Pradesh(Itanagar)',
			'Assam(Dispur)',
			'Bihar(Patna)',
			'Chhattisgarh(Raipur)',
			
		]
		this.charecterRegEx = "^[a-zA-Z -']+";
		this.emailRegEx = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$';
		this.numberRegEx = '^[0-9]*$';
	}

	addOrderForm = this.fb.group({
		emailId: [ '', [ Validators.required, Validators.pattern(this.emailRegEx) ] ],
		name: [ '', [ Validators.required ] ],
		mobileNumber: [ '', [ Validators.required, Validators.minLength(10), Validators.pattern(this.numberRegEx) ] ],
		date: [ '', [ Validators.required ] ],
		pincode: [ '', [ Validators.required ] ],
		address: [ '', [ Validators.required ] ],
		city: [ '', [ Validators.required ] ],
		state: [ '', [ Validators.required ] ]
	});

	/**
	 * get the  form value for a validation
	 */

	
	
	public get mobileNumber() {
		return this.addOrderForm.get('mobileNumber');
	}
	public get date() {
		return this.addOrderForm.get('date');
	}
	public get pincode() {
		return this.addOrderForm.get('pincode');
	}
	public get address() {
		return this.addOrderForm.get('address');
	}
	public get city() {
		return this.addOrderForm.get('city');
	}
	public get state() {
		return this.addOrderForm.get('state');
	}

	ngOnInit() {}
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
		this.orderService.addOrder(data).subscribe((addOrders) => {
			
			this.orders = addOrders;
			
			this.router.navigate([ '/order/view' ]);
		});
	}
}
