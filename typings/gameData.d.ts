export interface gameData {
    academyTower:     AcademyTower[];
    ad:               Ad[];
    affix:            AffixElement[];
    atlas:            Atlas[];
    bgm:              BgmElement[];
    bitmapFont:       BitmapFont[];
    boots:            Boot[];
    boss:             BossElement[];
    bountyName:       BountyName[];
    bundle:           Bundle[];
    currency:         Currency[];
    dailyReward:      DailyReward[];
    dialogue:         Dialogue[];
    dorm:             Dorm[];
    dormbg:           Dormbg[];
    dungeon:          Dungeon[];
    emote:            Emote[];
    eyeColor:         Color[];
    face:             Face[];
    faceColor:        FaceColor[];
    follow:           Follow[];
    fontStyle:        FontStyle[];
    fossil:           Fossil[];
    fsm:              FSM[];
    gameFeed:         GameFeed[];
    gender:           Gender[];
    generic:          Generic[];
    giftBox:          GiftBox[];
    hair:             HairElement[];
    hairColor:        Color[];
    hat:              Hat[];
    item:             GameDataItem[];
    itemTable:        ItemTable[];
    key:              Key[];
    mathTownDecor:    MathTown[];
    mathTownFrame:    MathTown[];
    mathTownInterior: MathTownInterior[];
    mount:            Mount[];
    name:             NameElement[];
    nickname:         Nickname[];
    orb:              ORB[];
    outfit:           Outfit[];
    particleEffect:   GameDataParticleEffect[];
    pet:              Pet[];
    prizeWheel:       PrizeWheel[];
    relic:            Relic[];
    sfx:              Sfx[];
    singleImage:      SingleImage[];
    skinColor:        Face[];
    spell:            Spell[];
    spellRelic:       SpellRelic[];
    spine:            SpineElement[];
    streamedMap:      Atlas[];
    tiledMap:         Atlas[];
    tileset:          Tileset[];
    titan:            Titan[];
    ui:               UI[];
    weapon:           Weapon[];
}

export interface AcademyTower {
    ID:       number;
    assetID:  number;
    type:     string;
    gender:   number;
    data:     AcademyTowerData;
    metadata: MemberClass;
    name:     string;
}

export interface AcademyTowerData {
    enabled:                   boolean;
    name:                      string;
    towerID:                   string;
    element:                   EarthElement;
    minLevel:                  number;
    warden:                    WardenClass | string;
    towerEventName:            string;
    BGM:                       Bgm;
    wardenRoomKeyID:           number;
    saveWardenDialogueID?:     number;
    boss?:                     DataBoss;
    achievementMonsterIDs:     number[];
    battlesPerFloor:           number;
    battleBG:                  string;
    assets:                    string[];
    fsmIDs:                    FSMIDs;
    itemTableID:               number;
    floorConfigs?:             FloorConfig[];
    keystone:                  Keystone;
    afterKeyFoundDialogueIDs?: number[];
    betaPopup?:                BetaPopup;
    dialogueIds?:              any[];
    dungeonBGM?:               number;
    exitMap?:                  string;
    eventPrefix?:              string;
    floorGeneratorConfigs?:    { [key: string]: number };
}

export interface Bgm {
    dungeon:    number;
    incomplete: number;
    completed?: number;
    complete?:  number;
}

export interface BetaPopup {
    prefabID:              number;
    cooldownTimeInSeconds: number;
}

export interface DataBoss {
    tmxName:          string;
    ID:               number;
    attacks:          number[];
    localizedTextRef: string;
    difficulty:       number;
    maxHP:            null;
    spineKey:         string;
    battleBG:         string;
}

export enum EarthElement {
    Astral = "astral",
    Earth = "earth",
    Empty = "",
    Fire = "fire",
    Ice = "ice",
    IceFire = "ice & fire",
    Mech = "mech",
    Plant = "plant",
    Shadow = "shadow",
    Special = "special",
    Storm = "storm",
    Water = "water",
    Wizard = "wizard",
}

export interface FloorConfig {
    generator:   number;
    dialogueIDs: number[];
}

export interface FSMIDs {
    intro:      number;
    bossBattle: number;
    freeWarden: number;
}

export interface Keystone {
    zone:                string;
    x:                   number;
    y:                   number;
    itemID:              number;
    unlockedDialogueID?: number;
}

export interface WardenClass {
    name:             string;
    spine:            string;
    atlas:            string;
    localizedTextRef: string;
    freedDialogueIDs: number[];
    flipSpine:        boolean;
    offset:           BeijingPigeon;
    nameTextPos:      BeijingPigeon;
    bubbleAnimName?:  string;
    bubblePopName?:   string;
}

export interface BeijingPigeon {
    x: number;
    y: number;
}

export interface MemberClass {
}

export interface Ad {
    ID:       number;
    assetID:  number;
    type:     AdType;
    gender:   number;
    data:     AdData;
    metadata: MemberClass;
    name:     string;
}

export interface AdData {
    name:                  string;
    sendDate:              null | string;
    startDate?:            null | string;
    expiryDate:            null | string;
    prefabID?:             number;
    assets?:               string[];
    priority?:             number;
    title?:                string;
    body?:                 string;
    travelZone?:           string;
    travelConfirmMessage?: string;
    thumbnail?:            number;
    uiID?:                 number;
    dateTextName?:         string;
    buttons?:              Button[];
    testLanes?:            number[];
    experimentTrackEvent?: string;
    videoMessageTitle?:    string;
    videoMessage?:         string;
    videoID?:              string;
    memberSuppression?:    boolean;
    optimizely?:           Optimizely;
    filename?:             string;
}

export interface Button {
    name:             ButtonName;
    method:           string;
    parameters?:      Array<number | null | string>;
    showOnStartDate?: boolean;
}

export enum ButtonName {
    Empty = "",
    GoNowButton = "goNowButton",
    PlayVideoButton = "playVideoButton",
    WatchVideoButton = "watchVideoButton",
}

export interface Optimizely {
    feature:   string;
    variable?: string;
}

export enum AdType {
    Ad = "ad",
}

export interface AffixElement {
    ID:       number;
    assetID:  number;
    type:     FluffyType;
    gender:   number;
    data:     AffixData;
    metadata: PurpleMetadata;
    name:     string;
}

export interface AffixData {
    label?:         string;
    opType?:        number;
    type:           string;
    value?:         number;
    name:           string;
    valuePercent?:  number;
    amount?:        number;
    operationType?: number;
    version?:       number;
    elements?:      EarthElement[];
    highPotency?:   boolean;
}

export interface PurpleMetadata {
    v?:         number;
    type?:      PurpleType;
    vIcon?:     number;
    assets?:    PurpleAssets;
    subType?:   number;
    faceColor?: number;
}

export interface PurpleAssets {
    default?: PurpleDefault;
    male?:    Male;
    female?:  Female;
}

export interface PurpleDefault {
    type:   PurpleType;
    v:      number;
    offSet: BeijingPigeon;
}

export enum PurpleType {
    Atlas = "atlas",
    Multiple = "multiple",
    SingleImage = "singleImage",
}

export interface Female {
    v:              number;
    legs:           LeftArm;
    type:           PurpleType;
    shirt:          LeftArm;
    leftArm:        LeftArm;
    rightArm:       LeftArm;
    leg?:           BeijingPigeon;
    iconVersions?:  Version[];
    assetVersions?: Version[];
    noCache?:       boolean;
}

export interface Version {
    id: string;
}

export interface LeftArm {
    x:       number;
    y:       number;
    pivot:   BeijingPigeon;
    handIK?: BeijingPigeon;
}

export interface Male {
    v:              number;
    legs:           Legs;
    type:           PurpleType;
    shirt:          LeftArm;
    leftArm:        LeftArm;
    rightArm:       LeftArm;
    leg?:           BeijingPigeon;
    iconVersions?:  Version[];
    assetVersions?: Version[];
    noCache?:       boolean;
}

export interface Legs {
    x:     number;
    y:     number;
    pivot: Pivot;
}

export interface Pivot {
    x: number;
    y: number | string;
}

export enum FluffyType {
    Affix = "affix",
}

export interface Atlas {
    ID:       number;
    assetID:  number;
    type:     AtlasType;
    gender:   number;
    data:     AtlasData;
    metadata: AtlasMetadata;
    name:     string;
}

export interface AtlasData {
    filename: string;
    name?:    string;
}

export interface AtlasMetadata {
    assets: FluffyAssets;
}

export interface FluffyAssets {
    default: FluffyDefault;
}

export interface FluffyDefault {
    v: number;
}

export enum AtlasType {
    Atlas = "atlas",
    StreamedMap = "streamedMap",
    TiledMap = "tiledMap",
}

export interface BgmElement {
    ID:       number;
    assetID:  number;
    type:     BgmType;
    gender:   number;
    data:     AtlasData;
    metadata: BgmMetadata;
    name:     string;
}

export interface BgmMetadata {
    assets: FluffyAssets;
    v?:     number;
}

export enum BgmType {
    Bgm = "bgm",
}

export interface BitmapFont {
    ID:       number;
    assetID:  number;
    type:     string;
    gender:   number;
    data:     BitmapFontData;
    metadata: AtlasMetadata;
    name:     string;
}

export interface BitmapFontData {
    filename: string;
}

export interface Boot {
    ID:       number;
    assetID:  number;
    type:     TypeElement;
    gender:   number;
    data:     BootData;
    metadata: PurpleMetadata;
    name:     string;
}

export interface BootData {
    drop?:      number;
    name:       string;
    price?:     number;
    member:     number;
    rarity:     number;
    effects:    Array<number | string>;
    flavorText: string;
    cost?:      CostElement[];
    ""?:        string;
    "0"?:       number;
    "en-us"?:   string;
    type?:      TentacledType;
    memberAd?:  number;
}

