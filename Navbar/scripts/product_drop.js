import navbar from "./navbar.js"

document.getElementById("navbar").innerHTML=navbar();






let i = 0;
let displayMenu = () => {

    i++;

    if (i % 2 !== 0) {
    


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