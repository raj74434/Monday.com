

let navbar = () => {
 
    return ` <div id="left_side">
    <div id="logo"><a href="# ">
    <img src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/monday-logo-x2.png">
    </a>
    </div>
   
    <div id="left_menu">
       
        <div id="products" class="left_subdiv"> <p class="left_title"> Products </p> 

            <div id="drop_down1">
          
            </div>
        </div>
        <div id="use_cases" class="left_subdiv">  <p class="left_title"> Use cases </p> 


            <div id="drop_down2">
          
            </div>
        </div>
        <div id="features" class="left_subdiv"> <p class="left_title"> Features  </p> 
            
            <div id="drop_down3">
          
            </div>
        </div>
        <div id="resources" class="left_subdiv"> <p class="left_title"> Resources  </p> 
            
            <div id="drop_down4">
          
            </div>
        </div>
    </div>
</div>
    <div id="right_menu">
        <div><a href=""> <p class="right_title">  Pricing </p> </a></div>
        <div><a href="#"> <p class="right_title"> Contact sales </p> </a></div>
        <div><a href="#"> <p class="right_title"> Log in </p>  </a></div>
        <button id="btn_getStrted"><a href="#">Get Started -></a></button>
    </div>`
}



export default navbar;

document.getElementById("navbar").innerHTML=navbar()




// Product dropdown menu

let i = 0;
let j = 0;
let k = 0;
let l = 0;

let displayMenu = () => {

    i++;

    if (i % 2 !== 0) {
        j=0;
        k=0;
        l=0;
        document.querySelector("#drop_down2").innerHTML =null;
        document.querySelector("#drop_down3").innerHTML =null;
        document.querySelector("#drop_down4").innerHTML =null;

        document.querySelector("#drop_down1").innerHTML =
            ` <div id="prod_container">

<div id="monday_products">


    <div id="products_drop">
        <div id="head_product8">
            <h2>monday products</h2>
            
        </div>
        <div id="products_drop1">
        <p>products trailored to your team needs</p>
            <p>- More by monday</p>
        </div>
    </div>
    <div id="card_12">
        <div id="products_detail">
            <div class="work">

            <a href="#https://monday.com">
                <div class="logo_product" >
                    <span > <img
                            src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/footer/wm_icon_footer.png"
                            alt="">
                    </span>
                    <div class="name_prod">
                        <h3>monday work management</h4>
                            <p>For teams managing tasks & Worksflows</p>
                    </div>
                </div>
                <div>
                    <div>
                        <p>Top use cases </p>
                    </div>
                    <div>
                        <a href="#">: Projects & Task management</a>
                    </div>
                    <div>
                        <a href="#">Workflow</a>
                    </div>
                    <div>
                        <a href="#">Build your own</a>
                    </div>
                </div>
                </a>
            </div>
            <div class="work">

            <a href="#abcd">
                <div class="logo_product">
                    <span > <img
                            src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/footer/crm_icon_footer.png"
                            alt="">
                    </span>
                    <div class="name_prod">
                        <h3>monday sales CRM</h4>
                            <p>For sales & customer-facing teams</p>
                    </div>
                </div>
                <div>
                    <div>
                        <p>Top use cases </p>
                    </div>
                    <div>
                        <a href="#">: Contact management</a>
                    </div>
                    <div>
                        <a href="#">Sales pipeline</a>
                    </div>
                    <div>
                        <a href="#">Lead management</a>
                    </div>
                </div>
                </a>
            </div>
            <div class="work">

            <a href="#abcd">
                <div class="logo_product">
                    <span > <img
                            src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/footer/marketer_icon_footer.png"
                            alt="">
                    </span>
                    <div class="name_prod">
                        <h3>monday marketer</h4>
                            <p>For marketing & creative teams</p>
                    </div>
                </div>
                <div>
                    <div>
                        <p>Top use cases </p>
                    </div>
                    <div>
                        <a href="#">: Content calender</a>
                    </div>
                    <div>
                        <a href="#">Campaign tracking</a>
                    </div>
                    <div>
                        <a href="#">Marketing projects</a>
                    </div>
                </div>
                </a>
            </div>
            <div class="work">

            <a href="#abcd">
                <div class="logo_product">
                    <span> <img
                            src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/footer/projects_icon_footer.png"
                            alt="">
                    </span>
                    <div class="name_prod">
                        <h3>monday projects</h4>
                            <p>For PMO teams & project managers</p>
                    </div>
                </div>
                <div>
                    <div>
                        <p>Top use cases </p>
                    </div>
                    <div>
                        <a href="#">: Advanced projects</a>
                    </div>
                    <div>
                        <a href="#">Portfolio management</a>
                    </div>
                    <div>
                        <a href="#">Critical path</a>
                    </div>
                </div>
                </a>
            </div>
            <div class="work">

            <a href="#abcd">
                <div class="logo_product">
                    <span> <img
                            src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/footer/dev_icon_footer.png"
                            alt="">
                    </span>
                    <div class="name_prod">
                        <h3>monday dev</h4>
                            <p>For product & developement teams</p>
                    </div>
                </div>
                <div>
                    <div>
                        <p>Top use cases </p>
                    </div>
                    <div>
                        <a href="#">: Roadmap planning</a>
                    </div>
                    <div>
                        <a href="#">Bug tracking</a>
                    </div>
                    <div>
                        <a href="#">Scrum & Kanban</a>
                    </div>
                </div>
                </a>
            </div>
        </div>

        <div id="more">
            
            <div><img
                    src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/footer/workforms_icon_footer.png"
                    alt=""><h4>WorkForms</h4></div>
            <div><img
                    src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/footer/canvas_icon_footer.png"
                    alt=""><h4>Canvas</h4></div>
        </div>
    </div>
</div>
</div>`


    }
    else if (i % 2 !== 1) {
        console.log("hello world")

        document.querySelector("#drop_down1").innerHTML = null;
    }

}
document.getElementById("products").addEventListener("click", displayMenu);



