
// interset amount 
let p =document.querySelector('#p');
let r = document.querySelector('#r');
let t = document.querySelector('#t');
let btn2 = document.querySelector('.intBtn')
let span2 = document.querySelector('.intConv')


let interest = (p * r * t) / 100;

console.log("Simple Interest: " + interest);
let total = p + interest;
console.log("Total Amount: " + total);


btn2.addEventListener('click', ()=>{
    span2.innerHTML = ['Simple Interest is ' + interest + 'and toatl amount is ' + total]
})