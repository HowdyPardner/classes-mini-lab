// 1. make a class called User that will make objects with email, username, and password properties
// 2. use the class to create 3 users that have different information.

class User {
    constructor(email, userName, password) {
      this.email = email;
      this.userName = userName;
      this.password = password;
    }
  }
  
  let user1 = new User("marcob415@email.com", "Marco", "password123");
  let user2 = new User("BartSimpson@email.com", "Bart Simpson", "0987Password");
  let user3 = new User("randyTheSavage@email.com", "Rand Savage", "abc123xyz");

  console.log(user1); 
  console.log(user2); 
  console.log(user3); 
  