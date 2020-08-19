function Pawn(scene) {
    

        document.getElementById("logowanie")
                    .addEventListener("click", function () {
                        var user = document.getElementById("username").value
                        var polecenie = "DODAJ_UZYTKOWNIKA";
                        net.sendData(polecenie, user)
                    })

        document.getElementById("reset")
                     .addEventListener("click", function () {
                         var polecenie = "RESET"
                         net.sendData(polecenie);
                     })
    document.getElementById("resetprzeg")
                         .addEventListener("click", function () {
                             location.reload();
                         })
    
}