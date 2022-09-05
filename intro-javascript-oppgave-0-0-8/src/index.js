// Oppgave 1
let deleteButton = document.getElementById("remove-btn"); //Knappen som skal utføre handlingen 
let toBeDeleted = document.getElementById("remove");  //<p> teksten som skal bli fjernet
deleteButton.addEventListener("click", () => {
  toBeDeleted.remove();
});

// Oppgave 2
const endrePåTekst = document.getElementById("change");
const endreBtn = document.getElementById("change-btn"); //Gjøre det mulig å endre på eksisterende tekst
const endreTekst = () => {      
  endrePåTekst.innerHTML = "Teksten er endret!"; 
};
endreBtn.addEventListener("click", endreTekst);  //Funksjon som gjør event mulig. 

// Oppgave 3
const tekstInput = document.getElementById("input-text");
const inputForBoks = document.getElementById("input");    //Skriver ut direkte av det som blir skrevet 

const fjernDefaultTekst = () => {
  tekstInput.innerHTML = null;
};

fjernDefaultTekst();

const oppdaterHtml = (event) => {
  let ord = event.key;
  tekstInput.innerHTML += ord;
};
inputForBoks.addEventListener("keyup", oppdaterHtml);

// Oppgave 4
function printList() {   //Jeg har brukt gjennom function, men ikke hentet. Det skal fremdeles fungere i teorien, vet ikke hvorfor det ikke fungerer i codesandbox
  const myList = ["item one", "item two", "item three"];
  var display = myList.toString();
  document.getElementById("ul").innerHTML = display;

  let list = document.getElementById("ul");

  myList.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
  });
}

// Oppgave 5
const selektere = document.getElementById("select");
const tekst = document.getElementById("text");
const opprettholdeBtn = document.getElementById("create");
const plassholderForHTML = document.getElementById("placeholder");

const lageElement = () => {
  const html_Element = selektere.value;
  const tekst_Element = tekst.value;
  plassholderForHTML.innerHTML += `<${html_Element}>${tekst_Element}</${html_Element}>`;
};

opprettholdeBtn.addEventListener("click", lageElement);

// Oppgave 6
const listElement = document.getElementById("list");
const remove = document.getElementById("remove-li");

const fjerneLiFraForeldre = () => {
  const rep = listElement.firstElementChild;
  if (rep) {
    listElement.removeChild(rep);
  }
};
remove.addEventListener("click", fjerneLiFraForeldre);

// Oppgave 7
const textInput = document.getElementById("name");
const orderBtn = document.getElementById("order");

const sjekk = () => {
  const navn = textInput.value;
  if (navn && navn.length >= 4) {
    orderBtn.disabled = true;
    orderBtn.style = "border: 1px solid red";
  } else {
    orderBtn.disabled = false;
    orderBtn.style = "border: 1px solid black";
  }
};

textInput.addEventListener("keyup", sjekk);

// Oppgave 8

// Jeg fikk ikke til oppgave 8. Jeg prøvde å gjøre oppgaven ved å bruke
// function, men får bare error om at den ikke blir brukt. Men jeg får ikke
// erroren da jeg gjør det blant annet på vsc.