export interface CostElement {
    type:            TypeElement;
    ID:              number;
    N?:              number;
    dropChance?:     number;
    duplicateValue?: number;
}

export enum TypeElement {
    Boots = "boots",
    Currency = "currency",
    Dorm = "dorm",
    Empty = "",
    Follow = "follow",
    Fossil = "fossil",
    GiftBox = "giftBox",
    Gold = "gold",
    Hat = "hat",
    Item = "item",
    ORB = "orb",
    Outfit = "outfit",
    Prefab = "prefab",
    Weapon = "weapon",
}

export enum TentacledType {
    Cover = "cover",
    Empty = "",
    Hat = "Hat",
    Mask = "mask",
    Wrap = "wrap",
}

export interface BossElement {
    ID:       number;
    assetID:  number;
    type:     BossType;
    gender:   number;
    data:     BossData;
    metadata: BossMetadata;
    name:     string;
}

export interface BossData {
    name?:               string;
    nameKey?:            string;
    element?:            AstralElement;
    adventureRewards?:   AdventureReward[];
    battleCheckpointID?: number;
    battle?:             Battle;
    rockShuffle?:        { [key: string]: RockShuffle };
    creatureModifiers?:  CreatureModifiers;
    tree?:               Tree;
    spiderBattle?:       SpiderBattle;
    wizard?:             Wizard;
    lootTableID?:        number;
    missCooldown?:       number;
    powerStat?:          number;
    healthStat?:         number;
    spells?:             number[];
    affixIDs?:           number[];
    relicRingReward?:    number;
    starReward?:         number;
    specialSpells?:      SpecialSpell[];
    unsecureRewards?:    UnsecureReward[];
}

export interface AdventureReward {
    type: TypeElement;
    ID:   number;
}

export interface Battle {
    hpStat:                       number;
    powerStat?:                   number;
    wyrmAttacks?:                 number[];
    rockAttacks?:                 number[];
    difficulty:                   number;
    phaseHPThresholdPercentage?:  number;
    undergroundDamageMultiplier?: number;
    damageModifier?:              number;
    hpModifier?:                  number;
    attacks?:                     number[] | AttacksClass;
    health?:                      number;
    castDelay?:                   number;
    yetiAttacks?:                 number[];
    spiderAttacks?:               number[];
    battleShy?:                   boolean;
}

export interface AttacksClass {
    fire:   number[];
    water:  number[];
    plant:  number[];
    ice:    number[];
    storm:  number[];
    shadow: number[];
}

export interface CreatureModifiers {
    damage: number;
}

export enum AstralElement {
    Astral = "astral",
    Ice = "ice",
    Shadow = "shadow",
}

export interface RockShuffle {
    timeElapsed:  DelayClass;
    delay:        DelayClass;
    shuffleCount: UnitLevel;
}

export interface DelayClass {
    start: number;
    end:   number;
}

export interface UnitLevel {
    min: number;
    max: number;
}

export interface SpecialSpell {
    id:       number;
    cooldown: number;
}

export interface SpiderBattle {
    minTeamSize:      number;
    scale:            boolean;
    pets:             Particles[];
    walkIntoBattle:   boolean;
    targetingEnabled: boolean;
    catch:            boolean;
    adventureRewards: AdventureReward[];
}

export interface Particles {
    ID: number;
}

export interface Tree {
    creature:        Creature;
    hpStat:          number;
    breakThresholds: number[];
}

export interface Creature {
    element: AstralElement;
}

export interface UnsecureReward {
    type:             TypeElement;
    ID:               number;
    minAmountPresent: number;
}

export interface Wizard {
    appearance: Appearance;
    equipment:  Equipment;
}

export interface Appearance {
    gender:    string;
    hair:      AppearanceHair;
    skinColor: number;
    eyeColor:  number;
    face:      number;
}

export interface AppearanceHair {
    style: number;
    color: number;
}

export interface Equipment {
    hat:        number;
    outfit:     number;
    weapon:     number;
    spellRelic: number;
}

export interface BossMetadata {
    assets: TentacledAssets;
    type?:  PurpleType;
}

export interface TentacledAssets {
    type?:   PurpleType;
    default: TentacledDefault;
}

export interface TentacledDefault {
    type?:           AssetTypeEnum;
    x?:              number;
    w?:              number;
    h?:              number;
    v?:              number;
    hitbox?:         DefaultHitbox;
    filename?:       string;
    ID?:             number;
    rootOffset?:     BeijingPigeon;
    secondarySpine?: SecondarySpine;
}

export interface DefaultHitbox {
    width:    number;
    height:   number;
    xOffset:  number;
    yOffset?: number;
}

export interface SecondarySpine {
    ID: number;
    v:  number;
}

export enum AssetTypeEnum {
    Atlas = "atlas",
    Spine = "spine",
    Spritesheet = "spritesheet",
}

export enum BossType {
    Boss = "boss",
}

export interface BountyName {
    ID:       number;
    assetID:  number;
    type:     BountyNameType;
    gender:   number;
    data:     BountyNameData;
    metadata: MemberClass;
    name:     string;
}

export interface BountyNameData {
    name:           string;
    value:          string;
    templateType:   TemplateType;
    requiredPetIDs: number[];
}

export enum TemplateType {
    PetName = "pet-name",
}

export enum BountyNameType {
    BountyName = "bountyName",
}

export interface Bundle {
    ID:       number;
    assetID:  number;
    type:     string;
    gender:   number;
    data:     BundleData;
    metadata: BundleMetadata;
    name:     string;
}

export interface BundleData {
    name:           string;
    isPurchaseable: boolean;
    price:          number;
    items:          CostElement[];
    flavorText:     string;
}

export interface BundleMetadata {
    vIcon: number;
}

export interface Currency {
    ID:       number;
    assetID:  number;
    type:     TypeElement;
    gender:   number;
    data:     CurrencyData;
    metadata: PurpleMetadata;
    name:     string;
}

export interface CurrencyData {
    drop:        number;
    name:        string;
    price:       number;
    modifier:    number;
    flavorText:  string;
    icon?:       null | string;
    namePlural?: string;
    zone?:       Zone;
    cost?:       CostElement[] | CostElement;
}

export enum Zone {
    Any = "any",
    Empty = "",
}

export interface DailyReward {
    ID:       number;
    assetID:  number;
    type:     string;
    gender:   number;
    data:     DailyRewardData;
    metadata: MemberClass;
    name:     string;
}

export interface DailyRewardData {
    resetDayIndex: number;
    days:          Day[];
    name:          string;
}

export interface Day {
    numRequiredQuestions: number;
    rewards:              CostElement[];
}

export interface Dialogue {
    ID:       number;
    assetID:  number;
    type:     DialogueType;
    gender:   number;
    data:     DialogueData;
    metadata: MemberClass;
    name:     string;
}

export interface DialogueData {
    audio:     Audio;
    avatar:    Avatar;
    textKey:   string;
    nameKey?:  string;
    nameKKey?: string;
    name?:     string;
}

export interface Audio {
    d?:   number;
    s?:   number;
    tag?: string;
}

export interface Avatar {
    atlas?:          string;
    frameName:       FrameName;
    animationMod:    number | null | string;
    spineAttachment: null | string;
    dimmed?:         boolean;
    offsetY?:        number;
}

export enum FrameName {
    Empty = "",
    Face0 = "face_0",
    Face1 = "face_1",
    Face10 = "face_10",
    Face15 = "face_15",
    Face2 = "face_2",
    Face3 = "face_3",
    Face4 = "face_4",
    Face5 = "face_5",
    Face6 = "face_6",
    Face7 = "face_7",
    Face8 = "face_8",
    Face9 = "face_9",
}

export enum DialogueType {
    Dialogue = "dialogue",
}

export interface Dorm {
    ID:       number;
    assetID:  number;
    type:     TypeElement;
    gender:   number;
    data:     DormData;
    metadata: DormMetadata;
    name:     string;
}

export interface DormData {
    r:          number;
    name:       string;
    price:      number;
    member:     number;
    rarity:     number;
    category:   Category;
    flavorText: string;
    cost?:      CostElement[];
    "en-us"?:   string;
}

export enum Category {
    Comfy = "Comfy",
    Items = "Items",
    Lamps = "Lamps",
    Plants = "Plants",
    Storage = "Storage",
    Surface = "Surface",
    Wall = "Wall",
}

export interface DormMetadata {
    type:       StickyType;
    vIcon:      number;
    assets:     StickyAssets;
    v?:         number;
    iconAtlas?: string;
}

export interface StickyAssets {
    vertical:    Vertical;
    horizontal?: Horizontal;
    sheets?:     Sheets;
}

export interface Horizontal {
    v:       number;
    type:    HorizontalType;
    anchor?: BeijingPigeon;
}

export enum HorizontalType {
    Atlas = "atlas",
    SingleImage = "singleImage",
    Spine = "spine",
}

export interface Sheets {
    v:    number;
    type: PurpleType;
}

export interface Vertical {
    v?:        number;
    type?:     HorizontalType;
    anchor?:   BeijingPigeon;
    animated?: boolean;
    noCache?:  boolean;
    ID?:       number;
}

export enum StickyType {
    Multiple = "multiple",
    Spine = "spine",
}

export interface Dormbg {
    ID:       number;
    assetID:  number;
    type:     DormbgType;
    gender:   number;
    data:     DormbgData;
    metadata: BundleMetadata;
    name:     string;
}

export interface DormbgData {
    x:          number;
    y:          number;
    tag:        string;
    name:       string;
    price:      number;
    member:     number;
    rarity:     number;
    category:   Category;
    flavorText: string;
}

export enum DormbgType {
    Dormbg = "dormbg",
}

