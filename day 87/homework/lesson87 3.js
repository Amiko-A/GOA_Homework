function user(username, email,password){
    this.username=username,
    this.email=email,
    this.password=password,

    this.changePassword=function(newPaaword){
        this.password=newPaaword;

    }
}
    this.getDetails = function() {
        return {
            username,
            email,
        };
    };

   let user1 = new User("Amiko", "Amiko@gmail.com", "password123");

   user1.changePassword("newpassword123");