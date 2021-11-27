const firebaseConfig = {
    apiKey: "AIzaSyDEwFhYaQhg820xX4GiWw-HdBlNrIgEOYM",
    authDomain: "book-rating-e4f82.firebaseapp.com",
    databaseURL: "https://book-rating-e4f82-default-rtdb.firebaseio.com",
    projectId: "book-rating-e4f82",
    storageBucket: "book-rating-e4f82.appspot.com",
    messagingSenderId: "823902200105",
    appId: "1:823902200105:web:324e2de0dce7b9c5ffd738"
  };

  export function getFirebaseConfig() {
    if (!firebaseConfig || !firebaseConfig.apiKey) {
        throw new Error("Firebase configuration error");
    } else {
        return firebaseConfig;
    }
}