import navbar from "./navbar.js"

document.getElementById("navbar").innerHTML=navbar();






let j = 0;
let usecasesfun = () => {

    j++;

    if (j % 2 !== 0) {
    


        document.querySelector("#drop_down2").innerHTML =
    ` <div id="usecase_menu">
    <div id="block_1">

        <span class="title_1"> - By team</span>
        <div id="team_card">

            <a href="#" class="decoretion">
                <div class="team_card1">

                    <img src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/footer/dev_icon_footer.png"
                        alt="">
                    <h4>Marketing</h4>

                </div>
            </a>
            <a href="#" class="decoretion">
                <div class="team_card1">
                    <img src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/footer/dev_icon_footer.png"
                        alt="">
                    <h4>Sales</h4>

                </div>
            </a>
            <a href="#" class="decoretion">
                <div class="team_card1">
                    <img src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/footer/dev_icon_footer.png"
                        alt="">
                    <h4>Developer</h4>
                </div>
            </a>
            <a href="#" class="decoretion">
                <div class="team_card1">
                    <img src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/footer/dev_icon_footer.png"
                        alt="">
                    <h4>PMO</h4>
                </div>
            </a>
            <a href="#" class="decoretion">
                <div class="team_card1">
                    <img src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/footer/dev_icon_footer.png"
                        alt="">
                    <h4>Operations</h4>
                </div>
            </a>
            <a href="#" class="decoretion">
                <div class="team_card1">
                    <img src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/footer/dev_icon_footer.png"
                        alt="">
                    <h4>IT</h4>
                </div>
            </a>
            <a href="#" class="decoretion">
                <div class="team_card1">
                    <img src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/footer/dev_icon_footer.png"
                        alt="">
                    <h4>HR</h4>
                </div>
            </a>



        </div>


    </div>
    <div id="block_2">
        <span class="title_1">- By business size</span>
        <div id="size_card">
            <div class="size_card1">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" class="jsx-1475715785 menu-item-title-icon outline" style="--icon-color:#F04095;"><path transform="matrix(.34684 .93793 -.95008 .312 10.22 17.544)" stroke="#000" stroke-width="2.5" stroke-linecap="round" d="M1.25-1.25h2.707"></path><path d="M7.942 17.543L7 14.435 18.306 6l3.062 10.729-13.426.814z" stroke="#000" stroke-width="2.5" stroke-linejoin="round"></path></svg>

                 <img src="" alt="">
                <h4>Enterprice</h4>
            </div>
            <div class="size_card1">
                <img src="" alt="">
                <h4>Small business</h4>
            </div>
            <div class="size_card1">
                <img src="" alt="">
                <h4>Non profit</h4>
            </div>
        </div>

    </div>

    <div id="block_3">
        <span class="title_1">- By workflow</span>
        <div id="workfolow_card">
            <div id="workflow_card1">
                <div class="workflow_card2">
                    <img src="" alt="">
                    <div class="workflow_1">
                        <h4>Project Management</h4>
                        <p>Plan, track and manage any project fron start to finish</p>
                    </div>
                </div>
                <div class="workflow_card2">
                    <img src="" alt="">
                    <div class="workflow_1">
                        <h4>Remote workflow</h4>
                        <p>Stay productive and collaborative whereever you are</p>
                    </div>
                </div>
                <div class="workflow_card2">
                    <img src="" alt="">
                    <div class="workflow_1">
                        <h4>Inventory tracking</h4>
                        <p>Monitor your stok from point of collecction to final delivery</p>
                    </div>
                </div>
            </div>
            <div id="workflow_card2">
                <div class="workflow_card2">

                    <img src="" alt="">
                    <div class="workflow_1">
                        <h4>200 + workflows</h4>
                        <p>Discover proven industry workflow to hit the ground running</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`
}


else if (j % 2 !== 1) {
    console.log("hello world")

    document.querySelector("#drop_down2").innerHTML = null;
}

}
document.getElementById("use_cases").addEventListener("click",usecasesfun );