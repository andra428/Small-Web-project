class Produs{
    constructor(nume, cantitate, id){
        this.id = id;
        this.nume = nume;
        this.cantitate = cantitate;
    }
}
function deleteItems() {
    console.log("deleted");
    localStorage.clear();
  }
function adaugaCos(){
console.log("adaugam");
const tabel = document.getElementById("tabel-cumparaturi");
const worker = new Worker("/js/worker.js");
var book = document.getElementById("produs").value;
var cant = document.getElementById("cant").value;

    var storedItems = localStorage.getItem("Produse");
    var items = JSON.parse(storedItems) || [];
    var newId;
    
    if(items.length > 0){
        newId=items[items.length - 1].id + 1;
    }else{
        newId=1;
    }
   
    const prod = new Produs(book, cant, newId);
    
    items.push(prod);
    localStorage.setItem("Produse", JSON.stringify(items)); 
  console.log("S-a apăsat butonul Adaugă!");
  worker.postMessage("start");

  const rand = tabel.insertRow();
  const celula1 = rand.insertCell(0);
  const celula2 = rand.insertCell(1);
  const celula3=rand.insertCell(2);
  celula1.innerHTML=newId;
  celula2.innerHTML = book;
  celula3.innerHTML = cant;
  document.getElementById("cump").innerHTML = "Produsul a fost adaugat in cos!";
  worker.onmessage = function(event) {
    console.log('Mesaj de la worker', event.data);
  };
 //console.log(items);
}
    