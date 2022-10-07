let passenger = "";
let distance = 0;
let age = 0;

const confirm = document.querySelector("button");
confirm.addEventListener("click",
    function () {
        passenger = document.getElementById("inputName").value;
        distance = Number(document.getElementById("inputDistance").value);
        age = Number(document.getElementById("inputAge").value);
        // console.log(`${passenger} ${distance} ${age}`);

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

                // console.log(`Il biglietto costa ${ticketPrice.toFixed(2)}€`);

                document.querySelector("h4").innerHTML = passenger;
                document.getElementById("price").innerHTML = `${ticketPrice.toFixed(2)}€`;
                if (age < 18) {
                    document.getElementById("age_type").innerHTML = "Minorenne";
                    document.getElementById("offer").innerHTML = "Sconto Minorenne";
                    document.getElementById("discount_price").innerHTML = "-20%";
                } else if (age > 65) {
                    document.getElementById("age_type").innerHTML = "Anziano";
                    document.getElementById("offer").innerHTML = "Sconto Anziano";
                    document.getElementById("discount_price").innerHTML = "-40%";
                } else {
                    document.getElementById("age_type").innerHTML = "Adulto";
                    document.getElementById("offer").innerHTML = "Ordinaria";
                    document.getElementById("discount_price").innerHTML = "";
                }
                break;
        }
    })