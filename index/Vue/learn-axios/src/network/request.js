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
	// 1.创建axios的实例
	const instance = axios.create({
		baseURL: 'http://123.207.32.32:8000',
		timeout:5000
	})

	// 2.axios的拦截器
		// 2.1请求拦截的作用
		// 2.1.1.config中的一些信息不符合服务器的要去
		// 2.1.2.每次发送网络请求时,都希望在界面中显示一个请求的图标
		// 2.1.3.某些网络请求(登录(token))，会携带一些特殊信息
	instance.interceptors.request.use(config => {
		console.log(config);
		return config
	}, err => {
		console.log(err);
	})

	// 2.2响应拦截
	instance.interceptors.request.use(res => {
		// console.log(res);
		return res.data
	}, err => {
		console.log(err);
	})


	// 3.发送真正的网络请求
	return instance(config)
}
