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

function createPostElement(post){
    var post = `<section class="card mt-4">
					<div class="border p-2">
						<!-- post header -->
						<div class="row m-0">
							<div class="">
								<a class="text-decoration-none" href="#">
									<img class="" src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png" width="50" height="50" alt="...">
								</a>
							</div>
							<div class="flex-grow-1 pl-2">
								<a class="text-decoration-none" href="#">
									<h2 class="text-capitalize h5 mb-0">Shushant Singh</h2>
								</a> 
								<p class="small text-secondary m-0 mt-1">1 day ago</p>
							</div>
							
							<div class="dropdown">
								<a class="" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								<i class="fas fa-chevron-down"></i>
								</a>

								<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
									<a class="dropdown-item text-primary" href="#">Edit</a>
									<a class="dropdown-item text-primary" href="#">Delete</a>
								</div>
							</div>
						</div>
						<!-- post body -->
						<div class="">
							<p class="my-2">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras 
								turpis sem, dictum id bibendum eget, malesuada ut massa. Ut scel
								erisque nulla sed luctus dapibus. Nulla sit amet mi vitae purus sol
								licitudin venenatis. Praesent et sem urna. Integer vitae lectus nis
								l. Fusce sapien ante, tristique efficitur lorem et, laoreet ornare lib
								ero. Nam fringilla leo orci. Vivamus semper quam nunc, sed ornare magna dignissim sed. Etiam interdum justo quis risus
								efficitur dictum. Nunc ut pulvinar quam. N
								unc mollis, est a dapibus dignissim, eros elit tempor diam, eu tempus quam felis eu velit.
							</p>
						</div>
						<hr class="my-1">
						<!-- post footer begins -->
						<footer class="">
							<!-- post actions -->
							<div class="">
								<ul class="list-group list-group-horizontal">
									<li class="list-group-item flex-fill text-center p-0 px-lg-2 border border-0">
										<a class="small text-decoration-none" href="#">
											<i class="far fa-thumbs-up"></i> 20 Like
										</a>
									</li>
									<li class="list-group-item flex-fill text-center p-0 px-lg-2 border border-right-0 border-top-0 border-bottom-0">
										<a class="small text-decoration-none" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
											<i class="fas fa-comment-alt"></i> 40 Comment
										</a>
									</li>
									<li class="list-group-item flex-fill text-center p-0 px-lg-2 border border-right-0 border-top-0 border-bottom-0 ">
										<a class="small text-decoration-none" href="#">
											<i class="fas fa-share"></i> 90 Share
										</a>
									</li>
								</ul>
							</div>
							

							<!-- collapsed comments begins -->
							<div class="collapse" id="collapseExample">
								<div class="card border border-right-0 border-left-0 border-bottom-0 mt-1">
									<!-- new comment form -->
									<section class="mt-3">
										<form action="">
											<div class="input-group input-group">
												<input type="text" class="form-control" placeholder="Write Comment" aria-label="Recipient's username" aria-describedby="basic-addon2">
												<div class="input-group-append">
													<a class="text-decoration-none text-white btn btn-primary" href="#" role="button">Comment</a>
												</div>
											</div>
										</form>
									</section>
									<!-- comment card bgins -->
									<section>
										<div class="card p-2 mt-3">
											<!-- comment header -->
											<div class="d-flex">
												<div class="">
													<a class="text-decoration-none" href="#">
														<img class="profile-pic" src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png" width="40" height="40" alt="...">
													</a>
												</div>
												<div class="flex-grow-1 pl-2">
													<a class="text-decoration-none text-capitalize h6 m-0" href="#">Tarzan</a>
													<p class="small m-0 text-muted">27 mins ago</p>
												</div>
												<div >
													<div class="dropdown">
														<a class="" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
														<i class="fas fa-chevron-down"></i>
														</a>

														<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
															<a class="dropdown-item text-primary" href="#">Edit</a>
															<a class="dropdown-item text-primary" href="#">Delete</a>
														</div>
													</div>
												</div>
											</div>
											<!-- comment header -->
											<!-- comment body -->
											<div class="card-body p-0">
												<p class="card-text h7 mb-1">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
												<a class="card-link small" href="#">
													<i class="far fa-thumbs-up"></i> 20 Like
												</a>
											</div>
										</div>
									</section>
									<!-- comment card ends -->

								</div>
							</div>
							<!-- collapsed comments ends -->
						</footer>
						<!-- post footer ends -->
					</div>
				</section>`;
    addPost(post);
}
function addPost(postElement){
    var container = document.getElementById("comments-container");
    var adding = document.createElement("div");
    adding.innerHTML = postElement;
    container.before(container);
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
