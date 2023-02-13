import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD8NhEf7NwOpKSo0w3XFJF6FUa4BYc5MTI",
  authDomain: "video-78e0a.firebaseapp.com",
  projectId: "video-78e0a",
  storageBucket: "video-78e0a.appspot.com",
  messagingSenderId: "206316286289",
  appId: "1:206316286289:web:2207467ae7e3e8c975e370",
  measurementId: "G-0YZX2FKP24",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
