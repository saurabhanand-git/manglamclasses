function expand(){
    var x= document.getElementById("dropdown");
    if(x.className==="navbar-right"){
        x.className += " responsive";
    }
    else{
        x.className="navbar-right";
    }
}