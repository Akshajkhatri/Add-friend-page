var istatus = document.querySelector("h5")

var addFriend = document.querySelector("#add")
// var removefriend = document.querySelector("#remove")

// var feature = document.querySelector(".btn-container")

var check = 0

addFriend.addEventListener("click", function(){
    if (check === 0) {
        istatus.innerHTML ="Friends"
        istatus.style.color = "green"
        check = 1
        addFriend.innerHTML = "Remove Friend"
        addFriend.style.color = "white"
    
        
    }else{
        istatus.innerHTML ="Stranger"
        istatus.style.color = "red"
        check = 0
         addFriend.innerHTML = "Add friend"
        
    }
  
})

// removefriend.addEventListener("click", function(){
//     istatus.innerHTML ="Stranger"
//     istatus.style.color = "red"

// })

