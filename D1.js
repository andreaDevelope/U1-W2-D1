/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// Tipo di dato: Numero
const numero = 42;

// Tipo di dato: Stringa
const stringa = "Ciao mondo";

// Tipo di dato: Booleano
let booleano = true;

// Tipo di dato: Oggetto
const oggetto = { nome: "Mario", età: 30 };

// Tipo di dato: Array
const array = [1, 2, 3, 4];

// Tipo di dato: Funzione
const funzione = function () {
  return "Hello!";
};

// Tipo di dato: Undefined (variabile dichiarata ma non definita)
let indefinito;

// Tipo di dato: Null (assenza intenzionale di valore)
const nullo = null;

// Tipo di dato: Symbol (crea un identificatore univoco)
const simbolo = Symbol("id");

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const myName = "andrea";

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(12 + 20);

const num1 = 12;
const num2 = 20;
const result = num1 + num2;
console.log("stampo in console la costante result " + result);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// dimostro che non si può fare

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const result2 = 4 - x;
console.log("stampo la variable result2 dell' esercizio 6 " + result2);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const name1 = "john";
const name2 = "John";

name1 === name2 ? console.log("i nomi sono uguali") : console.log("i nomi sono diversi");

// lo rifaccio con l' operatore logico not

const name3 = "john";
const name4 = "John";

name3 !== name4 ? console.log("i nomi sono diversi") : console.log("i nomi sono uguali");
