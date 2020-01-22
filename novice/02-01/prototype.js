let Account ={
    username:'aris026',
    password: 'qwerty'
}

let Account2 = Object.create(Account);

console.log("Username :", Account.username)
console.log("Password", Account.password)
console.log("Username : ", Account2.username)
console.log("Password :", Account2.password)