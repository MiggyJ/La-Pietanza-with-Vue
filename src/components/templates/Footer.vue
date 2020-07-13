<template>
  <v-footer dark padless>
    <v-card text tile color="black" width="100vw" class="center-text">
      <v-container fluid>
        <v-row>
          <v-col cols="4" align="center" justify="center">
            <v-img src="@/assets/images/Logo 4.png" width="200"></v-img>
          </v-col>
          <v-col cols="4">
            <v-card-text class="text-center">
              <p>Monday to Friday</p>
              <p>Breakfast: 5:00 AM to 8:00 AM</p>
              <p>Lunch: 11:00 AM to 2:00 PM</p>
              <p>Dinner: 7:00 PM to 9:00 PM</p>
              <p>Public Holidays: <span class="green--text">Closed</span></p>
            </v-card-text>
          </v-col>
          <v-col cols="4">
            <v-card-text class="text-center">
              <div class="headline">
                Contact Us
              </div>
              <div class="body text-left">
                <div>
                  <v-icon color="green">mdi-phone</v-icon>
                  0921-XXX-XXXX
                </div>
                <div>
                  <v-icon color="green">mdi-phone</v-icon>
                  0999-XXX-XXXX
                </div>
                <div>
                  <v-icon color="green">mdi-email</v-icon>
                  lapietanza@info.com
                </div>
                <div>
                  <v-icon color="green">mdi-map-marker</v-icon>
                  A-0321 Don Dawn Street, Quezon City, Philippines
                </div>
              </div>
            </v-card-text>
         </v-col>
        </v-row>
      </v-container>
      
    </v-card>
    <v-divider></v-divider>
    <v-col
      class="text-center"
      cols="12"
    >
      2020 - <strong class="green--text">La Pietanza</strong>
    </v-col>
  </v-footer>
</template>

<script>
  export default {
    name: 'Footer',

    data: () => ({
      
    }),
  }
</script>
