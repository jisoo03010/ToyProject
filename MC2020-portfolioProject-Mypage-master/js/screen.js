document.getElementById("folder").onclick = function(){
    let folderpage = document.getElementById("folderpage")
    if(folderpage.style.display == "none") folderpage.style.display = "block"
    else folderpage.style.display = "none"
    
}
let blurback = document.getElementsByClassName("blurback")[0]
function login(pwd){
    if(pwd == "jisoo0310"){
        blurback.animate([
            {opacity: 0}
        ],2000)
        setTimeout(function(){
            blurback.style.display = "none"
        }, 2000)
       
        
    }
}