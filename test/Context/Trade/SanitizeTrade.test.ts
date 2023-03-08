import Trade from "../../../src/Context/Trades/Domain/Trade";
import SanitizeTrade from "../../../src/Context/Trades/Application/SanitizeTrade";
import * as chai from 'chai'
import { assert } from "chai";

const mockedTrade: Trade = {
	id: 1,
	type: 'buy',
	user: {
		id: 1,
		name: 'Jhon Doe'
	},
	symbol: 'BTC',
	shares: 20,
	price: 155,
	timestamp: new Date()
}

const WrongPriceTrade = {
	...mockedTrade,
	price: 85,
}
const WrongSharesTrade = {
	...mockedTrade,
	shares: -20,
}
const WrongTypeTrade = {
	...mockedTrade,
	type: 'split',
}

describe('Sanitizing a TradeObject', () => {
	it('should return a Trade object if everything is ok', () => {
		const result = SanitizeTrade(mockedTrade)
		chai.expect(result).to.be.eql(mockedTrade)

	});
	it('should throw an Error with the wrong type trade', () => {
		assert.throw(() => {SanitizeTrade(WrongTypeTrade)}, Error, )
	})
	it('should return an Error with the wrong price', () => {
		assert.throw(() => {SanitizeTrade(WrongPriceTrade)}, Error)
	})
	it('should return an error if the shares are incorrect', () => {
		assert.throw(() => {SanitizeTrade(WrongSharesTrade)}, Error)
	})
})
