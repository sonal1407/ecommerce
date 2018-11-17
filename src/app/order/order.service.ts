/**
 * @author Sonal Prajapati
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
//---------------------------------
import { Order } from './order';

@Injectable()
export class OrderService {
	constructor(private http: HttpClient) {}
	/**
	 * Url To Web APi
	 */
	private url = 'api/orders';
	/**
 * Get the order of the user from the Db.
 */
	public getOrder(): Observable<Order[]> {
		return this.http.get<Order[]>(this.url);
	}
	/**
	 * 
	 * @param id for perticular user id and get the data of the user 
	 */
	getOrderById(id: number): Observable<Order[]> {
		const url = this.url + '/' + id;
		return this.http.get<Order[]>(url);
	}
	/**
	 * 
	 * @param order add the user details
	 */
	public addOrder(order: Order): Observable<Order[]> {
		return this.http.post<Order[]>(this.url, order);
	}
	/**
	 * 
	 * @param order update the user record
	 */
	public updateOrder(order): Observable<Order[]> {
		return this.http.put<Order[]>(this.url, order);
	}
	/**
	 * 
	 * @param order delete user record by with the perticular id
	 */
	public deleteOrder(order: number): Observable<Order[]> {
		return this.http.delete<Order[]>(this.url + '/' + order);
	}
}
