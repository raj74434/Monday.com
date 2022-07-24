

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


// let clicking=document.querySelectorAll(".drower")



// for( i=0;i<clicking.length ;i++)
// {
//     clicking[i].addEventListener("click",function()
//     {
//         console.log("yes")
//   this.classList.toggle('active')
//     })
// }


let clicking=document.querySelectorAll(".drower")



let svg=document.querySelector("svg")
let coun=0

for( i=0;i<clicking.length ;i++)
{
    clicking[i].addEventListener("click",function()
    {
        console.log("yes")
  this.classList.toggle('active')
  count++
    })

    // if(coun%2==0){}
}


let arr=[
    {
        img:"https://dapulse-res.cloudinary.com/image/upload/v1607704782/remote_mondaycom_static/img/segment-layout-default-images/customer-testimonials/telefonica.png",
        p:"With monday.com, were 30% more efficient at delivering hundreds of campaigns seen ",
        
    },
    {
       img:"https://dapulse-res.cloudinary.com/image/upload/v1607704782/remote_mondaycom_static/img/segment-layout-default-images/customer-testimonials/genpact.png",
       p:"With monday.com, were 30% more efficient at delivering hundreds of campaigns seen  by millions of customers.Tye Rapley-Hawkins | Head of Delivery at 02 Priority, Telefonica",
     }
    ,
    {img:"https://dapulse-res.cloudinary.com/image/upload/v1607704782/remote_mondaycom_static/img/segment-layout-default-images/customer-testimonials/thoughtworks.png",
    p:"Thanks to monday.com, we are now able to budget the team time and efforts much more scientifically, leading to increased operational efficiency.Samyuktha Shivakumar | Global Marketing Operation Manager, Thoughtworks",
    
    }

]
let sliding=document.querySelector("#sliding")
let slideshow=document.querySelector("#slideshow")
slideshow.style="height:300px;"

let cou=0
setInterval(function()
{
    slideshow.innerHTML=""
    let img=document.createElement("img")
    img.style=";position:relative;width:300px;margin-bottom:60px"

    let h3=document.createElement("h2")
    h3.innerText=arr[cou].p
    h3.style="color:grey"


    // console.log(arr[count])
    img.src=arr[cou].img
    slideshow.append(img,h3)
    if(cou==2){cou=0}
    else{cou++}
    
}, 2000)



let select=document.querySelector("#size")
select.addEventListener("change",funcfinal)

let changer1=document.querySelector("#changer1")
 let changer2=document.querySelector("#changer2")
 let changer3=document.querySelector("#changer3")

 changer1.innerText="Total $24 / month"
    changer2.innerText="Total $30 / month"
    changer3.innerText="Total $48 / month"

function funcfinal()
{
    changer1.innerText=""
    changer2.innerText=""
    changer3.innerText=""
   if(select.value==3)
   {
    changer1.innerText="Total $24 / month"
    changer2.innerText="Total $30 / month"
    changer3.innerText="Total $48 / month"
   }
   else if(select.value==5)
   {
    changer1.innerText="Total $40 / month"
    changer2.innerText="Total $50 / month"
    changer3.innerText="Total $80 / month"
   }
   else if(select.value==10)
   {
    changer1.innerText="Total $80 / month"
    changer2.innerText="Total $100 / month"
    changer3.innerText="Total $160 / month"
   }
   else if(select.value==20)
   {
    changer1.innerText="Total $160 / month"
    changer2.innerText="Total $200 / month"
    changer3.innerText="Total $320 / month"
   }
   else if(select.value==25)
   {
    changer1.innerText="Total $200 / month"
    changer2.innerText="Total $250 / month"
    changer3.innerText="Total $400 / month"
   }

console.log(select.value)
}


 