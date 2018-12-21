import {Order,OrderToGood,Good} from '../database//models'
import {stateConfig} from '../config'

const {SUCCESS,ERR,SERERR} = stateConfig

export const _search = async (ctx) =>{

	let {shop,foods} = ctx.request.body

	try {

	}catch(err) {
		return {SERERR,err}
	}
}

export const _deatil = async (ctx) =>{

	let {shop,foods} = ctx.request.body

	try {

	}catch(err) {
		return {SERERR,err}
	}
}

export const _addGood = async (ctx) => {
	
	let tokenId = ctx.state.tokenId;

	const {name,pice} = ctx.request.body
	try {

		let shop = await Shop.findOne({where:{id:tokenId}})

		let good = await Good.create({
			name,
			pice,
			shopId:shop.id
		})
		return {state:SUCCESS,msg:'添加成功'}
	}
	catch(err) {
		return {state:ERR}
	}
	
}

export const _upGoodImg = async (ctx) => {

	const {goodId,img}  = ctx.request.body

	try {

		let good = await Good.update({
			'id':goodId,
			img
		})
		return {state:SUCCESS,msg:'添加成功'}
	}
	catch(err) {
		return {state:ERR}
	}
}

export const _perfectgood = async (ctx) => {
}