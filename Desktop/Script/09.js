let tn =document.getElementsByTagName('div');
let a=document.createElement('button');
a.innerText='Over';
tn[0].appendChild(a);

a.addEventListener('click', function()
{
 alert("hello")
});
