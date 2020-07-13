<template>
  <div class="contact">
    <v-container>
      <MailSuccess :trigger="trigger" v-on:update:trigger="trigger = $event"/>
      <v-row>
        <v-col>
          <ContactForm />
        </v-col>
        <v-col>
          <ContactAds />
        </v-col>
      </v-row>
      <v-row class="mt-9">
        <TodaySpecial />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ContactForm from '@/components/contact/ContactForm.vue'
import ContactAds from '@/components/contact/ContactAds.vue'
import MailSuccess from '@/components/contact/MailSuccess.vue'
import TodaySpecial from '@/components/home/TodaySpecial.vue'

export default {
  name: 'Contact',
  data(){
    return {
      trigger: false
    }
  },
  components: {
    ContactForm,
    ContactAds,
    MailSuccess,
    TodaySpecial
  }
}
</script>
