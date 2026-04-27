let score = 0; 

const username = prompt("What's your name"); 
alert(`What's up, ${username}!`); 

const selectionInput = prompt(`What is 7 + 5 ? Please select one of the following options. 
[1] 89 
[2] 12
`); 
 console.log(selectionInput)
 console.log(typeof selectionInput)

if(Number.isNaN(selectionInput)) {
    alert("you must enter a number. "); 
} else if(selectionInput > 3 || selectionInput < 1) {

    alert("enter 1, 2 or 3"); 
}else if (selectionInput == 2 ) {
    score += 1; 
}else {
    console.log("Sorry, fam that's the wrong answer"); 
}

const selectionInput2 = prompt(`What is 29 + 70 ? Please select one of the following options. 
[1] 89 
[2] 12
`); 

if(Number.isNaN(selectionInput2)) {
    alert("you must enter a number. "); 
} else if(selectionInput2 > 3 || selectionInput2 < 1) {

    alert("enter 1, 2 or 3"); 
}else if (selectionInput2 == 1 ) {
    score += 1; 
}else {
    console.log("Sorry, fam that's the wrong answer"); 
}

const selectionInput3 = prompt(`What is 9 + 7 ? Please select one of the following options. 
[1] 89 
[2] 16
`); 

if(Number.isNaN(selectionInput3)) {
    alert("you must enter a number. "); 
} else if(selectionInput3 > 3 || selectionInput3 < 1) {

    alert("enter 1, 2 or 3"); 
}else if (selectionInput3 == 1 ) {
    score += 1; 
}else {
    console.log("Sorry, fam that's the wrong answer"); 
}

// console.log() 
alert(`Your final score is: ${score}`)