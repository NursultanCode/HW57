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
    this.getFirstName= function(){
        return this.firstName;
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
        commentary.user = commentary;
        commentary.post = post;
    }
    this.toString = function(){
        return `Post\n ${this.id} ${this.title} ${this.description} \nLiked By:${printSet(this.usersLiked)} \nCommentary${printSet(this.commentaries)}`
    };

    this.info = function(){
        return `post: ${this.id} ${this.title} ${this.description}`
    };
}
