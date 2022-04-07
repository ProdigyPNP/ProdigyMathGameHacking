export declare type BackpackItemType = "item" | "mathTownFrame" | "relic" | "fossil" | "follow" | "mount" | "spellRelic" | "weapon" | "outfit" | "boots" | "hat" | "currency" | "mathTownInterior" | "key";
export declare interface Backpack {
	addKeyItem(ID: number, something: number): void;
	updated: boolean;
	data: BackpackData
}
export declare interface BackpackItem {
	/** Item count. */
	ID: number;
	[index: string]: number;
	N?: number;
}
export declare type BackpackData = {
	[type in BackpackItemType]: BackpackItem[]
}