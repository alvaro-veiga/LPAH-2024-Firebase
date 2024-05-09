import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBrRW0Lhlk4XOXU94iUtlNA5tNB6-id-sI",
  authDomain: "lpah-20066.firebaseapp.com",
  projectId: "lpah-20066",
  storageBucket: "lpah-20066.appspot.com",
  messagingSenderId: "853602249331",
  appId: "1:853602249331:web:ae342296c9408112725806",
  measurementId: "G-9PEQDSNPNW"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);