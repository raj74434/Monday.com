let navbar = () => {
 
    return ` <div id="left_side">
    <div id="logo"><a href="#"><img
        src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/monday-logo-x2.png"></a></div>
   
    <div id="left_menu">
       
        <div id="products" class="left_subdiv"> Products

            <div id="drop_down1">
          
            </div>
        </div>
        <div id="use_cases" class="left_subdiv">Use cases


            <div id="drop_down2">
          
            </div>
        </div>
        <div id="features" class="left_subdiv">Features
            
            <div id="drop_down3">
          
            </div>
        </div>
        <div id="resources" class="left_subdiv">Resources
            
            <div id="drop_dow41">
          
            </div>
        </div>
    </div>
</div>
    <div id="right_menu">
        <div><a href="">Pricing</a></div>
        <div><a href="#">Contact sales</a></div>
        <div><a href="#">Log in</a></div>
        <button id="btn_getStrted"><a href="#">Get Started -></a></button>
    </div>`
}



export default navbar;




// let i = 0;
// let displayMenu = () => {

//     i++;

//     if (i % 2 !== 0) {
//         console.log("hello")


//         document.querySelector("#drop_down1").innerHTML =
//             ` <div id="prod_container">

// <div id="monday_products">


//     <div id="products_drop">
//         <div>
//             <h2>monday products</h2>
            
//         </div>
//         <div id="products_drop1"><p>products trailored to your team needs</p>
//             <p>- More by monday</p>
//         </div>
//     </div>
//     <div id="card_12">
//         <div id="products_detail">
//             <div class="work">

//             <a href="#https://monday.com">
//                 <div class="logo_product" >
//                     <span > <img
//                             src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/footer/wm_icon_footer.png"
//                             alt="">
//                     </span>
//                     <div id="name_prod">
//                         <h3>monday work management</h4>
//                             <p>For teams managing tasks & Worksflows</p>
//                     </div>
//                 </div>
//                 <div>
//                     <div>
//                         <p>Top use cases </p>
//                     </div>
//                     <div>
//                         <a href="#">: Projects & Task management</a>
//                     </div>
//                     <div>
//                         <a href="#">Workflow</a>
//                     </div>
//                     <div>
//                         <a href="#">Build your own</a>
//                     </div>
//                 </div>
//                 </a>
//             </div>
//             <div class="work">

//             <a href="#abcd">
//                 <div class="logo_product">
//                     <span > <img
//                             src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/footer/crm_icon_footer.png"
//                             alt="">
//                     </span>
//                     <div id="name_prod">
//                         <h3>monday sales CRM</h4>
//                             <p>For sales & customer-facing teams</p>
//                     </div>
//                 </div>
//                 <div>
//                     <div>
//                         <p>Top use cases </p>
//                     </div>
//                     <div>
//                         <a href="#">: Contact management</a>
//                     </div>
//                     <div>
//                         <a href="#">Sales pipeline</a>
//                     </div>
//                     <div>
//                         <a href="#">Lead management</a>
//                     </div>
//                 </div>
//                 </a>
//             </div>
//             <div class="work">

//             <a href="#abcd">
//                 <div class="logo_product">
//                     <span > <img
//                             src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/footer/marketer_icon_footer.png"
//                             alt="">
//                     </span>
//                     <div id="name_prod">
//                         <h3>monday marketer</h4>
//                             <p>For marketing & creative teams</p>
//                     </div>
//                 </div>
//                 <div>
//                     <div>
//                         <p>Top use cases </p>
//                     </div>
//                     <div>
//                         <a href="#">: Content calender</a>
//                     </div>
//                     <div>
//                         <a href="#">Campaign tracking</a>
//                     </div>
//                     <div>
//                         <a href="#">Marketing projects</a>
//                     </div>
//                 </div>
//                 </a>
//             </div>
//             <div class="work">

//             <a href="#abcd">
//                 <div class="logo_product">
//                     <span> <img
//                             src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/footer/projects_icon_footer.png"
//                             alt="">
//                     </span>
//                     <div id="name_prod">
//                         <h3>monday projects</h4>
//                             <p>For PMO teams & project managers</p>
//                     </div>
//                 </div>
//                 <div>
//                     <div>
//                         <p>Top use cases </p>
//                     </div>
//                     <div>
//                         <a href="#">: Advanced projects</a>
//                     </div>
//                     <div>
//                         <a href="#">Portfolio management</a>
//                     </div>
//                     <div>
//                         <a href="#">Critical path</a>
//                     </div>
//                 </div>
//                 </a>
//             </div>
//             <div class="work">

//             <a href="#abcd">
//                 <div class="logo_product">
//                     <span> <img
//                             src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/footer/dev_icon_footer.png"
//                             alt="">
//                     </span>
//                     <div id="name_prod">
//                         <h3>monday dev</h4>
//                             <p>For product & developement teams</p>
//                     </div>
//                 </div>
//                 <div>
//                     <div>
//                         <p>Top use cases </p>
//                     </div>
//                     <div>
//                         <a href="#">: Roadmap planning</a>
//                     </div>
//                     <div>
//                         <a href="#">Bug tracking</a>
//                     </div>
//                     <div>
//                         <a href="#">Scrum & Kanban</a>
//                     </div>
//                 </div>
//                 </a>
//             </div>
//         </div>

//         <div id="more">
            
//             <div><img
//                     src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/footer/workforms_icon_footer.png"
//                     alt=""><h4>WorkForms</h4></div>
//             <div><img
//                     src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/footer/canvas_icon_footer.png"
//                     alt=""><h4>Canvas</h4></div>
//         </div>
//     </div>
// </div>
// </div>`


//     }
//     else if (i % 2 !== 1) {
//         console.log("hello world")

//         document.querySelector("#drop_down1").innerHTML = null;
//     }

// }

// document.getElementById("products").addEventListener("click", displayMenu);


