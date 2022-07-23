
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

let count=0
setInterval(function()
{
    slideshow.innerHTML=""
    let img=document.createElement("img")
    img.style=";position:relative;width:300px;margin-bottom:60px"

    let h3=document.createElement("h2")
    h3.innerText=arr[count].p
    h3.style="color:grey"


    // console.log(arr[count])
    img.src=arr[count].img
    slideshow.append(img,h3)
    if(count==2){count=0}
    else{count++}
    
}, 2000)