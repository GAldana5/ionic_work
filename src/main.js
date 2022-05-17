/* Aqui se hace la importacion global */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';


//Cosas FIREBASE
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhyqE5yAnLGVyxmGgLjoPgjfrAgRczbTY",
  authDomain: "listafirebase-62cba.firebaseapp.com",
  databaseURL: "https://listafirebase-62cba-default-rtdb.firebaseio.com",
  projectId: "listafirebase-62cba",
  storageBucket: "listafirebase-62cba.appspot.com",
  messagingSenderId: "373033327260",
  appId: "1:373033327260:web:d1ef797d0becce5ed22b59"
};
// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);


const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(appFirebase);
  
router.isReady().then(() => {
  app.mount('#app');
});
