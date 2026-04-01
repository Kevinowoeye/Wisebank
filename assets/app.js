let user=localStorage.getItem("currentUser");
let users=JSON.parse(localStorage.getItem("users")||"[]");
let u=users.find(x=>x.email===user) || {balance:1000};

document.getElementById("balance").innerText="Balance: $"+u.balance;

function sendMoney(){
let amt=parseInt(document.getElementById("amount").value);
u.balance-=amt;
document.getElementById("balance").innerText="Balance: $"+u.balance;
localStorage.setItem("users",JSON.stringify(users));
}
