function get_Data(){
    setInterval(get_Data, 1000);
    var currentdate = new Date(); 
    var data = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + "  ~  "  
    
    const oraCurenta = new Date();
    if(window.document.getElementById("k1")){
    window.document.getElementById("k1").innerHTML = data + oraCurenta.toLocaleTimeString();
    }
}
function get_Url(){
    window.document.getElementById("k2").innerHTML = window.location.href; 
}
function get_Position(position) {
    window.document.getElementById("k3").innerHTML = "<strong>Latitudine: </strong>" + position.coords.latitude +
    "<br><strong>Longitudine: </strong>" + position.coords.longitude;
}
function get_Location() {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(get_Position);
    } else {
        window.document.getElementById("k3").innerHTML = "Localizarea nu este suportată de acest browser.";
    }
}

function get_Nume_Browser(){
    var name = window.navigator.appName;
    var version = window.navigator.appVersion;

   window.document.getElementById("k4").innerHTML = "<strong>Nume: </strong> " + name + "<br><strong>Versiune:</strong> " + version
}

function get_SO(){
    var OSName = "Unknown";
    if (window.navigator.userAgent.indexOf("Windows NT 10.0")!= -1) OSName="Windows 10";
    if (window.navigator.userAgent.indexOf("Windows NT 6.3") != -1) OSName="Windows 8.1";
    if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1) OSName="Windows 8";
    if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1) OSName="Windows 7";
    if (window.navigator.userAgent.indexOf("Windows NT 6.0") != -1) OSName="Windows Vista";
    if (window.navigator.userAgent.indexOf("Windows NT 5.1") != -1) OSName="Windows XP";
    if (window.navigator.userAgent.indexOf("Windows NT 5.0") != -1) OSName="Windows 2000";
    if (window.navigator.userAgent.indexOf("Mac")            != -1) OSName="Mac/iOS";
    if (window.navigator.userAgent.indexOf("X11")            != -1) OSName="UNIX";
    if (window.navigator.userAgent.indexOf("Linux")          != -1) OSName="Linux";

    window.document.getElementById("k5").innerHTML = OSName;
}
function varstaRange(){
  console.log("kkk");
  var vv = window.document.getElementById("varsta");
  window.document.getElementById("kk").innerHTML=vv.value;
  vv=function(){
    window.document.getElementById("kk").innerHTML=this.value;
  }
}
function desen(){
   var color = document.getElementById("favvcolor").value
   var color2 = document.getElementById("favcolor").value
   var c = document.getElementById("k6");
   var ctx = c.getContext("2d");
   ctx.beginPath();
  ctx.rect(20, 20, 150, 100);
  ctx.lineWidth=5;
ctx.strokeStyle = color2;
ctx.stroke();
ctx.fillStyle = color;
ctx.fill();
}

function inserareLinie(){
    var color3 = window.document.getElementById("fcolor").value;
    var t = document.getElementById('k7'); 
    var poz =window.document.getElementById("c").value;

    var row = t.insertRow(poz);   
      for (var i = 0; i < t.rows[0].cells.length; i++) {
        var c = row.insertCell(i);
        c.style.backgroundColor = color3;
        c.innerHTML = "Cell";
    }
}
function inserareColoana(){
    var color3 = document.getElementById("fcolor").value
    var t = document.getElementById('k7');
    for (var i = 0; i < t.rows.length; i++) {
        
      var c = t.rows[i].insertCell(t.rows[i].cells.length);
      c.style.backgroundColor = color3;
      c.innerHTML = "Cell";

  }
}

function schimbaContinut(resursa){
    var res=resursa+'.html';
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("continut").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", res);
  xhttp.send();
}

function schimbaContinut2(resursa,jsFisier,jsFunctie){
    var res=resursa+'.html';
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("continut").innerHTML = this.responseText;
      if (jsFisier) {
        var elementScript = document.createElement('script');
        elementScript.onload = function () {
        console.log("hello");
        if (jsFunctie) {
        window[jsFunctie]();
        }
        };
        elementScript.src = jsFisier;
        document.head.appendChild(elementScript);
        } else {
        if (jsFunctie) {
        window[jsFunctie]();
        }
        }
    }
  };
  xhttp.open("GET", res);
  xhttp.send();
}

function verificare(name,pass){
  // pentru fisierul verifica.html cu test
  document.getElementById("container").innerHTML="";
  var oXHR = new XMLHttpRequest();
    // Initiate request.
    oXHR.onreadystatechange = reportStatus;
    oXHR.open("GET", "resurse/utilizatori.json", true);  // get json file.
    oXHR.send();
    console.log("verificare");
    var ok=0;
    function reportStatus() {
        if (oXHR.readyState == 4) {	
          var data = JSON.parse(this.responseText);
         for( i=0;i<data.length;i++){
          if((name === data[i].utilizator) && (pass === data[i].parola)){            
            ok=1;
            break;
          }
        }
      }
      if(ok==1){
        document.getElementById("container").innerHTML="Date corecte!";
      }else{
        document.getElementById("container").innerHTML="Date incorecte!";
        
      }
}
}
function verificareExtinsa(){
  var nume=document.getElementById("nuser").value;
  var prenume = document.getElementById("na").value;
  var parola = document.getElementById("p").value;
   var username  = nume+prenume;
   var user = {
   utilizator:"",
    parola: ""
  };
  user.utilizator=username;
  user.parola=parola;
  const userJSON = JSON.stringify(user);
  var xhr = new XMLHttpRequest();
  
  xhr.open("POST", "/api/utilizatori", true);
  xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
  xhr.send(userJSON);
  console.log("inregistreaza");
  xhr.onload= function() {
    if (xhr.status === 200) {
      console.log( "Înregistrarea a fost realizată cu succes!");
    } else {
      console.log( "A apărut o eroare la înregistrare!");
    }
  };
}
function apel(){
    get_Data();
    get_Url();
    get_Location();
    get_Nume_Browser();
    get_SO();
}