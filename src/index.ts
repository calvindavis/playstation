import {
	AmbientLight,
	Group,
	PerspectiveCamera,
	PointLight,
	Scene,
	Vector2,
	WebGLRenderer,
} from "three";
import CircleIcon from "./CircleIcon";
import CrossIcon from "./CrossIcon";
import Icon from "./Icon";
import SquareIcon from "./SquareIcon";
import TriangleIcon from "./TriangleIcon";

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

const canvas = document.querySelector<HTMLCanvasElement>(".js-canvas");
const renderer = new WebGLRenderer({ canvas });
const scene = new Scene();
const camera = new PerspectiveCamera(50, 2, 0.1, 15);

const icons: Icon[] = [
	new TriangleIcon(0, -1),
	new SquareIcon(1, -1),
	new CircleIcon(1, 0),
	new CrossIcon(1, 1),
	new TriangleIcon(0, 1),
	new SquareIcon(-1, 1),
	new CircleIcon(-1, 0),
	new CrossIcon(-1, -1),
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
icons.forEach(function (icon) {
	group.add(icon.mesh);
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

	icons.forEach(function (icon) {
		icon.update(time);
	});

	renderer.render(scene, camera);
	requestAnimationFrame(render);
}

requestAnimationFrame(render);
