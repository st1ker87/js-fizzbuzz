var numero, fizz, buzz;
numero = 1;

bottone = document.getElementById("start");
bottone.addEventListener("click",
    function () { 
        fizz = document.getElementById("fizz").value;
        buzz = document.getElementById("buzz").value;
        if ((fizz == "") || (buzz == "") || (fizz == 0) || (buzz == 0)){
            alert("Devi inserire entrambi i valori per giocare!");
        } else if (fizz == buzz) {
            alert("Inserisci due valori diversi per Fizz e Buzz per poter giocare!");
        } else {
            document.getElementById("starter").style.display = "none";
            document.getElementById("numeri").style.display = "flex";
            document.getElementById("reset").style.display = "block";

            for (i = 0; i < 100; i++) {
                if ((numero % fizz == 0) && (numero % buzz == 0)) {
                    document.getElementById("numeri").innerHTML += "<h3> FizzBuzz </h3>";
                } else if ((numero % fizz == 0)) {
                    document.getElementById("numeri").innerHTML += "<h3> Fizz </h3>";
                } else if ((numero % buzz == 0)) {
                    document.getElementById("numeri").innerHTML += "<h3> Buzz </h3>";
                } else {
                    document.getElementById("numeri").innerHTML += "<h3> " + numero + " </h3>";
                }
                numero++;
            }
        }
    }
);

bottone = document.getElementById("reset");
bottone.addEventListener("click",
    function () { 
        numero = 1;
        document.getElementById("numeri").style.display = "none";
        document.getElementById("numeri").innerHTML = "";
        document.getElementById("reset").style.display = "none";
        document.getElementById("starter").style.display = "block";
        fizz, buzz = 0;
    }
);