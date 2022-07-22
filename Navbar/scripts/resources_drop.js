import navbar from "./navbar.js"

document.getElementById("navbar").innerHTML=navbar();






let k = 0;
let resourcesFun = () => {

    k++;

    if (k % 2 !== 0) {
    


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