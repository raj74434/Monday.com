
let clicking=document.querySelectorAll(".drower")



// console.log(contentB.length)

for( i=0;i<clicking.length ;i++)
{
    clicking[i].addEventListener("click",function()
    {
        console.log("yes")
  this.classList.toggle('active')
    })
}