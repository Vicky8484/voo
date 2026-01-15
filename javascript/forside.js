/*mobil anagram knapper*/
const button1 = document.querySelector("#knap1");
const button2 = document.querySelector("#knap2");
const button3 = document.querySelector("#knap3");

/*desktop anagram knapper*/
const button4 = document.querySelector("#desk-knap1");
const button5 = document.querySelector("#desk-knap2");
const button6 = document.querySelector("#desk-knap3");

/*billeder til udskiftning*/
const forside1 = document.getElementById("forside1");
const forside2 = document.getElementById("forside2");
const forside3 = document.getElementById("forside3");

/*udskiftnings-funktioner*/
button1.addEventListener("click", skift);

function skift() {
  console.log("du har klikket på knappen og funktionen kører");
  forside1.classList.add("hide");
  forside2.classList.remove("hide");
  button1.classList.add("hide");
  button2.classList.remove("hide");
}

button2.addEventListener("click", skift2);

function skift2() {
  console.log("du har klikket på knappen og funktionen kører");
  forside1.classList.add("hide");
  forside2.classList.add("hide");
  forside3.classList.remove("hide");
  button2.classList.add("hide");
  button3.classList.remove("hide");
}

button3.addEventListener("click", skift3);

function skift3() {
  console.log("du har klikket på knappen og funktionen kører");
  forside1.classList.remove("hide");
  forside2.classList.add("hide");
  forside3.classList.add("hide");
  button2.classList.add("hide");
  button3.classList.add("hide");
  button1.classList.remove("hide");
}

/*udskiftningsfunktioner desktop*/
button4.addEventListener("click", skift4);

function skift4() {
  console.log("du har klikket på knappen og funktionen kører");
  forside1.classList.add("hide");
  forside2.classList.remove("hide");
  button4.classList.add("hide");
  button4.classList.remove("show");
  button5.classList.remove("hide");
}

button5.addEventListener("click", skift5);

function skift5() {
  console.log("du har klikket på knappen og funktionen kører");
  forside1.classList.add("hide");
  forside2.classList.add("hide");
  forside3.classList.remove("hide");
  button5.classList.add("hide");
  button6.classList.remove("hide");
}

button6.addEventListener("click", skift6);

function skift6() {
  console.log("du har klikket på knappen og funktionen kører");
  forside1.classList.remove("hide");
  forside2.classList.add("hide");
  forside3.classList.add("hide");
  button5.classList.add("hide");
  button6.classList.add("hide");
  button4.classList.remove("hide");
}
