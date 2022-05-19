// Console.log functions



// Prefix for console.log
export const LogPrefix : String = "CheatGUI";


// Console.log something with a prefix and filename.
export function ConsoleLog (File : String, Content : String) {

	if (File == "" || File == null) {
		return console.log("[" + LogPrefix + ":unknown] " + Content);
	} else {
		return console.log("[" + LogPrefix + ":" + File + "] " + Content);
	}

}

// Console.log something with a status, prefix and filename.
export function StatusLog (Status : String, File : String, Content : String) {

	return ConsoleLog(File, "*" + Status.toUpperCase() + "* " + Content);
}




// BEGIN LOGING SHORTCUT FUNCTIONS




// INDEX --------------------------------------

// Info log for index.ts
export function IndexInfo (Text : String) { return StatusLog("info", "index.ts", Text); }

// Success log for index.ts
export function IndexSuccess (Text : String) { return StatusLog("success", "index.ts", Text); }

// Success log for index.ts
export function IndexError (Text : String) { return StatusLog("error", "index.ts", Text); }

// INDEX --------------------------------------





// BATTLE --------------------------------------

// Info log for battle.ts
export function BattleInfo (Text : String) { return StatusLog("info", "battle.ts", Text); }

// Success log for battle.ts
export function BattleSuccess (Text : String) { return StatusLog("success", "battle.ts", Text); }

// Success log for battle.ts
export function BattleError (Text : String) { return StatusLog("error", "battle.ts", Text); }

// BATTLE --------------------------------------





// BETA --------------------------------------

// Info log for beta.ts
export function BetaInfo (Text : String) { return StatusLog("info", "beta.ts", Text); }

// Success log for beta.ts
export function BetaSuccess (Text : String) { return StatusLog("success", "beta.ts", Text); }

// Success log for beta.ts
export function BetaError (Text : String) { return StatusLog("error", "beta.ts", Text); }

// BATTLE --------------------------------------






// INVENTORY --------------------------------------

// Info log for inventory.ts
export function InventoryInfo (Text : String) { return StatusLog("info", "inventory.ts", Text); }

// Success log for inventory.ts
export function InventorySuccess (Text : String) { return StatusLog("success", "inventory.ts", Text); }

// Success log for inventory.ts
export function InventoryError (Text : String) { return StatusLog("error", "inventory.ts", Text); }

// INVENTORY -------------------------------





// LOCATION --------------------------------------

// Info log for location.ts
export function LocationInfo (Text : String) { return StatusLog("info", "location.ts", Text); }

// Success log for location.ts
export function LocationSuccess (Text : String) { return StatusLog("success", "location.ts", Text); }

// Success log for location.ts
export function LocationError (Text : String) { return StatusLog("error", "location.ts", Text); }

// LOCATION --------------------------------------





// MINIGAME --------------------------------------

// Info log for minigame.ts
export function MinigameInfo (Text : String) { return StatusLog("info", "minigame.ts", Text); }

// Success log for minigame.ts
export function MinigameSuccess (Text : String) { return StatusLog("success", "minigame.ts", Text); }

// Success log for minigame.ts
export function MinigameError (Text : String) { return StatusLog("error", "minigame.ts", Text); }

// MINIGAME --------------------------------------





// MISCELLANEOUS --------------------------------------

// Info log for misc.ts
export function MiscInfo (Text : String) { return StatusLog("info", "misc.ts", Text); }

// Success log for misc.ts
export function MiscSuccess (Text : String) { return StatusLog("success", "misc.ts", Text); }

// Success log for misc.ts
export function MiscError (Text : String) { return StatusLog("error", "misc.ts", Text); }

// MISCELLANEOUS --------------------------------------





// PATCHED --------------------------------------

// Info log for patched.ts
export function PatchedInfo (Text : String) { return StatusLog("info", "patched.ts", Text); }

// Success log for patched.ts
export function PatchedSuccess (Text : String) { return StatusLog("success", "patched.ts", Text); }

// Success log for patched.ts
export function PatchedError (Text : String) { return StatusLog("error", "patched.ts", Text); }

// PATCHED --------------------------------------






// PET --------------------------------------

// Info log for patched.ts
export function PetsInfo (Text : String) { return StatusLog("info", "pets.ts", Text); }

// Success log for patched.ts
export function PetsSuccess (Text : String) { return StatusLog("success", "pets.ts", Text); }

// Success log for patched.ts
export function PetsError (Text : String) { return StatusLog("error", "pets.ts", Text); }

// PET --------------------------------------




// PLAYER --------------------------------------

// Info log for player.ts
export function PlayerInfo (Text : String) { return StatusLog("info", "player.ts", Text); }

// Success log for player.ts
export function PlayerSuccess (Text : String) { return StatusLog("success", "player.ts", Text); }

// Success log for player.ts
export function PlayerError (Text : String) { return StatusLog("error", "player.ts", Text); }

// PLAYER --------------------------------------




// UTILITY --------------------------------------

// Info log for utility.ts
export function UtilityInfo (Text : String) { return StatusLog("info", "utility.ts", Text); }

// Success log for utility.ts
export function UtilitySuccess (Text : String) { return StatusLog("success", "utility.ts", Text); }

// Success log for utility.ts
export function UtilityError (Text : String) { return StatusLog("error", "utility.ts", Text); }

// UTILITY --------------------------------------

