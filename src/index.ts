import {
	AmbientLight,
	BoxGeometry,
	ExtrudeGeometry,
	Group,
	Mesh,
	MeshPhongMaterial,
	Path,
	PerspectiveCamera,
	PointLight,
	Scene,
	Shape,
	Vector2,
	WebGLRenderer,
} from "three";

const ICON_DEPTH = 0.1;
const ICON_WIDTH = 1;
const ICON_HEIGHT = 1;

const shuffle = false;

interface ResizeRendererResult {
	didResize: boolean;
	height?: number;
	width?: number;
}

function resizeRenderer(renderer: WebGLRenderer): ResizeRendererResult {
	const canvas = renderer.domElement;
	const width = canvas.clientWidth;
	const height = canvas.clientHeight;
	const shouldResize = width !== canvas.width || height !== canvas.height;

	if (shouldResize) {
		renderer.setSize(width, height, false);
	}

	return {
		width,
		height,
		didResize: shouldResize,
	};
}

function createCube(x: number, z: number, color: number): Mesh {
	const geometry = new BoxGeometry();
	const material = new MeshPhongMaterial({ color });
	const mesh = new Mesh(geometry, material);
	const m = 2;
	const y = shuffle ? -0.5 + Math.random() * 1 : 0;

	mesh.position.set(m * x, y, m * z);
	mesh.rotation.z = shuffle ? -0.5 + Math.random() * 1 : 0;

	return mesh;
}

function createTriangle(x: number, z: number, color: number): Mesh {
	const shape = new Shape();

	shape.moveTo(0.5 - 0, 0.5 - 0.09);
	shape.lineTo(0.5 - 0.5, 0.5 - 0.94);
	shape.lineTo(0.5 - 1, 0.5 - 0.09);
	shape.lineTo(0.5 - 0, 0.5 - 0.09);

	const hole = new Path();

	hole.moveTo(0.5 - 0.22, 0.5 - 0.21);
	hole.lineTo(0.5 - 0.5, 0.5 - 0.71);
	hole.lineTo(0.5 - 0.78, 0.5 - 0.21);
	hole.lineTo(0.5 - 0.22, 0.5 - 0.21);

	shape.holes.push(hole);

	const geometry = new ExtrudeGeometry(shape, {
		bevelSize: 0,
		bevelThickness: 0,
		depth: 0.5,
		steps: 1,
	});
	const material = new MeshPhongMaterial({ color });
	const mesh = new Mesh(geometry, material);
	const m = 2;
	const y = shuffle ? -0.5 + Math.random() * 1 : 0;

	mesh.position.set(m * x, y, m * z - 0.5);
	mesh.rotation.z = shuffle ? -0.5 + Math.random() * 1 : 0;

	return mesh;
}

const canvas = document.querySelector<HTMLCanvasElement>(".js-canvas");
const renderer = new WebGLRenderer({ canvas });
const scene = new Scene();
const camera = new PerspectiveCamera(75, 2, 0.1, 15);
const meshes: Mesh[] = [
	createTriangle(0, -1, 0x40e2a0),
	createCube(-1, 0, 0xff69f8),
	createCube(0, 1, 0xff6666),
	createCube(1, 0, 0x7cb2e8),
];
const mouse = new Vector2(0, 0);

document.addEventListener("mousemove", function (event) {
	const width = canvas.clientWidth;
	const halfWidth = width / 2;
	const x = (event.clientX - halfWidth) / halfWidth;
	const height = canvas.clientHeight;
	const halfHeight = height / 2;
	const y = (event.clientY - halfHeight) / halfHeight;

	// TODO Calculate real projection of screen to scene.
	mouse.set(3 * x, -3 * y);
});

const group = new Group();
meshes.forEach(function (mesh) {
	group.add(mesh);
});
group.position.set(0, 0, 0);

scene.add(group);

const light = new PointLight(0xffffff, 1);
light.position.set(mouse.x, mouse.y, 0);
scene.add(light);

const ambient = new AmbientLight(0x111111);
scene.add(ambient);

function render(time: number): void {
	const scroll = window.scrollY / window.innerHeight;

	const resizeResult = resizeRenderer(renderer);
	if (resizeResult.didResize) {
		camera.aspect = resizeResult.width / resizeResult.height;
		camera.updateProjectionMatrix();
	}

	light.position.set(mouse.x, mouse.y, 0);

	group.rotation.y = Math.PI * scroll;

	meshes.forEach(function (mesh) {
		mesh.rotation.y = 0.0002 * time;
	});

	renderer.render(scene, camera);
	requestAnimationFrame(render);
}

requestAnimationFrame(render);
