// requirements
// - build from scratch
// - generate 2 random passwords when the user clicks the button
// - Each password should be 15 characters long

//stretch goals
// - ability to set password length
// - add copy on click
// - toggle "symbols" and "numbers" on/off

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let shuffled = []

//grab the button id
let passBtn = document.getElementById("generateBtn")
console.log(passBtn)

//grab the two areas where the password will generate
let passwordOne = document.getElementById("passOne")
let passwordTwo = document.getElementById("passTwo")

console.log(passwordOne)

//iterate through the characters and grab 15 character have them show up in the password area.

passBtn.addEventListener('click', function addPass(){
    passOne.textContent = ""
    passTwo.textContent = ""
    console.log("click")
    genPass()
    passOne.style.color = "#4ADF86"
    passTwo.style.color = "#4ADF86"
})

function genPass(){

    shuffleArrary()
    for(let i = 0; i< 15; i++){
         console.log()
         passOne.textContent += shuffled[i]
    }

    shuffleArrary()
    for(let i = 0; i< 15; i++){
        console.log()
        passTwo.textContent += shuffled[i]
   }
}

function shuffleArrary(){
    //found on stackoverflow explaination:
        // We put each element in the array in an object, and give it a random sort key
        // We sort using the random key
        // We unmap to get the original objects
        shuffled = characters
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
}


//copy text to clipboard passOne and passTwo
// passwordOne.addEventListener('click', function copyPass(){
//     passOne.focus()
//     passOne.select()
//     navigator.clipboard.writeText(passOne.value)
// })
