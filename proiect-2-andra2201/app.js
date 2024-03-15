const sqlite3 = require('sqlite3').verbose();
const cookieParser=require('cookie-parser');
const express = require('express');
const sessions = require('express-session');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser')
const app = express();
const port = 6789;
const fs = require('fs');
const oneHour = 1000 * 60 * 60;
const crypto = require('crypto');
const session = require('express-session');
const secretKey = crypto.randomBytes(32).toString('hex');
// directorul 'views' va conține fișierele .ejs (html + js executat la server)
app.set('view engine', 'ejs');
// suport pentru layout-uri - implicit fișierul care reprezintă template-ul site-ului este views/layout.ejs
app.use(cookieParser());
app.use(expressLayouts);
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(sessions({
    secret: secretKey,
    resave: false,
    cookie : {maxAge:oneHour},
    saveUninitialized: true
  }));

app.get('/', (req, res) =>{
    //PREZENTARE
    //var name = req.cookies.name;

     var name = req.session.name;
     if(name==undefined){
        req.session.showName=false;
     }else{
        req.session.showName=true;
     }
     var rol=req.session.ro;
     var showName = req.session.showName;
     const data = req.session.data || [];
     const ids = req.session.ids || [];
    res.render('index',{name,data,showName,ids,rol});
});
app.get('/chestionar', (req, res) => {
    fs.readFile('intrebari.json', (err, data) => {
        if (err) throw err;
        const listaIntrebari = JSON.parse(data);
        res.render('chestionar', {intrebari: listaIntrebari});
});
});
app.get('/autentificare',(req,res)=>{
    //PREZENTARE
    // var name = req.cookies.name;
    const stat = req.cookies.mesajEroare;
    const name=req.session.name;
    res.render('autentificare',{stat,name,showHiddenText: req.session.showHiddenText});
});
app.post('/rezultat-chestionar', (req, res) => {
    //console.log(req.body);
    const raspunsuri=req.body;
    fs.readFile('intrebari.json', (err, data) => {
        if (err) throw err;
        const listaIntrebari = JSON.parse(data);
    let punctaj = 0;
        for (let i = 0; i < listaIntrebari.length; i++) {
            if (raspunsuri[i] == listaIntrebari[i].corect) {
                punctaj++;
            }
        }
    res.render('rezultat-chestionar', {raspunsuri, listaIntrebari,punctaj});
    });
});
app.post('/verificare-autentificare',(req,res)=>{
    var session;
    const name = req.body.fname;
    const password = req.body.pas;
    const last_name = req.body.lname;
    const date = req.body.date;
    fs.readFile('utilizatori.json', (err, data) => {
        if (err) throw err;
        const Listautilizatori = JSON.parse(data);
    
    const utilizatori = Listautilizatori.find(u=> u.prenume === name && u.parola===password);
  if(utilizatori){
    //console.log(req.body);
    res.cookie('name', name);
    req.session.name=name;
    req.session.last_name=last_name;
    req.session.date=date;
    req.session.rol=utilizatori.rol;
    if(utilizatori.rol=="USER"){
        res.redirect('http://localhost:6789/');
    }
    else{
        res.redirect('http://localhost:6789/admin');   
    }
   
  }else{
    req.session.showHiddenText = true;
    res.cookie('mesajEroare', 'Date gresite!');
    res.redirect('http://localhost:6789/autentificare');
    console.log("Credentials gresite");
  }
});
});
app.get('/admin',(req,res)=>{
    const rol=req.session.rol;
    if(rol=="ADMIN"){
        const name=req.session.name;
        res.render('admin',{name});
    }else{
        res.send('NU AVETI ACCES');
    }
});
app.get('/delogare',(req,res)=>{
    const cookies = Object.keys(req.cookies);
    cookies.forEach((cookie) => {
      res.clearCookie(cookie);
    });
    req.session.destroy();
    res.redirect('http://localhost:6789/');
});

