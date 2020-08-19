
var st
var str = "pawn1"
function Net() {

    this.sendData = function (polecenie, value, kolor, wygrana) {
        var d = new Date()
        var n = d.toLocaleString();
        var date = n;
        var obj = { komenda: polecenie, value: value, tablica: kolor, wygrana: wygrana, date:date}
        var tablica = [];
        $.ajax({
            url: "http://localhost:3000/",
            data: obj,
            type: "POST",
            success: function (odpo) {

                var odp = JSON.parse(odpo)
                
                if (odp.odp == "add1") {
                    document.getElementById("front").style.display = "none";
                    document.getElementById("nick").style.display = "block";
                    document.getElementById("nick").innerHTML = odp.doc.user
                    check();
                    st = 1
                    document.getElementById("komunikat").innerHTML = "Czekam na drugiego gracza!"
                    document.getElementById("waitOverlay").className = "visible";
                    tablica.push(odp.docs)
                    //console.log(odp.docs.length)
                    for(var i = 0;i<odp.docs.length;i++)
                    {
                        
                        //console.log(odp.docs[i].user + " " + odp.docs[i].date);
                        var element = document.createElement('div'); 
                        element.class = 'users';
                        element.style.width = '400px';
                        element.style.height = '20px';
                        document.getElementById("history").appendChild(element);
                        element.innerHTML = odp.docs[i].user + " " + odp.docs[i].date;
                    }
                }
                else if (odp.odp == "add2") {
                    document.getElementById("start").style.display = "none";
                    st = 2;
                    document.getElementById("nick").style.display = "block";
                    document.getElementById("nick").innerHTML = odp.doc.user
                    document.getElementById("komunikat").innerHTML = "Twój kolor, to czerwony!"
                    document.getElementById("pionc").style.display = "block";
                    for (var i = 0; i < odp.docs.length; i++) {
                        //console.log(odp.docs[i].user + " " + odp.docs[i].date);
                        var element = document.createElement('div');
                        element.class = 'users';
                        element.style.width = '400px';
                        element.style.height = '20px';
                        element.style.marginLeft = 'px';
                        document.getElementById("history").appendChild(element);
                        element.innerHTML = odp.docs[i].user + " " + odp.docs[i].date;
                    }
                }
                else if (odp.odp == "badname") {
                    document.getElementById("komunikat").innerHTML = "Istnieje już uzytkownik o takiej nazwie!";
                }
                else if (odp.odp == "toomuch") {
                    document.getElementById("komunikat").innerHTML = "Maksymalna liczba użytkowników to dwa!";
                }
                else if (odp.odp == "reset") {
                    document.getElementById("komunikat").innerHTML = "Zresetowałeś użytkowników!";
                }
                else if (odp.odp == "start") {
                    document.getElementById("start").style.display = "none";
                    document.getElementById("komunikat").innerHTML = "Twój kolor, to zielony! Zaczynasz grę!";
                    document.getElementById("pionz").style.display = "block";
                    
                    document.getElementById("waitOverlay").className = "hidden";
                    var polecenie = "UPDATE_TAB"
                    clearInterval(spr);


                    //similar();
                }
                else if (odp.odp == "change") {
                    //clearInterval(sim);
                    maingame.tab_update(odp.tab,odp.ruch,odp.wygrana);
                    console.log(odp.wygrana)
                }
                else if (odp.odp == "update") {
                    maingame.similar();
                }
                else if (odp.odp == "bazka") {
                    console.log("123");
                }
                

            },
            error: function (xhr, status, error) {
                console.log('Error: ' + error.message);
            },
        });
    }
    var spr;
    function check() {
        spr = setInterval(function () {
            var polecenie = "SPRAWDZANIE"
            net.sendData(polecenie)
        }, 500);
    }

}