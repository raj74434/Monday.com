//import {navbar,footer} from ""
//document.getElementById("navbar").innerHTML=navbar()


//document.getElementById("footer_section").innerHTML=footer()

document.getElementById("cont").addEventListener("change",getcountry)
function getcountry(){
    let val=document.getElementById("cont").value;
    // console.log(val)
    if(val==="select country"){
        document.getElementById("output").value=""
        console.log(val)
    }


    else if(val==='India'){
        document.getElementById("output").value="+91"
        console.log(val)
    }

    else if(val==="United Kingdom"){
        document.getElementById("output").value="+98"
    }

    else if(val==="Sri Lanka"){
        document.getElementById("output").value="+88"
    }

    else if(val==="South Korea"){
        document.getElementById("output").value="+73"
    }
    else if(val==="Russia"){
        document.getElementById("output").value="+83"
    }

    else if(val==="Hungary"){
        document.getElementById("output").value="+21"
    }

    else if(val==="Indonesia"){
        document.getElementById("output").value="+87"
    }
}
getcountry()
 
// let form=document.getElementById("form") 
// form.addEventListener("onclick",{
//    getdata
// })

function details(n,l,e,t,c,o,cn,cz,m){
    this.name=n;
    this.lastname=l;
    this.email=e;
    this.title=t;
    this.cont=c;
    this.output=o;
    this.cname=cn;
    this.csize=cz;
    this.msg=m;
}

document.getElementById("gone").style.display="none";
// let container=document.getElementById("input_feild")

let data=(event)=>{
   
    event.preventDefault();

    let name=document.getElementById("first_name").value;
    let lastname=document.getElementById("last_name").value;
    let email=document.getElementById("work_email").value;
    let title=document.getElementById("job_title").value;
    let cont=document.getElementById("cont").value;
    let output=document.getElementById("output").value;
    let cname=document.getElementById("comp_name").value;
    let csize=document.getElementById("comp_size").value;
    let msg=document.getElementById("msg").value;

    let u1=new details(name,lastname,email,title,cont,output,cname,csize,msg)
    console.log(u1)
    let users=JSON.parse(localStorage.getItem("Feedback"))||[];
    users.push(u1)
    localStorage.setItem("Feedback",JSON.stringify(users))
    alert("Thanks for submitting your request!")


    
    let newdiv=document.getElementById("gone")
    document.getElementById("input_feild").innerHTML=null;
    document.getElementById("gone").style.display="block"
    document.getElementById("input_feild").append(newdiv)
    //newdiv.style.display="block"

    
    // document.getElementById("input_feild").style.display="none"
    
    
    // if(container.style.display==="block"&&newdiv.style.display==="none"){
    //     container.style.display="none"
    //     newdiv.style.display="block"
    // }
    
   
}
//console.log(newdiv)

//let btn=document.getElementById("submit")
//let container=document.getElementById("input_feild")
// btn.addEventListener("click",function(){
//     if(container.style.display==="block"){
//         container.style.display=newdiv
//     }else{
//         container.style.display="block" 

//         // container.style.display=newdiv;
//     }
// })

// let newadd=()=>{
//     let div=document.createElement("div")
//     div.setAttribute("id","show")
//     div.innerText="done"
//     return div
// }

// function display(){
//     let x=document.getElementById("input_feild").innerText=newadd()
//     console.log(x)
// }

 

