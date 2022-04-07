import { Game } from "./game";

export declare interface DebugMisc {
	addPlayerTimer: null;
	attackDamageCache: unknown;
	bountyOverrides: unknown;
	fakePlayerActions: unknown[];
	fakePlayers: Map<unknown, unknown>;
	game: Game;
	generatedRandomPlayers: unknown[];
	hatSwitchEvent: null;
	stressTests: {
		emitters: unknown[];
		playerContainers: unknown[];
	};
	updatePlayerTimer: null;
	_joinDelay: unknown;
	_playerLimit: null;
	disableTimeoutDialogue(): void;
	[index: string]: TODO;
}
