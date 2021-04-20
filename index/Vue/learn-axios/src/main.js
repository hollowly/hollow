import Vue from "vue";
import App from "./App";
import router from "./router";
import axios from "axios";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  render: h => h(App)
});

//---------------------------------------------------------------------------
// 1.axios的基本使用
// axios({
// 	url:'http://123.207.32.32:8000/home/multidata',
// 	method:'get'
// }).then(res => {
// 	console.log(res);
// })

// axios({
// 	url:'http://123.207.32.32:8000/home/data?type=sell&page=1',
// 	method:'get',
// }).then(res => {
// 	console.log(res);
// })

// axios({
// 	url:'http://123.207.32.32:8000/home/',
// 	// 专门针对get请求参数拼接
// 	params: {
// 		type:'pop',
// 		page:'1'
// 	}
// }).then(res => {
// 	console.log(res);
// })

//---------------------------------------------------------------------------
// 2.axios发送并发请求
// axios.all([axios({
// 	url:"http://aaaaa/home"
// }),axios({
// 	url:'http://bbbb/home',
// 	params: {
// 		type:'data',
// 		page:4
// 	}
// })]).then(res => {
// 	console.log(res);
// })

//---------------------------------------------------------------------------
// 3.axios全局配置
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 5000

// axios.all([axios({
// 	url:'/home/multidata'
// }),axios({
// 	url:'/home/data'
// })]).then(results => {
// 	console.log(results);
// })

//---------------------------------------------------------------------------
// 4.创建对应的axios实例
// const instance1 = axios.create({
// 	baseURL:'http://123.207.32.32:8000',
// 	timeout:5000,
// })

// instance1({
// 	url:'home/multidata',
// }).then(res => {
// 	console.log(res);
// })

// const instance2 = axios.create({
// 	baseURL:'http://123.207.30.30:8000',
// 	timeout:10000,
// 	headers:{},
// })

// instance2({
// 	url:'home/data',
// 	params: {
// 		type:"pop",
// 		page:3
// 	}
// }).then(res => {
// 	console.log(res);
// })

//---------------------------------------------------------------------------
// 5.封装request模块

// 方法一：
// import {requset} from './network/request'

// requset({
// 	url:'/home/multidata'
// },res => {
// 	console.log(res);
// },err => {
// 	console.log(err);
// })
//------------------------------

// 方法二：
// import {requset} from './network/request'

// requset({
// 	baseConfig: {
// 		url:'/home/multidata'
// 	},
// 	success: function(res) {
// 		console.log(res);
// 	},
// 	failure: function(err) {
// 		console.log(err);
// 	}
// })
//------------------------------

// 方法三/方法四
import { request } from "./network/request";

request({
  url: "/home/data",
  params: {
    type: "pop",
    page: 5
  }
})
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });
