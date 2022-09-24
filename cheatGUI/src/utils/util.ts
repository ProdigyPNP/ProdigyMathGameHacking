// @ts-nocheck

import { GameItemKey } from "../../../typings/_.gameData";
import { gameData as GameData } from "../../../typings/gameData";
import { Item } from "../../../typings/item";
import { Prodigy } from "../../../typings/prodigy";
import { Game } from "../../../typings/game";

/** The hack variable. */
export const _ = window._ || window.Boot.prototype.game._state._current;

/** The player variable */
export const player = _.player || window.Boot.prototype.game._state._current.user.source;

/** The alternate hack variable. */
export const current = window.Boot.prototype.game._state._current;

// const base: { game: Game, prodigy: Prodigy } = _.instance;

/** game */
// export const game = base.game;

/** prodigy */
// export const prodigy = base.prodigy;

/** gameData */
// export const gameData: GameData = _.instance.game.state.states.get("Boot").gameData;


/** Over 9000000000 */
export const VERY_LARGE_NUMBER = 9e9;

/** The URL to the assets directory */
export const assetURL = "https://raw.githubusercontent.com/ProdigyPNP/ProdigyMathGameHacking/master/cheatGUI/src/assets/";

/** Gets the full URL of an asset */
export const joinAsset = (asset: string) => `${assetURL}${asset}`;

/** Location images */
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

/** rando */
export const pickRandom = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
