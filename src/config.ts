export const VERSION = BCX_VERSION;

export const VERSION_CHECK_BOT: number = 37685;

// Server commit: 806dcd771d453c82427643abe8fabb4a4a2d1513

// Game commit: 70bf70b1e7f9ec554649ced7a1e12eda75efebd5
export const FUNCTION_HASHES: Record<string, string[]> = {
	"Player.CanChangeClothesOn": ["40EF5292"],
	"Player.GetBlindLevel": ["B0DE4B87"],
	"Player.GetDeafLevel": ["42CB6D63"],
	"Player.IsSlow": ["4D9B1713"],
	ActivityOrgasmPrepare: ["E4EE085D"],
	ActivityOrgasmStart: ["5C3627D7", "1F7E8FF9", "B5D882A8"],
	AppearanceClick: ["48FA3705", "BA17EA90", "F0B11F43", "CCD4AC31", "EECC190D", "19A126DF", "0D1455A9"],
	AppearanceGetPreviewImageColor: ["C4BDF19F"],
	AppearanceMenuBuild: ["264DC3C6", "718A9867"],
	AppearanceMenuClick: ["187B3371", "80444418"],
	AppearanceMenuDraw: ["28FDF65B"],
	AppearanceRun: ["904E8E84", "45C6BA53", "6D5EFEAA", "6DDA14A1"],
	AsylumEntranceCanWander: ["3F5F4041", "609FA096", "A85C35F3"],
	AsylumGGTSClick: ["E5660C8C"],
	AsylumGGTSLoad: ["DAB62F12"],
	BackgroundSelectionRun: ["DB865494"],
	CharacterAppearanceLoadCharacter: ["3641512F", "387F9BEF"],
	CharacterCanChangeToPose: ["F55FE4B0"],
	CharacterCanKneel: ["A5A325E3"],
	CharacterLoadEffect: ["0498693B", "D9ECD497", "6AC161A6"],
	ChatAdminClick: ["6B460E3D"],
	ChatAdminExit: ["64A8D565"],
	ChatAdminLoad: ["EB8AF0DB"],
	ChatAdminRun: ["CBE642C8"],
	ChatCreateClick: ["765AEBFE"],
	ChatCreateExit: ["6FF19445"],
	ChatCreateLoad: ["BF403157", "8D735E0E"],
	ChatCreateRun: ["B0A3D236"],
	ChatRoomAddCharacterToChatRoom: ["5B72DA3E"],
	ChatRoomAdminAction: ["0C867BF6", "86DE8F3C"],
	ChatRoomCanAttemptKneel: ["0AA710FA"],
	ChatRoomCanAttemptStand: ["026065D0"],
	ChatRoomCanBeLeashedBy: ["0ADB85BD", "A05C6F82"],
	ChatRoomCanLeave: ["5BEE6F9D", "77FB6CF8", "7065F82F"],
	ChatRoomClearAllElements: ["D1E1F8C3", "D9169281", "AFB1B3ED", "C49AA2C1"],
	ChatRoomClickCharacter: ["21AEE568", "AA9259DF"],
	ChatRoomCreateElement: ["4837C2F6", "6C4CCF41", "35D54383", "60A3203E", "AD7CBE68"],
	ChatRoomDrawBackground: ["898C1B12"],
	ChatRoomDrawCharacter: ["3AE33D9C"],
	ChatRoomDrawCharacterOverlay: ["D58A9AD3", "4AE4AD9E"],
	ChatRoomFirstTimeHelp: ["078BEEA9"],
	ChatRoomIsOwnedByPlayer: ["82640FF9"],
	ChatRoomKeyDown: ["5FD37EC9", "111B6F0C", "33C77F12"],
	ChatRoomListUpdate: ["D7FA0EC7"],
	ChatRoomLovershipOptionIs: ["6F5CE6A0"],
	ChatRoomMenuClick: ["8D9D74CE", "959128FD", "0B1BA9F4", "188B0A8B", "900BA084"],
	ChatRoomMenuDraw: ["0B8B0944"],
	ChatRoomMessage: ["2C6E4EC3", "4340BC41", "6026A4B6", "E3EE1C77", "58EAAE61", "60ECCB9B", "4E97FAA5", "434FF2E9", "29F6DE79", "3041CEA5"],
	ChatRoomOwnershipOptionIs: ["FE060F0B"],
	ChatRoomSendChat: ["39B06D87", "9019F7EF", "D64CCA1D", "7F540ED0"],
	ChatRoomSendEmote: ["30DB56A6"],
	ChatRoomShouldBlockGaggedOOCMessage: ["4940C855"],
	ChatRoomStatusUpdate: ["041D2784", "35DA12E0"],
	ChatRoomSync: ["B67D8226", "DF257D5B", "EE15739F"],
	ChatRoomSyncMemberLeave: ["A95EADE6"],
	ChatRoomUpdateDisplay: ["8DFC494A"],
	ChatSearchJoin: ["22514B80"],
	ChatSearchLoad: ["F5CC9CAE", "8AF12D1C"],
	ChatSearchNormalDraw: ["6BEDBABB"],
	ChatSearchRun: ["4C56AC68", "06BFF877", "7909670E"],
	CheatFactor: ["594CFC45"],
	CheatImport: ["412422CC", "26C67608"],
	ColorPickerDraw: ["D1E82FB3"],
	CommandParse: ["12DC018B"],
	CommonKeyDown: ["A8EC46AB"],
	CommonSetScreen: ["17692CD7"],
	DialogCanUnlock: ["634C862B", "B849E6BC"],
	DialogClickExpressionMenu: ["5938DDC1"],
	DialogDrawExpressionMenu: ["EEFB3D22"],
	DialogDrawItemMenu: ["7B1D71E9", "0199F25B", "D832A940", "A6FE3967"],
	DialogDrawPoseMenu: ["4B146E82"],
	DialogFindPlayer: ["32851FF2"],
	DialogInventoryAdd: ["FD9268E1"],
	DialogItemClick: ["7039462A", "A08AC13E", "0E0D1707", "8B284B90"],
	DialogLeaveItemMenu: ["B369F7C0"],
	DialogMenuButtonBuild: ["1D4265E4", "75E8CCCD", "BC5B2A8A", "6B6C875D", "B169C773"],
	DialogMenuButtonClick: ["9D8202CC", "8B705620", "621FE5B5", "80EA8095", "86CF4807"],
	DrawArousalMeter: ["F4BDB7C1", "DC0BB5B4"],
	DrawCharacter: ["A9C65470", "967DB0F1"],
	DrawGetImage: ["BEC7B0DA"],
	DrawImageEx: ["3D3D74F5"],
	DrawStatus: ["FD747092"],
	ElementIsScrolledToEnd: ["D28B0638"],
	ExtendedItemDraw: ["486A52DF", "9256549A", "45432E84", "455F5FDD", "BDE09647", "E831F57A"],
	FriendListBeepMenuSend: ["B81A695E"],
	FriendListClick: ["6B039C7C"],
	FriendListLoadFriendList: ["72099AC9", "1F8A29E2"],
	FriendListRun: ["051E747B"],
	InfiltrationStealItems: ["1F601756"],
	InformationSheetClick: ["E535609B"],
	InformationSheetExit: ["75521907"],
	InformationSheetRun: ["58B7879C", "A8A56ACA", "1079019C"],
	InventoryItemNeckAccessoriesCollarAutoShockUnitDetectSpeech: ["BE1F6406"],
	LoginMistressItems: ["B58EF410"],
	LoginResponse: ["16C2C651", "FA9EFD03", "02E9D246", "548405C8", "4FE91547", "CF1C0400", "17F3A06E", "E117B785", "CA1BD40A"],
	LoginStableItems: ["EA93FBF7"],
	LogValue: ["6ED63114"],
	MainHallMaidsDisabledBegForMore: ["EA29F2B3"],
	MainHallWalk: ["E52553C4"],
	ManagementCanBeReleased: ["A2E2CA35"],
	ManagementCanBeReleasedOnline: ["3374263B"],
	ManagementCanBreakDatingLoverOnline: ["366AECAE"],
	ManagementCanBreakTrialOnline: ["51E9B7F4", "2CBA193D"],
	ManagementCanBreakUpLoverOnline: ["92E30200"],
	ManagementCannotBeReleased: ["755DB909"],
	ManagementCannotBeReleasedExtreme: ["2DA1650E"],
	ManagementCannotBeReleasedOnline: ["D1ACE212"],
	PreferenceIsPlayerInSensDep: ["45EA8806"],
	PreferenceSubscreenDifficultyClick: ["3882E581"],
	PreferenceSubscreenDifficultyRun: ["65BF560F"],
	PrivateRansomStart: ["0E968EDD", "511E91C6"],
	ServerAccountBeep: ["2D918B69", "D2802EE7", "D93AD698"],
	ServerPlayerIsInChatRoom: ["E3771112"],
	ServerSend: ["90A61F57"],
	SpeechGarble: ["1BC8E005", "15C3B50B", "9D669F73"],
	StruggleDrawStrengthProgress: ["4755C02D"],
	TextGet: ["4DDE5794"],
	ValidationResolveModifyDiff: ["C2FE52D3"],
	WardrobeClick: ["D388FE7D"],
	WardrobeRun: ["9616EB3A"]
};

