function createUser(username, score){
    this.score = score;
    this.username = username;
}

createUser.protoprintMe = function(username){
    console.log(`My username is ${this.username}`)
}


const mayank = new createUser("mayank", 45);

mayank.printMe()