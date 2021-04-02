<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" @sengMsg='handler'/>
  </div>
</template>

<script lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default ({
  name: 'Home',
  components: {
    HelloWorld,
  },
	setup() {
		const handler = (value) =>  {
			console.log(value);
		}
		return {
			handler
		}
	}
});
</script>
