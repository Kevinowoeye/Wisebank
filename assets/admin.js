function addUser(){
let email=document.getElementById("newUser").value;
let users=JSON.parse(localStorage.getItem("users")||"[]");
users.push({email:email,password:"123456",balance:1000});
localStorage.setItem("users",JSON.stringify(users));
alert("User added");
}
