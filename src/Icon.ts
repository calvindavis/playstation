import { BoxGeometry, BufferGeometry, Mesh, MeshPhongMaterial } from "three";

function random(min: number, max: number): number {
	return min + (max - min) * Math.random();
}

const GEOMETRY = new BoxGeometry();

export default class Icon {
	private _mesh: Mesh;
	private _rotationY: number;

	public get mesh(): Mesh {
		return this._mesh;
	}

	constructor(x: number, z: number) {
		const geometry = this.getGeometry();
		const material = new MeshPhongMaterial({ color: this.getColor() });

		this._mesh = new Mesh(geometry, material);
		this._mesh.position.set(3 * x, random(-0.5, 0.5), 3 * z);
		this._rotationY = random(-0.0003, 0.0003);
		this._mesh.rotation.z = random(-0.2, 0.2);
	}

	update(time: number): void {
		this._mesh.rotation.y = time * this._rotationY;
	}

	protected getColor(): number {
		return 0x00ff00;
	}

	protected getGeometry(): BufferGeometry {
		return GEOMETRY;
	}
}
