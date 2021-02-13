import {
	AmbientLight,
	BoxGeometry,
	Group,
	Mesh,
	MeshPhongMaterial,
	PerspectiveCamera,
	PointLight,
	Scene,
	Vector2,
	WebGLRenderer,
} from "three";

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
	const y = -0.5 + Math.random() * 1;

	mesh.position.set(m * x, y, m * z);
	mesh.rotation.z = -0.5 + Math.random() * 1;

	return mesh;
}

const canvas = document.querySelector<HTMLCanvasElement>(".js-canvas");
const renderer = new WebGLRenderer({ canvas });
const scene = new Scene();
const camera = new PerspectiveCamera(75, 2, 0.1, 15);
const meshes: Mesh[] = [
	createCube(0, -1, 0x40e2a0),
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
		mesh.rotation.y = 0.0003 * time;
	});

	renderer.render(scene, camera);
	requestAnimationFrame(render);
}

requestAnimationFrame(render);