export interface Dungeon {
    ID:       number;
    assetID:  number;
    type:     DungeonType;
    gender:   number;
    data:     DungeonData;
    metadata: MemberClass;
    name:     string;
}

export interface DungeonData {
    version:           number;
    name:              string;
    seed:              null;
    gridWidth:         number;
    gridHeight:        number;
    minCritPathLength: number;
    maxCritPathLength: number;
    monsterIDs:        number[];
    minEncounters:     number;
    maxEncounters:     number;
    monsterDrops:      CostElement[];
    goldenPages:       number;
    minPages:          number;
    maxPages:          number;
    battleDifficulty:  number;
    extraPaths:        ExtraPaths;
    monsterRooms:      Room[];
    normalRooms:       Room[];
    endRoom:           Room;
    monsterWeights?:   number[];
}

export interface Room {
    tileMap: string;
    fsmId:   number;
}

export interface ExtraPaths {
    minLength: number;
    maxLength: number;
    minPaths:  number;
    maxPaths:  number;
}

export enum DungeonType {
    Dungeon = "dungeon",
}

export interface Emote {
    ID:       number;
    assetID:  number;
    type:     EmoteType;
    gender:   number;
    data:     EmoteData;
    metadata: PurpleMetadata;
    name:     string;
}

export interface EmoteData {
    name:       string;
    isAnimated: number;
}

export enum EmoteType {
    Emote = "emote",
}

export interface Color {
    ID:       number;
    assetID:  number;
    type:     EyeColorType;
    gender:   number;
    data:     EyeColorData;
    metadata: PurpleMetadata;
    name:     string;
}

export interface EyeColorData {
    name:        string;
    price:       number;
    colors?:     Array<number[]>;
    member:      number;
    flavorText?: string;
}

export enum EyeColorType {
    EyeColor = "eyeColor",
    HairColor = "hairColor",
}

export interface Face {
    ID:       number;
    assetID:  number;
    type:     FaceType;
    gender:   number;
    data:     FaceData;
    metadata: PurpleMetadata;
    name:     FaceName;
}

export interface FaceData {
    price:      number;
    name:       string;
    flavorText: FlavorText;
    colors?:    Array<number[]>;
}

export enum FlavorText {
    BuyingThisWillChangeYourFaceStyle = "Buying this will change your face style!",
    BuyingThisWillChangeYourSkinTone = "Buying this will change your skin tone!",
    FlavorTextBuyingThisWillChangeYourFaceStyle = "Buying this will change your face style.",
}

export enum FaceName {
    Empty = "",
    Face17 = "Face-17",
    Face18 = "Face-18",
}

export enum FaceType {
    Face = "face",
    SkinColor = "skinColor",
}

export interface FaceColor {
    ID:       number;
    assetID:  number;
    type:     string;
    gender:   number;
    data:     FaceColorData;
    metadata: MemberClass;
    name:     string;
}

export interface FaceColorData {
    price:  number;
    colors: Array<number[]>;
}

export interface Follow {
    ID:       number;
    assetID:  number;
    type:     TypeElement;
    gender:   number;
    data:     FollowData;
    metadata: FollowMetadata;
    name:     string;
}

export interface FollowData {
    tag?:                string;
    name:                string;
    price?:              number;
    member?:             number;
    rarity:              number;
    flavorText:          string;
    customPrice?:        number;
    spriteOffsets?:      SpriteOffsets;
    numWalkAnimFrames?:  number;
    numStandAnimFrames?: number;
    drop?:               number;
    particleEffects?:    DataParticleEffect[];
    cost?:               CostElement[];
    "en-us"?:            string;
}

export interface DataParticleEffect {
    ID:       number;
    x:        number;
    y:        number;
    inFront?: boolean;
}

export interface SpriteOffsets {
    body?: BeijingPigeon;
    tail?: BeijingPigeon;
    legs?: BeijingPigeon;
}

export interface FollowMetadata {
    assets?: IndigoAssets;
    v?:      number;
    type:    NameEnum;
    vIcon:   number;
    icon?:   string;
    petID?:  number;
    anchor?: BeijingPigeon;
}

export interface IndigoAssets {
    default: Vertical;
    prefab?: Prefab;
}

export interface Prefab {
    type:    TypeElement;
    ID:      number;
    hitbox?: PrefabHitbox;
}

export interface PrefabHitbox {
    x:      number;
    y:      number;
    width:  number;
    height: number;
}

export enum NameEnum {
    Legacy = "legacy",
    Pet = "pet",
    Spine = "spine",
}

export interface FontStyle {
    ID:       number;
    assetID:  number;
    type:     FontStyleType;
    gender:   number;
    data:     FontStyleData;
    metadata: MemberClass;
    name:     string;
}

export interface FontStyleData {
    font:             string;
    fontSize:         number;
    fontWeight?:      string;
    smoothed:         boolean;
    fill:             string;
    blendMode?:       number;
    padding?:         BeijingPigeon;
    stroke?:          string;
    strokeThickness?: number;
    shadowDistance?:  number;
    shadowColor?:     string;
    shadowBlur?:      number;
    name?:            string;
}

export enum FontStyleType {
    FontStyle = "fontStyle",
}

export interface Fossil {
    ID:       number;
    assetID:  number;
    type:     TypeElement;
    gender:   number;
    data:     FossilData;
    metadata: BundleMetadata;
    name:     string;
}

export interface FossilData {
    name:       string;
    count?:     number;
    price:      number;
    rarity:     number;
    flavorText: string;
    recipe?:    CostElement[];
}

export interface FSM {
    ID:       number;
    assetID:  number;
    type:     FSMType;
    gender:   number;
    data:     FSMData;
    metadata: MemberClass;
    name:     string;
}

export interface FSMData {
    version: number;
    name?:   string;
    states:  State[];
    names?:  string;
}

export interface State {
    name?:        string;
    actions:      ActionElement[];
    transitions?: Transition[];
}

export interface ActionElement {
    type:       string;
    parameters: Parameters;
    results?:   Results;
    wait?:      boolean;
}

export interface Parameters {
    enable?:                 boolean;
    function?:               string;
    context?:                string;
    arguments?:              Array<boolean | number | string>;
    time?:                   number | string;
    creature?:               string;
    ID?:                     number[] | number;
    clip?:                   string;
    pack?:                   string;
    sound?:                  string;
    character?:              Character;
    target?:                 BeijingPigeon | string;
    visible?:                boolean;
    pathfinder?:             Path;
    x?:                      number | null | string;
    y?:                      number | null | string;
    height?:                 number;
    xOffset?:                number;
    wait?:                   boolean | string;
    walkSpeed?:              number;
    eventName?:              EventName;
    eventData?:              EventData;
    overlayMode?:            boolean;
    player?:                 string;
    flag?:                   boolean;
    name?:                   string;
    value?:                  boolean | number | string;
    variables?:              Variables;
    screen?:                 string;
    hide?:                   boolean;
    items?:                  ItemsItem[] | string;
    element?:                string;
    show?:                   boolean;
    yOffset?:                number;
    delay?:                  number | string;
    intensity?:              number;
    direction?:              string;
    path?:                   BeijingPigeon[];
    speed?:                  number | null;
    alpha?:                  number;
    type?:                   ParametersType;
    properties?:             EventData;
    game?:                   Game;
    breadcrumbName?:         string;
    featureName?:            string;
    spine?:                  string;
    animationName?:          string;
    map?:                    DefeatZone;
    loadingData?:            LoadingData;
    zone?:                   string;
    quest?:                  number;
    sequence?:               number | string;
    config?:                 Config;
    positions?:              BeijingPigeon[];
    animation?:              Animation;
    layer?:                  Layer;
    randomDelay?:            boolean;
    fadeIn?:                 number;
    loop?:                   boolean;
    to?:                     To[];
    parent?:                 string;
    animationChain?:         string[];
    scene?:                  string;
    state?:                  number | string;
    active?:                 boolean;
    animationClip?:          string;
    transform?:              string;
    position?:               string;
    animationController?:    string;
    data?:                   string;
    defeatZone?:             DefeatZone;
    rocks?:                  string;
    shuffleCount?:           string;
    startTimeElapsed?:       string;
    endTimeElapsed?:         string;
    startDelay?:             string;
    endDelay?:               string;
    controller?:             string;
    service?:                string;
    externalFactory?:        string;
    bossID?:                 string;
    bossSeenID?:             string;
    locomotion?:             string;
    createParent?:           boolean;
    xScale?:                 number;
    yScale?:                 number;
    componentType?:          string;
    playerIdentifier?:       string;
    duration?:               number | string;
    object?:                 string;
    animator?:               string;
    component?:              string;
    text?:                   string;
    playerObject?:           string;
    graphic?:                string;
    from?:                   string;
    prefabLoader?:           string;
    count?:                  string;
    offset?:                 string;
    playDuration?:           string;
    fadeDuration?:           number;
    saveEnabled?:            boolean;
    faceTransform?:          string;
    reenableInputOnClose?:   boolean;
    cameraTransform?:        string;
    targetTransform?:        string;
    cameraFollowController?: string;
    enableFollowController?: boolean;
    renderComponent?:        string;
    durationMS?:             DurationMSEnum | number;
    targetAlpha?:            number;
    rectTransform?:          string;
    initialAlpha?:           number;
    scaleTimeMS?:            number;
    correctionAmounts?:      number[];
    correctionTimes?:        number[];
}

export enum Animation {
    Idle = "idle",
    Lantern1Glow = "lantern-1-glow",
    Lantern2Glow = "lantern-2-glow",
}

export enum Character {
    Florian = "florian",
    Gale = "gale",
    Merchant = "merchant",
    Noot = "noot",
    Pippet = "pippet",
    Puppetmaster = "puppetmaster",
}

export enum Config {
    GoldenPageConfig = "$goldenPageConfig",
    MonsterConfig = "$monsterConfig",
    PageConfig = "$pageConfig",
}

