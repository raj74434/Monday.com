


// let contentB=document.getElementsByClassName("contentBx")
// console.log(contentB.length)

// for( i=0;i<contentB.length ;i++)
// {
//     contentB[i].addEventListener("click",function()
//     {
//         console.log("yes")
//   this.classList.toggle('active')
//     })
// }
let drop=document.querySelector("#drop")

let icon=document.querySelector("#arrow")
let contentBx=document.querySelector("#contentBx")
console.log(contentBx)

let count=0;

drop.addEventListener("click",myfunc)

function myfunc()
{
    console.log(count)
   
    contentBx.classList.toggle('active')

    if(count%2==0){icon.style="transition: 0.50s;transform: rotate(180deg);"}
else{icon.style="transition: 0.50s;transform: rotate(360deg);"}
count++
}