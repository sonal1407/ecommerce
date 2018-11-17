/**
 * @author Sonal Prajapati
 */

import { InMemoryDbService } from 'angular-in-memory-web-api';
//-----------------------
import { Order } from './order/order';

export class InMemoryWebApiService implements InMemoryDbService {
	/**
	 * create Database
	 */
	createDb() {
		const orders: Order[] = [
			{
				id: 30,
				emailId: 'sonal@gmail.com',
				name: 'sonal',
				mobileNumber: 8511468965,
				date: '14/07/1995',
				pincode: 396001,
				address: 'halar',
				city: 'valsad',
				state: 'Gujrat'
			},
			{
				id: 31,
				emailId: 'nikul@gmail.com',
				name: 'nikul',
				mobileNumber: 8511469786,
				date: '14/07/1995',
				pincode: 396001,
				address: 'halar',
				city: 'valsad',
				state: 'Gujrat'
			}
		];
		return { orders };
	}
}
