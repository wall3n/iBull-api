import Trade from "../Domain/Trade";

export default interface PublishTradeRepository {
	storeTrade(trade: Trade): Promise<Trade>
}
