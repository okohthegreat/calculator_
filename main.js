//to switch the paragraph text

function darkmodeone() {
  let text = document.getElementById("modetext");
  let valid = false;

  if (document.getElementById("darkmode-toggle").checked) {
    text.textContent = "SWITCH TO LIGHT MODE";
    valid = true;
  } else {
    text.textContent = "SWITCH TO DARK MODE";
  }
}



//for the calculator to work

const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

const specialCharecters = ["%", "/", "+", "-", "=", "±", "(", ")"];
let output="";

const calculate = (btnValue) => {
    if(btnValue === "=" && output !==""){
        output = eval(output.replace("%", "/100"));
    }
    else if(btnValue === "CAL"){
        output ="";
    }
    else if(btnValue === "DEL"){
        output = output.toString().slice(0, -1);
    }
    else{
        if(btnValue === "" && specialCharecters.includes(btnValue)) return;
        output += btnValue;
    }
  display.value = output;

};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});




//for darkmode

let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#darkmode-toggle");


const enableDarkMode = () =>{
    document.body.classList.add("darkmode");
    localStorage.setItem("darkMode", "enabled");
}

const disableDarkMode = ()=>{
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkMode", null)
}

// if(darkMode === "enabled"){
//   enableDarkMode();
// }

darkModeToggle.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");
    
    if(darkMode !== "enabled"){
      enableDarkMode();
      console.log(darkMode)

    }

    else{
      disableDarkMode();
      console.log(darkMode)

    }
})


