// const myHeading = document.querySelector('h1');

// myHeading.textContent = 'Hello World!';

// let myVariable = 'Bob';

// console.log(myVariable);

// This is a comment

/*
Everything in between is a comment.
*/

// let iceCream = 'chocolate';
// if(iceCream === 'chocolate') {
//   alert('Yay, I love chocolate ice cream!');    
// } else {
//   alert('Awwww, but chocolate is my favorite...');    
// }

// alert('hello!');

// function aris(aris1, aris2)
// {
//     let result = aris1 * aris2;
//     return result;
// }

// aris (34,2);
// aris (21,7);
// aris (12,10);

// document.querySelector('html').onclick = function()
// {
//     alert('Ouch! Stop poking me!');
// }

// document.querySelector('html').onclick = function() {};

// let myHTML = document.querySelector('html');
// myHTML.onclick = function() {};

let myImage = document.querySelector('img');

myImage.onclick = function()
{
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'img/firefox_icon.png')
    {
        myImage.setAttribute('src', 'img/firefox_icon2.jpeg');
    }
    else
    {
        myImage.setAttribute('src', 'img/firefox_icon.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName()
{
    let myName = prompt('Please enter your name!');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozila is Cool, ' + myName;
}
if(!localStorage.getItem('name'))
{
    setUserName();
}
else
{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozila is Cool, ' + storedName;
}

myButton.onclick = function()
{
    setUserName();
}

function setUserName()
{
    let myName = prompt('Please enter your name!');
    if(!myName || myName === null)
    {
        setUserName();
    }
    else
    {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Mozilla is Cool, ' + myName;
    }
}