export const FUNCTION_HASHES_NMOD: Record<string, string[]> = {
	ActivityOrgasmPrepare: ["AA5FC17F"],
	BackgroundSelectionRun: ["82E77898"],
	CharacterLoadEffect: ["74D62AA1"],
	ChatAdminClick: ["3355D63D"],
	ChatAdminLoad: ["BF159B25"],
	ChatAdminRun: ["F92A0B2E"],
	ChatRoomAddCharacterToChatRoom: ["3B0DE035"],
	ChatRoomCanChangeClothes: ["DF8A6550"], // Deprecated
	ChatRoomCanLeave: ["B406F3E5"],
	ChatRoomClearAllElements: ["52F91E02"],
	ChatRoomCreateElement: ["76299AEC"],
	ChatRoomDrawCharacterOverlay: ["61F5F655"],
	ChatRoomDrawFriendList: ["327DA1B8"],
	ChatRoomKeyDown: ["15C1889B"],
	ChatRoomMenuClick: ["098D7C31"],
	ChatRoomMessage: ["83DEF0DF"],
	ChatRoomSync: ["642E4117"],
	ChatRoomUpdateDisplay: ["8B37556F"],
	ChatSearchLoad: ["4659E8F5"],
	CheatImport: ["1ECB0CC4"],
	ColorPickerDraw: ["FF93AF2E"],
	CommandParse: ["36295DDC"],
	DialogClickExpressionMenu: ["AFBB0323"],
	DialogDrawItemMenu: ["05301080"],
	DialogFindPlayer: ["44A7263C"],
	DialogInventoryAdd: ["A6DED236"],
	DialogItemClick: ["EED79C72"],
	DialogMenuButtonBuild: ["D97C3EBF"],
	DialogMenuButtonClick: ["0E218260"],
	DrawCharacter: ["C9EC1A94"],
	FriendListBeepMenuSend: ["C5C27229"],
	FriendListClick: ["E08BFE66"],
	FriendListLoadFriendList: ["428B288B"],
	FriendListRun: ["96BCBB6E"],
	InformationSheetRun: ["19872251"],
	LoginMistressItems: ["984A6AD9"],
	LoginResponse: ["A89813D3"],
	LoginStableItems: ["C3F50DD1"],
	ServerAccountBeep: ["207D9580"],
	ServerSend: ["6DF365ED"]
};
