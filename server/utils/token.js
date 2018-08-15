import jwt from 'jsonwebtoken'

const key = 'eatNode'
const expiresIn = '120'

export const signToken = (data) => {
	const token = jwt.sign(data, key, { algorithm: 'HS256', expiresIn, })
	return token
}

export const verifyToken = (data) => {
	jwt.sign(data, key)
}