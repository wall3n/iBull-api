import Trade from "../Domain/Trade";

export default function SanitizeTrade(trade: Trade){
	const { type, shares, price } = trade
	if(type !== 'buy' && type !== 'sell'){
		throw new Error('THe type is invalid ')
	}

	if(shares < 10 || shares > 30){
		throw new Error('The amount of shares is invalid')
	}

	if (130.42 > price || price > 195.65){
		throw new Error('The price was invalid')
	}
	return trade


}
