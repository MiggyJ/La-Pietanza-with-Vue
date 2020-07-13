<template>
	<v-form ref="contactForm">
		<v-container class="mt-n4">
			<div class="green--text display-2">Send us some feedback!</div>
			<small>(This site doesn't use a server-side script yet. Your message won't go anywhere.)</small>
			<v-text-field
				label="Name"
				v-model="name" 
				prepend-icon="mdi-account"
				:rules="nameRules"
			>
			</v-text-field>

			<v-text-field 
				label="E-mail" 
				v-model="email"
				type="email" 
				prepend-icon="mdi-email"
				:rules="emailRules"
			>
			</v-text-field>

			<v-textarea 
				label="Message" 
				rows="10" v-model="message" 
				prepend-icon="mdi-pencil-circle"
				:rules="messageRules"
			>
			</v-textarea>

			<v-btn color="green" dark class="float-right" @click="submitMessage">Submit</v-btn>
		</v-container>
	</v-form>
</template>

<script>
	export default {
		name: 'ContactForm',
		data(){
			return {
				valid: false,
				name: '',
				nameRules: [
					v => !!v || 'Name is Required',

				],
				email: '',
				emailRules: [
					v => !!v || 'E-mail is required',
					v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
				],
				message: '',
				messageRules: [
					v => !!v || 'Please enter a message.'
				]
			}
		},
		methods: {
			submitMessage(){
				if(this.$refs.contactForm.validate()){
					this.$refs.contactForm.reset()
					this.$parent.trigger = true
				}
				// this.$parent.trigger = false
			}
		}
	}
</script>