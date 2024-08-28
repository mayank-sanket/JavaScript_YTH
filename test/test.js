class User{
constructor(name, age){
    this._age = age;
    this._name = name;

   
}
get name(){
    return `${this._name} is coding`
}

set name(value){
    this._name = value
}



}


const ms = new User("mayank", 22)

console.log(ms.name)