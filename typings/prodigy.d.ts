import { Game } from "./game";
import { Player } from "./player";
import { DebugMisc } from "./debugMisc";
import { TODO } from "./util";
import { Open } from "./open";
import { GameContainer } from "./gameContainer";

export declare interface Prodigy {
	version: string;
	game: Game;
	// debugMisc: DebugMisc;
	world: TODO;
	giftBoxController: TODO;
	open: Open;
	// debugQuests: TODO;
	user: TODO;
	pvpNetworkHandler: TODO;
	// network: TODO;
	classModeController: TODO;
	gameContainer: GameContainer;
	dialogue: TODO;
	notifications: TODO;
	battle: TODO;
}