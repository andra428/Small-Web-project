//carti2.xml reading
function incarcaCarti2(){
    const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        detalii(this);
      //document.getElementById("continut").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "resurse/carti2.xml");
  xhttp.send();
  document.getElementById("eu2").innerHTML="";
}
function detalii(xml){
document.getElementById("eu2").innerHTML="Cărți pe care le citesc în acest moment <br>";
var xmlDoc = xml.responseXML;
var x = xmlDoc.getElementsByTagName("book");
  var carte=x[0].getElementsByTagName("nume")[0].childNodes[0].nodeValue;
  var autor=x[0].getElementsByTagName("autor")[0].childNodes[0].nodeValue;
  var an_publicare=x[0].getElementsByTagName("an_publicare")[0].childNodes[0].nodeValue;
  var gen=x[0].getElementsByTagName("gen")[0].childNodes[0].nodeValue;
  var nr_pag=x[0].getElementsByTagName("nr_pagini")[0].childNodes[0].nodeValue;
    document.getElementById("titlu").innerHTML="Nume : "+carte;
    document.getElementById("autor").innerHTML="Autor: "+autor;
    document.getElementById("an_pub").innerHTML="An publicare: "+an_publicare;
    document.getElementById("genn").innerHTML="Gen: "+gen;
    document.getElementById("nr_pag").innerHTML="Pagini citite: "+nr_pag;

    var carte2=x[1].getElementsByTagName("nume")[0].childNodes[0].nodeValue;
  var autor2=x[1].getElementsByTagName("autor")[0].childNodes[0].nodeValue;
  var an_publicare2=x[1].getElementsByTagName("an_publicare")[0].childNodes[0].nodeValue;
  var gen2=x[1].getElementsByTagName("gen")[0].childNodes[0].nodeValue;
  var nr_pag2=x[1].getElementsByTagName("nr_pagini")[0].childNodes[0].nodeValue;
    document.getElementById("titlu2").innerHTML="Nume : "+carte2;
    document.getElementById("autor2").innerHTML="Autor: "+autor2;
    document.getElementById("an_pub2").innerHTML="An publicare: "+an_publicare2;
    document.getElementById("genn2").innerHTML="Gen: "+gen2;
    document.getElementById("nr_pag2").innerHTML="Pagini citite: "+nr_pag2;

    var carte3=x[2].getElementsByTagName("nume")[0].childNodes[0].nodeValue;
  var autor3=x[2].getElementsByTagName("autor")[0].childNodes[0].nodeValue;
  var an_publicare3=x[2].getElementsByTagName("an_publicare")[0].childNodes[0].nodeValue;
  var gen3=x[2].getElementsByTagName("gen")[0].childNodes[0].nodeValue;
  var nr_pag3=x[2].getElementsByTagName("nr_pagini")[0].childNodes[0].nodeValue;
    document.getElementById("titlu3").innerHTML="Nume : "+carte3;
    document.getElementById("autor3").innerHTML="Autor: "+autor3;
    document.getElementById("an_pub3").innerHTML="An publicare: "+an_publicare3;
    document.getElementById("genn3").innerHTML="Gen: "+gen3;
    document.getElementById("nr_pag3").innerHTML="Pagini citite: "+nr_pag3;

    var carte4=x[3].getElementsByTagName("nume")[0].childNodes[0].nodeValue;
  var autor4=x[3].getElementsByTagName("autor")[0].childNodes[0].nodeValue;
  var an_publicare4=x[3].getElementsByTagName("an_publicare")[0].childNodes[0].nodeValue;
  var gen4=x[3].getElementsByTagName("gen")[0].childNodes[0].nodeValue;
  var nr_pag4=x[3].getElementsByTagName("nr_pagini")[0].childNodes[0].nodeValue;
    document.getElementById("titlu4").innerHTML="Nume : "+carte4;
    document.getElementById("autor4").innerHTML="Autor: "+autor4;
    document.getElementById("an_pub4").innerHTML="An publicare: "+an_publicare4;
    document.getElementById("genn4").innerHTML="Gen: "+gen4;
    document.getElementById("nr_pag4").innerHTML="Pagini citite: "+nr_pag4;

}
function myFunction2(xml){
  document.getElementById("eu2").innerHTML="Cărți pe care le citesc în acest moment";
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>Autor</th><th>Nume carte</th><th>An publicare</th><th>Numar pagini</th><th>Gen</th></tr>";
  var x = xmlDoc.getElementsByTagName("book");
  for (i = 0; i <x.length; i++) { 
    table += "<tr><td>" +
    x[i].getElementsByTagName("autor")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("nume")[0].childNodes[0].nodeValue +
    "</td><td>"+
    x[i].getElementsByTagName("an_publicare")[0].childNodes[0].nodeValue +
    "</td><td>"+
    x[i].getElementsByTagName("nr_pagini")[0].childNodes[0].nodeValue +
    "</td><td>"+
    x[i].getElementsByTagName("gen")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  document.getElementById("eu").innerHTML = table;
}

//carti.xml
function incarcaCarti(){
  const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    detalii3(this);
      //myFunction(this);
    //document.getElementById("continut").innerHTML = this.responseText;
  }
};
xhttp.open("GET", "resurse/carti.xml");
xhttp.send();
//document.getElementById("eu2").innerHTML="";
}
function detalii3(xml){
  var xmlDoc = xml.responseXML;
  var x = xmlDoc.getElementsByTagName("book");
    var carte=x[0].getElementsByTagName("nume")[0].childNodes[0].nodeValue;
    var autor=x[0].getElementsByTagName("autor")[0].childNodes[0].nodeValue;
    var an_publicare=x[0].getElementsByTagName("an_publicare")[0].childNodes[0].nodeValue;
    var gen=x[0].getElementsByTagName("gen")[0].childNodes[0].nodeValue;
   var stars=x[0].getElementsByTagName("stars")[0].childNodes[0].nodeValue;
      document.getElementById("titlu10").innerHTML="Nume: "+carte;
      document.getElementById("autor10").innerHTML="Autor: "+autor;
      document.getElementById("an_pub10").innerHTML="An publicare: "+an_publicare;
      document.getElementById("genn10").innerHTML="Gen: "+gen;
      document.getElementById("star").innerHTML="Stars: "+stars;
      
  
      var carte2=x[1].getElementsByTagName("nume")[0].childNodes[0].nodeValue;
    var autor2=x[1].getElementsByTagName("autor")[0].childNodes[0].nodeValue;
    var an_publicare2=x[1].getElementsByTagName("an_publicare")[0].childNodes[0].nodeValue;
    var gen2=x[1].getElementsByTagName("gen")[0].childNodes[0].nodeValue;
    var stars2=x[1].getElementsByTagName("stars")[0].childNodes[0].nodeValue;
      document.getElementById("titlu11").innerHTML="Nume: "+carte2;
      document.getElementById("autor11").innerHTML="Autor: "+autor2;
      document.getElementById("an_pub11").innerHTML="An publicare: "+an_publicare2;
      document.getElementById("genn11").innerHTML="Gen: "+gen2;
      document.getElementById("star2").innerHTML="Stars: "+stars2;
     
  
      var carte3=x[2].getElementsByTagName("nume")[0].childNodes[0].nodeValue;
    var autor3=x[2].getElementsByTagName("autor")[0].childNodes[0].nodeValue;
    var an_publicare3=x[2].getElementsByTagName("an_publicare")[0].childNodes[0].nodeValue;
    var gen3=x[2].getElementsByTagName("gen")[0].childNodes[0].nodeValue;
    var stars3=x[2].getElementsByTagName("stars")[0].childNodes[0].nodeValue;
      document.getElementById("titlu12").innerHTML="Nume: "+carte3;
      document.getElementById("autor12").innerHTML="Autor: "+autor3;
      document.getElementById("an_pub12").innerHTML="An publicare: "+an_publicare3;
      document.getElementById("genn12").innerHTML="Gen: "+gen3;
      document.getElementById("star3").innerHTML="Stars: "+stars3;
  
      var carte4=x[3].getElementsByTagName("nume")[0].childNodes[0].nodeValue;
    var autor4=x[3].getElementsByTagName("autor")[0].childNodes[0].nodeValue;
    var an_publicare4=x[3].getElementsByTagName("an_publicare")[0].childNodes[0].nodeValue;
    var gen4=x[3].getElementsByTagName("gen")[0].childNodes[0].nodeValue;
    var stars4=x[3].getElementsByTagName("stars")[0].childNodes[0].nodeValue;
      document.getElementById("titlu13").innerHTML="Nume: "+carte4;
      document.getElementById("autor13").innerHTML="Autor: "+autor4;
      document.getElementById("an_pub13").innerHTML="An publicare: "+an_publicare4;
      document.getElementById("genn13").innerHTML="Gen: "+gen4;
      document.getElementById("star4").innerHTML="Stars: "+stars4;

      var carte5=x[4].getElementsByTagName("nume")[0].childNodes[0].nodeValue;
      var autor5=x[4].getElementsByTagName("autor")[0].childNodes[0].nodeValue;
      var an_publicare5=x[4].getElementsByTagName("an_publicare")[0].childNodes[0].nodeValue;
      var gen5=x[4].getElementsByTagName("gen")[0].childNodes[0].nodeValue;
      var stars5=x[4].getElementsByTagName("stars")[0].childNodes[0].nodeValue;
        document.getElementById("titlu14").innerHTML="Nume: "+carte5;
        document.getElementById("autor14").innerHTML="Autor: "+autor5;
        document.getElementById("an_pub14").innerHTML="An publicare: "+an_publicare5;
        document.getElementById("genn14").innerHTML="Gen: "+gen5;
        document.getElementById("star5").innerHTML="Stars: "+stars5;

      var carte6=x[5].getElementsByTagName("nume")[0].childNodes[0].nodeValue;
      var autor6=x[5].getElementsByTagName("autor")[0].childNodes[0].nodeValue;
      var an_publicare6=x[5].getElementsByTagName("an_publicare")[0].childNodes[0].nodeValue;
      var gen6=x[5].getElementsByTagName("gen")[0].childNodes[0].nodeValue;
      var stars6=x[5].getElementsByTagName("stars")[0].childNodes[0].nodeValue;
        document.getElementById("titlu15").innerHTML="Nume: "+carte6;
        document.getElementById("autor15").innerHTML="Autor: "+autor6;
        document.getElementById("an_pub15").innerHTML="An publicare: "+an_publicare6;
        document.getElementById("genn15").innerHTML="Gen: "+gen6;
        document.getElementById("star6").innerHTML="Stars: "+stars6;

        var carte7=x[6].getElementsByTagName("nume")[0].childNodes[0].nodeValue;
      var autor7=x[6].getElementsByTagName("autor")[0].childNodes[0].nodeValue;
      var an_publicare7=x[6].getElementsByTagName("an_publicare")[0].childNodes[0].nodeValue;
      var gen7=x[6].getElementsByTagName("gen")[0].childNodes[0].nodeValue;
      var stars7=x[6].getElementsByTagName("stars")[0].childNodes[0].nodeValue;
        document.getElementById("titlu16").innerHTML="Nume: "+carte7;
        document.getElementById("autor16").innerHTML="Autor: "+autor7;
        document.getElementById("an_pub16").innerHTML="An publicare: "+an_publicare7;
        document.getElementById("genn16").innerHTML="Gen: "+gen7;
        document.getElementById("star7").innerHTML="Stars: "+stars7;

        var carte8=x[7].getElementsByTagName("nume")[0].childNodes[0].nodeValue;
      var autor8=x[7].getElementsByTagName("autor")[0].childNodes[0].nodeValue;
      var an_publicare8=x[7].getElementsByTagName("an_publicare")[0].childNodes[0].nodeValue;
      var gen8=x[7].getElementsByTagName("gen")[0].childNodes[0].nodeValue;
      var stars8=x[7].getElementsByTagName("stars")[0].childNodes[0].nodeValue;
        document.getElementById("titlu17").innerHTML="Nume: "+carte8;
        document.getElementById("autor17").innerHTML="Autor: "+autor8;
        document.getElementById("an_pub17").innerHTML="An publicare: "+an_publicare8;
        document.getElementById("genn17").innerHTML="Gen: "+gen8;
        document.getElementById("star8").innerHTML="Stars: "+stars8;

        var carte9=x[8].getElementsByTagName("nume")[0].childNodes[0].nodeValue;
        var autor9=x[8].getElementsByTagName("autor")[0].childNodes[0].nodeValue;
        var an_publicare9=x[8].getElementsByTagName("an_publicare")[0].childNodes[0].nodeValue;
        var gen9=x[8].getElementsByTagName("gen")[0].childNodes[0].nodeValue;
        var stars9=x[8].getElementsByTagName("stars")[0].childNodes[0].nodeValue;
          document.getElementById("titlu18").innerHTML="Nume: "+carte9;
          document.getElementById("autor18").innerHTML="Autor: "+autor9;
          document.getElementById("an_pub18").innerHTML="An publicare: "+an_publicare9;
          document.getElementById("genn18").innerHTML="Gen: "+gen9;
          document.getElementById("star9").innerHTML="Stars: "+stars9;

          var carte10=x[9].getElementsByTagName("nume")[0].childNodes[0].nodeValue;
        var autor10=x[9].getElementsByTagName("autor")[0].childNodes[0].nodeValue;
        var an_publicare10=x[9].getElementsByTagName("an_publicare")[0].childNodes[0].nodeValue;
        var gen10=x[9].getElementsByTagName("gen")[0].childNodes[0].nodeValue;
        var stars10=x[9].getElementsByTagName("stars")[0].childNodes[0].nodeValue;
          document.getElementById("titlu19").innerHTML="Nume: "+carte10;
          document.getElementById("autor19").innerHTML="Autor: "+autor10;
          document.getElementById("an_pub19").innerHTML="An publicare: "+an_publicare10;
          document.getElementById("genn19").innerHTML="Gen: "+gen10;
          document.getElementById("star10").innerHTML="Stars: "+stars10;

          var carte11=x[10].getElementsByTagName("nume")[0].childNodes[0].nodeValue;
        var autor11=x[10].getElementsByTagName("autor")[0].childNodes[0].nodeValue;
        var an_publicare11=x[10].getElementsByTagName("an_publicare")[0].childNodes[0].nodeValue;
        var gen11=x[10].getElementsByTagName("gen")[0].childNodes[0].nodeValue;
        var stars11=x[10].getElementsByTagName("stars")[0].childNodes[0].nodeValue;
          document.getElementById("titlu20").innerHTML="Nume: "+carte11;
          document.getElementById("autor20").innerHTML="Autor: "+autor11;
          document.getElementById("an_pub20").innerHTML="An publicare: "+an_publicare11;
          document.getElementById("genn20").innerHTML="Gen: "+gen11;
          document.getElementById("star11").innerHTML="Stars: "+stars11;

          var carte12=x[11].getElementsByTagName("nume")[0].childNodes[0].nodeValue;
          var autor12=x[11].getElementsByTagName("autor")[0].childNodes[0].nodeValue;
          var an_publicare12=x[11].getElementsByTagName("an_publicare")[0].childNodes[0].nodeValue;
          var gen12=x[11].getElementsByTagName("gen")[0].childNodes[0].nodeValue;
          var stars12=x[11].getElementsByTagName("stars")[0].childNodes[0].nodeValue;
            document.getElementById("titlu21").innerHTML="Nume: "+carte12;
            document.getElementById("autor21").innerHTML="Autor: "+autor12;
            document.getElementById("an_pub21").innerHTML="An publicare: "+an_publicare12;
            document.getElementById("genn21").innerHTML="Gen: "+gen12;
            document.getElementById("star12").innerHTML="Stars: "+stars12;

            var carte13=x[12].getElementsByTagName("nume")[0].childNodes[0].nodeValue;
            var autor13=x[12].getElementsByTagName("autor")[0].childNodes[0].nodeValue;
            var an_publicare13=x[12].getElementsByTagName("an_publicare")[0].childNodes[0].nodeValue;
            var gen13=x[12].getElementsByTagName("gen")[0].childNodes[0].nodeValue;
            var stars13=x[12].getElementsByTagName("stars")[0].childNodes[0].nodeValue;
              document.getElementById("titlu22").innerHTML="Nume: "+carte13;
              document.getElementById("autor22").innerHTML="Autor: "+autor13;
              document.getElementById("an_pub22").innerHTML="An publicare: "+an_publicare13;
              document.getElementById("genn22").innerHTML="Gen: "+gen13;
              document.getElementById("star13").innerHTML="Stars: "+stars13;

              var carte14=x[13].getElementsByTagName("nume")[0].childNodes[0].nodeValue;
              var autor14=x[13].getElementsByTagName("autor")[0].childNodes[0].nodeValue;
              var an_publicare14=x[13].getElementsByTagName("an_publicare")[0].childNodes[0].nodeValue;
              var gen14=x[13].getElementsByTagName("gen")[0].childNodes[0].nodeValue;
              var stars14=x[13].getElementsByTagName("stars")[0].childNodes[0].nodeValue;
                document.getElementById("titlu23").innerHTML="Nume: "+carte14;
                document.getElementById("autor23").innerHTML="Autor: "+autor14;
                document.getElementById("an_pub23").innerHTML="An publicare: "+an_publicare14;
                document.getElementById("genn23").innerHTML="Gen: "+gen14;
                document.getElementById("star14").innerHTML="Stars: "+stars14;

                var carte15=x[14].getElementsByTagName("nume")[0].childNodes[0].nodeValue;
                var autor15=x[14].getElementsByTagName("autor")[0].childNodes[0].nodeValue;
                var an_publicare15=x[14].getElementsByTagName("an_publicare")[0].childNodes[0].nodeValue;
                var gen15=x[14].getElementsByTagName("gen")[0].childNodes[0].nodeValue;
                var stars15=x[14].getElementsByTagName("stars")[0].childNodes[0].nodeValue;
                  document.getElementById("titlu24").innerHTML="Nume: "+carte15;
                  document.getElementById("autor24").innerHTML="Autor: "+autor15;
                  document.getElementById("an_pub24").innerHTML="An publicare: "+an_publicare15;
                  document.getElementById("genn24").innerHTML="Gen: "+gen15;
                  document.getElementById("star15").innerHTML="Stars: "+stars15;

                  var carte16=x[15].getElementsByTagName("nume")[0].childNodes[0].nodeValue;
                  var autor16=x[15].getElementsByTagName("autor")[0].childNodes[0].nodeValue;
                  var an_publicare16=x[15].getElementsByTagName("an_publicare")[0].childNodes[0].nodeValue;
                  var gen16=x[15].getElementsByTagName("gen")[0].childNodes[0].nodeValue;
                  var stars16=x[15].getElementsByTagName("stars")[0].childNodes[0].nodeValue;
                    document.getElementById("titlu25").innerHTML="Nume: "+carte16;
                    document.getElementById("autor25").innerHTML="Autor: "+autor16;
                    document.getElementById("an_pub25").innerHTML="An publicare: "+an_publicare16;
                    document.getElementById("genn25").innerHTML="Gen: "+gen16;
                    document.getElementById("star16").innerHTML="Stars: "+stars16;

                    var carte17=x[16].getElementsByTagName("nume")[0].childNodes[0].nodeValue;
                    var autor17=x[16].getElementsByTagName("autor")[0].childNodes[0].nodeValue;
                    var an_publicare17=x[16].getElementsByTagName("an_publicare")[0].childNodes[0].nodeValue;
                    var gen17=x[16].getElementsByTagName("gen")[0].childNodes[0].nodeValue;
                    var stars17=x[16].getElementsByTagName("stars")[0].childNodes[0].nodeValue;
                      document.getElementById("titlu26").innerHTML="Nume: "+carte17;
                      document.getElementById("autor26").innerHTML="Autor: "+autor17;
                      document.getElementById("an_pub26").innerHTML="An publicare: "+an_publicare17;
                      document.getElementById("genn26").innerHTML="Gen: "+gen17;
                      document.getElementById("star17").innerHTML="Stars: "+stars17;
                    
                      var carte18=x[17].getElementsByTagName("nume")[0].childNodes[0].nodeValue;
                      var autor18=x[17].getElementsByTagName("autor")[0].childNodes[0].nodeValue;
                      var an_publicare18=x[17].getElementsByTagName("an_publicare")[0].childNodes[0].nodeValue;
                      var gen18=x[17].getElementsByTagName("gen")[0].childNodes[0].nodeValue;
                      var stars18=x[17].getElementsByTagName("stars")[0].childNodes[0].nodeValue;
                        document.getElementById("titlu27").innerHTML="Nume: "+carte18;
                        document.getElementById("autor27").innerHTML="Autor: "+autor18;
                        document.getElementById("an_pub27").innerHTML="An publicare: "+an_publicare18;
                        document.getElementById("genn27").innerHTML="Gen: "+gen18;
                        document.getElementById("star18").innerHTML="Stars: "+stars18;

                        var carte19=x[18].getElementsByTagName("nume")[0].childNodes[0].nodeValue;
                      var autor19=x[18].getElementsByTagName("autor")[0].childNodes[0].nodeValue;
                      var an_publicare19=x[18].getElementsByTagName("an_publicare")[0].childNodes[0].nodeValue;
                      var gen19=x[18].getElementsByTagName("gen")[0].childNodes[0].nodeValue;
                      var stars19=x[18].getElementsByTagName("stars")[0].childNodes[0].nodeValue;
                        document.getElementById("titlu28").innerHTML="Nume: "+carte19;
                        document.getElementById("autor28").innerHTML="Autor: "+autor19;
                        document.getElementById("an_pub28").innerHTML="An publicare: "+an_publicare19;
                        document.getElementById("genn28").innerHTML="Gen: "+gen19;
                        document.getElementById("star19").innerHTML="Stars: "+stars19;

                        var carte20=x[19].getElementsByTagName("nume")[0].childNodes[0].nodeValue;
                        var autor20=x[19].getElementsByTagName("autor")[0].childNodes[0].nodeValue;
                        var an_publicare20=x[19].getElementsByTagName("an_publicare")[0].childNodes[0].nodeValue;
                        var gen20=x[19].getElementsByTagName("gen")[0].childNodes[0].nodeValue;
                        var stars20=x[19].getElementsByTagName("stars")[0].childNodes[0].nodeValue;
                          document.getElementById("titlu29").innerHTML="Nume: "+carte20;
                          document.getElementById("autor29").innerHTML="Autor: "+autor20;
                          document.getElementById("an_pub29").innerHTML="An publicare: "+an_publicare20;
                          document.getElementById("genn29").innerHTML="Gen: "+gen20;
                          document.getElementById("star20").innerHTML="Stars: "+stars20;
}
function myFunction(xml){
//document.getElementById("eu2").innerHTML="Cărți pe care le-am citit";
var i;
var xmlDoc = xml.responseXML;
var table="<tr><th>Autor</th><th>Nume carte</th><th>An publicare</th><th>Gen</th><th>Stars</th></tr>";
var x = xmlDoc.getElementsByTagName("book");
for (i = 0; i <x.length; i++) { 
  table += "<tr><td>" +
  x[i].getElementsByTagName("autor")[0].childNodes[0].nodeValue +
  "</td><td>" +
  x[i].getElementsByTagName("nume")[0].childNodes[0].nodeValue +
  "</td><td>"+
  x[i].getElementsByTagName("an_publicare")[0].childNodes[0].nodeValue +
  "</td><td>"+
  x[i].getElementsByTagName("gen")[0].childNodes[0].nodeValue +
  "</td><td>"+
  x[i].getElementsByTagName("stars")[0].childNodes[0].nodeValue +
  "</td></tr>";
}
document.getElementById("read2").innerHTML = table;
}

