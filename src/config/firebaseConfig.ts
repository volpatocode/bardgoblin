import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDFNArwR1mX5me41rQMiL2CZeeaJvypFKk",
  authDomain: "bardgoblin-1305b.firebaseapp.com",
  projectId: "bardgoblin-1305b",
  storageBucket: "bardgoblin-1305b.appspot.com",
  messagingSenderId: "1057873027637",
  appId: "1:1057873027637:web:7401ec548b31d0dab1477c",
  measurementId: "G-WQFHZ2MX3L",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