export enum DefeatZone {
    AcademyCR2 = "academy-CR2",
    AcademyGH1 = "academy-GH1",
    AcademyGH2 = "academy-GH2",
    AcademyGH3 = "academy-GH3",
    EarthtowerCR = "earthtower-CR",
    EarthtowerWR = "earthtower-WR",
    HouseExterior = "house-exterior",
    IcetowerCR = "icetower-CR",
    IcetowerWR = "icetower-WR",
    LamplightB3 = "lamplight-B3",
    Map = "$map",
    ReturnMap = "$returnMap",
    TowerTownA0 = "tower_town-A0",
}

export enum DurationMSEnum {
    BannerShowTimeMS = "$bannerShowTimeMS",
    CardFadeDuration = "$cardFadeDuration",
}

export interface EventData {
    type: EventDataType;
    name: string;
}

export enum EventDataType {
    AcademyArchives = "AcademyArchives",
    Tutorial2 = "tutorial_2",
    TutorialSteps1 = "tutorial_steps_1",
}

export enum EventName {
    GameComplete = "game_complete",
}

export enum Game {
    Game = "$game",
}

export interface ItemsItem {
    type:  string;
    ID:    number;
    data?: PurpleData;
}

export interface PurpleData {
    level: number;
    stars: number;
}

export enum Layer {
    Content = "content",
}

export interface LoadingData {
    fadeIn:  boolean;
    time:    number;
    fadeOut: boolean;
}

export enum Path {
    Path = "$path",
    Pathfinder = "$pathfinder",
    PlayerPathfinder = "$playerPathfinder",
}

export interface To {
    properties: Properties;
    duration:   number;
    ease:       Ease;
    delay?:     number;
}

export enum Ease {
    Linear = "Linear",
    Quad = "Quad",
    QuadEaseOut = "Quad.easeOut",
}

export interface Properties {
    alpha?:  number;
    x?:      number;
    y?:      number;
    scaleX?: number;
    scaleY?: number;
}

export enum ParametersType {
    GameCompleteV3 = "game_complete_v3",
}

export interface Variables {
    game?:                      Game;
    monster?:                   string;
    gnome?:                     string;
    path?:                      Path;
    x?:                         number;
    shadowWyrmContainer?:       string;
    shadowWyrmSpine?:           string;
    emergeAnimation?:           string;
    shadowWyrmBoss?:            string;
    playerLocomotion?:          string;
    circleTrigger?:             string;
    monsterTransform?:          string;
    chatBubble?:                string;
    monsterWalkAnimator?:       string;
    monsterWalkPosition?:       string;
    monsterSpine?:              string;
    sparklesGameObject?:        string;
    supply?:                    string;
    playerAnimationController?: string;
    supplyTransform?:           string;
    supplyStartingPosition?:    string;
    supplyPosition?:            string;
    rotateSupply?:              boolean;
    morphExpiration?:           string;
}

export interface Results {
    isVictory?:         string;
    newRockPositions?:  string;
    dialogueSelection?: string;
    answerCorrect?:     string;
    skillData?:         string;
    responseTime?:      string;
    instance?:          string;
    component?:         string;
}

export interface Transition {
    state:       string;
    conditions?: Condition[];
}

export interface Condition {
    value:     string;
    lessThan?: number | string;
    equals?:   string;
    type?:     ConditionType;
    test?:     boolean | number | null | string;
}

export enum ConditionType {
    Equals = "equals",
    GreaterThan = "greaterThan",
    NotEquals = "notEquals",
}

export enum FSMType {
    FSM = "fsm",
}

export interface GameFeed {
    ID:       number;
    assetID:  number;
    type:     GameFeedType;
    gender:   number;
    data:     GameFeedData;
    metadata: GameFeedMetadata;
    name:     string;
}

export interface GameFeedData {
    key:          string;
    category:     string;
    notification: Notification;
    modal:        Modal;
    feedText:     string;
    icon:         string;
    autoShare:    boolean;
    eventAction:  EventAction;
    metaData?:    MetaData;
}

export enum EventAction {
    Empty = "",
    MemberAd = "memberAd",
    Teleport = "teleport",
}

export interface MetaData {
    equals?: MetaDataEquals;
}

export interface MetaDataEquals {
    type: TypeElement[];
}

export interface Modal {
    title:  Title;
    body:   string;
    action: ActionEnum;
}

export enum ActionEnum {
    CheckOutLamplightTown = "Check out Lamplight Town",
    CheckOutZoneName = "Check out ${zoneName}",
    Empty = "",
}

export enum Title {
    Empty = "",
    YourFriendBoughtANewItem = "Your friend bought a new item!",
    YourFriendWonANewItem = "Your friend won a new item!",
}

export interface Notification {
    self:   string;
    friend: string;
}

export interface GameFeedMetadata {
    equals?: MetadataEquals;
}

export interface MetadataEquals {
    storeID: number[];
    type:    TypeElement[];
}

export enum GameFeedType {
    GameFeed = "gameFeed",
}

export interface Gender {
    ID:       number;
    assetID:  number;
    type:     string;
    gender:   number;
    data:     GenderData;
    metadata: PurpleMetadata;
    name:     string;
}

export interface GenderData {
    member:     number;
    name:       string;
    saveDataID: string;
    price:      number;
    cost:       CostElement[];
    flavorText: string;
}

export interface Generic {
    ID:       number;
    assetID:  number;
    type:     GenericType;
    gender:   number;
    data:     GenericData;
    metadata: MemberClass;
    name:     string;
}

export interface GenericData {
    name:                          string;
    sections?:                     Sections;
    groups?:                       Groups;
    bountyPetIDs?:                 number[];
    bountyDurationSeconds?:        number;
    totalBounties?:                number;
    totalMemberBounties?:          number;
    tiers?:                        { [key: string]: Tier };
    monsterPoolPetIDs?:            number[];
    bountyElementAlignmentChance?: number;
    unitLevel?:                    UnitLevel;
    teams?:                        Teams;
    spellTierCount?:               number;
    maxEnergy?:                    number;
    elementalAdvantages?:          ElementalAdvantages;
    elementalDisadvantages?:       ElementalAdvantages;
    allOutAttackDamage?:           { [key: string]: { [key: string]: number } };
    allOutAttackBossDamage?:       { [key: string]: { [key: string]: number } };
    minPlayerHeartsOnEndBattle?:   number;
    difficultySwitchChances?:      number[];
    singleShot?:                   Aoe[];
    aoe?:                          Aoe[];
    maxTier?:                      number;
    guardianMaps?:                 { [key: string]: GuardianMap };
    dialogueIDs?:                  number[];
    spellMissCoolDown?:            number;
    restrictedBattleActions?:      string[];
    opponentBackpacks?:            OpponentBackpack[];
    itemMaxCount?:                 ItemMaxCount;
}

export interface Aoe {
    level:   number;
    spellID: number;
}

export interface ElementalAdvantages {
    fire:    EarthElement[];
    water:   EarthElement[];
    earth:   EarthElement[];
    plant:   EarthElement[];
    storm:   EarthElement[];
    mech:    EarthElement[];
    ice:     EarthElement[];
    shadow:  EarthElement[];
    wizard?: AstralElement[];
    astral?: AstralElement[];
}

export interface Groups {
    start:  number[];
    middle: number[];
    end:    number[];
}

export interface GuardianMap {
    zoneName:      string;
    scenePrefabID: number;
    noOrbAlign?:   boolean;
}

export interface ItemMaxCount {
    follow:  number;
    hat:     number;
    outfit:  number;
    boots:   number;
    weapon:  number;
    item:    number;
    orb:     number;
    dorm:    number;
    default: number;
}

export interface OpponentBackpack {
    level:       number;
    itemTableID: number;
}

export interface Sections {
    start:    EasyPath;
    easyPath: EasyPath;
    hardPath: EasyPath;
    end:      EasyPath;
}

export interface EasyPath {
    mapPoolName:          string;
    roomCount:            number;
    objects:              Objects;
    maxEncountersPerRoom: number;
}

export interface Objects {
    easyEncounter:   number;
    mediumEncounter: number;
    hardEncounter:   number;
    goalEncounter:   number;
    basicChest:      number;
    memberChest:     number;
    interactable:    number;
}

export interface Teams {
    limit: UnitLevel;
    units: UnitLevel;
}

export interface Tier {
    member?:                    MemberClass;
    nonMember?:                 NonMember;
    easy?:                      Easy;
    medium?:                    Easy;
    hard?:                      Easy;
    guardianId?:                number;
    guardianMapKey?:            number;
    interactables?:             Interactables;
    lootTables?:                number[];
    baseStatsIncreaseAffixIDs?: number[];
    missCooldown?:              number;
}

export interface Easy {
    teamSize:         UnitLevel;
    possibleAffixIDs: number[];
    lootTables:       number[];
}

export interface Interactables {
    itemTableID: number;
}

export interface NonMember {
    possibleAffixIDs:           number[];
    loot:                       Loot[];
    randomLootTableIDs:         number[];
    baseStatsIncreaseAffixIDs?: number[];
}

export interface Loot {
    itemTableID: number;
    dropCount:   number;
}

export enum GenericType {
    Generic = "generic",
}

export interface GiftBox {
    ID:       number;
    assetID:  number;
    type:     TypeElement;
    gender:   number;
    data:     GiftBoxData;
    metadata: BundleMetadata;
    name:     string;
}

export interface GiftBoxData {
    name:           string;
    isPurchaseable: boolean;
    questions:      number;
    items:          any[];
}

export interface HairElement {
    ID:       number;
    assetID:  number;
    type:     HairType;
    gender:   number;
    data:     EyeColorData;
    metadata: HairMetadata;
    name:     string;
}

