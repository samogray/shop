import phones from './mockPhones'

export const fetchPhones = async () => {
	return new Promise((resolve, reject) => {
		resolve(phones)
		//reject('err')
	})
}