// Oppgave 1
function removeAll(){
    document.getElementById("remove").innerHTML = "";
    }


// Oppgave 2
function changeText(){
    document.getElementById("change").innerHTML = "Nå har teksten blitt endret!";
    }



// Oppgave 3
function displayText() {
    var x = document.getElementById("input").value;
    document.getElementById("input-text").innerHTML = x;
  }



// Oppgave 4
function printList(){
    const myList = ["item one", "item two", "item three"];
    var display = myList.toString();
    document.getElementById("ul").innerHTML = display;

    let list = document.getElementById("ul");
  
    myList.forEach((item)=>{
      let li = document.createElement("li");
      li.innerText = item;
      list.appendChild(li);
    })
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
