import Vue from 'vue'
import VueResource from 'vue-resource'
import NewEmailInput from './components/input-components/NewEmailInput.vue'
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
    el: "#animation",
    render: h => h(NewEmailInput)
});

// new Vue({
//     el: "#croppie",
//     render: h => h(CultureApp)
// });