export interface HairMetadata {
    x:        number;
    y:        number;
    pivot:    BeijingPigeon;
    vIcon:    number;
    type:     PurpleType;
    v:        number;
    noCache?: boolean;
}

export enum HairType {
    Hair = "hair",
}

export interface Hat {
    ID:       number;
    assetID:  number;
    type:     TypeElement;
    gender:   number;
    data:     BootData;
    metadata: HatMetadata;
    name:     string;
}

export interface HatMetadata {
    v:              number;
    x:              number;
    y:              number;
    type:           PurpleType;
    pivot:          BeijingPigeon;
    vIcon:          number;
    hairHide:       number[];
    hideReplace:    number | string;
    assetVersions?: Version[];
    iconVersions?:  Version[];
    noCache?:       boolean;
    cacheError?:    boolean;
}

export interface GameDataItem {
    ID:       number;
    assetID:  number;
    type:     TypeElement;
    gender:   number;
    data:     FluffyData;
    metadata: ItemMetadata;
    name:     string;
}

export interface FluffyData {
    name:               string;
    price:              number;
    member:             number;
    rarity:             number;
    flavorText:         string;
    type?:              IndecentType;
    target?:            TargetEnum;
    healAmount?:        number;
    drop?:              number;
    effect?:            EffectClass | null;
    effectDescription?: string;
    affix?:             DataAffix;
    subType?:           string;
    element?:           string;
    potency?:           number;
    cost?:              CostElement[];
    affixID?:           number;
}

export interface DataAffix {
    type:        IndigoType;
    elements?:   EarthElement[];
    amount:      number;
    highPotency: boolean;
}

export enum IndigoType {
    CritChance = "critChance",
    Damage = "damage",
    ElementalResistance = "elementalResistance",
}

export interface EffectClass {
    fx?:        string;
    transform?: Transform;
    ID?:        number;
    time?:      number;
}

export enum Transform {
    Dorm = "dorm",
    Follow = "follow",
    Pet = "pet",
}

export enum TargetEnum {
    Team = "team",
    Unit = "unit",
}

export enum IndecentType {
    Consumable = "consumable",
    Food = "food",
    Potion = "potion",
}

export interface ItemMetadata {
    vIcon:   number;
    icon?:   IconEnum;
    assets?: IndecentAssets;
    v?:      number;
    type?:   PurpleType;
}

export interface IndecentAssets {
    icon?:             IconClass;
    morphedApperance?: AdventureReward;
}

export interface IconClass {
    type:  PurpleType;
    ID:    number;
    frame: string;
}

export enum IconEnum {
    Empty = "",
    Item110 = "item/110",
}

export interface ItemTable {
    ID:       number;
    assetID:  number;
    type:     ItemTableType;
    gender:   number;
    data:     ItemTableData;
    metadata: MemberClass;
    name:     string;
}

export interface ItemTableData {
    items:     Fallback[];
    fallback?: Fallback;
    name:      string;
}

export interface Fallback {
    type:     TypeElement;
    ID?:      number;
    quantity: UnitLevel | number;
    weight?:  number;
}

export enum ItemTableType {
    ItemTable = "itemTable",
}

export interface Key {
    ID:       number;
    assetID:  number;
    type:     KeyType;
    gender:   number;
    data:     KeyData;
    metadata: PurpleMetadata;
    name:     string;
}

export interface KeyData {
    name:       string;
    levels:     number;
    flavorText: string;
    quest?:     number | null;
    price?:     number;
}

export enum KeyType {
    Key = "key",
}

export interface MathTown {
    ID:       number;
    assetID:  number;
    type:     MathTownDecorType;
    gender:   number;
    data:     MathTownDecorData;
    metadata: PurpleMetadata;
    name:     string;
}

export interface MathTownDecorData {
    name:            string;
    tag?:            string;
    description:     string;
    element:         number;
    decorPositions?: BeijingPigeon[];
}

export enum MathTownDecorType {
    MathTownDecor = "mathTownDecor",
    MathTownFrame = "mathTownFrame",
}

export interface MathTownInterior {
    ID:       number;
    assetID:  number;
    type:     MathTownInteriorType;
    gender:   number;
    data:     MathTownInteriorData;
    metadata: PurpleMetadata;
    name:     string;
}

export interface MathTownInteriorData {
    name:           string;
    tag?:           string;
    description:    string;
    element:        number;
    flavorText?:    string;
    occupantLevels: number[];
}

export enum MathTownInteriorType {
    MathTownInterior = "mathTownInterior",
}

export interface Mount {
    ID:       number;
    assetID:  number;
    type:     string;
    gender:   number;
    data:     MountData;
    metadata: MountMetadata;
    name:     string;
}

export interface MountData {
    name:       string;
    flavorText: string;
    member:     number;
    drop?:      number;
    price:      number;
    rarity:     number;
    cost?:      CostElement[];
    effects:    number[];
}

export interface MountMetadata {
    vIcon:  number;
    type:   PurpleType;
    assets: HilariousAssets;
}

export interface HilariousAssets {
    below:     Above;
    above:     Above;
    particles: Particles;
}

export interface Above {
    type: PurpleType;
    v:    number;
    x:    number;
    y?:   number;
}

export interface NameElement {
    ID:       number;
    assetID:  number;
    type:     NameType;
    gender:   number;
    data:     NameData;
    metadata: MemberClass;
    name:     string;
}

export interface NameData {
    name:        string;
    value:       string;
    type:        number;
    deprecated?: boolean;
}

export enum NameType {
    Name = "name",
}

export interface Nickname {
    ID:       number;
    assetID:  number;
    type:     NicknameType;
    gender:   number;
    data:     NicknameData;
    metadata: MemberClass;
    name:     string;
}

export interface NicknameData {
    value: string;
    name?: string;
}

export enum NicknameType {
    Nickname = "nickname",
}

export interface ORB {
    ID:       number;
    assetID:  number;
    type:     TypeElement;
    gender:   number;
    data:     ORBData;
    metadata: BundleMetadata;
    name:     string;
}

export interface ORBData {
    name:       string;
    flavorText: string;
    tier:       number;
    rarity:     number;
    affixIDs:   number[];
}

export interface Outfit {
    ID:       number;
    assetID:  number;
    type:     TypeElement;
    gender:   number;
    data:     OutfitData;
    metadata: PurpleMetadata;
    name:     string;
}

export interface OutfitData {
    drop:         number;
    name:         string;
    price?:       number;
    member:       number;
    rarity:       number;
    effects:      Array<number[] | number | string>;
    flavorText:   string;
    id?:          number;
    asset_id?:    number;
    create_date?: string;
    update_date?: string;
    cost?:        CostElement[];
    "en-us"?:     string;
}

export interface GameDataParticleEffect {
    ID:       number;
    assetID:  number;
    type:     string;
    gender:   number;
    data:     ParticleEffectData;
    metadata: MemberClass;
    name:     string;
}

export interface ParticleEffectData {
    name:     string;
    particle: Particle;
    emitter:  Emitter;
}

export interface Emitter {
    repeat:          number;
    frequency:       UnitLevel | number;
    burstFrequency?: UnitLevel;
}

export interface Particle {
    image:       string;
    frame?:      string;
    lifespan:    UnitLevel | number;
    vy:          UnitLevel;
    vx?:         UnitLevel;
    scale?:      Scale;
    alpha?:      Alpha;
    rotation?:   Rotation;
    animations?: Animations;
}

export interface Alpha {
    value:   number;
    control: BeijingPigeon[];
}

export interface Animations {
    clouds: Clouds;
}

export interface Clouds {
    frames:    string[];
    frameRate: number;
    loop:      boolean;
}

export interface Rotation {
    initial: UnitLevel;
    delta:   UnitLevel;
}

export interface Scale {
    value:   UnitLevel | number;
    control: BeijingPigeon[];
}

export interface Pet {
    ID:       number;
    assetID:  number;
    type:     NameEnum;
    gender:   number;
    data:     PetData;
    metadata: PetMetadata;
    name:     string;
}

export interface PetData {
    life?:             Life;
    ordinal?:          number;
    name:              string;
    curve:             Curve[];
    power?:            Life;
    growth?:           string;
    rarity?:           number;
    element:           EarthElement;
    flavorText:        string;
    effects?:          number[];
    price?:            number;
    statHealth:        number;
    statPower:         number;
    foreignSpellPools: Array<number[]>;
    nativeSpells:      NativeSpell[];
    assetType?:        AssetTypeEnum;
    R?:                number;
    special?:          boolean;
    bench?:            Bench[];
    member?:           number;
    adText?:           string;
    unique?:           boolean;
    unlockFollow?:     number;
    epicSpell?:        number;
    cost?:             CostElement[];
}

export interface Bench {
    weight?: number;
    petID?:  number;
    spell?:  number;
}

export interface Curve {
    a?:        number;
    lvl:       number;
    e?:        number;
    evolveID?: number;
}

export enum Life {
    A = "A-",
    B = "B",
    C = "C",
    LifeA = "A",
    LifeB = "B+",
    LifeC = "C-",
    PurpleA = "A+",
    PurpleB = "B-",
    PurpleC = "C+",
}

export interface NativeSpell {
    spell: number;
}

export interface PetMetadata {
    v?:                number;
    type:              PurpleType;
    vIcon:             number;
    assets:            AmbitiousAssets;
    uiConfig?:         UIConfig;
    rewardsExclusive?: boolean;
}

export interface AmbitiousAssets {
    small?:   Above;
    default?: StickyDefault;
    reduced?: Reduced;
    spine?:   AssetsSpine;
}

export interface StickyDefault {
    h?:          number;
    v?:          number;
    w?:          number;
    x?:          number;
    type:        AssetTypeEnum;
    pivotX?:     number;
    battleScale: number;
    ID?:         number;
    hitbox?:     DefaultHitbox;
    flip?:       boolean;
}

