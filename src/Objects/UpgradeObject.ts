import Vector2D from "../Vector2D";
import GameObject from "./GameObject";

class UpgradeObject extends GameObject {
    constructor(x: number, y: number) {
        super({ position: new Vector2D(x, y) });
    }

    update(delta: number) {
        console.log(delta);
    }

    draw(ctx: CanvasRenderingContext2D, x: number, y: number): void {
        console.log(ctx, x, y)
    }
}

export default UpgradeObject;