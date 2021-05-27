//lab 61
function loadPosts(){
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(function (response){
            return response.text();
        })
        .then(function (text) {
            var fromJSON = JSON.parse(text);
            fromJSON.forEach(function (item) {
                createPost(item);
            })
        })
}

function showComments(e){
    alert(e.target.parentElement.parentElement.parentElement.parentElement.getAttribute("id"))
    var id  =e.target.parentElement.parentElement.parentElement.parentElement.getAttribute("id");
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(function (response) {
            return response.text()
        })
        .then(function (text) {
            var JSONcomment = JSON.parse(text);
            JSONcomment.forEach(function (item) {
                createCommentElement(item)
            })
        })
}


//Home Work 60
async function postHandler(e) {
    const inpFile = document.getElementById("imgUpload");
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    console.log(Object.fromEntries(data));
    settings = {
        method: 'POST',
        body: data
    };
    await fetch("http://localhost:8080/api/test", settings);
}

//Home Work 59
//Test for HomeWork 59
//Test for post
/*
    let post = new Post("Best Programming", "https://bit.ly/2RygLHh");
    createPost(post);
    let post2 = new Post("Best Programming", "https://bit.ly/2RygLHh");
    createPost(post2);
*/
function fhidingShowing() {
    var x = document.getElementById("post");
    if (x.style.display === "none") {
        hideSplashScreen(x);
    } else {
        showSplashScreen(x);
    }
}

function hidingShowingComments(id) {
    var x = document.getElementById(`postComment${id}`);
    if (x.style.display === "none") {
        hideSplashScreen(x);
    } else {
        showSplashScreen(x);
    }
}

function likeOnImage(post) {
    var likeImg = document.createElement("div");
    likeImg.className = "h1 caption fas fa-heart";
    let imgT = "imgT"+post.id;
    likeImg.id = "like12";
    let imgId = "img"+post.id;
    var result = document.getElementById(imgId).append(likeImg);
    setTimeout(function () {document.getElementById('like12').remove()}, 1000);
    likeAction(post)
}

function likeAction(post){
    let id = "like" + post.id;
    const like = document.getElementById(id);
    if (like.className === "far fa-heart"){
        like.className = "fas fa-heart";
    }else {
        like.className = "far fa-heart";
    }
}
function bookmarkAction(post) {
    let id = "bookmark" + post.id;
    const like = document.getElementById(id);
    if (like.className === "far fa-bookmark"){
        like.className = "fas fa-bookmark";
    }else {
        like.className = "far fa-bookmark";
    }
}
function createPost(postObject) {
    txt = `<div class="align-center card col-lg-6 col-md-12">
    <div id="img${postObject.id}">
        <h1>${postObject.title}</h1>
        <p>${postObject.body}</p>
    </div>
    <div class="card-body">
        <span class="h1 mx-2 muted"><i class="far fa-heart" id="like${postObject.id}"></i></span>
        <span class="h1 mx-2 muted"><i class="far fa-comment" id="comment${postObject.id}"></i></span>
        <span class="h1 mx-2 muted float-right"><i class="far fa-bookmark" id="bookmark${postObject.id}"></i></span>
        <br>
        <ul id="postComment${postObject.id}" style="display: none">
</ul>
    </div>
    
</div>`
    var el = document.createElement("div");
    el.setAttribute('id',postObject.id);
    el.innerHTML = txt;
    document.getElementById("post").append(el);
    var like = document.getElementById(`like${postObject.id}`);
    like.addEventListener('click',function () {
        likeAction(postObject);
    })
    var bookmark = document.getElementById(`bookmark${postObject.id}`);
    bookmark.addEventListener('click',function () {
        bookmarkAction(postObject);
    })
    var comment = document.getElementById(`comment${postObject.id}`);
    comment.addEventListener('click', showComments)
    var img = document.getElementById(`img${postObject.id}`);
    img.addEventListener('dblclick',function () {
        likeOnImage(postObject);
    })
}


//HOME WORK 58
//showSplashScreen function
function hideSplashScreen(x) {
    x.style.display = "block";
}
function showSplashScreen(x) {
    x.style.display = "none";
}