export interface Reduced {
    h:       number;
    v:       number;
    w:       number;
    x:       number;
    type:    AssetTypeEnum;
    pivotX?: number;
    hitbox?: DefaultHitbox;
}

export interface AssetsSpine {
    type:        AssetTypeEnum;
    ID:          number;
    battleScale: number;
}

export interface UIConfig {
    type:      ElementType;
    name:      NameEnum;
    anchorX:   number;
    anchorY:   number;
    relativeX: number;
    relativeY: number;
    spineKey:  string;
    animation: string;
    loop:      boolean;
}

export enum ElementType {
    Button = "Button",
    ButtonToggle = "ButtonToggle",
    Graphic = "Graphic",
    InputFieldElement = "InputFieldElement",
    Mask = "Mask",
    PhaserButtonWrapper = "PhaserButtonWrapper",
    ScrollBar = "ScrollBar",
    ScrollView = "ScrollView",
    SlicedBanner = "SlicedBanner",
    SlicedGraphic = "SlicedGraphic",
    Slider = "Slider",
    SpineUI = "SpineUI",
    Tab = "Tab",
    TabButton = "TabButton",
    Text = "Text",
    UIElement = "UIElement",
    VideoGraphic = "VideoGraphic",
    WebFontText = "WebFontText",
    WoodSlicedPanel = "WoodSlicedPanel",
}

export interface PrizeWheel {
    ID:       number;
    assetID:  number;
    type:     string;
    gender:   number;
    data:     PrizeWheelData;
    metadata: null;
    name:     string;
}

export interface PrizeWheelData {
    slots:                     Slot[];
    itemPools:                 Array<CostElement[]>;
    atlas:                     string;
    wheelSprite:               string;
    wheelTop:                  string;
    wheelTopOffset:            BeijingPigeon;
    wheelPointer:              string;
    wheelPointerOffset?:       BeijingPigeon;
    itemDistanceScale?:        number;
    askSpinDialogue?:          string;
    spinningDialogue?:         string;
    outOfSpinsDialogue?:       string;
    spinAgainDialogue?:        string;
    ticketDialogue?:           string;
    eventType:                 string;
    name?:                     string;
    maxedItemPrizeSubstitute?: number;
    firstSpinDialogueID?:      number;
    spinDialogueID?:           number;
    declineSpinDialogueID?:    number;
    spinningDialogueID?:       number;
    prizeReceivedDialogueID?:  number;
    outOfSpinsDialogueID?:     number;
    spinAgainDialogueID?:      number;
    firstSpinBreadcrumb?:      FirstSpinBreadcrumb;
}

export interface FirstSpinBreadcrumb {
    featureName:    string;
    breadcrumbName: string;
}

export interface Slot {
    itemPools: ItemPool[];
    weight:    number;
}

export interface ItemPool {
    index:  number;
    weight: number;
}

export interface Relic {
    ID:       number;
    assetID:  number;
    type:     RelicType;
    gender:   number;
    data:     MountData;
    metadata: BundleMetadata;
    name:     string;
}

export enum RelicType {
    Relic = "relic",
}

export interface Sfx {
    ID:       number;
    assetID:  number;
    type:     SfxType;
    gender:   number;
    data:     SfxData;
    metadata: AtlasMetadata;
    name:     string;
}

export interface SfxData {
    filename: string;
    clips?:   { [key: string]: Clip };
    name?:    string;
}

export interface Clip {
    d: number;
    s: number;
}

export enum SfxType {
    Sfx = "sfx",
}

export interface SingleImage {
    ID:       number;
    assetID:  number;
    type:     PurpleType;
    gender:   number;
    data:     SingleImageData;
    metadata: SingleImageMetadata;
    name:     string;
}

export interface SingleImageData {
    filename?: string;
    name?:     string;
    "en-us"?:  string;
}

export interface SingleImageMetadata {
    assets:     FluffyAssets;
    iconAtlas?: number | string;
    v?:         number;
    petID?:     number;
}

export interface Spell {
    ID:       number;
    assetID:  number;
    type:     SpellType;
    gender:   number;
    data:     SpellData;
    metadata: SpellMetadata;
    name:     string;
}

export interface SpellData {
    name:           string;
    price:          number;
    damage:         number;
    element:        EarthElement;
    animation:      string;
    heal?:          boolean;
    type?:          SpellType | null;
    epicId?:        number | null;
    baseAttack?:    number | string;
    statusEffects?: number[];
    cost?:          CostElement[];
    energyCost?:    number;
    tier?:          number;
    targetType?:    TargetType;
    nextTierID?:    number;
    damageType?:    Type;
}

export enum Type {
    Aoa = "aoa",
    Aoe = "aoe",
    Beam = "beam",
    Projectile = "projectile",
}

export enum TargetType {
    Aoe = "aoe",
    Single = "single",
}

export enum SpellType {
    EpicAttack = "epic-attack",
    Spell = "spell",
}

export interface SpellMetadata {
    vIcon:          number;
    v?:             number;
    type?:          PurpleType;
    assets?:        string[];
    animationData?: AnimationData;
}

export interface AnimationData {
    animationType:         Type;
    createLocation:        CreateLocation;
    impactLocation:        ImpactLocation;
    createRotates:         boolean;
    createBeamDelay:       number | string;
    travelRotates:         boolean;
    travelEasing:          TravelEasing;
    travelDuration:        number;
    sustainDuration:       number;
    endDuration:           number;
    endEasing:             EndEasing;
    impactRotates:         boolean;
    impact2Delay:          number;
    screenDim:             boolean;
    charFromAnimation:     CharFromAnimation;
    charToAnimation:       CharToAnimation;
    charToAnimationDelay:  number | null;
    charToAnimationLength: number | null;
    travelStraight:        boolean;
    impact2Offset?:        Impact2Offset;
    fullTeamAttack?:       boolean;
    castingAnimation?:     CastingAnimation;
    endingMask?:           boolean;
}

export interface CastingAnimation {
    type:      AssetTypeEnum;
    ID:        number;
    offset:    BeijingPigeon;
    animation: string;
}

export enum CharFromAnimation {
    None = "none",
    Vibrate = "vibrate",
}

export enum CharToAnimation {
    Damage = "damage",
    None = "none",
}

export interface CreateLocation {
    createOffsetX: number | null;
    createOffsetY: number;
    createy?:      number;
    createx?:      number;
}

export enum EndEasing {
    ElasticIn = "Elastic.In",
    LinearNone = "Linear.None",
}

export interface Impact2Offset {
    impact2OffsetX: number;
    impact2OffsetY: number;
}

export interface ImpactLocation {
    impactx:  number | null;
    impacty:  number | null;
    offsety?: number;
    offsetx?: number;
}

export enum TravelEasing {
    LinearNone = "Linear.None",
    QuadraticIn = "Quadratic.In",
}

export interface SpellRelic {
    ID:       number;
    assetID:  number;
    type:     SpellRelicType;
    gender:   number;
    data:     SpellRelicData;
    metadata: PurpleMetadata;
    name:     string;
}

export interface SpellRelicData {
    spellID:    number;
    drop:       number;
    rarity:     number;
    name:       string;
    flavorText: string;
    lockLevel?: number;
    levelLock?: number;
}

export enum SpellRelicType {
    SpellRelic = "spellRelic",
}

export interface SpineElement {
    ID:       number;
    assetID:  number;
    type:     AssetTypeEnum;
    gender:   number;
    data:     AtlasData;
    metadata: SpineMetadata;
    name:     string;
}

export interface SpineMetadata {
    assets: CunningAssets;
    type?:  PurpleType;
}

export interface CunningAssets {
    default: IndigoDefault;
}

export interface IndigoDefault {
    v:       number;
    type?:   AssetTypeEnum;
    hitbox?: DefaultHitbox;
}

export interface Tileset {
    ID:       number;
    assetID:  number;
    type:     string;
    gender:   number;
    data:     TilesetData;
    metadata: MemberClass;
    name:     string;
}

export interface TilesetData {
    data:     TentacledData;
    metadata: AtlasMetadata;
    name:     string;
}

export interface TentacledData {
    name:     string;
    filename: string;
    w:        number;
    h:        number;
}

export interface Titan {
    ID:       number;
    assetID:  number;
    type:     string;
    gender:   number;
    data:     TitanData;
    metadata: SpineMetadata;
    name:     string;
}

export interface TitanData {
    name:       string;
    zone:       string;
    maxHealth:  number;
    element:    EarthElement;
    difficulty: number;
    spellList:  number[];
    rewards:    Reward[];
    spine:      string;
}

export interface Reward {
    rank:        number;
    threshold:   number;
    mailKey:     MailKey;
    attachments: CostElement[];
    mapping:     number[];
}

export enum MailKey {
    TitanReward = "titanReward",
}

export interface UI {
    ID:       number;
    assetID:  number;
    type:     UIType;
    gender:   number;
    data:     UIData;
    metadata: MemberClass;
    name:     string;
}

export interface UIData {
    name?:      string;
    elements?:  FluffyElement[];
    templates?: Template[];
    data?:      StickyData;
    metadata?:  MemberClass;
}

export interface StickyData {
    name:     string;
    elements: PurpleElement[];
}

export interface PurpleElement {
    type:     ElementType;
    name:     string;
    x:        number;
    y:        number;
    width:    number;
    height:   number;
    children: any[];
}

