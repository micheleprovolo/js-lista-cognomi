//DESCRIZIONE:

//Chiedi all’utente il cognome,
//inseriscilo in un array con altri cognomi
//e stampa la lista ordinata alfabeticamente.
//Scrivi anche la posizione della lista in cui il nuovo utente si trova

//Chiedi all’utente il cognome
var askSurname = prompt("Scrivi il tuo Cognome")

//array cognomi disordinato
var list = ["rossi", "verdi", "motta", "ventura"];
//console.log(list);

//inserisco il cognome suggerito dall'utente nell'array disordinato
list.push(askSurname);
console.log(list);