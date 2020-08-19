var http = require("http");
var fs = require("fs");
var qs = require("querystring");
var zmianaa;
var statuus;
var Datastore = require('nedb')

var coll = new Datastore({
    filename: 'kolekcja.db',
    autoload: true
});



var oldTab = [
            [1, 0, 1, 0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [2, 0, 2, 0, 2, 0, 2, 0],
            [0, 2, 0, 2, 0, 2, 0, 2],
];
var usernames = [];
var newTab = [];
var docs
var wygrana;
var przegrana;
var server = http.createServer(function (req, response) {

    response.setHeader('Access-Control-Allow-Origin', 'http://192.168.1.12:3000');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    response.setHeader('Access-Control-Allow-Credentials', true);

    switch (req.method) {

        

        case "GET":
            fs.readFile("static/index.html", function (error, data) {
                if (error) {
                    response.writeHead(404, { 'Content-Type': 'text/html' });
                    response.write("<h1>błąd 404 - nie ma pliku!<h1>");
                    response.end();
                }
                else if (req.url === "/libs/three.js") {
                    fs.readFile("static/libs/three.js", function (error, data) {
                        response.writeHead(200, { 'Content-Type': 'application/javascript' });
                        response.write(data);
                        response.end();
                    })
                }
                else if (req.url === "/js/MainGame.js") {
                    fs.readFile("static/js/MainGame.js", function (error, data) {
                        response.writeHead(200, { 'Content-Type': 'application/javascript' });
                        response.write(data);
                        response.end();
                    })
                }
                else if (req.url === "/js/Light.js") {
                    fs.readFile("static/js/Light.js", function (error, data) {
                        response.writeHead(200, { 'Content-Type': 'application/javascript' });
                        response.write(data);
                        response.end();
                    })
                }
                else if (req.url === "/js/Board.js") {
                    fs.readFile("static/js/Board.js", function (error, data) {
                        response.writeHead(200, { 'Content-Type': 'application/javascript' });
                        response.write(data);
                        response.end();
                    })
                }
                else if (req.url === "/js/Pawn.js") {
                    fs.readFile("static/js/Pawn.js", function (error, data) {
                        response.writeHead(200, { 'Content-Type': 'application/javascript' });
                        response.write(data);
                        response.end();
                    })
                }
                else if (req.url === "/js/imp.js") {
                    fs.readFile("static/js/imp.js", function (error, data) {
                        response.writeHead(200, { 'Content-Type': 'application/javascript' });
                        response.write(data);
                        response.end();
                    })
                }
                else if (req.url === "/js/LevelData.js") {
                    fs.readFile("static/js/LevelData.js", function (error, data) {
                        response.writeHead(200, { 'Content-Type': 'application/javascript' });
                        response.write(data);
                        response.end();
                    })
                }
                else if (req.url === "/js/Fire.js") {
                    fs.readFile("static/js/Fire.js", function (error, data) {
                        response.writeHead(200, { 'Content-Type': 'application/javascript' });
                        response.write(data);
                        response.end();
                    })
                }
                else if (req.url === "/style.css") {
                    fs.readFile("static/style.css", function (error, data) {
                        response.writeHead(200, { 'Content-Type': 'text/css' });
                        response.write(data);
                        response.end();
                    })
                }

                else if (req.url === "/mats/pawn1.jpg") {
                    fs.readFile("static/mats/pawn1.jpg", function (error, data) {
                        response.writeHead(200, { 'Content-Type': 'image/jpeg' });
                        response.write(data);
                        response.end();
                    })
                }
                else if (req.url === "/mats/pawn2.jpg") {
                    fs.readFile("static/mats/pawn2.jpg", function (error, data) {
                        response.writeHead(200, { 'Content-Type': 'image/jpeg' });
                        response.write(data);
                        response.end();
                    })
                }
                else if (req.url === "/mats/board.jpg") {
                    fs.readFile("static/mats/board.jpg", function (error, data) {
                        response.writeHead(200, { 'Content-Type': 'image/jpeg' });
                        response.write(data);
                        response.end();
                    })
                }
                else if (req.url === "/js/Net.js") {
                    fs.readFile("static/js/Net.js", function (error, data) {
                        response.writeHead(200, { 'Content-Type': 'application/javascript' });
                        response.write(data);
                        response.end();
                    })
                }
                else if (req.url === "/mats/pole.jpg") {
                    fs.readFile("static/mats/pole.jpg", function (error, data) {
                        response.writeHead(200, { 'Content-Type': 'image/jpeg' });
                        response.write(data);
                        response.end();
                    })
                }
                else if (req.url === "/mats/bck.jpg") {
                    fs.readFile("static/mats/bck.jpg", function (error, data) {
                        response.writeHead(200, { 'Content-Type': 'image/jpeg' });
                        response.write(data);
                        response.end();
                    })
                }
                else if (req.url === "/mats/pionz.png") {
                    fs.readFile("static/mats/pionz.png", function (error, data) {
                        response.writeHead(200, { 'Content-Type': 'image/jpeg' });
                        response.write(data);
                        response.end();
                    })
                }
                else if (req.url === "/mats/pionc.png") {
                    fs.readFile("static/mats/pionc.png", function (error, data) {
                        response.writeHead(200, { 'Content-Type': 'image/jpeg' });
                        response.write(data);
                        response.end();
                    })
                }
                else if (req.url === "/mats/history.png") {
                    fs.readFile("static/mats/history.png", function (error, data) {
                        response.writeHead(200, { 'Content-Type': 'image/jpeg' });
                        response.write(data);
                        response.end();
                    })
                }
                else if (req.url === "/mats/imp.jpg") {
                    fs.readFile("static/mats/imp.jpg", function (error, data) {
                        response.writeHead(200, { 'Content-Type': 'image/jpeg' });
                        response.write(data);
                        response.end();
                    })
                }
                else {
                    response.writeHead(200, { 'Content-Type': 'text/html' });
                    response.write(data);
                    response.end();
                }

            });
            break;
        case "POST":
            var allData = "";

            req.on("data", function (data) {
                //console.log("data: " + data.komenda)
                allData += data;
            })

            ////////////////////////////////////

            req.on("end", function (data) {
                var finish = qs.parse(allData)

                switch (finish.komenda) {
                    case "DODAJ_UZYTKOWNIKA":
                        var doc = { user: finish.value, date:finish.date };
                        coll.insert(doc, function (err, newDoc) {
                        });
                       
                        if (usernames.length == 0) {
                            var odp = "add1";
                            usernames[0] = finish.value;
                            //console.log(usernames);
                        }
                        else if (usernames.length == 1) {
                            if (usernames[0] != finish.value) {
                                var odp = "add2";
                                usernames[1] = finish.value;
                                //console.log(usernames);
                            }
                            else {
                                var odp = "badname"
                            }
                        }
                        else if (usernames.length > 1) {
                            var odp = "toomuch";
                        }
                        break;
                    case "RESET":
                        var odp = "reset";
                        usernames = []
                        break;
                    case "SPRAWDZANIE":
                        if (usernames.length == 2) {
                            var odp = "start"
                        }
                        //console.log("sprawdzam")
                        break;
                    case "UPDATE_TAB":
                        oldTab = JSON.parse(finish.tablica);
                        zmianaa = finish.value;
                        wygrana = finish.wygrana;
                        //console.log(finish.wygrana)
                        var odp = "update";
                        break;
                    case "SIM_TAB":
                        newTab = JSON.parse(finish.tablica);
                        przegrana = finish.value;
                        if (JSON.stringify(oldTab) === JSON.stringify(newTab)) {
                            //console.log("rowne")
                        }
                        else {
                            var odp = "change";
                        }
                        break;
                    case "WYNIK":
                        
                        przegrana = finish.value;
                        if (przegrana == "")
                        {
                            var odp = "sprawdzamwynik";
                        }
                        else if(przegrana == "czerwony")
                        {
                            var odp = "przegczerw";
                        }
                        else if (przegrana == "zielony") {
                            var odp = "przegziel";
                        }
                        break;

                }
                coll.find({}).sort({ date: 1 }).exec(function (err, docs) {
                    response.end(JSON.stringify({ odp: odp, tab: oldTab, ruch: zmianaa, wygrana: wygrana, docs: docs, doc:doc }));
                });
            })



            break;

    }
})



server.listen(3000);
console.log("PORT 3000")