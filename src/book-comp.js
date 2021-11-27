import {
    getDatabase,
    ref,
    set,
    onValue,
    push
} from 'firebase/database';


export class bookComp {
    constructor(book) {
        this.book = book;
    }

    render() {

        let bookCard = document.createElement("div");
        bookCard.className = "bookCard";


        let title = document.createElement("h3");
        title.className = "bookTitle";
        title.innerHTML = this.book.title;

        let rating = document.createElement("p");
        rating.className = "bookRating";
        if(this.book.rating ===0 && this.book.votes===0 ){
            rating.innerHTML = 0;
        }else{
            rating.innerHTML = this.book.rating / this.book.votes;
        }
        

        let starsrating = document.createElement("div");
        starsrating.className = "rate";


        let star5label = document.createElement("label");
        star5label.for = "star5";
        star5label.title = "text";
        star5label.innerHTML = 5;

        let star4label = document.createElement("label");
        star4label.for = "star4";
        star4label.title = "text";
        star4label.innerHTML = 4;

        let star3label = document.createElement("label");
        star3label.for = "star3";
        star3label.title = "text";
        star3label.innerHTML = 3;

        let star2label = document.createElement("label");
        star2label.for = "star2";
        star2label.title = "text";
        star2label.innerHTML = 2;

        let star1label = document.createElement("label");
        star1label.for = "star1";
        star1label.title = "text";
        star1label.innerHTML = 1;


        star5label.addEventListener('click', (e, ev) => {
            // Obtener la base datos
            console.log(e.srcElement.innerHTML);
            console.log(this.book.title);
            const db = getDatabase();
            const bookRef = ref(db, 'books/' + this.book.id);

            const newRating = (+this.book.rating + +e.srcElement.innerHTML);

            const updateBook = {
                id:this.book.id,
                title: this.book.title,
                rating: newRating,
                votes: this.book.votes + 1
            }

            set(bookRef, updateBook);
        });

        star4label.addEventListener('click', (e, ev) => {
            // Obtener la base datos
            console.log(e.srcElement.innerHTML);
            console.log(this.book.title);
            const db = getDatabase();
            const bookRef = ref(db, 'books/' + this.book.id);

            const newRating = (+this.book.rating + +e.srcElement.innerHTML);

            const updateBook = {
                id:this.book.id,
                title: this.book.title,
                rating: newRating,
                votes: this.book.votes + 1
            }

            set(bookRef, updateBook);
        });

        star3label.addEventListener('click', (e, ev) => {
            // Obtener la base datos
            console.log(e.srcElement.innerHTML);
            console.log(this.book.title);
            const db = getDatabase();
            const bookRef = ref(db, 'books/' + this.book.id);

            const newRating = (+this.book.rating + +e.srcElement.innerHTML);

            const updateBook = {
                id:this.book.id,
                title: this.book.title,
                rating: newRating,
                votes: this.book.votes + 1
            }

            set(bookRef, updateBook);
        });

        star2label.addEventListener('click', (e, ev) => {
            // Obtener la base datos
            console.log(e.srcElement.innerHTML);
            console.log(this.book.title);
            const db = getDatabase();
            const bookRef = ref(db, 'books/' + this.book.id);

            const newRating = (+this.book.rating + +e.srcElement.innerHTML);


            const updateBook = {
                id:this.book.id,
                title: this.book.title,
                rating: newRating,
                votes: this.book.votes + 1
            }

            set(bookRef, updateBook);
        });

        star1label.addEventListener('click', (e, ev) => {
            // Obtener la base datos
            console.log(e.srcElement.innerHTML);
            console.log(this.book.title);
            const db = getDatabase();
            const bookRef = ref(db, 'books/' + this.book.id);

            const newRating = (+this.book.rating + +e.srcElement.innerHTML);


            const updateBook = {
                id:this.book.id,
                title: this.book.title,
                rating: newRating,
                votes: this.book.votes + 1
            }

            set(bookRef, updateBook);
        });




        bookCard.appendChild(title);

        bookCard.appendChild(starsrating);
        starsrating.appendChild(star5label);
        starsrating.appendChild(star4label);
        starsrating.appendChild(star3label);
        starsrating.appendChild(star2label);
        starsrating.appendChild(star1label);
        starsrating.appendChild(rating);




        /*
        replyBtn.addEventListener("click", (e, ev)=>{
            // Obtener la base datos
            const db = getDatabase();
            const postRef = ref(db,'posts/'+this.post.id+'/comments');
            push(postRef,reply.value);
            addReply(this.post.comments);
        });

        postCard.appendChild(message);
        postCard.appendChild(username);
        postCard.appendChild(replies);
        addReply(this.post.comments);
        postCard.appendChild(reply);
        postCard.appendChild(replyBtn);


        function addReply(info){
            
            Object.keys(info).forEach((k, index)=>{
                //console.log("Objeto", info[k]);
                let replyCont = document.createElement("div");
                replyCont.className = "reply-cont";
                let reply = document.createElement("p");
                reply.className = "reply-text";
                reply.innerHTML = info[k];
                replyCont.appendChild(reply);
                replies.appendChild(replyCont);
            });

       
        }
*/
        return bookCard;
    }



}