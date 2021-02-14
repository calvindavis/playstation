import { BufferGeometry, SphereGeometry } from "three";
import Icon from "./Icon";

export default class TriangleIcon extends Icon {
	protected getColor(): number {
		return 0x40e2a0;
	}
}