//Use cases dropdoen menu


let usecasesfun = () => {

    j++;

    if (j % 2 !== 0) {
        i=0;
        k=0;
        l=0;
        document.querySelector("#drop_down1").innerHTML =null;
        document.querySelector("#drop_down3").innerHTML =null;
        document.querySelector("#drop_down4").innerHTML =null;


        document.querySelector("#drop_down2").innerHTML =
   ` <div id="usecase_menu">
   <div id="block_1">

       <p class="title_1"> - By team</p>
       <div id="team_card">

           <a href="#" class="decoretion">
               <div class="team_card1">

                   <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" class="jsx-1475715785 menu-item-title-icon outline" style="--icon-color:#F04095;"><path transform="matrix(.34684 .93793 -.95008 .312 10.22 17.544)" stroke="#000" stroke-width="2.5" stroke-linecap="round" d="M1.25-1.25h2.707"></path><path d="M7.942 17.543L7 14.435 18.306 6l3.062 10.729-13.426.814z" stroke="#000" stroke-width="2.5" stroke-linejoin="round"></path></svg>
                   <h4>Marketing</h4>

               </div>
           </a>
           <a href="#" class="decoretion">
               <div class="team_card1">
                   <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" class="jsx-1475715785 menu-item-title-icon outline" style="--icon-color:#00D2D2;"><path d="M5 20.5L9.5 15l5 3 6-10m0 0L15 9.5M20.5 8l1.5 5" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                   <h4>Sales</h4>

               </div>
           </a>
           <a href="#" class="decoretion">
               <div class="team_card1">
                   <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" class="jsx-1475715785 menu-item-title-icon outline" style="--icon-color:#00C875;"><path stroke="#000" stroke-width="2.175" stroke-linecap="round" d="M10.835 8.999l-4.834 4.826M10.897 18.688l-4.834-4.826M16.914 8.999l4.833 4.826M16.851 18.688l4.834-4.826"></path></svg>
                   <h4>Developer</h4>
               </div>
           </a>
           <a href="#" class="decoretion">
               <div class="team_card1">
                   <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" class="jsx-1475715785 menu-item-title-icon outline" style="--icon-color:#FF9900;"><path stroke="#000" stroke-width="2.5" stroke-linecap="round" d="M7.434 7.401h8.922M11.444 14.302h8.923M7.25 21.203h8.923"></path></svg>
                   <h4>PMO</h4>
               </div>
           </a>
           <a href="#" class="decoretion">
               <div class="team_card1">
                   <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" class="jsx-1475715785 menu-item-title-icon outline" style="--icon-color:#6C6CFF;"><circle cx="14" cy="15" r="6" stroke="#000" stroke-width="2"></circle><circle cx="14" cy="15" r="2.1" stroke="#000" stroke-width="1.8"></circle></svg>
                   <h4>Operations</h4>
               </div>
           </a>
           <a href="#" class="decoretion">
               <div class="team_card1">
                   <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" class="jsx-1475715785 menu-item-title-icon outline" style="--icon-color:#6C6CFF;"><path d="M6 19h15M21 10H6M19 8v4M10 17v4" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                   <h4>IT</h4>
               </div>
           </a>
           <a href="#" class="decoretion">
               <div class="team_card1">
                   <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" class="jsx-1475715785 menu-item-title-icon outline" style="--icon-color:#6C6CFF;"><path d="M18 22v-9M10 22v-9M18 8V7M10 8V7" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                   <h4>HR</h4>
               </div>
           </a>



       </div>


   </div>
   <div id="block_2">
       <p class="title_1">- By business size</p>
       <div id="size_card">
           <div class="size_card1">
         

           <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" class="jsx-1475715785 menu-item-title-icon outline" style="--icon-color:#6C6CFF;"><path d="M2.857 25.143h22.286M18.434 6.733h-8.72v18.41h8.72V6.733zM23.019 15.453h-3.876v9.69h3.876v-9.69zM9.304 15.453H5.43v9.69h3.875v-9.69zM15.714 3.714h-3.428v2.572h3.428V3.714zM14 3.714V2M14.857 10.571h-1.714M14.857 14h-1.714M14.857 17.429h-1.714" stroke="#000" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
               <h4>Enterprice</h4>
           </div>
           <div class="size_card1">
               <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" class="jsx-1475715785 menu-item-title-icon outline" style="--icon-color:#6C6CFF;"><path d="M22 6H7v16h15V6zM13 11h3" stroke="#000" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 22v-7h5v7" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
               <h4>Small business</h4>
           </div>
           <div class="size_card1">
               <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" class="jsx-1475715785 menu-item-title-icon outline" style="--icon-color:#6C6CFF;"><path d="M14.212 13.387l-4.197-3.883c-2.288-2.298 1.05-6.748 4.197-3.148 3.149-3.589 6.518.86 4.198 3.148l-4.198 3.883zM10.678 18.637c.516.258 2.28.774 3.097.774 1.806 0 2.394-.318 3.097-.516 1.032-.292 1.458-.997 1.568-1.324m0 0c.074-.223.125.276 0-.225-.517-2.064-2.6-.291-4.665-.55-2.065-.257-4.646-1.514-5.678-1.514S5 16.022 5 17.346c0 1 .774 2.065 2.065 3.064 1.29.998 3.87 1.806 6.452 1.806 3.145 0 4.645-1.066 5.935-1.806.448-.257 3.613-2.84 3.871-3.613.333-1-.234-1.311-.774-1.515-.774-.292-1.419.5-2.064.999-1.29.998-1.29 1.066-2.045 1.29z" stroke="#000" stroke-width="1.703" stroke-linecap="round" stroke-linejoin="round"></path></svg>
               <h4>Non profit</h4>
           </div>
       </div>

   </div>

   <div id="block_3">
       <p class="title_1">- By workflow</p>
       <div id="workfolow_card">
           <div id="workflow_card1">
               <div class="workflow_card2">
                   <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" class="jsx-1475715785 menu-item-title-icon outline" style="--icon-color:#6C6CFF;"><path d="M11.403 17.439H8.258A1.265 1.265 0 0 1 7 16.175V6.628a1.256 1.256 0 0 1 1.258-1.262h11.32c.335 0 .654.132.89.369s.369.558.369.893V9.21M7.33 9.184h10.377" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path stroke="#000" stroke-width="1.5" stroke-linecap="round" d="M10.657 4.809v1.358M17.982 4.75v1.358"></path><rect x="15" y="14" width="6" height="6" rx=".804" stroke="#000" stroke-width="1.5"></rect></svg>
                   <div class="workflow_1">
                       <h4>Project Management</h4>
                       <p>Plan, track and manage any project fron start to finish</p>
                   </div>
               </div>
               <div class="workflow_card2">
                   <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" class="jsx-1475715785 menu-item-title-icon outline" style="--icon-color:#6C6CFF;"><path d="M20.826 18.5a.676.676 0 0 0 .674-.674V9.2a.813.813 0 0 0-.26-.551L13.75 3 6.26 8.649A.814.814 0 0 0 6 9.2v8.626a.676.676 0 0 0 .674.674h14.152z" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 18v-6h5v6" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                   <div class="workflow_1">
                       <h4>Remote workflow</h4>
                       <p>Stay productive and collaborative whereever you are</p>
                   </div>
               </div>
               <div class="workflow_card2">
                   <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" class="jsx-1475715785 menu-item-title-icon outline" style="--icon-color:#6C6CFF;"><path d="M8.613 10.827h4.215M8.613 13.838h2.409M8.613 16.849h2.409M12.225 21.064h-6.02A1.204 1.204 0 0 1 5 19.858V7.215A1.204 1.204 0 0 1 6.204 6.01h3.01a3.01 3.01 0 1 1 6.022 0h3.01a1.204 1.204 0 0 1 1.205 1.204V9.02" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.225 21.064h-6.02A1.204 1.204 0 0 1 5 19.858V7.215M12.226 5.409a.301.301 0 1 1 0 .602.301.301 0 0 1 0-.602M14.63 16.722a4.34 4.34 0 1 0 8.68 0 4.34 4.34 0 0 0-8.68 0z" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.905 15.46l-2.102 2.802a.543.543 0 0 1-.818.058l-1.086-1.085" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                   <div class="workflow_1">
                       <h4>Inventory tracking</h4>
                       <p>Monitor your stok from point of collecction to final delivery</p>
                   </div>
               </div>
           </div>
           <div id="workflow_card2">
               <div class="workflow_card2">

                   <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" class="jsx-1475715785 menu-item-title-icon outline" style="--icon-color:#6C6CFF;"><mask id="path-1-inside-1_719_353165" fill="#fff"><rect x="9" y="7" width="14" height="14" rx="1"></rect></mask><rect x="9" y="7" width="14" height="14" rx="1" stroke="#000" stroke-width="3" stroke-linejoin="round" mask="url(#path-1-inside-1_719_353165)"></rect><path d="M18 7.5v-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h2.658" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 12v4M14 13.999h4" stroke="#000" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                   <div class="workflow_1">
                       <h4>200 + workflows</h4>
                       <p>Discover proven industry workflow to hit the ground running</p>
                   </div>
               </div>
           </div>
       </div>
   </div>
</div>
`
}


else if (j % 2 !== 1) {
    console.log("hello world")

    document.querySelector("#drop_down2").innerHTML = null;
}

}
document.getElementById("use_cases").addEventListener("click",usecasesfun );




