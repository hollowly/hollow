<!--  -->
<template>
	<div>
		<h1>v-model use</h1>
		<input type="text" v-model='message'> 
		<h3>{{message}}</h3>
	<hr>
		<h1>v-model combined with radio</h1>
		<label for="man">
			<input type="radio" id="man" v-model='sex' value="man"> man
		</label>
		<label for="woman">
			<input type="radio" id="woman" v-model="sex" value="woman"> wman
		</label>
		<h3>Your current gender：{{sex}}</h3>
	<hr>
		<h1>v-model combined with checkbox</h1>
		<label for="ball1">
			<input type="checkbox" id="ball1" value="Basketball" v-model='hobbys'> Basketball
		</label>
		<label for="ball2">
			<input type="checkbox" id="ball2" value="Football" v-model='hobbys'> Football
		</label>
		<label for="ball3">
			<input type="checkbox" id="ball3" value="Volleyball" v-model='hobbys'> Volleyball
		</label>
		<label for="ball4">
			<input type="checkbox" id="ball4" value="badminton" v-model='hobbys'> badminton
		</label>
		<label for="ball5">
			<input type="checkbox" id="ball5" value="Billiards" v-model='hobbys'> Billiards
		</label>
		
		<h3>Interest of your hobbys：{{hobbys}}</h3>
	<hr>
		<h1>v-model combined with select</h1>
		<select v-model='fruits'>
			<option value="Apple">Apple</option>
			<option value="Banana">Banana</option>
			<option value="Pineapple">Pineapple</option>
			<option value="Grape" selected>Grape</option>
			<option value="watermelon">watermelon</option>
		</select>
		<h3>The fruit of your choice：{{fruits}}</h3>
		<br>
		<select v-model='newfruits' multiple>
			<option value="Apple">Apple</option>
			<option value="Banana">Banana</option>
			<option value="Pineapple">Pineapple</option>
			<option value="Grape" selected>Grape</option>
			<option value="watermelon">watermelon</option>
		</select>
		<h3>The fruit of your choice：{{newfruits}}</h3>
	</div>
</template>

<script>
export default {
	data () {
		return {
			message:'hello Vue',
			sex:"man",
			hobbys:[],
			fruits:'',
			newfruits:[]
		}
	},

}

</script>

<style>

</style>