app.get('/creare-bd',(req,res)=>{
   const rol=req.session.rol;
   if(rol=="ADMIN"){
    let db = new sqlite3.Database('cumparaturi.db' ,(err) => {
        if (err) {
          console.error(err.message);
        }
        else{
            console.log('Connected to the database');
        const sqlite3 = require('sqlite3').verbose();
        }
      });
      /*
     var tabel=" CREATE TABLE Produse(ID INTEGER PRIMARY KEY, Nume TEXT, Pret INTEGER)";
     db.run(tabel,(err)=>{
        if(err){
            console.log(err);
        }else{
            console.log("works;")
        }
     });
     */
      res.redirect('http://localhost:6789/');
    }else{
        res.send('NU AVETI ACCES');
    }
});
app.post('/inserare-bd',(req,res)=>{
    const rol=req.session.rol;
    if(rol=="ADMIN"){
    const produs = req.body.produss;
    const pret = req.body.pretProdus;
    console.log(produs);
    console.log(pret);
    let db = new sqlite3.Database('cumparaturi.db' ,(err) => {
        if (err) {
          console.error(err.message);
        }else{
            console.log('Connected to the database');
            const sqlite3 = require('sqlite3').verbose();
        }
      });
      db.all('SELECT ID FROM Produse', (error, rows) => {
        if (error) {
          console.error(error);
          
        } else {
          const data = rows;
          //console.log(data);
         var idM=rows[0].max;
      idM=idM+1;
      //console.log(idM);
      db.run("INSERT INTO Produse(ID,Nume,Pret) Values(?,?,?)",[idM,produs,pret],(err)=>{
        if(err){
            console.log(err);
        }else{
            console.log("Inserare reusita!")
        }
     });
        }
      });
      
      /*
      db.run("INSERT INTO Produse(ID,Nume,Pret) Values(1,'Cameră foto digitală',100)",(err)=>{
         if(err){
             console.log(err);
         }else{
             console.log("Inserare reusita!")
         }
      });
      db.run("INSERT INTO Produse(ID,Nume,Pret) Values(2,'Cameră foto instant',400)",(err)=>{
        if(err){
            console.log(err);
        }else{
            console.log("Inserare reusita!")
        }
     });
     db.run("INSERT INTO Produse(ID,Nume,Pret) Values(3,'Cameră foto instant polaroid',600)",(err)=>{
        if(err){
            console.log(err);
        }else{
            console.log("Inserare reusita!")
        }
     });
     db.run("INSERT INTO Produse(ID,Nume,Pret) Values(4,'Aparat foto digital NBD',700)",(err)=>{
        if(err){
            console.log(err);
        }else{
            console.log("Inserare reusita!")
        }
     });
     db.run("INSERT INTO Produse(ID,Nume,Pret) Values(5,'Aparat foto compact NBD',650)",(err)=>{
        if(err){
            console.log(err);
        }else{
            console.log("Inserare reusita!")
        }
     });
     */
     res.redirect('http://localhost:6789/admin');
    }else{
        res.send('NU AVETI ACCES');
    }
});

app.get('/afisare',(req,res)=>{
    console.log('afisare');
    let db = new sqlite3.Database('cumparaturi.db' ,(err) => {
        if (err) {
          console.error(err.message);
        }else{
            console.log('Connected to the database');
            const sqlite3 = require('sqlite3').verbose();
        }
      });
      db.all('SELECT * FROM Produse', (error, rows) => {
        if (error) {
          console.error(error);
          
        } else {
          const data = rows;
          req.session.data=data;
         //console.log(req.session.data[0].ID);
         res.redirect('http://localhost:6789/');
        }
      });
});

app.get('/adaugare-cos',(req,res)=>{
    const id = req.query.id;
    const data=req.session.data || [];
   // console.log(data);
    req.session.idProdus = id;
    if (!req.session.ids) {
        req.session.ids = [];
      }
      req.session.ids.push(id);
    res.redirect('http://localhost:6789/');
});

app.get('/vizualizare-cos',(req,res)=>{
    const ids = req.session.ids;
    const data = req.session.data;

    req.session.produse = [];
    if(ids && data){
    for(let i=0;i< ids.length;i++){
        
        for(let j=0;j<data.length;j++){
            if(ids[i]==data[j].ID){
                const prod = data[j].Nume;
                const pret = data[j].Pret;
              
                const existingProductIndex = req.session.produse.findIndex((p) => p.Nume === prod);
                if (existingProductIndex !== -1) {
                    // Actualizam informatii daca exista
                    req.session.produse[existingProductIndex].cantitate += 1;
                    req.session.produse[existingProductIndex].sumaPret += pret;
                  } else {
                    // Adaugam produsul pentru ca nu exista
                    req.session.produse.push({ Nume: prod, cantitate: 1, sumaPret: pret });
                  }
            }
        }
       
    }
}
    
    res.render('vizualizare-cos',{ids,produse: req.session.produse});
    
});
    app.listen(port, () => console.log(`Serverul rulează la adresa http://localhost:`));