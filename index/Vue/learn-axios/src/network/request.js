// 方法一：
// import axios from 'axios'

// export function requset(config, success, failure) {
// 	// 1.创建axios的实例
// 	const instance = axios.create({
// 		baseURL: 'http://123.207.32.32:8000',
// 		timeout:5000
// 	})

// 	instance(config).then(res => {
// 		success(res)
// 	}).catch(err => {
// 		failure(err)
// 	})
// }

//----------------------------------------------------------------
// 方法二：
// import axios from 'axios'

// export function requset(config) {
// 	// 1.创建axios的实例
// 	const instance = axios.create({
// 		baseURL: 'http://123.207.32.32:8000',
// 		timeout:5000
// 	})

// 	instance(config.baseConfig)
// 	.then(res => {
// 		config.success(res)
// 	})
// 	.catch(err => {
// 		config.failure(err)
// 	})
// }

//----------------------------------------------------------------
// 方法三
// import axios from 'axios'

// export function request(config) {
// 	return new Promise((resolve, reject) => {
// 		// 1.创建axios的实例
// 		const instance = axios.create({
// 			baseURL:'http://123.207.32.32:8000',
// 			timeout:5000
// 		})

// 		// 发生真正的网络请求
// 		instance(config)
// 		.then(res => {
// 			resolve(res)
// 		})
// 		.catch(err => {
// 			reject(err)
// 		})
// 	})
// }

//----------------------------------------------------------------
// 方法四：
import axios from 'axios'
export function request(config) {
	const instance = axios({
		baseURL:'http://123.207.32.32:8000',
		timeout:5000
	})

	return instance(config)
}