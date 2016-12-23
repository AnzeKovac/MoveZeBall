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
        console.debug(body);
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

function pushRandomBrick()
{
    var brickIndex = Math.floor(Math.random() * (12 -0) + 0);
    for (var i = 0; i < wall.length; i++) {
        if(i==brickIndex)
            wall[i].moveForward();
        else
            wall[i].moveBack();
    }
}
