<template>
  <div id="app">
		<span class='hollow'>{{name}}</span>
<hr>
		<h1><router-link to='/basic'>vue</router-link></h1>
		<h1><router-link to='/v-bind'>v-bind</router-link></h1>
		<h1><router-link to='/v-ifANDv-for'>v-if and v-for</router-link></h1>
		<h1><router-link to='/ShoppingCart'>ShoppingCart</router-link></h1>
		<h1><router-link to='/v-model'>v-model</router-link></h1>
		<h1><router-link to='/parent-child-components'>parent and child components</router-link></h1>
		<h1><router-link to='slots'>slots</router-link></h1>
		<hr>
		<router-view :clis='lis' 
		:cnum1='num1' :cnum2='num2' 
		@num1Change='num1Change' @num2Change='num2Change'>
		<cpn>
			<template slot-scope='slot'>
				<ul>
					<li v-for='(item, index) in slot.data' :key='index'>{{item}} - </li>
				</ul>
			</template>
		</cpn>
		<cpn>
			<template slot-scope="slot">
				<ul>
					<li v-for='(item, index) in slot.data' :key='index'>{{item}} * </li>
				</ul>
			</template>
		</cpn>
		<cpn></cpn>
		</router-view>
  </div>
</template>

<script>
import cpn from './components/slots'
export default {
	name: 'App',
	data() {
		return {
			name:'hollow-learn-vue',
			lis:['jacascript','php','jquery','hello','world','vue'],
			num1: 1,
			num2: 2,
		}
	},
	methods: {
		num1Change(value) {
			this.num1 = parseFloat(value);
		},
		num2Change(value) {
			this.num2 = parseFloat(value);
		},
	},
	components: {
		cpn
	}
}
</script>
<style>
	.hollow {
		display: block;
		text-align: center;
		font-size: 50px;
		text-shadow: 1px 1px 4px blue;
	}
	a {
		color: red;
	}
	body{
		height: 100000px;
	}
</style>