import {
    initializeApp
} from 'firebase/app';
import {
    getDatabase,
    ref,
    set,
    onValue,
    push
} from 'firebase/database';
import {
    getFirebaseConfig
} from './firebase-config.js';
import {
    bookComp
} from './book-comp';
import {
    getAuth,
    onAuthStateChanged,
    signOut
} from 'firebase/auth';



const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig);
const auth = getAuth();

const books = document.getElementById("books");
const logOutBtn = document.getElementById("logOutBtn");


onAuthStateChanged(auth,
    (user) => {
        if (!user) {
            window.location.href = "login.html";
        }
    }
);

logOutBtn.addEventListener('click', () => {
            signOut(auth).then(
                () => {
                    window.location.href = "login.html";
                }
            ).catch(
                (error) => {
                    alert(error.message);
                }
            )});

        function getBooks() {
            const db = getDatabase();
            const dbRef = ref(db, 'books');
            onValue(dbRef, (snapshot) => {
                const data = snapshot.val();
                updateBooks(data);
            });
        }

        function updateBooks(info) {

            if (info) {
                books.innerHTML = "";
                Object.keys(info).forEach((k, index) => {
                    //console.log(k, index);
                    //console.log("Objeto", info[k]);
                    const book = new bookComp(info[k]);

                    books.appendChild(book.render());
                });
            }
        }

        getBooks();