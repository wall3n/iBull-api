import User from "../../User/Domain/User";

export default interface Trade {
	id: Number;
	type: string;
	user: User;
	symbol: string;
	shares: Number;
	price: Number;
	timestamp: Date;
}