//carti3.xml
function incarcaCarti3(){
  const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    detalii2(this);
      //myFunction3(this);
    //document.getElementById("continut").innerHTML = this.responseText;
  }
};
xhttp.open("GET", "resurse/carti3.xml");
xhttp.send();
//document.getElementById("eu2").innerHTML="";
}
function detalii2(xml){
  var xmlDoc = xml.responseXML;
  var x = xmlDoc.getElementsByTagName("book");
    var carte=x[0].getElementsByTagName("nume")[0].childNodes[0].nodeValue;
    var autor=x[0].getElementsByTagName("autor")[0].childNodes[0].nodeValue;
    var an_publicare=x[0].getElementsByTagName("an_publicare")[0].childNodes[0].nodeValue;
    var gen=x[0].getElementsByTagName("gen")[0].childNodes[0].nodeValue;
   
      document.getElementById("titlu5").innerHTML="Nume: "+carte;
      document.getElementById("autor5").innerHTML="Autor: "+autor;
      document.getElementById("an_pub5").innerHTML="An publicare: "+an_publicare;
      document.getElementById("genn5").innerHTML="Gen: "+gen;
      
  
      var carte2=x[1].getElementsByTagName("nume")[0].childNodes[0].nodeValue;
    var autor2=x[1].getElementsByTagName("autor")[0].childNodes[0].nodeValue;
    var an_publicare2=x[1].getElementsByTagName("an_publicare")[0].childNodes[0].nodeValue;
    var gen2=x[1].getElementsByTagName("gen")[0].childNodes[0].nodeValue;
   
      document.getElementById("titlu6").innerHTML="Nume: "+carte2;
      document.getElementById("autor6").innerHTML="Autor: "+autor2;
      document.getElementById("an_pub6").innerHTML="An publicare: "+an_publicare2;
      document.getElementById("genn6").innerHTML="Gen: "+gen2;
     
  
      var carte3=x[2].getElementsByTagName("nume")[0].childNodes[0].nodeValue;
    var autor3=x[2].getElementsByTagName("autor")[0].childNodes[0].nodeValue;
    var an_publicare3=x[2].getElementsByTagName("an_publicare")[0].childNodes[0].nodeValue;
    var gen3=x[2].getElementsByTagName("gen")[0].childNodes[0].nodeValue;
   
      document.getElementById("titlu7").innerHTML="Nume: "+carte3;
      document.getElementById("autor7").innerHTML="Autor: "+autor3;
      document.getElementById("an_pub7").innerHTML="An publicare: "+an_publicare3;
      document.getElementById("genn7").innerHTML="Gen: "+gen3;
     
  
      var carte4=x[3].getElementsByTagName("nume")[0].childNodes[0].nodeValue;
    var autor4=x[3].getElementsByTagName("autor")[0].childNodes[0].nodeValue;
    var an_publicare4=x[3].getElementsByTagName("an_publicare")[0].childNodes[0].nodeValue;
    var gen4=x[3].getElementsByTagName("gen")[0].childNodes[0].nodeValue;
    
      document.getElementById("titlu8").innerHTML="Nume: "+carte4;
      document.getElementById("autor8").innerHTML="Autor: "+autor4;
      document.getElementById("an_pub8").innerHTML="An publicare: "+an_publicare4;
      document.getElementById("genn8").innerHTML="Gen: "+gen4;

      var carte5=x[4].getElementsByTagName("nume")[0].childNodes[0].nodeValue;
      var autor5=x[4].getElementsByTagName("autor")[0].childNodes[0].nodeValue;
      var an_publicare5=x[4].getElementsByTagName("an_publicare")[0].childNodes[0].nodeValue;
      var gen5=x[4].getElementsByTagName("gen")[0].childNodes[0].nodeValue;
      
        document.getElementById("titlu9").innerHTML="Nume: "+carte5;
        document.getElementById("autor9").innerHTML="Autor: "+autor5;
        document.getElementById("an_pub9").innerHTML="An publicare: "+an_publicare5;
        document.getElementById("genn9").innerHTML="Gen: "+gen5;
      
}
function myFunction3(xml){
//document.getElementById("eu2").innerHTML="Cărți pe care le-am citit";
var i;
var xmlDoc = xml.responseXML;
var table="<tr><th>Autor</th><th>Nume carte</th><th>An publicare</th><th>Gen</th></tr>";
var x = xmlDoc.getElementsByTagName("book");
for (i = 0; i <x.length; i++) { 
  table += "<tr><td>" +
  x[i].getElementsByTagName("autor")[0].childNodes[0].nodeValue +
  "</td><td>" +
  x[i].getElementsByTagName("nume")[0].childNodes[0].nodeValue +
  "</td><td>"+
  x[i].getElementsByTagName("an_publicare")[0].childNodes[0].nodeValue +
  "</td><td>"+
  x[i].getElementsByTagName("gen")[0].childNodes[0].nodeValue +
  "</td></tr>";
}
document.getElementById("plan").innerHTML = table;
}