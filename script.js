let allData = [];

//elements
let subtitle = document.getElementById("subtitle");
let memberCounter = document.getElementById("memberCounter");
let userArea = document.getElementById("userArea");
let favoriteCount = document.getElementById("favoriteCount");

window.addEventListener("load", async function(){
    await getData();
})

async function getData(){
    try{
        let res = await fetch("https://jsonplaceholder.typicode.com/users");
        let fetchData = await res.json(); 
    
        allData = fetchData;
        console.log(allData);
        
        renderData(allData);
    } catch (error){ 
        memberCounter.innerText = "";
        subtitle.innerText = "Cant load any Data, try reloading";
    }
}

function renderData(data){
    for (let i = 0; i < allData.length; i++){
        //base
        let newDiv_User = document.createElement("div");
        newDiv_User.id = "users";
        userArea.appendChild(newDiv_User);
        //profile pict
        let newDiv_ProfilePict = document.createElement("div");
        newDiv_ProfilePict.id = "profilePict";
        newDiv_User.appendChild(newDiv_ProfilePict);
        
        let newP_PictName = document.createElement("p");
        let spaceFound = false;
        newP_PictName.id = "pictName";
        //below for works to check if theres any space inside the name, otherwise just use the first letter of the name
        for (let k = 0; k < data[i].name.length; k++){
            if(data[i].name.charAt(k) == " "){
                newP_PictName.innerText = data[i].name.split(" ")[0][0] + data[i].name.split(" ")[1][0];
                spaceFound = true;
                break;
            }
        }
        if (!spaceFound) { newP_PictName.innerText = data[i].name.charAt(0); }
        newDiv_ProfilePict.appendChild(newP_PictName);
        // name & mail
        let newDiv_NameArea = document.createElement("div");
        newDiv_NameArea.id = "nameArea";
        newDiv_User.appendChild(newDiv_NameArea);
    
        let newP_NameUser = document.createElement("p");
        newP_NameUser.id = "nameUser";
        newP_NameUser.innerText = data[i].name;
        newDiv_NameArea.appendChild(newP_NameUser);
    
        let newP_EmailUser = document.createElement("p");
        newP_EmailUser.id = "emailUser";
        newP_EmailUser.innerHTML = data[i].email;
        newDiv_NameArea.appendChild(newP_EmailUser);
        //star area
        let newDiv_StarArea = document.createElement("div");
        newDiv_StarArea.id = "starArea";
        newDiv_StarArea.className = "notFavorited"
        newDiv_User.appendChild(newDiv_StarArea);
    }
}




