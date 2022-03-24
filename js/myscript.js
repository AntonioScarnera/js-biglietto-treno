const price = 0.21;

let userName = prompt('Qual è il tuo nome?');
console.log(userName);

let userSurname = prompt('Qual è il tuo cognnome?');
console.log(userSurname);

let userKilometers = parseInt(prompt('Quanti chilometri devi percorrere?'));
console.log(userKilometers);

let userAge = parseInt(prompt('Quanti anni hai?'));
console.log(userAge);

let totalPrice = userKilometers * price;
console.log(totalPrice);

let sale20 = (totalPrice * 20) / 100;
let sale40 = (totalPrice * 40) / 100;
if(userAge <= 18)
{
   let sale = totalPrice - sale20;
   console.log(sale);

    document.getElementById('user').innerHTML +=
    'Ciao ' + userName + ' ' + userSurname + ", ecco il prezzo per i suoi " + userKilometers + "Km in treno:";

   document.getElementById('prezzo').innerHTML =
   "Il prezzo scontato del 20% e' :"+ ' ' + sale.toFixed(2) + "€";

}else if(userAge >= 65)
{
    let sale = totalPrice - sale40;
    console.log(sale);

    document.getElementById('user').innerHTML +=
    'Ciao ' + userName + ' ' + userSurname + ", ecco il prezzo per i suoi " + userKilometers + " Km in treno:";

    document.getElementById('prezzo').innerHTML="Il prezzo scontato del 40% e' :"+ ' ' +sale.toFixed(2) + "€";

}else
{
    let provaPrezzo = totalPrice;

    document.getElementById('user').innerHTML +=
    'Ciao ' + userName + ' ' + userSurname + ", ecco il prezzo per i suoi " + userKilometers + "Km in treno:";

    document.getElementById('prezzo').innerHTML="Il prezzo senza alcuno sconto e' :" + ' ' + provaPrezzo.toFixed(2) + "€";

    document.getElementById('nosale').innerHTML="Non hai diritto ad alcuno sconto";
}