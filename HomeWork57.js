//HOME WORK 58
//showSplashScreen function
function hideSplashScreen() {
    var com = document.getElementById("comments-container");
    com.style.visibility = 'hidden'
}
function showSplashScreen() {
    var com = document.getElementById("comments-container");
    com.style.visibility = 'visible'
}

//Test for this function write in console
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
        <h6 class="comment-name by-author"><a href="http://creaticode.com/blog">${comment.getUser().firstName} ${comment.getUser().lastName}</a></h6>
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
function Post(title, description) {
    this.id = getId();
    this.title = title;
    this.description = description;
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
