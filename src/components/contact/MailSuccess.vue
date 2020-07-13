<template>
	<v-dialog
		v-model="$_option"
		width="300"
	>
		<v-card class="text-center">
			<v-card-title class="headline justify-center green--text">Success!</v-card-title>
			<v-card-text class="body">Your feedback has been sent.</v-card-text>
		</v-card>
	</v-dialog>
</template>

<script>
export default {
	name: 'MailSuccess',
	props: {
		trigger: {type: Boolean, default: false}
	},
	computed: {
		$_option: {
			get: function(){
				return this.trigger
			},
			set: function(){
				this.$emit('update:trigger', false)
			}
		}
	}
}
</script>