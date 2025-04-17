import Vector2D from "../Vector2D";

type GameObjectInput = {
    position?: Vector2D
}

abstract class GameObject {
    // Position on game canvas
    position: Vector2D;

    // Children Canvas
    children: GameObject[];

    constructor(input: GameObjectInput) {
        this.position = input.position ?? new Vector2D(0, 0);
        this.children = [];
    }

    abstract update(delta?: number): void;

    abstract draw(ctx: CanvasRenderingContext2D, x: number, y: number): void;
}

export class DefaultGameObject extends GameObject {
    update(): void {}
    draw(): void {}   
}

export default GameObject;