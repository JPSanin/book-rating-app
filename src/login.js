import { getFirebaseConfig } from './firebase-config.js';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue, push } from 'firebase/database';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig);
const auth= getAuth();

const email= document.getElementById("emailInput");
const password= document.getElementById("passwordInput");
const loginBtn= document.getElementById("loginBtn");


function login(){
        signInWithEmailAndPassword(auth, email.value, password.value).then(
            (data)=>{
            window.location.href="books.html";
            email.value="";
            password.value="";
        }).catch(
            (error)=>{
            alert(error.message);
        })
}
/*
function addBooks(){
    const book1={
        title: '100 years of solitud',
        rating: 0.0
    }

    const book2={
        title: 'To Kill a Mocking Bird',
        rating: 0.0
    }

    const book3={
        title: 'A Wrinkle in Time',
        rating: 0.0
    }

    const book4={
        title: 'Go Big or Go Home',
        rating: 0.0
    }

    const book5={
        title: 'The Great Gatsby',
        rating: 0.0
    }


    const db = getDatabase();
    const bookRef = push(ref(db, 'books'));
    book1["id"] = bookRef.key;
    set(bookRef, book1);
}*/


loginBtn.addEventListener('click',login);