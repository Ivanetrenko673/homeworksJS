const user = {

};

user.userName = "Іван" ;

user.age = 12;

user.showUserName = function () {
    console.log(user.userName);
  };
  
  user.showUserName()

  user.updateAge = function() {
      console.log(user.age += 1)
  }

  user.updateAge()