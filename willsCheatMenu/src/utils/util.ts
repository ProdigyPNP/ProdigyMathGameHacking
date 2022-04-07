// @ts-nocheck
import { GameItemKey } from "../../../typings/_.gameData";
import { gameData as GameData } from "../../../typings/gameData";
import { Item } from "../../../typings/item";
import { Prodigy } from "../../../typings/prodigy";
import { Game } from "../../../typings/game";
export const _ = window._;
const base: { game: Game, prodigy: Prodigy } = _.instance;
export const game = base.game;
export const prodigy = base.prodigy;
export const gameData: GameData = _.instance.game.state.states.get("Boot").gameData;
export const getItem = <T extends GameItemKey>(type: T, id: number): Item<T> | null =>
	(_.gameData[type].find(x => x.ID === id) as null | Item<any>) ?? null;
export const VERY_LARGE_NUMBER = 9e9;
export const states = Object.fromEntries(_.instance.game.state.states);
export const saveCharacter = () => {
	_.network.processPlayer = true;
	_.player.forceSaveCharacter();
};

export const assetURL = "https://raw.githubusercontent.com/Prodigy-Hacking/ProdigyMathGameHacking/HEAD/willsCheatMenu/src/assets/";
export const joinAsset = (asset: string) => `${assetURL}${asset}`;
export const locations = {
	academy: joinAsset("academy.png"),
	bonfire_spire: joinAsset("bonfire_spire.png"),
	forest: joinAsset("forest.png"),
	shipwreck_shore: joinAsset("shipwreck_shore.png"),
	shiverchill: joinAsset("shiverchill.png"),
	skywatch: joinAsset("skywatch.png"),
	dyno: joinAsset("dyno.png"),
	elemental_guardian: joinAsset("elemental_guardian.png"),
	darktower: joinAsset("darktower.png"),
	earthtower: joinAsset("earthtower.png"),
	crystal_caverns: joinAsset("crystal_caverns.png"),
	archives: joinAsset("archives.png"),
	house: joinAsset("house.png"),
	toyzone: joinAsset("toyzone.png"),
	tower_town: joinAsset("tower_town.png"),
	lamplight: joinAsset("lamplight.png")
};
export const pickRandom = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
