function init_scene(){
        
    //Get canvas
    canvas = document.getElementById("renderCanvas");

    //Create babylon engine
    engine = new BABYLON.Engine(canvas, true);

    //Create scene
    scene = new BABYLON.Scene(engine);

    //Create FreeCamera
    //camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(0,4,-10), scene);
    //camera.setTarget(new BABYLON.Vector3(0,0,0));
    camera = new BABYLON.ArcRotateCamera("Camera",0,0,10, new BABYLON.Vector3(0,0,0),scene);
    camera.setPosition(new BABYLON.Vector3(0,0,20));
    camera.attachControl(canvas);

    //Create Light
    var light = new BABYLON.HemisphericLight("hLight", new BABYLON.Vector3(0,8,0), scene);

        
};