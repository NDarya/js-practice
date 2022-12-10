let user = prompt("What is your name?").toLowerCase().trim()
let list = "Alex Andrew John Isaac"

if(user[0] === list[0] || user[0] === list[12] || user[0] === list[17]){
    console.log('Welcome')
} else{
    console.log ('Sorry you are not invited')
}

let userName = prompt('Как ваше имя?')  
let age = prompt('Сколько вам лет?')

if( userName.length % 2 === 0 && age >= 18){
    console.log('Добро пожаловать');
} else{
    console.log('К сожалению, вы в пролёте');
}
