export default {
	// context：上下文
	aupdataInfo(context,payload) {
	// 	setTimeout(() => {
	// 		context.commit('updataInfo');
	// 		// 同时接收字符串和函数
	// 		console.log(payload.message);
	// 		payload.aaa();
	// 	}, 1000);
	// }
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				context.commit('updataInfo');
				console.log(payload);

				resolve('我是resolve传入的参数，需要then来接收')
		}, 1000)
		})
	}
}