//features dropdown menu



let featuresFun = () => {

    l++;

    if (l % 2 !== 0) {
        j=0;
        k=0;
        i=0;
 
        document.querySelector("#drop_down1").innerHTML =null;
        document.querySelector("#drop_down2").innerHTML =null;
        document.querySelector("#drop_down4").innerHTML =null;

        document.querySelector("#drop_down3").innerHTML =
        `  <div id="features_drop1">
        <p class="fetures_subhead">- key features</p>
        <div id="features_card">
            <a href="" class="features_a">
                <div class="features_card1">
                    <div class="fetures_head">
                        
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none"  style="--icon-color:#f8ca65;"><rect x="3.5" y="3.5" width="14" height="14" rx="1.375" stroke="#000"></rect><path stroke="#000" stroke-linecap="round" style="--icon-color:#f8ca65;" d="M7.183 14.687V11M10.936 14.687V8.188M14.69 14.687V6.312"></path></svg>
                        
                        <h4>Dashboard</h4>
                    </div>
                    <p>Simply decision-making with real-time insights</p>
                </div>
            </a>
            <a href="" class="features_a">
                <div class="features_card1">
                    <div class="fetures_head">
                       
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="jsx-1475715785 menu-item-title-icon outline" style="--icon-color:#6C6CFF;"><rect x="5.183" y="6.287" width="12.047" height="10.951" rx="2.259" stroke="#000"></rect><path stroke="#000" stroke-linecap="round" d="M8.974 10.072v2.285M13.35 10.072v2.285"></path><path d="M3 10.701c0-.624.506-1.13 1.13-1.13h1.06v4.381H4.13A1.13 1.13 0 0 1 3 12.823v-2.122zM17.234 9.572h1.061c.624 0 1.13.505 1.13 1.13v2.121a1.13 1.13 0 0 1-1.13 1.13h-1.06V9.571z" stroke="#000" stroke-linecap="round" stroke-linejoin="round"></path><path stroke="#000" stroke-linecap="round" d="M11.162 3.5v2.285"></path></svg>
                        <h4>Automations</h4>
                    </div>
                    <p>Save time and leave repetitive works behind</p>
                </div>
            </a>
            <a href="" class="features_a">
                <div class="features_card1">
                    <div class="fetures_head">
                        
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="jsx-1475715785 menu-item-title-icon outline" style="--icon-color:#6C6CFF;"><path d="M4 3.5h4.5V14a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5V4a.5.5 0 0 1 .5-.5zM13.5 3.5H18a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V3.5z" stroke="#000" stroke-linejoin="round"></path><rect x="8.5" y="3.5" width="5" height="15" rx=".5" stroke="#000" stroke-linejoin="round"></rect></svg>
                        <h4>Kanban</h4>
                    </div>
                    <p>Prioritize tasks and balance demands according to capacity</p>
                </div>
            </a>
            <a href="" class="features_a">
                <div class="features_card1">
                    <div class="fetures_head">
                       
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="jsx-1475715785 menu-item-title-icon outline" style="--icon-color:#6C6CFF;"><rect x="6.833" y="3.5" width="10.667" height="11.833" rx=".667" stroke="#000"></rect><path stroke="#000" stroke-linecap="round" d="M15.167 7h-6M15.167 10.5h-6"></path><path d="M4 7.667v10.266c0 .129.104.233.233.233h7.934" stroke="#000" stroke-miterlimit="1.414" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        <h4>Files</h4>
                    </div>
                    <p>Add context to your tasks by uploading any file type</p>
                </div>
            </a>
            <a href="" class="features_a">
                <div class="features_card1">
                    <div class="fetures_head">
                       
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="jsx-1475715785 menu-item-title-icon outline" style="--icon-color:#6C6CFF;"><path stroke="#000" stroke-linecap="round" d="M3.5 8.735l3.036 3.036M7.738 4.5l3.036 3.036M14.393 14.981l2.753 2.754"></path><path d="M5.745 12.735l6.78-6.78 3.67 3.671c.89.89.89 2.333 0 3.223l-3.556 3.556a2.28 2.28 0 0 1-3.223 0l-3.67-3.67z" stroke="#000"></path><path d="M4.031 14.342l9.5-9.328" stroke="#000" stroke-linecap="round"></path></svg>
                        <h4>Integration</h4>
                    </div>
                    <p>keep your business tools all in one place</p>
                </div>
            </a>
            <a href="" class="features_a">
                <div class="features_card1">
                    <div class="fetures_head">
                         <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="jsx-1475715785 menu-item-title-icon outline" style="--icon-color:#6C6CFF;"><path d="M9 6H2M14 11H6M19.242 16H12" stroke="#000" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        <h4>Gantt</h4>
                    </div>
                    <p>Visualize project milestones and dependencies</p>
                </div>
            </a>
            <a href="" class="features_a">
                <div class="features_card1">
                    <div class="fetures_head">
                        
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="jsx-1475715785 menu-item-title-icon outline" style="--icon-color:#6C6CFF;"><path d="M5 17.273V4a1 1 0 0 1 1-1h6.728a1 1 0 0 1 .753.342l3.272 3.74A1 1 0 0 1 17 7.74v9.533a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z" stroke="#000"></path><path d="M13.143 7.114V3.447c0-.157.194-.232.299-.115L16.742 7c.1.11.021.286-.127.286h-3.3a.171.171 0 0 1-.172-.172z" stroke="#000"></path><path d="M7.857 9.962h4.104M7.682 13.409h5.545" stroke="#000" stroke-linecap="round"></path></svg>
                        <h4>Docs</h4>
                    </div>
                    <p>Turn words into workflows and collaborate in real-time</p>
                </div>
            </a>

        </div>
    </div>`
    
}
else if (l % 2 !== 1) {
    console.log("hello world")

    document.querySelector("#drop_down3").innerHTML = null;
}

}
document.getElementById("features").addEventListener("click", featuresFun);