//Test for createCommentElement function write in console
/*
let user = new User("Jamshid", "Ravshan");
let post = new Post("Best Programming", "The text of this lesson");
let comment = new Commentary("This is a commentary to post");
post.addCommentary(comment, user);
createCommentElement(comment)
*/
function createCommentElement(comment){
    var InComment = `<div class="comment-main-level">
        <!-- Avatar -->
        <div class="comment-avatar"><img src="http://i9.photobucket.com/albums/a88/creaticode/avatar_1_zps8e1c80cd.jpg" alt=""></div>
        <!-- Contenedor del Comentario -->
        <div class="comment-box">
        <div class="comment-head">
        <h6 class="comment-name"><a href="http://creaticode.com/blog">${comment.getUser().firstName} ${comment.getUser().lastName}</a></h6>
    <i class="fa fa-reply"></i>
        <i class="fa fa-heart"></i>
        </div>
        <div class="comment-content">
        ${comment.text}
    </div>
    </div>`
    var ready = document.createElement("li");
    ready.innerHTML = InComment;
    document.getElementById("comments-list").append(ready);
}

//Test for createPostElement function write in console
/*
    let post = new Post("Best Programming", "The text of this lesson");
    createPostElement(post);
 */
function addPost(postElement){
    var container = document.getElementById("comments-container");
    var adding = document.createElement("div");
    adding.innerHTML = postElement;
    container.before(adding);
}

//HW57
//Class of User
function User(firstName, lastName) {
    this.id = getId();
    this.firstName = firstName;
    this.lastName = lastName;
    this.login = false;
    //Set of posts
    this.postsLiked = new Map();
    this.commentaries = new Map();
    //methods
    this.addPostsLiked = function (post) {
        this.postsLiked.set(post.id,post);
        post.getUsersLikedList().set(this.id,this);
    };
    this.unlikePostsLiked = function (post) {
        this.postsLiked.delete(post.id);
        post.getUsersLikedList().delete(this.id);
    };
    this.getFirstName= function(){
        return this.firstName;
    }
    this.getLastName= function(){
        return this.lastName;
    }
    this.changeLogin = function(){
        this.login = !this.login;
    };
    this.addComment = function(comment){
        this.commentaries.set(comment.id,comment);
    }
    this.toString = function(){
        return `User\n ${this.id} ${this.firstName} ${this.lastName} ${this.login} ${printSet(this.postsLiked)}`
    };
    this.info = function(){
        return `User\n ${this.id} ${this.firstName} ${this.lastName}`
    };
}

//Class of Post
function Post(title, url) {
    this.id = getId();
    this.title = title;
    this.url = url;
    this.usersLiked = new Map();
    this.commentaries = new Map();
    //methods
    this.getUsersLikedList = function() {
        return this.usersLiked;
    };
    this.addCommentary = function (commentary, user) {
        this.commentaries.set(commentary.id,commentary);
        user.addComment(commentary);
        commentary.user = user;
        commentary.post = post;
    }
    this.toString = function(){
        return `Post\n ${this.id} ${this.title} ${this.description} \nLiked By:${printSet(this.usersLiked)} \nCommentary${printSet(this.commentaries)}`
    };

    this.info = function(){
        return `post: ${this.id} ${this.title} ${this.description}`
    };
}

//AlPosts
function AllPosts() {
    this.allPosts = new Map();
    this.addPostToAll = function (post) {
        this.allPosts.set(post.id, post)
    }
    this.getWithId = function(id){
        return this.allPosts.get(id);
    }
    this.toPrint = function(){
        let res = "All Posts\n";
        for(const item of this.allPosts.values()){
            res+=`${item.toString()} \n`
        }
        return res;
    }
    this.getPosts= function(){
        return this.allPosts;
    }
}

//commentaries
function Commentary(text) {
    this.id = getId();
    this.text = text;
    this.user = {};
    this.post = {};
    this.info = function(){
        return `wrote by: ${user.getFirstName()} \n commentary: ${text}`
    };
    this.getUser = function () {
        return this.user;
    }
}

//Auto generate Id for objects
function getId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}
//printing info without set
function printSet(set1){
    let result = "";
    for (let item of set1.values()) {
        result+=`\n                ${item.info()}`;
    }
    return result;
}

/*
//My Test for homeWork 57
let allPost = new AllPosts();

let user = new User("Jamshid", "Ravshan");
let user2 = new User("Imamali", "Rahmon");

let post = new Post("Best Programming", "The text of this lesson");
let post2 = new Post("Best Books", "Books description");

allPost.addPostToAll(post);
allPost.addPostToAll(post2);



user.addPostsLiked(allPost.getWithId(post.id));
user.addPostsLiked(allPost.getWithId(post2.id));

let comment = new Commentary("This is a commentary to post");
allPost.getWithId(post.id).addCommentary(comment, user);
let comment2 = new Commentary("This is a second com to post");
allPost.getWithId(post.id).addCommentary(comment2, user);

console.log(allPost.toPrint())*/
