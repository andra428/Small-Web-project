function data_timp_curent(){
    setInterval(data_timp_curent, 1000);
    var currentdate = new Date(); 
    var data = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + "  ~  "  
    
    const oraCurenta = new Date();
    window.document.getElementById('k1').innerHTML = data + oraCurenta.toLocaleTimeString();
}
function ulr_det(){
    window.document.getElementById("k2").innerHTML = window.location.href; 
}
function showPosition(position) {
    window.document.getElementById("k3").innerHTML = "<strong>Latitudine: </strong>" + position.coords.latitude +
    "<br><strong>Longitudine: </strong>" + position.coords.longitude;
}
function getLocation() {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        window.document.getElementById("k3").innerHTML = "Localizarea nu este suportată de acest browser.";
    }
}

function nume_Browser(){
    var name = window.navigator.appName;
    var version = window.navigator.appVersion;

   window.document.getElementById("k4").innerHTML = "<strong>Nume: </strong> " + name + "<br><strong>Versiune:</strong> " + version
}

function SO(){
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

function apel(){
    data_timp_curent();
    ulr_det();
    getLocation();
    nume_Browser();
    SO();
}