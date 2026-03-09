// const roles = ["Web development","Frontend Development","Mern Stack Development","Backend development"];

// let i = 0;
// let j = 0;

// function typeRoll() {
//     const currentRoll = roles[i];

//     if (j < currentRoll.length){
//         document.getElementsByClassName("typing")[0].innerHTML += currentRoll.charAt(j);
//         j++;
//         setTimeout(typeRoll,100);
//     }
//     else {
//         setTimeout(() => {
//             document.getElementsByClassName("typing").innerHTML = ''
//              i = (i + 1) % roles.length; // loop to next phrase
//             j = 0; // reset character index
//             typeRoll();
//         },1500)
//     }
// }

// typeRoll();