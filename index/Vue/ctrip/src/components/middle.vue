<!--  -->
<template>
	<div>
		<middleItem>
			<li slot='left'><a href="">海外酒店</a></li>
			<li slot='left'><a href="">团购</a></li>
			<li slot="right"><a href="">特惠酒店</a></li>
			<li slot="right"><a href="">客栈公寓</a></li>
		</middleItem>

		<middleItem style="background:rgb(156,86,161)">
			<li slot='left'><a href="">海外酒店1</a></li>
			<li slot='left'><a href="">团购1</a></li>
			<li slot="right"><a href="">特惠酒店1</a></li>
			<li slot="right"><a href="">客栈公寓1</a></li>
		</middleItem>

		<middleItem  style="background:rgb(93,111,187)">
			<li slot='left'><a href="">海外酒店2</a></li>
			<li slot='left'><a href="">团购2</a></li>
			<li slot="right"><a href="">特惠酒店2</a></li>
			<li slot="right"><a href="">客栈公寓2</a></li>
		</middleItem>

		<middleItem>
			<li slot='left'><a href="">海外酒店3</a></li>
			<li slot='left'><a href="">团购3</a></li>
			<li slot="right"><a href="">团购3</a></li>
			<li slot="right"><a href="">客栈公寓3</a></li>
		</middleItem>
	</div>
</template>

<script>
import middleItem from './middleItem'

export default {
	components: {
		middleItem
	}
}

</script>

<style>

</style>