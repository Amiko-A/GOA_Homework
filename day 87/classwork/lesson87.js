function user(name,lastname,phonenumber,email,password,confirmpassword){
    this.name=name;
    this.lastname=lastname;
    this.phonenumber=phonenumber;
    this.email=email;
    this.password= password;
    this.confirmpassword=confirmpassword;

    this.UserInfo = function() {
        return `My name is ${this.name}, my lastname is ${this.lastname}, my phone number is ${this.phonenumber},my email is ${this.email} and my password is ${password}.`;
    };
}

let user1=new user("Amiko","Amiridze","551001122","Amiko@gmail.com","Amiko1234","Amiko1234")
let user2=new user("Gio","Maraneli","555555555","Gio123@gmail.com","GGIIOO1234","GGIIOO1234")
let user3=new user("Nika","Maisuradze","598382062","Maisa@gmail.com","maisuradze1","maisuradze1")