export interface FluffyElement {
    type:                        ElementType;
    name?:                       string;
    anchorX?:                    number;
    anchorY?:                    number;
    relativeX?:                  number;
    relativeY?:                  number;
    width?:                      number;
    relativeHeight?:             number;
    atlasID?:                    number | string;
    baseFrameName?:              string;
    sliceType?:                  SliceType;
    children?:                   ElementChild[];
    relativeWidth?:              number;
    height?:                     number;
    textKey?:                    string;
    frameName?:                  string;
    x?:                          number;
    y?:                          number;
    activeTrackBaseFrameName?:   string;
    inactiveTrackBaseFrameName?: string;
    showHead?:                   boolean;
    isVertical?:                 boolean;
    isInteractive?:              boolean;
    thumbAnchor?:                BeijingPigeon;
    spineKey?:                   string;
    visible?:                    boolean;
    isThreeSlice?:               boolean;
    frameNameOn?:                string;
    frameNameOff?:               string;
    defaultToggleState?:         number;
}

export interface ElementChild {
    type:                        ElementType;
    name?:                       string;
    relativeWidth?:              number;
    relativeHeight?:             number;
    children?:                   PurpleChild[];
    anchorX?:                    number;
    anchorY?:                    number;
    relativeX?:                  number;
    relativeY?:                  number;
    atlasID?:                    number;
    baseFrameName?:              string;
    text?:                       string;
    visible?:                    boolean;
    layoutConfig?:               LayoutConfig;
    textKey?:                    string;
    x?:                          number;
    y?:                          number;
    height?:                     number;
    width?:                      number;
    sliceType?:                  SliceType;
    frameName?:                  string;
    fontID?:                     number;
    fontSize?:                   number;
    upStateName?:                string;
    downStateName?:              string;
    buttonTextName?:             string;
    hoverLiftDistance?:          number;
    atlasName?:                  AtlasName;
    wordWrap?:                   boolean;
    style?:                      number;
    color?:                      string;
    align?:                      BoundsAlignH;
    boundsAlignH?:               BoundsAlignH;
    boundsAlignV?:               BoundsAlignH;
    toggle?:                     boolean;
    textOffset?:                 number;
    forceUpperCase?:             boolean;
    activeTrackBaseFrameName?:   string;
    inactiveTrackBaseFrameName?: string;
    thumbFrameName?:             string;
    showHead?:                   boolean;
    isVertical?:                 boolean;
    isInteractive?:              boolean;
    thumbAnchor?:                BeijingPigeon;
    scaleX?:                     number;
    lineSpacing?:                number;
    singleImageID?:              number;
    tint?:                       number;
    overStateName?:              FluffyOverStateName;
}

export enum BoundsAlignH {
    Bottom = "bottom",
    Center = "center",
    Left = "left",
    Middle = "middle",
    Right = "right",
    Top = "top",
}

export enum AtlasName {
    Empty = "",
    UIShared = "ui-shared",
}

export interface PurpleChild {
    type:                 ElementType;
    name?:                string;
    anchorX?:             number;
    anchorY?:             number;
    relativeX?:           number;
    relativeY?:           number;
    relativeHeight?:      number;
    relativeWidth?:       number;
    visible?:             boolean;
    children?:            FluffyChild[];
    atlasID?:             number;
    baseFrameName?:       string;
    sliceType?:           SliceType;
    width?:               number;
    height?:              number;
    textKey?:             string;
    fontID?:              number;
    fontSize?:            number;
    horizontalAlignment?: BoundsAlignH;
    verticalAlignment?:   BoundsAlignH;
    text?:                string;
    layoutConfig?:        LayoutConfig;
    x?:                   number;
    frameName?:           string;
    tabID?:               number;
    isThreeSlice?:        boolean;
    upStateName?:         string;
    downStateName?:       string;
    buttonTextName?:      string;
    hoverLiftDistance?:   number;
    y?:                   number;
    horizontalFlip?:      boolean;
    atlasName?:           string;
    thumbFrameName?:      string;
    trackFrameName?:      string;
    color?:               string;
    style?:               number;
    boundsAlignH?:        BoundsAlignH;
    boundsAlignV?:        BoundsAlignH;
    spineKey?:            string;
    wordWrap?:            boolean;
    textOffset?:          number;
    align?:               BoundsAlignH;
    groupID?:             number;
    lineSpacing?:         number;
    forceUpperCase?:      boolean;
    isVertical?:          boolean;
    rotateSprites?:       boolean;
    anxhorY?:             number;
    toggle?:              boolean;
    scaleX?:              number;
    overStateName?:       PurpleOverStateName;
    singleImageID?:       number;
    scaleY?:              number;
    wordWrapWidth?:       number;
}

export interface FluffyChild {
    type:                        ElementType;
    name?:                       string;
    anchorX?:                    number;
    anchorY?:                    number;
    relativeX?:                  number;
    relativeY?:                  number;
    atlasID?:                    number;
    frameName?:                  string;
    relativeWidth?:              number;
    relativeHeight?:             number;
    children?:                   TentacledChild[];
    baseFrameName?:              string;
    sliceType?:                  SliceType;
    height?:                     number;
    textKey?:                    string;
    fontID?:                     number;
    fontSize?:                   number;
    horizontalAlignment?:        BoundsAlignH;
    forceUpperCase?:             boolean;
    width?:                      number;
    visible?:                    boolean;
    text?:                       string;
    verticalAlignment?:          BoundsAlignH;
    y?:                          number;
    x?:                          number;
    thumbFrameName?:             string;
    activeTrackBaseFrameName?:   string;
    inactiveTrackBaseFrameName?: string;
    isVertical?:                 boolean;
    atlasName?:                  AtlasName;
    layoutConfig?:               LayoutConfig;
    boundsAlignH?:               BoundsAlignH;
    boundsAlignV?:               BoundsAlignH;
    style?:                      number;
    color?:                      string;
    wordWrap?:                   boolean;
    scrollContentsName?:         string;
    enableTouchScroll?:          boolean;
    trackFrameName?:             string;
    upStateName?:                string;
    downStateName?:              string;
    buttonTextName?:             string;
    hoverLiftDistance?:          number;
    toggle?:                     boolean;
    lineSpacing?:                number;
    align?:                      BoundsAlignH;
    rotateSprites?:              boolean;
    scaleX?:                     number;
    showHead?:                   boolean;
    isInteractive?:              boolean;
    thumbAnchor?:                BeijingPigeon;
    spineKey?:                   string;
    singleImageID?:              number;
}

export interface TentacledChild {
    type:                        ElementType;
    name?:                       string;
    relativeHeight?:             number;
    relativeWidth?:              number;
    text?:                       string;
    fontID?:                     number;
    fontSize?:                   number;
    horizontalAlignment?:        BoundsAlignH;
    atlasID?:                    number;
    baseFrameName?:              string;
    sliceType?:                  SliceType;
    height?:                     number;
    textKey?:                    string;
    verticalAlignment?:          BoundsAlignH;
    visible?:                    boolean;
    anchorX?:                    number;
    anchorY?:                    number;
    relativeX?:                  number;
    relativeY?:                  number;
    frameName?:                  string;
    forceUpperCase?:             boolean;
    children?:                   StickyChild[];
    activeTrackBaseFrameName?:   string;
    inactiveTrackBaseFrameName?: string;
    endCapAtlas?:                string;
    endCapFrameName?:            string;
    showHead?:                   boolean;
    isVertical?:                 boolean;
    isInteractive?:              boolean;
    scrollContentsName?:         string;
    enableTouchScroll?:          boolean;
    width?:                      number;
    thumbFrameName?:             string;
    trackFrameName?:             string;
    upStateName?:                string;
    downStateName?:              string;
    buttonTextName?:             string;
    hoverLiftDistance?:          number;
    y?:                          number;
    style?:                      number;
    color?:                      string;
    boundsAlignH?:               BoundsAlignH;
    boundsAlignV?:               BoundsAlignH;
    wordWrap?:                   boolean;
    layoutConfig?:               LayoutConfig;
    x?:                          number;
    atlasName?:                  AtlasName;
    singleImageID?:              number;
    tint?:                       number;
}

export interface StickyChild {
    type:                 ElementType;
    name:                 string;
    anchorX?:             number;
    anchorY?:             number;
    relativeX?:           number;
    relativeY?:           number;
    atlasID?:             number;
    frameName?:           string;
    relativeHeight?:      number;
    relativeWidth?:       number;
    textKey?:             string;
    fontID?:              number;
    fontSize?:            number;
    horizontalAlignment?: BoundsAlignH;
    verticalAlignment?:   BoundsAlignH;
    layoutConfig?:        LayoutConfig;
    baseFrameName?:       string;
    sliceType?:           SliceType;
    height?:              number;
    text?:                string;
    forceUpperCase?:      boolean;
    children?:            IndigoChild[];
    style?:               number;
    wordWrap?:            boolean;
    wordWrapWidth?:       number;
    color?:               PurpleColor;
    lineSpacing?:         number;
    width?:               number;
    boundsAlignH?:        BoundsAlignH;
    boundsAlignV?:        BoundsAlignH;
    atlasName?:           AtlasName;
}

export interface IndigoChild {
    type:                        ElementType;
    name:                        string;
    relativeX:                   number;
    relativeY:                   number;
    anchorX:                     number;
    anchorY:                     number;
    style?:                      number;
    fontSize?:                   number;
    color?:                      string;
    boundsAlignH?:               BoundsAlignH;
    boundsAlignV?:               BoundsAlignH;
    lineSpacing?:                number;
    atlasID?:                    number;
    frameName?:                  string;
    width?:                      number;
    height?:                     number;
    activeTrackBaseFrameName?:   string;
    inactiveTrackBaseFrameName?: string;
    thumbFrameName?:             string;
    showHead?:                   boolean;
    isVertical?:                 boolean;
    isInteractive?:              boolean;
    thumbAnchor?:                BeijingPigeon;
}

export enum PurpleColor {
    C16A2C = "#c16a2c",
    The363636 = "#363636",
    The3687Ba = "#3687ba",
}

export interface LayoutConfig {
    type:             LayoutConfigType;
    alignment:        BoundsAlignH;
    offset?:          number;
    spacing?:         number;
    ignoreInvisible?: boolean;
}