//Rsesourse dropdown menu



let resourcesFun = () => {

    k++;

    if (k % 2 !== 0) {
        j=0;
        i=0;
        l=0;
 
        document.querySelector("#drop_down1").innerHTML =null;
        document.querySelector("#drop_down2").innerHTML =null;
        document.querySelector("#drop_down3").innerHTML =null;

        document.querySelector("#drop_down4").innerHTML =
        ` <div id="resources_drop1" >
        <div id="learn8" class="fetures_block">
            <p class="head_features">- Learn</p>
            <div class="features_card">
                <h4>/Help center</h4>
                <p>Tutorials and how-to guides for using monday.com</p>
            </div>
            <div class="features_card">
                <h4>About us</h4>
                <p>How monday.com came to be, our values and milestones</p>
            </div>
            <div class="features_card">
                <h4>Webinars</h4>
                <p>Learn more about monday.com with live and on-demand Webinars</p>
            </div>
            <div class="features_card">
                <h4>Blog</h4>
                <p>Explore the latest on productivity, product news, tips, and more</p>
            </div>
           
        </div>
        <div id="connect8" class="fetures_block">
            <p class="head_features">- Connect</p>
          
            <div class="features_card">
                <h4>24/7 support</h4>
                <p>Get fast and dedicated support whenever you are in the world</p>
            </div>
            <div class="features_card">
                <h4>Partners</h4>
                <p>Learn more about our relationship programs</p>
            </div>
            <div class="features_card">
                <h4>Global events</h4>
                <p>Join us to unlock new insights at our upcoming online and ofline events</p>
            </div>
            <div class="features_card">
                <h4>Digital lift</h4>
                <p>Helping nonprofits make a lasting impact through technology</p>
            </div>
        </div>
        <div id="explore8" class="fetures_block">
            <p class="head_features">- Explore</p>
      
            
            <div class="features_card">
                <h4>Template center</h4>
                <p>200+ template and workflows to get you started in minutes</p>
            </div>
           
            <div class="features_card">
                <h4>Apps marketplace</h4>
                <p>Explore 100+ ready-made apps to expand the monday.com Work OS</p>
            </div>
            <div class="features_card">
                <h4>App developement</h4>
                <p>Everything you need to know about building apps for the app marketplace</p>
            </div>
            <div class="features_card">
                <h4>Customers stories</h4>
                <p>See hoe our customers drive impact with monday.com</p>
            </div>
        </div>
        <div id="stories8">
            <div class= "storiesdiv">
                <img class= "storiesImg" src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/header/blog_post_2.png" alt="">
                <p>The best CRM Software in 2022  [Read our CRM Guide Now]</p>
                <i>Read more -></i>
            </div>
            <div class= "storiesdiv">
                <img class= "storiesImg" src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/header/customer_story.png" alt="">
                <p>Oscar saves 1,850 hours and $50,000 each month with...</p>
                <i>Read more -></i>
            </div>
        </div>
    </div>`



}
else if (k % 2 !== 1) {
    console.log("hello world")

    document.querySelector("#drop_down4").innerHTML = null;
}

}
document.getElementById("resources").addEventListener("click", resourcesFun);