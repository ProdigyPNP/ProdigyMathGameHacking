import { Game } from "./game";
import { Prodigy } from "./prodigy";
import { Hack } from "../redirect/global";
import { gameData } from "./gameData";
export declare interface PIXI {}
export declare interface Phaser {}
declare global {
	const PIXI: PIXI;
	const Phaser: Phaser;
	const _: Hack
}
