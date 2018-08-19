import jwt from 'jsonwebtoken'
import { tokenConfig } from '../config'

const {key,algorithm,expiresIn} = tokenConfig

export const signToken = (data) => {
	const token = jwt.sign(data, key, { algorithm})
	return token
}

export const veriToken = (data) => {
	return jwt.verify(data, key)
}