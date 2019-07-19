import Vue from 'vue';

//youtube
/* import VueYoutube from 'vue-youtube';
Vue.use(VueYoutube); */

// Router Vue
import Router from 'vue-router';
Vue.use(Router);

// Swiper slider
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
Vue.use(VueAwesomeSwiper, {});



// Vee-Validate
import VeeValidate from 'vee-validate';

import IT from 'vee-validate/dist/locale/it';
import EN from 'vee-validate/dist/locale/en';
import DE from 'vee-validate/dist/locale/de';
import ES from 'vee-validate/dist/locale/es';

Vue.use(VeeValidate, {
    locale: 'en',
    fieldsBagName: 'veeFields',
     dictionary: {
        it: IT,
        en: EN,
        de: DE,
        es: ES,
    }
});

// Sweetalert2
import VueSweetalert2 from 'vue-sweetalert2';
Vue.use(VueSweetalert2);

// component vue ScrolTo
/* import VueScrollTo from 'vue-scrollto'
Vue.use(VueScrollTo, {
    container: "body",
    duration: 600,
    easing: "ease",
    offset: 0,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
}) */

/*
 * Imports
 */

//Componente Padre
import index from '../components/';

// Landing
import AppContent from '../components/landing/AppContent.vue'



/*
 * Components
 */
Vue.component('index',index);






// Routes
let router = new Router({
    mode:'history',
    routes: [
        {
            path: '/',
            name: 'AppContent',
            component: AppContent
        }
    ],
    scrollBehavior(to, from) { 
        if (to.hash) {
            if (from.path !== '/')  window.location.href = to.fullPath
        } else return { x: 0, y: 0 }
    },
});
export default router;