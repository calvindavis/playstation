import {
	AmbientLight,
	BoxGeometry,
	DirectionalLight,
	Mesh,
	MeshPhongMaterial,
	PerspectiveCamera,
	Scene,
	WebGLRenderer,
} from "three";

function createCube(x: number, color: number): Mesh {
	const material = new MeshPhongMaterial({ color });
	const mesh = new Mesh(geometry, material);

	mesh.position.set(x, 0, -5);
	scene.add(mesh);

	return mesh;
}

const canvas = document.querySelector<HTMLCanvasElement>(".js-canvas");
const renderer = new WebGLRenderer({ canvas });
const scene = new Scene();
const camera = new PerspectiveCamera(75, 2, 1, 10);
const geometry = new BoxGeometry();
const meshes: Mesh[] = [
	createCube(-3, 0xff0000),
	createCube(-1, 0xffff00),
	createCube(1, 0xffffff),
	createCube(3, 0x00ff00),
];

const light = new DirectionalLight(0xffffff, 1);
light.position.set(-2, 2, 0);
light.target.position.set(0, 0, -3);
scene.add(light);

const ambient = new AmbientLight(0x111111);
scene.add(ambient);

function render(time: number): void {
	meshes.forEach(function (mesh) {
		mesh.rotation.y = 0.0005 * time;
		//mesh.rotation.x = -0.0001 * time;
	});

	renderer.render(scene, camera);
	requestAnimationFrame(render);
}

requestAnimationFrame(render);
