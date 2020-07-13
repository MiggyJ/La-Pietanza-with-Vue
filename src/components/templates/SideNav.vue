<template>
	
	<div class="SideNav"> 
		<v-navigation-drawer
			fixed
			height="150"
			expand-on-hover
			hide-overlay
			permanent
			right
			style="margin-top: 280px; max-width: 160px;"
			v-show="scroll"
		>
			<v-list nav dense>
				<v-list-item link to="/" v-on:click="route">
					<v-list-item-icon>
						<v-icon>mdi-home</v-icon>
					</v-list-item-icon>
					<v-list-item-content>
						<v-list-item-title>
							Home
						</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item link to="/gallery" v-on:click="route">
					<v-list-item-icon>
						<v-icon>mdi-image</v-icon>
					</v-list-item-icon>
					<v-list-item-content>
						<v-list-item-title>
							Gallery
						</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item link to="/contact" v-on:click="route">
					<v-list-item-icon>
						<v-icon>mdi-message</v-icon>
					</v-list-item-icon>
					<v-list-item-content>
						<v-list-item-title>
							Contact Us
						</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
	</div>

</template>

<script>
	export default {
		name: 'SideNav',
		data(){
			return{
				scroll: false
			}
		},
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
				})
			},
			scroller(){
				if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
					this.scroll = true
				}else{
					this.scroll = false
				}
			}
		},
		created(){
			window.addEventListener('scroll', this.scroller)
		},
		mounted(){
			this.route()
		},
		destroyed(){
			window.removeEventListener('scroll', this.scroller)
		}
	}
</script>