export enum LayoutConfigType {
    Horizontal = "horizontal",
    Vertical = "vertical",
}

export enum SliceType {
    Nine = "nine",
    NineScale = "nineScale",
    Three = "three",
    ThreeScale = "threeScale",
}

export enum PurpleOverStateName {
    WatchNowGraphicOverContainer = "watchNowGraphicOverContainer",
}

export enum FluffyOverStateName {
    GoNowGraphicOver = "goNowGraphicOver",
    WatchVideoGraphicOver = "watchVideoGraphicOver",
}

export interface Template {
    type:               ElementType;
    name:               string;
    anchorX?:           number;
    anchorY?:           number;
    relativeX?:         number;
    relativeY?:         number;
    width?:             number;
    height?:            number;
    atlasID?:           number;
    baseFrameName?:     string;
    sliceType?:         SliceType;
    children?:          TemplateChild[];
    frameName?:         string;
    relativeWidth?:     number;
    relativeHeight?:    number;
    visible?:           boolean;
    x?:                 number;
    y?:                 number;
    layoutConfig?:      LayoutConfig;
    atlasName?:         AtlasName;
    text?:              string;
    style?:             number;
    boundsAlignH?:      BoundsAlignH;
    boundsAlignV?:      BoundsAlignH;
    upStateName?:       string;
    downStateName?:     string;
    buttonTextName?:    string;
    hoverLiftDistance?: number;
    toggle?:            boolean;
}

export interface TemplateChild {
    type:                 ElementType;
    name:                 string;
    relativeWidth?:       number;
    relativeHeight?:      number;
    anchorX?:             number;
    anchorY?:             number;
    relativeX?:           number;
    relativeY?:           number;
    height?:              number;
    text?:                string;
    fontID?:              number;
    fontSize?:            number;
    horizontalAlignment?: BoundsAlignH;
    verticalAlignment?:   BoundsAlignH;
    visible?:             boolean;
    atlasID?:             number;
    baseFrameName?:       string;
    sliceType?:           SliceType;
    children?:            IndecentChild[];
    x?:                   number;
    y?:                   number;
    width?:               number;
    frameName?:           string;
    isThreeSlice?:        boolean;
    textKey?:             string;
    forceUpperCase?:      boolean;
    style?:               number;
    color?:               FluffyColor;
    boundsAlignH?:        BoundsAlignH;
    boundsAlignV?:        BoundsAlignH;
    align?:               BoundsAlignH;
    wordWrap?:            boolean;
    upStateName?:         string;
    downStateName?:       string;
    buttonTextName?:      string;
    hoverLiftDistance?:   number;
    isVertical?:          boolean;
    spineKey?:            string;
    atlasName?:           AtlasName;
    rotateSprites?:       boolean;
    toggle?:              boolean;
}

export interface IndecentChild {
    type:                        ElementType;
    name:                        string;
    anchorY?:                    number;
    relativeX?:                  number;
    relativeY?:                  number;
    atlasID?:                    number;
    frameName?:                  string;
    anchorX?:                    number;
    relativeWidth?:              number;
    relativeHeight?:             number;
    baseFrameName?:              string;
    sliceType?:                  SliceType;
    visible?:                    boolean;
    children?:                   HilariousChild[];
    text?:                       string;
    fontID?:                     number;
    fontSize?:                   number;
    horizontalAlignment?:        BoundsAlignH;
    verticalAlignment?:          BoundsAlignH;
    height?:                     number;
    activeTrackBaseFrameName?:   string;
    inactiveTrackBaseFrameName?: string;
    thumbFrameName?:             string;
    thumbAnchor?:                BeijingPigeon;
    isVertical?:                 boolean;
    isInteractive?:              boolean;
    width?:                      number;
    wordWrap?:                   boolean;
    color?:                      string;
    textKey?:                    string;
    align?:                      BoundsAlignH;
    boundsAlignH?:               BoundsAlignH;
    boundsAlignV?:               BoundsAlignH;
    style?:                      number;
    horizontalFlip?:             boolean;
    forceUpperCase?:             boolean;
    x?:                          number;
    y?:                          number;
    atlasName?:                  AtlasName;
    layoutConfig?:               LayoutConfig;
    showHead?:                   boolean;
    spineKey?:                   string;
    upStateName?:                string;
    downStateName?:              string;
    buttonTextName?:             string;
    hoverLiftDistance?:          number;
    toggle?:                     boolean;
    textOffset?:                 number;
    url?:                        string;
    autoStart?:                  boolean;
    manuallyCreate?:             boolean;
    videoScaleX?:                number;
    videoScaleY?:                number;
}

export interface HilariousChild {
    type:                        ElementType;
    name:                        string;
    relativeHeight?:             number;
    relativeWidth?:              number;
    anchorX?:                    number;
    anchorY?:                    number;
    relativeX?:                  number;
    relativeY?:                  number;
    text?:                       string;
    fontID?:                     number;
    fontSize?:                   number;
    horizontalAlignment?:        BoundsAlignH;
    verticalAlignment?:          BoundsAlignH;
    atlasID?:                    number;
    frameName?:                  string;
    textKey?:                    string;
    forceUpperCase?:             boolean;
    width?:                      number;
    height?:                     number;
    y?:                          number;
    style?:                      number;
    color?:                      FluffyColor;
    boundsAlignH?:               BoundsAlignH;
    boundsAlignV?:               BoundsAlignH;
    wordWrap?:                   boolean;
    x?:                          number;
    align?:                      BoundsAlignH;
    children?:                   AmbitiousChild[];
    offset?:                     number;
    activeTrackBaseFrameName?:   string;
    inactiveTrackBaseFrameName?: string;
    endCapAtlas?:                string;
    endCapFrameName?:            string;
    showHead?:                   boolean;
    isVertical?:                 boolean;
    isInteractive?:              boolean;
    baseFrameName?:              string;
    sliceType?:                  SliceType;
    visible?:                    boolean;
    lineSpacing?:                number;
    atlasName?:                  AtlasName;
    fieldColour?:                string;
    placeholderText?:            string;
    isPassword?:                 boolean;
    hoverLiftDistance?:          number;
}

export interface AmbitiousChild {
    type:            ElementType;
    name:            string;
    textKey?:        string;
    forceUpperCase?: boolean;
    width?:          number;
    height?:         number;
    x?:              number;
    y?:              number;
    anchorX?:        number;
    anchorY?:        number;
    style?:          number;
    fontSize?:       number;
    color?:          string;
    align?:          BoundsAlignH;
    boundsAlignH?:   BoundsAlignH;
    boundsAlignV?:   BoundsAlignH;
    relativeWidth?:  number;
    relativeHeight?: number;
    relativeX?:      number;
    relativeY?:      number;
    atlasID?:        number;
    frameName?:      string;
    visible?:        boolean;
    children?:       CunningChild[];
    text?:           string;
    wordWrap?:       boolean;
    baseFrameName?:  string;
    sliceType?:      SliceType;
}

export interface CunningChild {
    type:            ElementType;
    name:            string;
    text?:           string;
    relativeX:       number;
    relativeY:       number;
    anchorX:         number;
    anchorY:         number;
    wordWrap:        boolean;
    style:           number;
    boundsAlignH:    BoundsAlignH;
    boundsAlignV:    BoundsAlignH;
    textKey?:        string;
    relativeHeight?: number;
    relativeWidth?:  number;
    fontSize?:       number;
    color?:          PurpleColor;
}

export enum FluffyColor {
    Black = "black",
    E83E45 = "#E83E45",
    Ffffff = "#ffffff",
    The000000 = "#000000",
    The363636 = "#363636",
    The372623 = "#372623",
    The865Fb1 = "#865FB1",
}

export enum UIType {
    UI = "ui",
}

export interface Weapon {
    ID:       number;
    assetID:  number;
    type:     TypeElement;
    gender:   number;
    data:     WeaponData;
    metadata: WeaponMetadata;
    name:     string;
}

export interface WeaponData {
    drop:       number;
    name:       string;
    price:      number;
    member:     number;
    rarity:     number;
    effects:    number[];
    flavorText: string;
    spellID?:   number;
    lockLevel?: number;
    memberAd?:  number;
    cost?:      CostElement[];
    "en-us"?:   string;
}

export interface WeaponMetadata {
    v:                 number;
    size:              number;
    type:              PurpleType;
    angle:             number;
    vIcon:             number;
    anchor:            BeijingPigeon;
    x?:                number;
    y?:                number;
    "anchor "?:        BeijingPigeon;
    assetVersions?:    Version[];
    iconVersions?:     Version[];
    noCache?:          boolean;
    rewardsExclusive?: boolean;
}

export declare type GameItemKey =
	| "ad"
	| "affix"
	| "atlas"
	| "bgm"
	| "bitmapFont"
	| "boots"
	| "boss"
	| "bundle"
	| "currency"
	| "dailyReward"
	| "dialogue"
	| "dorm"
	| "dormbg"
	| "dungeon"
	| "emote"
	| "eyeColor"
	| "face"
	| "faceColor"
	| "follow"
	| "fontStyle"
	| "fossil"
	| "fsm"
	| "gameFeed"
	| "gender"
	| "giftBox"
	| "hair"
	| "hairColor"
	| "hat"
	| "item"
	| "key"
	| "mathTownDecor"
	| "mathTownFrame"
	| "mathTownInterior"
	| "mount"
	| "name"
	| "nickname"
	| "outfit"
	| "particleEffect"
	| "pet"
	| "prefab"
	| "prizeWheel"
	| "relic"
	| "sfx"
	| "singleImage"
	| "skinColor"
	| "spell"
	| "spellRelic"
	| "spine"
	| "titan"
	| "ui"
	| "weapon"
	| "featureRequirement";
