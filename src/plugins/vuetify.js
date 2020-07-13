import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
	theme: {
		themes: {
			light: {
				primary: '#62aa04',
				green: '#62aa04'
			},
			dark: {
				green: '#62aa04'
			}
		}
	}
});
