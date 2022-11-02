// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkXzNgTvxbMd7XWG6gOi8CTF7jHtYGjz4",
  authDomain: "vue-elective-2020-wordpress.firebaseapp.com",
  projectId: "vue-elective-2020-wordpress",
  storageBucket: "vue-elective-2020-wordpress.appspot.com",
  messagingSenderId: "809060279190",
  appId: "1:809060279190:web:4b824bf36139cf5385f3b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export { auth }
export const db = getFirestore(app);