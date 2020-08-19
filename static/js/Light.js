function Light()
{
    var light = new THREE.PointLight(0xffffff, 1.5, 1500);
    light.lookAt(scene);
    light.position.y = 400;
    light.position.x = 10;

    this.getLight = function()
    {
        return light;
    }
}