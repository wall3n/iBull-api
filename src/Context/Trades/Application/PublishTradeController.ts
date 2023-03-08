import PublishTradeRepository from "./PublishTradeRepository";
import Trade from "../Domain/Trade";
import UserRepository from "../../User/Application/UserRepository";
import SanitizeTrade from "./SanitizeTrade";

const publishTradeController = (publishTradeRepository: PublishTradeRepository, userFindRepository: UserRepository) => async (trade: Trade) => {
	const { user } = trade
	const { id } = user

	const UserFind = await userFindRepository.getUserById(id)
	if(!UserFind){
		throw new Error('Your user is not found')
	}

	const sanitizedTrade = await SanitizeTrade(trade)
	if(!sanitizedTrade){
		throw new Error('Your trade is invalid')
	}
	const publishedTrade = await publishTradeRepository.storeTrade(sanitizedTrade)
	if(!publishedTrade){
		throw new Error('Your trade cannot be published')
	}
	return publishedTrade
}

export default publishTradeController
