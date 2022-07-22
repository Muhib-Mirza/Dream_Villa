let x = 0;

function toggle() {
    x++; 
    console.log("Hello");
    console.log(x);
    if(x%2 == 1)
    {
        document.querySelector('.nav-mobile-list-container').style.transform = "translate(0,-0.58rem)";
        document.querySelector('.mobile-nav-list').style.transform = "translate(0)";
    }
    if(x%2 == 0)
    {
        document.querySelector('.nav-mobile-list-container').style.transform = "translateX(-11rem)";
        document.querySelector('.mobile-nav-list').style.transform = "translateX(-11rem)";
    }
 }

function remove(){
    document.querySelector('.nav-mobile-list-container').style.transform = "translateX(-11rem)";
} 
