alert('Ciao sono javascript e sono al tuo servizio');
var titoloName = prompt('Come ti chiami ?');
var surname = prompt("Qual'è il tuo cognome ?");
var color = prompt("Qual'è il tuo colore preferito ?");


var year = prompt("Quanti anni hai? inserisci il tuo anno di nascita");
var age = 2021 - year;


document.getElementById('title').innerHTML = 'Benvenuto '+titoloName;

document.getElementById('name').innerHTML = titoloName;

document.getElementById('surname').innerHTML = surname;
document.getElementById('color').innerHTML = color;
document.getElementById('age').innerHTML = age;



