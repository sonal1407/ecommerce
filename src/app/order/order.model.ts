/**
 * @author Sonal Prajapati
 */
/**
 * @prop id   unique identifire
 * @prop emailId  return string type value
 * @prop name  return  string type value
 * @prop mobileNumber return number type value
 * @prop date return string type value
 * @prop pincode return number type value
 * @prop city return string type value
 * @prop state return string type value
 */
export class Order {
	public id: number;
	public emailId: string;
	public name: string;
	public mobileNumber: number;
	public date: string;
	public pincode: number;
	public address: string;
	public city: string;
	public state: string;
}
