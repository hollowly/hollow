<!--  -->
<template>
	<div>
		<table>
			<thead>
				<tr>
					<th></th>
					<th>书籍名称</th>
					<th>出版日期</th>
					<th>价格</th>
					<th>购买数量</th>
					<th>操作</th>
				</tr>
			</thead>

			<tbody>
				<tr v-for='(item, index) in books' :key='item'>
					<td>{{index + 1}}</td>
					<td>{{item.name}}</td>
					<td>{{item.data}}</td>
					<td>{{item.price}}</td>
					<td>{{item.count}}</td>
					<td>
						<button>+</button>
						{{item.count}}
						<button>-</button>
					</td>
				</tr>
			</tbody>
		</table>
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