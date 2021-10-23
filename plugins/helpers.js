import Vue from 'vue';
import helpers from '~/helpers/utils.js';

const plugin = {
	install (Vue, options) {
		Vue.prototype.$helpers = helpers; // we use $ because it's the Vue convention
	}
};

Vue.use(plugin);