import {Order,OrderToGood,Good} from '../database//models'
import {stateConfig} from '../config'
import { createCipher } from 'crypto';

const {SUCCESS,ERR,SERERR} = stateConfig

export const _addOrder = async (ctx) =>{

	let {shop,foods} = ctx.request.body

	try {

		let order = await Order.create({
			shopId:'1',
			userId:'1'
		})

		let fooded = foods.map((i)=> {
			i.orderId = order.id
			return i
		})

		await OrderToGood.bulkCreate(fooded)
		
		return {SUCCESS}
	}catch(err) {
		return {SERERR,err}
	}
}

export const _getOrder = async (ctx) =>{
	let {orderId} = ctx.request.body
	try {
		let order = await Order.findAll({
			where:{id:orderId},
			include:[{
				model:Good
			}]
		})
		return {SUCCESS,order}
	}catch(err) {
		return {SERERR,err}
	}
}
