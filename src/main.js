import Vue from 'vue'
import App from './App.vue'
import CommunicationEx from './CommunicationEx.vue'
import Animation from './components/animations/Animation.vue'
import MultiTarnsition from './components/animations/MultiTransition.vue'
import RyansAutocomplete from './components/test-components/RyansAutocomplete.vue'
import Deepstream from './components/test-components/Deepstream.vue'
import VueResource from 'vue-resource'
import NewEmailInput from './components/test-components/NewEmailInput.vue'
import VeeValidate from 'vee-validate';
import ImageCrop from './components/image-crop/ImageCrop.vue'
import CultureApp from './CultureApp.vue'
let interceptorSetup = function (request, next) {
    console.log(request);
    if(request.method == 'POST'){
    }
    next();
};
// request.method = 'PUT';

Vue.use(VeeValidate);
Vue.use(VueResource);

Vue.http.options.root = 'https://ryanbase-cefdb.firebaseio.com/';
Vue.http.interceptors.push(interceptorSetup);

export const eventBus = new Vue({
    methods: {
        changeFood(food){
            this.$emit('component4Event', food)
        }
    }
});

new Vue({
  el: '#app',
  render: h => h(App)
});

new Vue({
    el: '#test',
    render: h => h(CommunicationEx)
});

// new Vue({
//     el: '#animation',
//     render: h => h(RyansAutocomplete)
// });

// new Vue({
//     el: '#animation',
//     render: h => h(Deepstream)
// })

// new Vue({
//     el: "#animation",
//     render: h => h(ImageCrop)
// });

new Vue({
    el: "#croppie",
    render: h => h(CultureApp)
});