function Fire() {

    //puste zmienne: materiał , geometria, światło, mesh
    var mesh;
    var geometry;
    var material;
    var ogien;
    var tabb = [];
    var rand3;
    var rand2;
    // kontener
    var container = new THREE.Object3D();

    // init
    function init(scene) {

        geometry = new THREE.CubeGeometry(1, 1, 1, 1, 1, 1);

        material = new THREE.MeshBasicMaterial({
            color: 0x3b88ad,
            transparent: true,
            opacity: 0.5,
            depthWrite: false,
            blending: THREE.AdditiveBlending // kluczowy element zapewniający mieszanie kolorów poszczególnych cząsteczek
        });
        var light = new THREE.PointLight(0x3b88ad, 1, 400, 3, 50, 2);
        light.castShadow = false;

        var mat = new THREE.MeshPhongMaterial({
            specular: 0xffffff,
            shininess: 30,
            side: THREE.DoubleSide,
        })
        var geom = new THREE.CubeGeometry(3, 30, 3, 1, 1, 1)
        var mesh = new THREE.Mesh(geom, mat);
        mesh.position.y = -20;
        function generate() {

            for (var i = 0; i < 100; i++) {
                var particle = new THREE.Mesh(geometry, material.clone())
                var rand = Math.floor(Math.random() * 5) + 1;
                particle.scale.set(rand, rand, rand);
                tabb.push(particle);
                tabb[i].position.x = 0;
                tabb[i].position.y = -50;
                tabb[i].position.z = 0;
                //scene.add(tabb[i]);

                container.add(tabb[i]);

            }
            container.add(mesh);
            setTimeout(function () { container.add(light); }, 2500);


        }
        generate();
    }
    init();


    this.getFire = function () {
        return container;
    }

    this.updateFire = function () {


        for (var i = 0; i < tabb.length; i++) {

            var rand4 = Math.random();
            tabb[i].translateY(0.01)
            tabb[i].position.y += rand4;
            tabb[i].material.opacity -= 0.02;
            // console.log(tabb[i].material.opacity)
            if (tabb[i].position.y > 30) {
                rand2 = Math.floor(Math.random() * 10) - 5;
                rand3 = Math.floor(Math.random() * 10) - 5;
                rand4 = Math.floor(Math.random() * 5) + 1;
                tabb[i].position.y = rand4;
                tabb[i].position.x = rand2;
                tabb[i].position.z = rand3;
                tabb[i].material.opacity = 0.5;
            }
        }

    }
}


//ogniska[i].updateFire();