import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6hv5Su5tV1NS2XQL2jY-z3TN21_UPRu0",
  authDomain: "pokedex-cb146.firebaseapp.com",
  projectId: "pokedex-cb146",
  storageBucket: "pokedex-cb146.appspot.com",
  messagingSenderId: "74747294172",
  appId: "1:74747294172:web:20af39147c77867af21f19",
  measurementId: "G-Z5JG5MJ93L"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const pokemonListRef = collection(firebaseDB, "pokemonList");
