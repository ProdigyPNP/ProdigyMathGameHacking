import { PartialItem } from "./item";

export declare interface Open {
	PopUpModal(prop0: unknown): unknown;
	/** Opens the set last name menu, but does nothing. */
	advancedNameChange(prop0: unknown, prop1: unknown, prop2: unknown): unknown;
	alert(
		prop0: unknown,
		prop1: unknown,
		prop2: unknown,
		prop3: unknown,
		prop4: unknown,
		prop5: unknown
	): unknown;
	/** Opens a broken archive entrance menu. The buttons don't do anything. */
	archiveEntranceMenu(prop0: unknown, prop1: unknown): void;
	/** Opens the inventory screen. */
	backpack(): void;
	/** Opens a placeholder popup. */
	bannerDialog(prop0: unknown): void;
	/** Opens the use item screen that appears in battle. Broken. */
	battlePotionSelect(prop0: unknown): unknown[];
	/** Opens a "choose your boost!" popup. There are no buttons, softlocking the game. */
	boostSelect(prop0: unknown, prop1: unknown): void;
	/** Opens the bounty board. */
	bountyBoard(): void;
	/** Opens the bounty store. */
	bountyStore(): void;
	/** Unknown functionality. Softlocks the game without arguments. Seems to have something to do with players. */
	card(prop0: unknown, prop1: unknown, prop2: unknown): void;
	/** Opens the unused spellbook popup. */
	character(): void;
	/** Unknown usage. */
	characterDialogue(prop0: unknown, prop1: unknown, prop2: unknown): void;
	/** Opens the chat popup. The arguments are not needed. */
	chat(prop0?: unknown): void;
	/** Unknown functionality. */
	choosePet(prop0: unknown, prop1: unknown): void;
	/** Opens an unknown popup. */
	classModeMessage(
		prop0: unknown,
		prop1: unknown,
		prop2: unknown,
		prop3: unknown,
		prop4: unknown,
		prop5: unknown,
		prop6: unknown,
		prop7: unknown
	): void;
	/** Unknown functionality. */
	cleanup(): void;
	/** Closes a menu. */
	close(index: number): void;
	/** Closes the chat menu. */
	closeChat(): void;
	/** Softlocks the game. */
	coOpModal(prop0: unknown): unknown;
	gotItem(item: PartialItem[], prop1: unknown, prop2: unknown, prop3: unknown, prop4: unknown): unknown;
	menus: TODO[];
	map(...args: any[]): void;
}
