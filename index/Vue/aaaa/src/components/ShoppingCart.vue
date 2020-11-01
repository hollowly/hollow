<!--  -->
<template>
	<div>
		<table>
			<thead>
				<tr>
					<th></th>
					<th>name</th>
					<th>data</th>
					<th>price</th>
					<th>number</th>
					<th>operation</th>
				</tr>
			</thead>

			<tbody>
				<tr v-for='(item, index) in books' :key='index'>
					<td>{{index + 1}}</td>
					<td>{{item.name}}</td>
					<td>{{item.data}}</td>
					<td>{{ '￥' + item.price * item.count + '.00'}}</td>
					<td>
						<button @click='add(index)'>+</button>
						{{item.count}}
						<button @click='sub(index)' :disabled='item.count <= 1'>-</button>
						</td>
					<td><button @click='remove(index)'>remove</button></td>
				</tr>
			</tbody>
		</table>
		<h2>Total price：{{'￥' + getPrice + '.00'}}</h2>
	</div>
</template>

<script>
export default {
	data () {
		return {
			books:[
				{id:1, name:'《算法导论》', data:'2006-9', price:85, count:1},
				{id:2, name:'《unix编程艺术》', data:'2006-2', price:59, count:1},
				{id:3, name:'《编程珠玑》', data:'2008-10', price:39, count:1},
				{id:4, name:'《代码大全》', data:'2006-3', price:128, count:1},
			]
		}
	},
	methods: {
		add(index) {
			this.books[index].count++
		},
		sub(index) {
			this.books[index].count--
		},
		remove(index) {
			this.books.splice(index,1)
		}
	},
	computed: {
		getPrice() {
			let result = 0
			for(let i = 0; i < this.books.length; i++) {
				result += this.books[i].price * this.books[i].count
			}
			return result
		}
	}

}

</script>

<style>
	table {
		text-align: center;
		border-collapse: collapse;
	}
	th, td {
		border: 1px solid rgb(126, 124, 124);
		padding: 10px;
	}
	th {
		background: #ccc;
	}
</style>