/**
 * Created by Anze on 22/23. 12. 2016.
 */

//TODO
//-when scaling colision box does not detect scaled brick

var Brick = function (body, mesh, type) {
    this.body = body;
    this.mesh = mesh;
    this.type = type;
    this.move = false;

    this.moveForward = function () {
        if(!this.move){
            this.move=true;
            body.position.set(body.position.x+8,body.position.y,body.position.z);
            mesh.scale.set(5,1,1); 
        }
    };

    this.moveBack = function () {
        if(this.move){
            this.move=false;
             body.position.set(body.position.x-8,body.position.y,body.position.z);
             mesh.scale.set(1,1,1);
        }
    };
};

function pushBrick()
{

    wall.push(wall.shift());
    for (var i = 0; i < wall.length; i++) {
        if(i==wall.length-1) wall[i].moveForward()
        else wall[i].moveBack();
    }
        
}
