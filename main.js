// KF Panda Search


// HTML variables 
let charNameEl = document.getElementById("char-name")
let charQuoteEl = document.getElementById("char-quote")
// button event listener 
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
    //input
    let name = document.getElementById("char-in").value.toLowerCase();

    // if statement - test the input 
    if (name === "po" || name === "Dragon Warrior") {
        charNameEl.innerHTML = "Po"; 
        charQuoteEl.innerHTML = "Buddy, I am the Dragon Warrior!"; 
       document.getElementById("char-img").src = "img/po.png"; 
    } else if (name === "tigress") {
        charNameEl.innerHTML = "Tigress"; 
        charQuoteEl.innerHTML = "That was hardcore!"; 
        document.getElementById("char-img").src = "img/tigress.png";  
        console.log("Yes, Tigress is a KF Panda character")
    }else if (name === "mantis") {
        charNameEl.innerHTML = "Mantis"; 
        charQuoteEl.innerHTML = "Fear the Bug!"; 
        document.getElementById("char-img").src = "img/mantis.png"; 
        console.log("Yes, Mantis is a KF Panda character")
    }else if (name === "monkey") {
        charNameEl.innerHTML = "Monkey"; 
        charQuoteEl.innerHTML = "We should hangout!"; 
        document.getElementById("char-img").src = "img/monkey.png"; 
        console.log("Yes, Monkey is a KF Panda character")
    }else if (name === "viper") {
        charNameEl.innerHTML = "Viper"; 
        charQuoteEl.innerHTML = "I don't need to bite to fight!"; 
        document.getElementById("char-img").src = "img/viper.png"; 
        console.log("Yes, viper is a KF Panda character")
    }else if (name === "tai lung") {
        charNameEl.innerHTML = "tai lung"; 
        charQuoteEl.innerHTML = "Im too powerful!"; 
        document.getElementById("char-img").src = "img/tai-lung.png"; 
        console.log("Yes, tai lung is a KF Panda character")
    }else if (name === "storming") {
        charNameEl.innerHTML = "storming"; 
        charQuoteEl.innerHTML = "I am ox the sharp!"; 
        document.getElementById("char-img").src = "img/storming-ox.png"; 
        console.log("Yes, storming is a KF Panda character")
    }else if (name === "soothsayer") {
        charNameEl.innerHTML = "soothsayer"; 
        charQuoteEl.innerHTML = "i'll sooth you!"; 
        document.getElementById("char-img").src = "img/soothsayer.png"; 
        console.log("Yes, sooth sayer lung is a KF Panda character")
    }else if (name === "shifu") {
        charNameEl.innerHTML = "shifu"; 
        charQuoteEl.innerHTML = "I am great!"; 
        document.getElementById("char-img").src = "img/shifu.png"; 
        console.log("Yes, shifu is a KF Panda character")
    }else if (name === "shen") {
        charNameEl.innerHTML = "shen"; 
        charQuoteEl.innerHTML = "Im sheningful!"; 
        document.getElementById("char-img").src = "img/shen.png"; 
        console.log("Yes, shen is a KF Panda character")
    }else if (name === "oogway") {
        charNameEl.innerHTML = "oogway"; 
        charQuoteEl.innerHTML = "I am one with peace!"; 
        document.getElementById("char-img").src = "img/oogway.png"; 
        console.log("Yes, oogway is a KF Panda character")
    }else if (name === "mr ping") {
        charNameEl.innerHTML = "mr ping"; 
        charQuoteEl.innerHTML = "Come get my NOODLES!"; 
        document.getElementById("char-img").src = "img/mr-ping.png"; 
        console.log("Yes, mr ping is a KF Panda character")
    }else if (name === "kai") {
        charNameEl.innerHTML = "kai"; 
        charQuoteEl.innerHTML = "Im too powerful!"; 
        document.getElementById("char-img").src = "img/kai.png"; 
        console.log("Yes, kai is a KF Panda character")
    }else if (name === "croc") {
        charNameEl.innerHTML = "croc"; 
        charQuoteEl.innerHTML = "ahhhh im big!"; 
        document.getElementById("char-img").src = "img/croc.png"; 
        console.log("Yes, croc lung is a KF Panda character")
    }else if (name === "crane") {
        charNameEl.innerHTML = "crane"; 
        charQuoteEl.innerHTML = "Im too powerful!"; 
        document.getElementById("char-img").src = "img/crane.png"; 
        console.log("Yes, craine is a KF Panda character")
    }else if (name === "boss wolf") {
        charNameEl.innerHTML = "boss wolf"; 
        charQuoteEl.innerHTML = "Im too powerful!"; 
        document.getElementById("char-img").src = "img/boss-wolf.png"; 
        console.log("Yes, boss wolf is a KF Panda character")
    }
    else {
        document.getElementById("char-name").innerHTML = "?????"; 
        document.getElementById("char-quote").innerHTML = "---------"; 
        document.getElementById("char-img").src = "img/question-mark.png"; 
    }
}
let themeColour = document.getElementById("themecolour");
let textColour = document.getElementById("textTheme");
document.getElementById("theme-btn").addEventListener("click", themebtnClicked);
function themebtnClicked() {
  let theme = document.getElementById("theme-in").value.toLowerCase();
  if (theme === "dark" || theme === "black") {
    themeColour.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    textColour.style.color = "white";
  } else if (theme === "light" || theme === "white") {
    themeColour.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
    textColour.style.color = "black";
  } else if (theme === "random") {
    var randomRed = Math.floor(Math.random() * 256);
    var randomGreen = Math.floor(Math.random() * 256);
    var randomBlue = Math.floor(Math.random() * 256);
var randomColor =
      "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";
var randcol =
      "rgba(" + randomGreen + "," + randomRed + "," + randomBlue + "0.7)";
    textColour.style.color = randomColor;
    themeColour.style.backgroundColor = randcol;
  }
}

