import axios from "axios";

export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: "http://127.0.0.1:8000/",
    timeout: 5000,
  });

  // 2.axios的拦截器
  // 2.1请求拦截的作用
  // 2.1.1.config中的一些信息不符合服务器的要去
  // 2.1.2.每次发送网络请求时,都希望在界面中显示一个请求的图标
  // 2.1.3.某些网络请求(登录(token))，会携带一些特殊信息
  instance.interceptors.request.use(
    (config) => {
      // 在发送请求之前做些什么
      if (config.method === "get") {
        // 如果是get，正常传输
        console.log("get传输");
        config.params = {
          api_token: sessionStorage.token,
          uid: sessionStorage.uid,
        };
      }
      if (config.method === "post") {
        // 如果是post传输，先编码在传输
        console.log("post传输");
        config.data = qs.stringify(config.data);
      }
      return config;
    },
    (err) => {
      // 对请求错误做些什么
      return Promise.reject(err);
    }
  );

  // 2.2响应拦截
  instance.interceptors.request.use(
    (res) => {
      // 对响应数据做点什么
      return res;
    },
    (err) => {
      // 对响应错误做点什么
      return Promise.reject(err);
    }
  );

  // 3.发送真正的网络请求
  return instance(config);
}
