<template>
	<v-container>
		<v-row>
			<v-col class="text-center">
				<center class="mt-2"><v-img src="@/assets/images/Logo 9.png" width="200"></v-img></center>
				<div class="headline mt-2">Welcome to</div>
				<div class="display-2 mt-3 mb-4 green--text">La Pietanza</div>
				<div class="body">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, consectetur dolore cumque suscipit nulla rerum sed aut error, tempora corrupti reprehenderit eum sequi. Delectus eum, quam tenetur ipsa culpa sint. Officiis animi suscipit quia delectus blanditiis fugiat tempore repellendus, ullam soluta exercitationem ut. Saepe, dolore ut? Natus eos quaerat quas.
				</div>
			</v-col>
			<v-col>
				<v-img src="@/assets/images/welcome.jpg" aspect-ratio="1.3">
					<template v-slot:placeholder>
						<v-row
							class="fill-height ma-0"
							align="center"
							justify="center"
						>
							<v-progress-circular indeterminate color="green"></v-progress-circular>
						</v-row>
					</template>
				</v-img>
			</v-col>
		</v-row>
	</v-container>
</template>
<script>
export default {
	name: 'Welcome',
	data(){
		return {
			
		}
	}
}
</script>></script>