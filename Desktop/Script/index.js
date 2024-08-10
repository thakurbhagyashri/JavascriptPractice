function display()
{
    // alert("i  am inside the html page!");
    // console.log("Hello i am coming from index.js");
    // console.error("error message");
    // console.warn("Warnings here!");
    // console.clear();

}
display()

let ele=document.getElementById('button2');
console.log(ele);

document.getElementById('button2').style.color='red';

let colrNew = document.getElementsByClassName('button1');
// colrNew[1].style.background='pink';
colrNew[1].classList.add('bg-primary')
document.getElementById('p1').style.background='black';
console.log(ele.innerText)
console.log(ele.innerHTML)


//Events in javascript
// function Click()
// {
//     console.log("button was click");
// }

// window.onload  = function()
// {
//     console.log("onload");
// }

// button2.addEventListener('click', function()
// {
//     document.querySelectorAll('.button1')[1].innerHTML="<b>we have clicked</b>"
// console.log("click is done");
// })

// button2.addEventListener('mouseover', function()
// {
// console.log("click is done for over ");
// })


// button2.addEventListener('mouseout', function()
// {
// console.log("mouse out container");
// })


// button2.addEventListener('mouseup', function()
// {
// console.log("click on container");
// })


// button2.addEventListener('mousedown', function()
// {
// console.log("mouse down container");
// })



//arrow Functions:
//  sum = (a,b)=>
// {
//     return a+b;
// }

fun1 = ()=>  // function onload after 2 miliseconds
{   document.querySelectorAll('#p1')[0].innerHTML="<b>we have clicked</b>"
    console.log("set time out call");
}
 setTimeout(fun1 , 2000);
 setInterval(fun1 , 2000);
 
const person =
{
  f_name:"abc",
  l_name:"cb",
  age:23 
};
const myInfo=Object.values(person);
document.getElementById('#p1').innerHTML=myInfo;
console.log(myInfo);                                        


