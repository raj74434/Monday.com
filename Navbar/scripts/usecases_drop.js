import navbar from "./navbar.js"

document.getElementById("navbar").innerHTML=navbar();






let j = 0;
let usecasesfun = () => {

    j++;

    if (j % 2 !== 0) {
    


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