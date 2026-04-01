function login(){
let email=document.getElementById('email').value;
let pass=document.getElementById('password').value;

if(email==="kevinowoeye14@gmail.com" && pass==="Personal@01"){
localStorage.setItem("role","admin");
window.location="admin.html";
return;
}

let users=JSON.parse(localStorage.getItem("users")||"[]");
let user=users.find(u=>u.email===email && u.password===pass);

if(user){
localStorage.setItem("currentUser",email);
window.location="dashboard.html";
}else{
alert("Invalid login");
}
}
