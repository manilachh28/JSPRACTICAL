class User {
    constructor(email, password) {
      this.email = email;
      this.password = password;
    }
  
    login(email, password) {
      if (email === this.email && password === this.password) {
        console.log('Login Successfully');
      } else {
        console.log('Authentication Failed!!');
      }
    }
  }
  
  class Organization extends User {
    designation;
  
    constructor(email, password) {
      super(email, password);
      this.designation = 0;
    }
  
    createDesig(content) {
      this.designation++; // add more content
    }
  
    getDesig() {
      return this.designation;
    }
  }
  
  class Admin extends User {
    constructor(email, password) {
      super(email, password);
    }
  
    login(email, password) {
      const isValidAdmin = true; 
      if (email === this.email && password === this.password && isValidAdmin) {
        console.log('Admin Login Successfully');
      } else {
        console.log('Authentication Failed!!');
      }
    }
  
    removeUser(userId) {
      console.log('User Removed successfully.');
    }
  }
  
  const maniSap = new Organization('manila.chhabra@sap.com', 'password:)');
  maniSap.login('manila.chhabra@sap.com', 'password:)'); // Login Successfully
  
  const maniGmail = new Organization('manila.chh@gmail.com', '[Object] [object]');
  maniGmail.login('manila.chh@gmail.com', '[Object] [object]'); // Admin Login Successfully