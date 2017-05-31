import Vue from 'vue'
import VueResource from 'vue-resource'
import VeeValidate from 'vee-validate';
import ImageCrop from './components/image-crop/VanillaImageCrop.vue'
import JobInput from './components/input-components/JobInput.vue'
Vue.use(VeeValidate);
Vue.use(VueResource);

// Vue.http.options.root = 'https://ryanbase-cefdb.firebaseio.com/';
Vue.http.options.root = 'http://localhost:8000/about/';

// Main Instance
new Vue({
    el: "#job",
    render: h => h(JobInput)
});
