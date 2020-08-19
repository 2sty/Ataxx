
function MainGame() {
   


    var pionki = [];
    var scene = new THREE.Scene();
    var ogniska = [];
    var camera = new THREE.PerspectiveCamera( 45,16 / 9,0.1,10000);
    var renderer = new THREE.WebGLRenderer
               ({
                   antialias: true
               });
    renderer.setClearColor(0x31365f);
    renderer.setSize(window.innerWidth, window.innerHeight);
    var stopnie = 90;
    Math.radians = function (degrees) {
        return degrees * Math.PI / 180;
    };
    var bonus, bonus2;
    //środek planszy
    var geom = new THREE.BoxGeometry(1000, 1000, 24);
    var mat = new THREE.MeshPhongMaterial(
            {
                map: THREE.ImageUtils.loadTexture("mats/board.jpg"),
                morphTargets: true,
            });
    var mesh = new THREE.Mesh(geom, mat);
    scene.add(mesh);
    mesh.rotateX(Math.PI / 2);
    mesh.position.y = -100;
    mesh.position.x = -40;
    camera.position.x = 800;
    camera.position.y = 1200;
    camera.position.z = 0;


    var board = [
        [1, 0, 0, 0, 0, 0, 2],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [2, 0, 0, 0, 0, 0, 1]
    ]


    var modelMaterial = new THREE.MeshBasicMaterial(
           {
               map: THREE.ImageUtils.loadTexture("/mats/imp.jpg"),
               morphTargets: true,

           });

    var loader = new THREE.JSONLoader();

    //funkcja zwraca obiekt geometry, nie mesh

    loader.load('/js/imp.js', function (geometry) {

        meshModel = new THREE.Mesh(geometry, modelMaterial)
        meshModel.name = "DZIK";
        meshModel.rotation.y = 60; // ustaw obrót modelu
        meshModel.position.y = 0; // ustaw pozycje modelu
        meshModel.position.x = -400; // ustaw pozycje modelu
        meshModel.scale.set(3, 3, 3); // ustaw skalę modelu
        //console.log(geometry.animations)

        

       

        scene.add(meshModel);
    });

    var modelMaterial2 = new THREE.MeshBasicMaterial(
        {
            map: THREE.ImageUtils.loadTexture("/mats/imp.jpg"),
            morphTargets: true,

        });

    var loader = new THREE.JSONLoader();

    //funkcja zwraca obiekt geometry, nie mesh

    loader.load('/js/imp.js', function (geometry) {

        meshModel2 = new THREE.Mesh(geometry, modelMaterial)
        meshModel2.name = "DZIK2";
        meshModel2.rotation.y = 0; // ustaw obrót modelu
        meshModel2.position.y = 0; // ustaw pozycje modelu
        meshModel2.position.x = 400; // ustaw pozycje modelu
        meshModel2.scale.set(3, 3, 3); // ustaw skalę modelu
        //console.log(geometry.animations)





        scene.add(meshModel2);
    });
    level = new LevelData();
    var obj = new LevelData().getData();
    for (var i = 0; i < obj.level.length; i++) {
        var y = obj.level[i].y;
        var x = obj.level[i].x;
        var xx = obj.level[i].x;
        var z = obj.level[i].z;
        var m = obj.level[i].z;
        switch (obj.level[i].type) {
            case "light":
                var fire = new Fire();
                ogniska.push(fire);
                fire.getFire().position.set((xx * 100) - (obj.size * 50) + 20, -30, (z * 100) - (obj.size * 50) + 50);
                scene.add(fire.getFire());
                break;
        }
    }

    //GEOMETRIE I MATERIALS DLA PLANSZY I PIONKÓW
    var polegeom = new THREE.CylinderGeometry(45, 45, 10, 200);
    var polemat = new THREE.MeshPhongMaterial(
            {
                map: THREE.ImageUtils.loadTexture("mats/pole.jpg"),
                morphTargets: true,
            });
    var pawnmat = new THREE.MeshPhongMaterial(
            {
                map: THREE.ImageUtils.loadTexture("mats/pawn1.jpg"),
                morphTargets: true,
            });
    var pawn2mat = new THREE.MeshPhongMaterial(
            {
                map: THREE.ImageUtils.loadTexture("mats/pawn2.jpg"),
                morphTargets: true,
            });

    this.pionki = function () {

        

        var polegeom = new THREE.CylinderGeometry(45, 45, 10, 200);
        var x = 300;
        var z = 300;

        $("#pokabaze").click(function () {
            $("#base").fadeIn(300, function () { });
            $("#history").fadeIn(300, function () { });
            $("#title").fadeIn(300, function () { });
        })
        $("#base").click(function () {
            $("#base").fadeOut(300, function () { });
            $("#history").fadeIn(300, function () { });
            $("#title").fadeOut(300, function () { });
        })

        //TWORZENIE PLANSZY I PIONKÓW
        for (i = 0; i < 7; i++) {
            for (j = 0; j < 7; j++) {
                if (board[i][j] == 0) {
                    var plane = new THREE.Mesh(polegeom, polemat);
                    plane.rotateX(Math.radians(stopnie * 2));
                    plane.position.x = x
                    plane.position.z = z
                    plane.name = "pole";
                    plane.userData = { color: "pole", x: i, y: j };
                    pionki.push(plane);
                    scene.add(plane)
                    x = x - 100;
                }
                else if (board[i][j] == 1) {
                    var plane = new THREE.Mesh(polegeom, pawnmat);
                    plane.rotateX(Math.radians(stopnie * 2));
                    plane.position.x = x
                    plane.position.z = z
                    plane.name = "pawn1";
                    plane.userData = { color: "pawn1", x: i, y: j };
                    pionki.push(plane);
                    scene.add(plane)
                    x = x - 100;
                }
                else if (board[i][j] == 2) {
                    var plane = new THREE.Mesh(polegeom, pawn2mat);
                    plane.rotateX(Math.radians(stopnie * 2));
                    plane.position.x = x
                    plane.position.z = z
                    plane.name = "pawn2";
                    plane.userData = { color: "pawn2", x: i, y: j };
                    pionki.push(plane);
                    scene.add(plane)
                    x = x - 100;
                }
            }

            z = z - 100;
            x = 300
        }
        init();
    }
    var jedynki = [];
    var dwojki = [];
     

    this.pionki();
    //światło
    var light = new Light();
    lightt = light.getLight();
    scene.add(lightt)

    var od, od2;

    //klik
    document.addEventListener("mousedown", onMouseDown, false);
    var raycaster = new THREE.Raycaster();
    var mouseVector = new THREE.Vector2();
    var stan = false;
    var wybrany;
    var check = [];
    var liczz = 0;
    var liczc = 0;
    function onMouseDown(event) {
        
        //console.log(scene)
        mouseVector.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouseVector.y = -(event.clientY / window.innerHeight) * 2 + 1;
        raycaster.setFromCamera(mouseVector, camera);
        var intersects = raycaster.intersectObjects(scene.children, true);
        //console.log(str)
        if (intersects.length > 0) {

            if (stan == false) {
                var polecenie = "UPDATE_TAB"
                //console.log("pytam")
                var value = "";
                net.sendData(polecenie, value, JSON.stringify(board))
                //console.log(st)
                if (st == 1 && str == "pawn1") {
                    if (intersects[0].object.name == "pawn1") {
                        stan = true
                        wybrany = intersects[0].object;
                        var polecenie = "UPDATE_TAB"
                        //console.log("pytam")
                        var value = "pawn2";
                        str = "pawn2";
                        document.getElementById("komunikat").innerHTML = "Ruch przeciwnika";


                    }
                }
                if (st == 2 && str == "pawn2") {
                    if (intersects[0].object.name == "pawn2") {
                        stan = true
                        wybrany = intersects[0].object;
                        var polecenie = "UPDATE_TAB"
                        //console.log("pytam")
                        var value = "pawn1";
                        str = "pawn1";
                        document.getElementById("komunikat").innerHTML = "Ruch przeciwnika";
                        //console.log(liczc)
                    }
                }
            }
            else if (stan == true) {
                //console.log(wybrany.name)
                if (intersects[0].object.name == "pole") {
                    clearInterval(od2)
                    var zmianakol = intersects[0].object.userData.x - wybrany.userData.x
                    var zmianakol2 = intersects[0].object.userData.y - wybrany.userData.y
                    //console.log(zmianakol)
                    if(zmianakol == 0 && zmianakol2 != -2 && zmianakol2 != 2|| zmianakol == 1 || zmianakol == -1)
                    {
                        liczz = 0;
                        liczc = 0;
                        intersects[0].object.material = wybrany.material;
                        intersects[0].object.name = wybrany.name;
                        var xx = intersects[0].object.userData.x;
                        var yy = intersects[0].object.userData.y;
                        wybrany.userData.x = xx;
                        wybrany.userData.y = yy;
                        var tabb = board.slice()
                        //TABLICE NAD I POD OBIEKTEM
                        var y2 = tabb[xx][yy - 1]
                        var y3 = tabb[xx][yy + 1]
                        //console.log(yy)
                        //console.log(y2)
                        
                        
                        
                        if (wybrany.name == "pawn1") {
                            
                            board[xx][yy] = 1;
                            var polecenie = "UPDATE_TAB"
                            var value = "pawn1";
                           
                            if (y2 == 2 || y3 == 2) {
                               // console.log("przeciwnik przed Tobą")
                                tabb[xx][yy - 1] = 1;
                                tabb[xx][yy + 1] = 1;
                                //console.log(board)
                               // console.log(pionki)
                                for (i = 0; i < 49; i++) {
                                    scene.remove(pionki[i]);
                                }
                                pionki = [];
                                maingame.pionki();
                            }
                            clearInterval(od)

                            for (i = 0; i < 7; i++) {
                                for (j = 0; j < 7; j++) {
                                    check.push(board[i][j])
                                    if(board[i][j] == 1)
                                    {
                                        liczz++;
                                    }
                                }

                            }
                            
                            //////// WYGRYWANIE Z WIĘKOSZSCIĄ PIONKÓW
                            if (liczz == 25 || liczz > 25)
                            {
                                
                                //console.log("Wygrały zielone!")
                                var polecenie = "UPDATE_TAB";
                                var wygrana = "zielone";
                                net.sendData(polecenie, value, JSON.stringify(board), wygrana);
                                document.getElementById("komunikat").style.display = "none";
                                document.getElementById("przegrana").style.display = "block";
                                document.getElementById("przegrananapis").innerHTML = "Wygrałeś!";
                            }
                            //console.log(liczz)

                        }
                        else if (wybrany.name == "pawn2") {
                           
                            
                            // console.log(wybrany.userData)
                            board[xx][yy] = 2;
                            var polecenie = "UPDATE_TAB"
                            var value = "pawn2";
                            for (i = 0; i < 7; i++) {
                                for (j = 0; j < 7; j++) {
                                    check.push(board[i][j])
                                    if (board[i][j] == 2) {
                                        liczc++;
                                    }
                                }

                            }
                           // console.log(liczc)
                            if (liczc == 25 || liczc > 25)
                            {
                       
                                    //console.log("Wygrały czerwone")
                                    var polecenie = "UPDATE_TAB";
                                    var wygrana = "czerwone";
                                    net.sendData(polecenie, value, JSON.stringify(board), wygrana);
                                    document.getElementById("komunikat").style.display = "none";
                                    document.getElementById("przegrana").style.display = "block";
                                    document.getElementById("przegrananapis").innerHTML = "Wygrałeś!";

                            }
                            if (y2 == 1 || y3 == 1) {
                                //console.log("przeciwnik przed Tobą")
                                tabb[xx][yy - 1] = 2;
                                tabb[xx][yy + 1] = 2;
                                //console.log(board)
                                // console.log(pionki)
                                for (i = 0; i < 49; i++) {
                                    scene.remove(pionki[i]);
                                }
                                pionki = [];
                                maingame.pionki();

                                
                
                            }
                            clearInterval(od2)
                        }
                        net.sendData(polecenie, value, JSON.stringify(board), wygrana);

                    }
                    //console.log(wybrany.userData.x)
                    //console.log(wybrany.userData.y)
                    stan = false;
                }
            }
            
        }
 
        

    }
  
 
    this.tab_update = function (tab, ruch, wygrana) {
        board = tab;
        for (i = 0; i < 49; i++) {
            scene.remove(pionki[i]);
        }
        pionki = [];
        maingame.pionki();
        
        if (wygrana == "zielone") {
            document.getElementById("komunikat").style.display = "none";
            document.getElementById("przegrana").style.display = "block";
            document.getElementById("przegrananapis").innerHTML = "Przegrałeś! Wygrały zielone";
        }
        else if (wygrana == "czerwone") {
            document.getElementById("komunikat").style.display = "none";
            document.getElementById("przegrana").style.display = "block";
            document.getElementById("przegrananapis").innerHTML = "Przegrałeś! Wygrały czerwone";
        }
        else if(wygrana == "czasc")
        {
            document.getElementById("komunikat").style.display = "none";
            document.getElementById("przegrana").style.display = "block";
            document.getElementById("przegrananapis").innerHTML = "Przegrały czerwone!";
        }
        else if (wygrana == "czasz") {
            document.getElementById("komunikat").style.display = "none";
            document.getElementById("przegrana").style.display = "block";
            document.getElementById("przegrananapis").innerHTML = "Przegrały zielone!";
        }
        else if (ruch == "pawn1") {
            str = "pawn2";
            document.getElementById("komunikat").innerHTML = "Twój ruch";
            clearInterval(od2)
            bonus2 = 30;
                function odlicz2() {
                    bonus2 -= 1;
                    if (bonus2 == 0) {
                        document.getElementById("komunikat").style.display = "none";
                        document.getElementById("przegrana").style.display = "block";
                        document.getElementById("przegrananapis").innerHTML = "KONIEC CZASU!";
                        var polecenie = "UPDATE_TAB";
                        var wygrana = "czasc";
                        var value = "";
                                        var board = [
                        [1, 0, 0, 0, 0, 0, 2],
                        [0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 1],
                        [0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0],
                        [2, 0, 0, 0, 0, 0, 1]
                                        ]
                        net.sendData(polecenie, value, JSON.stringify(board), wygrana);
                        clearInterval(od2)

                    }
                    else if (bonus2 < 5)
                    {
                        document.getElementById("zegar2").style.color = "orange";
                    }

                    document.getElementById("zegar2").innerHTML = bonus2;
                }
                od2 = setInterval(odlicz2, 1000);
        }
        else if (ruch == "pawn2") {


            str = "pawn1"
            document.getElementById("komunikat").innerHTML = "Twój ruch";

            clearInterval(od)
            bonus = 30;
                function odlicz() {
                    bonus -= 1;
                    //console.log(bonus)
                    if (bonus == 0) {
                        document.getElementById("komunikat").style.display = "none";
                        document.getElementById("przegrana").style.display = "block";
                        document.getElementById("przegrananapis").innerHTML = "KONIEC CZASU!";
                        var polecenie = "UPDATE_TAB";
                        var wygrana = "czasz";
                        var value = "";
                                            var board = [
                            [1, 0, 0, 0, 0, 0, 2],
                            [0, 0, 0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0, 0, 0, 1],
                            [0, 0, 0, 0, 0, 0, 0],
                            [0, 0, 0, 0, 0, 0, 0],
                            [2, 0, 0, 0, 0, 0, 1]
                                            ]
                        net.sendData(polecenie, value, JSON.stringify(board), wygrana);
                        clearInterval(od)
                    }
                    else if (bonus < 5) {
                        document.getElementById("zegar").style.color = "orange";
                    }

                    document.getElementById("zegar").innerHTML = bonus;
                }
                od = setInterval(odlicz, 1000);

        }
        

    }
    var sim;
    this.similar = function () {
        sim = setInterval(function () {
            var polecenie = "SIM_TAB"
            //console.log("pytam")
            var value = "";
            net.sendData(polecenie, value, JSON.stringify(board))
        }, 500);
    }




    

    
           
          



    


         
            
          
            




    function init() {
        
        document.getElementById("scene").appendChild(renderer.domElement);
        
        camera.lookAt(scene.position);

        function animateScene() {

            requestAnimationFrame(animateScene);

            renderer.render(scene, camera);

            for (var i = 0; i < ogniska.length; i++) {
                ogniska[i].updateFire(0);
            }

        }
        animateScene();
    }

    init();
}