import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getMessaging, getToken } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging.js"

const firebaseConfig = {
  apiKey: "AIzaSyDam-02kb9L8Eifer0W74zDA9DDjCQhndA",
  authDomain: "muc-tieu.firebaseapp.com",
  projectId: "muc-tieu",
  storageBucket: "muc-tieu.appspot.com",
  messagingSenderId: "254030905097",
  appId: "1:254030905097:web:bf780cab5622f4ffa21dd8",
  measurementId: "G-Z16QDLK4EP"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);


getToken(messaging, { vapidKey: 'BBLMN-pJat1eXXXxwLj0y715N2E27h4-Ls4qTJql2F-fuoqhtdz0ChQ2jZu1sftvdoMbAUUhZiTlimCdD506vbo' }).then((currentToken) => {
  if (currentToken) {
   
  } else {
    
    console.log('No registration token available. Request permission to generate one.');
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
});
