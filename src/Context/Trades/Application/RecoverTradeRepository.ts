import Trade from "../Domain/Trade";

export default interface TradeRepository {
	getAllTrades(): Promise<Trade[]>
}
