<template>

<nav>

	<v-app-bar text class="black white--text">
		<v-toolbar-title>
			<v-img src="@/assets/images/Logo 3.png" width="200"></v-img>
		</v-toolbar-title>
		<v-spacer></v-spacer>
		<v-btn color="green" v-on:click="route" rounded text to="/home">
			Home
		</v-btn>
		<v-btn color="green" v-on:click="route" rounded text to="/gallery" >
			Gallery
		</v-btn>
		<v-btn color="green" v-on:click="route" rounded text to="/contact" >
			Contact Us
		</v-btn>
	</v-app-bar>
</nav>

</template>

<script>
  export default {
    name: 'Toolbar',

    data: () => ({
      
		}),
		methods: {
			route: function(){
				var links = document.getElementsByClassName('v-btn--router')
				links.forEach(element => {
					if(!element.classList.contains('v-btn--active')){
						element.classList.add('white--text')
						element.classList.remove('green--text')
					}else{
						element.classList.add('green--text')
						element.classList.remove('white--text')
					}
				});
			}
		},
		mounted(){
			this.route()
		}
	}
</script>

<style>
	a{
		text-decoration: none;
	}
</style>