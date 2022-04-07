import { Game } from "./game";
import { TODO } from "./util";

type Bindings =
	| "Game"
	| "LocalizationService"
	| "FeatureFlagProvider"
	| "EnvironmentProvider"
	| "URLProvider"
	| "Assets"
	| "Loader"
	| "IFSMController"
	| "FSMFactories"
	| "FSMService"
	| "FSMDataProvider"
	| "CacheExpirationStrategy"
	| "CacheStorageStrategy"
	| "StoreDataProvider"
	| "ChatManager"
	| "StoreService"
	| "TimeManager"
	| "TechnicalMetricsManager"
	| "VoucherDataProvider"
	| "VoucherService"
	| "JWTAuthProvider"
	| "SessionTokenAuthProvider"
	| "DungeonService"
	| "DungeonDataProvider"
	| "PVPNetworkHandler"
	| "NetworkManager"
	| "NicknameFactory"
	| "NicknameController"
	| "NicknameProvider"
	| "DeviceInfoProvider"
	| "SocketService"
	| "MultiplayerSocket"
	| "GameServerSocket"
	| "GameServerService"
	| "UUIDProvider"
	| "LoggedInPlayer"
	| "EventBuilder"
	| "SurveyController"
	| "OptimizelyWrapper"
	| "GameEventReceivers"
	| "GameEventBroadcaster"
	| "GameAvatarDataFactory"
	| "GameBattleDataFactory"
	| "GameCompleteDataFactory"
	| "GameDiscoveryDataFactory"
	| "GameQuestionDataFactory"
	| "GameSocialDataFactory"
	| "ArchivesDungeonGenerator"
	| "TowersDungeonGenerator"
	| "GameStartDataFactory"
	| "GameSinkDataFactory"
	| "GameSourceDataFactory"
	| "ExternalMethods"
	| "MailExtensionController"
	| "MailExtension"
	| "PlayerService"
	| "InputBlocker"
	| "FXController"
	| "RemoteLogger"
	| "PrefabService"
	| "PrefabDataProvider"
	| "PrefabLoader"
	| "SurveyDataProvider"
	| "SurveyService"
	| "FeatureRequirements"
	| "BreadcrumbManager"
	| "Items"
	| "HttpClient"
	| "DuelInviteService"
	| "PvPBattleSocketRoom"
	| "BattleApiSocket"
	| "GeolocationService"
	| "MatchmakingService"
	| "BattleRoomService"
	| "MathTower"
	| "FeatureFlags"
	| "Storage"
	| "StorageSerializer"
	| "StoreManager"
	| "TowerTownBreadcrumbManager"
	| "DefaultItems"
	| "Education"
	| "DialogueFactory"
	| "Events"
	| "Cache"
	| "AssetLoader"
	| "AppearanceFactory"
	| "AnalyticsService";
export declare interface InversifyContainer {
	applyCustomMetadataReader(arg0: unknown): unknown;
	applyMiddleware(): unknown;
	createChild(): unknown;
	get<T extends Bindings>(binding: T): T extends keyof Mapping ? Mapping[T] : TODO;
}
export declare interface GameContainer {
	inversifyContainer: InversifyContainer;
	hasBinding<T>(binding: T): T extends Bindings ? true : false;
	get: InversifyContainer["get"];
}
export declare interface DialogueFactory {
	_game: Game;
	_hands: Map<unknown, unknown>;
	addGuideHand(arg0: unknown, x: number, y: number): unknown;
	createBuilder(): InstanceType<DialogueBuilder>;
	removeGuideHand(hand: unknown): unknown;
	showAllDone(arg0: unknown): void;
	showCastSpells(arg0: unknown): void;
	showChooseLookOfEachFloor(arg0: unknown): void;
	showForceCorrectAnswer(arg0: unknown): void;
	showSpeedUpBlockPlacement(arg0: unknown): void;
	showSwoopyIntroduction(arg0: unknown, arg1: unknown, arg2: unknown): void;
	showTutorialCompleted(arg0: unknown): void;
}
export declare interface Dialogue {
	condition: null | (() => boolean);
	dialogueConfig: {
		blockInput: boolean;
		dialogueData: {
			audio: {
				d: number;
				s: number;
				tag: string;
			};
			avatar: {
				animationMod: string;
				atlas: string; // The character.
				frameName: string; // The expression.
				spineAttachment: string;
			};
			textKey: string;
			callback: () => unknown;
			
		};
	};
}
export declare class DialogueBuilder {
	_controller: TODO;
	_events: Dialogue[];
	_showGuideHand: {
		_hands: Map<unknown, unknown>;
		_game: Game;
	};

}
f.createBuilder().addDialogue(20).start(true);
export declare interface Mappings {
	DialogueFactory: DialogueFactory;
}
