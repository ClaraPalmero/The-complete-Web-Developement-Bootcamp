// const buttons = document.querySelectorAll(".drum");

// buttons.forEach(button => {
//     button.addEventListener("click", function(){
//       const buttonInnerHtml = this.innerHTML;
      
//       switch (buttonInnerHtml) {
//         case "w":
//             let crash = new Audio("sounds/crash.mp3");
//             crash.play();
//             break;

//         case "a":
//             kick = new Audio("sounds/kick-bass.mp3");
//             kick.play();
//             break;

//         case "s":
//             snare = new Audio("sounds/snare.mp3");
//             snare.play();
//             break;

//         case "d":
//             tom1 = new Audio("sounds/tom1.mp3");
//             tom1.play();
//             break; 

//         case "j":
//             tom2 = new Audio("sounds/tom2.mp3");
//             tom2.play();
//             break; 

//         case "k":
//             tom3 = new Audio("sounds/tom3.mp3");
//             tom3.play();
//             break; 
        
//         case "l":
//             tom4 = new Audio("sounds/tom4.mp3");
//             tom4.play();
//             break; 
        
//         default: console.log(buttonInnerHtml);
            
//       }

    
//         });
// });


/*
----Way 2:

const handleClick = () => {
    alert("Click");
}

const buttons = document.querySelectorAll(".drums");

buttons.forEach(button => {
    button.addEventListener("click", handleClick);
});
*/



// ----Way 3:

const nuemberOfButtons = document.querySelectorAll(".drum").length;
for (let i = 0; i < nuemberOfButtons; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
     
      const buttonInnerHtml = this.innerHTML;

      switch (buttonInnerHtml) {
        case "w":
            const crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "a":
           const kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        case "s":
            const snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "d":
           const  tom1 = new Audio("sounds/tom1.mp3");
            tom1.play();
            break; 

        case "j":
           const  tom2 = new Audio("sounds/tom2.mp3");
            tom2.play();
            break; 

        case "k":
           const tom3 = new Audio("sounds/tom3.mp3");
            tom3.play();
            break; 
        
        case "l":
           const tom4 = new Audio("sounds/tom4.mp3");
            tom4.play();
            break; 
        
        default: console.log(buttonInnerHtml)
            
      }
    })
}






