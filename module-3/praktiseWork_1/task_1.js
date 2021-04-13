const user = {

};

user.userName = "Іван" ;

user.age = 12;

user.showUserName = function () {
    console.log(this.userName);
  };
  
  user.showUserName()

  user.updateAge = function() {
      this.age += 1
      return this.age
  }

 console.log( user.updateAge());
 console.log( user.updateAge());