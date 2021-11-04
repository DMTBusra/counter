let number = document.getElementsByClassName("number")[0];
let decrease_btn = document.getElementsByClassName("Decrease")[0];
let reset_btn = document.getElementsByClassName("Reset")[0];
let increase_btn = document.getElementsByClassName("Increase")[0];
let container = document.getElementsByClassName("container")[0];

let count = 0;
container.addEventListener("click",(e)=>{
    
    if(e.target.className =="increase"){
        count += 1;
        color(count);      
    }
    else if(e.target.className =="decrease"){
        count -= 1;
        color(count);     
    }
    else if(e.target.className =="reset"){
        count = 0;   
        color(count);
    }
});


function color (count){
    if(count == 0){
        number.style.color = "purple";
}
    else if (count <0){
        number.style.color = "green";
}
    else{ 
        number.style.color = "red";
    }
    number.innerText = count;
};
 