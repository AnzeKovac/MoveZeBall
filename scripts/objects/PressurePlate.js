/**
 * Created by Domen on 21. 12. 2016.
 */
const PLATE_TYPE_JUMPING = 1;
const PLATE_TYPE_INVERT = 2;

var PressurePlate = function (body, mesh, type) {
    this.body = body;
    this.mesh = mesh;
    this.type = type;
    this.activated = false;

    this.activate = function () {
        if (!this.activated) {
            this.activated = true;
            mesh.scale.set(1,0.25, 1);
        }
    };

    this.deactivate = function () {
        if (this.activated) {
            this.activated = false;
            mesh.scale.set(1, 1, 1);
        }
    };
};

