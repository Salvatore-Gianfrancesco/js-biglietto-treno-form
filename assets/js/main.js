const passenger = prompt("Inserisci il tuo nome");
const distance = Number(prompt("Inserisci la distanza da percorrere"));
const age = Number(prompt("Inserisci la tua età"));
// console.log(passenger, distance, age);

switch (true) {
    case (distance < 1):
        alert("La distanza deve essere maggiore di 0 Km!!");
        break;
    case (isNaN(distance)):
        alert("La distanza deve essere un numero!!");
        break;
    case ((age < 0) || (age > 120)):
        alert("L'età deve essere compresa tra 0 e 120!!");
        break;
    case (isNaN(age)):
        alert("L'età deve essere un numero!!");
        break;
    default:
        const fullPrice = distance * 0.21;
        // console.log(fullPrice);

        let discount = 0;
        if (age < 18) {
            discount = fullPrice * 20 / 100;
        } else if (age > 65) {
            discount = fullPrice * 40 / 100;
        }
        // console.log(discount);

        const ticketPrice = fullPrice - discount;
        // console.log(ticketPrice);

        console.log(`Il biglietto costa ${ticketPrice.toFixed(2)}€`);
        break
}