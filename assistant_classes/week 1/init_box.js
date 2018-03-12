function init_box(){
    var box = new BABYLON.Mesh.CreateBox("box", 1.0, scene);
    box.position = new BABYLON.Vector3(0,0,0);

    var mat = createMat(scene);
    box.material = mat;
    
    return box;
}