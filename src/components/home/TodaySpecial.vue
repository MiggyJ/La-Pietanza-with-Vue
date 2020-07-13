<template>
  <div class="TodaySpecial">
    <v-container>
    <v-layout>
      <v-col cols="12">
        <div class="d-flex flex-no-wrap justify-space-between">
          <v-col cols="4">
            <v-img src="@/assets/images/special.jpg" width="400">
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
          <v-col cols="8">
            <div class="display-3">
              Today's Special
            </div>
            <br>
            <p class="display-1">
              Not Just a Spaghetti and Meatballs
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam beatae esse delectus porro, quod accusamus rem magni, culpa dolores fugiat, nesciunt quisquam expedita qui dicta voluptas commodi! Minus voluptatibus harum illo veritatis, doloremque possimus accusamus, libero dolores expedita perferendis, error tenetur quod atque. Accusamus quia nihil corrupti doloribus similique omnis accusantium eum, consequuntur enim expedita ullam autem libero cum totam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sit laborum quia ea, ducimus laudantium, alias tenetur, nihil ratione commodi numquam nisi quidem neque ex mollitia ut ad maxime earum nemo eius. Velit dolores consequuntur maiores eius eaque iste quo fugiat temporibus totam exercitationem repellendus alias dicta natus placeat autem deleniti commodi beatae, assumenda ea provident quod quam odio aspernatur. Quidem necessitatibus non culpa, praesentium qui sed ipsam adipisci sint, veniam accusantium quas unde cum esse ipsa. Doloribus illo amet sapiente ad ullam facere quos asperiores mollitia aliquam, alias autem, neque minus ipsa veniam nostrum voluptatibus saepe vitae accusamus. Reprehenderit. 
            </p>
          </v-col>
        </div>
      </v-col>
    </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'TodaySpecial',

    data: () => ({
      
    }),
  }
</script>
