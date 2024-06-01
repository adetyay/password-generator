const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOne = document.getElementById("password-one")
let passwordTwo = document.getElementById("password-two")
let btn = document.getElementById("btn")
let passOne = ""
let passTwo = ""
let copyMsg = document.getElementById("copy-msg")


btn.addEventListener('click', ()=>{
    passOne = ""
    passTwo = ""
    copyMsg.textContent = ""

    for(let i=0; i<15; i++){
        let randomIndex = Math.floor(Math.random()*characters.length)
        passOne += characters[randomIndex]
        passwordOne.textContent = passOne
    }
    
    for(let i=0; i<15; i++){
        let randomIndex = Math.floor(Math.random()*characters.length)
        passTwo += characters[randomIndex]
        passwordTwo.textContent = passTwo
    }
})


// copy on click
// Function to handle copy operation
function handleCopy(event, element) {
    event.preventDefault();
    if (event.clipboardData) {
        event.clipboardData.setData("text/plain", element.textContent);
        console.log(event.clipboardData.getData("text"));
    }
}

// Function to handle click event and fade-out effect
function handleClick(element) {
    document.execCommand("copy");
    copyMsg.textContent = "Copied!";
    copyMsg.style.opacity = 1;

    let opacity = 1;
    const interval = 50; // interval in milliseconds
    const decrement = interval / 5000; // amount to decrease each interval

    const fadeOut = setInterval(() => {
        opacity -= decrement;
        if (opacity <= 0) {
            opacity = 0;
            clearInterval(fadeOut);
        }
        copyMsg.style.opacity = opacity;
    }, interval);
}

// Attach event listeners
[passwordOne, passwordTwo].forEach(password => {
    password.onclick = () => handleClick(password);

    password.addEventListener("copy", event => handleCopy(event, password));
});
