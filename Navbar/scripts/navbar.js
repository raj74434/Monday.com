// let navbar = () => {
//     return ` <div id="logo"><img src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/monday-logo-x2.png" alt=""></div>
//     <div id="left_menu">
//         <div><span>Products</span></div>
//         <div><span>Use cases</span></div>
//         <div><span>Features</span></div>
//         <div><span>Resources</span></div>
//     </div>
//     <div id="right_menu">
//         <div>Pricing</div>
//         <div>Contact sales</div>
//         <div>Log in</div>
//         <button>Get Started</button>
//     </div>`
// }



// export default navbar;




let i=0;
let displayMenu = () => {
   
    i++;
   
if(i%2!==0){
    console.log("hello")


    document.querySelector(".drop_down").innerHTML=
    `<div>
    <h2>Monday products</h2>
    <p>products trailored to your team needs</p>
</div>
<div>
    <div>monday work management</div>
    <div>monday sales CRM</div>
    <div>monday marketer</div>
    <div>monday projects</div>
    <div>monday dev</div>
</div>`

}
else if(i%2!==1){
    console.log("hello world")
  
    document.querySelector(".drop_down").innerHTML=null;
}

}

document.getElementById("products").addEventListener("click",displayMenu);


