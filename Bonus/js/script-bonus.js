alert('Ciao sono javascript e sono al tuo servizio');
var titoloName = prompt('Come ti chiami ?');
var surname = prompt("Qual'è il tuo cognome ?");
var color = prompt("Qual'è il tuo colore preferito ?");
var age = prompt("Quanti anni hai?");

document.getElementById('title').innerHTML = 'Benvenuto '+titoloName;

document.getElementById('name').innerHTML = titoloName;

document.getElementById('surname').innerHTML = surname;
document.getElementById('color').innerHTML = color;
document.getElementById('age').innerHTML = age;



