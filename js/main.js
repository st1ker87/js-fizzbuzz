var numero = 1;

bottone = document.getElementById("start");
bottone.addEventListener("click",
    function () { 
        document.getElementById("starter").style.display = "none";
        document.getElementById("numeri").style.display = "flex";
        document.getElementById("reset").style.display = "block";

        for (i = 0; i < 100; i++) {
            if ((numero % 3 == 0) && (numero % 5 == 0)) {
                document.getElementById("numeri").innerHTML += "<h3> FizzBuzz </h3>";
            } else if ((numero % 3 == 0)) {
                document.getElementById("numeri").innerHTML += "<h3> Fizz </h3>";
            } else if ((numero % 5 == 0)) {
                document.getElementById("numeri").innerHTML += "<h3> Buzz </h3>";
            } else {
                document.getElementById("numeri").innerHTML += "<h3> " + numero + " </h3>";
            }
            numero++;
        }
        
    }
);

bottoneReset = document.getElementById("reset");
bottoneReset.addEventListener("click",
    function () { 
        numero = 1;
        document.getElementById("numeri").style.display = "none";
        document.getElementById("numeri").innerHTML = "";
        document.getElementById("reset").style.display = "none";
        document.getElementById("starter").style.display = "block";
    }
);