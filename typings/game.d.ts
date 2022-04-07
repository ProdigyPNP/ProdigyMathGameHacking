import { Prodigy } from "./prodigy";
import { TODO } from "./util";
import { gameData } from "./gameData";

export declare interface Game {
	id: number; // Not sure what this does. Seems to be 0.
	state: GameState;
	input: TODO;
	spriteBatch: TODO;
}
export declare interface GameState {
	states: GameStates;
	current: GameStates[keyof GameStates]["key"];
	callbackContext: { runAwayCallback(): void };
	getCurrentState(): GameStates[keyof GameStates];
}
export declare interface GameStates {
	Boot: BootState;
	Loading: GameStatesState;
	PVPLoading: GameStatesState;
	TileScreen: TileScreenState;
	Login: LoginState;
	Battle: BattleState;
	PVP: PVPState;
	Faint: GameStatesState;
	CharSelect: GameStatesState;
	CharCreate: GameStatesState;
	Museum: GameStatesState & any;
	DinoDig: GameStatesState;
	DanceDance: GameStatesState;
	CoOp: GameStatesState;
	TestScreen: GameStatesState;
	PrefabScene: GameStatesState;
	Battle: BattleState;
	Login: LoginState;
}
export declare interface GameStatesState {
	key: string;
	game: Game;
	add?: unknown;
}
export declare interface BootState extends GameStatesState {
	key: "Boot";
	_gameData: gameData;
	_metricsManager: TODO;
}
export declare interface PVPState extends GameStatesState {
	key: "PVP";
	endPVP(): void;
}
export declare interface BattleState extends GameStatesState {
	key: "Battle";
	startVictory(): void;
	teams: TODO[];
}
export declare interface LoginState extends GameStatesState {
	key: "Login";
	_gameObj: Prodigy;
}
export declare interface TileScreenState extends GameStatesState {
	key: "TileScreen";
	process(): void;
}