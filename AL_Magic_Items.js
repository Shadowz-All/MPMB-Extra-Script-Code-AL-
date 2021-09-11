/* This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets and builds off the code of many fantastic people before me. It would not exist without them.

===Import this file using the "Add Extra Materials" bookmark.
-KEEP IN MIND-
It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it). Additionally, due to the length of some descriptions, I recommend auto-sizing font & hiding the lines for multi-line fields. Otherwise, many of these items will run off the page.
*/

/*  Subject: Flavored Items from AL adventures
    Effect:	This script adds the flavored versions of standard magic items found in AL adventures to the MPMB sheet. They will all be listed as AL [item category] in the Magic Item selection, which will bring a pop up for individual items sorted by item name and then module. The main categories are as follows:
	Accessories (Belts, Bracers, Gauntlets, Gloves), Books (Books, Grimoires, Manuals, Tomes), Containers (Bags, Bottles, Bowls, Decanters, Haversacks, Holes, Jugs, Pouches, Quivers, Tankards), Outerwear (Capes, Cloaks, Mantles, Robes), Eyewear (Eyes, Glasses, Goggles), Footwear (Boots, Slippers), Figurines, Headwear (Caps, Circlets, Hats, Headbands, Helms), Instruments (Bardic, Chimes, Horns, Pipes (musical)), Light Sources (Candles and Lanterns mostly), Minerals (Gems, Stones, Orbs), Jewelry (Amulets, Brooches/Pins, Emblems, Medallions, Necklaces, Periapts, Scarabs. Talismans), Rings, Rods, and Wands. The Equipment category has everything else.
	
	For ease of coding & to cut down on the categories, all staffs are in the AL_Magic_Weapons file, regardless of whether you can use them to hit things or not. 
	
	This is not a complete list since I do not have every published adventure, but it's a start. If you do not see an item listed from a season marked complete, it should be because there was no flavor.*/
	
	//Things I have code for and don't have to buy: GSP02-1 to -3, CCC-6SWORDS, CCC-REAP-01, CCC-ST2-1, CCC-QCC2018-2
	
	//Complete: S0-S9, Guild Adept
	//In progress: S10 (Through 10-9), DC-POA, DRW, RMH  (finished all folders)
	
var iFileName = "AL Flavored Items.js";
RequiredSheetVersion(13);

// Define the source
SourceList.AL = {
	name : "AL Modules",
	abbreviation : "AL",
	group : "Adventurers League",
	url : "https://www.dmsguild.com/browse.php?filters=45470_0_0_0_0_0_0_0&src=fid45470",
	date : "Various"
};

SourceList.ALDMs9 = {  //Season 9 DM Rewards 
    name : "AL Season 9 DM Rewards",
    abbreviation : "ALDMs9",
    group : "Adventurers League",
    date : "2019/09/16"
};

SourceList["AL:SE"] = {
    name : "AL Special Events (Opens & Premieres)",
    abbreviation : "AL:SE",
    group : "Adventurers League",
    date : "Various"
};

SourceList["AL:RMH"] = {  //Mist Hunters Alternate Campaign
	name : "Mist Hunters",
	abbreviation : "AL:RMH",
	group : "Adventurers League",
	url : "https://www.dmsguild.com/browse.php?filters=45470_0_0_0_0_0_0_0&src=fid45470",
	date : "Various"
};



//AL flavored items
MagicItemsList["al accessories"] = {
		name : "AL Accessories",
		type : "wondrous item",
		allowDuplicates : true,
	choices : ["Belt of Dwarvenkind (DDEX2-4)","Belt of Fire Giant Strength (CCC-ALMOG-3 TALES3-1)","Belt of Fire Giant Strength (DDEP3)","Belt of Hill Giant Strength (CCC-SFBAY-2-3)","Belt of Stone Giant Strength (DDAL9-14)","Belt of Storm Giant Strength (DDAL6-3)","Bracers of Archery (DC-POA-HARM01-1)","Bracers of Archery (DDEP2)","Bracers of Archery (DDEX3-14)","Bracers of Archery (DDAL5-2)","Bracers of Archery (DDEP10-1)","Bracers of Defense (CCC-BMG-17 ELMW1-2)","Bracers of Defense (CCC-CIC-10)","Bracers of Defense (CCC-SQC-2-1)","Bracers of Defense (DDAL0-2C)","Bracers of Defense (DDAL4-14)","Bracers of Defense (DDAL-DRWEP02)","Emerald Kidgloves (CCC-BMG-10 HILL1-1)","Fat Markoth's Cummerbund (CCC-LINKS-1)","Gauntlets of Ogre Power (CCC-CIC-8)","Gauntlets of Ogre Power (CCC-ODFC1-1)","Gauntlets of Ogre Power (DDAL5-12)","Gloves of Swimming and Climbing (CCC-PRETZ-PLA1)","Gloves of Thievery (DDAL9-3)","The Vines of Avarice (CCC-ELF-3-2)","Welcomer's Gloves (CCC-FAD-1)"],
	"belt of dwarvenkind (ddex2-4)" : {
		name : "Belt of Dwarvenkind (DDEX2-4)",
		source : [["AL","S2"]],
		rarity : "rare",
		magicItemTable : "G",
		description: "This stout belt is gem-encrusted with a buckle made of polished stone and never gets dirty. While wearing this belt, your Con increases by 2 (to max 20), adv. on Cha (Persuasion) checks to interact with dwarves, adv. on saves vs. poison, resistance to poison damage, darkvision 60 ft, and fluent in Dwarvish. Each day at dawn, there is a 50% chance you grow a full beard or current beard becomes visibly thicker (if capable of growing one).",
		descriptionFull : "This stout belt is gem-encrusted with a buckle made of polished stone and never gets dirty. While wearing this belt, you gain the following benefits:\n \u2022 Your Constitution score increases by 2, to a maximum of 20.\n \u2022 You have advantage on Charisma (Persuasion) checks made to interact with dwarves.\n\nIn addition, while attuned to the belt, you have a 50% chance each day at dawn of growing a full beard if you're capable of growing one, or a visibly thicker beard if you already have one.\n\nIf you aren't a dwarf, you gain the following additional benefits while wearing the belt:\n \u2022 You have advantage on saving throws against poison, and you have resistance against poison damage.\n \u2022 You have darkvision out to a range of 60 feet.\n \u2022 You can speak, read, and write Dwarvish.",
		attunement : true,
		languageProfs : ["Dwarvish"],
		vision : [["Darkvision", 60]],
		savetxt : { adv_vs : ["poison"] },
		dmgres : ["Poison"],
		scores : [0, 0, 2, 0, 0, 0]
		},
	"belt of fire giant strength (ccc-almog-3 tales3-1)" : {
		name : "Belt of Fire Giant Strength (CCC-ALMOG-3 TALES3-1)",
		source : [["AL","CCC"]],
		rarity : "very rare",
		magicItemTable : "H",
		description : "This belt is made from plates of steel embossed with golden filigree connected by metal pins. A fire giant's face adorns the buckle. The giant appears to be having a hearty laugh as she wears an enormous smile on her face. While wearing this belt, your Strength score is set to 25 as long as it isn't already 25 or more.",
		attunement : true,
		scoresOverride : [25, 0, 0, 0, 0, 0]
		},
	"belt of fire giant strength (ddep3)" : {
		name : "Belt of Fire Giant Strength (DDEP3)",
		source : [["AL","S3"]],
		rarity : "very rare",
		magicItemTable : "H",
		description : "This wide belt is made of what appears to be supple, black leather studded with mithral. Closer examination reveals the grisly truth — it is made from the tanned hides of drow. While wearing this belt, your Strength score is set to 25 as long as it isn't already 25 or more.",
		attunement : true,
		scoresOverride : [25, 0, 0, 0, 0, 0]
		},
	"belt of hill giant strength (ccc-sfbay-2-3)" : {
		name : "Belt of Hill Giant Strength (CCC-SFBAY-2-3)",
		source : [["AL","CCC"]],		
		rarity : "rare",
		magicItemTable : "G",
		description : "This ungainly belt is made from links of iron wrapped in a foul smelling leather. The buckle is crudely fashioned of black iron etched in plain dwarven runes. While attuned, your strength score is set to 21 unless already 21 or more.",
		descriptionFull : "This ungainly belt is made from links of iron wrapped in a foul smelling leather. The buckle is crudely fashioned of black iron etched in plain, dwarven runes. While attuned, your strength score is set to 21 unless already 21 or higher.",
		scoresOverride : [21, 0, 0, 0, 0, 0]
		},
	"belt of stone giant strength (ddal9-14)" : {
		name : "Belt of Stone Giant Strength (DDAL9-14)",
		source : [["AL","S9"]],		
		rarity : "very rare",
		magicItemTable : "H",
		description : "This belt is made of iron plates riveted to a wide belt of burnished leather, and buckled with a series of straps gilt in polished steel. While worn, you can use an action to cause your voice to carry clearly for up to 300 feet until the end of your next turn. Your Strength score is 23 while wearing this belt, provided that it's not already 23 or higher.",
		action : [["action", "Stone Giant Belt (300ft Voice)"]],
		scoresOverride : [23, 0, 0, 0, 0, 0]
		},
	"belt of storm giant strength (ddal6-3)" : {
		name : "Belt of Storm Giant Strength (DDAL6-3)",
		source : [["AL","S6"]],
		rarity : "very rare",
		magicItemTable : "H",
		description : "The storm giant quintessent Dessa imbued this belt with her elemental strength. When the belt’s fantastic strength is used, lightning dances around the wearer and a warm desert wind blows in the area. While wearing this belt, your Strength score is set to 29 as long as it isn't already 29 or more.",
		attunement : true,
		scoresOverride : [29, 0, 0, 0, 0, 0]
		},
	"bracers of archery (dc-poa-harm01-1)" : {
		name : "Bracers of Archery (DC-POA-HARM01-1)",
		source : [["AL","S10"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "These bracers are made from dozens of overlapping watches, clocks, & time pieces. Each clock face ticks at a different speed & some even tick backwards. The wearer sees glimpses of their target’s immediate future, allowing for deadly precision. When you roll a critical hit, all the clocks hit 9:45 simultaneously, hands pointing towards your target. While wearing these bracers, you have proficiency with longbows & shortbows, & you gain a +2 bonus to dmg rolls on ranged atks made with such weapons.",
		descriptionFull : "These bracers are fashioned out of dozens of overlapping watches, clocks, and timepieces. Each clock face ticks at a different speed and some even tick backwards. The wearer is able to see glimpses of their target’s immediate future, allowing for more deadly precision. When the user rolls a critical hit, all of the clocks hit 9:45 simultaneously, their hands pointing towards the target of the attack. While wearing these bracers, you have proficiency with the longbow and shortbow, and you gain a +2 bonus to damage rolls on ranged attacks made with such weapons.",
		attunement : true,
		weaponProfs : [false, false, ["longbow", "shortbow"]],
		calcChanges : {
			atkCalc : [
				function (fields, v, output) {
					if (v.baseWeaponName == "shortbow" || v.baseWeaponName == "longbow") {
						output.extraDmg += 2;
					}
				},
				'I add +2 to the damage of attacks I make with shortbows and longbows.'
				],
			}
		},
	"bracers of archery (ddep2)" : {
		name : "Bracers of Archery (DDEP2)",
		source : [["AL","S2"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "A large smoking chunk of obsidian smolders in each of these thick brass bracers. They emit dim light in a 5-foot-radius around the wearer, but don't radiate heat. Any object used to conceal the bracers' light smolders & burns away. While wearing these bracers, you have proficiency with the longbow & shortbow, & you gain a +2 bonus to dmg rolls on ranged atks made with such weapons.",
		descriptionFull : "A large, smoking chunk of obsidian smolders in the center of each of these thick, brass bracers. The bracers emit dim light in a 5-foot-radius around the wearer, but do not radiate heat. Any object used to conceal the bracers's light, however, smolders and burns away. While wearing these bracers, you have proficiency with the longbow and shortbow, and you gain a +2 bonus to damage rolls on ranged attacks made with such weapons.",
		attunement : true,
		weaponProfs : [false, false, ["longbow", "shortbow"]],
		calcChanges : {
			atkCalc : [
				function (fields, v, output) {
					if (v.baseWeaponName == "shortbow" || v.baseWeaponName == "longbow") {
						output.extraDmg += 2;
					}
				},
				'I add +2 to the damage of attacks I make with shortbows and longbows.'
				],
			}
		},
	"bracers of archery (ddex3-14)" : {
		name : "Bracers of Archery (DDEX3-14)",
		source : [["AL","S3"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "Etched around these bracers are words in Elvish that read “Strike True.” While wearing these bracers, you have proficiency with the longbow and shortbow, and you gain a +2 bonus to damage rolls on ranged attacks made with such weapons.",
		attunement : true,
		weaponProfs : [false, false, ["longbow", "shortbow"]],
		calcChanges : {
			atkCalc : [
				function (fields, v, output) {
					if (v.baseWeaponName == "shortbow" || v.baseWeaponName == "longbow") {
						output.extraDmg += 2;
					}
				},
				'I add +2 to the damage of attacks I make with shortbows and longbows.'
				],
			}
		},
	"bracers of archery (ddal5-2)" : {
		name : "Bracers of Archery (DDAL5-2)",
		source : [["AL","S5"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "These bracers are bulky w/ hexagon designs that don't match any common racial or family style. The hexagons turn blue in cold and orange in heat. The bearer suffers no harm in temps from -20 ̊ F to 120 ̊ F. While wearing these bracers, you have proficiency w/ longbows and shortbows, and you gain a +2 bonus to dmg rolls on ranged atks made w/ such weapons.",
		descriptionFull : "These bracers are bulky with hexagon designs along them that do not match any common racial or family styling. In addition, the hexagons turn blue in the cold or a warm orange in heat. The bearer suffers no harm in temperatures as cold as -20 degrees Fahrenheit or as warm as 120 degrees Fahrenheit. While wearing these bracers, you have proficiency with the longbow and shortbow, and you gain a +2 bonus to damage rolls on ranged attacks made with such weapons.",
		attunement : true,
		savetxt : { immune : ["temps btwn -20 ̊ & 120 ̊ F"] },
		weaponProfs : [false, false, ["longbow", "shortbow"]],
		calcChanges : {
			atkCalc : [
				function (fields, v, output) {
					if (v.baseWeaponName == "shortbow" || v.baseWeaponName == "longbow") {
						output.extraDmg += 2;
					}
				},
				'I add +2 to the damage of attacks I make with shortbows and longbows.'
				],
			}
		},
	"bracers of archery (ddep10-1)" : {
		name : "Bracers of Archery (DDEP10-1)",
		source : [["AL","S10"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "These fur-lined, rust-colored leather cuffs are crafted in traditional Reghed style, w/ stylized pictographs of beasts stamped around the outer cuff. Used to stabilize the arm during archery & protect from scrapes & cuts, these bracers also magically provide warmth. The bearer suffers no harm in temps from -20 ̊ F to 120 ̊ F. While wearing these bracers, you have proficiency w/ longbows & shortbows, & you gain a +2 bonus to dmg rolls on ranged atks made w/ such weapons.",
		descriptionFull : "These fur-lined, rust-colored leather cuffs are crafted in traditional Reghed style, with stylized pictographs of beasts stamped around the outer cuff. Normally used to stabilize the arm during archery and protect from scrapes and cuts, these bracers also magically provide warmth to cold bodies. The wearer suffers no harm in temperatures as cold as -20 degrees Fahrenheit or as warm as 120 degrees Fahrenheit. While wearing these bracers, you have proficiency with the longbow and shortbow, and you gain a +2 bonus to damage rolls on ranged attacks made with such weapons.",
		attunement : true,
		savetxt : { immune : ["temps btwn -20 ̊ & 120 ̊ F"] },
		weaponProfs : [false, false, ["longbow", "shortbow"]],
		calcChanges : {
			atkCalc : [
				function (fields, v, output) {
					if (v.baseWeaponName == "shortbow" || v.baseWeaponName == "longbow") {
						output.extraDmg += 2;
					}
				},
				'I add +2 to the damage of attacks I make with shortbows and longbows.'
				],
			}
		},
	"bracers of defense (ccc-bmg-17 elmw1-2)" : {
		name : "Bracers of Defense (CCC-BMG-17 ELMW1-2)",
		source : [["AL","CCC"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "These bracers are two arm-sized tubes of faintly gleaming & intricately knotted gold wire. While attuned, you gain a +2 bonus to AC if you are wearing no armor & using no shield.",
		descriptionFull : "These bracers are two arm-sized tubes of faintly gleaming and intricately knotted gold wire. While wearing the bracers, you gain a +2 bonus to AC if you are wearing no armor and using no shield.",
		attunement : true,
		extraAC : [{
			name : "Bracers of Defense",
			mod : 2,
			magic : true,
			text : "I gain a +2 bonus to AC while I'm not wearing armor or using a shield.",
			stopeval : function (v) { return v.wearingArmor || v.usingShield; }
			}]
		},
	"bracers of defense (ccc-cic-10)" : {
		name : "Bracers of Defense (CCC-CIC-10)",
		source : [["AL","CCC"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "These bracers are embossed with the heraldry of the deJun family of Mulmaster: an apple & scroll over white & red chevrons. When attuned, you gain a +2 bonus to AC if you are wearing no armor & using no shield.",
		descriptionFull : "These bracers are embossed with the heraldry of the deJun family of Mulmaster: an apple and scroll over white and red chevrons. While wearing these bracers, you gain a +2 bonus to AC if you are wearing no armor and using no shield.",
		attunement : true,
		extraAC : [{
			name : "Bracers of Defense",
			mod : 2,
			magic : true,
			text : "I gain a +2 bonus to AC while I'm not wearing armor or using a shield.",
			stopeval : function (v) { return v.wearingArmor || v.usingShield; }
			}]
		},
	"bracers of defense (ccc-sqc-2-1)" : {
		name : "Bracers of Defense (CCC-SQC-2-1)",
		source : [["AL","CCC"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "While in possession of the item, the bearer speaks only in Haikus instead of regular sentences. When attuned, you gain a +2 bonus to AC if you are wearing no armor & using no shield.",
		descriptionFull : "While in possession of the item, the bearer feels enlightened and speaks only in Haikus instead of regular sentences. While wearing these bracers, you gain a +2 bonus to AC if you are wearing no armor and using no shield.",
		attunement : true,
		extraAC : [{
			name : "Bracers of Defense",
			mod : 2,
			magic : true,
			text : "I gain a +2 bonus to AC while I'm not wearing armor or using a shield.",
			stopeval : function (v) { return v.wearingArmor || v.usingShield; }
			}]
		},
	"bracers of defense (ddal0-2c)" : {
		name : "Bracers of Defense (DDAL0-2C)",
		source : [["AL","S0"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "Given as gifts to an honored guest of the elves of Cormanthor, these mithral bracers gleam brightly in any light. The fine elven filigree belies their power & any who attune to the bracers can understand & speak Elvish while wearing them. You also gain a +2 bonus to AC if you are wearing no armor & using no shield.",
		descriptionFull : "Given as gifts to an honored guest of the elves of Cormanthor, these mithral bracers gleam brightly in any light. The fine elven filigree belies their power and any who attune to the bracers can understand and speak Elvish while wearing them. While wearing these bracers, you gain a +2 bonus to AC if you are wearing no armor and using no shield.",
		languageProfs : ["Elvish"],
		attunement : true,
		extraAC : [{
			name : "Bracers of Defense",
			mod : 2,
			magic : true,
			text : "I gain a +2 bonus to AC while I'm not wearing armor or using a shield.",
			stopeval : function (v) { return v.wearingArmor || v.usingShield; }
			}]
		},
	"bracers of defense (ddal4-14)" : {
		name : "Bracers of Defense (DDAL4-14)",
		source : [["AL","S4"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "These leather bracers are stitched with a symbol of an open hand, bloodlessly pierced through the palm with a heart shaped hole. The bracers fill the wearer with the belief that that is love eternal, regardless of creed, nationality, or vital signs. While wearing these bracers, you gain a +2 bonus to AC if you are wearing no armor and using no shield.",
		attunement : true,
		extraAC : [{
			name : "Bracers of Defense",
			mod : 2,
			magic : true,
			text : "I gain a +2 bonus to AC while I'm not wearing armor or using a shield.",
			stopeval : function (v) { return v.wearingArmor || v.usingShield; }
			}]
		},
	"bracers of defense (ddal-drwep02)" : {
		name : "Bracers of Defense (DDAL-DRWEP02)",
		source : [["AL","DRW"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "These bracers take the form of red satin evening gloves, are incredibly soft, and surprisingly warm. Featuring detailed golden embroidery depicting the brutal slaughter of duergar rebels, these gloves grow warmer when within 100 ft of an elemental. While wearing them, you gain a +2 bonus to AC if you are wearing no armor and using no shield.",
		descriptionFull : "These bracers take the form of red satin evening gloves, and are incredibly soft and surprisingly warm. Featuring detailed golden embroidery depicting the brutal slaughter of duergar rebels, these gloves grow warmer when within 100 feet of any elemental. While wearing these bracers, you gain a +2 bonus to AC if you are wearing no armor and using no shield.",
		attunement : true,
		extraAC : [{
			name : "Bracers of Defense",
			mod : 2,
			magic : true,
			text : "I gain a +2 bonus to AC while I'm not wearing armor or using a shield.",
			stopeval : function (v) { return v.wearingArmor || v.usingShield; }
			}]
		},
	"emerald kidgloves (ccc-bmg-10 hill1-1)" : {
		name : "Emerald Kidgloves (Gloves of Thievery)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "These delicate, goatskin gloves are colored bright green & slip onto your hands effortlessly. While wearing them, you experience irresistible generosity, expressing compliments to those around you & spending coin for others w/o hesitation. These gloves don't turn invisible when worn, but shrink or grow to accommodate the wearer. While wearing them, you gain a +5 bonus to DEX (Sleight of Hand) checks & Dexterity checks to pick locks.",
		descriptionFull : "These delicate, goatskin gloves are colored with a bright green pigment and slip onto the wearer’s hands effortlessly. While wearing these gloves, the wearer experiences irresistible generosity, expressing compliments to those around them and spending coin for the benefit of others without hesitation. Unlike conventional gloves of thievery, these gloves do not turn invisible when worn, but shrink or grow to accommodate a small or medium wearer’s size. While wearing them, you gain a +5 bonus to Dexterity (Sleight of Hand) checks and Dexterity checks made to pick locks.",
		addMod : [{ type: "skill", field : "Sleight of Hand", mod : 5, text : "I gain a +5 bonus to Dexterity (Sleight of Hand) checks while wearing Gloves of Thievery." }]
	},
	"fat markoth's cummerbund (ccc-links-1)" : {
		name : "Fat Markoth's Cummerbund (Belt of Hill Giant Strength)",
		source : [["AL","CCC"]],		
		rarity : "rare",
		magicItemTable : "G",
		description : "Markoth – “Fat Mar” to those that didn’t truly know him – treasured this reinforced, velvety waistband above all else. He wore it every day but never fully grasped its benefits: while attuned, your strength becomes 21 and, once per day, you have adv on 1 save against exhaustion.",
		descriptionFull : "Markoth – “Fat Mar” to those that didn’t truly know him – treasured this reinforced, velvety waistband above all other possessions. He wore it every day in life but was never able to fully grasp its benefits despite being attuned to it: while attuned, the wearer’s strength becomes 21 unless already 21 or higher and, once per day, the wearer has advantage on one saving throw that might otherwise result in a level of exhaustion.",
		limfeaname : "Cummerbund (Adv. Exhaustion Save)",
		usages : 1,
		recovery : "dawn",
		scoresOverride : [21, 0, 0, 0, 0, 0]
		},
	"gauntlets of ogre power (ccc-cic-8)" : {
		name : "Gauntlets of Ogre Power (CCC-CIC-8)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "These gauntest are embossed with a Jolly Roger, the skull and crossbones. Your Strength score is 19 while you wear these gauntlets. They have no effect on you if your Strength is already 19 or higher without them.",
		descriptionFull : "These gauntest are embossed with a Jolly Roger, the skull and crossbones. Your Strength score is 19 while you wear these gauntlets. They have no effect on you if your Strength is already 19 or higher without them.",
		attunement : true,
		scoresOverride : [19, 0, 0, 0, 0, 0]
	},
	"gauntlets of ogre power (ccc-odfc1-1)" : {
		name : "Gauntlets of Ogre Power (CCC-ODFC1-1)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "Forged by Riswynn Rumnaheim for the Smithing Trials, these chunky dwarven-style gauntlets are made of adamantine & mithral with finely articulated fingers. They bear the Rumnaheim family’s Maker’s Mark. Your Strength score is 19 while you wear these gauntlets. They have no effect on you if your Strength is already 19 or higher without them.",
		descriptionFull : "Forged by Riswynn Rumnaheim for the Smithing Trials, these chunky dwarven style gauntlets are made of adamantine and mithral, but have finely articulated fingers. They bear the Rumnaheim family’s Maker’s Mark. Your Strength score is 19 while you wear these gauntlets. They have no effect on you if your Strength is already 19 or higher without them.",
		attunement : true,
		scoresOverride : [19, 0, 0, 0, 0, 0]
	},
	"gauntlets of ogre power (ddal5-12)" : {
		name : "Gauntlets of Ogre Power (DDAL5-12)",
		source : [["AL","S5"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "These sturdy leather gauntlets appear to be in pristine condition. Indeed, any nicks or tears in the material mend w/i 24 hours, and any blood, mud or other grime that soils the gauntlets quickly dries, falling away in fine flakes until the surface is again clean. Your Strength score is 19 while you wear these gauntlets. They have no effect on you if your Strength is already 19 or higher without them.",
		descriptionFull : "These sturdy leather gauntlets appear to be in pristine condition. Indeed, any nicks or tears in the material mend within twenty-four hours. Additionally, any blood, mud or other grime that soils the gauntlets quickly dries, falling away in fine flakes until the surface is again clean. Your Strength score is 19 while you wear these gauntlets. They have no effect on you if your Strength is already 19 or higher without them.",
		attunement : true,
		scoresOverride : [19, 0, 0, 0, 0, 0]
	},
	"gloves of swimming and climbing (ccc-pretz-pla1)" : { // contributions by AelarTheElfRogue
		name : "Gloves of Swimming and Climbing (CCC-PRETZ-PLA1)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "The rust colored “Gloves of Chakalakhan” are made of articulated boiled leather. When you strike an enemy while wearing them, you hear faint fragments of the ancient battle song of the hobgoblin war chief Chakalakhan: “GRAY! The steel we hold; As the tides of battle rise; BLACK! The rage we feel; For our enemies must die; RED! CHAKALAKHAN; Our Warchief forever fights.” While wearing these gloves, climbing & swimming don't cost extra mvmt, & you gain a +5 bonus to Str (Athletics) checks to climb or swim.",
		descriptionFull : "The rust colored Gloves of Chakalakhan are constructed of articulated boiled leather. While wearing these when you strike an enemy you hear faint fragments of the ancient battle song of the great hobgoblin war chief Chakalakhan:\n   “GRAY! The steel we hold\n   As the tides of battle rise\n   BLACK! The rage we feel\n   For our enemies must die\n   RED! CHAKALAKHAN\n   Our Warchief forever fights”\nWhile wearing these gloves, climbing and swimming don't cost you extra movement, and you gain a +5 bonus to Strength (Athletics) checks made to climb or swim.",
		attunement : true
	},
	"gloves of thievery (ddal9-3)" : {
		name : "Gloves of Thievery (DDAL9-3)",
		source : [["AL","S9"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "These gloves are made of exquisite red silk with gold & silver embroidery along the fingers, & can be invisible while worn. The fabric at the fingertips is very thin, granting you more sensitivity for delicate work. While wearing these gloves, you gain a +5 bonus to DEX (Sleight of Hand) checks & DEX checks made to pick locks.",
		descriptionFull : "These gloves are made of exquisite red silk with gold and silver embroidery along the fingers and can be invisible while worn. The fabric at the fingertips is very thin, granting the wearer more sensitivity for more delicate work. While wearing them, you gain a +5 bonus to Dexterity (Sleight of Hand) checks and Dexterity checks made to pick locks.",
		addMod : [{ type: "skill", field : "Sleight of Hand", mod : 5, text : "I gain a +5 bonus to Dexterity (Sleight of Hand) checks while wearing Gloves of Thievery." }]
	},
	"the vines of avarice (ccc-elf-3-2)" : {
		name : "The Vines of Avarice (Gloves of Thievery)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "These vines from the Cormanthor Forest can be wrapped around your hands as fingerless gloves, turning invisible when worn correctly. Whenever you contemplate vengeance, you see a vision of a grand hearth lying in ruins. The fabric at the fingertips is very thin, granting you more sensitivity for delicate work. While wearing the vines, you gain a +5 bonus to DEX (Sleight of Hand) checks & DEX checks made to pick locks.",
		descriptionFull : "These vines from the Cormanthor Forest can be wrapped around someone’s hands as a pair of fingerless gloves, turning invisible when worn correctly. They function as gloves of thievery. Whenever the wearer contemplates vengeance, they see a vision of a grand hearth lying in ruins. The fabric at the fingertips is very thin, granting the wearer more sensitivity for more delicate work. While wearing them, you gain a +5 bonus to Dexterity (Sleight of Hand) checks and Dexterity checks made to pick locks.",
		addMod : [{ type: "skill", field : "Sleight of Hand", mod : 5, text : "I gain a +5 bonus to Dexterity (Sleight of Hand) checks while wearing Gloves of Thievery." }]
	},
	"welcomer's gloves (ccc-fad-1)" : {
		name : "Welcomer's Gloves (Gloves of Thievery)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "These soft, black leather gloves have a small W embroidered in silver thread on their back & are invisible while worn. The fabric at the fingertips is very thin, granting you more sensitivity for delicate work. While wearing the gloves, you gain a +5 bonus to DEX (Sleight of Hand) checks & DEX checks made to pick locks.",
		descriptionFull : "These soft, black leather gloves have a small W embroidered in silver thread on their back and are invisible while worn. The fabric at the fingertips is very thin, granting the wearer more sensitivity for more delicate work. While wearing them, you gain a +5 bonus to Dexterity (Sleight of Hand) checks and Dexterity checks made to pick locks.",
		addMod : [{ type: "skill", field : "Sleight of Hand", mod : 5, text : "I gain a +5 bonus to Dexterity (Sleight of Hand) checks while wearing Gloves of Thievery." }]
	},
}

MagicItemsList["al books"] = {
		name : "AL Books",
		type : "wondrous item",
		allowDuplicates : true,
	choices : ["Enduring Spellbook (CCC-PRIORY-3)","Goodmunn's Book (DC-POA-MDV01)","Manual of Bodily Health (CCC-QCC-1)","Manual of Gainful Exercise (CCC-TRI-24)","Quaryl's Codex (DDAL0-2F)","Tome of Leadership and Influence (CCC-ROZK1-2)","Tome of Leadership and Influence (CCC-TRI-15)","Tome of Understanding (CCC-BMG-14 PHLAN1-2)","Tome of Understanding (DDAL5-19)"],
	"enduring spellbook (ccc-priory-3)" : {
		name : "Enduring Spellbook (CCC-PRIORY-3)",
		source : [["AL","CCC"]],
		rarity : "common",
		magicItemTable : "?",
		description : "This black-leather tome is bound with the image of an ashen clock burned into the cover. Every page is available for use. The hands of the clock show a different time whenever seen. The spellbook, along with anything written on its pages, can't be damaged by fire or immersion in water and doesn't deteriorate with age.",
		descriptionFull : "This tome is black-leather bound with the image of an ashen clock burned into the cover. Every page is available for use. The hands of the clock show a different time whenever seen. The spellbook, along with anything written on its pages, can't be damaged by fire or immersion in water. In addition, the spellbook doesn't deteriorate with age.",
		weight : 5
	},
	"goodmunn's book (dc-poa-mdv01)" : {
		name : "Goodmunn's Book (Enduring Spellbook)",
		source : [["AL","S10"]],
		rarity : "common",
		magicItemTable : "?",
		description : "This spellbook, along with anything written on its pages, can't be damaged by fire or immersion in water. In addition, the spellbook doesn't deteriorate with age. The book’s covers are made from tropical tree wood, wrapped in large, deep-green leaves and bound with twine-like jungle vine. Its spine gives off a fruitful aroma. While open, an illusory infestation of fruit grub crawls from its spine to linger about the tome’s cover. Most of the pages are blank but some contain the research notes of its former owner, O-Jonnih Goodmunn.",
		descriptionFull : "This spellbook, along with anything written on its pages, can't be damaged by fire or immersion in water. In addition, the spellbook doesn't deteriorate with age. The book’s covers are made from tropical tree wood, wrapped in large, deep-green leaves and bound with twine-like jungle vine. Its spine gives off a fruitful aroma. While open, an illusory infestation of fruit grub crawls from its spine to linger about the tome’s cover.\n   Most of its pages are empty. The first few pages contain writings and drawings that tell the story of its original owner, O-Jonnih, a devoted follower of Jannath (Chauntea). Drawings depict Goodmunn’s journey from Chult to the Icewind Dale, how the chwinga came to be in his company, his divine mission and the magics stones that would bring them back home.\n   Goodmunn’s last writings contain his last revelations about the chwinga: One- While chwinga have no language, he discovered that chanting, “CHWINGA” once meant, “Good, Hi”, twice meant, “Good, Bye” and three times meant, “HELP, PLEASE!”. Two- An effort to translate this chanting with Common tongue phonetics (it appears that O-Jonnih Goodmunn never completed this task, but some adventurers might).",
		weight : 5
	},
	"manual of bodily health (ccc-qcc-1)" : {
		name : "Manual of Bodily Health (CCC-QCC-1)",
		source : [["AL","CCC"]],
		rarity : "very rare",
		magicItemTable : "H",
		description : "This leather-bound tome smells of rich mahogany & contains health, fitness, & diet tips, & an impressive collection of recipes. The name “Montague” has been written on the inside front cover, likely indicating a previous owner, & its words are charged w/ magic. If you spend 48 hrs w/i 6 days studying the book & practicing its guidelines, your CON score & max go up by 2. The manual then loses its magic for 100 yrs.",
		descriptionFull : "This leather-bound tome smells of rich mahogany and contains health, fitness, and diet tips, as well as an impressive collection of varied recipes for every occasion. The name “Montague” has been written on the inside front cover, possibly indicating a previous owner. Its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book's contents and practicing its guidelines, your Constitution score increases by 2, as does your maximum for that score. The manual then loses its magic, but regains it in a century.",
		weight : 5,
		applyStatBonus : function(itemName, statName) {
			// a function for all the manuals/tomes
			if (!IsNotReset) return;
			initiateCurrentStats();
			var statIndx = AbilityScores.names.indexOf(statName);
			var alreadyAppliedBefore = CurrentStats.maximumsLinked[itemName];
			var applyChange = app.alert({
				nIcon : 2,
				nType : 2,
				nTitle : "Apply " + itemName + "?",
				cMsg : "Do you want to apply the +2 bonus to the " + statName + " score and maximum from the " + itemName + " permanently? This increase will stay even after you remove this magic item, but will not be applied if you select 'No', even if you keep the magic item selected.\n\n" + (alreadyAppliedBefore ? "It seems you have applied this item before. If you click 'No', you will be prompted to remove all ability score increases from " + itemName : "If you want to remove this ability score increase at a later time, just add the item again and you will be prompted to remove the ability score increase then.")
			});
			if (applyChange == 3) {
				if (alreadyAppliedBefore) {
					var removeAll = app.alert({
						nIcon : 2,
						nType : 2,
						nTitle : "Remove all previous uses of " + itemName + "?",
						cMsg : "Do you want to remove all the previous bonuses to " + statName + " gained from the " + itemName + "?"
					});
					if (removeAll == 3) return;
				} else {
					return;
				}
			}
			var baseAdd = [0,0,0,0,0,0];
			baseAdd[statIndx] = 2;
			if (alreadyAppliedBefore) {
				baseAdd = [].concat(CurrentStats.maximumsLinked[itemName]);
				// remove the old version
				processStats(false, "magic", itemName, baseAdd, false, false, true);
				if (removeAll) {
					// also remove the maximum
					processStats(false, "magic", itemName, baseAdd, false, "maximums");
					return;
				}
				baseAdd[statIndx] += 2;
			}
			processStats(true, "magic", itemName, baseAdd, false, false, true);
			var maxAdd = [0,0,0,0,0,0];
			maxAdd[statIndx] = 20 + baseAdd[statIndx];
			processStats(true, "magic", itemName, maxAdd, false, "maximums");
		},
		eval : function() {
			MagicItemsList["manual of bodily health"].applyStatBonus("Manual of Bodily Health", "Constitution");
		}
	},
	"manual of gainful exercise (ccc-tri-24)" : {
		name : "Manual of Gainful Exercise (CCC-TRI-24)",
		source : [["AL","CCC"]],
		rarity : "very rare",
		magicItemTable : "H",
		description : "This leather book is emblazoned w/ a crimson red chess piece: the knight. The inside has hundreds of training regimens for warfare & self-defense, ingraining some into your mind & muscles as the book's magic is used. If you spend 48 hrs w/i 6 days studying the book & practicing its guidelines, your STR score & max increase by 2. The manual then loses its magic for 100 yrs.",
		descriptionFull : "This leather-bound book is emblazoned with a crimson red chess piece, the knight. The inside describes hundreds of training regiments for warfare and self-defense, ingraining some of them into your mind and muscles as the magic is used.\n   This book describes fitness exercises, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book's contents and practicing its guidelines, your Strength score increases by 2, as does your maximum for that score. The manual then loses its magic, but regains it in a century.",
		weight : 5,
		eval : function() {
			MagicItemsList["manual of bodily health"].applyStatBonus("Manual of Gainful Exercise", "Strength");
		}
	},
	"quaryl's codex (ddal0-2f)" : {
		name : "Quaryl's Codex (Tome of the Stilled Tongue)",
		source : [["AL","S0"]],
		rarity : "legendary",
		magicItemTable : "I",
		description : "This thick tome contains pages of thin, hammered copper, has covers of slate, & is held shut by a severed elven tongue. Occasionally, the attuned user of this book finds messages scrawled by someone claiming to be Netherese; this ghostly writer refers to itself as “the warlock” & frequently opines on the power of the 1 true god of magic: Mystryl. You can use this tome as a spellbook & arcane focus. Once/dawn while holding it, you can cast a spell you've written in it as a bonus action, w/o using a spell slot, verbal or somatic components. Removing the tongue on the cover erases all spells within.",
		descriptionLong : "This thick tome contains pages of thin, hammered copper and has thin covers of slate. It is held shut by a severed elven tongue. Occasionally, the attuned user of this spellbook finds messages that have been scrawled by someone claiming to be Netherese; this ghostly writer refers to itself simply as “the warlock” and frequently opines on the power of the one true god of magic: Mystryl. The first few pages are filled with indecipherable scrawls. The remaining pages are blank and pristine. You can use it as a spellbook and arcane focus. Once per dawn while holding it, you can use a bonus action to cast a spell written in the tome, without expending a spell slot or using any verbal or somatic components. While attuned to the book, you can remove the tongue from the book's cover, permanently erasing all spells within.",
		descriptionFull : "This thick tome contains pages of thin, hammered copper and has thin covers of slate. It is held shut by a severed elven tongue. Occasionally, the attuned user of this spellbook finds messages that have been scrawled by someone claiming to be Netherese; this ghostly writer refers to itself simply as “the warlock” and frequently opines on the power of the one true god of magic: Mystryl.\n   Five of these tomes exist, and it's unknown which one is the original. The grisly cover decoration on the first tome of the stilled tongue once belonged to a treacherous former servant of the lich-god Vecna, keeper of secrets. The tongues pinned to the covers of the four copies came from other spellcasters who crossed Vecna. The first few pages of each tome are filled with indecipherable scrawls. The remaining pages are blank and pristine.\n   If you can attune to this item, you can use it as a spellbook and an arcane focus. In addition, while holding the tome, you can use a bonus action to cast a spell you have written in this tome, without expending a spell slot or using any verbal or somatic components. Once used, this property of the tome can't be used again until the next dawn.\n   While attuned to the book, you can remove the tongue from the book's cover. If you do so, all spells written in the book are permanently erased.\n   Vecna watches anyone using this tome. He can also write cryptic messages in the book. These messages appear at midnight and fade away after they are read.",
		attunement : true,
		weight : 5,
		prerequisite : "Requires attunement by a wizard",
		prereqeval : function(v) { return classes.known.wizard ? true : false; },
		limfeaname : "Tome of the Stilled Tongue",
		action : [["bonus action", ""]],
		usages : 1,
		recovery : "dawn"
		},
	"tome of leadership and influence (ccc-rozk1-2)" : {
		name : "Tome of Leadership and Influence (CCC-ROZK1-2)",
		source : [["AL","CCC"]],
		type : "wondrous item",
		rarity : "very rare",
		magicItemTable : "H",
		description : "The red leather that covers this tome is embossed with a smiling man with a 3rd eye. The book contains guidelines for influencing & charming others & its words are charged with magic. If you spend 48 hrs within 6 days studying its contents & practicing its guidelines, your CHA score & max increase by 2. The tome then loses its magic for 100 yrs.",
		descriptionFull : "The red leather that covers this tome is embossed with a smiling man with a third eye.\n   This book contains guidelines for influencing and charming others, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book's contents and practicing its guidelines, your Charisma score increases by 2, as does your maximum for that score. The manual then loses its magic, but regains it in a century.",
		weight : 5,
		eval : function() {
			MagicItemsList["manual of bodily health"].applyStatBonus("Tome of Leadership and Influence", "Charisma");
		}
	},
	"tome of leadership and influence (ccc-tri-15)" : {
		name : "Tome of Leadership and Influence (CCC-TRI-15)",
		source : [["AL","CCC"]],
		type : "wondrous item",
		rarity : "very rare",
		magicItemTable : "H",
		description : "This purple leather tome has 4 mind flayer tentacles embedded in the cover. When you read it, you hear someone else’s voice reading in your head. The book contains guidelines for influencing & charming others & is charged w/ magic. If you spend 48 hrs w/i 6 days studying it & practicing its guidelines, your CHA score & max increase by 2. The tome then loses its magic for 100 yrs.",
		descriptionFull : "This purple leather tome has 4 mind flayer tentacles embedded in the cover. When you read the book you hear someone else’s voice reading it to you in your head.\n   This book contains guidelines for influencing and charming others, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book's contents and practicing its guidelines, your Charisma score increases by 2, as does your maximum for that score. The manual then loses its magic, but regains it in a century.",
		weight : 5,
		eval : function() {
			MagicItemsList["manual of bodily health"].applyStatBonus("Tome of Leadership and Influence", "Charisma");
		}
	},
	"tome of understanding (ccc-bmg-14 phlan1-2)" : {
		name : "Tome of Understanding (CCC-BMG-14 PHLAN1-2)",
		source : [["AL","CCC"]],
		rarity : "very rare",
		magicItemTable : "H",
		description : "These parchments contain alien formula that can augment even the greatest minds. As each page is read, it dissolves into raw elemental essence. If you spend 48 hrs w/i 6 days studying the tome, it's destroyed for 100 yrs & your Wisdom score & max go up by 2. As an action you can detect creatures afflicted by the Chaos Phage (or other slaadi poisoning) within 60 ft or remove these afflictions by touching the creature.",
		descriptionFull : "These parchments contain alien formula that would augment even the greatest minds. As each page is read, it dissolves into raw elemental essence. You must expend 6 days to read the tome of understanding, after which the tome is destroyed and you increase your Wisdom score by 2. In addition, as an action you automatically and immediately detect creatures afflicted by the Chaos Phage (or other slaadi poisoning) within 60 ft of your person. As an action, you can remove these afflictions by touching the creature.\n   This book contains intuition and insight exercises, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book's contents and practicing its guidelines, your Wisdom score increases by 2, as does your maximum for that score. The manual then loses its magic, but regains it in a century.",
		weight : 5,
		action : [["action", "Tome of Understanding (Sense/Cure Chaos Phage)"]],
		eval : function() {
			MagicItemsList["manual of bodily health"].applyStatBonus("Tome of Understanding", "Wisdom");
		}
	},
	"tome of understanding (ddal5-19)" : {
		name : "Tome of Understanding (DDAL5-19)",
		source : [["AL","S5"]],
		rarity : "very rare",
		magicItemTable : "H",
		description : "The cover of this iron-bound book is scribed w/ many swirling tentacles. Anyone carrying the book is always aware of eyes from a distant realm following them. It contains intuition & insight exercises & its words are charged w/ magic. If you spend 48 hrs w/i 6 days studying the book & practicing its guidelines, your WIS score & max go up by 2. The tome then loses its magic for 100 yrs.",
		descriptionFull : "The cover of this iron-bound book is scribed with many swirling tentacles. A character carrying the book is always aware of eyes from a distant realm following them. This book contains intuition and insight exercises, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book's contents and practicing its guidelines, your Wisdom score increases by 2, as does your maximum for that score. The manual then loses its magic, but regains it in a century.",
		weight : 5,
		eval : function() {
			MagicItemsList["manual of bodily health"].applyStatBonus("Tome of Understanding", "Wisdom");
		}
	},
}

MagicItemsList["al containers"] = {
		name : "AL Containers",
		type : "wondrous item",
		allowDuplicates : true,
	choices : ["Alchemy Jug (DDEX3-8)","Bag of Devouring (CCC-FC3-1-3)","Bag of Devouring (CCC-TRI-22)","Bag of Holding (CCC-GARY-5)","Bag of Holding (CCC-GLIP-1-2)","Bag of Holding (CCC-WWC-3)","Bag of Tricks, Rust (CCC-SQC-3-3)","Bag of Tricks, Rust (DDEP8-1)","Bowl of Commanding Water Elementals (CCC-YLRA1-2)","Bowl of Commanding Water Elementals (DDAL9-7)","Decanter of Endless Water (CCC-DES-4)","Eversmoking Bottle (DDEP7-1)","Geyser Figurine (CCC-CIC-9)","Hag's Breath, Eversmoking Bottle (CCC-GSP-FEAR1-1)","Heward's Handy Haversack (CCC-AN-3)","Heward's Handy Haversack (CCC-SKULL1-1)","Heward's Handy Haversack (DDAL9-9)","Mix #5, Eversmoking Bottle (DC-POA-LEGIT-SV-01)","Mother Pqwirli’s Pod Pouch (CCC-ELO-2)","Portable Hole (CCC-ODFC2-2)","Portable Hole (CCC-TRI-7)","Portable Hole (DDAL10-9)","Quiver of Ehlonna (CCC-HATMS1-1)","Quiver of Ehlonna (CCC-SALT1-3)","Quiver of Ehlonna (CCC-TRI-12 OLMA1-2)","Tankard of Sobriety (CCC-3MAGS-ONE)","Tankard of Sobriety (CCC-ELF-2)","Tankard of Sobriety (CCC-ODFC3-3)","Tankard of Sobriety (CCC-PRIORY-1)"],
	"alchemy jug (ddex3-8)" : {
		name : "Alchemy Jug (DDEX3-8)",
		source : [["AL","S3"]],
		rarity : "uncommon",
		magicItemTable : "B",
		description : "This jug is made of a thin metal strips bolted together. It is covered in dwarven runes in the form of night sky constellations. As an action, command the jug to produce liquid; or an action to uncork it and pour 2 gal/min. After producing, it only makes the same up to its max, until next dawn. Oil (1 qt), acid (8 fl oz), basic poison (1/2 fl oz), beer (4 gal), honey/wine (1 gal), fresh water (8 gal), mayonnaise/vinegar (2 gal), salt water (12 gal).",
		weight : 12,
		descriptionLong : "This jug is made of a thin metal strips bolted together. It is covered in dwarven runes in the form of night sky constellations. As an action, the jug can be commanded to hold a chosen liquid. With another action, I can uncork the jug and pour the liquid out at 2 gallons per minute. Once commanded to produce a liquid, it can't produce a different one or more than the maximum of one, until the next dawn.\rLiquids (with maximum): acid (8 fl. oz.), basic poison (1/2 fl. oz.), beer (4 gallons), honey (1 gallon), mayonnaise (2 gallons), oil (1 quart), vinegar (2 gallons), fresh water (8 gallons), salt water (12 gallons), wine (1 gallon).",
		descriptionFull : "This jug is made of a thin metal strips bolted together. It is covered in dwarven runes in the form of night sky constellations. The jug appears to be able to hold a gallon of liquid and weighs 12 pounds whether full or empty. Sloshing sounds can be heard from within the jug when it is shaken, even if the jug is empty." + "\n   " + "You can use an action and name one liquid from the table below to cause the jug to produce the chosen liquid. Afterward, you can uncork the jug as an action and pour that liquid out, up to 2 gallons per minute. The maximum amount of liquid the jug can produce depends on the liquid you named." + "\n   " + "Once the jug starts producing a liquid, it can't produce a different one, or more of one that has reached its maximum, until the next dawn.\n\n" + toUni("Max\tLiquid\t\tMax\tLiquid") + "\n8 ounces\tAcid\t\t1 quart\tOil\n1/2 ounce\tBasic poison\t2 gallons\tVinegar\n4 gallons\tBeer\t\t8 gallons\tWater, fresh\n1 gallon\tHoney\t\t12 gallons\tWater, salt\n2 gallons\tMayonnaise\t1 gallon\tWine"
		},
	"bag of devouring (ccc-fc3-1-3)" : {
		name : "Bag of Devouring (CCC-FC3-1-3)",
		source : [["AL","CCC"]],
		rarity : "very rare",
		magicItemTable : "D",
		description : "Ambledragon said this bag would help cover up mistakes & deal w/ challenging individuals. You wonder how many “mistakes” he's used it on... This bag is a feeding orifice for an extradimensional creature. It devours all edible matter placed inside & spits objects to random plane once/day. Creatures partially inside pulled in 50% of the time. Action to escape (Str DC 15) or pull another out (Str DC 20). Creatures starting turn inside are devoured.",
		descriptionLong : "Ambledragon said this bag would help cover up mistakes & deal with challenging individuals. You wonder how many “mistakes” he's used it on in the past... Resembling a Bag of Holding, this bag is a feeding orifice for an extradimensional creature & devours all vegetable & animal matter placed inside. Creatures partially inside get pulled in 50% of the time. Action to escape (Str DC 15) or pull another out (Str DC 20). Creatures starting their turn inside are devoured, their body destroyed. Up to 1 cu ft of objects can be stored inside, but once per day they're swallowed & spat out on a random plane. If pierced or torn, it's destroyed & its content lost.",
		descriptionFull : "Ambledragon said this bag would help cover up mistakes and deal with challenging individuals. You wonder how many “mistakes” he has used it on in the past...\n   This bag superficially resembles a bag of holding but is a feeding orifice for a gigantic extradimensional creature. Turning the bag inside out closes the orifice.\n   The extradimensional creature attached to the bag can sense whatever is placed inside the bag. Animal or vegetable matter placed wholly in the bag is devoured and lost forever. When part of a living creature is placed in the bag, as happens when someone reaches inside it, there is a 50% chance that the creature is pulled inside the bag. A creature inside the bag can use its action to try to escape with a successful DC 15 Strength check. Another creature can use its action to reach into the bag to pull a creature out, doing so with a successful DC 20 Strength check (provided it isn't pulled inside the bag first). Any creature that starts its turn inside the bag is devoured, its body destroyed.\n   Inanimate objects can be stored in the bag, which can hold a cubic foot of such material. However, once each day, the bag swallows any objects inside it and spits them out into another plane of existence. The DM determines the time and plane.\n   If the bag is pierced or torn, it is destroyed, and anything contained within it is transported to a random location on the Astral Plane.",
		weight : 0.5
	},
	"bag of devouring (ccc-tri-22)" : {
		name : "Bag of Devouring (CCC-TRI-22)",
		source : [["AL","CCC"]],
		rarity : "very rare",
		magicItemTable : "D",
		description : "This bag is covered in runes & bears a stone giant's smiling face. It vibrates when within 120 ft of its favorite organic material: Dragon. The bag is a feeding orifice for an extradimensional creature. It devours all edible matter placed inside & spits objects to random plane once/day. Creatures partially inside pulled in 50% of the time. Action to escape (Str DC 15) or pull another out (Str DC 20). Creatures starting turn inside are devoured.",
		descriptionLong : "The bag is covered in giant runes and bears the smiling face of a stone giant. It seems to vibrate when within 120 ft of its favorite organic material: Dragon. Resembling a Bag of Holding, this bag is a feeding orifice for an extradimensional creature & devours all vegetable & animal matter placed inside. Creatures partially inside get pulled in 50% of the time. Action to escape (Str DC 15) or pull another out (Str DC 20). Creatures starting their turn inside are devoured, their body destroyed. Up to 1 cu ft of objects can be stored inside, but once per day they're swallowed & spat out on a random plane. If pierced or torn, it's destroyed & its content lost.",
		descriptionFull : "The bag is covered in giant runes and bears the smiling face of a stone giant. The bag seems to vibrate when it is within 120 ft of its favorite organic material: Dragon.\n   This bag superficially resembles a bag of holding but is a feeding orifice for a gigantic extradimensional creature. Turning the bag inside out closes the orifice.\n   The extradimensional creature attached to the bag can sense whatever is placed inside the bag. Animal or vegetable matter placed wholly in the bag is devoured and lost forever. When part of a living creature is placed in the bag, as happens when someone reaches inside it, there is a 50% chance that the creature is pulled inside the bag. A creature inside the bag can use its action to try to escape with a successful DC 15 Strength check. Another creature can use its action to reach into the bag to pull a creature out, doing so with a successful DC 20 Strength check (provided it isn't pulled inside the bag first). Any creature that starts its turn inside the bag is devoured, its body destroyed.\n   Inanimate objects can be stored in the bag, which can hold a cubic foot of such material. However, once each day, the bag swallows any objects inside it and spits them out into another plane of existence. The DM determines the time and plane.\n   If the bag is pierced or torn, it is destroyed, and anything contained within it is transported to a random location on the Astral Plane.",
		weight : 0.5
	},
	"bag of holding (ccc-gary-5)" : {
		name : "Bag of Holding (CCC-GARY-5)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : ["A", "B"],
		description : "This plain burlap sack is embroidered with the rune for infinity at its base. It's 2 ft in diameter, 4 ft deep, & 15 lb regardless of contents. It holds 500 lbs, & no more than a volume of 64 cu ft. Action to retrieve item. If overloaded, pierced, or torn, it's destroyed & its contents go to the Astral plane. If turned inside out, contents spill forth.",
		descriptionLong : "This plain burlap sack is embroidered with the rune for infinity at its base. The bag is 2 ft in diameter at the mouth, 4 ft deep, & 15 lb regardless of contents. It can hold up to 500 lb, not exceeding a volume of 64 cu ft. Retrieving an item requires an action. If overloaded, pierced, or torn, it's destroyed, leaving its contents in the Astral plane. If turned inside out, all its contents spill forth unharmed. Creatures inside the bag can breath for 10 min divided by the # of creatures (minimum 1 min), after which they suffocate. Placing the bag in another extradimensional space destroys both & opens a gate to the Astral Plane.",
		descriptionFull : "This plain burlap sack is embroidered with the rune for infinity at its base.\n   The bag has an interior space considerably larger than its outside dimensions, roughly 2 feet in diameter at the mouth and 4 feet deep. The bag can hold up to 500 pounds, not exceeding a volume of 64 cubic feet. The bag weighs 15 pounds, regardless of its contents. Retrieving an item from the bag requires an action.\n   If the bag is overloaded, pierced, or torn, it ruptures and is destroyed, and its contents are scattered in the Astral Plane. If the bag is turned inside out, its contents spill forth, unharmed, but the bag must be put right before it can be used again. Breathing creatures inside the bag can survive up to a number of minutes equal to 10 divided by the number of creatures (minimum 1 minute), after which time they begin to suffocate.\n   Placing a bag of holding inside an extradimensional space created by a Heward's handy haversack, portable hole, or similar item instantly destroys both items and opens a gate to the Astral Plane. The gate originates where the one item was placed inside the other. Any creature within 10 feet of the gate is sucked through it to a random location on the Astral Plane. The gate then closes. The gate is one-way only and can't be reopened.",
		weight : 15,
		action : [["action", "Bag of Holding (retrieve item)"]]
	},
	"bag of holding (ccc-glip-1-2)" : {
		name : "Bag of Holding (CCC-GLIP-1-2)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : ["A", "B"],
		description : "This burlap sack is unremarkable in every way until its properties are revealed. It's 2 ft in diameter, 4 ft deep, & 15 lb regardless of contents. It holds 500 lbs, & no more than a volume of 64 cu ft. Action to retrieve item. If overloaded, pierced, or torn, it's destroyed & its contents go to the Astral plane. If turned inside out, contents spill forth.",
		descriptionLong : "This burlap sack is unremarkable in every way until its properties are revealed. The bag is 2 ft in diameter at the mouth, 4 ft deep, & 15 lb regardless of contents. It can hold up to 500 lb, not exceeding a volume of 64 cu ft. Retrieving an item requires an action. If overloaded, pierced, or torn, it's destroyed, leaving its contents in the Astral plane. If turned inside out, all its contents spill forth unharmed. Creatures inside the bag can breath for 10 min divided by the # of creatures (minimum 1 min), after which they suffocate. Placing the bag in another extradimensional space destroys both & opens a gate to the Astral Plane.",
		descriptionFull : "This burlap sack is in every regard unremarkable until its properties are revealed.\n   The bag has an interior space considerably larger than its outside dimensions, roughly 2 feet in diameter at the mouth and 4 feet deep. The bag can hold up to 500 pounds, not exceeding a volume of 64 cubic feet. The bag weighs 15 pounds, regardless of its contents. Retrieving an item from the bag requires an action.\n   If the bag is overloaded, pierced, or torn, it ruptures and is destroyed, and its contents are scattered in the Astral Plane. If the bag is turned inside out, its contents spill forth, unharmed, but the bag must be put right before it can be used again. Breathing creatures inside the bag can survive up to a number of minutes equal to 10 divided by the number of creatures (minimum 1 minute), after which time they begin to suffocate.\n   Placing a bag of holding inside an extradimensional space created by a Heward's handy haversack, portable hole, or similar item instantly destroys both items and opens a gate to the Astral Plane. The gate originates where the one item was placed inside the other. Any creature within 10 feet of the gate is sucked through it to a random location on the Astral Plane. The gate then closes. The gate is one-way only and can't be reopened.",
		weight : 15,
		action : [["action", "Bag of Holding (retrieve item)"]]
	},
	"bag of holding (ccc-wwc-3)" : {
		name : "Bag of Holding (CCC-WWC-3)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : ["A", "B"],
		description : "This worn bag is made from unusual black leather. Its drawstrings are woven from long strands of white hair. It's 2 ft in diameter, 4 ft deep, & 15 lb regardless of contents. It holds 500 lbs, & no more than a volume of 64 cu ft. Action to retrieve item. If overloaded, pierced, or torn, it's destroyed & its contents go to the Astral plane. If turned inside out, contents spill forth.",
		descriptionLong : "This worn bag is made from unusual black leather. Its drawstrings are woven from long strands of white hair. The bag is 2 ft in diameter at the mouth, 4 ft deep, & 15 lb regardless of contents. It can hold up to 500 lb, not exceeding a volume of 64 cu ft. Retrieving an item requires an action. If overloaded, pierced, or torn, it's destroyed, leaving its contents in the Astral plane. If turned inside out, all its contents spill forth unharmed. Creatures inside the bag can breath for 10 min divided by the # of creatures (minimum 1 min), after which they suffocate. Placing the bag in another extradimensional space destroys both & opens a gate to the Astral Plane.",
		descriptionFull : "This worn bag is made from unusual black leather. Its drawstrings seem to be woven from many long strands of white hair.\n   The bag has an interior space considerably larger than its outside dimensions, roughly 2 feet in diameter at the mouth and 4 feet deep. The bag can hold up to 500 pounds, not exceeding a volume of 64 cubic feet. The bag weighs 15 pounds, regardless of its contents. Retrieving an item from the bag requires an action.\n   If the bag is overloaded, pierced, or torn, it ruptures and is destroyed, and its contents are scattered in the Astral Plane. If the bag is turned inside out, its contents spill forth, unharmed, but the bag must be put right before it can be used again. Breathing creatures inside the bag can survive up to a number of minutes equal to 10 divided by the number of creatures (minimum 1 minute), after which time they begin to suffocate.\n   Placing a bag of holding inside an extradimensional space created by a Heward's handy haversack, portable hole, or similar item instantly destroys both items and opens a gate to the Astral Plane. The gate originates where the one item was placed inside the other. Any creature within 10 feet of the gate is sucked through it to a random location on the Astral Plane. The gate then closes. The gate is one-way only and can't be reopened.",
		weight : 15,
		action : [["action", "Bag of Holding (retrieve item)"]]
	},
	"bag of tricks, rust (ccc-sqc-3-3)" : {
		name: "Bag of Tricks, Rust (CCC-SQC-3-3)",
		source : [["AL","CCC"]],
		rarity: "uncommon",
		magicItemTable : "F",
		description: "“Bert’s Bag of Pranks” looks like an alchemical pouch & has a pungent smell. Creatures pulled from the bag will sniff at it until given orders, confused by their unnatural state. As an action, 3 times/dawn, you can pull an object from this bag and throw it 20 ft. It transforms into a random creature when it lands (d8): 1-rat, 2-owl, 3-mastiff, 4-goat, 5-giant goat, 6-giant boar, 7-lion, 8-brown bear. It follows your commands, acts on your turn, and vanishes at dawn/if reduced to 0 HP.",
		descriptionLong: "“Bert’s Bag of Pranks” looks like an alchemical pouch & has the pungent smell of a workshop. Creatures pulled from the bag will sniff at it until given orders, confused by their unnatural state. As an action, you can pull a fuzzy object from this bag and throw it 20 ft. It transforms into a creature when it lands, determined randomly (d8): 1-rat, 2-owl, 3-mastiff, 4-goat, 5-giant goat, 6-giant boar, 7-lion, 8-brown bear. The creature is friendly, acts on your turn, and vanishes at the next dawn or when it is reduced to 0 HP. As a bonus action, you can command it how to move and what action to take on its next turn, or give it general orders (e.g. attack your enemies). Without orders, it acts as it normally would. Once three fuzzy objects have been pulled from the bag, it can't be used again until the next dawn.",
		descriptionFull: "“Bert’s Bag of Pranks” looks like an alchemical pouch and has the pungent smell of an alchemists’ workshop. Creatures pulled from the bag will continually sniff at it then look at its owner, confused by their unnatural state, until given orders.\n   Reaching inside the bag reveals the presence of a small, fuzzy object. The bag weighs \u00BD pound. You can use an action to pull the fuzzy object from the bag and throw it up to 20 feet. When the object lands, it transforms into a creature you determine by rolling a d8 and consulting the table. The creature vanishes at the next dawn or when it is reduced to 0 hit points.\n   The creature is friendly to you and your companions, and it acts on your turn. You can use a bonus action to command how the creature moves and what action it takes on its next turn, or to give it general orders, such as to attack your enemies. In the absence of such orders, the creature acts in a fashion appropriate to its nature.\n   Once three fuzzy objects have been pulled from the bag, the bag can't be used again until the next dawn.\n\n" + toUni("d8\tCreature") + "\n 1\tRat\n 2\tOwl\n 3\tMastiff\n 4\tGoat\n 5\tGiant goat\n 6\tGiant boar\n 7\tLion\n 8\tBrown bear",
		weight: 0.5,
		action : [["action", " (pull)"], ["bonus action", " (command)"]],
		limfeaname : "Rust Bag of Tricks",
		usages : 3,
		recovery : "dawn",
		},
	"bag of tricks, rust (ddep8-1)" : {
		name: "Bag of Tricks, Rust (DDEP8-1)",
		source : [["AL","S8"]],
		rarity: "uncommon",
		magicItemTable : "F",
		description: "This non-descript, rust-colored bag is covered with patches, each sewn on by a different hand. When the bag is opened, a small puff of dust and a pair of moths fly out. As an action, 3 times/dawn, you can pull an object from this bag and throw it 20 ft. It transforms into a random creature when it lands (d8): 1-rat, 2-owl, 3-mastiff, 4-goat, 5-giant goat, 6-giant boar, 7-lion, 8-brown bear. It follows your commands, acts on your turn, and vanishes at dawn/if reduced to 0 HP.",
		descriptionLong: "This non-descript, rust-colored bag is covered with patches, each sewn on by a different hand. When the bag is opened, a small puff of dust and a pair of moths fly out. As an action, you can pull a fuzzy object from this bag and throw it 20 ft. It transforms into a creature when it lands, determined randomly (d8): 1-rat, 2-owl, 3-mastiff, 4-goat, 5-giant goat, 6-giant boar, 7-lion, 8-brown bear. The creature is friendly, acts on your turn, and vanishes at the next dawn or when it is reduced to 0 HP. As a bonus action, you can command it how to move and what action to take on its next turn, or give it general orders (e.g. attack your enemies). Without orders, it acts as it normally would. Once three fuzzy objects have been pulled from the bag, it can't be used again until the next dawn.",
		descriptionFull: "This non-descript, rust-colored bag is covered with patches, each sewn on by a different hand. When the bag is opened, a small puff of dust and a pair of moths fly out. Reaching inside the bag reveals the presence of a small, fuzzy object. The bag weighs \u00BD pound.\n   You can use an action to pull the fuzzy object from the bag and throw it up to 20 feet. When the object lands, it transforms into a creature you determine by rolling a d8 and consulting the table. The creature vanishes at the next dawn or when it is reduced to 0 hit points.\n   The creature is friendly to you and your companions, and it acts on your turn. You can use a bonus action to command how the creature moves and what action it takes on its next turn, or to give it general orders, such as to attack your enemies. In the absence of such orders, the creature acts in a fashion appropriate to its nature.\n   Once three fuzzy objects have been pulled from the bag, the bag can't be used again until the next dawn.\n\n" + toUni("d8\tCreature") + "\n 1\tRat\n 2\tOwl\n 3\tMastiff\n 4\tGoat\n 5\tGiant goat\n 6\tGiant boar\n 7\tLion\n 8\tBrown bear",
		weight: 0.5,
		action : [["action", " (pull)"], ["bonus action", " (command)"]],
		limfeaname : "Rust Bag of Tricks",
		usages : 3,
		recovery : "dawn",
		},
	"bowl of commanding water elementals (ccc-ylra1-2)" : {
		name : "Bowl of Commanding Water Elementals (CCC-YLRA1-2)",
		source : [["AL","CCC"]],
		type : "wondrous item",
		rarity : "rare",
		magicItemTable : "G",
		description : "This metallic blue bowl is ~1 ft in diameter & 1/2 as deep. It weighs 3 pounds, holds ~3 gallons, & shifts & swirls slowly when examined. The bowl’s command phrase is inscribed in Aquan w/ silver glyphs along its inside lip: “From the Plane of Water, I wrench thee; From the Archomental, I bind thee”. Once/dawn, while filled w/ water, you can speak bowl's command phrase as an action & summon a water elemental as if casting Conjure Elemental.",
		descriptionFull : "This bowl is about 1 foot in diameter and half as deep. It weighs 3 pounds and holds about 3 gallons. Unremarkable at first glance, this bowl’s metallic blue finish shifts and swirls subtly and slowly when examined. The basin’s command phrase is inscribed in Primordial (Aquan) with glyphs inlaid in silver along its inside lip. Being able to read or understand Primordial is not needed to use the bowl’s magic, as merely focusing on the bowl reveals its command phrase: “From the Plane of Water, I wrench thee; From the Archomental, I bind thee”\n   While this bowl is filled with water, you can use an action to speak the bowl's command word and summon a water elemental, as if you had cast the Conjure Elemental spell. The bowl can't be used this way again until the next dawn.",
		weight : 3,
		spellcastingBonus : {
			name : "Water Elemental only",
			spells : ["conjure elemental"],
			selection : ["conjure elemental"],
			firstCol : "oncelr"
		},
		limfeaname : "Bowl of Commanding Water Elementals",
		usages : 1,
		recovery : "dawn",
		spellChanges : {
			"conjure elemental" : {
				time : "1 a",
				components : "V,M\u0192",
				compMaterial : "The Bowl of Commanding Water Elementals needs to be filled with water to cast this spell with a command word.",
				description : "CR 5 water elemental that obeys my verbal commands; on broken conc. elemental breaks free",
				changes : "Using the Bowl of Commanding Water Elementals, the spell only takes 1 action instead of 1 minute to cast, but can only bring forth a water elemental."
			}
		}
	},
	"bowl of commanding water elementals (ddal9-7)" : {
		name : "Bowl of Commanding Water Elementals (DDAL9-7)",
		source : [["AL","S9"]],
		type : "wondrous item",
		rarity : "rare",
		magicItemTable : "G",
		description : "This silver bowl is ~1 ft in diameter & 1/2 as deep. It weighs 3 pounds, holds ~3 gallons, is ringed w/ Infernal script & inlaid with rubies. Once/dawn, while filled w/ water, you can speak bowl's command word as an action & summon a water elemental as if casting Conjure Elemental. If you use water from the River Styx, it conjures an elemental that can carry other creatures safely through those waters.",
		descriptionFull : "This silver bowl is about 1 foot in diameter and half as deep. It weighs 3 pounds and holds about 3 gallons. It is ringed with Infernal script and inlaid with rubies. When filled with water from the River Styx, it can conjure a water elemental that can carry other creatures safely through the waters of the Styx.\n   While this bowl is filled with water, you can use an action to speak the bowl's command word and summon a water elemental, as if you had cast the Conjure Elemental spell. The bowl can't be used this way again until the next dawn.",
		weight : 3,
		spellcastingBonus : {
			name : "Water Elemental only",
			spells : ["conjure elemental"],
			selection : ["conjure elemental"],
			firstCol : "oncelr"
		},
		limfeaname : "Bowl of Commanding Water Elementals",
		usages : 1,
		recovery : "dawn",
		spellChanges : {
			"conjure elemental" : {
				time : "1 a",
				components : "V,M\u0192",
				compMaterial : "The Bowl of Commanding Water Elementals needs to be filled with water to cast this spell with a command word.",
				description : "CR 5 water elemental that obeys my verbal commands; on broken conc. elemental breaks free",
				changes : "Using the Bowl of Commanding Water Elementals, the spell only takes 1 action instead of 1 minute to cast, but can only bring forth a water elemental."
			}
		}
	},
	"decanter of endless water (ccc-des-4)" : {
		name : "Decanter of Endless Water (CCC-DES-4)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "C",
		description : "This wooden carafe was used by the hag Gladys Razortoe to flood The Green Man’s seeing pool. She brought it to the Plane of Elemental Water to be imbued by Olhydra. Burned into the outside of the container is the wreathed visage of The Green Man. As an action, open the item \u0026 speak a command word, pouring out fresh/salt water until next turn starts. “Stream” for 1 gal. “Fountain” for 5 gal. “Geyser” for 30 gal in 30 ft \xD7 1 ft geyser. As a bonus action, aim geyser at visible target, which makes a DC 13 Str save or takes 1d4 bludgeoning & falls prone. If object, knock over or push 15 ft.",
		descriptionLong : "This wooden carafe was used by the hag Gladys Razortoe to flood The Green Man’s seeing pool. She brought it to the Plane of Elemental Water to be imbued by Olhydra's power. Burned into the grain on the outside of the container is the wreathed visage of The Green Man. As an action, you can remove the stopper & speak a command word, pouring out fresh or salt water (choose) until your next turn starts. “Stream” produces 1 gallon. “Fountain” produces 5 gallons. “Geyser” produces 30 gallons of water that gushes forth in a geyser 30 ft long by 1 ft wide. As a bonus action while holding it, you can aim the geyser at a visible creature w/i 30 ft. The target must pass a DC 13 Str save or take 1d4 bludgeoning dmg & fall prone. If you target an unattended object weighing up to 200 lb, you knock it over or push it up to 15 ft away.",
		descriptionFull : "This wooden carafe was manipulated by the hag Gladys Razortoe to flood The Green Man’s seeing pool. She brought it to the Plane of Elemental Water to be blessed by Olhydra herself to imbue it with the power to pervert The Green Man’s seeing pool. Burned into the grain on the outside of the container is the wreathed visage of The Green Man himself. The carafe sloshes when shaken, as if it contains water & weighs 2 pounds.\n   You can use an action to remove the stopper and speak one of three command words, whereupon an amount of fresh water or salt water (your choice) pours out of the flask. The water stops pouring out at the start of your next turn. Choose from the following options:\n \u2022 \"Stream\" produces 1 gallon of water.\n \u2022 \"Fountain\" produces 5 gallons of water.\n \u2022 \"Geyser\" produces 30 gallons of water that gushes forth in a geyser 30 feet long and 1 foot wide. As a bonus action while holding the decanter, you can aim the geyser at a creature you can see within 30 feet of you. The target must succeed on a DC 13 Strength saving throw or take 1d4 bludgeoning damage and fall prone. Instead of a creature, you can target an object that isn't being worn or carried and that weighs no more than 200 pounds. The object is either knocked over or pushed up to 15 feet away from you.",
		weight : 2
	},
	"eversmoking bottle (ddep7-1)" : {
		name : "Eversmoking Bottle (DDEP7-1)",
		source : [["AL","S7"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "This bottle of spun glass is decorated with images of battling dragons & giants trampling the homes & lives of small folk underfoot. When you remove the stopper as an action, a cloud of thick heavily-obscuring smoke flows out of the bottle in a 60-ft radius, increasing by 10 ft/minute while open, until it reaches 120 ft. The smoke smells of burning wood & flesh & is accompanied by the sound of weeping. Speak the command word as an action to close. Cloud disperses after 10 min, w/ wind after 1 min, strong wind (1 round).",
		descriptionFull : "This bottle of spun glass is decorated with images of battling dragons and giants trampling the homes and lives of small folk underfoot. Smoke leaks from the lead-stoppered mouth of this brass bottle, which weighs 1 pound. When you use an action to remove the stopper, a cloud of thick smoke pours out in a 60-foot radius from the bottle. The smoke smells of burning wood and flesh and is accompanied by the sound of weeping. The cloud's area is heavily obscured. Each minute the bottle remains open and within the cloud, the radius increases by 10 feet until it reaches its maximum radius of 120 feet.\n   The cloud persists as long as the bottle is open. Closing the bottle requires you to speak its command word as an action. Once the bottle is closed, the cloud disperses after 10 minutes. A moderate wind (11 to 20 miles per hour) can also disperse the smoke after 1 minute, and a strong wind (21 or more miles per hour) can do so after 1 round.",
		weight : 1,
		action : [["action", "Eversmoking Bottle (open/close)"]]
	},
	"geyser figurine (ccc-cic-9)" : {
		name : "Geyser Figurine (Decanter of Endless Water)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "C",
		description : 'This small 2 lb figurine is carved in the shape of a spouting geyser & sloshes when shaken, as if containing water. As an action, open the item \u0026 speak a command word, pouring out fresh/salt water until next turn starts. "Stream" for 1 gal. "Fountain" for 5 gal. "Geyser" for 30 gal in 30 ft \xD7 1 ft geyser. As a bonus action, aim geyser at visible target, which makes a DC 13 Str save or takes 1d4 bludgeoning dmg & falls prone. If object, knock over or push 15 ft away.',
		descriptionLong : 'This small 2 lb figurine is intricately carved in the shape of a spouting geyser & sloshes when shaken, as if it contains water. As an action, you can remove the stopper and speak one of three command words, pouring out fresh or salt water (choose) until your next turn starts. "Stream" produces 1 gallon. "Fountain" produces 5 gallons. "Geyser" produces 30 gallons of water that gushes forth in a geyser 30 ft long by 1 ft wide. As a bonus action while holding it, you can aim the geyser at a visible creature w/i 30 ft. The target must succeed on a DC 13 Strength save or take 1d4 bludgeoning dmg & fall prone. If you target an unattended object weighing up to 200 lb, you knock it over or push it up to 15 ft away.',
		descriptionFull : "This small figurine is intricately carved in the shape of a spouting geyser and sloshes when shaken, as if it contains water. The decanter weighs 2 pounds.\n   You can use an action to remove the stopper and speak one of three command words, whereupon an amount of fresh water or salt water (your choice) pours out of the flask. The water stops pouring out at the start of your next turn. Choose from the following options:\n \u2022 \"Stream\" produces 1 gallon of water.\n \u2022 \"Fountain\" produces 5 gallons of water.\n \u2022 \"Geyser\" produces 30 gallons of water that gushes forth in a geyser 30 feet long and 1 foot wide. As a bonus action while holding the decanter, you can aim the geyser at a creature you can see within 30 feet of you. The target must succeed on a DC 13 Strength saving throw or take 1d4 bludgeoning damage and fall prone. Instead of a creature, you can target an object that isn't being worn or carried and that weighs no more than 200 pounds. The object is either knocked over or pushed up to 15 feet away from you.",
		weight : 2
	},
	"hag's breath, eversmoking bottle (ccc-gsp-fear1-1)" : {
		name : "Hag's Breath, Eversmoking Bottle (CCC-GSP-FEAR1-1)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "This glass flask is impossible to crack, is filled with yellow gas & labeled “Hag’s Breath”. It was used by the hags of the Bleeding Tree for their mysterious tinctures & vile spells. When you remove the stopper as an action, a cloud of thick heavily-obscuring smoke flows out in a 60-ft radius, increasing by 10 ft/minute while open, until it reaches 120 ft. Any creature in the cloud’s radius sees shadows lurking in the fog. Speak the command word as an action to close. Cloud disperses after 10 min, w/ wind after 1 min, strong wind (1 round).",
		descriptionFull : "This glass flask is filled with yellow gas and labeled “Hag’s Breath”. The glass is hard and impossible to crack. It was once used by the hags of the Bleeding Tree for their mysterious tinctures and vile spells.\n  Smoke leaks from the lead-stoppered mouth of this brass bottle, which weighs 1 pound. When you use an action to remove the stopper, a cloud of thick smoke pours out in a 60-foot radius from the bottle. The cloud's area is heavily obscured and any creature in the cloud’s radius begins to see the movement of indistinguishable shadows lurking in the fog. Each minute the bottle remains open and within the cloud, the radius increases by 10 feet until it reaches its maximum radius of 120 feet.\n   The cloud persists as long as the bottle is open. Closing the bottle requires you to speak its command word as an action. Once the bottle is closed, the cloud disperses after 10 minutes. A moderate wind (11 to 20 miles per hour) can also disperse the smoke after 1 minute, and a strong wind (21 or more miles per hour) can do so after 1 round.",
		weight : 1,
		action : [["action", "Eversmoking Bottle (open/close)"]]
	},
	"heward's handy haversack (ccc-an-3)" : {
		name : "Heward's Handy Haversack (CCC-AN-3)",
		source : [["AL","CCC"]],
		rarity : "rare",
		magicItemTable : "C",
		description : "This haversack is made of red & white leather w/ golden clasps. It has silver bells that only ring on the winter solstice. Those who hear them are reminded of a happy moment from their childhood & have the most restful night of sleep they can remember. The bag weighs 5 lb, regardless of contents. It has 2 pouches that hold 20 lb each & a central pouch that holds 80 lb. Action to retrieve an item. If overloaded, pierced, or torn, it & contents are destroyed. If turned inside out, all contents spill out.",
		descriptionLong : "This haversack is made of red & white leather with golden clasps. There are silver bells on the bag that only ring on the night of the winter solstice. Those who hear the bells are reminded of a happy moment from their childhood & experience the most peaceful & restful night of sleep they can ever remember. It weighs 5 lb, regardless of its contents. It has two side pouches that hold up to 20 lb (2 cu ft) each & a central pouch that holds up to 80 lb (8 cu ft). Retrieving an item from it requires an action. When you reach in the bag for a specific item, it's magically on top. If overloaded, pierced, or torn, the sack & its contents are destroyed. If turned inside out, all its contents spill forth. A creature placed inside the bag can survive for 10 minutes before starting to suffocate. Placing the haversack in another extradimensional space instantly destroys both & opens a gate to the Astral Plane.",
		descriptionFull : "This haversack is made of red and white leather and has golden clasps. There are silver bells on the bag, but they only make noise on the night of the winter solstice. Those who hear the bells ringing are reminded of a happy moment from their childhood and experience the most peaceful and restful night of sleep they can ever remember having. It has a central pouch and two side pouches, each of which is an extradimensional space. Each side pouch can hold up to 20 pounds of material, not exceeding a volume of 2 cubic feet. The large central pouch can hold up to 8 cubic feet or 80 pounds of material. The backpack always weighs 5 pounds, regardless of its contents.\n   Placing an object in the haversack follows the normal rules for interacting with objects. Retrieving an item from the haversack requires you to use an action. When you reach into the haversack for a specific item, the item is always magically on top.\n   The haversack has a few limitations. If it is overloaded, or if a sharp object pierces it or tears it, the haversack ruptures and is destroyed. If the haversack is destroyed, its contents are lost forever, although an artifact always turns up again somewhere. If the haversack is turned inside out, its contents spill forth, unharmed, and the haversack must be put right before it can be used again. If a breathing creature is placed within the haversack, the creature can survive for up to 10 minutes, after which time it begins to suffocate.\n   Placing the haversack inside an extradimensional space created by a bag of holding, portable hole, or similar item instantly destroys both items and opens a gate to the Astral Plane. The gate originates where the one item was placed inside the other. Any creature within 10-feet of the gate is sucked through it and deposited in a random location on the Astral Plane. The gate then closes. The gate is one-way only and can't be reopened.",
		weight : 5,
		action : [["action", "Handy Haversack (retrieve item)"]]
	},
	"heward's handy haversack (ccc-skull1-1)" : {
		name : "Heward's Handy Haversack (CCC-SKULL1-1)",
		source : [["AL","CCC"]],
		rarity : "rare",
		magicItemTable : "C",
		description : "This backpack is stained nearly black with soot that seems to be impossible to wash off. It weighs 5 lb, regardless of its contents. It has two side pouches that hold 20 lb (2 cu ft) each and a central pouch that holds 80 lb (8 cu ft). Retrieving an item from it requires an action. If it's overloaded, pierced, or torn, it and its contents are destroyed. If turned inside out, all its contents spill forth.",
		descriptionLong : "This backpack is stained nearly black with soot that seems to be impossible to wash off. It weighs 5 lb, regardless of its contents. It has two side pouches that hold up to 20 lb (2 cu ft) each and a central pouch that holds up to 80 lb (8 cu ft). Retrieving an item from it requires an action. When you reach in the bag for a specific item, the item is always magically on top. If it's overloaded, pierced, or torn, it and its contents are destroyed. If turned inside out, all its contents spill forth. A creature placed inside the bag can survive for 10 minutes before starting to suffocate. Placing the haversack in another extradimensional space instantly destroys both and opens a gate to the Astral Plane.",
		descriptionFull : "This backpack is stained nearly black with soot that seems to be impossible to wash off. It has a central pouch and two side pouches, each of which is an extradimensional space. Each side pouch can hold up to 20 pounds of material, not exceeding a volume of 2 cubic feet. The large central pouch can hold up to 8 cubic feet or 80 pounds of material. The backpack always weighs 5 pounds, regardless of its contents.\n   Placing an object in the haversack follows the normal rules for interacting with objects. Retrieving an item from the haversack requires you to use an action. When you reach into the haversack for a specific item, the item is always magically on top.\n   The haversack has a few limitations. If it is overloaded, or if a sharp object pierces it or tears it, the haversack ruptures and is destroyed. If the haversack is destroyed, its contents are lost forever, although an artifact always turns up again somewhere. If the haversack is turned inside out, its contents spill forth, unharmed, and the haversack must be put right before it can be used again. If a breathing creature is placed within the haversack, the creature can survive for up to 10 minutes, after which time it begins to suffocate.\n   Placing the haversack inside an extradimensional space created by a bag of holding, portable hole, or similar item instantly destroys both items and opens a gate to the Astral Plane. The gate originates where the one item was placed inside the other. Any creature within 10-feet of the gate is sucked through it and deposited in a random location on the Astral Plane. The gate then closes. The gate is one-way only and can't be reopened.",
		weight : 5,
		action : [["action", "Handy Haversack (retrieve item)"]]
	},
	"heward's handy haversack (ddal9-9)" : {
		name : "Heward's Handy Haversack (DDAL9-9)",
		source : [["AL","S9"]],
		rarity : "rare",
		magicItemTable : "C",
		description : "This specific haversack is made of white leather, and a label on the inside reads “Kelda Ironbelly” in dwarvish script. It weighs 5 lb, regardless of its contents. It has two side pouches that hold 20 lb (2 cu ft) each and a central pouch that holds 80 lb (8 cu ft). Retrieving an item from it requires an action. If it's overloaded, pierced, or torn, it and its contents are destroyed. If turned inside out, all its contents spill forth.",
		descriptionLong : "This specific haversack is made of white leather, and a label on the inside reads “Kelda Ironbelly” in dwarvish script. It weighs 5 lb, regardless of its contents. It has two side pouches that hold up to 20 lb (2 cu ft) each and a central pouch that holds up to 80 lb (8 cu ft). Retrieving an item from it requires an action. When you reach in the bag for a specific item, the item is always magically on top. If it's overloaded, pierced, or torn, it and its contents are destroyed. If turned inside out, all its contents spill forth. A creature placed inside the bag can survive for 10 minutes before starting to suffocate. Placing the haversack in another extradimensional space instantly destroys both and opens a gate to the Astral Plane.",
		descriptionFull : "This specific haversack is made of white leather, and a label on the inside reads “Kelda Ironbelly” in dwarvish script. It has a central pouch and two side pouches, each of which is an extradimensional space. Each side pouch can hold up to 20 pounds of material, not exceeding a volume of 2 cubic feet. The large central pouch can hold up to 8 cubic feet or 80 pounds of material. The backpack always weighs 5 pounds, regardless of its contents.\n   Placing an object in the haversack follows the normal rules for interacting with objects. Retrieving an item from the haversack requires you to use an action. When you reach into the haversack for a specific item, the item is always magically on top.\n   The haversack has a few limitations. If it is overloaded, or if a sharp object pierces it or tears it, the haversack ruptures and is destroyed. If the haversack is destroyed, its contents are lost forever, although an artifact always turns up again somewhere. If the haversack is turned inside out, its contents spill forth, unharmed, and the haversack must be put right before it can be used again. If a breathing creature is placed within the haversack, the creature can survive for up to 10 minutes, after which time it begins to suffocate.\n   Placing the haversack inside an extradimensional space created by a bag of holding, portable hole, or similar item instantly destroys both items and opens a gate to the Astral Plane. The gate originates where the one item was placed inside the other. Any creature within 10-feet of the gate is sucked through it and deposited in a random location on the Astral Plane. The gate then closes. The gate is one-way only and can't be reopened.",
		weight : 5,
		action : [["action", "Handy Haversack (retrieve item)"]]
	},
	"mix #5, eversmoking bottle (dc-poa-legit-sv-01)" : {
		name : "Mix #5, Eversmoking Bottle (DC-POA-LEGIT-SV-01)",
		source : [["AL","S10"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "A decanter filled w/ infernal firewhiskey, hewn from gaudy iridescent crystal, it weighs 1 lb & is strangely sturdy. Additives cause the liquid w/i to roil & smoke endlessly & a hastily scrawled note says not to drink it. When you remove the stopper as an action, a cloud of heavily-obscuring smoke flows from the bottle in a 60-ft radius, increasing by 10 ft/minute to 120 ft. Speak the command word as an action to close. Cloud disperses after 10 min, w/ wind after 1 min, strong wind (1 round).",
		descriptionFull : "A decanter filled with infernal firewhiskey, hewn from gaudy iridescent crystal, it weighs one pound and is strangely sturdy. Strange additives inside cause the liquid within to roil aggressively and smoke endlessly. A hastily scrawled note indicates that you shouldn’t drink it.\n   When you use an action to remove the stopper, a cloud of thick smoke pours out in a 60-foot radius from the bottle. The cloud's area is heavily obscured. Each minute the bottle remains open and within the cloud, the radius increases by 10 feet until it reaches its maximum radius of 120 feet.\n   The cloud persists as long as the bottle is open. Closing the bottle requires you to speak its command word as an action. Once the bottle is closed, the cloud disperses after 10 minutes. A moderate wind (11 to 20 miles per hour) can also disperse the smoke after 1 minute, and a strong wind (21 or more miles per hour) can do so after 1 round.",
		weight : 1,
		action : [["action", "Eversmoking Bottle (open/close)"]]
	},
	"mother pqwirli’s pod pouch (ccc-elo-2)" : {
		name : "Mother Pqwirli’s Pod Pouch (Bag of Holding)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : ["A", "B"],
		description : "The small bloated mauve organism has tiny tentacles that sprout from its body & wrap around your shoulder. Squeezing the surface of the pod releases a translucent slime over its surface before it opens, revealing a throat-like interior. This bag is 2 ft in diameter, 4 ft deep, & 15 lb. It holds 500 lbs & a volume of 64 cu ft. Action to retrieve item. If overloaded, pierced, or torn, it's destroyed & its contents go to the Astral plane. If turned inside out, contents spill forth.",
		descriptionLong : "The small bloated mauve organism has tiny tentacles that sprout from its body & wrap around your shoulder. Squeezing the surface of the pod releases a translucent slime over its surface before it opens, revealing a throat-like interior. This bag is 2 ft in diameter at the mouth, 4 ft deep, & 15 lb regardless of contents. It can hold up to 500 lb, not exceeding a volume of 64 cu ft. Retrieving an item requires an action. If overloaded, pierced, or torn, it's destroyed, leaving its contents in the Astral plane. If turned inside out, all its contents spill forth unharmed. Creatures inside the bag can breath for 10 min divided by the # of creatures (minimum 1 min), after which they suffocate. Placing the bag in another extradimensional space destroys both & opens a gate to the Astral Plane.",
		descriptionFull : "The small, mauve-hued, bloated organism has tiny tentacles that sprout from around its body and wrap around the owner’s shoulder. Squeezing the knotty surface of the pod causes the organism to gestate a translucent slime over its surface before opening, revealing a throat-like pinkish interior.\n   This bag has an interior space considerably larger than its outside dimensions, roughly 2 feet in diameter at the mouth and 4 feet deep. The bag can hold up to 500 pounds, not exceeding a volume of 64 cubic feet. The bag weighs 15 pounds, regardless of its contents. Retrieving an item from the bag requires an action.\n   If the bag is overloaded, pierced, or torn, it ruptures and is destroyed, and its contents are scattered in the Astral Plane. If the bag is turned inside out, its contents spill forth, unharmed, but the bag must be put right before it can be used again. Breathing creatures inside the bag can survive up to a number of minutes equal to 10 divided by the number of creatures (minimum 1 minute), after which time they begin to suffocate.\n   Placing a bag of holding inside an extradimensional space created by a Heward's handy haversack, portable hole, or similar item instantly destroys both items and opens a gate to the Astral Plane. The gate originates where the one item was placed inside the other. Any creature within 10 feet of the gate is sucked through it to a random location on the Astral Plane. The gate then closes. The gate is one-way only and can't be reopened.",
		weight : 15,
		action : [["action", "Bag of Holding)"]]
	},
	"portable hole (ccc-odfc2-2)" : {
		name : "Portable Hole (CCC-ODFC2-2)",
		source : [["AL","CCC"]],
		rarity : "rare",
		magicItemTable : "D",
		description : "This piece of fine red silk, 6-ft in diameter, can be folded into a handkerchief, scarf, or cloak. When studied, the folds seem to dance & flicker like fire. While wearing or carrying it, you can speak Ignan. Action to unfold cloth & place on a solid surface, where it creates a 10-ft deep extradimensional hole. It can't be used to create passages. The space is always the same, so you can store things & creatures inside. An action to remove & refold it.",
		descriptionLong : "This piece of fine red silk can be folded into a handkerchief, scarf, or cloak. When studied closely, the folds of silk seem to dance & flicker like fire. A character wearing or carrying this item can speak Ignan. As an action, you can unfold the cloth, 6-ft in diameter, & place it on a solid surface, whereupon it creates a 10-ft deep extradimensional hole. It can't be used to create passages. Removing & folding it back takes an action. The space created is always the same, so you can store objects & creatures. The hole always weighs next to nothing. Creatures inside the folded up hole can breathe for 10 min & can escape as an action with a DC 10 Strength check, appearing next to you if they do. Placing the hole in another extradimensional space instantly destroys both & opens a gate to the Astral Plane.",
		descriptionFull : "This piece of fine red silk can be folded up into a handkerchief, scarf, or cloak. When studied closely, the folds of silk seem to dance and flicker like fire. A character wearing or carrying this item can speak and understand Ignan. It unfolds into a circular sheet 6 feet in diameter.\n   You can use an action to unfold a portable hole and place it on or against a solid surface, whereupon the portable hole creates an extradimensional hole 10 feet deep. The cylindrical space within the hole exists on a different plane, so it can't be used to create open passages. Any creature inside an open portable hole can exit the hole by climbing out of it.\n   You can use an action to close a portable hole by taking hold of the edges of the cloth and folding it up. Folding the cloth closes the hole, and any creatures or objects within remain in the extradimensional space. No matter what's in it, the hole weighs next to nothing.\n   If the hole is folded up, a creature within the hole's extradimensional space can use an action to make a DC 10 Strength check. On a successful check, the creature forces its way out and appears within 5 feet of the portable hole or the creature carrying it. A breathing creature within a closed portable hole can survive for up to 10 minutes, after which time it begins to suffocate.\n   Placing a portable hole inside an extradimensional space created by a bag of holding, Heward's handy haversack, or similar item instantly destroys both items and opens a gate to the Astral Plane. The gate originates where the one item was placed inside the other. Any creature within 10 feet of the gate is sucked through it and deposited in a random location on the Astral Plane. The gate then closes. The gate is one-way only and can't be reopened.",
		action : [["action", "Portable Hole (place/fold)"]],
		languageProfs : ["Ignan"]
	},
	"portable hole (ccc-tri-7)" : {
		name : "Portable Hole (CCC-TRI-7)",
		source : [["AL","CCC"]],
		rarity : "rare",
		magicItemTable : "D",
		description : "This strange black silk cloth reflects no light & feels like air in the hand. When unfolded there's a smell of briny water in the air. It's 6-ft in diameter & can be folded into a handkerchief, scarf, or cloak. Action to unfold cloth & place on a solid surface, where it creates a 10-ft deep extradimensional hole. It can't be used to create passages. The space is always the same, so you can store things & creatures inside. An action to remove & refold it.",
		descriptionLong : "This piece of fine black silk can be folded into a handkerchief, scarf, or cloak. The cloth reflects no light and feels like air in the hand. When unfolded there is a slight smell of briny water in the air. As an action, you can unfold the cloth, 6-ft in diameter, & place it on a solid surface, whereupon it creates a 10-ft deep extradimensional hole. It can't be used to create passages. Removing & folding it back takes an action. The space created is always the same, so you can store objects & creatures. The hole always weighs next to nothing. Creatures inside the folded up hole can breathe for 10 min & can escape as an action with a DC 10 Strength check, appearing next to you if they do. Placing the hole in another extradimensional space instantly destroys both & opens a gate to the Astral Plane.",
		descriptionFull : "This strange black silk cloth reflects no light and feels like air in the hand. When unfolded there is a slight smell of briny water in the air.\n   You can use an action to unfold a portable hole and place it on or against a solid surface, whereupon the portable hole creates an extradimensional hole 10 feet deep. The cylindrical space within the hole exists on a different plane, so it can't be used to create open passages. Any creature inside an open portable hole can exit the hole by climbing out of it.\n   You can use an action to close a portable hole by taking hold of the edges of the cloth and folding it up. Folding the cloth closes the hole, and any creatures or objects within remain in the extradimensional space. No matter what's in it, the hole weighs next to nothing.\n   If the hole is folded up, a creature within the hole's extradimensional space can use an action to make a DC 10 Strength check. On a successful check, the creature forces its way out and appears within 5 feet of the portable hole or the creature carrying it. A breathing creature within a closed portable hole can survive for up to 10 minutes, after which time it begins to suffocate.\n   Placing a portable hole inside an extradimensional space created by a bag of holding, Heward's handy haversack, or similar item instantly destroys both items and opens a gate to the Astral Plane. The gate originates where the one item was placed inside the other. Any creature within 10 feet of the gate is sucked through it and deposited in a random location on the Astral Plane. The gate then closes. The gate is one-way only and can't be reopened.",
		action : [["action", "Portable Hole (place/fold)"]],
	},
	"portable hole (ddal10-9)" : {
		name : "Portable Hole (DDAL10-9)",
		source : [["AL","S10"]],
		rarity : "rare",
		magicItemTable : "D",
		description : "As an action, you can unfold this black cloth, 6 ft in diameter, & place it on a solid surface, where it creates a 10-ft deep extradimensional hole. Blisteringly hot, dry air carrying embers and ashes blows from within the hole whenever it’s opened. It can't be used to create passages. The space is always the same, so you can store things & creatures inside. Removing it & refolding it takes an action.",
		descriptionLong : "As an action, you can unfold this circular black cloth, 6 ft in diameter, and place it on a solid surface, whereupon it creates a 10-ft deep extradimensional hole. Blisteringly hot, dry air carrying embers and ashes blows from within the hole whenever it’s opened. It can be used to create passages. Removing it and folding it back takes an action. The space created is always the same, so you can store things and creatures in there. The hole always weighs next to nothing. Creatures inside the folded up hole can breathe for 10 min and can escape as an action with a DC 10 Strength check, appearing next to you if they do. Placing the hole in another extradimensional space instantly destroys both and opens a gate to the Astral Plane.",
		descriptionFull : "This fine black cloth, soft as silk, is folded up to the dimensions of a handkerchief. It unfolds into a circular sheet 6 feet in diameter.\n   You can use an action to unfold a portable hole and place it on or against a solid surface, whereupon the portable hole creates an extradimensional hole 10 feet deep. Blisteringly hot, dry air carrying embers and ashes blows from within the hole whenever it’s opened. The cylindrical space within the hole exists on a different plane, so it can't be used to create open passages. Any creature inside an open portable hole can exit the hole by climbing out of it.\n   You can use an action to close a portable hole by taking hold of the edges of the cloth and folding it up. Folding the cloth closes the hole, and any creatures or objects within remain in the extradimensional space. No matter what's in it, the hole weighs next to nothing.\n   If the hole is folded up, a creature within the hole's extradimensional space can use an action to make a DC 10 Strength check. On a successful check, the creature forces its way out and appears within 5 feet of the portable hole or the creature carrying it. A breathing creature within a closed portable hole can survive for up to 10 minutes, after which time it begins to suffocate.\n   Placing a portable hole inside an extradimensional space created by a bag of holding, Heward's handy haversack, or similar item instantly destroys both items and opens a gate to the Astral Plane. The gate originates where the one item was placed inside the other. Any creature within 10 feet of the gate is sucked through it and deposited in a random location on the Astral Plane. The gate then closes. The gate is one-way only and can't be reopened.",
		action : [["action", "Portable Hole (place/fold)"]]
	},
	"quiver of ehlonna (ccc-hatms1-1)" : {
		name : "Quiver of Ehlonna (CCC-HATMS1-1)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "Made of night-black leather, this quiver doesn't even whisper as you withdraws its deadly contents. This quiver has three compartments and weighs 2 lb, regardless of its contents. Its shortest compartment can hold 60 arrows, bolts, or similar objects. Its midsize compartment holds up to 18 javelins or similar objects. Its longest compartment holds up to 6 long objects, such as bows, quarterstaffs, or spears.",
		descriptionFull : "Made of night-black leather, this quiver does not even whisper as its wearer withdraws its deadly contents. Each of the quiver's three compartments connects to an extradimensional space that allows the quiver to hold numerous items while never weighing more than 2 pounds. The shortest compartment can hold up to sixty arrows, bolts, or similar objects. The midsize compartment holds up to eighteen javelins or similar objects. The longest compartment holds up to six long objects, such as bows, quarterstaffs, or spears.\n   You can draw any item the quiver contains as if doing so from a regular quiver or scabbard.",
		weight : 2
	},
	"quiver of ehlonna (ccc-salt1-3)" : {
		name : "Quiver of Ehlonna (CCC-SALT1-3)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "This well-oiled quiver of blackened leather with small white stones sparkling like stars feels unusually light. When you take a long rest, you feel a slight unease if you can't see the sky. The quiver has 3 compartments & weighs 2 lb, regardless of its contents. The shortest compartment holds 60 arrows, bolts, or similar objects. Its midsize compartment holds 18 javelins or similar objects. Its longest compartment holds 6 long objects, such as bows, quarterstaffs, or spears.",
		descriptionFull : "This well-oiled quiver of blackened leather with small white stones sparkling like stars feels unusually light to those who wear it. When the wearer takes a long rest, they feel a slight unease if they are not where they can see the sky.\n   Each of the quiver's three compartments connects to an extradimensional space that allows the quiver to hold numerous items while never weighing more than 2 pounds. The shortest compartment can hold up to sixty arrows, bolts, or similar objects. The midsize compartment holds up to eighteen javelins or similar objects. The longest compartment holds up to six long objects, such as bows, quarterstaffs, or spears.\n   You can draw any item the quiver contains as if doing so from a regular quiver or scabbard.",
		weight : 2
	},
	"quiver of ehlonna (ccc-tri-12 olma1-2)" : {
		name : "Quiver of Ehlonna (CCC-TRI-12 OLMA1-2)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "This quiver is slightly worn w/ text that says “From Pharyssolnyth to Oluevaera, with care” in ancient Elvish & Draconic. Weapons or ammunition pulled from the quiver shimmer w/ small motes of silver light & smell of the deep wood. When you take a long rest, you feel uneasy if you can't see the sky. The quiver has 3 compartments & weighs 2 lb, regardless of its contents. The shortest compartment holds 60 arrows, bolts, or similar objects. Its midsize compartment holds 18 javelins or similar objects. Its longest compartment holds 6 long objects, such as bows, quarterstaffs, or spears.",
		descriptionFull : "This quiver is slightly worn, with design and text that says “From Pharyssolnyth to Oluevaera, with care” in ancient Elvish and Draconic still visible. Any weapon or ammunition pulled from the quiver shimmers with small motes of silver light, and smells of the deep wood.\n   Each of the quiver's three compartments connects to an extradimensional space that allows the quiver to hold numerous items while never weighing more than 2 pounds. The shortest compartment can hold up to sixty arrows, bolts, or similar objects. The midsize compartment holds up to eighteen javelins or similar objects. The longest compartment holds up to six long objects, such as bows, quarterstaffs, or spears.\n   You can draw any item the quiver contains as if doing so from a regular quiver or scabbard.",
		weight : 2
	},
	"tankard of sobriety (ccc-3mags-one)" : {
		name : "Tankard of Sobriety (CCC-3MAGS-ONE)",
		source : [["AL","CCC"]],
		rarity : "common",
		magicItemTable : "?",
		description : "The stern face sculpted into the side of this tankard is a human man in his late 30s w/ a finely groomed mustache & beard, & a monocle. You can drink ale, wine, or other alcoholic beverages from this item w/o getting drunk. The tankard has no effect on magical liquids or harmful substances like poison.",
		descriptionFull : "The stern face sculpted into the side of this tankard is that of a human man in his late 30s with a finely groomed mustache and beard, and a monocle. You can drink ale, wine, or any other nonmagical alcoholic beverage poured into this item without becoming inebriated. The tankard has no effect on magical liquids or harmful substances such as poison.",
		weight : 1
	},
	"tankard of sobriety (ccc-elf-2)" : {
		name : "Tankard of Sobriety (CCC-ELF-2)",
		source : [["AL","CCC"]],
		rarity : "common",
		magicItemTable : "?",
		description : "The stern face on this tankard is a woman of elven ancestry, perhaps a relative of Lux Feraelnes. The tankard is polished silver & as it gleams in the light, the woman’s face occasionally cracks into a wide smile & winks playfully before returning to a stern expression. You can drink ale, wine, or other alcoholic beverages from this item w/o getting drunk. The tankard has no effect on magical liquids or harmful substances like poison.",
		descriptionFull : "The stern face on this tankard depicts a woman of elven ancestry nearly resembling your employer, Lux Feraelnes, but different enough to where you think it might be a relative of hers. The tankard is a polished silver, and as it gleams in the light, occasionally you can see the elven woman’s face break from its disapproval, cracking into a wide Feraelnes smile, an eye winking playfully before the light shifts again and her face returns to a stern expression. You can drink ale, wine, or any other nonmagical alcoholic beverage poured into this item without becoming inebriated. The tankard has no effect on magical liquids or harmful substances such as poison.",
		weight : 1
	},
	"tankard of sobriety (ccc-odfc3-3)" : {
		name : "Tankard of Sobriety (CCC-ODFC3-3)",
		source : [["AL","CCC"]],
		rarity : "common",
		magicItemTable : "?",
		description : "This tankard has an image of a young dwarven maiden carved into its side that winks every time a drink is taken. You can drink ale, wine, or other alcoholic beverages from this item w/o getting drunk. The tankard has no effect on magical liquids or harmful substances like poison.",
		descriptionFull : "This tankard has an image of a young dwarven maiden carved into its side that winks every time a drink is taken. You can drink ale, wine, or any other nonmagical alcoholic beverage poured into this item without becoming inebriated. The tankard has no effect on magical liquids or harmful substances such as poison.",
		weight : 1
	},
	"tankard of sobriety (ccc-priory-1)" : {
		name : "Tankard of Sobriety (CCC-PRIORY-1)",
		source : [["AL","CCC"]],
		rarity : "common",
		magicItemTable : "?",
		description : "This tankard has a stern face sculpted into one side, which reminds you of the last captain of the Singin' Stagwick. You can drink ale, wine, or other alcoholic beverages from this item w/o getting drunk. The tankard has no effect on magical liquids or harmful substances such as poison.",
		descriptionFull : "This tankard has a stern face sculpted into one side, which reminds you of the last captain of the Singin' Stagwick. You can drink ale, wine, or any other nonmagical alcoholic beverage poured into this item without becoming inebriated. The tankard has no effect on magical liquids or harmful substances such as poison.",
		weight : 1
	},
}

MagicItemsList["al equipment"] = {
		name : "AL Equipment",
		type : "wondrous item",
		allowDuplicates : true,
	choices : ["The Aloe of Ch (CCC-ELO-1)","Asharam’s Orb of Ensnaring (CCC-DRUID-1)","Auntie Sue's Broom (CCC-TAROT1-5)","Bands of the Black Unicorn (CCC-DES-3-1)","Bonds of Fear (DDAL4-12)","Broom of Flying (CCC-TRI-13 OLMA1-3)","Charlatan's Die (CCC-DES-1-6)","Charlatan's Die (DDEP10-1)","The Choralier’s Companion (CCC-REAP-1)","Cubic Gate (DDAL8-17)","Daern's Instant Fortress (CCC-ALMOG-ESC-3-3)","Daern's Instant Fortress (CCC-DWB-GNA-1)","Dragonhide Saddle (CCC-GAD1-2)","Ersatz Eye (DDAL10-0)","Ersatz Eye (DDIA-XGE)","Folding Boat (CCC-TAROT2-4)","Folding Boat (DDEP8-1)","Horseshoes of Speed (CCC-TAROT2-7)","Illuminator's Tattoo (DDAL10-1)","Jeny's Special Helper (CCC-DES-1-6)","Merrenoloth Skiff (ALDMs9)","Pipe of Smoke Monsters (CCC-3MAGS-ONE)","Pipe of Smoke Monsters (CCC-GSP1-2)","Pipe of Smoke Monsters (CCC-SQC-3-1)","Pole of Angling (DC-POA-CODEX-1)","Pole of Angling (DC-POA-GSP1-1)","Pot of Awakening (DDIA-XGE)","Prosthetic Limb (DDAL10-6)","Rope of Climbing (DDEP8-3)","Rope of Entanglement (CCC-ODFC1-2)","Rope of Entanglement (DDAL7-7)","Rotsalve (RMHEP-01)","Shadowneedle, Unbreakable Arrow (CCC-DRUID-1/CCC-TRI-26)","Sovad's Staff of Flying (CCC-RPSG-1)","Unbreakable Arrow (DDAL10-0)","The Vampire's Die (CCC-GSP2-3)","Veteran's Cane (CCC-DRUIDS-3)","Walloping Arrow (CCC-DRUIDS-3)","Wind Fan (DDAL0-9)","Wind Fan (DDAL4-5)","The Witchstone, Walloping Bullet (CCC-CIC-15)"],
	"the aloe of ch (ccc-elo-1)" : {
		name : "The Aloe of Ch (Keoghtom's Ointment)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "B",
		description : "This glass jar, 3 inches in diameter, contains 1d4+1 doses of a thick mixture that smells faintly of aloe. As an action, 1 dose of the ointment can be swallowed or applied to the skin. The creature that receives it regains 2d8+2 hp, ceases to be poisoned, & is cured of any disease.",
		descriptionFull : "This glass jar, 3 inches in diameter, contains 1d4+1 doses of a thick mixture that smells faintly of aloe.\n   The jar and its contents weigh 1/2 pound. As an action, one dose of the ointment can be swallowed or applied to the skin. The creature that receives it regains 2d8+2 hit points, ceases to be poisoned, and is cured of any disease.",
		weight : 0.5,
		limfeaname : "Keoghtom's Ointment",
		usages : "1d4+1",
		recovery : "Never"
	},
	"asharam’s orb of ensnaring (ccc-druid-1)" : { // contains contributions by AelarTheElfRogue
		name : "Asharam’s Orb of Ensnaring (Iron Bands of Bilarro)",
		source : [["AL","CCC"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "This item is always chilly to the touch & looks like a solid iron ball. Closer inspection reveals elaborate whorls & swirls on the ball’s surface & short passages in Celestial runes. The sphere’s command phrase is in the writing: “Bind the Stinger to the floor & force the singer to sing no more.” As an action once per dawn, you can speak the command & make a ranged atk (DEX + Prof). If hit, target is restrained until speak command again as a bonus action. Once per 24 hrs, the target can make a DC 20 STR chk as an action to free itself & destroy the bands.",
		descriptionLong : "This item is always chilly to the touch & appears to be a solid iron ball. Closer inspection reveals elaborate whorls & swirls on the ball’s surface & short passages in Celestial runes. The sphere’s command phrase is in the writing: “Bind the Stinger to the floor & force the singer to sing no more.” As an action once per dawn, you can throw this sphere & speak command word. You make a ranged atk roll with an atk bonus equal to you Dex modifier + Proficiency Bonus. On a hit, the target is restrained until you use a bonus action to release it w/ the command word. Doing so, or missing, makes the bands contract back into a sphere. The target can make a DC 20 STR check as an action, freeing itself & destroying the bands on a success. If the check fails, any further attempts auto fail for 24 hrs.",
		descriptionFull : "This item is always chilly to the touch and, at first sight, appears to be a solid iron ball not unlike a large bearing. Closer inspection reveals fine lines that make up minutely elaborate whorls and swirls on the ball’s surface. Even closer inspection reveals short passages written in celestial runes. Anyone who can read celestial or who uses a comprehend languages spell (or an otherwise similar ability) discerns the following sentence—the sphere’s command phrase—in the writing: “Bind the Stinger to the floor and force the singer to sing no more.”\n   This rusty iron sphere measures 3 inches in diameter and weighs 1 pound. You can use an action to speak the command word and throw the sphere at a Huge or smaller creature you can see within 60 feet of you. As the sphere moves through the air, it opens into a tangle of metal bands.\n   Make a ranged attack roll with an attack bonus equal to your Dexterity modifier plus your proficiency bonus. On a hit, the target is restrained until you take a bonus action to speak the command word again to release it. Doing so, or missing with the attack, causes the bands to contract and become a sphere once more.\n   A creature, including the one restrained, can use an action to make a DC 20 Strength check to break the iron bands. On a success, the item is destroyed, and the restrained creature is freed. If the check fails, any further attempts made by that creature automatically fail until 24 hours have elapsed.\n   Once the bands are used, they can't be used again until the next dawn.",
		weight : 1,
		limfeaname : "Iron Bands of Bilarro",
		usages : 1,
		recovery : "dawn",
		action : [["action", " (throw)"], ["bonus action", " (release)"]],
		weaponsAdd : ["Iron Bands of Bilarro"],
		weaponOptions : {
			regExpSearch : /^(?=.*iron)(?=.*band)(?=.*(bilarro|binding)).*$/i,
			name : "Iron Bands of Bilarro",
			source : [["SRD", 228], ["D", 177], ["AL","CCC"]],
			ability : 2,
			type : "Natural",
			damage : ["\u2015", "", "Restrained"],
			range : "60 ft",
			description : "Restrains Huge or smaller creature; DC 20 Strength check to break out",
			abilitytodamage : false,
			weight : 1
		}
	},
	"auntie sue's broom (ccc-tarot1-5)" : {
		name : "Auntie Sue's Broom (CCC-TAROT1-5)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "With the command word, this ratty old broom hovers in the air & can be ridden or sent alone up to 1 mile by naming a familiar location. It has a flying speed of 50 ft & holds up to 400 lb (30 ft speed if over 200 lb). It stops hovering when you land. With other commands, it flies to you if within 1 mile or starts cleaning a 5ft radius on its own. Once that area is clear, it moves to the next until everything is clean or you use the command again.",
		descriptionFull : "This wooden broom, which weighs 3 pounds, functions like a mundane broom until you stand astride it and speak its command word. It then hovers beneath you and can be ridden in the air. It has a flying speed of 50 feet. It can carry up to 400 pounds, but its flying speed becomes 30 feet while carrying over 200 pounds. The broom stops hovering when you land.\n   You can send the broom to travel alone to a destination within 1 mile of you if you speak the command word, name the location, and are familiar with that place. The broom comes back to you when you speak another command word, provided that the broom is still within 1 mile of you.\n   This broom of flying is old and ratty and nothing to look at, however in addition to its normal command words, you may speak an additional one to have the broom start cleaning a 5ft radius on its own. Once that area is clear it moves to the next one until all surfaces are clean or you speak the command word.",
		weight : 3
	},
	"bands of the black unicorn (ccc-des-3-1)" : { // contains contributions by AelarTheElfRogue
		name : "Bands of the Black Unicorn (Iron Bands of Bilarro)",
		source : [["AL","CCC"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "Any time you have the opportunity to pursue vengeance against those who've violated your ideals, this iron sphere heightens the urge. As an action once per dawn, you can speak the command & make a ranged atk (DEX + Prof). The bands expand & display the image of Bilarro’s black unicorn banner. If hit, target is restrained until speak command again as a bonus action. Once per 24 hrs, the target can make a DC 20 STR chk as an action to free itself & destroy the bands.",
		descriptionLong : "Any time the bearer of this iron sphere has the opportunity to pursue vengeance against those who've violated their ideals, it heightens the urge. As an action once per dawn, you can throw this sphere & speak command word. The bands expand & display the image of Bilarro’s black unicorn banner. You make a ranged atk roll with an atk bonus equal to you Dex modifier + Proficiency Bonus. On a hit, the target is restrained until you use a bonus action to release it w/ the command word. Doing so, or missing, makes the bands contract back into a sphere. The target can make a DC 20 STR check as an action, freeing itself & destroying the bands on a success. If the check fails, any further attempts auto fail for 24 hrs.",
		descriptionFull : "When the bands expand, they display the image of Bilarro’s black unicorn banner. Any time the bearer is presented with the opportunity to pursue vengeance against those who appear to have violated their ideals, the item heightens the bearer’s urge to do so.\n   This rusty iron sphere measures 3 inches in diameter and weighs 1 pound. You can use an action to speak the command word and throw the sphere at a Huge or smaller creature you can see within 60 feet of you. As the sphere moves through the air, it opens into a tangle of metal bands.\n   Make a ranged attack roll with an attack bonus equal to your Dexterity modifier plus your proficiency bonus. On a hit, the target is restrained until you take a bonus action to speak the command word again to release it. Doing so, or missing with the attack, causes the bands to contract and become a sphere once more.\n   A creature, including the one restrained, can use an action to make a DC 20 Strength check to break the iron bands. On a success, the item is destroyed, and the restrained creature is freed. If the check fails, any further attempts made by that creature automatically fail until 24 hours have elapsed.\n   Once the bands are used, they can't be used again until the next dawn.",
		weight : 1,
		limfeaname : "Iron Bands of Bilarro",
		usages : 1,
		recovery : "dawn",
		action : [["action", " (throw)"], ["bonus action", " (release)"]],
		weaponsAdd : ["Iron Bands of Bilarro"],
		weaponOptions : {
			regExpSearch : /^(?=.*iron)(?=.*band)(?=.*(bilarro|binding)).*$/i,
			name : "Iron Bands of Bilarro",
			source : [["SRD", 228], ["D", 177], ["AL","CCC"]],
			ability : 2,
			type : "Natural",
			damage : ["\u2015", "", "Restrained"],
			range : "60 ft",
			description : "Restrains Huge or smaller creature; DC 20 Strength check to break out",
			abilitytodamage : false,
			weight : 1
		}
	},
	"bonds of fear (ddal4-12)" : {
		name : "Bonds of Fear (Dimensional Shackles)",
		source : [["AL","S4"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "These chains are etched with twisted screaming faces & clouds of fog. As action, shackle incapacitated Small-Large size creature. Target is enveloped in 1-inch thick mist that dampens hearing & vision. Victim is barely aware of surroundings & their loudest screams heard as whispers. Shadowy forms move through the mist as if victim not alone. Shackles act as manacles + prevent extradimensional mvmt, but not portal travel. You & designees can remove. Every 30 days, target may break w/ DC 30 Ath. chk.",
		descriptionLong : "These chains are etched with twisted screaming faces and clouds of fog. You can use an action to place these shackles on an incapacitated creature. The shackles adjust to fit Small to Large size creatures. When placed, they envelope the target in 1-inch thick mist that dampens hearing and vision. The victim is only peripherally aware of the world around them and even their loudest screams are heard only as soft whispers. Occasionally shadowy forms move through the mist as if the victim wasn't alone. The shackles serve as mundane manacles & prevent target from using methods of extradimensional movement, such as teleportation or travel to a different plane. They don't prevent the creature from passing-through an interdimensional portal. You and any creature you designate when you use the shackles can remove them with an action. Once every 30 days, the bound creature can make a DC 30 Str (Athletics) check. On a success, the creature breaks free and destroys the shackles.",
		descriptionFull : "These chains are etched with twisted screaming faces and clouds of fog. You can use an action to place these shackles on an incapacitated creature. The shackles adjust to fit a creature of Small to Large size. When placed upon a victim, they are enveloped in mist an inch thick that dampens hearing and vision passing through it. The victim is only peripherally aware of the world around them and even their loudest screams can be heard only as the softest of whispers. Occasionally shadowy forms can be seen moving through the mist, as if the victim were not alone. In addition to serving as mundane manacles, the shackles prevent a creature bound by them from using any method of extradimensional movement, including teleportation or travel to a different plane of existence. They don't prevent the creature from passing-through an interdimensional portal.\n   You and any creature you designate when you use the shackles can use an action to remove them. Once every 30 days, the bound creature can make a DC 30 Strength (Athletics) check. On a success, the creature breaks free and destroys the shackles.",
		action : [["action", "Dimensional Shackles (bind/remove)"]]
	},
	"broom of flying (ccc-tri-13 olma1-3)" : {
		name : "Broom of Flying (CCC-TRI-13 OLMA1-3)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "An old pet of the House of Longevity & Ruin, this ebony broom is slightly cracked w/ some of the bristles broken off. It follows you like a puppy w/ a child-like curiosity unless told not to, then throwing a tantrum. Tied around its handle is a red kerchief embroidered w/ “ZJ.” With the command word, this broom hovers in the air & can be ridden or sent alone up to 1 mile by naming a familiar location. It has a flying speed of 50 ft & holds up to 400 lb (30 ft speed if over 200 lb). It stops hovering when you land. With a 2nd command, it flies to you if within 1 mile.",
		descriptionFull : "This wooden broom, which weighs 3 pounds, functions like a mundane broom until you stand astride it and speak its command word. It then hovers beneath you and can be ridden in the air. It has a flying speed of 50 feet. It can carry up to 400 pounds, but its flying speed becomes 30 feet while carrying over 200 pounds. The broom stops hovering when you land.\n   You can send the broom to travel alone to a destination within 1 mile of you if you speak the command word, name the location, and are familiar with that place. The broom comes back to you when you speak another command word, provided that the broom is still within 1 mile of you.\n   An old pet of the House of Longevity and Ruin, this broom has now been given as a gift. Slightly cracked but still a lustrous ebony, with some of the broom bristles broken off, it will follow its user like a puppy and with a child-like curiosity unless instructed not to... at which it is prone to throwing a temper tantrum. Tied around its handle is a red neckerchief embroidered with the letters “ZJ.”",
		weight : 3
	},
	"charlatan's die (ccc-des-1-6)" : {
		name : "Charlatan's Die (CCC-DES-1-6)",
		source : [["AL","CCC"]],
		rarity : "common",
		magicItemTable : "?",
		description : "Whenever you roll this six-sided die while attuned, you can control which number it rolls. It's made of bone, dyed purple, and features a cleverly carved aardvark on one side. ",
		descriptionFull : "Whenever you roll this six-sided die while attuned, you can control which number it rolls. It is carved from bone, dyed purple, and features a cleverly carved aardvark on one side. ",
		attunement : true,
		languageProfs : ["Reghedjic"],
	},
	"charlatan's die (ddep10-1)" : {
		name : "Charlatan's Die (DDEP10-1)",
		source : [["AL","S10"]],
		rarity : "common",
		magicItemTable : "?",
		description : "This elk-bone die has pips skillfully carved onto it in the shape of humanoid skulls. While this die is on your person (no attunement required), you can speak and understand Reghedjic, the traditional language of the Reghed people. Whenever you roll this six-sided die while attuned, you can control which number it rolls.",
		attunement : true,
		languageProfs : ["Reghedjic"],
	},
	"the choralier’s companion (ccc-reap-1)" : {
		name : "The Choralier’s Companion (Saddle of the Cavalier)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "B",
		description : "Any mount that wears this saddle possesses a phenomenal gift for singing — the song selection, frequency, & volume depends on the temperament of the mount, but it’s beautiful & usually entertaining. This effect does not grant them any additional languages. While in this saddle on a mount, you can't be dismounted against your will if conscious, & atk rolls against the mount have disadv.",
		descriptionFull : "Any mount that wears this saddle possesses a phenomenal gift for singing — the song selection, frequency, and volume depends on the temperament of the mount, but it’s beautiful and almost always entertaining. This effect does not grant any additional languages to the mount. While in this saddle on a mount, you can't be dismounted against your will if you're conscious, and attack rolls against the mount have disadvantage."
	},
	"cubic gate (ddal8-17)" : { // contains contributions by Larry Hoy
		name : "Cubic Gate (DDAL8-17)",
		source : [["AL","S8"]],
		rarity : "legendary",
		magicItemTable : "I",
		description : "Created by the wizard Hilather, the six sides of this cube are covered in characters from the language of Alzhedo. The six sides are keyed to: the Prime Material, the Elemental Plane of Fire, the Nine Hells, the Far Realm, the Outlands, and Arborea. The cube has 3 charges, regaining 1d3 at dawn. As an action, you can expend a charge and press a side of the cube once to cast Gate or twice to cast Plane Shift (DC 17). Both spells only link to the plane on the pressed side.",
		descriptionFull : "Created by the wizard Hilather, the six sides of this cube are covered in characters from the language of Alzhedo. The six sides are keyed to: the Prime Material, the Elemental Plane of Fire, the Nine Hells, the Far Realm, the Outlands, and Arborea.\n   You can use an action to press one side of the cube to cast the Gate spell with it, opening a portal to the plane keyed to that side. Alternatively, if you use an action to press one side twice, you can cast the Plane Shift spell (save DC 17) with the cube and transport the targets to the plane keyed to that side.\n   The cube has 3 charges. Each use of the cube expends 1 charge. The cube regains 1d3 expended charges daily at dawn.",
		limfeaname : "Cubic Gate",
		usages : 3,
		recovery : "dawn",
		additional : "regains 1d3",
		spellFirstColTitle : "Ch",
		fixedDC : 17,
		spellcastingBonus : {
			name : "1 charge",
			spells : ["gate", "plane shift"],
			selection : ["gate", "plane shift"],
			times : 2,
			firstCol : 1
		},
		spellChanges : {
			"plane shift" : {
				description : "Me + 8 willing crea teleport to, or spell attack + save to transport unwilling to plane keyed to the side",
				changes : "Using the Cubic Gate, the spell only links to the plane on the side of the cube that pressed."
			},
			"gate" : {
				description : "Create a portal to a precise location on the plane keyed to the side; can transport named creature to me",
				changes : "Using the Cubic Gate, the spell only links to the plane on the side of the cube that pressed."
			}
		}
	},
	"daern's instant fortress (ccc-almog-esc-3-3)" : { // contains contributions by Larry Hoy
		name : "Daern's Instant Fortress (CCC-ALMOG-ESC-3-3)",
		source : [["AL","S10"]],
		rarity : "rare",
		magicItemTable : "G",
		description: "This metal cube is covered in strange translucent slime. Regardless of how you try to clean it, it's always found covered in the slime. As an action, put the 1-inch cube on the ground & speak command word, growing it into a 20-ft x 20-ft x 30-ft high adamantine tower w/ a door facing you, arrow slits on all sides, battlements atop, 2 floors, & a ladder along 1 wall ending at a trapdoor to the roof. Anyone in area 10d10 bludgeoning (DC 15 Dex for 1/2) See Notes page for details.",
		descriptionLong : "This metal cube is covered in strange translucent slime. Regardless of how you try to clean it, it's always found covered in this slime. As an action, place this 1-inch metal cube on the ground and speak its command word, making it grow into a 20-ft by 20-ft by 30-ft high adamantine tower w/ door facing you, arrow slits on all sides, battlement atop, two floors, & a ladder along one wall ending at a trapdoor to the roof. Anyone in area takes 10d10 bludgeoning dmg (DC 15 Dex save for 1/2). See Notes page.",
		descriptionFull : "This metal cube is covered in strange translucent slime. Regardless of how hard one tries to clean it, it is always found covered in this slime. You can use an action to place this 1-inch metal cube on the ground and speak its command word. The cube rapidly grows into a fortress that remains until you use an action to speak the command word that dismisses it, which works only if the fortress is empty.\n   The fortress is a square tower, 20 feet on a side and 30 feet high, with arrow slits on all sides and a battlement atop it. Its interior is divided into two floors. with a ladder running along one wall to connect them. The ladder ends at a trapdoor leading to the roof. When activated, the tower has a small door on the side facing you. The door opens only at your command, which you can speak as a bonus action. It is immune to the Knock spell and similar magic, such as that of a chime of opening.\n   Each creature in the area where the fortress appears must make a DC 15 Dexterity saving throw, taking 10d10 bludgeoning damage on a failed save, or half as much damage on a successful one. In either case, the creature is pushed to an unoccupied space outside but next to the fortress. Objects in the area that aren't being worn or carried take this damage and are pushed automatically.\n   The tower is made of adamantine, and its magic prevents it from being tipped over. The roof, the door, and the walls each have 100 hit points, immunity to damage from nonmagical weapons excluding siege weapons, and resistance to all other damage. Only a Wish spell can repair the fortress (this use of the spell counts as replicating a spell of 8th level or lower). Each casting of Wish causes the roof, the door, or one wall to regain 50 hit points.",
		action : [["action", ""]],
		toNotesPage : [{
			name : "Fortress Details",
			note : [
				"This metal cube is covered in strange translucent slime. Regardless of how hard one tries to clean it, it is always found covered in this slime. As an action I can place this 1-inch metal cube on the ground and speak its command word. The cube rapidly grows into a fortress that remains until I use an action to speak the command word that dismisses it, which works only if the fortress is empty.",
				"The fortress is a square tower, 20 feet on a side and 30 feet high, with arrow slits on all sides and a battlement atop it. Its interior is divided into two floors. with a ladder running along one wall to connect them. The ladder ends at a trapdoor leading to the roof.",
				"When activated, the tower has a small door on the side facing me. The door opens only at my command, which I can speak as a bonus action. It is immune to the Knock spell and similar magic (e.g., a Chime of Opening).",
				"Each creature in the area where the fortress appears must make a DC 15 Dex save or take 10d10 bludgeoning damage (half damage on a success). In either case, the creature is pushed to an unoccupied space outside but next to the fortress. Objects in the area that aren't being worn or carried take this damage and are pushed automatically.",
				"The tower is made of adamantine, and its magic prevents it from being tipped over. The roof, the door, and the walls each have 100 hit points, immunity to damage from nonmagical weapons excluding siege weapons, and resistance to all other damage. Only a Wish spell can repair the fortress (this use of the spell counts as replicating a spell of 8th level or lower). Each casting of Wish causes the roof, the door, or one wall to regain 50 hit points."
			]
		}]
	},
	"daern's instant fortress (ccc-dwb-gna-1)" : { // contains contributions by Larry Hoy
		name : "Daern's Instant Fortress (CCC-DWB-GNA-1)",
		source : [["AL","CCC"]],
		rarity : "rare",
		magicItemTable : "G",
		description: "This item has the appearance of black stone & anyone who knows of its past with The Artist is likely to view its owner w/ suspicion. As an action, put the 1-inch cube on the ground & speak command word, growing it into a 20-ft x 20-ft x 30-ft high adamantine tower w/ a door facing you, arrow slits on all sides, battlements atop, 2 floors, & a ladder along 1 wall ending at a trapdoor to the roof. Anyone in area 10d10 bludgeoning (DC 15 Dex for 1/2) See Notes page for details.",
		descriptionLong : "This item has the appearance of black stone and anyone who knows of this item’s past with The Artist is likely to view it and its owner with suspicion.  As an action, place this 1-inch metal cube on the ground and speak its command word, making it grow into a 20-ft by 20-ft by 30-ft high adamantine tower w/ door facing you, arrow slits on all sides, battlement atop, two floors, & a ladder along one wall ending at a trapdoor to the roof. Anyone in area takes 10d10 bludgeoning dmg (DC 15 Dex save for 1/2). See Notes page.",
		descriptionFull : "This item has the appearance of black stone and anyone who knows of this item’s past with The Artist is likely to view it and its owner with suspicion. You can use an action to place this 1-inch metal cube on the ground and speak its command word. The cube rapidly grows into a fortress that remains until you use an action to speak the command word that dismisses it, which works only if the fortress is empty.\n   The fortress is a square tower, 20 feet on a side and 30 feet high, with arrow slits on all sides and a battlement atop it. Its interior is divided into two floors. with a ladder running along one wall to connect them. The ladder ends at a trapdoor leading to the roof. When activated, the tower has a small door on the side facing you. The door opens only at your command, which you can speak as a bonus action. It is immune to the Knock spell and similar magic, such as that of a chime of opening.\n   Each creature in the area where the fortress appears must make a DC 15 Dexterity saving throw, taking 10d10 bludgeoning damage on a failed save, or half as much damage on a successful one. In either case, the creature is pushed to an unoccupied space outside but next to the fortress. Objects in the area that aren't being worn or carried take this damage and are pushed automatically.\n   The tower is made of adamantine, and its magic prevents it from being tipped over. The roof, the door, and the walls each have 100 hit points, immunity to damage from nonmagical weapons excluding siege weapons, and resistance to all other damage. Only a Wish spell can repair the fortress (this use of the spell counts as replicating a spell of 8th level or lower). Each casting of Wish causes the roof, the door, or one wall to regain 50 hit points.",
		action : [["action", ""]],
		toNotesPage : [{
			name : "Fortress Details",
			note : [
				"This item has the appearance of black stone and anyone who knows of this item’s past with The Artist is likely to view it and its owner with suspicion. As an action I can place this 1-inch metal cube on the ground and speak its command word. The cube rapidly grows into a fortress that remains until I use an action to speak the command word that dismisses it, which works only if the fortress is empty.",
				"The fortress is a square tower, 20 feet on a side and 30 feet high, with arrow slits on all sides and a battlement atop it. Its interior is divided into two floors. with a ladder running along one wall to connect them. The ladder ends at a trapdoor leading to the roof.",
				"When activated, the tower has a small door on the side facing me. The door opens only at my command, which I can speak as a bonus action. It is immune to the Knock spell and similar magic (e.g., a Chime of Opening).",
				"Each creature in the area where the fortress appears must make a DC 15 Dex save or take 10d10 bludgeoning damage (half damage on a success). In either case, the creature is pushed to an unoccupied space outside but next to the fortress. Objects in the area that aren't being worn or carried take this damage and are pushed automatically.",
				"The tower is made of adamantine, and its magic prevents it from being tipped over. The roof, the door, and the walls each have 100 hit points, immunity to damage from nonmagical weapons excluding siege weapons, and resistance to all other damage. Only a Wish spell can repair the fortress (this use of the spell counts as replicating a spell of 8th level or lower). Each casting of Wish causes the roof, the door, or one wall to regain 50 hit points."
			]
		}]
	},
	"dragonhide saddle (ccc-gad1-2)" : {
		name : "Dragonhide Saddle (Saddle of the Cavalier)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "B",
		description : "This saddle is made of the hide & bones of a red dragon. The saddle never gets dirty, even in the grimiest environments. While in this saddle on a mount, you can't be dismounted against your will if conscious, & atk rolls against the mount have disadv.",
		descriptionFull : "This saddle is made primarily of the hide & bones of a red dragon. The saddle never gets dirty, even in the grimiest environments. While in this saddle on a mount, you can't be dismounted against your will if you're conscious, and attack rolls against the mount have disadvantage."
	},
	"ersatz eye (ddal10-0)" : {
		name : "Ersatz Eye (DDAL10-0)",
		source : [["AL","S10"]],
		rarity : "common",
		magicItemTable : "?",
		description : "This artificial eye replaces a real one that was lost or removed. This particular eye was recovered from an ancient orc burial site and it appears oversized and orcish while embedded in your eye socket. It can't be removed by anyone but you, and you can see through the orb as though it were a normal eye. While you’re attuned to the ersatz eye, you can read and understand, but not speak Orc.",
		descriptionFull : "This particular eye was recovered from an ancient orc burial site and it appears oversized and orcish while embedded in your eye socket. While you’re attuned to the ersatz eye, you can read and understand, but not speak Orc.\n   This artificial eye replaces a real one that was lost or removed. While the ersatz eye is embedded in your eye socket, it can't be removed by anyone other than you, and you can see through the tiny orb as though it were a normal eye.",
		attunement : true,
		languageProfs : ["Orcish (can't speak)"]
	},
	"ersatz eye (ddia-xge)" : {
		name : "Ersatz Eye (DDIA-XGE)",
		source : [["AL","XGE"]],
		rarity : "common",
		magicItemTable : "?",
		description : "This artificial eye replaces a real one that was lost or removed. When used, this orb swirls with a pearlescent mist within. It can't be removed by anyone but you, and you can see through the orb as though it were a normal eye.",
		descriptionFull : "When used, this orb swirls with a pearlescent mist within.\n   This artificial eye replaces a real one that was lost or removed. While the ersatz eye is embedded in your eye socket, it can't be removed by anyone other than you, and you can see through the tiny orb as though it were a normal eye.",
		attunement : true,
	},
	"folding boat (ccc-tarot2-4)" : {
		name : "Folding Boat (CCC-TAROT2-4)",
		source : [["AL","CCC"]],
		rarity : "rare",
		magicItemTable : "C",
		description : "As an action, speak 1 of 3 command words to change this wooden box into a boat, a ship, or to fold back up. On the box are scenes of cookies & baking utensils. When opened, it releases the smell of freshly baked cookies & the feeling of a warm bakery. The boat holds 4 Medium creatures & has oars, anchor, mast, & a sail. The ship holds 15 Medium creatures & has a deck, 5 sets of oars, rowing seats, a steering oar, anchor, deck cabin, & a mast. On the bow of each boat in bold golden letters is the name, “Sugar, Spice, & Everything Nice!”.",
		descriptionLong : "A wooden box of 12 inch \xD7 6 inch \xD7 6 inch, that can be opened to hold items. On the box are scenes of cookies & baking utensils. As an action, you can speak 1 of 3 command words. The 1st causes it to unfold into a boat 10 ft \xD7 4 ft \xD7 2 ft, with oars, an anchor, a mast, and a lateen sail, which can hold 4 Medium creatures comfortably. The 2nd causes it to unfold into a ship 24 ft \xD7 8 ft \xD7 6 ft, with a deck, rowing seats, 5 sets of oars, a steering oar, an anchor, a deck cabin, and a mast with a square sail, which can hold 15 Medium creatures comfortably. When opened, it releases the smell of freshly baked cookies & the feeling of a warm bakery. Written across the bow of each boat form in bold golden letters is the name, “Sugar, Spice, & Everything Nice!”. The 3rd command causes it to fold up, leaving large objects placed in the boat/ship on the outside.",
		descriptionFull : "This object appears as a wooden box that measures 12 inches long, 6 inches wide, and 6 inches deep. It weighs 4 pounds and floats. It can be opened to store items inside. This item also has three command words, each requiring you to use an action to speak it.\n   One command word causes the box to unfold into a boat 10 feet long, 4 feet wide, and 2 feet deep. The boat has one pair of oars, an anchor, a mast, and a lateen sail. The boat can hold up to four Medium creatures comfortably.\n   The second command word causes the box to unfold into a ship 24 feet long, 8 feet wide; and 6 feet deep. The ship has a deck, rowing seats, five sets of oars, a steering oar, an anchor, a deck cabin, and a mast with a square sail. The ship can hold fifteen Medium creatures comfortably.\n   When the box becomes a vessel, its weight becomes that of a normal vessel its size, and anything that was stored in the box remains in the boat.\n   The third command word causes the folding boat to fold back into a box, provided that no creatures are aboard. Any objects in the vessel that can't fit inside the box remain outside the box as it folds. Any objects in the vessel that can fit inside the box do so.\n   When closed the box has scenes of cookies and baking utensils on the outside. When opened it releases the smell of freshly baked cookies and the feeling of a warm bakery. In either of its boat forms, written across the bow in bold, golden, letters is the ship’s name, “Sugar, Spice, and Everything Nice!”.",
		weight : 4,
		action : [["action", "Folding Boat (unfold/fold)"]]
	},
	"folding boat (ddep8-1)" : {
		name : "Folding Boat (DDEP8-1)",
		source : [["AL","S8"]],
		rarity : "rare",
		magicItemTable : "C",
		description : "As an action, speak 1 of 3 command words to change this wooden box into a boat, a ship, or to fold back up. The boat holds 4 Medium creatures & has oars, anchor, mast, & a sail. The ship holds 15 Medium creatures & has a deck, five sets of oars, rowing seats, a steering oar, anchor, deck cabin, & a mast. It also has a small casino on deck with a wet bar, & four casino tables, & flies the flag of Waterdeep’s current Open Lord, Laeral Silverhand (who probably neither knows nor approves of this ruse).",
		descriptionLong : "A wooden box of 12 inch \xD7 6 inch \xD7 6 inch, that can be opened to put items in. As an action, you can speak one of its three command words. The first causes it to unfold into a boat 10 ft \xD7 4 ft \xD7 2 ft, with oars, an anchor, a mast, and a lateen sail, which can hold four Medium creatures comfortably. The second causes it to unfold into a ship 24 ft \xD7 8 ft \xD7 6 ft, with a deck, rowing seats, five sets of oars, a steering oar, an anchor, a deck cabin, and a mast with a square sail, which can hold fifteen Medium creatures comfortably. The ship also has a small casino on deck with a wet bar, and four casino tables, and flies the flag of Waterdeep’s current Open Lord, Laeral Silverhand (who probably neither knows nor approves of this ruse). Three causes it to fold up, leaving large objects placed in the boat/ship outside of the box.",
		descriptionFull : "This object appears as a wooden box that measures 12 inches long, 6 inches wide, and 6 inches deep. It weighs 4 pounds and floats. It can be opened to store items inside. This item also has three command words, each requiring you to use an action to speak it.\n   One command word causes the box to unfold into a boat 10 feet long, 4 feet wide, and 2 feet deep. The boat has one pair of oars, an anchor, a mast, and a lateen sail. The boat can hold up to four Medium creatures comfortably.\n   The second command word causes the box to unfold into a ship 24 feet long, 8 feet wide; and 6 feet deep. The ship has a deck, rowing seats, five sets of oars, a steering oar, an anchor, a deck cabin, and a mast with a square sail. The ship can hold fifteen Medium creatures comfortably. When unfolded to the ship size, this boat has a small casino on deck. It has a wet bar, and four casino tables, and flies the flag of Waterdeep’s current Open Lord, Laeral Silverhand (who probably neither knows nor approves of this ruse).\n   When the box becomes a vessel, its weight becomes that of a normal vessel its size, and anything that was stored in the box remains in the boat.\n   The third command word causes the folding boat to fold back into a box, provided that no creatures are aboard. Any objects in the vessel that can't fit inside the box remain outside the box as it folds. Any objects in the vessel that can fit inside the box do so.",
		weight : 4,
		action : [["action", "Folding Boat (unfold/fold)"]]
	},
	"horseshoes of speed (ccc-tarot2-7)" : {
		name : "Horseshoes of Speed (CCC-TAROT2-7)",
		source : [["AL","CCC"]],
		rarity : "rare",
		magicItemTable : "C",
		description : "While all four shoes are affixed to the hooves of a horse or similar creature, they increase the creature's walking speed by 30 ft. While active, the horseshoes flicker like flames from a torch & shed light in a 20-ft radius.",
		descriptionFull : "These iron horseshoes come in a set of four. While all four shoes are affixed to the hooves of a horse or similar creature, they increase the creature's walking speed by 30 feet. While active, these horseshoes flicker as if flames from a torch and shed light in a 20-foot radius."
	},
	"illuminator's tattoo (ddal10-1)" : {   //No actual flavor, remove once items added to Tasha's script
		name : "Illuminator's Tattoo (DDAL10-1)",
		source : [["AL","S10"]],
		rarity : "common",
		magicItemTable : "?",
		attunement : true,
		description : "This tattoo contains beautiful calligraphy & images of writing implements. While it's on your skin, you can write with your fingertip as if it were an ink pen that never runs out. As an action once/dawn, you can touch a piece of writing <= 1 page long & speak a creature’s name. The writing becomes invisible to everyone but you & the named creature for 24 hrs. Either of you can dismiss the invisibility by touching the script.",
		descriptionFull : "This tattoo contains beautiful calligraphy, images of writing implements, and the like. While this tattoo is on your skin, you can write with your fingertip as if it were an ink pen that never runs out of ink.\n As an action, you can touch a piece of writing up to one page in length and speak a creature’s name. The writing becomes invisible to everyone other than you and the named creature for the next 24 hours. Either of you can dismiss the invisibility by touching the script (no action required). Once used, this action can’t be used again until the next dawn\n" + toUni("Tattoo Attunement.") + "  To attune to this item, you hold the needle to your skin where you want the tattoo to appear, pressing the needle there throughout the attunement process. When the attunement is complete, the needle turns into the ink that becomes the tattoo, which appears on the skin. If you have multiple magic tattoos, they count as a single magic item with regard to the number of magic items you can attune to.\n If your attunement to the tattoo ends, the tattoo vanishes, and the needle reappears in the closest unoccupied space to you.",
		limfeaname : "Illuminator's Tattoo",
		usages : 1, 
		recovery : "dawn",
	},
	"jeny's special helper (ccc-des-1-6)" : {
		name : "Jeny's Special Helper (Broom of Flying)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "This broom has seen 'gentle use' by Jeny Greenteeth & remains terribly stained despite all attempts to clean it. Sweeping with the broom creates more mess than it fixes. The broom hovers in the air when you speak the command word & can be ridden or sent alone up to 1 mile by naming a familiar location. It has a flying speed of 50 ft & holds up to 400 lb (30 ft speed if over 200 lb). It stops hovering when you land. With 2nd command, it flies to you if within 1 mile.",
		descriptionFull : "This wooden broom, which weighs 3 pounds, functions like a mundane broom until you stand astride it and speak its command word. It then hovers beneath you and can be ridden in the air. It has a flying speed of 50 feet. It can carry up to 400 pounds, but its flying speed becomes 30 feet while carrying over 200 pounds. The broom stops hovering when you land.\n   You can send the broom to travel alone to a destination within 1 mile of you if you speak the command word, name the location, and are familiar with that place. The broom comes back to you when you speak another command word, provided that the broom is still within 1 mile of you.\n   This broom has seen 'gentle use' by Jeny Greenteeth, and it remains terribly stained despite all attempts to clean it, mundane or magical. Actually cleaning with the broom creates more mess than it fixes. Jeny is happy to provide this item to the adventurers, mostly because she is capable of using it as a scrying sensor (not that she would tell that to them).",
		weight : 3
	},
	"merrenoloth skiff (aldms9)" : {
		name : "Merrenoloth Skiff (Folding Boat)",
		source : [["ALDMs9"]],
		rarity : "rare",
		magicItemTable : "C",
		description : "As an action, speak 1 of 3 command words to change this wooden box into a boat, a ship, or to fold back up. The boat holds 4 Medium creatures & has oars, anchor, mast, & a sail. The ship holds 15 Medium creatures & has a deck, five sets of oars, rowing seats, a steering oar, anchor, deck cabin, & a mast. This Merrenoloth Skiff can be used safely on the River Styx.",
		descriptionLong : "A wooden box of 12 inch \xD7 6 inch \xD7 6 inch, that can be opened to put items in. As an action, you can speak one of its three command words. The first causes it to unfold into a boat 10 ft \xD7 4 ft \xD7 2 ft, with oars, an anchor, a mast, and a lateen sail, which can hold four Medium creatures comfortably. The second causes it to unfold into a ship 24 ft \xD7 8 ft \xD7 6 ft, with a deck, rowing seats, five sets of oars, a steering oar, an anchor, a deck cabin, and a mast with a square sail, which can hold fifteen Medium creatures comfortably. Three causes it to fold up, leaving large objects placed in the boat/ship outside of the box. This Merrenoloth Skiff can be used safely on the River Styx.",
		descriptionFull : "This object appears as a wooden box that measures 12 inches long, 6 inches wide, and 6 inches deep. It weighs 4 pounds and floats. It can be opened to store items inside. This item also has three command words, each requiring you to use an action to speak it.\n   One command word causes the box to unfold into a boat 10 feet long, 4 feet wide, and 2 feet deep. The boat has one pair of oars, an anchor, a mast, and a lateen sail. The boat can hold up to four Medium creatures comfortably.\n   The second command word causes the box to unfold into a ship 24 feet long, 8 feet wide; and 6 feet deep. The ship has a deck, rowing seats, five sets of oars, a steering oar, an anchor, a deck cabin, and a mast with a square sail. The ship can hold fifteen Medium creatures comfortably.\n   When the box becomes a vessel, its weight becomes that of a normal vessel its size, and anything that was stored in the box remains in the boat.\n   The third command word causes the folding boat to fold back into a box, provided that no creatures are aboard. Any objects in the vessel that can't fit inside the box remain outside the box as it folds. Any objects in the vessel that can fit inside the box do so. This Merrenoloth Skiff can be used safely on the River Styx.",
		weight : 4,
		limfeaname : "Merrenoloth Skiff (unfold/fold)",
		action : [["action", ""]]
	},
	"pipe of smoke monsters (ccc-3mags-one)" : {
		name : "Pipe of Smoke Monsters (CCC-3MAGS-ONE)",
		source : [["AL","CCC"]],
		rarity : "common",
		magicItemTable : "?",
		description : "This pipe is made of dark wood & inlaid w/ mithral w/ a stem fashioned from a hollow leg bone once belonging to a bird. When used, it creates a random bird call. While smoking this pipe, you can use an action to exhale a puff of smoke that takes the form of a single creature, such as a dragon or a flumph. The form must fit in a 1-ft cube & loses its shape after a few seconds, becoming an ordinary puff of smoke.",
		descriptionFull : "This pipe is made of dark wood and inlaid with mithral with a stem fashioned from a hollow leg bone once belonging to a bird. When used, it creates the sound of a random bird. While smoking this pipe, you can use an action to exhale a puff of smoke that takes the form of a single creature, such as a dragon, a flumph, or a froghemoth. The form must be small enough to fit in a 1-foot cube and loses its shape after a few seconds, becoming an ordinary puff of smoke.",
		action : [["action", "Pipe of Smoke Monsters"]]
	},
	"pipe of smoke monsters (ccc-gsp1-2)" : {
		name : "Pipe of Smoke Monsters (CCC-GSP1-2)",
		source : [["AL","CCC"]],
		rarity : "common",
		magicItemTable : "?",
		description : "This antique wooden pipe has an engraving in tiny halfling script that reads “Chillaxin’ ding-a-ling-a-ling”. While smoking this pipe, you can use an action to exhale a puff of smoke that takes the form of a single creature, such as a dragon or a flumph. Or if the engraved words have been read aloud, the letters glow green & you can exhale smoke that takes the form of a naked halfling male, flexing his muscles. The form must fit in a 1-ft cube & loses its shape after a few seconds, becoming an ordinary puff of smoke.",
		descriptionFull : "This antique wooden pipe has an engraving on it in tiny halfling script, coiled around it that reads “Chillaxin’ ding-a-ling-a-ling”. While smoking this pipe, you can use an action to exhale a puff of smoke that takes the form of a single creature, such as a dragon or a flumph. Or, if the engraved words have been read aloud, the letters glow faintly green & you can use an action to exhale a puff of smoke that takes the form of a naked halfling male, flexing his muscles. The form must be small enough to fit in a 1-foot cube and loses its shape after a few seconds, becoming an ordinary puff of smoke.",
		action : [["action", "Pipe of Smoke Monsters"]]
	},
	"pipe of smoke monsters (ccc-sqc-3-1)" : {
		name : "Pipe of Smoke Monsters (CCC-SQC-3-1)",
		source : [["AL","CCC"]],
		rarity : "common",
		magicItemTable : "?",
		description : "This pipe has an acrid flavor that oozes over the palate before slowly fading away. While smoking the pipe, you can use an action to exhale a puff of smoke that takes the form of a single creature, such as a dragon or flumph. The form must fit in a 1-ft cube & loses its shape after a few seconds, becoming an ordinary puff of smoke.",
		descriptionFull : "This pipe has an acrid flavor that oozes over the palate before slowly fading away. While smoking the pipe, you can use an action to exhale a puff of smoke that takes the form of a single creature, such as a dragon, flumph, or froghemoth. The form must be small enough to fit in a 1-foot cube and loses its shape after a few seconds, becoming an ordinary puff of smoke.",
		action : [["action", "Pipe of Smoke Monsters"]]
	},
	"pole of angling (dc-poa-codex-1)" : {
		name : "Pole of Angling (DC-POA-CODEX-1)",
		source : [["AL","S10"]],
		rarity : "common",
		magicItemTable : "?",
		description : "This 10-ft wooden pole is carved from tip to tip w/ representations of fish & symbols in Druidic that read 'bountiful catch'. While holding this pole, you can speak a command word & transform it into a fishing pole w/ a hook, line, & reel. Speaking the command word again changes the fishing pole back into a normal 10-ft pole.",
		descriptionFull : "This wooden pole is carved from tip to tip with representations of fish and symbols in Druidic that read 'bountiful catch'. While holding this 10-foot pole, you can speak a command word and transform it into a fishing pole with a hook, a line, and a reel. Speaking the command word again changes the fishing pole back into a normal 10-foot pole.",
		weight : 7
	},
	"pole of angling (dc-poa-gsp1-1)" : {
		name : "Pole of Angling (DC-POA-GSP1-1)",
		source : [["AL","S10"]],
		rarity : "common",
		magicItemTable : "?",
		description : "The word “Coinmaker” is scratched on the handle of this pole. While holding this wooden pole, you can speak a command word & transform it into a fishing pole w/ a hook, line, & reel. Speaking the command word again changes the fishing pole back into a normal 10-ft pole.",
		descriptionFull : "The word “Coinmaker” is scratched on the handle of this pole. While holding this. While holding this 10-foot pole, you can speak a command word and transform it into a fishing pole with a hook, a line, and a reel. Speaking the command word again changes the fishing pole back into a normal 10-foot pole.",
		weight : 7
	},
	"pot of awakening (ddia-xge)" : {
		name : "Pot of Awakening (DDIA-XGE)",
		rarity : "common",
		source : [["AL","XGE"]],
		magicItemTable : "?",
		description : "This clay pot is stamped with an oak leaf, the holy symbol of Silvanus. If you plant an ordinary shrub in this pot & let it grow, the shrub magically transforms into an awakened shrub after 30 days. When the shrub awakens, its roots break the pot & destroy it. The awakened shrub is friendly toward you. Absent commands from you, it does nothing.",
		descriptionFull : "This clay pot is stamped with an oak leaf, the holy symbol of Silvanus. If you plant an ordinary shrub in this 10-lb pot and let it grow for 30 days, the shrub magically transforms into an awakened shrub at the end of that time. When the shrub awakens, its roots break the pot, destroying it.\n   The awakened shrub is friendly toward you. Absent commands from you, it does nothing.",
		weight : 10
	},
	"prosthetic limb (ddal10-6)" : {
		name : "Prosthetic Limb (DDAL10-6)",
		source : [["AL","S10"]],
		rarity : "common",
		magicItemTable : "?",
		description : "This high-performance, alien technology resembles a polished obsidian spider leg w/ gold web designs. When attached, its off-world materials fold in on themselves & reconfigure into the desired limb. This artificial limb replaces a missing appendage & works identically to the lost body part. You can detach or reattach as an action, and it can't be removed by anyone else.",
		descriptionFull : "This high-performance, alien technology resembles a polished obsidian spider leg with gold web designs. When attached, its off-world materials fold in on themselves and reconfigure into the desired limb.\n   This artificial limb replaces a hand, arm, foot, leg, or similar appendage that was lost or removed. While the prosthetic is attached and attuned to you, it functions identically to the body part it is replacing. You can detach or reattach it as an action, and it can't be removed by anyone else.",
		action : [["action", "Prosthetic Limb (attach/detach)"]]
	},
	"rope of climbing (ddep8-3)" : {
		name : "Rope of Climbing (DDEP8-3)",
		source : [["AL","S8"]],
		rarity : "uncommon",
		magicItemTable : "B",
		description : "This 60ft fleshy rope is the magically animated tentacle of a roper bound w/ rings of silver & can hold 3000 lb. While you grasp hold of the rope, you can’t be forced to let go of it against your will. As an action while holding one end, you can animate it w/ the command word. Then, as a bonus action, you can command its other end to: start/stop moving (10 ft/turn), (un)fasten itself, coil itself, or (un)knot itself (50ft length, adv. to climb it). It has AC 20, 20 HP, heals 1 HP/5 min.",
		descriptionLong : "This fleshy cord is the magically animated tentacle of a roper bound with rings of silver. While you grasp hold of the rope, you can’t be forced to let go of it against your will. The 60-ft length of rope can hold up to 3000 lb. As an action while holding one end of the rope, you can speak the command word to animate it. Then, as a bonus action, you can command the other end to move 10 ft to a chosen destination up to its maximum length away, moving 10 ft on each of your turns until it reaches it. You can also use the bonus action to tell it to stop moving, to fasten itself securely, to unfasten itself, to knot or unknot itself, or to coil itself for carrying. While knotted, the rope shortens to 50 ft and grants advantage to climb it. The rope has AC 20 and 20 HP, regaining 1 HP per 5 minutes.",
		descriptionFull : "This fleshy cord is the magically animated tentacle of a roper bound with rings of silver. While you grasp hold of the rope, you can’t be forced to let go of it against your will.\n   This 60-foot length of rope weighs 3 pounds and can hold up to 3,000 pounds. If you hold one end of the rope and use an action to speak the command word, the rope animates. As a bonus action, you can command the other end to move toward a destination you choose. That end moves 10 feet on your turn when you first command it and 10 feet on each of your turns until reaching its destination, up to its maximum length away, or until you tell it to stop. You can also tell the rope to fasten itself securely to an object or to unfasten itself, to knot or unknot itself, or to coil itself for carrying.\n   If you tell the rope to knot, large knots appear at 1-foot intervals along the rope. While knotted, the rope shortens to a 50-foot length and grants advantage on checks made to climb it.\n   The rope has AC 20 and 20 hit points. It regains 1 hit point every 5 minutes as long as it has at least 1 hit point. If the rope drops to 0 hit points, it is destroyed.",
		weight : 3,
		action : [["action", "Rope of Climbing (animate)"], ["bonus action", "Rope of Climbing (move/fasten/knot/coil)"]]
	},
	"rope of entanglement (ccc-odfc1-2)" : {
		name : "Rope of Entanglement (CCC-ODFC1-2)",
		source : [["AL","CCC"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "When seen from the corner of your eye, this 30-ft rope appears to writhe about w/ a mind of its own. When w/i 120 ft of a creature w/ telepathy or psionic ability, the rope glows a faint purple (dim light to 1-ft). Hold rope & speak command word as action & it tries to entangle a creature you can see w/i 20 ft. Target makes a DC 15 Dex save or restrained. You can release it as a bonus action. The creature can use action to escape w/ a DC 15 Dex/Str check. The rope has AC 20, 20 HP, heals 1 HP/5 min.",
		descriptionFull : "When seen out of the corner of one’s eye, this rope appears to writhe about with a mind of its own, but clearly has not moved when looked at directly. Additionally, whenever you are within 120 feet of a creature with telepathy or psionic ability, the rope glows a faint purple (providing dim light within 1 foot).\n  This rope is 30 feet long and weighs 3 pounds. If you hold one end of the rope and use an action to speak its command word, the other end darts forward to entangle a creature you can see within 20 feet of you. The target must succeed on a DC 15 Dexterity saving throw or become restrained.\n   You can release the creature by using a bonus action to speak a second command word. A target restrained by the rope can use an action to make a DC 15 Strength or Dexterity check (target's choice). On a success, the creature is no longer restrained by the rope.\n   The rope has AC 20 and 20 hit points. It regains 1 hit point every 5 minutes as long as it has at least 1 hit point. If the rope drops to 0 hit points, it is destroyed.",
		weight : 3,
		action : [["action", "Rope of Entanglement (restrain)"], ["bonus action", "Rope of Entanglement (release)"]],
		weaponsAdd : ["Rope of Entanglement"],
		weaponOptions : {
			regExpSearch : /^(?=.*rope)(?=.*entanglement).*$/i,
			name : "Rope of Entanglement",
			source : [["SRD", 241], ["D", 197], ["AL","CCC"]],
			ability : 0,
			type : "Magic Item",
			damage : ["Dex save", "", "Restrained"],
			range : "20 ft",
			description : "Dexterity saving throw or restrained; DC 15 Strength or Dexterity check to escape",
			abilitytodamage : false,
			weight : 3,
			modifiers : [7, 0],
			dc : true
		}
	},
	"rope of entanglement (ddal7-7)" : {
		name : "Rope of Entanglement (DDAL7-7)",
		source : [["AL","S7"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "This rope is made from a 30-ft of wilted, thorny vine. Hold rope & speak command word as action & it tries to entangle a creature you can see w/i 20 ft. Target makes a DC 15 Dex save or restrained. Upon entangling a creature that's not undead/construct, the thorns dig into its flesh & feed — the vine grows green, leaves become full & vibrant, & colorful, aromatic flowers blossom down its length. You can release it as a bonus action. The creature can use action to escape w/ a DC 15 Dex/Str check. The rope has AC 20, 20 HP, heals 1 HP/5 min.",
		descriptionFull : "This rope is fashioned from a 30-foot length of wilted, thorny vine. If you hold one end of the rope and use an action to speak its command word, the other end darts forward to entangle a creature you can see within 20 feet of you. The target must succeed on a DC 15 Dexterity saving throw or become restrained. Upon entangling a creature that isn’t undead or a construct, the thorns dig into its target’s flesh and appear to feed—the vine grows green, its leaves become full and vibrant, and colorful, aromatic flowers blossom along its length.\n   You can release the creature by using a bonus action to speak a second command word. A target restrained by the rope can use an action to make a DC 15 Strength or Dexterity check (target's choice). On a success, the creature is no longer restrained by the rope.\n   The rope has AC 20 and 20 hit points. It regains 1 hit point every 5 minutes as long as it has at least 1 hit point. If the rope drops to 0 hit points, it is destroyed.",
		weight : 3,
		action : [["action", "Rope of Entanglement (restrain)"], ["bonus action", "Rope of Entanglement (release)"]],
		weaponsAdd : ["Rope of Entanglement"],
		weaponOptions : {
			regExpSearch : /^(?=.*rope)(?=.*entanglement).*$/i,
			name : "Rope of Entanglement",
			source : [["SRD", 241], ["D", 197], ["AL","S7"]],
			ability : 0,
			type : "Magic Item",
			damage : ["Dex save", "", "Restrained"],
			range : "20 ft",
			description : "Dexterity saving throw or restrained; DC 15 Strength or Dexterity check to escape",
			abilitytodamage : false,
			weight : 3,
			modifiers : [7, 0],
			dc : true
		}
	},
	"rotsalve (rmhep-01)" : {
		name : "Rotsalve (Keoghtom's Ointment)",
		source : [["AL:RMH"]],
		rarity : "uncommon",
		magicItemTable : "B",
		description : "This glass jar, 3 inches in diameter, contains 1d4+1 doses of a salve made of rendered humanoid fat. The putrid scent attracts the ire of the undead & for 1 hr after a creature receives the ointment, atk rolls by undead against that creature are made with advantage. As an action, 1 dose of the ointment can be swallowed or applied to the skin. The creature that receives it regains 2d8+2 hp, ceases to be poisoned, & is cured of any disease.",
		descriptionFull : "This glass jar, 3 inches in diameter, contains 1d4+1 doses of a salve that's made of rendered humanoid fat. The putrid scent of the ointment attracts the ire of the undead, and for 1 hour after a creature receives the ointment, attack rolls by undead against that creature are made with advantage. The jar and its contents weigh \xBD pound.\n   As an action, one dose of the ointment can be swallowed or applied to the skin. The creature that receives it regains 2d8+2 hit points, ceases to be poisoned, and is cured of any disease.",
		weight : 0.5,
		limfeaname : "Rotsalve",
		usages : "1d4+1",
		recovery : "Never"
	},
	"shadowneedle, unbreakable arrow (ccc-druid-1/ccc-tri-26)" : {
		name : "Shadowneedle, Unbreakable Arrow (CCC-DRUID-1/CCC-TRI-26)",
		source : [["AL","S10"]],
		type : "weapon (arrow)",
		rarity : "common",
		magicItemTable : "?",
		description : "One of 20 unbreakable arrows crafted w/ Shadowsong the oathbow. A gentle hum fills your mind when you nock this arrow on the bow & aim at a target, steadying your hand & steeling your focus. When fired from Shadowsong, you may say the words, “Needles, return to your thread” to make this arrow (& any other in its set) reappear in your quiver. This arrow can only be broken in an Antimagic Field.",
		descriptionFull : "One of twenty unbreakable arrows crafted with Shadowsong the oathbow, when this arrow is nocked onto the oathbow and leveled at an opponent, a gentle hum fills the wielder’s mind, steadying their hand and steeling their focus (this feature bears no mechanical effect). When fired from Shadowsong, the wielder may say the words, “Needles, return to your thread” to make this arrow (and any other in its set loosed from the wielder’s hand) reappear in the wielder’s quiver. This arrow can't be broken, except when it is within an Antimagic Field.",
		weight : 0.05
	},
	"sovad's staff of flying (ccc-rpsg-1)" : {
		name : "Sovad's Staff of Flying (Broom of Flying)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "This oak staff is capped by an ebony triangle inscribed with Auran runes. When activated by the command word, it hovers in the air; ephemeral strands of spiraling energy bristle from one end & spectral wings unfurl from the other. The broom can be ridden or sent alone up to 1 mile by naming a familiar location. It has a flying speed of 50 ft & holds up to 400 lb (30 ft speed if over 200 lb). It stops hovering when you land. With a 2nd command, it flies to you if within 1 mile.",
		descriptionFull : "This wooden broom, which weighs 3 pounds, functions like a mundane broom until you stand astride it and speak its command word. It then hovers beneath you and can be ridden in the air. It has a flying speed of 50 feet. It can carry up to 400 pounds, but its flying speed becomes 30 feet while carrying over 200 pounds. The broom stops hovering when you land.\n   You can send the broom to travel alone to a destination within 1 mile of you if you speak the command word, name the location, and are familiar with that place. The broom comes back to you when you speak another command word, provided that the broom is still within 1 mile of you.\n   This oaken walking staff is capped by a triangle of ebony inscribed with runes in Auran. When activated, ephemeral strands of spiraling energy bristle from one end and a pair of spectral wings unfurl from the other.",
		weight : 3
	},
	"unbreakable arrow (ddal10-0)" : {
		name : "Unbreakable Arrow (DDAL10-0)",
		source : [["AL","S10"]],
		type : "weapon (arrow)",
		rarity : "common",
		magicItemTable : "?",
		description : "Gifted to you by Shaktal of the Reghed Wolf Tribe, this arrow proves to Wolf Tribe members loyal to Aluka that the bearer is a friend and ally. This arrow can't be broken, except when it is within an Antimagic Field.",
		weight : 0.05
	},
	"the vampire's die (ccc-gsp2-3)" : {
		name : "The Vampire's Die (Charlatan's Die)",
		source : [["AL","CCC"]],
		rarity : "common",
		magicItemTable : "?",
		description : "This crimson die with white pips feels heavier than those that can be purchased in the local market. Whenever you roll this six-sided die while attuned, you can control which number it rolls.",
		attunement : true,
	},
	"veteran's cane (ccc-druids-3)" : {
		name : "Veteran's Cane (CCC-DRUIDS-3)",
		source : [["AL","CCC"]],
		rarity : "common",
		magicItemTable : "?",
		description : "This sword cane belonged to the Dashing Defector that the characters prevented from defecting. The handle has their faction’s crest. When you grasp this walking cane and use a bonus action to speak the command word, it transforms into an ordinary longsword and ceases to be magical.",
		descriptionFull : "This sword cane belonged to the Dashing Defector that the characters prevented from defecting. The handle has their faction’s crest. Once as a bonus action, you can grasp this walking cane and speak its command word to have it transform into an ordinary longsword. Once transformed, the longsword is nonmagical and can't revert back to a walking cane.",
		weight : 4,
		action : [["bonus action", "Veteran's Cane"]]
	},
	"walloping arrow (ccc-druids-3)" : {
		name : "Walloping Arrow (CCC-DRUIDS-3)",
		source : [["AL","CCC"]],
		type : "weapon (arrow)",
		rarity : "common",
		magicItemTable : "?",
		description : "This arrow has a broad, blunt point shaped like a mailed fist, a prize for service faithful to the Order of the Gauntlet. It packs a wallop. A creature hit by this arrow must succeed on a DC 10 Strength saving throw or be knocked prone.",
		descriptionFull : "This arrow has a broad, blunt point shaped like a mailed fist, a prize for service faithful to the Order of the Gauntlet.\n   This ammunition packs a wallop. A creature hit by the ammunition must succeed on a DC 10 Strength saving throw or be knocked prone.",
		allowDuplicates : true,
	},
	"wind fan (ddal0-9)" : {
		name : "Wind Fan (DDAL0-9)",
		source : [["AL","S0"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "Several notes are sewn in silver across this fan. When used, the wind smells like somebody flumphed. While holding fan, action to cast Gust of Wind spell (DC 13). Once used, the fan shouldn't be used again until dawn. Each time used before then, cumulative 20% chance of destruction.",
		descriptionFull : "Several notes are sewn in silver across this fan. When used, the wind smells like somebody flumphed. While holding this fan, you can use an action to cast the Gust of Wind spell (save DC 13) from it. Once used, the fan shouldn't be used again until the next dawn. Each time it is used again before then, it has a cumulative 20% chance of not working and tearing into useless, nonmagical tatters.",
		limfeaname : "Wind Fan",
		usages : 1,
		recovery : "dawn",
		additional : "more uses +20% to destroy",
		fixedDC : 13,
		spellcastingBonus : {
			name : "Once per dawn",
			spells : ["gust of wind"],
			selection : ["gust of wind"],
			firstCol : "oncelr"
		}
	},
	"wind fan (ddal4-5)" : {
		name : "Wind Fan (DDAL4-5)",
		source : [["AL","S4"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "This fan is made of thin, brittle parchment glued over sharpened iron tines. When used, its wind is bone-chillingly cold & carries the sickly-sweet stench of rotting flesh. The fan can be used as a weapon: a nonmagical short sword (dealing slashing dmg) when open or a nonmagical club when closed. While holding fan, action to cast Gust of Wind spell (DC 13). Once used, the fan shouldn't be used again until dawn. Each time used before then, cumulative 20% chance of destruction.",
		descriptionFull : "This fan is made of thin, brittle parchment glued over sharpened iron tines. When used, the wind issuing from this fan is bone-chillingly cold and carries the sickly-sweet stench of rotting flesh. The fan can be used as a weapon; it is treated as a nonmagical short sword (dealing slashing damage) when it is open, or as a non-magical club when it is closed. While holding this fan, you can use an action to cast the Gust of Wind spell (save DC 13) from it. Once used, the fan shouldn't be used again until the next dawn. Each time it is used again before then, it has a cumulative 20% chance of not working and tearing into useless, nonmagical tatters.",
		limfeaname : "Wind Fan",
		usages : 1,
		recovery : "dawn",
		additional : "more uses +20% to destroy",
		fixedDC : 13,
		spellcastingBonus : {
			name : "Once per dawn",
			spells : ["gust of wind"],
			selection : ["gust of wind"],
			firstCol : "oncelr"
		}
	},
	"the witchstone, walloping bullet (ccc-cic-15)" : {
		name : "The Witchstone, Walloping Bullet (CCC-CIC-15)",
		source : [["AL","CCC"]],
		type : "weapon (sling bullet)",
		rarity : "common",
		magicItemTable : "?",
		description : "This large stone is covered in Celestial runes marking fey & undead creatures as its enemies. It packs a wallop. A creature hit by this sling bullet must succeed on a DC 10 Strength saving throw or be knocked prone.",
		descriptionFull : "This large stone is covered in Celestial runes marking fey and undead creatures as its enemies.\n   This ammunition packs a wallop. A creature hit by the ammunition must succeed on a DC 10 Strength saving throw or be knocked prone.",
		allowDuplicates : true,
	},
}

MagicItemsList["al eyewear"] = {
		name : "AL Eyewear",
		type : "wondrous item",
		allowDuplicates : true,
	choices : ["Eyes of Charming (CCC-AMER-1)","Eyes of Charming (DDAL4-4)","Eyes of the Eagle (DDAL9-2)","Eyes of Minute Seeing (CCC-GSP-PHIL1-2)","Eyes of Minute Seeing (DDEX3-12)","Goggles of Night (CCC-TTS-1)","Goggles of Night (DDEX1-4)", "Goggles of Night (DDAL7-4)", "Goggles of Night (DDAL8-2)","Goggles of Night (DDAL10-1)","Doomseers Lenses (RMH-02)"],
	"eyes of charming (ccc-amer-1)" : {
		name : "Eyes of Charming (CCC-AMER-1)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "Crafted of an oddly moist, slick leather w/ unsettling purplish lenses, these goggles make the attuned wearer feel a kinship w/ the unwholesome denizens of the Far Realm & other aberrations. While wearing them, you can expend 1 charge as an action to cast Charm Person (save DC 13) on a humanoid w/i 30 ft, provided that you & the target can see each other. The goggles have 3 charges & regain all charges at dawn.",
		descriptionFull : "Crafted of an oddly moist, slick leather with unsettling purplish lenses, these goggles make the attuned wearer feel an odd kinship with the unwholesome denizens of the Far Realm and other aberrations. The lenses have 3 charges. While wearing them, you can expend 1 charge as an action to cast the Charm Person spell (save DC 13) on a humanoid w/i 30 ft of you, provided that you & the target can see each other. The glasses regain all expended charges daily at dawn.",
		attunement : true,
		limfeaname : "Eyes of Charming",
		usages : 3,
		recovery : "dawn",
		spellcastingBonus : {
			name : "1 charge",
			spells : ["charm person"],
			selection : ["charm person"],
			firstCol : 1
		},
		fixedDC : 13,
		spellFirstColTitle : "Ch"
	},
	"eyes of charming (ddal4-4)" : {
		name : "Eyes of Charming (DDAL4-4)",
		source : [["AL","S4"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "These glasses sport lenses of brilliant amber w/ slender slivers of green glass resembling the slit pupils of a serpent's eyes. While wearing them, you can expend 1 charge as an action to cast Charm Person (save DC 13) on a humanoid w/i 30 ft, provided that you & the target can see each other. If you're evil, you may choose to impose disadv. on the effect’s saving throw once/day. The glasses have 3 charges & regain all charges at dawn.",
		descriptionFull : "These glasses sport lenses of brilliant amber w/ slender slivers of green glass resembling the vertical pupils of a serpent’s eyes & have 3 charges. While wearing them, you can expend 1 charge as an action to cast the Charm Person spell (save DC 13) on a humanoid w/i 30 ft of you, provided that you & the target can see each other. If you're evil, you may choose to impose disadv. on the effect’s saving throw. Once this feature of the glasses has been used, it can’t be used again until the following dawn. The glasses also regain all expended charges daily at dawn.",
		attunement : true,
		limfeaname : "Eyes of Charming",
		usages : 3,
		recovery : "dawn",
		spellcastingBonus : {
			name : "1 charge",
			spells : ["charm person"],
			selection : ["charm person"],
			firstCol : 1
		},
		fixedDC : 13,
		spellFirstColTitle : "Ch"
	},
	"eyes of the eagle (ddal9-2)" : {
		name : "Eyes of the Eagle (DDAL9-2)",
		source : [["AL","S9"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "These goggles are made of leather & have lenses of dark red crystal that fit over the eyes. Their frame is emblazoned w/ the emblem of the Hellriders: a horse’s head upon a sunburst. When looking through them, tiny illusory flames dance around the edges of the lenses when w/i 120 ft of a demon, & you have adv. on WIS (Perception) checks that rely on sight. When there's clear visibility, you can see details of distant creatures & objects as small as 2ft across.",
		descriptionFull : "These goggles are made of leather and have lenses of dark red crystal that fit over the eyes. Their frame is emblazoned with the emblem of the Hellriders: a horse’s head superimposed upon a sunburst. Additionally, when looking through these goggles, tiny illusory flames can be seen dancing around the edges of the lenses when within 120 feet of a demon. While wearing them, you have advantage on Wisdom (Perception) checks that rely on sight. In conditions of clear visibility, you can make out details of even extremely distant creatures and objects as small as 2 feet across.",
		attunement : true,
		vision : [["Adv. on Perception checks that rely on sight", 0]]
	},
	"eyes of minute seeing (ccc-gsp-phil1-2)" : {  // contains contributions by Soilentbrad
		name : "Eyes of Minute Seeing (CCC-GSP-PHIL1-2)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "C",
		description : "These spectacles are wrought of thick brass, inset with a row of tiny rubies. A small line of efreeti script inside the band states that the spectacles’ place of origin is the City of Brass in the Elemental Plane of Fire. When you focus through these lenses, you see a slight glow from each object you inspect —  the warmer the object, the brighter the glow. You also have advantage on Int (Investigation) checks that rely on sight while searching an area or studying an object within 1 ft.",
		descriptionFull : "These spectacles are wrought of thick brass, inset with a row of tiny rubies. A small line of efreeti script has been inscribed inside the band. A creature that can read this script learns that the spectacles’ place of origin is the City of Brass in the Elemental Plane of Fire. When the wearer of this magic item focuses through its lenses, they see a slight glow from each object they inspect—the warmer the object, the brighter the glow.\n   These crystal lenses fit over the eyes. While using them, you can see much better than normal out to a range of 1 ft. You have advantage on Int (Investigation) checks that rely on sight while searching an area or studying an object within that range.",
		vision : [["Adv. on Investigation checks based on sight", 1]],
	},
	"eyes of minute seeing (ddex3-12)" : {  // contains contributions by Soilentbrad
		name : "Eyes of Minute Seeing (DDEX3-12)",
		source : [["AL","S3"]],
		rarity : "uncommon",
		magicItemTable : "C",
		description : "These smoky crystal lenses are set in a brass frame and allow the wearer to read Abyssal. While using them, you can see much better than normal out to a range of 1 ft. You have advantage on Int (Investigation) checks that rely on sight while searching an area or studying an object within that range.",
		vision : [["Adv. on Investigation checks based on sight", 1]],
		languageProfs : ["Abyssal (reading only)"]
	},
	"goggles of night (ccc-tts-1)" : {   // contributions by AelarTheElfRogue
		name : "Goggles of Night (CCC-TTS-1)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "B",
		description: "These are lead miners’ goggles, with large heavy lenses and wide leather straps. While wearing these dark lenses, you have darkvision out to a range of 60 feet. If you already have darkvision, wearing the goggles increases its range by 60 feet.",
		descriptionFull: "They come in the form of lead miners’ goggles, with large heavy lenses and wide leather straps. While wearing these dark lenses, you have darkvision out to a range of 60 feet. If you already have darkvision, wearing the goggles increases its range by 60 feet.",
		vision : [["Darkvision", "fixed 60"], ["Darkvision", "+60"]]
		},
	"goggles of night (ddex1-4)" : {   // contributions by AelarTheElfRogue
		name : "Goggles of Night (DDEX1-4)",
		source : [["AL","S1"]],
		rarity : "uncommon",
		magicItemTable : "B",
		description: "These brass-framed goggles feel cool to the touch when worn. While wearing these dark lenses, you have darkvision out to a range of 60 feet. If you already have darkvision, wearing the goggles increases its range by 60 feet.",
		vision : [["Darkvision", "fixed 60"], ["Darkvision", "+60"]]
		},
	"goggles of night (ddal7-4)" : {
		name : "Goggles of Night (DDAL7-4)",
		source : [["AL","S7"]],
		rarity : "uncommon",
		magicItemTable : "B",
		description: "These green-tinted lenses are set in frames of platinum & jade & held in place w/ a strap of matte-black leather. When wearing the goggles, your sense of smell is unusually strong, & living creatures are visualized in varying shades of blues, reds, & yellows that correspond to their body’s natural heat. You have darkvision out to a range of 60ft. If you already have darkvision, the goggles adds 60ft to the range.",
		descriptionFull: "The green-tinted lenses of these goggles are set in frames of platinum & jade & held in place with a broad strap of matte-black leather. When worn, your sense of smell is unusually strong, & living creatures you can see are visualized in varying shades of blues, reds, & yellows that correspond to their body’s natural heat. While wearing these lenses, you have darkvision out to a range of 60 ft. If you already have darkvision, wearing the goggles increases its range by 60 ft.",
		vision : [["Darkvision", "fixed 60"], ["Darkvision", "+60"]]
		},
	"goggles of night (ddal8-2)" : {
		name : "Goggles of Night (DDAL8-2)",
		source : [["AL","S8"]],
		rarity : "uncommon",
		magicItemTable : "B",
		description: "These goggles are done in a bat motif and studded with teeth. The wearer frequently finds blood dripping from their scalp or face as if they have been bitten by a small animal. While wearing these lenses, you have darkvision out to a range of 60 feet. If you already have darkvision, wearing the goggles increases its range by 60 feet.",
		vision : [["Darkvision", "fixed 60"], ["Darkvision", "+60"]]
		},
	"goggles of night (ddal10-1)" : {
		name : "Goggles of Night (DDAL10-1)",
		source : [["AL","S10"]],
		rarity : "uncommon",
		magicItemTable : "B",
		description: "These goggles consist of thin sheets of translucent black crystal set into brass and leather framers. While wearing these lenses, you have darkvision out to a range of 60 feet. If you already have darkvision, wearing the goggles increases its range by 60 feet.",
		vision : [["Darkvision", "fixed 60"], ["Darkvision", "+60"]]
		},
	"doomseers lenses (rmh-02)" : {
		name : "Doomseers Lenses (Goggles of Night)",
		source : [["AL:RMH"]],
		rarity : "uncommon",
		magicItemTable : "B",
		description: "These lenses are set into a mask made from pieces of tanned humanoid flesh, stitched together w/ coarse twine. If you're frightened when your turn starts, you must pass a DC 11 Wisdom save or be incapacitated until the start of your next turn as visions of undead creatures swarm around you. While wearing these lenses, you have darkvision to a range of 60 ft. If you already have darkvision, wearing the goggles increases its range by 60 ft.",
		descriptionFull: "These lenses are set into a mask fashioned of various pieces of tanned humanoid flesh, stitched together with coarse twine. If you are frightened at the start of your turn, you must succeed on a DC 11 Wisdom saving throw or be incapacitated until the start of your next turn as visions of countless undead creatures swarm around you. While wearing these lenses, you have darkvision out to a range of 60 feet. If you already have darkvision, wearing the goggles increases its range by 60 feet.",
		vision : [["Darkvision", "fixed 60"], ["Darkvision", "+60"]]
		},
}

MagicItemsList["al figurines"] = {  // contains contributions by Larry Hoy
		name: "AL Figurines", 
		type: "wondrous item",
		allowDuplicates : true,
		descriptionFull: "A figurine of wondrous power is a statuette of a beast small enough to fit in a pocket. If you use an action to speak the command word and throw the figurine to a point on the ground within 60 feet of you, the figurine becomes a living creature. If the space where the creature would appear is occupied by other creatures or objects, or if there isn't enough space for the creature, the figurine doesn't become a creature.\n   The creature is friendly to you and your companions. It understands your languages and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions.\n   The creature exists for a duration specific to each figurine. At the end of the duration, the creature reverts to its figurine form. It reverts to a figurine early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature becomes a figurine again, its property can't be used again until a certain amount of time has passed, as specified in the figurine's description.",
		action : [["action", "Figurine of Wondrous Power"]],
		choices : ["Bronze Griffon (CCC-QCC2018-2)", "The Plague Fly (CCC-TAROT2-1)", "Golden Lions (CCC-FC3-1-2)", "Ivory Goats (CCC-BMG-16 ELMW1-1)", "Ivory Goats (CCC-DES-1-1)", "Steel Mammoth (CCC-ODFC3-3)", "Obsidian Steed (DDEP0-1)", "Onyx Dog (CCC-CIC-2)", "Serpentine Owl (DDEX2-9)", "Snowy Owl (DDEP10-0)"],
		"bronze griffon (ccc-qcc2018-2)" : {
			name : "Bronze Griffon (CCC-QCC2018-2)",
			rarity : "rare",
			source : [["AL","CCC"]],
			magicItemTable : "G",
			description: "As an action, you can speak the command word “malaeda” & throw this crudely-worked bronze statuette of a griffon rampant to an unoccupied space within 60 ft, where it becomes a griffon for up to 6 hrs, until you use command word again, or it reaches 0 hp. It is friendly, understands your languages, & obeys your commands.",
			descriptionLong: "As an action, you can speak the command word “malaeda” and throw this crudely-worked bronze statuette of a griffon rampant to an unoccupied space within 60 ft, where it becomes a griffon for up to 6 hours, until yoou use an action to repeat the command word, or it reaches 0 hp. It is friendly to you and your allies, understands your languages, and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions. When it reverts back to a figurine, it can't be used again until 5 days have passed.",
			descriptionFull: "The command word for this crudely-worked bronze statuette of a griffon rampant is “malaeda”.\n   This figurine of wondrous power is a bronze statuette of a griffon rampant, small enough to fit in a pocket. If you use an action to speak the command word and throw the figurine to a point on the ground within 60 feet of you, the figurine becomes a living griffon. If the space where the creature would appear is occupied by other creatures or objects, or if there isn't enough space for the creature, the figurine doesn't become a creature.\n   The creature is friendly to you and your companions. It understands your languages and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions.\n   The creature exists for 6 hours. At the end of the duration, the creature reverts to its figurine form. It reverts to a figurine early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature becomes a figurine again, its property can't be used again until 5 days have passed.",
			limfeaname : "Bronze Griffon",
			usages : 1,
			recovery : "5 days"
		},
		"the plague fly (ccc-tarot2-1)" : {
			name : "The Plague Fly (Ebony Fly)",
			magicItemTable : "G",
			source : [["AL","CCC"]],
			description: "As an action, you can speak the command word & throw this statuette to an unoccupied space within 60 ft, where it becomes a giant fly for up to 12 hrs, until you use the command word again, or it reaches 0 hp. The holy symbol of Talona is etched into its forehead with three small pieces of inset amber. When it transforms, the marking becomes vivid purple & the amber seems glow. The fly is friendly, understands your languages, obeys your commands, & can be ridden as a mount.",
			descriptionLong: "As an action, you can speak the command word & throw this ebony statuette of a horsefly to an unoccupied space within 60 ft, where it becomes a giant fly for up to 12 hrs, until you use an action to repeat the command word, or it reaches 0 hp. The holy symbol of Talona is etched into its forehead with three small pieces of inset amber. When it transforms, the marking becomes vivid purple & the amber seems glow. The fly is friendly to you & your allies, understands your languages, obeys your spoken commands, & can be ridden as a mount. If you issue no commands, the creature defends itself but takes no other actions. When it reverts back to a figurine, it can't be used again until 2 days have passed.",
			descriptionFull : "This figurine of wondrous power is an ebony statuette carved in the likeness of a horsefly with the holy symbol of Talona etched into its forehead with three small pieces of inset amber. When it becomes a creature, the marking becomes vivid purple and the pieces of amber seem to have an inner glow. It's small enough to fit in a pocket.\n   If you use an action to speak the command word and throw the figurine to a point on the ground within 60 feet of you, the figurine becomes a living giant fly and can be ridden as a mount. If the space where the creature would appear is occupied by other creatures or objects, or if there isn't enough space for the creature, the figurine doesn't become a creature.\n   The creature is friendly to you and your companions. It understands your languages and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions.\n   The creature exists for 12 hours. At the end of the duration, the creature reverts to its figurine form. It reverts to a figurine early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature becomes a figurine again, its property can't be used again until 2 days have passed.",
			limfeaname : "The Plague Fly",
			usages : 1,
			recovery : "2 days"
		},
		"golden lions (ccc-fc3-1-2)" : {
			name : "Golden Lions (CCC-FC3-1-2)",
			rarity : "rare",
			source : [["AL","CCC"]],
			magicItemTable : "G",
			description: "As an action, you can speak the command word & throw one or both of these gold statuettes to an unoccupied space w/i 60 ft, where each becomes a lion for 1 hr, until you  use the command word again, or it reaches 0 hp. The lions that appear are twinned pairs of contrast coloration. One white w/ black stripes, the other black w/ white stripes. They are friendly, understand your languages, & obey your commands.",
			descriptionLong: "As an action, you can speak the command word and throw one or both of these gold statuette of a lion to an unoccupied space within 60 ft, where each becomes a lion for up to 1 hr, until you use an action to repeat the command word, or it reaches 0 hp. The lions that appear are twinned pairs of opposite colouration. One white w/ black stripes, the other black w/ white stripes. They are friendly to you and your allies, understands your languages, and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions. When it reverts back to a figurine, it can't be used again for 7 days.",
			descriptionFull : "This figurine of wondrous power is a pair of gold statuette of lions, small enough to fit in a pocket. If you use an action to speak the command word and throw one or both of the figurine to a point on the ground within 60 feet of you, each figurine becomes a living lion. The lions that appear are twinned pairs of opposite colouration. One white with black stripes, the other black with white stripes. If the space where the creature would appear is occupied by other creatures or objects, or if there isn't enough space for the creature, the figurine doesn't become a creature.\n   The creature is friendly to you and your companions. It understands your languages and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions.\n   The creature exists for 1 hour. At the end of the duration, the creature reverts to its figurine form. It reverts to a figurine early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature becomes a figurine again, its property can't be used again until 7 days have passed.",
			limfeaname : "Golden Lions",
			usages : 2,
			recovery : "7 days"
		},
		"ivory goats (ccc-bmg-16 elmw1-1)" : {
			name : "Ivory Goats (CCC-BMG-16 ELMW1-1)",
			rarity : "rare",
			magicItemTable : "G",
			source : [["AL","CCC"]],
			allowDuplicates : true,
			advantages : [["Stealth", false]],
			description: "These 3 ivory figurines are of brown & white goats w/ long floppy ears. While in goat form, the goats bleat loudly and give you disadv. on stealth checks. As an action, you can speak the command word and throw one or more of these statuettes to an unoccupied space within 60 ft, where each becomes a creature, until you use the command word again, or it reaches 0 hp. They are friendly, understands your languages, and obeys your commands. See Notes page.",
			descriptionLong: "These ivory figurines are of three brown and white goats with long floppy ears. While in goat form, the goats bleat loudly and give you disadv. on stealth checks. As an action, you can speak the command word and throw 1+ of these statuettes to an unoccupied space within 60 ft, where each becomes a creature, until you use an action to repeat the command word, or it reaches 0 hp. They are friendly to you and your allies, understands your languages, and obeys your spoken commands. If no commands issued, the creature defends itself but takes no other actions. When it reverts back to a figurine, it can't be used again until a certain amount of time has passed. See Notes page for details about each of the statuettes.",
			descriptionFull: "These ivory figurines are of three brown and white goats with long floppy ears. While in goat form, the goats bleat loudly and give you disadv. on stealth checks. Each goat looks unique and functions differently from the others. If you use an action to speak the command word and throw one or more of the figurines to a point on the ground within 60 feet of you, each figurine becomes a living creature. If the space where the creature would appear is occupied by other creatures or objects, or if there isn't enough space for the creature, the figurine doesn't become a creature.\n   The creature is friendly to you and your companions. It understands your languages and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions.\n   The creature exists for a duration specific to each figurine. At the end of the duration, the creature reverts to its figurine form. It reverts to a figurine early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature becomes a figurine again, its property can't be used again until a certain amount of time has passed, as specified in the figurine's description." +
			"\n \u2022 The goat of traveling can become a Large goat with the same statistics as a riding horse. It has 24 charges, and each hour or portion thereof it spends in beast form costs 1 charge. While it has charges, you can use it as often as you wish. When it runs out of charges, it reverts to a figurine and can't be used again until 7 days have passed, when it regains all its charges." +
			"\n \u2022 The goat of travail becomes a giant goat for up to 3 hours. Once it has been used, it can't be used again until 30 days have passed." +
			"\n \u2022 The goat of terror becomes a giant goat for up to 3 hours. The goat can't attack, but you can remove its horns and use them as weapons. One horn becomes a +1 lance, and the other becomes a +2 longsword. Removing a horn requires an action, and the weapons disappear and the horns return when the goat reverts to figurine form. In addition, the goat radiates a 30-foot-radius aura of terror while you are riding it. Any creature hostile to you that starts its turn in the aura must succeed on a DC 15 Wisdom saving throw or be frightened of the goat for 1 minute, or until the goat reverts to figurine form. The frightened creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Once it successfully saves against the effect, a creature is immune to the goat's aura for the next 24 hours. Once the figurine has been used, it can't be used again until 15 days have passed.",
			extraLimitedFeatures : [{
				name : "Figurine [Ivory Goat of Traveling]",
				usages : 24,
				recovery : "7 days"
			}, {
				name : "Figurine [Ivory Goat of Travail]",
				usages : 1,
				recovery : "30 days"
			}, {
				name : "Figurine [Ivory Goat of Terror]",
				usages : 1,
				recovery : "15 days"
			}],
			toNotesPage : [{
				name : "Ivory Goat Details",
				note : [
					"The goat of traveling can become a Large goat with the same statistics as a riding horse. It has 24 charges, and each hour or portion thereof it spends in beast form costs 1 charge. While it has charges, you can use it as often as you wish. When it runs out of charges, it reverts to a figurine and can't be used again until 7 days have passed, when it regains all its charges.",
					"The goat of travail becomes a giant goat for up to 3 hours. Once it has been used, it can't be used again until 30 days have passed.",
					"The goat of terror becomes a giant goat for up to 3 hours. The goat can't attack, but I can remove its horns and use them as weapons. One horn becomes a +1 lance, and the other becomes a +2 longsword. Removing a horn requires an action, and the weapons disappear and the horns return when the goat reverts to figurine form. In addition, the goat radiates a 30-ft radius aura of terror while I am riding it. Any creature hostile to me that starts its turn in the aura must succeed on a DC 15 Wisdom saving throw or be frightened of the goat for 1 minute, or until the goat reverts to figurine form. The frightened creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Once it successfully saves against the effect, a creature is immune to the goat's aura for the next 24 hours. Once the figurine has been used, it can't be used again until 15 days have passed."
				]
			}],
			weaponsAdd : ["Lance +1, Ivory Goat Horn", "Longsword +2, Ivory Goat Horn"],
			weaponOptions : [{
				baseWeapon : "lance",
				regExpSearch : /^(?=.*ivory)(?=.*goat)(?=.*lance).*$/i,
				name : "Lance +1, Ivory Goat Horn",
				source : [["SRD", 222], ["D", 170], ["AL","CCC"]],
			}, {
				baseWeapon : "longsword",
				regExpSearch : /^(?=.*ivory)(?=.*goat)(?=.*longsword).*$/i,
				name : "Longsword +2, Ivory Goat Horn",
				source : [["SRD", 222], ["D", 170], ["AL","CCC"]],
			}]
		},
		"ivory goats (ccc-des-1-1)" : {
			name : "Ivory Goats (CCC-DES-1-1)",
			rarity : "rare",
			magicItemTable : "G",
			source : [["AL","CCC"]],
			allowDuplicates : true,
			advantages : [["Stealth", false]],
			description: "These statues are always coated with a gritty film, & smell like rancid goat butter when fey creatures are w/i 50 ft. As an action, you can speak the command word & throw one or more of these statuettes to an unoccupied space within 60 ft, where each becomes a creature, until you use the command word again, or it reaches 0 hp. They are friendly, understands your languages, & obeys your commands. See Notes page.",
			descriptionLong: "These statues are always coated with a gritty film, and smell like rancid goat butter when fey creatures are within 50 feet.  As an action, you can speak the command word and throw 1+ of these statuettes to an unoccupied space within 60 ft, where each becomes a creature, until you use an action to repeat the command word, or it reaches 0 hp. They are friendly to you and your allies, understands your languages, and obeys your spoken commands. If no commands issued, the creature defends itself but takes no other actions. When it reverts back to a figurine, it can't be used again until a certain amount of time has passed. See Notes page for details about each of the statuettes.",
			descriptionFull: "These statues are always coated with a gritty film, and smell like rancid goat butter when fey creatures are within 50 feet. Each goat looks unique and functions differently from the others. If you use an action to speak the command word and throw one or more of the figurines to a point on the ground within 60 feet of you, each figurine becomes a living creature. If the space where the creature would appear is occupied by other creatures or objects, or if there isn't enough space for the creature, the figurine doesn't become a creature.\n   The creature is friendly to you and your companions. It understands your languages and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions.\n   The creature exists for a duration specific to each figurine. At the end of the duration, the creature reverts to its figurine form. It reverts to a figurine early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature becomes a figurine again, its property can't be used again until a certain amount of time has passed, as specified in the figurine's description." +
			"\n \u2022 The goat of traveling can become a Large goat with the same statistics as a riding horse. It has 24 charges, and each hour or portion thereof it spends in beast form costs 1 charge. While it has charges, you can use it as often as you wish. When it runs out of charges, it reverts to a figurine and can't be used again until 7 days have passed, when it regains all its charges." +
			"\n \u2022 The goat of travail becomes a giant goat for up to 3 hours. Once it has been used, it can't be used again until 30 days have passed." +
			"\n \u2022 The goat of terror becomes a giant goat for up to 3 hours. The goat can't attack, but you can remove its horns and use them as weapons. One horn becomes a +1 lance, and the other becomes a +2 longsword. Removing a horn requires an action, and the weapons disappear and the horns return when the goat reverts to figurine form. In addition, the goat radiates a 30-foot-radius aura of terror while you are riding it. Any creature hostile to you that starts its turn in the aura must succeed on a DC 15 Wisdom saving throw or be frightened of the goat for 1 minute, or until the goat reverts to figurine form. The frightened creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Once it successfully saves against the effect, a creature is immune to the goat's aura for the next 24 hours. Once the figurine has been used, it can't be used again until 15 days have passed.",
			extraLimitedFeatures : [{
				name : "Figurine [Ivory Goat of Traveling]",
				usages : 24,
				recovery : "7 days"
			}, {
				name : "Figurine [Ivory Goat of Travail]",
				usages : 1,
				recovery : "30 days"
			}, {
				name : "Figurine [Ivory Goat of Terror]",
				usages : 1,
				recovery : "15 days"
			}],
			toNotesPage : [{
				name : "Ivory Goat Details",
				note : [
					"The goat of traveling can become a Large goat with the same statistics as a riding horse. It has 24 charges, and each hour or portion thereof it spends in beast form costs 1 charge. While it has charges, you can use it as often as you wish. When it runs out of charges, it reverts to a figurine and can't be used again until 7 days have passed, when it regains all its charges.",
					"The goat of travail becomes a giant goat for up to 3 hours. Once it has been used, it can't be used again until 30 days have passed.",
					"The goat of terror becomes a giant goat for up to 3 hours. The goat can't attack, but I can remove its horns and use them as weapons. One horn becomes a +1 lance, and the other becomes a +2 longsword. Removing a horn requires an action, and the weapons disappear and the horns return when the goat reverts to figurine form. In addition, the goat radiates a 30-ft radius aura of terror while I am riding it. Any creature hostile to me that starts its turn in the aura must succeed on a DC 15 Wisdom saving throw or be frightened of the goat for 1 minute, or until the goat reverts to figurine form. The frightened creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Once it successfully saves against the effect, a creature is immune to the goat's aura for the next 24 hours. Once the figurine has been used, it can't be used again until 15 days have passed."
				]
			}],
			weaponsAdd : ["Lance +1, Ivory Goat Horn", "Longsword +2, Ivory Goat Horn"],
			weaponOptions : [{
				baseWeapon : "lance",
				regExpSearch : /^(?=.*ivory)(?=.*goat)(?=.*lance).*$/i,
				name : "Lance +1, Ivory Goat Horn",
				source : [["SRD", 222], ["D", 170], ["AL","CCC"]],
			}, {
				baseWeapon : "longsword",
				regExpSearch : /^(?=.*ivory)(?=.*goat)(?=.*longsword).*$/i,
				name : "Longsword +2, Ivory Goat Horn",
				source : [["SRD", 222], ["D", 170], ["AL","CCC"]],
			}]
		},
		"steel mammoth (ccc-odfc3-3)" : {
			name : "Steel Mammoth (CCC-ODFC3-3)",
			rarity : "rare",
			source : [["AL","CCC"]],
			magicItemTable : "G",
			description: "This 4 inch mammoth figurine is made of well-polished steel & seems to be a single solid piece of exquisite detail. As an action, speak the command word & throw it to an unoccupied space within 60 ft. The figure moves & makes a trumpeting sound as it becomes a elephant for up to 24 hrs, until you use the command word again, or it reaches 0 hp. It's friendly, understands your languages, & obeys your commands. If no commands, defends self.",
			descriptionLong: "This 4 inch mammoth figurine is made of well-polished steel & seems to be a single solid piece of exquisite detail. As an action, you can speak the command word & throw it to an unoccupied space within 60 ft. The figure moves & makes a trumpeting sound as it becomes a elephant for up to 24 hrs, until you use an action to repeat the command word, or it reaches 0 hp. It's friendly to you & your allies, understands your languages, & obeys your spoken commands. If you issue no commands, it defends itself but takes no other actions. When it reverts back to a figurine, it can't be used again for 7 days.",
			descriptionFull: "This mammoth figurine is made of well-polished steel and appears to be a single solid piece of exquisite detail. It's about 4 inches high and long, small enough to fit in a pocket. If you use an action to speak the command word and throw the figurine to a point on the ground within 60 feet of you, the figurine becomes a living elephant, moving and making a large trumpeting sound as it comes to life.\n   If the space where the creature would appear is occupied by other creatures or objects, or if there isn't enough space for the creature, the figurine doesn't become a creature.\n   The creature is friendly to you and your companions. It understands your languages and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions.\n   The creature exists for 24 hours. At the end of the duration, the creature reverts to its figurine form. It reverts to a figurine early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature becomes a figurine again, its property can't be used again until 7 days have passed.",
			limfeaname : "Steel Mammoth",
			usages : 1,
			recovery : "7 days"
		},
		"obsidian steed (ddep0-1)" : {
		name : "Obsidian Steed (DDEP0-1)",
			source : [["AL","S0"]],
			rarity : "very rare",
			magicItemTable : "H",
			description: "This 6-inch tall figurine of a horse is crudely crafted of obsidian w/ tiny ruby chips for eyes. The command word, “Tenebrax”, is scratched in Infernal along the figure’s belly. As an action, you can speak the command word & throw this obsidian statuette to an unoccupied space w/i 60 ft, where it becomes a nightmare for 24 hours, until it reaches 0 hp, or the command word used again. It is friendly, understands your languages, & obeys your commands. See Notes page.",
			descriptionLong: "This 6-inch tall figurine of a horse is crudely crafted of obsidian with tiny ruby chips for eyes. The command word, “Tenebrax”, is scratched in Infernal along the figure’s belly. As an action, you can speak the command word and throw this statuette to an unoccupied space within 60 ft, where it becomes a nightmare for 24 hours, until you use an action to repeat the command word, or it reaches 0 hp. It is friendly to you and your allies, understands your languages, and obeys your spoken commands. If no commands issued, the creature defends itself but takes no other actions. When it reverts back to a figurine, it can't be used again until 5 days have passed. See Notes page for more details.",
			descriptionFull: "This 6-inch tall figurine of a horse is crudely crafted of obsidian with tiny ruby chips for eyes. The command word, “Tenebrax”, is scratched in Infernal along the figure’s belly. If you use an action to speak the command word and throw the figurine to a point on the ground within 60 feet of you, the figurine becomes a living nightmare. If the space where the creature would appear is occupied by other creatures or objects, or if there isn't enough space for the creature, the figurine doesn't become a creature.\n   The creature is friendly to you and your companions. It understands your languages and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions.\n   The creature exists for 24 hours. At the end of the duration, the creature reverts to its figurine form. It reverts to a figurine early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature becomes a figurine again, its property can't be used again until 5 days have passed." +
			"\n   The nightmare fights only to defend itself.\n   If you have a good alignment, the figurine has a 10% chance each time you use it to ignore your orders, including a command to revert to figurine form. If you mount the nightmare while it is ignoring your orders, you and the nightmare are instantly transported to a random location on the plane of Hades, where the nightmare reverts to figurine form.",
			limfeaname : "Obsidian Steed",
			usages : 1,
			recovery : "5 days",
			toNotesPage : [{
				name : "Obsidian Steed Details",
				note : "\n   If I have a good alignment, the figurine has a 10% chance each time I use it to ignore my orders, including a command to revert to figurine form. If I mount the nightmare while it is ignoring my orders, we are both instantly transported to a random location on the plane of Hades, where the nightmare reverts to figurine form."
			}]
		},
		"onyx dog (ccc-cic-2)" : {
			name: "Onyx Dog (CCC-CIC-2)",
			rarity : "rare",
			source : [["AL","CCC"]],
			magicItemTable : "G",
			description: "When not activated, this clockwork dog statuette capers about as a toy if its key is turned. As an action once per 7 days, speak the command word & throw the dog to an unoccupied space w/i 60 ft, where it becomes a mastiff for up to 6 hrs, until you use the command word again, or it reaches 0 hp. It has 60 ft darkvision, see invisible to 60 ft, is friendly, understands you, & obeys your spoken commands. If no commands, defends self.",
			descriptionLong: "When not activated, this clockwork dog statuette capers about as a toy if its key is turned. As an action, speak the command word and throw the statuette to an unoccupied space within 60 ft, where it becomes a mastiff for up to 6 hours, until you use an action to repeat the command word, or it reaches 0 hp. It has Intelligence 8, speaks common, darkvision out to 60 ft and can see invisible creatures and objects out to that same range. It is friendly to you and your allies, understands your languages, and obeys your spoken commands. If no commands issued, the creature defends itself but takes no other actions. When it reverts back to a figurine, it can't be used again until 7 days have passed.",
			descriptionFull: "This figurine of wondrous power is an onyx statuette of a dog, small enough to fit in a pocket. When not activated, this clockwork dog statuette capers about as a toy if its key is turned. If you use an action to speak the command word and throw the figurine to a point on the ground within 60 feet of you, the figurine becomes a living mastiff. If the space where the creature would appear is occupied by other creatures or objects, or if there isn't enough space for the creature, the figurine doesn't become a creature.\n   The mastiff has an Intelligence of 8 and can speak Common. It also has darkvision out to a range of 60 feet and can see invisible creatures and objects within that range. It is friendly to you and your companions. It understands your languages and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions.\n   The creature exists for 6 hours. At the end of the duration, the creature reverts to its figurine form. It reverts to a figurine early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature becomes a figurine again, its property can't be used again until 7 days have passed.",
			limfeaname : "Onyx Dog",
			usages : 1,
			recovery : "7 days"
		},
		"serpentine owl (ddex2-9)" : {
			name: "Serpentine Owl (DDEX2-9)",
			rarity : "rare",
			source : [["AL","S2"]],
			magicItemTable : "G",
			allowDuplicates : true,
			description: "As action, speak the command word & throw fine serpentine statuette to unoccupied space w/i 60 ft, where it becomes a giant snowy owl for up to 8 hrs, until you repeat command word, or it reaches 0 hp. It's friendly, understands your languages, & obeys spoken commands. As long as it's on the same plane, it can communicate telepathically w/ you. If no commands, defends itself but nothing else. After reverts, can't be used again for 2 days.",
			descriptionFull: "This figurine of wondrous power is a serpentine statuette of an owl, small enough to fit in a pocket. If you use an action to speak the command word and throw the figurine to a point on the ground within 60 feet of you, the figurine becomes a living giant snowy owl. If the space where the creature would appear is occupied by other creatures or objects, or if there isn't enough space for the creature, the figurine doesn't become a creature.\n   The creature is friendly to you and your companions. It understands your languages and obeys your spoken commands. It can telepathically communicate with you at any range if you and it are on the same plane of existence. If you issue no commands, the creature defends itself but takes no other actions.\n   The creature exists for 8 hours. At the end of the duration, the creature reverts to its figurine form. It reverts to a figurine early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature becomes a figurine again, its property can't be used again until 2 days have passed.",
			limfeaname : "Serpentine Owl Figurine",
			usages : 1,
			recovery : "2 days"
		},
		"snowy owl (ddep10-0)" : {
			name: "Snowy Owl Figurine (Silver Raven)",
			rarity : "uncommon",
			source : [["AL","S10"]],
			magicItemTable : "F",
			allowDuplicates : true,
			description: "As an action, speak the command word & throw silver statuette to unoccupied space w/i 60 ft, where it becomes a snowy owl (reflavored raven) for up to 12 hrs, until you repeat the command word, or reaches 0 hp. It's friendly, understands your languages, & obeys spoken commands. While in owl form, figurine lets you cast Animal Messenger on it at will. If no commands, defends itself but nothing else. After reverts, can't be used again for 2 days.",
			descriptionFull: "This figurine of wondrous power is as sliver statuette of a snowy owl, small enough to fit in a pocket. If you use an action to speak the command word and throw the figurine to a point on the ground within 60 feet of you, the figurine becomes a living raven. If the space where the creature would appear is occupied by other creatures or objects, or if there isn't enough space for the creature, the figurine doesn't become a creature.\n   The creature is friendly to you and your companions. It understands your languages and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions.\n   The creature exists for 12 hours. At the end of the duration, the creature reverts to its figurine form. It reverts to a figurine early if it drops to 0 hit points or if you use an action to speak the command word again while touching it. When the creature becomes a figurine again, its property can't be used again until 2 days have passed.\n   While in raven form, the figurine allows you to cast the Animal Messenger spell on it at will.",
			limfeaname : "Snowy Owl Figurine",
			usages : 1,
			recovery : "2 days",
			spellcastingBonus : {
				name : "At will",
				spells : ["animal messenger"],
				selection : ["animal messenger"],
				firstCol : "atwill"
			},
			spellChanges : {
				"animal messenger" : {
					description : "The snowy owl delivers a 25 word message up to 50 miles away to chosen location and recipient",
					changes : "The spell can only affect the figurine."
				}
			}
		},
}

MagicItemsList["al footwear"] = {
		name : "AL Footwear",
		type : "wondrous item",
		allowDuplicates : true,
	choices : ["The Auftrag’s Buskins (CCC-TAROT2-5)","Boots of Elvenkind (CCC-SFBAY-4-2)","Boots of Elvenkind (DDAL4-6)","Boots of False Tracks (CCC-PRETZ-PLA2)","Boots of False Tracks (DDAL0-8)","Boots of False Tracks (DDAL10-0)","Boots of Levitation (DDAL10-8)","Boots of Speed (DDAL6-2)","Boots of Striding and Springing (DDAL10-3)","Boots of the Winterlands (CCC-BMG-19 HULB2-1)","Boots of the Winterlands (CCC-CIC-1)","Boots of the Winterlands (DC-POA-CODEX-1)","Boots of the Winterlands (DC-POA-GSP1-1)","Red's Slippers (CCC-KUMORI-2-2)","Shoes of the Glacier Walker (CCC-TRI-26)","Slippers of Spider Climbing (CCC-SRCC1-1)","Winged Boots (CCC-SQC-3-2)","Winged Boots (DDEP0-1)","Winged Boots (DDEP8-3)"],
	"the auftrag’s buskins (ccc-tarot2-5)" : {
		name : "The Auftrag’s Buskins (Winged Boots)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "These boots are made of a solid leather sole & intricate golden cord lacing. Decorative panels of leather along the calf show images of the Cult of the Ordinances & their symbol, a stylized balance w/ an infinity loop. The boots grant you a flying speed equal to your walking speed. You can fly for up to 4 hrs in 1 minute increments. If flying when the time expires, you descend 30 ft/round. They regain 2 hrs of flying capability for every 12 hrs they aren't used.",
		descriptionFull : "These boots are made of a firm, solid leather sole and intricate golden cord lacing. Decorating panels of leather along the calf are images of the Cult of the Ordinances – including their symbol, a stylized balance against an infinity loop.\n   While you wear these boots, you have a flying speed equal to your walking speed. You can use the boots to fly for up to 4 hours, all at once or in several shorter flights, each one using a minimum of 1 minute from the duration. If you are flying when the duration expires, you descend at a rate of 30 feet per round until you land.\n   The boots regain 2 hours of flying capability for every 12 hours they aren't in use.",
		attunement : true,
		limfeaname : "Winged Boots",
		usages : "240 min",
		recovery : "Special",
		additional : "regains 2h/12h"
	},
	"boots of elvenkind (ccc-sfbay-4-2)" : { // contains contributions by AelarTheElfRogue
		name : "Boots of Elvenkind (CCC-SFBAY-4-2)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "These moss-covered boots are made from the essence of the woods itself. They change texture & color with the current season & point you unerringly towards Cormanthor forest. While you wear these boots, your steps are silent, regardless of the surface you're walking on. You have adv. on Dex (Stealth) checks that rely on moving quietly.",
		descriptionFull : "These moss-covered boots are made from the essence of the woods itself. They change texture and color depending on the current season and can point the wearer unerringly towards Cormanthor forest. While you wear these boots, your steps make no sound, regardless of the surface you are moving across. You also have advantage on Dexterity (Stealth) checks that rely on moving silently.",
		eval : function () {
			for (var i = 0; i < CurrentMagicItems.known.length; i++) {
				if (CurrentMagicItems.known[i].indexOf("cloak of elvenkind") !== -1 && tDoc.getField("Extra.Magic Item Attuned " + (1 + i)).isBoxChecked(0)) {
					SetProf("advantage", true, ["Stealth", true], "Cloak and Boots of Elvenkind (magic items)");
					break;
				}
			}
		},
		removeeval : function () {
			SetProf("advantage", false, ["Stealth", true], "Cloak and Boots of Elvenkind (magic items)");
		}
	},
	"boots of elvenkind (ddal4-6)" : { // contains contributions by AelarTheElfRogue
		name : "Boots of Elvenkind (DDAL4-6)",
		source : [["AL","S4"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "These light boots are made of supple, green leather & accented w/ dead leaves. They are constantly covered in muck as if you've been walking through ankle-deep, bloody gore. No amount of cleaning (magical or otherwise) removes the filth. While you wear these boots, your steps are silent, regardless of the surface you're walking on. You have adv. on Dex (Stealth) checks that rely on moving quietly.",
		descriptionFull : "These light boots are made of supple, green leather and accented with dead leaves. They are constantly covered in muck as if the wearer had been walking through ankle-deep, bloody gore. No amount of cleaning (magical or otherwise) removes the filth. While you wear these boots, your steps make no sound, regardless of the surface you are moving across. You also have advantage on Dexterity (Stealth) checks that rely on moving silently.",
		eval : function () {
			for (var i = 0; i < CurrentMagicItems.known.length; i++) {
				if (CurrentMagicItems.known[i].indexOf("cloak of elvenkind") !== -1 && tDoc.getField("Extra.Magic Item Attuned " + (1 + i)).isBoxChecked(0)) {
					SetProf("advantage", true, ["Stealth", true], "Cloak and Boots of Elvenkind (magic items)");
					break;
				}
			}
		},
		removeeval : function () {
			SetProf("advantage", false, ["Stealth", true], "Cloak and Boots of Elvenkind (magic items)");
		}
	},
	"boots of false tracks (ccc-pretz-pla2)" : {
		name : "Boots of False Tracks (CCC-PRETZ-PLA2)",
		source : [["AL","CCC"]],
		rarity : "common",
		magicItemTable : "?",
		description : "The Boots of Chakalakhan are red, rusted, iron boots that curl up at the toes. Created for the hobgoblin war chief Chakalakhan as rocket boots, the ancient mechanisms have long since failed. Now when the bearer clicks their heels together, the spouts simply sputter and spit. Only humanoids can wear these. While wearing them, you can choose to leave tracks like those of another kind of humanoid of your size. ",
		descriptionFull : "The Boots of Chakalakhan are red, rusted, iron boots that curl up at the toes. Originally created for the great hobgoblin war chief Chakalakhan as rocket boots, but the ancient mechanisms have long since failed. Now when the bearer clicks their heels together the spouts simply sputter and spit. This allows the wearer to change the shape of their tracks.\n   Only humanoids can wear these boots. While wearing the boots, you can choose to have them leave tracks like those of another kind of humanoid of your size."
	},
	"boots of false tracks (ddal0-8)" : {
		name : "Boots of False Tracks (DDAL0-8)",
		source : [["AL","S0"]],
		rarity : "common",
		magicItemTable : "?",
		description : "These thick-soled boots are made of supple black leather. Only humanoids can wear them. While wearing the boots, you can choose to leave tracks like those of another kind of humanoid of your size. When used in this way, the tracks are filled with fresh blood, as if the creature leaving them were grievously wounded. ",
		descriptionFull : "These thick-soled boots are made of supple black leather. When used to leave false tracks, the tracks they leave are filled with fresh blood — as if the creature leaving them were grievously wounded.\n   Only humanoids can wear these boots. While wearing the boots, you can choose to have them leave tracks like those of another kind of humanoid of your size."
	},
	"boots of false tracks (ddal10-0)" : {
		name : "Boots of False Tracks (DDAL10-0)",
		source : [["AL","S10"]],
		rarity : "common",
		magicItemTable : "?",
		description : "These comfortable, fur-lined boots are embroidered with gaudy, but worthless, gems. Only humanoids can wear them. While wearing the boots, you can choose to leave tracks like those of another kind of humanoid of your size.",
		descriptionFull : "These comfortable, fur-lined boots are embroidered with gaudy, but worthless, gems.\n   Only humanoids can wear these boots. While wearing the boots, you can choose to have them leave tracks like those of another kind of humanoid of your size."
	},
	"boots of levitation (ddal10-8)" : { // contributions by AelarTheElfRogue
		name : "Boots of Levitation (DDAL10-8)",
		source : [["AL","S10"]],
		rarity : "rare",
		magicItemTable : "G",
		attunement : true,
		description : "These hard leather boots are festooned with switches, wiring, and transparent crystal conduits filled with glowing, green liquid. Tiny jets of blue flame emit from ports on the boots’ soles when activated. While you wear these boots, you can use an action to cast the Levitate spell on yourself at will.",
		spellcastingBonus : {
			name : "Self Only",
			spells : ["levitate"],
			selection : ["levitate"],
			firstCol : "atwill"
		},
		spellChanges : {
			"levitate" : {
				range : "Self",
				changes : "The spell can only affect the wearer."
			}
		}
	},
	"boots of speed (ddal6-2)" : {
		name : "Boots of Speed (DDAL6-2)",
		source : [["AL","S6"]],
		rarity : "rare",
		magicItemTable : "G",
		attunement : true,
		description : "These boots are embroidered w/ the image of a mountain venting a large plume of white smoke. While worn the bearer is fluent in Gnomish. As a bonus action, click the heels of these boots together to double your walking speed & make opportunity attacks against you have disadv. Effect ended w/ another bonus action. After 10 minutes of use, the boots lose their power until you finish a long rest.",
		descriptionFull : "These boots are embroidered with the image of a mountain venting a large plume of white smoke. While worn the bearer can understand and speak Gnomish. While you wear these boots, you can use a bonus action and click the boots' heels together. If you do, the boots double your walking speed, and any creature that makes an opportunity attack against you has disadvantage on the attack roll. If you click your heels together again, you end the effect.\n   When the boots' property has been used for a total of 10 minutes, the magic ceases to function until you finish a long rest.",
		action : [["bonus action", "Boots of Speed (start/stop)"]],
		limfeaname : "Boots of Speed",
		usages : 10,
		recovery : "long rest",
		additional : "minutes",
		languageProfs : ["Gnomish"]
	},
	"boots of striding and springing (ddal10-3)" : { // includes contributions by AelarTheElfRogue
		name : "Boots of Striding and Springing (DDAL10-3)",
		source : [["AL","S10"]],
		rarity : "uncommon",
		magicItemTable : "F",
		attunement : true,
		description : "The boots are gnome-crafted, w/ gears & springs embedded in the soles. At first glance they appear worn, but on closer inspection, that's part of the design. While wearing these boots, your walking speed is 30 ft, unless it's higher, & your speed isn't reduced by encumbrance or wearing heavy armor. You can also jump 3 times the normal distance, though not farther than your remaining movement allows.",
		descriptionFull : "The boots are gnome-crafted, with gears and springs embedded in the soles. At first glance they appear worn, but on closer inspection, the boots are designed that way.\n   While you wear these boots, your walking speed becomes 30 feet, unless your walking speed is higher, and your speed isn't reduced if you are encumbered or wearing heavy armor. In addition, you can jump three times the normal distance, though you can't jump farther than your remaining movement would allow.",
		speed : { walk : { spd : "fixed 30", enc : "fixed 30" } }
	},
	"boots of the winterlands (ccc-bmg-19 hulb2-1)" : {
		name : "Boots of the Winterlands (CCC-BMG-19 HULB2-1)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		attunement : true,
		magicItemTable : "F",
		description : "While wearing these boots, you & your clothing & gear appear a bit more gaunt, hungry, weather-worn & wild. You resist cold dmg & ignore difficult terrain from ice or snow. You can tolerate temps as low as -50 \u00B0F w/o additional protection. If wearing heavy clothes, you can tolerate temps as low as -100 \u00B0F.",
		descriptionFull : "While wearing these boots, the bearer and their clothing (and all other gear) appears to be a bit more gaunt, hungry, weather-worn and wild.\n   The furred boots are snug and feel quite warm. While you wear them, you gain the following benefits:\n \u2022 You have resistance to cold damage.\n \u2022 You ignore difficult terrain created by ice or snow.\n \u2022 You can tolerate temperatures as low as -50 degrees Fahrenheit without any additional protection. If you wear heavy clothes, you can tolerate temperatures as low as -100 degrees Fahrenheit.",
		dmgres : ["Cold"]
	},
	"boots of the winterlands (ccc-cic-1)" : {
		name : "Boots of the Winterlands (CCC-CIC-1)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		attunement : true,
		magicItemTable : "F",
		description : "These black furred boots depict stark white gelugons wrapped around each foot. The wearer leaves behind icy foot prints that disappear after a few seconds. While wearing these boots, you resist cold dmg & ignore difficult terrain from ice or snow. You can tolerate temps as low as -50 \u00B0F w/o additional protection. If wearing heavy clothes, you can tolerate temps as low as -100 \u00B0F.",
		descriptionFull : "This pair of fur-lined black leather boots are stylish and sturdy. Closer inspection of the soles reveals that they are inscribed with Druidic symbols that read 'smooth travel' and 'warm heart.' The furred boots are snug and feel quite warm. While you wear them, you gain the following benefits:\n \u2022 You have resistance to cold damage.\n \u2022 You ignore difficult terrain created by ice or snow.\n \u2022 You can tolerate temperatures as low as -50 degrees Fahrenheit without any additional protection. If you wear heavy clothes, you can tolerate temperatures as low as -100 degrees Fahrenheit.",
		dmgres : ["Cold"]
	},
	"boots of the winterlands (dc-poa-codex-1)" : {
		name : "Boots of the Winterlands (DC-POA-CODEX-1)",
		source : [["AL","S10"]],
		rarity : "uncommon",
		attunement : true,
		magicItemTable : "F",
		description : "These fur-lined black leather boots are stylish & sturdy. Closer inspection of the soles reveals that they are inscribed w/ Druidic symbols that read 'smooth travel' & 'warm heart.' While wearing these boots, you are resistant to cold dmg & ignore difficult terrain from ice or snow. You can tolerate temps as low as -50 \u00B0F w/o additional protection. If wearing heavy clothes, you can tolerate temps as low as -100 \u00B0F.",
		descriptionFull : "This pair of fur-lined black leather boots are stylish and sturdy. Closer inspection of the soles reveals that they are inscribed with Druidic symbols that read 'smooth travel' and 'warm heart.' The furred boots are snug and feel quite warm. While you wear them, you gain the following benefits:\n \u2022 You have resistance to cold damage.\n \u2022 You ignore difficult terrain created by ice or snow.\n \u2022 You can tolerate temperatures as low as -50 degrees Fahrenheit without any additional protection. If you wear heavy clothes, you can tolerate temperatures as low as -100 degrees Fahrenheit.",
		dmgres : ["Cold"]
	},
	"boots of the winterlands (dc-poa-gsp1-1)" : {
		name : "Boots of the Winterlands (DC-POA-GSP1-1)",
		source : [["AL","S10"]],
		rarity : "uncommon",
		attunement : true,
		magicItemTable : "F",
		description : "These knee-high fashionable boots were crafted by a renowned magic forger & designer from Waterdeep. The fur-lined boots are arctic white embedded w/ sparkling crystals & elegant silver lacing. While wearing these boots, you are resistant to cold dmg & ignore difficult terrain from ice or snow. You can tolerate temps as low as -50 \u00B0F w/o additional protection. If wearing heavy clothes, you can tolerate temps as low as -100 \u00B0F.",
		descriptionFull : "These knee-high fashionable boots were crafted by a well renowned magic forger and designer from Waterdeep. The boots are arctic white in color embedded with sparkling crystals and elegant silver lacing. The furred boots are snug and feel quite warm. While you wear them, you gain the following benefits:\n \u2022 You have resistance to cold damage.\n \u2022 You ignore difficult terrain created by ice or snow.\n \u2022 You can tolerate temperatures as low as -50 degrees Fahrenheit without any additional protection. If you wear heavy clothes, you can tolerate temperatures as low as -100 degrees Fahrenheit.",
		dmgres : ["Cold"]
	},
	"red's slippers (ccc-kumori-2-2)" : { // contains contributions by AelarTheElfRogue
		name : "Red's Slippers (Boots of Elvenkind)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "These ‘slippers’ are crafted of the finest supple deerskin, with iron studs built into the soles. Bright red, the color of pouring blood, they present a striking appearance. While you wear them, your steps are silent, regardless of the surface you're walking on. You have adv. on Dex (Stealth) checks that rely on moving quietly.",
		descriptionFull : "These ‘slippers’ are crafted of the finest supple deerskin, with iron studs crafted into the soles. Bright red, the color of pouring blood, they present a striking appearance. While you wear these boots, your steps make no sound, regardless of the surface you are moving across. You also have advantage on Dexterity (Stealth) checks that rely on moving silently.",
		eval : function () {
			for (var i = 0; i < CurrentMagicItems.known.length; i++) {
				if (CurrentMagicItems.known[i].indexOf("cloak of elvenkind") !== -1 && tDoc.getField("Extra.Magic Item Attuned " + (1 + i)).isBoxChecked(0)) {
					SetProf("advantage", true, ["Stealth", true], "Cloak and Boots of Elvenkind (magic items)");
					break;
				}
			}
		},
		removeeval : function () {
			SetProf("advantage", false, ["Stealth", true], "Cloak and Boots of Elvenkind (magic items)");
		}
	},
	"shoes of the glacier walker (ccc-tri-26)" : { // includes contributions by AelarTheElfRogue
		name : "Shoes of the Glacier Walker (Boots of Striding and Springing)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "F",
		attunement : true,
		description : "These tall, leather boots are wrapped in fur & tied with brightly dyed rawhide. They expand or contract to fit you snugly, giving you a sense of sure-footedness in snowy or icy terrain. While wearing these boots, your walking speed is 30 ft, unless it's higher, & your speed isn't reduced by encumbrance or wearing heavy armor. You can also jump 3 times the normal distance, though not farther than your remaining movement allows.",
		descriptionFull : "These tall, leather boots are wrapped in fur tied on with brightly dyed rawhide. It expands or contracts to fit the wearer snugly, giving the wearer a sense of sure-footedness in snowy or icy terrain (there is no mechanical benefit to this).\n   While you wear these boots, your walking speed becomes 30 feet, unless your walking speed is higher, and your speed isn't reduced if you are encumbered or wearing heavy armor. In addition, you can jump three times the normal distance, though you can't jump farther than your remaining movement would allow.",
		speed : { walk : { spd : "fixed 30", enc : "fixed 30" } }
	},
	"slippers of spider climbing (ccc-srcc1-1)" : {
		name : "Slippers of Spider Climbing (CCC-SRCC1-1)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "These slippers are made of black silk embroidered with spider webs. They were taken off a drow waylaid by yuan-ti, but aren't drow crafted. While you wear these shoes, you can move up, down, & across vertical surfaces & upside-down along ceilings, while leaving your hands free. You have a climbing speed equal to your walking speed. The slippers don'tlet you move this way on a slippery surface, i.e. one covered by ice or oil.",
		descriptionFull : "These slippers are made of black silk embroidered with spider webs. Though they were taken off a drow waylaid by yuan-ti, they are not drow crafted. While you wear these light shoes, you can move up, down, and across vertical surfaces and upside down along ceilings, while leaving your hands free. You have a climbing speed equal to your walking speed. However, the slippers don't allow you to move this way on a slippery surface, such as one covered by ice or oil.",
		attunement : true,
		speed : { climb : { spd : "walk", enc : "walk" } }
	},
	"winged boots (ccc-sqc-3-2)" : {
		name : "Winged Boots (CCC-SQC-3-2)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "These boots were made by fusing leaves from the Comanthar forest & the magic that still lingers around Myth Drannor. The boots change color according to the season & leave a trail of sparkling dust that disappears almost immediately. These boots grant you a flying speed equal to your walking speed. You can fly for up to 4 hrs in 1 minute increments. If flying when the time expires, you descend 30 ft/round. They regain 2 hrs of flying capability for every 12 hrs they aren't used.",
		descriptionFull : "This pair of boots is crafted by magically fusing leaves from the Comanthar forest and ancient magic that still lingers around Myth Drannor. The wearer of the boots leaves behind a trail of faintly sparkling dust that disappears almost immediately. The leaves on the boots changes color according to the season of the region.\n   While you wear these boots, you have a flying speed equal to your walking speed. You can use the boots to fly for up to 4 hours, all at once or in several shorter flights, each one using a minimum of 1 minute from the duration. If you are flying when the duration expires, you descend at a rate of 30 feet per round until you land.\n   The boots regain 2 hours of flying capability for every 12 hours they aren't in use.",
		attunement : true,
		limfeaname : "Winged Boots",
		usages : "240 min",
		recovery : "Special",
		additional : "regains 2h/12h"
	},
	"winged boots (ddep0-1)" : {
		name : "Winged Boots (DDEP0-1)",
		source : [["AL","S0"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "These heavy, hobnail boots are fitted w/ clumsy metal wings at the ankles & emit streams of black, choking smoke when used. If not supplied w/ a lump of coal at dawn, the boots don’t function until the following dawn. These boots give you a flying speed equal to your walking speed. You can fly for up to 4 hrs in 1 minute increments. If flying when the time expires, you descend 30 ft/round. They regain 2 hrs of flying capability for every 12 hrs they aren't used.",
		descriptionFull : "These heavy, hobnail boots are fitted with clumsy metal wings at the ankles, and emit streams of black, choking smoke while in use. If they are not supplied with a lump of coal at dawn, the boots don’t function until the following dawn.\n   While you wear these boots, you have a flying speed equal to your walking speed. You can use the boots to fly for up to 4 hours, all at once or in several shorter flights, each one using a minimum of 1 minute from the duration. If you are flying when the duration expires, you descend at a rate of 30 feet per round until you land.\n   The boots regain 2 hours of flying capability for every 12 hours they aren't in use.",
		attunement : true,
		limfeaname : "Winged Boots",
		usages : "240 min",
		recovery : "Special",
		additional : "regains 2h/12h"
	},
	"winged boots (ddep8-3)" : {
		name : "Winged Boots (DDEP8-3)",
		source : [["AL","S8"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "These leather boots are fitted w/ mechanical wings of gnomish manufacture that clatter loudly when used. While flying, you have disadvantage on Dex (Stealth) checks made to move silently. These boots grant you a flying speed equal to your walking speed. You can use fly for up to 4 hrs in 1 minute increments. If flying when the time expires, you descend 30 ft/round. They regain 2 hrs of flying capability for every 12 hrs they aren't used.",
		descriptionFull : "These leather boots are fitted with mechanical wings of gnomish manufacture that clatter loudly when used. While flying, you have disadvantage on Dexterity (Stealth) checks made to move silently.\n   While you wear these boots, you have a flying speed equal to your walking speed. You can use the boots to fly for up to 4 hours, all at once or in several shorter flights, each one using a minimum of 1 minute from the duration. If you are flying when the duration expires, you descend at a rate of 30 feet per round until you land.\n   The boots regain 2 hours of flying capability for every 12 hours they aren't in use.",
		attunement : true,
		limfeaname : "Winged Boots",
		usages : "240 min",
		recovery : "Special",
		additional : "regains 2h/12h"
	},
}
	
MagicItemsList["al headwear"] = {
		name : "AL Headwear",
		type : "wondrous item",
		allowDuplicates : true,
	choices : ["Bulaga Wizard Hat of Vermin (CCC-GSP2-1)","Chardalyn Earring (DDEP10-1)","Circlet (Eye Patch) of Blasting (CCC-CIC-11)","Circlet of Blasting (DC-POA-RH01)","Dread Helm (CCC-AETHER-1-2)","Dread Helm (CCC-GAD1-2)","Dread Helm (CCC-OCC-2)","Dread Helm (Generic DC-POA)","Dread Helm (DC-POA-DUCKS-OS-02)","Dread Helm (DC-POA-HARM01-1)","Hat of Disguise (CCC-AETHER2-1)","Hat of Disguise (DDAL8-3)","Hat of Vermin (CCC-TAROT1-5)","Headband of Intellect (DDEP0-1)","Headband of Intellect (DDEX1-6)", "Headband of Intellect (DDAL5-16)","Headband of Intellect (DDEP7-2)","Helm of Brilliance (DDAL-DRW03)","Helm of Comprehending Languages (CCC-AETHER-1-1)","Helm of Comprehending Languages (CCC-MMT1-1)","Helm of Comprehending Languages (CCC-FCC-1)","Helm of Telepathy (CCC-AN-1)","Helm of Telepathy (CCC-GHC-BK1-7)","Helm of Telepathy (DDAL9-15)","Helm of Telepathy (DDEP9-1)","Helm of Teleportation (CCC-BMG-43 PHLAN4-1)","The Mask of Wompona Yarp (DDAL7-14)","Thenturian Circlet (CCC-TAROT1-7)","Weave, Helm of Teleportation (CCC-PHA-1)","Wolfskin Cap (DDEX4-3)"],
	"bulaga wizard hat of vermin (ccc-gsp2-1)" : {
		name : "Bulaga Wizard Hat (Hat of Vermin)",
		source : [["AL","CCC"]],
		rarity : "common",
		description : "This is a wizard's hat w/ a swirly 3-color design & 3 charges, all regained at dawn. As an action while holding it, you can expend 1 charge & speak a command word to have 1 bat, frog, or rat appear in the hat. It acts like a normal animal & disappears after 1 hr or at 0 HP. You don't control it. Each beast represents a shard of a wizard's soul. The bat leaves a trail of red glitter, the frog's skin is shiny yellow, & the rat has dark blue eyes & teeth.",
		descriptionFull : "This hat has 3 charges. While holding the hat, you can use an action to expend 1 of its charges and speak a command word that summons your choice of a bat, a frog, or a rat. The summoned creature magically appears in the hat and tries to get away from you as quickly as possible. The creature is neither friendly nor hostile, and it isn't under your control. It behaves as an ordinary creature of its kind and disappears after 1 hour or when it drops to 0 hit points. The hat regains all expended charges daily at dawn.\n   The hat looks like a pointy wizard's hat with three swirly color designs (red, blue, & yellow). Each beast represents a shard of a wizard's soul trapped in the hat. When the bat is summoned, it always leaves a trail of red glitter. The frog's skin is shiny yellow, and the rat has dark blue eyes and teeth.",
		limfeaname : "Hat of Vermin",
		action : [["action", " (Summon)"]],
		usages : 3,
		recovery : "dawn"
	},
	"chardalyn earring (ddep10-1)" : {
		name : "Chardalyn Earring (Headband of Intellect)",
		source : [["AL","S10"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description: "This earring is crafted from the unusual material chardalyn, which retains much of the cruel mindset of the Crenshinibon. This provides the earring's intellect-boosting properties, but it often whispers notions of grandeur and words of confidence into its wearer's mind and urges them to accumulate more and greater power. Your Intelligence score is 19 while you wear this earring. It has no effect on you if your Intelligence is already 19 or higher without it.",
		attunement : true,
		scoresOverride : [0, 0, 0, 19, 0, 0]
		},
	"circlet (eye patch) of blasting (ccc-cic-11)" : { // contains contributions by Larry Hoy
		name : "Eye Patch of Blasting (CCC-CIC-11)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "This circlet has been altered to look like a pirate’s eye patch. In all other ways it is a circlet. Once per dawn while wearing this item, you can cast the Scorching Ray spell with it as an action. When you make the spell atks, you do so with an atk bonus of +5.",
		descriptionFull : "This circlet has been altered to look like a pirate’s eye patch. In all other ways it is a circlet. While wearing this circlet, you can use an action to cast the Scorching Ray spell with it. When you make the spell's attacks, you do so with an attack bonus of +5. The circlet can't be used this way again until the next dawn.",
		limfeaname : "Eye Patch of Blasting",
		usages : 1,
		recovery : "dawn",
		fixedDC : 13,
		spellcastingBonus : {
			name : "Once per dawn",
			spells : ["scorching ray"],
			selection : ["scorching ray"],
			firstCol : "oncelr"
		}
	},
	"circlet of blasting (dc-poa-rh01)" : { // contains contributions by Larry Hoy
		name : "Circlet of Blasting (DC-POA-RH01)",
		source : [["AL","S10"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "The circlet is made of elk antler carved with a shimmering aurora & bound with a waxed leather cord. When activated, the circlet glows with blue light. Once per dawn while wearing this circlet, you can cast the Scorching Ray spell with it as an action. When you make the spell atks, you do so with an atk bonus of +5.",
		descriptionFull : "The circlet is made of elk antler carved with the design of the shimmering aurora and bound with a waxed elk leather cord. When activated, the circlet glows with blue light. While wearing this circlet, you can use an action to cast the Scorching Ray spell with it. When you make the spell's attacks, you do so with an attack bonus of +5. The circlet can't be used this way again until the next dawn.",
		limfeaname : "Circlet of Blasting",
		usages : 1,
		recovery : "dawn",
		fixedDC : 13,
		spellcastingBonus : {
			name : "Once per dawn",
			spells : ["scorching ray"],
			selection : ["scorching ray"],
			firstCol : "oncelr"
		}
	},
	"dread helm (ccc-aether-1-2)" : {
		name : "Dread Helm (CCC-AETHER-1-2)",
		source : [["AL","CCC"]],
		rarity : "common",
		magicItemTable : "?",
		description : "When you wear it, the glass visor displays your body and any damage you take. This helm is made of a strange material from another plane of existence and makes your eyes glow red while you wear it. Whenever you strike a demon, the helm blares a heavy metal riff in your ears.",
		},
	"dread helm (ccc-gad1-2)" : {
		name : "Dread Helm (CCC-GAD1-2)",
		source : [["AL","CCC"]],
		rarity : "common",
		magicItemTable : "?",
		description : " The jagged horns on this fearsome steel helmet look quite intimidating. It makes your eyes glow red while you wear it.",
		},
	"dread helm (ccc-occ-2)" : {
		name : "Dread Helm (CCC-OCC-2)",
		source : [["AL","CCC"]],
		rarity : "common",
		magicItemTable : "?",
		description : "The black steel of this helm and visor are worked to resemble the face of a snarling dragon. It makes your eyes glow red while you wear it.",
		},
	"dread helm (generic dc-poa)" : {
		name : "Dread Helm (Generic DC-POA)",
		source : [["AL","S10"]],
		rarity : "common",
		magicItemTable : "?",
		description : "This fearsome helm is fashioned from a white wyrmling's skull and makes your eyes glow red while you wear it.",
		},
	"dread helm (dc-poa-ducks-os-02)" : {
		name : "Dread Helm (DC-POA-DUCKS-OS-02)",
		source : [["AL","S10"]],
		rarity : "common",
		magicItemTable : "?",
		description : "This fearsome helm is fashioned from a white wyrmling's skull and makes your eyes glow red while you wear it. It fits snugly around your head and seems to always be cold to the touch.",
		},
	"dread helm (dc-poa-harm01-1)" : {
		name : "Dread Helm (DC-POA-HARM01-1)",
		source : [["AL","S10"]],
		rarity : "common",
		magicItemTable : "?",
		description : "This fearsome helm fashioned from a white wyrmling's skull makes your eyes glow white while you wear it. The skull is cracked, chipped & aged as if from deterioration over 1000 years. Regardless of their actual age, the wearer of this helm has the paradoxical paranoia that they will both never live to see old age & that they have completely wasted their youth.",
		descriptionFull : "This fearsome helm fashioned from a white wyrmling's skull makes your eyes glow white while you wear it. The skull is cracked, chipped, and aged as if from deterioration over a thousand years. Regardless of their actual age, the wearer of this helm has the paradoxical paranoia that they will both never live to see old age and that they have completely wasted all of their youth."
		},
	"hat of disguise (ccc-aether2-1)" : { // contributed by Larry Hoy
		name : "Hat of Disguise (CCC-AETHER2-1)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "This hat is made from the scalp of a powerful night hag killed long ago by Nurfenpurf. It retains the hag's original hair, which is brittle & smells of death. While wearing the hat, you can use an action to cast the Disguise Self spell from it at will. The spell ends if the hat is removed.",
		descriptionFull : "This hat is made of the scalp of a powerful night hag killed long ago by Nurfenpurf. The scalp retains the original hairs from the hag; the hairs are brittle and smell of death. While wearing the hat, you can use an action to cast the Disguise Self spell from it at will. The spell ends if the hat is removed.",
		attunement : true,
		spellcastingBonus : [{
			name : "At will",
			spells : ["disguise self"],
			selection : ["disguise self"],
			firstCol : "atwill"
	   }],
	   spellcastingAbility : "class" // https://www.sageadvice.eu/2015/11/27/hat-of-disguise-dc/
	},
	"hat of disguise (ddal8-3)" : { // contributed by Larry Hoy
		name : "Hat of Disguise (DDAL8-3)",
		source : [["AL","S8"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "The entire length of this broad, red silk ribbon is embroidered in gold thread. While wearing it, the wearer can read and understand, but not speak, Undercommon. The ribbon acts as a Hat of Disguise; you can use an action to cast the Disguise Self spell from it at will. The spell ends if the ribbon is removed.",
		attunement : true,
		languageProfs : ["Undercommon (can't speak)"],
		spellcastingBonus : [{
			name : "At will",
			spells : ["disguise self"],
			selection : ["disguise self"],
			firstCol : "atwill"
	   }],
	   spellcastingAbility : "class" // https://www.sageadvice.eu/2015/11/27/hat-of-disguise-dc/
	},
	"hat of vermin (ccc-tarot1-5)" : {
		name : "Hat of Vermin (CCC-TAROT1-5)",
		source : [["AL","CCC"]],
		rarity : "common",
		description : "This dusty old cap has 3 charges, all regained at dawn. As an action while holding it, you can expend 1 charge & speak a command word to have 1 bat, frog, or rat appear in the hat. It acts like a normal animal & disappears after 1 hr or at 0 HP. You don't control it.",
		descriptionFull : "This hat has 3 charges. While holding the hat, you can use an action to expend 1 of its charges and speak a command word that summons your choice of a bat, a frog, or a rat. The summoned creature magically appears in the hat and tries to get away from you as quickly as possible. The creature is neither friendly nor hostile, and it isn't under your control. It behaves as an ordinary creature of its kind and disappears after 1 hour or when it drops to 0 hit points. The hat regains all expended charges daily at dawn.\n   While wearing this black hat, with two large felt ears, your name is magically written on it in yellow stitching. When you take it off, the name disappears.",
		limfeaname : "Hat of Vermin",
		action : [["action", " (Summon)"]],
		usages : 3,
		recovery : "dawn"
	},
	"headband of intellect (ddep0-1)" : {
		name : "Headband of Intellect (DDEP0-1)",
		source : [["AL","S0"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description: "This broad, polished headband is forged of purple stone struck through with veins of mithral. While attuned, the wearer gains the flaw: “Patience is a virtue; I slowly and ponderously weigh all possible options before acting.” Your Intelligence score is 19 while you wear this headband. It has no effect on you if your Intelligence is already 19 or higher without it.",
		attunement : true,
		scoresOverride : [0, 0, 0, 19, 0, 0]
		},
	"headband of intellect (ddex1-6)" : {
		name : "Headband of Intellect (DDEX1-6)",
		source : [["AL","S1"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description: "This headband made of bone bears the sigil of the wizard Denlor, whose tower still stands in the city of Phlan. Your Intelligence score is 19 while you wear this headband. It has no effect on you if your Intelligence is already 19 or higher without it.",
		attunement : true,
		scoresOverride : [0, 0, 0, 19, 0, 0]
		},
	"headband of intellect (ddal5-16)" : {
		name : "Headband of Intellect (DDAL5-16)",
		source : [["AL","S5"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description: "Shining with a polished brilliance this golden headband never dulls. The sound of heavenly chimes can be heard when the wearer has a new idea. Your Intelligence score is 19 while you wear this headband. It has no effect on you if your Intelligence is already 19 or higher without it.",
		attunement : true,
		scoresOverride : [0, 0, 0, 19, 0, 0]
		},
	"headband of intellect (ddep7-2)" : {
		name : "Headband of Intellect (DDEP7-2)",
		source : [["AL","S7"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description: "This broad circlet is set with a single, lusterless grey stone—into which has been engraved a sigil of unknown meaning. When worn, you gain the flaw: “I know everything, & nothing makes me happier than letting people know.” Your Intelligence score is 19 while you wear this circlet. It has no effect on you if your Intelligence is already 19 or higher without it.",
		attunement : true,
		scoresOverride : [0, 0, 0, 19, 0, 0]
		},
	"helm of brilliance (ddal-drw03)" : {
		name : "Helm of Brilliance (DDAL-DRW03)",
		source : [["AL","DRW"]],
		rarity : "very rare",
		magicItemTable : "H",
		description : "This helm is decorated with scenes of underwater volcanoes. While you wear it, you can speak and understand Aquan. When found, the helm has 5 diamonds, 11 rubies, 16 fire opals, & 22 opals. Action to cast a spell w/ a gem, which crumbles to dust. When all the gems are used, the helm loses its magic. The helm has special properties for each gem type, see Notes page.",
		descriptionFull : "This helm is decorated with scenes of underwater volcanoes. While you wear it, you can speak and understand Aquan. When found, the helm has 5 diamonds, 11 rubies, 16 fire opals, & 22 opals. You can use an action to destroy a gem & cast a spell. When all the gems are used or destroyed, the helm loses its magic.\n   You gain the following benefits while wearing it:\n \u2022 You can use an action to cast one of the following spells (save DC 18), using one of the helm's gems of the specified type as a component: Daylight (opal), Fireball (fire opal), Prismatic Spray (diamond), or Wall of Fire (ruby). The gem is destroyed when the spell is cast and disappears from the helm.\n \u2022 As long as it has at least one diamond, the helm emits dim light in a 30-foot radius when at least one undead is within that area. Any undead that starts its turn in that area takes 1d6 radiant damage.\n \u2022 As long as the helm has at least one ruby, you have resistance to fire damage.\n \u2022 As long as the helm has at least one fire opal, you can use an action and speak a command word to cause one weapon you are holding to burst into flames. The flames emit bright light in a 10-foot radius and dim light for an additional 10 feet. The flames are harmless to you and the weapon. When you hit with an attack using the blazing weapon, the target takes an extra 1d6 fire damage. The flames last until you use a bonus action to speak the command word again or until you drop or stow the weapon.\n\nRoll a d20 if you are wearing the helm and take fire damage as a result of failing a saving throw against a spell. On a roll of 1, the helm emits beams of light from its remaining gems. Each creature within 60 feet of the helm other than you must succeed on a DC 17 Dexterity saving throw or be struck by a beam, taking radiant damage equal to the number of gems in the helm. The helm and its gems are then destroyed.",
		attunement : true,
		languageProfs : ["Aquan"],
		dmgres : ["Fire"],
		action : [["action", "Helm of Brilliance (spell/blazing weapon)"]],
		extraLimitedFeatures : [{
			name : "Helm of Brilliance - Diamonds (D)",
			usages : "5",
			recovery : "Never"
		}, {
			name : "Helm of Brilliance - Rubies (R)",
			usages : "11",
			recovery : "Never"
		}, {
			name : "Helm of Brilliance - Fire Opals (F)",
			usages : "16",
			recovery : "Never"
		}, {
			name : "Helm of Brilliance - Opals (O)",
			usages : "22",
			recovery : "Never"
		}],
		fixedDC : 18,
		spellFirstColTitle : "GE",
		spellcastingBonus : [{
			name : "Uses an opal (O)",
			spells : ["daylight"],
			selection : ["daylight"],
			firstCol : "(O)"
		}, {
			name : "Uses a fire opal (F)",
			spells : ["fireball"],
			selection : ["fireball"],
			firstCol : "(F)"
		}, {
			name : "Uses a diamond (D)",
			spells : ["prismatic spray"],
			selection : ["prismatic spray"],
			firstCol : "(D)"
		}, {
			name : "Uses a ruby (R)",
			spells : ["wall of fire"],
			selection : ["wall of fire"],
			firstCol : "(R)"
		}],
		spellChanges : {
			"daylight" : {
				components : "M\u0192,M\u2020",
				compMaterial : "Spells cast from magic items don't require any components other than the magic item itself and, when casting Daylight from the Helm of Brilliance, causes one of the opals in the helm to crumble to dust.",
				changes : "Using the Helm of Brilliance to cast Daylight causes one of the opals in the helm to crumble to dust."
			},
			"fireball" : {
				components : "M\u0192,M\u2020",
				compMaterial : "Spells cast from magic items don't require any components other than the magic item itself and, when casting Fireball from the Helm of Brilliance, causes one of the fire opals in the helm to crumble to dust.",
				changes : "Using the Helm of Brilliance to cast Fireball causes one of the fire opals in the helm to crumble to dust."
			},
			"prismatic spray" : {
				components : "M\u0192,M\u2020",
				compMaterial : "Spells cast from magic items don't require any components other than the magic item itself and, when casting Prismatic Spray from the Helm of Brilliance, causes one of the diamonds in the helm to crumble to dust.",
				changes : "Using the Helm of Brilliance to cast Prismatic Spray causes one of the diamonds in the helm to crumble to dust."
			},
			"wall of fire" : {
				components : "M\u0192,M\u2020",
				compMaterial : "Spells cast from magic items don't require any components other than the magic item itself and, when casting Wall of Fire from the Helm of Brilliance, causes one of the rubies in the helm to crumble to dust.",
				changes : "Using the Helm of Brilliance to cast Wall of Fire causes one of the rubies in the helm to crumble to dust."
			}
		},
		toNotesPage : [{
			name : "Special Properties",
			popupName : "Helm of Brilliance's Special Properties",
			note : [
				"This helm is decorated with scenes of underwater volcanoes. While you wear it, you can speak and understand Aquan. When found, the helm has 5 diamonds, 11 rubies, 16 fire opals, & 22 opals. You can use an action to destroy a gem & cast a spell. When all the gems are used or destroyed, the helm loses its magic.",
				"As an action, I can cast one of the following spells (save DC 18), using one of the helm's gems of the specified type as a component: Daylight (opal), Fireball (fire opal), Prismatic Spray (diamond), or Wall of Fire (ruby). The gem is destroyed when the spell is cast and disappears from the helm.",
				"As long as the helm has at least one diamond remaining, it emits dim light in a 30-ft radius when at least one undead is within that area. Any undead that starts its turn in that area takes 1d6 radiant damage.",
				"As long as the helm has at least one ruby remaining, I have resistance to fire damage.",
				"As long as the helm has at least one fire opal remaining, I can use an action and speak a command word to cause one weapon I'm holding to burst into flames. The flames emit bright light in a 10-ft radius and dim light for an additional 10 ft. The flames are harmless to me and the weapon. When I hit with an attack using the blazing weapon, the target takes an extra 1d6 fire damage. The flames last until I use a bonus action to speak the command word again or until I drop or stow the weapon.",
				"If I take fire damage as a result of failing a save against a spell while wearing the helm, I have to roll a d20. On a roll of 1, the helm emits beams of light from its remaining gems. Each creature within 60 ft other than myself must succeed on a DC 17 Dexterity save or be struck by a beam, taking radiant damage equal to the number of gems remaining in the helm. The helm and its gems are then destroyed."
			]
		}]
	},
	"helm of comprehending languages (ccc-aether-1-1)" : { // contributions by Larry Hoy
		name : "Helm of Comprehending Languages (CCC-AETHER-1-1)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "B",
		description : "This elaborate helm is made of Avernium, a black metal found only in Avernus. The helm has the appearance of a crown with spikes. The inner circle of the helm has an inscription in Infernal which reads, “Avernus Dragonchess Champion.” While wearing this helm, you can use an action to cast the Comprehend Languages spell from it at will.",
		spellcastingBonus : {
			name : "At will",
			spells : ["comprehend languages"],
			selection : ["comprehend languages"],
			firstCol : "atwill"
		}
	},
	"helm of comprehending languages (ccc-mmt1-1)" : { // contributions by Larry Hoy
		name : "Helm of Comprehending Languages (CCC-MMT1-1)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "B",
		description : "This ornately embellished helm is decorated with the image of a face on the sun. It's covered in archaic magical runes that glow lightly when it's used. Any good-aligned character will occasionally hear a soothing male voice offering encouragement. While wearing this helm, you can use an action to cast the Comprehend Languages spell from it at will.",
		descriptionFull : "This ornately embellished helm is decorated with the image of a face on the sun. It is covered in archaic magical runes that glow lightly when the helm is activated. Any good aligned character using the helm will occasionally hear a soothing male voice offering encouragement. While wearing this helm, you can use an action to cast the Comprehend Languages spell from it at will.",
		spellcastingBonus : {
			name : "At will",
			spells : ["comprehend languages"],
			selection : ["comprehend languages"],
			firstCol : "atwill"
		}
	},
	"helm of comprehending languages (ccc-fcc-1)" : { // contributions by Larry Hoy
		name : "Helm of Comprehending Languages (CCC-FCC-1)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "B",
		description : "Magical runes & symbols similar to those of the Red Wizards are painted on this ordinary looking helm. It's unclear if the runes imbue the helm with its magic or if further power can be extracted by the right user. While wearing this helm, you can use an action to cast the Comprehend Languages spell from it at will.",
		descriptionFull : "Magical runes and symbols similar to that of the Red Wizards are painted over this ordinary looking helm. It is unclear if the runes imbued the helm with its magic property or further power can be extracted by the right user. While wearing this helm, you can use an action to cast the Comprehend Languages spell from it at will.",
		spellcastingBonus : {
			name : "At will",
			spells : ["comprehend languages"],
			selection : ["comprehend languages"],
			firstCol : "atwill"
		}
	},
	"helm of telepathy (ccc-an-1)" : {
		name : "Helm of Telepathy (CCC-AN-1)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "This helm uses just enough material to protect vital areas, leaving cosmetic gaps & slits. The distinct geometric design stands out, but also allows the helm to be hidden easily under a cloak. While wearing it, you can cast Detect Thoughts (DC 13). As a bonus action, you can send a telepathic message to a creature that you're focusing on w/ Detect Thoughts, which can reply as a bonus action. Once per day, you can cast Suggestion (DC 13) on a creature you're focusing on w/ the spell",
		descriptionFull : "This helm protects all the areas that it should but only barely, using just enough material to cover them while leaving cosmetic gaps and slits. It sports a distinct geometric design that originated somewhere far to the east and stands out to any observer, but that slight build makes it possible to conceal the apparatus under a cloak as easily as one would a circlet or tiara.\n  While wearing the helm, you can use an action to cast the Detect Thoughts spell (save DC 13) from it. As long as you maintain concentration on the spell, you can use a bonus action to send a telepathic message to a creature you are focused on. It can reply - using a bonus action - while your focus on it continues.\n   While focusing on a creature with Detect Thoughts, you can use an action to cast the Suggestion spell (save DC 13) from the helm on that creature. Once used, the suggestion property can't be used again until the next dawn.",
		attunement : true,
		limfeaname : "Helm of Telepathy: Suggestion",
		usages : 1,
		recovery : "dawn",
		fixedDC : 13,
		spellcastingBonus : [{
			name : "At will",
			spells : ["detect thoughts"],
			selection : ["detect thoughts"],
			firstCol : "atwill"
		}, {
			name : "Once per dawn",
			spells : ["suggestion"],
			selection : ["suggestion"],
			firstCol : "oncelr"
		}]
	},
	"helm of telepathy (ccc-ghc-bk1-7)" : {
		name : "Helm of Telepathy (CCC-GHC-BK1-7)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "This bejeweled tiara sports a tiger’s eye stone and the heraldry of the Dukes of Scelptar. When worn, you feel affection for house cats & you can cast Detect Thoughts (DC 13). As a bonus action, you can send a telepathic message to a creature that you're focusing on w/ Detect Thoughts, which can reply as a bonus action. Once per day, you can cast Suggestion (DC 13) on a creature you're focusing on w/ the spell",
		descriptionFull : "This helm of telepathy takes the form of bejeweled tiara sporting a tiger’s eye stone and the heraldry of the Dukes of Scelptar. When worn, you feel an affection for house cats.\n   While wearing the helm, you can use an action to cast the Detect Thoughts spell (save DC 13) from it. As long as you maintain concentration on the spell, you can use a bonus action to send a telepathic message to a creature you are focused on. It can reply - using a bonus action - while your focus on it continues.\n   While focusing on a creature with Detect Thoughts, you can use an action to cast the Suggestion spell (save DC 13) from the helm on that creature. Once used, the suggestion property can't be used again until the next dawn.",
		attunement : true,
		limfeaname : "Helm of Telepathy: Suggestion",
		usages : 1,
		recovery : "dawn",
		fixedDC : 13,
		spellcastingBonus : [{
			name : "At will",
			spells : ["detect thoughts"],
			selection : ["detect thoughts"],
			firstCol : "atwill"
		}, {
			name : "Once per dawn",
			spells : ["suggestion"],
			selection : ["suggestion"],
			firstCol : "oncelr"
		}]
	},
	"helm of telepathy (ddal9-15)" : {
		name : "Helm of Telepathy (DDAL9-15)",
		source : [["AL","S9"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "This helm once belonged to Nyave, Sir Gidor’s closest & most trusted friend. While wearing it, you can cast Detect Thoughts (DC 13). As a bonus action, you can send a telepathic message to a creature that you're focusing on w/ Detect Thoughts, which can reply as a bonus action. Once per day, you can cast Suggestion (DC 13) on a creature you're focusing on w/ Detect Thoughts.",
		descriptionFull : "This helm once belonged to Nyave, Sir Gidor’s closest & most trusted friend. While wearing the helm, you can use an action to cast the Detect Thoughts spell (save DC 13) from it. As long as you maintain concentration on the spell, you can use a bonus action to send a telepathic message to a creature you are focused on. It can reply - using a bonus action - while your focus on it continues.\n   While focusing on a creature with Detect Thoughts, you can use an action to cast the Suggestion spell (save DC 13) from the helm on that creature. Once used, the suggestion property can't be used again until the next dawn.",
		attunement : true,
		limfeaname : "Helm of Telepathy: Suggestion",
		usages : 1,
		recovery : "dawn",
		fixedDC : 13,
		spellcastingBonus : [{
			name : "At will",
			spells : ["detect thoughts"],
			selection : ["detect thoughts"],
			firstCol : "atwill"
		}, {
			name : "Once per dawn",
			spells : ["suggestion"],
			selection : ["suggestion"],
			firstCol : "oncelr"
		}]
	},
	"helm of telepathy (ddep9-1)" : {
		name : "Helm of Telepathy (DDEP9-1)",
		source : [["AL","S9"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "This cruel helm has been crafted into the screaming face of a devil & is always warm to the touch. When you wear it, you hear devilish whisperings that you can never quite discern & can cast Detect Thoughts (DC 13). As a bonus action, you can send a telepathic message to a creature you're focusing on w/ Detect Thoughts. They can reply as a bonus action. Once/day, you can cast Suggestion (DC 13) on a creature you're focusing on w/ Detect Thoughts.",
		descriptionFull : "This cruel helm has been crafted to look like the screaming face of a devil. It’s always warm to the touch, and when you wear it you hear devilish whisperings that you can never quite discern. While wearing this helm, you can use an action to cast the Detect Thoughts spell (save DC 13) from it. As long as you maintain concentration on the spell, you can use a bonus action to send a telepathic message to a creature you are focused on. It can reply - using a bonus action - while your focus on it continues.\n   While focusing on a creature with Detect Thoughts, you can use an action to cast the Suggestion spell (save DC 13) from the helm on that creature. Once used, the suggestion property can't be used again until the next dawn.",
		attunement : true,
		limfeaname : "Helm of Telepathy: Suggestion",
		usages : 1,
		recovery : "dawn",
		fixedDC : 13,
		spellcastingBonus : [{
			name : "At will",
			spells : ["detect thoughts"],
			selection : ["detect thoughts"],
			firstCol : "atwill"
		}, {
			name : "Once per dawn",
			spells : ["suggestion"],
			selection : ["suggestion"],
			firstCol : "oncelr"
		}]
	},
	"helm of teleportation (ccc-bmg-43 phlan4-1)" : {
		name : "Helm of Teleportation (CCC-BMG-43 PHLAN4-1)",
		source : [["AL","CCC"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "This black helm has a gold crown built into the ornamentation & resembles the ceremonial battle helm of a samurai warrior. In the crown's crest is a skull with a prominent black diamond on its forehead, the symbol of the Order of the Long Death. This helm has 3 charges. While wearing it, you can expend 1 charge as an action to cast Teleport from it. The helm regains 1d3 charges at dawn.",
		descriptionFull : "This black helm has a gold crown built into the ornamentation. It resembles the ceremonial battle helm of a samurai warrior. In the crest of the crown it features a skull with a prominent black diamond on its forehead, the symbol of the Order of the Long Death.\n   When the helmet is used, all those being transported hear the words “Across the weave” whispered softly in undercommon. This helm has 3 charges. While wearing it, you can use an action and expend 1 charge to cast the Teleport spell from it. The helm regains 1d3 expended charges daily at dawn.",
		attunement : true,
		limfeaname : "Helm of Teleportation",
		usages : 3,
		recovery : "dawn",
		additional : "regains 1d3",
		spellFirstColTitle : "Ch",
		spellcastingBonus : {
			name : "1 charge",
			spells : ["teleport"],
			selection : ["teleport"],
			firstCol : "1"
		}
	},
	"the mask of wompona yarp (ddal7-14)" : {
		name : "The Mask of Wompona Yarp (Helm of Brilliance)",
		source : [["AL","S7"]],
		rarity : "very rare",
		magicItemTable : "H",
		description : "This monstrous batiri goblin mask is made of lacquered wood, its gems carved to resemble numerous unblinking eyes. When found, the mask has 6 diamonds, 5 rubies, 17 fire opals, & 34 opals. Action to cast a spell w/ a gem, the surrounding wood closing around it like an eyelid. When all the gems are used, the mask loses its magic. The mask has special properties for each gem type, see Notes page.",
		descriptionFull : "This monstrous batiri goblin mask is made of lacquered wood and its gems carved to resemble numerous unblinking eyes. When found, the helm has 6 diamonds, 5 rubies, 17 fire opals, and 34 opals. You can use an action to destroy a gem & cast a spell, the surrounding wood closing around it like an eyelid. When all the gems are used or destroyed, the mask loses its magic.\n   You gain the following benefits while wearing it:\n \u2022 You can use an action to cast one of the following spells (save DC 18), using one of the helm's gems of the specified type as a component: Daylight (opal), Fireball (fire opal), Prismatic Spray (diamond), or Wall of Fire (ruby). The gem is destroyed when the spell is cast and disappears from the helm.\n \u2022 As long as it has at least one diamond, the helm emits dim light in a 30-foot radius when at least one undead is within that area. Any undead that starts its turn in that area takes 1d6 radiant damage.\n \u2022 As long as the helm has at least one ruby, you have resistance to fire damage.\n \u2022 As long as the helm has at least one fire opal, you can use an action and speak a command word to cause one weapon you are holding to burst into flames. The flames emit bright light in a 10-foot radius and dim light for an additional 10 feet. The flames are harmless to you and the weapon. When you hit with an attack using the blazing weapon, the target takes an extra 1d6 fire damage. The flames last until you use a bonus action to speak the command word again or until you drop or stow the weapon.\n\nRoll a d20 if you are wearing the helm and take fire damage as a result of failing a saving throw against a spell. On a roll of 1, the helm emits beams of light from its remaining gems. Each creature within 60 feet of the helm other than you must succeed on a DC 17 Dexterity saving throw or be struck by a beam, taking radiant damage equal to the number of gems in the helm. The helm and its gems are then destroyed.",
		attunement : true,
		dmgres : ["Fire"],
		action : [["action", "Helm of Brilliance (spell/blazing weapon)"]],
		extraLimitedFeatures : [{
			name : "Helm of Brilliance - Diamonds (D)",
			usages : "6",
			recovery : "Never"
		}, {
			name : "Helm of Brilliance - Rubies (R)",
			usages : "5",
			recovery : "Never"
		}, {
			name : "Helm of Brilliance - Fire Opals (F)",
			usages : "17",
			recovery : "Never"
		}, {
			name : "Helm of Brilliance - Opals (O)",
			usages : "34",
			recovery : "Never"
		}],
		fixedDC : 18,
		spellFirstColTitle : "GE",
		spellcastingBonus : [{
			name : "Uses an opal (O)",
			spells : ["daylight"],
			selection : ["daylight"],
			firstCol : "(O)"
		}, {
			name : "Uses a fire opal (F)",
			spells : ["fireball"],
			selection : ["fireball"],
			firstCol : "(F)"
		}, {
			name : "Uses a diamond (D)",
			spells : ["prismatic spray"],
			selection : ["prismatic spray"],
			firstCol : "(D)"
		}, {
			name : "Uses a ruby (R)",
			spells : ["wall of fire"],
			selection : ["wall of fire"],
			firstCol : "(R)"
		}],
		spellChanges : {
			"daylight" : {
				components : "M\u0192,M\u2020",
				compMaterial : "Spells cast from magic items don't require any components other than the magic item itself and, when casting Daylight from the Helm of Brilliance, causes one of the opals in the helm to crumble to dust.",
				changes : "Using the Helm of Brilliance to cast Daylight causes one of the opals in the helm to crumble to dust."
			},
			"fireball" : {
				components : "M\u0192,M\u2020",
				compMaterial : "Spells cast from magic items don't require any components other than the magic item itself and, when casting Fireball from the Helm of Brilliance, causes one of the fire opals in the helm to crumble to dust.",
				changes : "Using the Helm of Brilliance to cast Fireball causes one of the fire opals in the helm to crumble to dust."
			},
			"prismatic spray" : {
				components : "M\u0192,M\u2020",
				compMaterial : "Spells cast from magic items don't require any components other than the magic item itself and, when casting Prismatic Spray from the Helm of Brilliance, causes one of the diamonds in the helm to crumble to dust.",
				changes : "Using the Helm of Brilliance to cast Prismatic Spray causes one of the diamonds in the helm to crumble to dust."
			},
			"wall of fire" : {
				components : "M\u0192,M\u2020",
				compMaterial : "Spells cast from magic items don't require any components other than the magic item itself and, when casting Wall of Fire from the Helm of Brilliance, causes one of the rubies in the helm to crumble to dust.",
				changes : "Using the Helm of Brilliance to cast Wall of Fire causes one of the rubies in the helm to crumble to dust."
			}
		},
		toNotesPage : [{
			name : "Special Properties",
			popupName : "Helm of Brilliance's Special Properties",
			note : [
				"This monstrous batiri goblin mask is made of lacquered wood and its gems carved to resemble numerous unblinking eyes. When found, the helm has 6 diamonds, 5 rubies, 17 fire opals, and 34 opals. You can use an action to destroy a gem & cast a spell, the surrounding wood closing around it like an eyelid. When all the gems are used or destroyed, the mask loses its magic.",
				"As an action, I can cast one of the following spells (save DC 18), using one of the helm's gems of the specified type as a component: Daylight (opal), Fireball (fire opal), Prismatic Spray (diamond), or Wall of Fire (ruby). The gem is destroyed when the spell is cast and disappears from the helm.",
				"As long as the helm has at least one diamond remaining, it emits dim light in a 30-ft radius when at least one undead is within that area. Any undead that starts its turn in that area takes 1d6 radiant damage.",
				"As long as the helm has at least one ruby remaining, I have resistance to fire damage.",
				"As long as the helm has at least one fire opal remaining, I can use an action and speak a command word to cause one weapon I'm holding to burst into flames. The flames emit bright light in a 10-ft radius and dim light for an additional 10 ft. The flames are harmless to me and the weapon. When I hit with an attack using the blazing weapon, the target takes an extra 1d6 fire damage. The flames last until I use a bonus action to speak the command word again or until I drop or stow the weapon.",
				"If I take fire damage as a result of failing a save against a spell while wearing the helm, I have to roll a d20. On a roll of 1, the helm emits beams of light from its remaining gems. Each creature within 60 ft other than myself must succeed on a DC 17 Dexterity save or be struck by a beam, taking radiant damage equal to the number of gems remaining in the helm. The helm and its gems are then destroyed."
			]
		}]
	},
	"thenturian circlet (ccc-tarot1-7)" : { // contains contributions by Larry Hoy
		name : "Thenturian Circlet (CCC-TAROT1-7)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "This circlet is very old – from the time of Aesperus. It's made of copper & onyx, with golden chains draping down from the circlet & single shard of obsidian in the center. While wearing the circlet, the voices of the dead whisper to you, granting you a +2 bonus to initiative if not incapacitated. Once per dawn, you can cast the Scorching Ray spell with it as an action. When you make the spell atks, your atk bonus is +5.",
		descriptionFull : "The circlet is made of elk antler carved with the design of the shimmering aurora and bound with a waxed elk leather cord. When activated, the circlet glows with blue light. While wearing this circlet, you can use an action to cast the Scorching Ray spell with it. When you make the spell's attacks, you do so with an attack bonus of +5. The circlet can't be used this way again until the next dawn.\n   While worn, the voices of the dead whisper to you, granting you a +2 bonus to initiative if you aren't incapacitated. This circlet is very old – from the time of Aesperus when he was alive. It is made of copper and onyx, with golden chains draping down from the circlet. In the center is a single shard of obsidian.",
		addMod : { type : "skill", field : "Init", mod : 2, text : "+2 bonus on initiative rolls." },
		limfeaname : "Circlet of Blasting",
		usages : 1,
		recovery : "dawn",
		fixedDC : 13,
		spellcastingBonus : {
			name : "Once per dawn",
			spells : ["scorching ray"],
			selection : ["scorching ray"],
			firstCol : "oncelr"
		}
	},
	"weave, helm of teleportation (ccc-pha-1)" : {
		name : "Weave, Helm of Teleportation (CCC-PHA-1)",
		source : [["AL","CCC"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "This helm once belonged to the drow mage Axcelia Axcelon. It's crafted from mithral in the shape of a spider. When held to the back of your head, 8 thin spidery legs extend & wrap around your face. The feel of legs over skin is soft & silken, a sensation that's both comfortable & extremely unsettling. A worshipper of Lolth feels envy & awe at the fine craftmanship. This helm has 3 charges. While wearing it, you can expend 1 charge as an action to cast Teleport from it. The helm regains 1d3 charges at dawn.",
		descriptionFull : "The helm called “Weave” once belonged to the drow mage Axcelia Axcelon. It is crafted out of mithral and fashioned into the shape of a spider. When held to the back of the wearer’s head, eight thin spidery legs extend and wrap around the head and face of the wearer to form the helmet. The feel of the legs over skin is soft and silken – a sensation that is both comfortable and extremely unsettling to the unaccustomed wearer.\n   A worshipper of Lolth would pause in envy and awe at the sight of such fine workmanship.\n   When the helmet is used, all those being transported hear the words “Across the weave” whispered softly in undercommon. This helm has 3 charges. While wearing it, you can use an action and expend 1 charge to cast the Teleport spell from it. The helm regains 1d3 expended charges daily at dawn.",
		attunement : true,
		limfeaname : "Helm of Teleportation",
		usages : 3,
		recovery : "dawn",
		additional : "regains 1d3",
		spellFirstColTitle : "Ch",
		spellcastingBonus : {
			name : "1 charge",
			spells : ["teleport"],
			selection : ["teleport"],
			firstCol : "1"
		}
	},
	"wolfskin cap (ddex4-3)" : {   // contains contributions by Larry Hoy
		name : "Wolfskin Cap (Hat of Disguise)",
		source : [["AL","S4"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "This thick & fuzzy cap is actually a hat of disguise, & looks incredibly comfortable. While it allows the wearer to cast disguise self at-will, the power is limited in that it only disguises the wearer as a plain-looking brown-haired human male in his late twenties. However, while so disguised, the wearer is hidden from spells abilities that would detect their true nature (such as divine sense). The spell ends if the hat is removed.",
		descriptionFull : "This thick and fuzzy hat is actually a hat of disguise, and looks incredibly comfortable. While it allows the wearer to cast disguise self at-will, the power is limited in that it only disguises the wearer as a plain-looking brown-haired human male in his late twenties. However, while so disguised, the wearer is hidden from spells abilities that would detect its true nature (such as divine sense). The spell ends if the hat is removed.",
		attunement : true,
		spellcastingBonus : [{
			name : "At will",
			spells : ["disguise self"],
			selection : ["disguise self"],
			firstCol : "atwill"
	   }],
	   spellcastingAbility : "class"
	},
}
	
MagicItemsList["al instruments"] = {
		name : "AL Instruments",
		type : "wondrous item",
		allowDuplicates : true,
	choices : ["Anstruth Harp (CCC-BMG-40 HULB4-1)","Bell of Silent Carols (DDAL0-5)","Biguris' Fury, Horn of Valhalla (CCC-GSP2-3)","Canaith Mandolin (DDEX3-9)","Chime of Opening (DDAL10-6)","Cli Lyre (CCC-TRI-25)","Dragon's Lullaby, Mac-Fuirmidh Cittern (CCC-GSP1-1)","Horn of Blasting (DDEX1-11)","Horn of Silent Alarm (CCC-SQC-3-3)","Instrument of Illusions (CCC-ODFC3-1)","Instrument of Illusions (DDHC-MORD-05)","Mac-Fuirmidh Cittern (CCC-THENT1-3)","Pipes of Haunting (CCC-MACE1-1)","Pipes of the Sewers (DDEX3-6)","Pipes of the Sewers (DDHC-XGE-01)","Silver Horn of Valhalla (CCC-TRI-5)"],
	"anstruth harp (ccc-bmg-40 hulb4-1)" : {
		name : "Anstruth Harp (CCC-BMG-40 HULB4-1)",
		source : [["AL","CCC"]],
		rarity : "very rare",
		magicItemTable : "H",
		attunement : true,
		description: "The harp is made from white bone carved to look like a kraken w/ tentacles ending in the strings. It's well-suited for dirges & sea shanties & glows when a celestial is w/i 100 ft. If you try to play w/o attuning, DC 15 Wis save or 2d4 psychic dmg. Action to play & cast a spell: Fly, Invisibility, Levitate, Protection from Evil & Good, Cure Wounds (5th lvl), Control Weather, or Wall of Thorns. Each can be cast once per dawn using your spellcasting ability & save DC. Play the instrument while casting a charm effect spell & you can impose disadv. on the save if the spell has a somatic or a material component.",
		descriptionFull : "The harp is made out of white bone, carved to look like a kraken with its tentacles ending in the strings. The sounds it produces are especially well-suited for dirges and sea shanties. It glows when a celestial approaches within 100 feet of the harp.\n   An instrument of the bards is an exquisite example of its kind, superior to an ordinary instrument in every way. Seven types of these instruments exist, each named after a legendary bard college. A creature that attempts to play the instrument without being attuned to it must succeed on a DC 15 Wisdom saving throw or take 2d4 psychic damage.\n   You can use an action to play the instrument and cast one of its spells. Once the instrument has been used to cast a spell, it can't be used to cast that spell again until the next dawn. The spells use your spellcasting ability and spell save DC.\n   You can play the instrument while casting a spell that causes any of its targets to be charmed on a failed saving throw, thereby imposing disadvantage on the save. This effect applies only if the spell has a somatic or a material component.\n   All instruments of the bards can be used to cast the following spells: Fly, Invisibility, Levitate, and Protection from Evil and Good.\n   In addition, the Anstruth harp can be used to cast Control Weather, Cure Wounds (5th level), and Wall of Thorns.",
		weight : 3, // Magic of Faerûn (2001) page 161
		prerequisite : "Requires attunement by a bard",
		prereqeval : function(v) { return classes.known.bard ? true : false; },
		spellcastingBonus : {
			name : "Once per long rest",
			spells : ["fly", "invisibility", "levitate", "protection from evil and good", "control weather", "cure wounds", "wall of thorns"],
			selection : ["fly", "invisibility", "levitate", "protection from evil and good", "control weather", "cure wounds", "wall of thorns"],
			firstCol : "oncelr",
			times : 7,
			spellcastingAbility : "class"
		},
		spellChanges : {
			"cure wounds" : {
				description : "1 living creature heals 5d8+spellcasting ability modifier HP",
				changes : "When using the Anstruth Harp to cast Cure Wounds, it is cast at 5th-level."
			},
			spellChanges : {
				"control weather" : {
					time : "1 a",
					changes : "Casting time is only an action."
				}
			}
		}
	},
	"bell of silent carols (ddal0-5)" : {
		name : "Bell of Silent Carols (Horn of Silent Alarm)",
		source : [["AL","S0"]],
		rarity : "common",
		magicItemTable : "?",
		description : "This bell has 4 charges. When you use an action to shake it, one creature of your choice can hear the bell’s ring in the tune of festive carols, provided the creature is within 600 feet of the bell and not deafened. No other creature hears sound coming from the bell. The bell regains 1d4 expended charges daily at dawn.",
		weight : 2,
		limfeaname : "Bell of Silent Carols",
		usages : 4,
		recovery : "dawn",
		additional : "regains 1d4",
		action : [["action", ""]]
		},
	"biguris' fury, horn of valhalla (ccc-gsp2-3)" : {
		name : "Biguris' Fury (Brass Horn of Valhalla)",
		source : [["AL","CCC"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "The spirits summoned by this horn look like earth genasi warriors w/ stone flesh, wearing gold armor. Each spirit has a black five-leaf clover tattoo on their right hand. As an action once per 7 days, you can blow the horn to summon 3d4+3 warrior spirits from Ysgard within 60 ft. These berserkers disappear after 1 hr or at 0 hp. If you're proficient w/ all simple weapons, they are friendly & follow your commands. Otherwise, they attack.",
		descriptionFull : "You can use an action to blow this horn. In response, warrior spirits from the plane of Ysgard appear within 60 feet of you. These spirits use the berserker statistics. They return to Ysgard after 1 hour or when they drop to 0 hit points. Once you use the horn, it can't be used again until 7 days have passed.\n   A brass horn summons 3d4+3 berserkers. To use the brass horn, you must be proficient with all simple weapons. If you blow the horn without meeting its requirement, the summoned berserkers attack you. If you meet the requirement, they are friendly to you and your companions and follow your commands.\n   The spirits summoned by the horn look like earth genasi warriors with stone flesh, wearing gold armor. Each spirit has a black five-leaf clover tattoo on the back of their right hand.",
		weight : 2,
		limfeaname : "Brass Horn of Valhalla",
		usages : 1,
		recovery : "7 days",
		action : [["action", ""]],
		allowDuplicates : true,
		},
	"canaith mandolin (ddex3-9)" : {
		name : "Canaith Mandolin (DDEX3-9)",
		source : [["AL","S3"]],
		rarity : "rare",
		magicItemTable : "G",
		attunement : true,
		description: "Made of fine, dark wood, this mandolin is inlaid with mithral & mother-of-pearl in the shape of lightning bolts. You can use an action to make your voice carry clearly for up to 300 ft until your next turn ends. If you try to play w/o attuning, DC 15 Wis save or 2d4 psychic dmg. Action to play & cast a spell: Fly, Invisibility, Levitate, Protection from Evil & Good, Cure Wounds (3rd lvl), Dispel Magic, or Protection from Energy (lightning). Each can be cast once per dawn using your spellcasting ability & save DC. Play the instrument while casting a charm effect spell & you can impose disadv. on the save if the spell has a somatic or a material component.",
		descriptionFull : "Made of fine, dark wood, this mandolin is inlaid with mithral and mother-of-pearl in the shape of forked lightning bolts. The bearer of this instrument can use an action to make their voice carry clearly for up to 300 ft until the end of their next turn.\n   An instrument of the bards is an exquisite example of its kind, superior to an ordinary instrument in every way. Seven types of these instruments exist, each named after a legendary bard college. A creature that attempts to play the instrument without being attuned to it must succeed on a DC 15 Wisdom saving throw or take 2d4 psychic damage.\n   You can use an action to play the instrument and cast one of its spells. Once the instrument has been used to cast a spell, it can't be used to cast that spell again until the next dawn. The spells use your spellcasting ability and spell save DC.\n   You can play the instrument while casting a spell that causes any of its targets to be charmed on a failed saving throw, thereby imposing disadvantage on the save. This effect applies only if the spell has a somatic or a material component.\n   All instruments of the bards can be used to cast the following spells: Fly, Invisibility, Levitate, and Protection from Evil and Good.\n   In addition, the Canaith mandolin can be used to cast Cure Wounds (3rd level), Dispel Magic, and Protection from Energy (lightning only).",
		action : [["action", "Canaith Mandolin (300ft Voice)"]],
		weight : 3, // Magic of Faerûn (2001) page 161
		prerequisite : "Requires attunement by a bard",
		prereqeval : function(v) { return classes.known.bard ? true : false; },
		spellcastingBonus : {
			name : "Once per long rest",
			spells : ["fly", "invisibility", "levitate", "protection from evil and good", "cure wounds", "dispel magic", "protection from energy"],
			selection : ["fly", "invisibility", "levitate", "protection from evil and good", "cure wounds", "dispel magic", "protection from energy"],
			firstCol : "oncelr",
			times : 7,
			spellcastingAbility : "class"
		},
		spellChanges : {
			"cure wounds" : {
				description : "1 living creature heals 3d8+spellcasting ability modifier HP",
				changes : "When using the Canaith Mandolin to cast Cure Wounds, it is cast at 3rd-level."
			},
			"protection from energy" : {
				description : "1 creature gains resistance to Lightning damage for the duration",
				changes : "When using the Canaith Mandolin to cast Protection from Energy, it can only grant resistance to lightning damage."
			},
		}
	},
	"chime of opening (ddal10-6)" : { // with contributions by AelarTheElfRogue
		name : "Chime of Opening (DDAL10-6)",
		source : [["AL","S10"]],
		rarity : "rare",
		magicItemTable : "C",
		description : "This squat, black rod has a matte finish & a couple of flat switches & dials at one end. You can strike the chime as an action, pointing it at an openable object w/i 120 ft (i.e. door, lid, lock). One lock or latch (or if none, the object itself) opens unless the sound can't reach. The chime can be used 10 times before becoming useless.",
		descriptionFull : "This squat, black rod has a matte finish and a couple of flat switches and dials at one end. This hollow metal tube measures about 1 foot long and weighs 1 pound. You can strike it as an action, pointing it at an object within 120 feet of you that can be opened, such as a door, lid, or lock. The chime issues a clear tone, and one lock or latch on the object opens unless the sound can't reach the object. If no locks or latches remain, the object itself opens.\n   The chime can be used ten times. After the tenth time it cracks and becomes useless.",
		weight : 1,
		limfeaname : "Chime of Opening",
		action : [["action", ""]],
		usages : 10,
		recovery : "Never"
	},
	"cli lyre (ccc-tri-25)" : {
		name : "Cli Lyre (CCC-TRI-25)",
		source : [["AL","CCC"]],
		rarity : "rare",
		magicItemTable : "G",
		attunement : true,
		description: "This lyre is expertly crafted & embossed with dark mother-of-pearl stingrays. If you try to play w/o attuning, DC 15 Wis save or 2d4 psychic dmg. Action to play the instrument & cast spell: Fly, Invisibility, Levitate, Protection from Evil & Good, Stone Shape, Wall of Fire, or Wind Wall. Each can be cast once per dawn using your spellcasting ability & save DC. Play the instrument while casting a charm effect spell & you can impose disadv. on the save if the spell has somatic or material components.",
		descriptionFull : "An expertly crafted lyre embossed with dark mother-of-pearl stingrays.\n   An instrument of the bards is an exquisite example of its kind, superior to an ordinary instrument in every way. Seven types of these instruments exist, each named after a legendary bard college. A creature that attempts to play the instrument without being attuned to it must succeed on a DC 15 Wisdom saving throw or take 2d4 psychic damage.\n   You can use an action to play the instrument and cast one of its spells. Once the instrument has been used to cast a spell, it can't be used to cast that spell again until the next dawn. The spells use your spellcasting ability and spell save DC.\n   You can play the instrument while casting a spell that causes any of its targets to be charmed on a failed saving throw, thereby imposing disadvantage on the save. This effect applies only if the spell has a somatic or a material component.\n   All instruments of the bards can be used to cast the following spells: Fly, Invisibility, Levitate, and Protection from Evil and Good.\n   In addition, the Cli lyre can be used to cast Stone Shape, Wall of Fire, and Wind Wall.",
		weight : 3, // Magic of Faerûn (2001) page 161
		prerequisite : "Requires attunement by a bard",
		prereqeval : function(v) { return classes.known.bard ? true : false; },
		spellcastingBonus : {
			name : "Once per long rest",
			spells : ["fly", "invisibility", "levitate", "protection from evil and good", "stone shape", "wall of fire", "wind wall"],
			selection : ["fly", "invisibility", "levitate", "protection from evil and good", "stone shape", "wall of fire", "wind wall"],
			firstCol : "oncelr",
			times : 7,
			spellcastingAbility : "class"
		}
	},
	"dragon's lullaby, mac-fuirmidh cittern (ccc-gsp1-1)" : {
		name : "Dragon's Lullaby (Mac-Fuirmidh Cittern)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "F",
		attunement : true,
		description: "This cittern is pure, pearly white. A light blue, cloud like design of shou origin is engraved on its body. When used to cast a spell, tiny pink flower petals swirl around your body, blown by a harmless gust of wind to the song's rhythm. If you try to play w/o attuning, DC 15 Wis save or 2d4 psychic dmg. Action to play the instrument & cast spell: Fly, Invisibility, Levitate, Protection from Evil & Good, Barkskin, Cure Wounds, or Fog Cloud. Each can be cast once per dawn using your spellcasting ability & save DC. Play the instrument while casting a charm effect spell & you can impose disadv. on the save if the spell has somatic or material components.",
		descriptionFull : "This cittern is pure, pearly white. A light blue, cloud like design of shou origin is engraved on the instrument's body. When used to cast a spell, tiny pink flower petals swirls around the caster's body as it gets blown away by a harmless gust of wind. The petals' movement matches the tempo of the song being played.\n   An instrument of the bards is an exquisite example of its kind, superior to an ordinary instrument in every way. Seven types of these instruments exist, each named after a legendary bard college. A creature that attempts to play the instrument without being attuned to it must succeed on a DC 15 Wisdom saving throw or take 2d4 psychic damage.\n   You can use an action to play the instrument and cast one of its spells. Once the instrument has been used to cast a spell, it can't be used to cast that spell again until the next dawn. The spells use your spellcasting ability and spell save DC.\n   You can play the instrument while casting a spell that causes any of its targets to be charmed on a failed saving throw, thereby imposing disadvantage on the save. This effect applies only if the spell has a somatic or a material component.\n   All instruments of the bards can be used to cast the following spells: Fly, Invisibility, Levitate, and Protection from Evil and Good.\n   In addition, the Mac-Fuirmidh cittern can be used to cast Barkskin, Cure Wounds, and Fog Cloud.",
		weight : 3, // Magic of Faerûn (2001) page 161
		prerequisite : "Requires attunement by a bard",
		prereqeval : function(v) { return classes.known.bard ? true : false; },
		spellcastingBonus : {
			name : "Once per long rest",
			spells : ["fly", "invisibility", "levitate", "protection from evil and good", "barkskin", "cure wounds", "fog cloud"],
			selection : ["fly", "invisibility", "levitate", "protection from evil and good", "barkskin", "cure wounds", "fog cloud"],
			firstCol : "oncelr",
			times : 7,
			spellcastingAbility : "class"
		}
	},
	"horn of blasting (ddex1-11)" : {  // contains contributions by Larry Hoy
		name : "Horn of Blasting (DDEX1-11)",
		source : [["AL","S1"]],
		rarity : "rare",
		magicItemTable : "G",
		description: "This horn is made of polished brass & is engraved w/ Gnomish script. The script tells the story of a mighty gnome king & his triumphant victory over a large tribe of kobolds. As an action, you can speak the horn's command word & blow it, creating a 30-ft cone. All in it take 5d6 thunder damage & are deafened for 1 min. Half damage w/ a DC 15 Con save and not deafened. Glass/crystal creatures/objects have disadv. & take 10d6 damage. There is a 20% chance each use that it explodes.",
		descriptionFull : "This horn is made of polished brass, and has a script engraved in Gnomish. The script relates the story of a mighty gnome king and triumphant victory over a large tribe of kobolds. You can use an action to speak the horn's command word and then blow the horn, which emits a thunderous blast in a 30-foot cone that is audible 600 feet away. Each creature in the cone must make a DC 15 Constitution saving throw. On a failed save, a creature takes 5d6 thunder damage and is deafened for 1 minute. On a successful save, a creature takes half as much damage and isn't deafened. Creatures and objects made of glass or crystal have disadvantage on the saving throw and take 10d6 thunder damage instead of 5d6.\n   Each use of the horn's magic has a 20% chance of causing the horn to explode. The explosion deals 10d6 fire damage to the blower and destroys the horn.",
		weight : 2,
		action : [["action", "Horn of Blasting"]]
		},
	"horn of silent alarm (ccc-sqc-3-3)" : {
		name : "Horn of Silent Alarm (CCC-SQC-3-3)",
		source : [["AL","CCC"]],
		rarity : "common",
		magicItemTable : "?",
		description : "This horn has 4 charges, regaining 1d4 charges at dawn. As an action, you can expend 1 charge and blow it, only one creature of your choice within 600 ft hearing the horn, provided it isn't deafened. No other creature hears the sound. This horn plays an otherworldly eldritch scream when activated.",
		descriptionFull : "This horn has 4 charges. When you use an action to blow it, one creature of your choice can hear the horns blare, provided the creature is within 600 feet of the horn and not deafened. No other creature hears sound coming from the horn. The horn regains 1d4 expended charges daily at dawn.\n   This horn plays an otherworldly eldritch scream when activated, instead of a traditional horn sound. You can only imagine why Kenna loves this.",
		weight : 2,
		limfeaname : "Horn of Silent Alarm",
		usages : 4,
		recovery : "dawn",
		additional : "regains 1d4",
		action : [["action", ""]]
		},
	"instrument of illusions (ccc-odfc3-1)" : {   // contains contributions by AelarTheElFRogue
		name : "Instrument of Illusions (CCC-ODFC3-1)",
		source : [["AL","CCC"]],
		rarity : "common",
		description : "This silver pan flute is carved with the phases of the moon. While playing it, you can create harmless, illusory visual effects such as Luna moths within a 5-ft radius (15-ft for bards) sphere centered on the instrument. The magical effects have neither substance nor sound, and are obviously illusory. The effects end when you stop playing.",
		descriptionFull : "This silver pan flute is carved with the phases of the moon. While playing it, you can create harmless, illusory visual effects within a 5-foot radius sphere centered on the instrument. If you are a bard, the radius increases to 15 feet. Sample visual effects include luminous musical notes, a spectral dancer, Luna moths, and gently falling snow. The magical effects have neither substance nor sound, and they are obviously illusory. The effects end when you stop playing.",
		attunement : true,
	},
	"instrument of illusions (ddhc-mord-05)" : {   // contains contributions by AelarTheElFRogue
		name : "Instrument of Illusions (DDHC-MORD-05)",
		source : [["AL","MtoF"]],
		rarity : "common",
		description : "This gleaming mithral harmonica is engraved with the following phrase: “Shandira & Bailee, Suzail, 1492 DR.” While playing it, you can create harmless, illusory visual effects within a 5-ft-radius (15-ft for bards) sphere centered on the instrument. The magical effects have neither substance nor sound, and are obviously illusory. The effects end when you stop playing.",
		descriptionFull : "This gleaming mithral harmonica is engraved with the following phrase: “Shandira & Bailee, Suzail, 1492 DR.” While playing it, you can create harmless, illusory visual effects within a 5-foot-radius sphere centered on the instrument. If you are a bard, the radius increases to 15 feet. Sample visual effects include luminous musical notes, a spectral dancer, butterflies, and gently falling snow. The magical effects have neither substance nor sound, and they are obviously illusory. The effects end when you stop playing.",
		attunement : true,
	},
	"mac-fuirmidh cittern (ccc-thent1-3)" : {
		name : "Mac-Fuirmidh Cittern (CCC-THENT1-3)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "F",
		attunement : true,
		description: "This stringed instrument is made of a purplish wood, with grain that whorls rather than lies straight. A sun of worked silver seems to be rising from its base. If you try to play w/o attuning, DC 15 Wis save or 2d4 psychic dmg. Action to play & cast a spell: Fly, Invisibility, Levitate, Protection from Evil & Good, Barkskin, Cure Wounds, or Fog Cloud. Each can be cast once per dawn using your spellcasting ability & save DC. Play the instrument while casting a charm effect spell & you can impose disadv. on the save if the spell has somatic or material components.",
		descriptionFull : "This stringed instrument is made of a purplish wood, with grain that whorls rather than lies in straight lines. A sun of worked silver seems to be rising from the base of the cittern.\n   An instrument of the bards is an exquisite example of its kind, superior to an ordinary instrument in every way. Seven types of these instruments exist, each named after a legendary bard college. A creature that attempts to play the instrument without being attuned to it must succeed on a DC 15 Wisdom saving throw or take 2d4 psychic damage.\n   You can use an action to play the instrument and cast one of its spells. Once the instrument has been used to cast a spell, it can't be used to cast that spell again until the next dawn. The spells use your spellcasting ability and spell save DC.\n   You can play the instrument while casting a spell that causes any of its targets to be charmed on a failed saving throw, thereby imposing disadvantage on the save. This effect applies only if the spell has a somatic or a material component.\n   All instruments of the bards can be used to cast the following spells: Fly, Invisibility, Levitate, and Protection from Evil and Good.\n   In addition, the Mac-Fuirmidh cittern can be used to cast Barkskin, Cure Wounds, and Fog Cloud.",
		weight : 3, // Magic of Faerûn (2001) page 161
		prerequisite : "Requires attunement by a bard",
		prereqeval : function(v) { return classes.known.bard ? true : false; },
		spellcastingBonus : {
			name : "Once per long rest",
			spells : ["fly", "invisibility", "levitate", "protection from evil and good", "barkskin", "cure wounds", "fog cloud"],
			selection : ["fly", "invisibility", "levitate", "protection from evil and good", "barkskin", "cure wounds", "fog cloud"],
			firstCol : "oncelr",
			times : 7,
			spellcastingAbility : "class"
		}
	},
	"pipes of haunting (ccc-mace1-1)" : { // contains contributions by Soilentbrad
		name : "Pipes of Haunting (CCC-MACE1-1)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "These pipes are carved from a pair of worg fibulas. Mouse skulls adorn each pipe & glow with a faint greenish light when played. The pipes have 3 charges. As an action, use 1 charge to play pipes so creatures in 30 ft that can hear you make a DC 15 Wis save or be frightened for 1 min. Non-hostile creatures may auto-pass if you wish. A target can repeat the save at the end of each turn & becomes immune for 24 hrs once passed. The pipes regain 1d3 charges at dawn.",
		descriptionLong : "These pipes are carved from a pair of worg fibulas. Mouse skulls adorn each pipe and glow with a faint greenish light when played. The pipes have 3 charges. As an action, you can expend 1 charge to create an eerie, spellbinding tune. Each creature within 30 ft that can hear the pipes must make a DC 15 Wisdom save or be frightened of you for 1 min.  If you wish, all non-hostile creatures automatically succeed on the saving throw. An affected creature can repeat the save at the end of each turn, ending the effect on a success. A creature that succeeds on its saving throw is immune to the pipes for 24 hours. The pipes regain 1d3 expended charges at dawn.",
		descriptionFull : "These pipes are carved from a pair of worg fibulas. Mouse skulls adorn each pipe and glow with a faint greenish light when played. You must be proficient with wind instruments to use these pipes. They have 3 charges. You can use an action to play them and expend 1 charge to create an eerie, spellbinding tune. Each creature within 30 feet of you that hears you play must succeed on a DC 15 Wisdom saving throw or become frightened of you for 1 minute. If you wish, all creatures in the area that aren't hostile toward you automatically succeed on the saving throw. A creature that fails the saving throw can repeat it at the end of each of its turns, ending the effect on itself on a success. A creature that succeeds on its saving throw is immune to the effect of these pipes for 24 hours. The pipes regain 1d3 expended charges daily at dawn.",
		weight : 2,
		limfeaname : "Pipes of Haunting",
		usages : 3,
		action : [["action", ""]],
		recovery : "dawn",
		additional : "regains 1d3",
		prerequisite : "Requires proficiency with wind instruments",
		prereqeval : function (v) {
			for (var i = 0; i < v.toolProfs.length; i++) {
				if ((/pipe|flute|horn|trumpet|horn|ocarina|sackbut|shawm|trombone|tuba|bombard|cornett|flageolet|^(?=.*(air|wind))(?=.*instrument).*$/i).test(v.toolProfs[i])) return true;
			}
		}
	},
	"pipes of the sewers (ddex3-6)" : {   // contains contributions by Soilentbrad
		name : "Pipes of the Sewers (DDEX3-6)",
		source : [["AL","S3"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "These pipes have an intricate pattern of whorls carved into them. When inspected closely, the whorls are actually a tiny poem in ancient Thorass called “Maedra’s Home.” The pipes have 3 charges, regain 1d3 at dawn, and cause rats to be indifferent toward you unless threatened. As an action, you can play pipes, then use a bonus action to summon rats in 0.5 miles to form 1 swarm per charge. While playing, rat swarms in 30 ft make a Wis check vs. your Cha check. If fail, obey as long as can hear pipes at start of turn (you must continue playing as Action). If pass or fall out of sway, can't be affected again for 24 hrs.",
		descriptionFull : "These pipes have an intricate pattern of whorls carved into them. When inspected closely, the whorls are actually a tiny poem in ancient Thorass called “Maedra’s Home.” You must be proficient with wind instruments to use these pipes. While you are attuned to the pipes, rats are indifferent toward you and will not attack unless you threaten or harm them.\n   The pipes have 3 charges. If you play the pipes as an action, you can use a bonus action to expend 1 to 3 charges, calling forth one swarm of rats for each expended charge, provided that enough rats are within half a mile to be called in this fashion (as determined by the DM). If there aren't enough rats to form a swarm, the charge is wasted. Called swarms move toward the music by the shortest available route but aren't under your control. The pipes regain 1d3 expended charges daily at dawn.\n   Whenever a swarm of rats that isn't under another creature's control comes within 30 feet of you while you are playing the pipes, you can make a Charisma check contested by the swarm's Wisdom check. If you lose the contest, the swarm behaves as it normally would and can't be swayed by the pipes' music for the next 24 hours. If you win the contest, the swarm is swayed by the pipes' music and becomes friendly to you and your companions for as long as you continue to play the pipes each round as an action. A friendly swarm obeys your commands. If you issue no commands to a friendly swarm, it defends itself but otherwise takes no actions. If a friendly swarm starts its turn and can't hear the pipes' music, your control over that swarm ends. The swarm behaves as it normally would and can't be swayed by the pipes' music for the next 24 hours.",
		attunement : true,
		allowDuplicates : true,
		weight : 2,
		limfeaname : "Pipes of the Sewers",
		usages : 3,
		recovery : "dawn",
		additional : "regains 1d3",
		action : [["action", ""]],
		prerequisite: "Requires proficiency with wind instruments",
		prereqeval: function (v) {
			for (var i = 0; i < v.toolProfs.length; i++) {
				if ((/pipe|flute|horn|trumpet|horn|ocarina|sackbut|shawm|trombone|tuba|bombard|cornett|flageolet|^(?=.*(air|wind))(?=.*instrument).*$/i).test(v.toolProfs[i])) return true;
			}
		}
	},
	"pipes of the sewers (ddhc-xge-01)" : {   // contains contributions by Soilentbrad
		name : "Pipes of the Sewers (DDHC-XGE-01)",
		source : [["AL","XGE"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "These wooden pan-pipes are decorated w/ carvings of 100s of scuttling rats. While attuned, you always know direction to closet sewer. The pipes have 3 charges, regain 1d3 at dawn, & make rats indifferent to you unless threatened. Play pipes as an action, then use a bonus action to summon rats in 0.5 miles to form 1 swarm/charge. While playing, rat swarms in 30 ft make Wis check vs. your Cha check. If fail, obey if hear pipes when turn starts (you must continue playing as Action). If pass or fall out of sway, can't be affected for 24 hrs.",
		descriptionFull : "These wooden pan-pipes are decorated with carved reliefs of hundreds of scuttling rats. While you’re attuned to the pipes, you always know directions to the nearest sewer outlet.\n  You must be proficient with wind instruments to use these pipes. While you are attuned to the pipes, rats are indifferent toward you and will not attack unless you threaten or harm them.\n   The pipes have 3 charges. If you play the pipes as an action, you can use a bonus action to expend 1 to 3 charges, calling forth one swarm of rats for each expended charge, provided that enough rats are within half a mile to be called in this fashion (as determined by the DM). If there aren't enough rats to form a swarm, the charge is wasted. Called swarms move toward the music by the shortest available route but aren't under your control. The pipes regain 1d3 expended charges daily at dawn.\n   Whenever a swarm of rats that isn't under another creature's control comes within 30 feet of you while you are playing the pipes, you can make a Charisma check contested by the swarm's Wisdom check. If you lose the contest, the swarm behaves as it normally would and can't be swayed by the pipes' music for the next 24 hours. If you win the contest, the swarm is swayed by the pipes' music and becomes friendly to you and your companions for as long as you continue to play the pipes each round as an action. A friendly swarm obeys your commands. If you issue no commands to a friendly swarm, it defends itself but otherwise takes no actions. If a friendly swarm starts its turn and can't hear the pipes' music, your control over that swarm ends. The swarm behaves as it normally would and can't be swayed by the pipes' music for the next 24 hours.",
		attunement : true,
		allowDuplicates : true,
		weight : 2,
		limfeaname : "Pipes of the Sewers",
		usages : 3,
		recovery : "dawn",
		additional : "regains 1d3",
		action : [["action", ""]],
		prerequisite: "Requires proficiency with wind instruments",
		prereqeval: function (v) {
			for (var i = 0; i < v.toolProfs.length; i++) {
				if ((/pipe|flute|horn|trumpet|horn|ocarina|sackbut|shawm|trombone|tuba|bombard|cornett|flageolet|^(?=.*(air|wind))(?=.*instrument).*$/i).test(v.toolProfs[i])) return true;
			}
		}
	},
	"silver horn of valhalla (ccc-tri-5)" : {
		name : "Silver Horn of Valhalla (CCC-TRI-5)",
		source : [["AL","CCC"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "A hollow silvered tusk carved w/ bestial images & stained w/ blood from countless battles, this horn urges you to kill w/ your bare hands, the taste of congealed blood filling your mouth. As an action once per 7 days, you can blow the horn to summon 2d4+2 warrior spirits from Ysgard w/i 60 ft. These berserkers are bloodthirsty warriors of Malar & disappear after 1 hr or at 0 hp. They are friendly & follow your commands.",
		descriptionFull : "You can use an action to blow this horn. In response, warrior spirits from the plane of Ysgard appear within 60 feet of you. These spirits use the berserker statistics. They return to Ysgard after 1 hour or when they drop to 0 hit points. Once you use the horn, it can't be used again until 7 days have passed.\n    The silver horn summons 2d4+2 berserkers. The berserkers are friendly to you and your companions and follow your commands.\n    A silvered, hollow tusk carved with bestial images and stained in the blood of countless battles, the horn impels its user to kill foes with their bare hands while the taste of congealed blood fills their mouth. The berserkers called forth are bloodthirsty warriors tainted by Malar.",
		weight : 2,
		limfeaname : "Silver Horn of Valhalla",
		usages : 1,
		recovery : "7 days",
		action : [["action", ""]],
		allowDuplicates : true,
		},
}

MagicItemsList["al light sources"] = {
		name : "AL Light Sources",
		type : "wondrous item",
		allowDuplicates : true,
		allowDuplicates : true,
	choices : ["Candle of the Deep (CCC-AETHER2-1)","Candle of the Deep (CCC-ELO-2)","Candle of the Deep (DC-POA-JAK1)","Candle of the Deep (DDAL0-4)","Ghost Light (RMH-01)","Lantern of Revealing (CCC-DRUIDS-3)","Lantern of Revealing (CCC-DWB-EOG-1)","Lantern of Revealing (CCC-DWB-Q1)","Lantern of Revealing (CCC-MELB-2)","Lantern of Revealing (CCC-PP-TDD1-1)","Last Light of Northkeep (CCC-BWM-2)"],
	"candle of the deep (ccc-aether2-1)" : {
		name : "Candle of the Deep (CCC-AETHER2-1)",
		source : [["AL","CCC"]],
		rarity : "common",
		magicItemTable : "?",
		description : "This candle is carved in the shape of the Great Old One, Cthulhu, & emits an aura of insanity. The wax never melts & is nearly unbreakable. It burns even if immersed in water, giving off light & heat like a normal candle.",
		descriptionFull : "The wax of this candle is carved in the shape of the Great Old One, Cthulhu, & it emits an aura of insanity. The candle never melts and is nearly unbreakable.\n  The flame of this candle is not extinguished when immersed in water. It gives off light and heat like a normal candle."
	},
	"candle of the deep (ccc-elo-2)" : {
		name : "Candle of the Deep (CCC-ELO-2)",
		source : [["AL","CCC"]],
		rarity : "common",
		magicItemTable : "?",
		description : "This unique lamp is an exotic Underdark fungi: Nightlight. A 4-ft preserved stalk planted in a clay pot, its luminance soothes the hearts of Underdark children & is aesthetically pleasing to others. It glows even if immersed in water & gives off light & heat as a normal candle.",
		descriptionFull : "This unique lamp consists of a planted exotic Underdark fungi, Nightlight. A four-foot preserved stalk planted in a clay pot functions as a Candle of the Deep (pg. 136 XGtE). It’s luminance soothes the hearts of Underdark children and can be aesthetically pleasing to others. It glows even if immersed in water and gives off light and heat as a normal candle would."
	},
	"candle of the deep (dc-poa-jak1)" : {
		name : "Candle of the Deep (DC-POA-JAK1)",
		source : [["AL","CCC"]],
		rarity : "common",
		magicItemTable : "?",
		description : "This candle is made to look like a knucklehead trout leaping out of a fishing hole, its tail partially submerged in the water. The wick sticks out of the fish's mouth, like a fishing lure. It glows even if immersed in water & gives off light & heat as a normal candle.",
		descriptionFull : "This candle is made to look like a knucklehead trout leaping out of a fishing hole, its tail partially submerged in the water. The wick sticks out of the fish's mouth, like a fishing lure. The flame of this candle is not extinguished when immersed in water. It gives off light and heat like a normal candle."
	},
	"candle of the deep (ddal0-4)" : {
		name : "Candle of the Deep (DDAL0-4)",
		source : [["AL","S0"]],
		rarity : "common",
		magicItemTable : "?",
		description : "A product of a pain-staking enchantment, the candle acts as an anchor for the delicate and fickle spark of flame. As it burns, it emits a slight citrus scent, like that of a pembelon. It cannot be extinguished unless clipped from the wick (even if immersed in water) and gives light and heat as a normal candle would.",
		descriptionFull : "A product of a pain-staking enchantment, the candle acts as an anchor for the delicate and fickle spark of an enchanted flame. As it burns it emits a slight citrus scent, not unlike that of a pembelon. It cannot be extinguished unless it is clipped from the wick (even if immersed in water) and gives light and heat as a normal candle would."
	},
	"ghost light (rmh-01)" : {
		name : "Ghost Light (Lantern of Revealing)",
		source : [["AL:RMH"]],
		rarity : "uncommon",
		magicItemTable : "B",
		description : "This brass lantern is engraved w/ ghostly images & twisted faces. When you add 1 pint of oil to the lantern, 3 drops of humanoid blood are also required as fuel. While you have this item, you're haunted by a poltergeist that rearranges your pack, hides your socks, pelts you w/ small pebbles, & makes life annoying. The lantern burns for 6 hrs on 1 pint of oil. It sheds bright light in a 30-ft radius & dim light for another 30 ft. Invisible objects & creatures are visible in the bright light. If you lower the hood as an action, it sheds dim light in a 5-ft radius.",
		descriptionFull : "This ornate brass lantern is engraved with ghostly images and faces twisted in horror. Each time you add 1 pint of oil to the lantern, three drops of blood from a humanoid creature are also required to fuel it. While you possess the lantern, you are haunted by a minor poltergeist that rearranges your pack, hides your socks, occasionally pelts you with small pebbles, and generally makes life annoying for you.\n   While lit, this hooded lantern burns for 6 hours on 1 pint of oil, shedding bright light in a 30-foot radius and dim light for an additional 30 feet. Invisible creatures and objects are visible as long as they are in the lantern's bright light. You can use an action to lower the hood, reducing the light to dim light in a 5-foot radius.",
		weight : 2,
		action : [["action", "Ghost Light (hood up/down)"]]
	},
	"lantern of revealing (ccc-druids-3)" : {
		name : "Lantern of Revealing (CCC-DRUIDS-3)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "B",
		description : "This lantern belonged to a vampire hunter known to the Brave Adventurer in times past. It burns olive oil, and has a little basket above the flame for roasting garlic. The lantern burns for 6 hrs on 1 pint of oil. It sheds bright light in a 30-ft radius & dim light for another 30 ft. Invisible objects & creatures are visible in the bright light. If you lower the hood as an action, it sheds dim light in a 5-ft radius.",
		descriptionFull : "This lantern belonged to a vampire hunter known to the Brave Adventurer in times past. It burns olive oil, and has a little basket above the flame for roasting garlic.\n   While lit, this hooded lantern burns for 6 hours on 1 pint of oil, shedding bright light in a 30-foot radius and dim light for an additional 30 feet. Invisible creatures and objects are visible as long as they are in the lantern's bright light. You can use an action to lower the hood, reducing the light to dim light in a 5-foot radius.",
		weight : 2,
		action : [["action", "Lantern of Revealing (hood up/down)"]]
	},
	"lantern of revealing (ccc-dwb-eog-1)" : {
		name : "Lantern of Revealing (CCC-DWB-EOG-1)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "B",
		description : "This lantern is made of pitted infernal iron and fashioned into the shape of a roaring dragon. The lantern burns for 6 hrs on 1 pint of oil. It sheds bright light in a 30-ft radius & dim light for another 30 ft. Invisible objects & creatures are visible in the bright light. If you lower the hood as an action, it sheds dim light in a 5-ft radius.",
		descriptionFull : "This lantern is made of pitted infernal iron and fashioned into the shape of a roaring dragon. \n   While lit, this hooded lantern burns for 6 hours on 1 pint of oil, shedding bright light in a 30-foot radius and dim light for an additional 30 feet. Invisible creatures and objects are visible as long as they are in the lantern's bright light. You can use an action to lower the hood, reducing the light to dim light in a 5-foot radius.",
		weight : 2,
		action : [["action", "Lantern of Revealing (hood up/down)"]]
	},
	"lantern of revealing (ccc-dwb-q1)" : {
		name : "Lantern of Revealing (CCC-DWB-Q1)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "B",
		description : "This polished lantern has inset gemstones, gold & platinum inlays, & gold & silver filigree on its surface. When seen from the corner of the eye, the item seems to be moving. The lantern burns for 6 hrs on 1 pint of oil. It sheds bright light in a 30-ft radius & dim light for another 30 ft. Invisible objects & creatures are visible in the bright light. If you lower the hood as an action, it sheds dim light in a 5-ft radius.",
		descriptionFull : "This polished lantern is inset with gemstones, gold and platinum inlays, and gold and silver filigree adorn its surface. When seen from the corner of the eye, the item seems to be moving.\n   While lit, this hooded lantern burns for 6 hours on 1 pint of oil, shedding bright light in a 30-foot radius and dim light for an additional 30 feet. Invisible creatures and objects are visible as long as they are in the lantern's bright light. You can use an action to lower the hood, reducing the light to dim light in a 5-foot radius.",
		weight : 2,
		action : [["action", "Lantern of Revealing (hood up/down)"]]
	},
	"lantern of revealing (ccc-melb-2)" : {
		name : "Lantern of Revealing (CCC-MELB-2)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "B",
		description : "This lantern is of ancient Netherese design, & while lit, ancient runes around its base flicker & glow with arcane energy. The lantern burns for 6 hrs on 1 pint of oil. It sheds bright light in a 30-ft radius & dim light for another 30 ft. Invisible objects & creatures are visible in the bright light. If you lower the hood as an action, it sheds dim light in a 5-ft radius.",
		descriptionFull : "This lantern is of ancient Netherese design, and while lit, ancient runes around its base flicker and glow with arcane energy.\n   While lit, this hooded lantern burns for 6 hours on 1 pint of oil, shedding bright light in a 30-foot radius and dim light for an additional 30 feet. Invisible creatures and objects are visible as long as they are in the lantern's bright light. You can use an action to lower the hood, reducing the light to dim light in a 5-foot radius.",
		weight : 2,
		action : [["action", "Lantern of Revealing (hood up/down)"]]
	},
	"lantern of revealing (ccc-pp-tdd1-1)" : {
		name : "Lantern of Revealing (CCC-PP-TDD1-1)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "B",
		description : "This slightly battered brass lantern is fitted w/ engraved shutters that display an eye motif. The lantern burns for 6 hrs on 1 pint of oil. It sheds bright light in a 30-ft radius & dim light for another 30 ft. Invisible objects & creatures are visible in the bright light. If you lower the hood as an action, it sheds dim light in a 5-ft radius.",
		descriptionFull : "This slightly battered brass caged lantern is fitted with engraved shutters that display an eye motif.\n   While lit, this hooded lantern burns for 6 hours on 1 pint of oil, shedding bright light in a 30-foot radius and dim light for an additional 30 feet. Invisible creatures and objects are visible as long as they are in the lantern's bright light. You can use an action to lower the hood, reducing the light to dim light in a 5-foot radius.",
		weight : 2,
		action : [["action", "Lantern of Revealing (hood up/down)"]]
	},
	"last light of northkeep (ccc-bwm-2)" : {
		name : "Last Light of Northkeep (Candle of the Deep)",
		source : [["AL","CCC"]],
		rarity : "common",
		magicItemTable : "?",
		description : "This crystal lantern has patterns of stars etched into it & its flame isn't extinguished when immersed in water. It gives off light & heat like a normal lantern. With the blessing of Selune, this lantern never runs out of fuel.",
		descriptionFull : "This crystal lantern has patterns of stars etched all over it. The flame of this lantern is not extinguished when immersed in water. It gives off light and heat like a normal lantern. With the blessing of Selune, this lantern never runs out of fuel."
	},
}		
		
MagicItemsList["al minerals"] = {
		name : "AL Minerals",
		type : "wondrous item",
		allowDuplicates : true,
	choices : ["Aier, Pearl of Power (CCC-EPI1-1)","Audience Stones (CCC-BMG-12 HILL1-3)","Corsair's Star (CCC-COTN-1-1)","Crystal Ball (CCC-MIND1-1)","Emerald of the War Mage (DDHC-MORD-01)","Gem of Brightness (CCC-KUMORI-1-1)","Gem of Brightness (CCC-ROLL20-2)","Gem of Seeing (CCC-SHINY-4)","Gem of Seeing (DDAL8-12)","Gem of Seeing (DDAL9-5)","The Heart of Baga (CCC-GSP2-1)","Ioun Stone - Greater Absorption (DDAL0-10)","Ioun Stone - Insight (DDEP3)","Ioun Stone - Mastery (DDAL0-11F)","Ioun Stone - Protection (CCC-HATMS1-3)","Ioun Stone - Protection (DDAL0-11D)","Ioun Stone - Reserve (CCC-BMG-48 HILL3-3)","Ioun Stone - Reserve (CCC-YLRA1-1)","Pearl of Power (CCC-DDSC-1)","Pearl of Power (CCC-THENT1-1)","Pearl of Power (DDAL7-5)","Red Elemental Gem (CCC-BMG-MOON7-2)","Ruby of the War Mage (DDAL10-9)","Selfaril's Soul Gem (CCC-GAD1-1)","Sending Stones (CCC-CIC-4)","Sending Stones (DDAL0-8)","Sending Stones (DDAL10-2)","Stone of Controlling Earth Elementals (CCC-BLD1-3)","Stone of Good Luck (CCC-DWB-TFG-1)","Stone of Good Luck (CCC-HATMS2-3)","Stone of Good Luck (CCC-SCAR1-2)","Stone of Good Luck (DDAL0-2B)","Stone of Good Luck (DDAL0-11B)","Stone of Good Luck (DDEP4)","Stone of Good Luck (DDHC-MORD-04)","Traveler's Heart (CCC-SFBAY-4-2)"],
	"aier, pearl of power (ccc-epi1-1)" : { // contains contributions by AelarTheElfRogue
		name : "Aier, Pearl of Power (CCC-EPI1-1)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "The Finger of Yurtus was powered by an elven artifact known as Aier. This tiny chunk of the mythal has been drained of most of its power. Once per dawn as an action, you can speak its command word & regain 1 expended spell slot. If the slot was 4th lvl or higher, the new slot is 3rd lvl. The Aier can also be used to clear blackheads & pimples not created by magical means. ",
		descriptionFull : "The Finger of Yurtus was powered by an elven artifact known as Aier. This originated as a tiny chunk of mythal which has been drained of most of its power. In addition to serving as a Pearl of Power, it can also be used to clear blackheads and pimples not created by magical means.\n   While this pearl is on your person, you can use an action to speak its command word and regain one expended spell slot. If the expended slot was of 4th level or higher, the new slot is 3rd level. Once you have used the pearl, it can't be used again until the next dawn.",
		attunement : true,
		limfeaname : "Pearl of Power",
		usages : 1,
		recovery : "dawn",
		action : [["action", ""]]
	},
	"audience stones (ccc-bmg-12 hill1-3)" : {
		name : "Audience Stones (Sending Stones)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "C",
		description : "These smooth stones made of marble have the crest of Hillsfar carved into them. While touching one stone, you can cast Sending as an action once per dawn, targeting the bearer of the other stone or the First Lord of Hillsfar. If no one else has the stone, the spell doesn't cast. Sending allows each bearer to communicate up to 25 words.",
		descriptionFull : "These smooth stones made of marble have the crest of Hillsfar carved into them. In addition to normal use, these stones also have the ability to directly contact the First Lord of Hillsfar. You have been assured that he always keeps the stone close at hand. Contacting the First Lord expends the single use the stones gain every dawn.\n   While you touch one stone, you can use an action to cast the Sending spell from it. The target is the bearer of on of the other stones. If no creature bears the other stone, you know that fact as soon as you use the stone and don't cast the spell.\n   Once Sending is cast through the stones, they can't be used again until the next dawn. If one of the stones in a set is destroyed, the other ones become nonmagical.",
		spellcastingBonus : {
			name : "To other stone bearer only",
			spells : ["sending"],
			selection : ["sending"],
			firstCol : "oncelr"
				},
		usages : 1, 
		recovery : "dawn",
		spellChanges : {
			"sending" : {
				description : "Send a 25 word message to the bearer of the other Sending Stone, who can respond with 25 words",
				changes : "Using one stone of a pair of Sending Stones, the spell can only target the bearer of the other stone of the pair."
				}
			}
		},
	"corsair's star (ccc-cotn-1-1)" : {
		name : "Corsair's Star (Orb of Direction)",
		source : [["AL","CCC"]],
		rarity : "common",
		description : "This palm-sized, masterwork compass was the property of a Thayan captain. Housed in its polished silver case is an expertly-crafted compass rose, bone-finger points standing out from carved storm clouds & lightning bolts. A small opal w/ part of the Thayan’s soul sits at its center. While in use, you hear the sound of waves & a ship’s hull. A haunting voice calls, “Bring it back, bring it back to me...” As an action while holding this orb on the Material Plane, you can determine which way is north.",
		descriptionFull : "This palm-sized, masterwork compass was once the property of a Thayan ship captain. Housed within its polished silver case is an expertly-crafted compass rose, whose bone-finger points stand out from behind intricately-carved storm clouds and lightning bolts. A diminutive opal orb suffused with a part of the Thayan’s soul sets at its center. While in use, the wielder hears the sound of waves crashing along with a ship’s hull creaking. A haunting voice calls, “Bring it back …bring it back to me...” When holding this orb, you can use an action to determine which way is north. This property functions only on the Material Plane.",
		weight : 3,
		action : [["action", "Corsair's Star (North)"]]
		},
	"crystal ball (ccc-mind1-1)" : {
		name : "Crystal Ball (CCC-MIND1-1)",
		source : [["AL","CCC"]],
		rarity : "very rare",
		magicItemTable : "H",
		description : "You can cast Scrying (DC 17) at will while touching this 6 inch crystal ball. If you peer into it as an action, you can see events that have occurred in your past.",
		descriptionFull : "This crystal ball is about 6 inches in diameter. While touching it, you can cast the Scrying spell (save DC 17) with it. When a character that is attuned to this Crystal Ball spends an action peering into it, they can see events that have occurred in their past.",
		attunement : true,
		weight : 3,
		action : [["action", "Crystal Ball (Look into past)"]],
		allowDuplicates : true,
		fixedDC : 17,
		spellcastingBonus : {
			name : "DC 17",
			spells : ["scrying"],
			selection : ["scrying"],
			firstCol : "atwill"
		}
	},
	"emerald of the war mage (ddhc-mord-01)" : {
		name : "Emerald of the War Mage (DDHC-MORD-01)",
		source : [["AL","MtoF"]],
		rarity : "common",
		magicItemTable : "?",
		description : "This 1-inch emerald is etched with eldritch runes. The green color seems to pulse gently. By pressing this emerald to a simple or martial weapon for 10 minutes, it attaches itself to the weapon. You can then use that weapon as a spellcasting focus. Once attached, it can't be removed unless your attunement ends, you detach it as an action, or the weapon is destroyed.",
		descriptionFull : "Etched with eldritch runes, the 1-inch-diameter emerald allows you to use a simple or martial weapon as a spellcasting focus for your spells. For this property to work, you must attach the emerald to the weapon by pressing the emerald against it for at least 10 minutes. Thereafter, the emerald can't be removed unless you detach it as an action or the weapon is destroyed. Not even an Antimagic Field causes it to fall off. The emerald does fall off the weapon if your attunement to the emerald ends.",
		attunement : true,
		prerequisite : "Requires attunement by a spellcaster",
		prereqeval : function(v) { return v.isSpellcaster; }
	},
	"gem of brightness (ccc-kumori-1-1)" : { // contains contributions by Larry Hoy
		name : "Gem of Brightness (CCC-KUMORI-1-1)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "Glowing w/ an inner light, this gem flickers in a random pattern that slows as each charge is used. It has 50 charges. As an action while holding it, say a command word so it: sheds 30-ft bright & 30-ft dim light, fires a 60-ft beam at 1 creature (1 charge, DC 15 Con save or blinded 1 min), or flares w/ light in a 30-ft cone (5 charges, DC 15 Con save or blinded 1 min).",
		descriptionLong : "Glowing w/ an inner light, this gem flickers in a random pattern that slows as each charge is used. It has 50 charges. As an action while holding it, speak 1 of 3 command words to make it: [1] shed bright light in a 30-ft radius & dim light in another 30 ft until another word is used or you end it w/ a bonus action, [2] fire a 60-ft beam of light at 1 creature (1 charge, DC 15 Con save or blinded 1 minute), or [3] flare with blinding light in a 30-ft cone (5 charges, DC 15 Con save or blinded 1 minute). Blinded creatures can repeat the save at the end of each their turns. When all of the gem's charges are expended, it becomes a nonmagical jewel worth 50 gp.",
		descriptionFull : "Glowing w/ an inner light, this gem flickers in a random pattern that slows as each charge is used. It has 50 charges. While you are holding it, you can use an action to speak one of three command words to cause one of the following effects:\n \u2022 The first command word causes the gem to shed bright light in a 30-foot radius and dim light for an additional 30 feet. This effect doesn't expend a charge. It lasts until you use a bonus action to repeat the command word or until you use another function of the gem.\n \u2022 The second command word expends 1 charge and causes the gem to fire a brilliant beam of light at one creature you can see within 60 feet of you. The creature must succeed on a DC 15 Constitution saving throw or become blinded for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.\n \u2022 The third command word expends 5 charges and causes the gem to flare with blinding light in a 30-foot cone originating from it. Each creature in the cone must make a saving throw as if struck by the beam created with the second command word.\n\nWhen all of the gem's charges are expended, the gem becomes a nonmagical jewel worth 50 gp.",
		weight : 1,
		limfeaname : "Gem of Brightness",
		usages : 50,
		recovery : "Never",
		action : [["action", "Gem of Brightness"], ["bonus action", " (Stop Glow)"]]
	},
	"gem of brightness (ccc-roll20-2)" : { // contains contributions by Larry Hoy
		name : "Gem of Brightness (CCC-ROLL20-2)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "This 20-sided gem is made from remains of multiple elementals & resembles an artifact of lore. Deities from another dimension are said to use such gems to control the actions & decisions of mortals. The gem has 50 charges. As an action while holding it, say a command word so it: sheds 30-ft bright & 30-ft dim light, fires a 60-ft beam at 1 creature (1 charge, DC 15 Con save or blinded 1 min), or flares w/ light in a 30-ft cone (5 charges, DC 15 Con save or blinded 1 min).",
		descriptionLong : "This 20-sided gem is made from the remains of earth, fire, water, & air elementals & resembles an artifact of lore. Deities from another dimension are said to use such gems to control the actions & decisions of mortals but many Faerûnian scholars believe there's no truth to such myths. The gem has 50 charges. As an action while holding it, speak 1 of 3 command words to make it: [1] shed bright light in a 30-ft radius & dim light in another 30 ft until another word is used or you end it w/ a bonus action, [2] fire a 60-ft beam of light at 1 creature (1 charge, DC 15 Con save or blinded 1 minute), or [3] flare with blinding light in a 30-ft cone (5 charges, DC 15 Con save or blinded 1 minute). Blinded creatures can repeat the save at the end of each their turns. When all of the gem's charges are expended, it becomes a nonmagical jewel worth 50 gp.",
		descriptionFull : "This magnificent 20-sided gem is made from the remains of earth, fire, water, and air elementals and resembles an artifact of lore. It is said, deities from another dimension used gems crafted in such a fashion to control the actions and decisions of mortals. Many Faerûnian scholars believe there is no truth to such myths.\n	The gem has 50 charges. While you are holding it, you can use an action to speak one of three command words to cause one of the following effects:\n \u2022 The first command word causes the gem to shed bright light in a 30-foot radius and dim light for an additional 30 feet. This effect doesn't expend a charge. It lasts until you use a bonus action to repeat the command word or until you use another function of the gem.\n \u2022 The second command word expends 1 charge and causes the gem to fire a brilliant beam of light at one creature you can see within 60 feet of you. The creature must succeed on a DC 15 Constitution saving throw or become blinded for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.\n \u2022 The third command word expends 5 charges and causes the gem to flare with blinding light in a 30-foot cone originating from it. Each creature in the cone must make a saving throw as if struck by the beam created with the second command word.\n\nWhen all of the gem's charges are expended, the gem becomes a nonmagical jewel worth 50 gp.",
		weight : 1,
		limfeaname : "Gem of Brightness",
		usages : 50,
		recovery : "Never",
		action : [["action", "Gem of Brightness"], ["bonus action", " (Stop Glow)"]]
	},
	"gem of seeing (ccc-shiny-4)" : { // contains contributions by Larry Hoy
		name : "Gem of Seeing (CCC-SHINY-4)",
		source : [["AL","CCC"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "A color-drained ruby rests in a ring of polished stone affixed to the top of a similar handle. When activated, a message appears on the handle in blue, runic letters that only you can see; if you know a language, you can read the runes: “May you never lose sight of the truth.” The gem has 3 charges. As an action, speak its command word & expend 1 charge to gain 120 ft of truesight for 10 min. while you peer through the gem. The gem regains 1d3 charges at dawn.",
		descriptionFull : "A color-drained ruby rests in a ring of polished stone affixed to the top of a similarly crafted handle. Whenever this item is activated, a message appears along the handle in blue, runic letters that only the attuned character can see; as long as the character knows a language, it can understand what the runes say: “May you never lose sight of the truth.”\n   The gem has 3 charges. As an action, you can speak its command word and expend 1 charge. For the next 10 minutes, you have truesight out to 120 ft when you peer through the gem. The gem regains 1d3 expended charges daily at dawn.",
		attunement : true,
		weight : 1,
		limfeaname : "Gem of Seeing",
		usages : 3,
		recovery : "dawn",
		additional : "1d3 Recharge"
	},
	"gem of seeing (ddal8-12)" : { // contains contributions by Larry Hoy
		name : "Gem of Seeing (DDAL8-12)",
		source : [["AL","S8"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "This orange gem has been carved into the shape of a goldfish. The bottom is inscribed w/ the word “Sylgar.” The Xanathar won’t be happy that you have this. The gem has 3 charges. As an action, you can speak its command word & expend 1 charge to gain 120 ft of truesight for 10 min. while you peer through the gem. The gem regains 1d3 charges at dawn.",
		descriptionFull : "This orange gem has been carved into the shape of a goldfish. The bottom is inscribed with the word “Sylgar.” The Xanathar won’t be happy that you have this.\n   The gem has 3 charges. As an action, you can speak its command word and expend 1 charge. For the next 10 minutes, you have truesight out to 120 ft when you peer through the gem. The gem regains 1d3 expended charges daily at dawn.",
		attunement : true,
		weight : 1,
		limfeaname : "Gem of Seeing",
		usages : 3,
		recovery : "dawn",
		additional : "1d3 Recharge"
	},
	"gem of seeing (ddal9-5)" : { // contains contributions by Larry Hoy
		name : "Gem of Seeing (DDAL9-5)",
		source : [["AL","S9"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "While looking through this unusual cut-gemstone monocle, the wearer can perceive the relative value of an item to its owner (monetary, sentimental, etc). The gem has 3 charges. As an action, you can speak its command word & expend 1 charge to gain 120 ft of truesight for 10 min. while you peer through the gem. The gem regains 1d3 charges at dawn.",
		descriptionFull : "While looking through this unusual cut-gemstone monocle, the wearer can perceive the relative value of an item to its owner (monetary, sentimental, etc). The gem has 3 charges. As an action, you can speak its command word and expend 1 charge. For the next 10 minutes, you have truesight out to 120 ft when you peer through the gem. The gem regains 1d3 expended charges at dawn.",
		attunement : true,
		weight : 1,
		limfeaname : "Gem of Seeing",
		usages : 3,
		recovery : "dawn",
		additional : "1d3 Recharge"
	},
	"the heart of baga (ccc-gsp2-1)" : {
		name : "The Heart of Baga (Elemental Gem [Red Corundum])",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "B",
		allowDuplicates : true,
		description : "A tiny shard of Baga's soul is in this elemental gem, which contains a mote of fire energy. Once as an action, you can break the gem to summon a fire elemental as if you'd cast the Conjure Elemental spell. The elemental is shaped like a minotaur with a black five-leaf clover on its right hand. After breaking the gem, its magic is lost.",
		descriptionFull : "A tiny shard of Baga's soul is still inside this elemental gem. When you decide to use it, the fire elemental is shaped like a minotaur with a black five-leaf clover on the back of its right hand.\n   This gem contains a mote of elemental energy. When you use an action to break the gem, a fire elemental is summoned as if you had cast the Conjure Elemental spell, and the gem's magic is lost.",
		spellcastingBonus : {
			name : "Fire Elemental only",
			spells : ["conjure elemental"],
			selection : ["conjure elemental"]
		},
		spellChanges : {
			"conjure elemental" : {
				time : "1 a",
				description : "CR 5 fire elemental that obeys my verbal commands; on broken conc. elemental breaks free",
				changes : "Using the Red Corundum Elemental Gem, the spell only takes 1 action instead of 1 minute to cast, but can only bring forth a fire elemental."
			}
		}
	},
	"ioun stone - greater absorption (ddal0-10)" : {
		name: "Ioun Stone - Greater Absorption (DDAL0-10)",
		source : [["AL","S0"]],
		rarity : "legendary",
		magicItemTable : "I",
		attunement : true,
		description : "This lavender & green stone has been shaped into a strange dragon w/ a long, sinewy neck, a serpentine body, 4 stout legs, & 2 long whiskers that look like a mustache. This is a dragon of far-off Shou Lung in Kara-Tur. Action to make orbit at 1d3ft or stow. Action to catch w/ atk or Acrobatics chk (AC/DC 24). 10 HP & resistance to dmg. While it orbits, reaction to cancel spell of 8th lvl or lower targeting only you, if you can see caster & have enough charges. It can cancel 50 lvls of spells.",
		descriptionFull : "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity (Acrobatics) check. You can use an action to seize and stow the stone, ending its effect.\n   A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head.\n   This lavender and green stone has been fashioned into the shape of a strange dragon; it has a long, sinewy neck, a body like a serpent, four stout legs, and two long whiskers that almost look like a mustache. This is what the dragons of far-off Shou Lung in Kara-Tur look like. While this marbled lavender and green ellipsoid orbits your head, you can use your reaction to cancel a spell of 8th level or lower cast by a creature you can see and targeting only you. Once the stone has canceled 50 levels of spells, it burns out and turns dull gray, losing its magic. If you are targeted by a spell whose level is higher than the number of spell levels the stone has left, the stone can't cancel it.",
		limfeaname : "Ioun Stone of Greater Absorption",
		usages : 50,
		recovery : "Never",
		action : [["action", "Ioun Stone (orbit/retrieve)"], ["reaction", ""]]
		},
	"ioun stone - insight (ddep3)" : {
		name: "Ioun Stone - Insight (DDEP3)",
		source : [["AL","S3"]],
		rarity : "very rare",
		magicItemTable : "H",
		attunement : true,
		description : "This incandescent blue sphere glows w/ an unearthly white light as it orbits your head, casting odd shadows all around you. To those nearby, the shadows seem to take on nefarious shapes or do undesirable things. Action to make orbit at 1d3ft or stow. Others can catch as action w/ atk or Acrobatics chk (AC/DC 24). It has 10 HP & resistance to dmg. While it orbits, your Wisdom score increases by 2, to max of 20.",
		descriptionFull : "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity (Acrobatics) check. You can use an action to seize and stow the stone, ending its effect.\n   A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head.\n   This incandescent blue sphere glows with an unearthly white light as it orbits your head, casting odd shadows all around you. To those nearby, these shadows sometimes seem to take on nefarious shapes or perform undesirable things. Your Wisdom score increases by 2, to a maximum of 20, while the sphere orbits your head.",
		action : [["action", "Ioun Stone (orbit/retrieve)"]],
		scores : [0, 0, 0, 0, 2, 0]
		},
	"ioun stone - mastery (ddal0-11f)" : {
		name: "Ioun Stone - Mastery (DDAL0-11F)",
		source : [["AL","S0"]],
		rarity : "legendary",
		magicItemTable : "I",
		attunement : true,
		description : "Pipyap has left behind a pale green icosahedron that appears to be a 20-sided die. This stone is eternally warm & slightly damp, no matter what environment it’s in. Action to orbit your head at 1d3ft or stow. Others can catch stone as action w/ atk or Acrobatics chk (AC/DC 24). It has 10 HP & resistance to dmg. While it orbits your head, your proficiency bonus increases by 1.",
		descriptionFull : "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity (Acrobatics) check. You can use an action to seize and stow the stone, ending its effect.\n   A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head.\n   Pipyap has left behind a pale green icosahedron that appears to be a 20-sided die. This stone is eternally warm and slightly damp, no matter what environment it’s in. Your proficiency bonus increases by 1 while this pale green stone orbits your head.",
		action : [["action", "Ioun Stone (orbit/retrieve)"]],
		addMod : [{ type: "", field : "Proficiency Bonus Modifier", mod : 1, text : "My proficiency bonus increases by 1." }]
		},
	"ioun stone - protection (ccc-hatms1-3)" : {
		name: "Ioun Stone - Protection (CCC-HATMS1-3)",
		source : [["AL","CCC"]],
		rarity : "rare",
		magicItemTable : "G",
		attunement : true,
		description : "This stone is the color of the ocean at midnight, a blue so deep it appears black, and is carved in the shape of a lidless eye. Action to orbit your head at 1d3ft or stow. Others can catch stone as action w/ atk or Acrobatics chk (AC/DC 24). It has 10 HP & resistance to dmg. While it orbits your head, your AC increases by 1.",
		descriptionFull : "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity (Acrobatics) check. You can use an action to seize and stow the stone, ending its effect.\n   A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head.\n   This stone is the color of the ocean at midnight, a blue so deep it appears black, and is carved in the shape of a lidless eye. Your AC increases by 1 while the sphere orbits your head.",
		action : [["action", "Ioun Stone (orbit/retrieve)"]],
		extraAC : [{name : "Ioun Stone of Protection", mod : 1, magic : true, text : "I gain a +1 bonus to AC while attuned."}]
		},
	"ioun stone - protection (ddal0-11d)" : {
		name: "Ioun Stone - Protection (DDAL0-11D)",
		source : [["AL","S0"]],
		rarity : "rare",
		magicItemTable : "G",
		attunement : true,
		description : "Made from a chunk of Malbolgian rock, you can command this ioun stone to ignite w/ hell fire as an action. The fire is as bright as a torch & ignites flammable objects. While ignited, the stone radiates evil. Action to orbit your head at 1d3ft or stow. Others can catch stone as action w/ atk or Acrobatics chk (AC/DC 24). It has 10 HP & resistance to dmg. While it orbits your head, your AC increases by 1.",
		descriptionFull : "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity (Acrobatics) check. You can use an action to seize and stow the stone, ending its effect.\n   A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head.\n   Made from a chunk of Malbolgian rock, the owner can command this ioun stone to ignite with hell fire as an action. The fire is as bright as a torch & ignites flammable objects. While ignited, the stone radiates evil. Your AC increases by 1 while the sphere orbits your head.",
		action : [["action", "Ioun Stone (orbit/retrieve)"]	["action", "Ioun Stone (Ignite)"]],
		extraAC : [{name : "Ioun Stone of Protection", mod : 1, magic : true, text : "I gain a +1 bonus to AC while attuned."}]
		},
	"ioun stone - reserve (ccc-bmg-48 hill3-3)" : {
		name: "Ioun Stone - Reserve (CCC-BMG-48 HILL3-3)",
		source : [["AL","CCC"]],
		rarity : "rare",
		magicItemTable : "G",
		attunement : true,
		description : "This deep violet, almost indigo, translucent prism has a noticeable chunk broken off 1 corner. While orbiting your head, the stone emits a low buzzing, like an insect, which only you can hear. Action to orbit your head at 1d3ft or stow. Others can catch stone as action w/ atk or Acrobatics chk (AC/DC 24). It has 10 HP & resistance to dmg. The stone can hold 3 lvls of spells, which can be cast from the stone to free up space. It contains lightning bolt when found.",
		descriptionFull : "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity (Acrobatics) check. You can use an action to seize and stow the stone, ending its effect.\n   A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head.\n   This deep violet, almost indigo, translucent prism has a noticeable chunk broken off of one corner. When found, it contains the spell lightning bolt. While orbiting the owner’s head, the stone emits a low buzzing, like an insect, which is only perceptible to the owner.\n   The stone can store up to 3 levels worth of spells at a time. Any creature can cast a spell of 1st through 3rd level into the stone by touching it as the spell is cast. The spell has no effect, other than to be stored in the stone. If the stone can't hold the spell, the spell is expended without effect. The level of the slot used to cast the spell determines how much space it uses.\n   While this stone orbits your head, you can cast any spell stored in it. The spell uses the slot level, spell save DC, spell attack bonus, and spellcasting ability of the original caster, but is otherwise treated as if you cast the spell. The spell cast from the stone is no longer stored in it, freeing up space.",
		},
	"ioun stone - reserve (ccc-ylra1-1)" : {
		name: "Ioun Stone - Reserve (CCC-YLRA1-1)",
		source : [["AL","CCC"]],
		rarity : "rare",
		magicItemTable : "G",
		attunement : true,
		description : "This purple gem, the Peacemaker’s Coin, has a face carved on each side: an elf woman w/ ruby-tinted hair & a dwarf bearing the symbol of Clangeddin Silverbeard. In darkness, ghostly shapes trail from it. When a spell is cast into it, the caster hears a male & female voice arguing. When a spell is unleashed, the voices chant in unison. While attuned, you get +1 to CHA (Persuasion) chks to resolve conflict/calm emotions. Action to orbit your head at 1d3ft or stow. Gem caught as action w/ atk or Acrobatics chk (AC/DC 24). It has 10 HP & resistance to dmg. The gem holds 3 lvls of spells, which can be cast from it to free up space.",
		descriptionFull : "An Ioun stone is named after Ioun, a god of knowledge and prophecy revered on some worlds. Many types of Ioun stone exist, each type a distinct combination of shape and color.\n   When you use an action to toss one of these stones into the air, the stone orbits your head at a distance of 1d3 feet and confers a benefit to you. Thereafter, another creature must use an action to grasp or net the stone to separate it from you, either by making a successful attack roll against AC 24 or a successful DC 24 Dexterity (Acrobatics) check. You can use an action to seize and stow the stone, ending its effect.\n   A stone has AC 24, 10 hit points, and resistance to all damage. It is considered to be an object that is being worn while it orbits your head.\n   Rather than appearing as a prism like a normal ioun stone of its type, however, this purple gem is cut like a coin, with a face on each side. One is an elf woman whose long hair has a ruby tint, and the other is an older dwarf in a helm bearing the symbol of the dwarf god Clangeddin Silverbeard. In darkness, one can see ghostly shapes trailing after the coin-like jewel as it moves. When a spell is cast into the stone, the caster hears a male and female voice arguing. When a spell is unleashed from it, the same voices are heard chanting in unison by the user. Anyone attuned to this item receives to +1 bonus on Charisma (Persuasion) checks to resolve conflict or calm emotions. Research indicates this item was known as the Peacemaker’s Coin in the old dwarf kingdom of Roldilar, where it belonged to the human mage and dwarf ally Beldossan the Short.\n   The stone can store up to 3 levels worth of spells at a time. Any creature can cast a spell of 1st through 3rd level into the stone by touching it as the spell is cast. The spell has no effect, other than to be stored in the stone. If the stone can't hold the spell, the spell is expended without effect. The level of the slot used to cast the spell determines how much space it uses.\n   While this stone orbits your head, you can cast any spell stored in it. The spell uses the slot level, spell save DC, spell attack bonus, and spellcasting ability of the original caster, but is otherwise treated as if you cast the spell. The spell cast from the stone is no longer stored in it, freeing up space.",
		},
	"pearl of power (ccc-ddsc-1)" : { // contains contributions by AelarTheElfRogue
		name : "Pearl of Power (CCC-DDSC-1)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "This black pearl, carved to resemble a skull. It is mounted on a band of silver and fashioned as a serpent devouring the skull. Once per dawn as an action, you can speak its command word & regain 1 expended spell slot. If the slot was 4th lvl or higher, the new slot is 3rd lvl.",
		descriptionFull : "This black pearl, carved to resemble a skull. It is mounted on a ring band of silver and fashioned as a serpent devouring the skull. While this pearl is on your person, you can use an action to speak its command word and regain one expended spell slot. If the expended slot was of 4th level or higher, the new slot is 3rd level. Once you have used the pearl, it can't be used again until the next dawn.",
		attunement : true,
		limfeaname : "Pearl of Power",
		usages : 1,
		recovery : "dawn",
		action : [["action", ""]]
	},
	"pearl of power (ccc-thent1-1)" : { // contains contributions by AelarTheElfRogue
		name : "Pearl of Power (CCC-THENT1-1)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "The pearl’s brilliant nacreous quality fades to almost black after being used, only to waken at the following dawn. Once per dawn as an action, you can speak its command word & regain 1 expended spell slot. If the slot was 4th lvl or higher, the new slot is 3rd lvl.",
		descriptionFull : "The pearl’s brilliant nacreous quality fades to almost black after being used, only to waken at the following dawn. While this pearl is on your person, you can use an action to speak its command word and regain one expended spell slot. If the expended slot was of 4th level or higher, the new slot is 3rd level. Once you have used the pearl, it can't be used again until the next dawn.",
		attunement : true,
		limfeaname : "Pearl of Power",
		usages : 1,
		recovery : "dawn",
		action : [["action", ""]]
	},
	"pearl of power (ddal7-5)" : { // contains contributions by AelarTheElfRogue
		name : "Pearl of Power (DDAL7-5)",
		source : [["AL","S7"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "This bright yellow pearl is set in a ring of black iron & glows w/ a warm, yellow light. The ring is shaped like a serpent, twisting around your finger w/ the pearl clutched in its mouth. While attuned, your dreams are consumed by yellow, serpentine eyes staring from darkness. Once/dawn as an action, you can speak its command word & regain 1 expended spell slot. If the slot was of >= 4th lvl, the new slot is 3rd lvl.",
		descriptionFull : "This bright yellow pearl is set in a ring of black iron and glows with a warm, yellow light. The ring has been fashioned into the shape of a serpent that twists around its wearer’s finger with the pearl clutched in its mouth. While attuned to the pearl, the wearer’s dreams are consumed by a pair of yellow, serpentine eyes staring from fathomless darkness. While this pearl is on your person, you can use an action to speak its command word and regain one expended spell slot. If the expended slot was of 4th level or higher, the new slot is 3rd level. Once you have used the pearl, it can't be used again until the next dawn.",
		attunement : true,
		limfeaname : "Pearl of Power",
		usages : 1,
		recovery : "dawn",
		action : [["action", ""]]
	},
	"red elemental gem (ccc-bmg-moon7-2)" : {
		name : "Red Elemental Gem (CCC-BMG-MOON7-2)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "B",
		allowDuplicates : true,
		description : "This is an artifact of the lost temples of the Earthmother. It's inscribed with motifs of the sun rising and setting. Once as an action, you can break the gem to summon a fire elemental as if you'd cast the Conjure Elemental spell. After breaking the gem, its magic is lost.",
		descriptionFull : "This is one of the artifacts of the lost temples of the Earthmother. It is inscribed with motifs of the sun rising and setting.\n   This gem contains a mote of elemental energy. When you use an action to break the gem, a fire elemental is summoned as if you had cast the Conjure Elemental spell, and the gem's magic is lost.",
		spellcastingBonus : {
			name : "Fire Elemental only",
			spells : ["conjure elemental"],
			selection : ["conjure elemental"]
		},
		spellChanges : {
			"conjure elemental" : {
				time : "1 a",
				description : "CR 5 fire elemental that obeys my verbal commands; on broken conc. elemental breaks free",
				changes : "Using the Red Corundum Elemental Gem, the spell only takes 1 action instead of 1 minute to cast, but can only bring forth a fire elemental."
			}
		}
	},
	"ruby of the war mage (ddal10-9)" : {
		name : "Ruby of the War Mage (DDAL10-9)",
		source : [["AL","S10"]],
		rarity : "common",
		magicItemTable : "?",
		description : "This ruby is a crudely fashioned chunk of blood-red crystal & etched with eldritch runes. The red color seems to pulse gently. By pressing this ruby to a simple or martial weapon for 10 minutes, it attaches itself to the weapon. You can then use that weapon as a spellcasting focus. Once attached, it can't be removed unless your attunement ends, you detach it as an action, or the weapon is destroyed.",
		descriptionFull : "This ruby is a crudely fashioned chunk of blood-red crystal. The red color seems to pulse gently. Etched with eldritch runes, the 1-inch-diameter ruby allows you to use a simple or martial weapon as a spellcasting focus for your spells. For this property to work, you must attach the ruby to the weapon by pressing the ruby against it for at least 10 minutes. Thereafter, the ruby can't be removed unless you detach it as an action or the weapon is destroyed. Not even an Antimagic Field causes it to fall off. The ruby does fall off the weapon if your attunement to the ruby ends.",
		attunement : true,
		prerequisite : "Requires attunement by a spellcaster",
		prereqeval : function(v) { return v.isSpellcaster; }
	},
	"selfaril's soul gem (ccc-gad1-1)" : {
		name : "Selfaril's Soul Gem (Ruby of the War Mage)",
		source : [["AL","CCC"]],
		rarity : "common",
		magicItemTable : "?",
		description : "This jagged piece of ruby is etched w/ eldritch runes & was once part of the gem housing Selfaril Uoumdolphin’s soul. It still holds a piece of his vitality. By pressing this ruby to a simple or martial weapon for 10 minutes, it attaches itself to the weapon. You can then use that weapon as a spellcasting focus. Once attached, it can't be removed unless your attunement ends, you detach it as an action, or the weapon is destroyed.",
		descriptionFull : "This jagged piece of ruby was once part of the gem that housed Selfaril Uoumdolphin’s soul. Even now it seems to hold a small piece of his vitality. Etched with eldritch runes, the 1-inch-diameter ruby allows you to use a simple or martial weapon as a spellcasting focus for your spells. For this property to work, you must attach the ruby to the weapon by pressing the ruby against it for at least 10 minutes. Thereafter, the ruby can't be removed unless you detach it as an action or the weapon is destroyed. Not even an Antimagic Field causes it to fall off. The ruby does fall off the weapon if your attunement to the ruby ends.",
		attunement : true,
		prerequisite : "Requires attunement by a spellcaster",
		prereqeval : function(v) { return v.isSpellcaster; }
	},
	"sending stones (ccc-cic-4)" : {
		name : "Sending Stones (CCC-CIC-4)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "C",
		description : "These stones are inside male & female stuffed sphinxes. To activate, you must hug the toy & say “I love you Mr./Mrs. Wubsy.” You can command the sphinx's eyes to glow w/ a soft blue light equal to a candle. The stones can't be removed from the toys. While touching 1 stone, you can cast Sending as an action once/dawn, targeting whoever has the other stone. If no one has it, the spell won't cast. Sending allows each bearer to communicate up to 25 words.",
		descriptionFull : "These stones are inside male and female sphinx stuffed children's toys. To activate one, the owner must hug the animal and say “I love you Mr./Mrs. Wubsy.” The sphinx's eyes can be commanded to glow with a soft blue light equal to a candle. The stones cannot be removed from the toys without destroying the magic.\n   While you touch one stone, you can use an action to cast the Sending spell from it. The target is the bearer of on of the other stones. If no creature bears the other stone, you know that fact as soon as you use the stone and don't cast the spell.\n   Once Sending is cast through the stones, they can't be used again until the next dawn. If one of the stones in a set is destroyed, the other ones become nonmagical.",
		spellcastingBonus : {
			name : "To other stone bearer only",
			spells : ["sending"],
			selection : ["sending"],
			firstCol : "oncelr"
				},
		usages : 1, 
		recovery : "dawn",
		spellChanges : {
			"sending" : {
				description : "Send a 25 word message to the bearer of the other Sending Stone, who can respond with 25 words",
				changes : "Using one stone of a pair of Sending Stones, the spell can only target the bearer of the other stone of the pair."
				}
			}
		},
	"sending stones (ddal0-8)" : {
		name : "Sending Stones (DDAL0-8)",
		source : [["AL","S0"]],
		rarity : "uncommon",
		magicItemTable : "C",
		description : "There are 3 stones in this set, crafted from a small, polished river rocks inscribed w/ a strange sigil. When the stones are used, there's a 10% chance the message is overheard by Witchthorn who twists or distorts the message — trying to put any listeners in peril. While touching one stone, you can cast Sending as an action once/dawn, targeting the bearer of another stone. If no creature has one, the spell won't cast. Sending allows each bearer to communicate up to 25 words.",
		descriptionFull : "Instead of only two stones, there are three stones in this set. Each is crafted from a small, polished river stone, inscribed with a strange sigil. Their use is not without risk, however. Each time the stones are used, there is a 1-in-10 chance that the message is overheard by Witchthorn who, in turn twists or otherwise distorts the message — preferably in a way to put any listeners in peril.\n   While you touch one stone, you can use an action to cast the Sending spell from it. The target is the bearer of on of the other stones. If no creature bears the other stone, you know that fact as soon as you use the stone and don't cast the spell.\n   Once Sending is cast through the stones, they can't be used again until the next dawn. If one of the stones in a set is destroyed, the other ones become nonmagical.",
		spellcastingBonus : {
			name : "To other stone bearer only",
			spells : ["sending"],
			selection : ["sending"],
			firstCol : "oncelr"
				},
		usages : 1, 
		recovery : "dawn",
		spellChanges : {
			"sending" : {
				description : "Send a 25 word message to the bearer of the other Sending Stone, who can respond with 25 words",
				changes : "Using one stone of a pair of Sending Stones, the spell can only target the bearer of the other stone of the pair."
				}
			}
		},
	"sending stones (ddal10-2)" : {
		name : "Sending Stones (DDAL10-2)",
		source : [["AL","S10"]],
		rarity : "uncommon",
		magicItemTable : "C",
		description : "These stones were plucked from a raging river. Worn smooth by eons of fast-moving water, each is struck through with streaks of silvery metal and chunks of blue crystal, and engraved with a sigil of unknown origin. While touching one stone, you can cast Sending as an action once/dawn, targeting the bearer of the other stone. If no one has it, the spell won't cast. Sending allows each bearer to communicate up to 25 words.",
		descriptionFull : "These stones were plucked from a raging river. Worn smooth by eons of fast-moving water, each is struck through with streaks of silvery metal and chunks of blue crystal, and engraved with a sigil of unknown origin.\n   Sending stones come in pairs, with each smooth stone carved to match the other so the pairing is easily recognized. While you touch one stone, you can use an action to cast the Sending spell from it. The target is the bearer of the other stone. If no creature bears the other stone, you know that fact as soon as you use the stone and don't cast the spell.\n   Once Sending is cast through the stones, they can't be used again until the next dawn. If one of the stones in a pair is destroyed, the other one becomes nonmagical.",
		spellcastingBonus : {
			name : "To other stone bearer only",
			spells : ["sending"],
			selection : ["sending"],
			firstCol : "oncelr"
				},
		usages : 1, 
		recovery : "dawn",
		spellChanges : {
			"sending" : {
				description : "Send a 25 word message to the bearer of the other Sending Stone, who can respond with 25 words",
				changes : "Using one stone of a pair of Sending Stones, the spell can only target the bearer of the other stone of the pair."
				}
			}
		},
	"stone of controlling earth elementals (ccc-bld1-3)" : {
		name : "Stone of Controlling Earth Elementals (CCC-BLD1-3)",
		source : [["AL","CCC"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "This unassuming chunk of bauxite is carved in the shape of a round mother goddess & seems to thrum faintly when held. The thrumming increases to a hypnotic hum when used. Once per dawn when the stone is touching the ground, you can use an action to speak its command word & summon an earth elemental, as if you'd cast the Conjure Elemental spell.",
		descriptionFull : "This unassuming chunk of bauxite is carved in the shape of a round mother goddess and seems to thrum faintly when held. The thrumming increases to a hypnotic hum when used. If the stone is touching the ground, you can use an action to speak its command word and summon an earth elemental, as if you'd cast the Conjure Elemental spell. The stone can't be used this way again until the next dawn. The stone weighs 5 lbs.",
		weight : 5,
		spellcastingBonus : {
			name : "Earth Elemental only",
			spells : ["conjure elemental"],
			selection : ["conjure elemental"],
			firstCol : "oncelr"
		},
		limfeaname : "Stone of Controlling Earth Elementals",
		usages : 1,
		recovery : "dawn",
		spellChanges : {
			"conjure elemental" : {
				time : "1 a",
				components : "V,M\u0192",
				compMaterial : "The Stone of Controlling Earth Elementals needs to touch the ground to cast this spell with a command word.",
				description : "CR 5 earth elemental that obeys my verbal commands; on broken conc. elemental breaks free",
				changes : "Using the Stone of Controlling Earth Elementals, the spell only takes 1 action instead of 1 minute to cast, but can only bring forth an earth elemental."
			}
		}
	},
	"stone of good luck (ccc-dwb-tfg-1)" : {
		name : "Stone of Good Luck (CCC-DWB-TFG-1)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "This forest green crystal bears the symbol of Levistus. While it's on your person, you gain a +1 bonus to ability checks & saving throws.",
		descriptionFull : "This forest green crystal bears the symbol of Levistus. While this item is on your person, you gain a +1 bonus to ability checks and saving throws.",
		attunement : true,
		addMod : [
			{ type : "save", field : "all", mod : 1, text : "I gain a +1 bonus on all my saving throws." },
			{ type : "skill", field : "all", mod : 1, text : "I gain a +1 bonus on all my ability checks." },
			{ type : "skill", field : "Init", mod : 1, text : "I gain a +1 bonus on all my ability checks." }
		]
	},
	"stone of good luck (ccc-hatms2-3)" : {
		name : "Stone of Good Luck (CCC-HATMS2-3)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "The luckstone appears to be a fossilized shell of some ancient marine creature no larger than a gold piece. While it's on your person, you gain a +1 bonus to ability checks & saving throws.",
		descriptionFull : "The luckstone appears to be a fossilized shell of some ancient marine creature no larger than a gold piece. While this item is on your person, you gain a +1 bonus to ability checks and saving throws.",
		attunement : true,
		addMod : [
			{ type : "save", field : "all", mod : 1, text : "I gain a +1 bonus on all my saving throws." },
			{ type : "skill", field : "all", mod : 1, text : "I gain a +1 bonus on all my ability checks." },
			{ type : "skill", field : "Init", mod : 1, text : "I gain a +1 bonus on all my ability checks." }
		]
	},
	"stone of good luck (ccc-scar1-2)" : {
		name : "Stone of Good Luck (CCC-SCAR1-2)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "This smooth stone has a rainbow of colors through its opaque surface, and a small hole in one end so it could be put onto a necklace or leather thong. While it's on your person, you gain a +1 bonus to ability checks & saving throws.",
		descriptionFull : "This smooth stone has a rainbow of colors throughout its opaque surface, and a small hole in one end such that it could be put onto a necklace or leather thong. While this item is on your person, you gain a +1 bonus to ability checks and saving throws.",
		attunement : true,
		addMod : [
			{ type : "save", field : "all", mod : 1, text : "I gain a +1 bonus on all my saving throws." },
			{ type : "skill", field : "all", mod : 1, text : "I gain a +1 bonus on all my ability checks." },
			{ type : "skill", field : "Init", mod : 1, text : "I gain a +1 bonus on all my ability checks." }
		]
	},
	"stone of good luck (ddal0-2b)" : {
		name : "Stone of Good Luck (DDAL0-2B)",
		source : [["AL","S0"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "This stone is made of murky, green crystal & set on a length of heavy, pig-iron chain that allows it to be worn (albeit uncomfortably) around your neck. As an action, you can cause the stone to shed pale green light as bright as a torch. While it's on your person, you gain a +1 bonus to ability checks & saving throws.",
		descriptionFull : "This stone is made of murky, green crystal and is set on a length of heavy, pig-iron chain — allowing it to be worn (albeit uncomfortably) around the wearer’s neck. As an action, the wearer can cause the stone to shed pale green light as bright as a torch. While this item is on your person, you gain a +1 bonus to ability checks and saving throws.",
		attunement : true,
		action : [["action", "Stone of Good Luck (Shed Light)"]],
		addMod : [
			{ type : "save", field : "all", mod : 1, text : "I gain a +1 bonus on all my saving throws." },
			{ type : "skill", field : "all", mod : 1, text : "I gain a +1 bonus on all my ability checks." },
			{ type : "skill", field : "Init", mod : 1, text : "I gain a +1 bonus on all my ability checks." }
		]
	},
	"stone of good luck (ddal0-11b)" : {
		name : "Stone of Good Luck (DDAL0-11B)",
		source : [["AL","S0"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "This foul-smelling chunk of cooled brimstone is inscribed with the unholy symbol of Asmodeus. While this item is on your person, you gain a +1 bonus to ability checks and saving throws.",
		attunement : true,
		addMod : [
			{ type : "save", field : "all", mod : 1, text : "I gain a +1 bonus on all my saving throws." },
			{ type : "skill", field : "all", mod : 1, text : "I gain a +1 bonus on all my ability checks." },
			{ type : "skill", field : "Init", mod : 1, text : "I gain a +1 bonus on all my ability checks." }
		]
	},
	"stone of good luck (ddep4)" : {
		name : "Stone of Good Luck (DDEP4)",
		source : [["AL","S4"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "The center of this fist-sized emerald appears to be hollow and filled with a viscous green liquid. When agitated, the gem grows warm. While this item is on your person, you gain a +1 bonus to ability checks and saving throws.",
		attunement : true,
		addMod : [
			{ type : "save", field : "all", mod : 1, text : "I gain a +1 bonus on all my saving throws." },
			{ type : "skill", field : "all", mod : 1, text : "I gain a +1 bonus on all my ability checks." },
			{ type : "skill", field : "Init", mod : 1, text : "I gain a +1 bonus on all my ability checks." }
		]
	},
	"stone of good luck (ddhc-mord-04)" : {
		name : "Stone of Good Luck (DDHC-MORD-04)",
		source : [["AL","MtoF"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "This palm-sized stone is cool to the touch and carved into the likeness of a beaming halfling face. While you hold the stone, you gain advantage on Charisma (Persuasion) checks made against good-aligned halflings. While this item is on your person, you gain a +1 bonus to ability checks and saving throws.",
		attunement : true,
		addMod : [
			{ type : "save", field : "all", mod : 1, text : "I gain a +1 bonus on all my saving throws." },
			{ type : "skill", field : "all", mod : 1, text : "I gain a +1 bonus on all my ability checks." },
			{ type : "skill", field : "Init", mod : 1, text : "I gain a +1 bonus on all my ability checks." }
		]
	},
	"traveler's heart (ccc-sfbay-4-2)" : {
		name : "Traveler's Heart, Stone of Controlling Earth Elementals",
		source : [["AL","CCC"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "The Traveler’s Heart is a smooth sphere of meteorite iron, the size of a small orange. While underground & holding this item, you always know your depth below the surface & the direction to the nearest staircase, ramp, or other path upward. Once per dawn when the stone is touching the ground, you can use an action to speak its command word & summon an earth elemental, as if you'd cast the Conjure Elemental spell.",
		descriptionFull : "The Traveler’s Heart is a perfectly smooth sphere forged of meteorite iron, the size of a small shotput or orange. The person holding the Traveler’s Heart has the Delver ability: While underground, the bearer of this item always knows the item's depth below the surface and the direction to the nearest staircase, ramp, or other path leading upward. If the stone is touching the ground, you can use an action to speak its command word and summon an earth elemental, as if you'd cast the Conjure Elemental spell. The stone can't be used this way again until the next dawn. The stone weighs 5 lbs.",
		weight : 5,
		spellcastingBonus : {
			name : "Earth Elemental only",
			spells : ["conjure elemental"],
			selection : ["conjure elemental"],
			firstCol : "oncelr"
		},
		limfeaname : "Stone of Controlling Earth Elementals",
		usages : 1,
		recovery : "dawn",
		spellChanges : {
			"conjure elemental" : {
				time : "1 a",
				components : "V,M\u0192",
				compMaterial : "The Stone of Controlling Earth Elementals needs to touch the ground to cast this spell with a command word.",
				description : "CR 5 earth elemental that obeys my verbal commands; on broken conc. elemental breaks free",
				changes : "Using the Stone of Controlling Earth Elementals, the spell only takes 1 action instead of 1 minute to cast, but can only bring forth an earth elemental."
			}
		}
	},
}

MagicItemsList["al jewelry"] = {
		name : "AL Jewelry",
		type : "wondrous item",
		allowDuplicates : true,
	choices : ["Amarantha’s Heart (CCC-TAROT1-7)","Amulet of Health (CCC-GSP-NTHR1-1)","Amulet of Health (CCC-SFBAY-2-2)","Amulet of Health (DDEP0-1)","Amulet of Health (DDEP1)","Amulet of Health (DDAL8-10)","Amulet of the Planes (DDEP6-3)","Amulet of Proof Against Detection and Location (CCC-TAROT2-6)","Amulet of Proof Against Detection and Location (CCC-TRI-32)","Aramesha's Wisdom (DDEX2-16)","Brooch of Shielding (CCC-WWC-6)","Brooch of Shielding (DC-POA-NBDD-01)","Brooch of Shielding (DDEX2-5)", "Brooch of Shielding (DDAL5-3)","Clockwork Amulet (DDAL10-8)","Dark Shard Amulet (CCC-DES-1-6)","Dark Shard Amulet (CCC-GEL-1)","Dark Shard Amulet (DDAL10-7)","Guardian Emblem (DC-POA-HAG-SF4)","Holy Symbol of Kyuss (DDAL0-10)","Medallion of Thoughts (CCC-BMG MOON11-3)","Necklace of Adaptation (DDEP9-1)","Necklace of Fireballs (CCC-CIC-15)","Necklace of the Legions (CCC-OHAYO-CON1-3)","Necklace of Prayer Beads (DDEP2)","Periapt of Health (CCC-AN-2)","Periapt of Health (DDAL9-4)","Periapt of Proof Against Poison (CCC-RCC-1-6)","Periapt of Wound Closure (CCC-BLD1-1)","Periapt of Wound Closure (CCC-BMG-11 HILL1-2)","Periapt of Wound Closure (CCC-BMG-MOON3-1)","Periapt of Wound Closure (CCC-THENT1-2)","Periapt of Wound Closure (DDEP5-2)","Scarab of Protection (DDAL7-18)","Scarab of Protection (DDAL-DRW08)","Ward of the Martyr (CCC-TAROT1-3)"],
	"amarantha’s heart (ccc-tarot1-7)" : {
		name : "Amarantha’s Heart (Dark Shard Amulet)",
		source : [["AL","CCC"]],
		rarity : "common",
		magicItemTable : "?",
		description : "This amulet is shaped like a stylized heart & supported by a thin gold chain. The heart seems to absorb all light and is always pitch black. In dim light, the heart appears to have mists swirling within it. You can use it as a spellcasting focus for your warlock spells. Once per long rest, you can use it to cast a warlock cantrip you don't know w/ a DC 10 Int (Arcana) check, wasting the attempt & your action if you fail.",
		descriptionFull : "This amulet is shaped like a stylized heart – the heart seems to absorb all light into it, and is always pitch dark. When in dim light, the heart seems to have mists swirling around in it. The amulet is supported by a thin gold chain. While you are wearing it, you gain the following benefits:\n \u2022 You can use the amulet as a spellcasting focus for your warlock spells.\n \u2022 You can try to cast a cantrip that you don't know. The cantrip must be on the warlock spell list, and you must make a DC 10 Intelligence (Arcana) check. If the check succeeds, you cast the spell. If the check fails, so does the spell, and the action used to cast the spell is wasted. In either case, you can't use this property again until you finish a long rest.",
		attunement : true,
		prerequisite : "Requires attunement by a warlock",
		prereqeval : function (v) { return classes.known.warlock ? true : false; },
		limfeaname : "Dark Shard Amulet",
		usages : 1,
		recovery : "long rest",
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// Remove the already known Warlock cantrips
				if (spName == 'warlock-dark shard amulet' && CurrentSpells.warlock && CurrentSpells.warlock.selectCa) {
					var warlockCantrips = CreateSpellList({"class" : "warlock", level : [0,0]});
					var notCantrips = [];
					for (var i = 0; i < warlockCantrips.length; i++) {
						if (CurrentSpells.warlock.selectCa.indexOf(warlockCantrips[i]) !== -1) notCantrips.push(warlockCantrips[i]);
					}
					if (!spList.notspells) spList.notspells = [];
					spList.notspells = spList.notspells.concat(notCantrips);
				}
			}
		],
		spellAdd : [
			function (spellKey, spellObj, spName, isDuplicate) {
				if (spName == 'warlock-dark shard amulet') {
					spellObj.firstCol = "";
				}
			}
		]
	},
	eval : function () {
		CurrentSpells['warlock-dark shard amulet'] = {
			name : 'Dark Shard Amulet (item)',
			ability : "class",
			list : { 'class' : 'warlock', level : [0, 0] },
			known : { cantrips : 0, spells : 'list' },
			bonus : {
				bon1 : {
					name : 'Just select "Full List"',
					spells : []
				},
				bon2 : {
					name : 'in the bottom right',
					spells : []
				}
			},
			typeList : 4,
			refType : "item",
			firstCol : ""
		};
		SetStringifieds('spells'); CurrentUpdates.types.push('spells');
		},
	removeeval : function () {
		delete CurrentSpells['dark shard amulet'];
		SetStringifieds('spells'); CurrentUpdates.types.push('spells');
		}
	},
	"amulet of health (ccc-gsp-nthr1-1)" : {
		name : "Amulet of Health (CCC-GSP-NTHR1-1)",
		source : [["AL","CCC"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "This obsidian amulet was given to Tenebris Umbra by Kothys. When attuned to this item, the essence of the Shadowfell imbued into it turns your body deathly cold & numbs the skin it touches. Whenever you wear the amulet, your Constitution score is set to 19. It has no effect if your Constitution score is already 19 or higher.",
		descriptionFull : "This obsidian amulet was given to Tenebris Umbra by Kothys. When attuned to this item, the essence of the Shadowfell imbued into it by Kothys turns its owner’s body deathly cold and numbs the skin it touches. Whenever you wear the amulet, your Constitution score is set to 19. It has no effect if your Constitution score is already 19 or higher without it.",
		attunement : true,
		weight : 1,
		scoresOverride : [0, 0, 19, 0, 0, 0]
	},
	"amulet of health (ccc-sfbay-2-2)" : {
		name : "Amulet of Health (CCC-SFBAY-2-2)",
		source : [["AL","CCC"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "This amulet is made of a bloodstone flanked by troll fangs & with a troll hide cord. Whenever you wear the amulet, your Constitution score is set to 19. It has no effect if your Constitution score is already 19 or higher.",
		descriptionFull : "This amulet is made up of a bloodstone flanked by troll fangs. The cord that holds it is made of troll hide. Whenever you wear the amulet, your Constitution score is set to 19. It has no effect if your Constitution score is already 19 or higher without it.",
		attunement : true,
		weight : 1,
		scoresOverride : [0, 0, 19, 0, 0, 0]
	},
	"amulet of health (ddep0-1)" : {
		name : "Amulet of Health (DDEP0-1)",
		source : [["AL","S0"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "A heavy iron amulet bears the holy symbol of Loviatar, the Maiden of Pain. Suspended from an iron chain w/ short-barbed links, the amulet is uncomfortable & constantly scratches your neck. While you wear it, your Constitution score is set to 19. It has no effect if your Constitution score is already 19 or higher.",
		descriptionFull : "A heavy iron amulet bears the inscribed holy symbol of Loviatar, the Maiden of Pain. Suspended from an iron chain with short-barbed links, the amulet is uncomfortable and constantly scratches the wearer’s neck. Whenever you wear the amulet, your Constitution score is set to 19. It has no effect if your Constitution score is already 19 or higher without it.",
		attunement : true,
		weight : 1,
		scoresOverride : [0, 0, 19, 0, 0, 0]
	},
	"amulet of health (ddep1)" : {
		name : "Amulet of Health (DDEP1)",
		source : [["AL","S1"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "This amulet is made of gold, with a large ruby inset in it. While you wear it, your Constitution score is set to 19. It has no effect if your Constitution score is already 19 or higher.",
		descriptionFull : "This amulet is made of gold, with a large ruby inset in it. Whenever you wear the amulet, your Constitution score is set to 19. It has no effect if your Constitution score is already 19 or higher without it.",
		attunement : true,
		weight : 1,
		scoresOverride : [0, 0, 19, 0, 0, 0]
	},
	"amulet of health (ddal8-10)" : {
		name : "Amulet of Health (DDAL8-10)",
		source : [["AL","S8"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "An electrum pendant in the shape of an eye surrounded by a grasping tentacle hangs from this mithril chain. While you wear the amulet, your Constitution score is set to 19 & you have the feeling that you are being watched. It has no effect if your Constitution score is already 19 or higher.",
		descriptionFull : "An electrum pendant in the shape of an eye surrounded by a grasping tentacle hangs from this mithril chain. Whenever you wear the amulet, your Constitution score is set to 19 and you have the feeling that you are being watched. It has no effect if your Constitution score is already 19 or higher without it.",
		attunement : true,
		weight : 1,
		scoresOverride : [0, 0, 19, 0, 0, 0]
	},
	"amulet of the planes (ddep6-3)" : { // contains contributions by Larry Hoy
		name : "Amulet of the Planes (DDEP6-3)",
		source : [["AL","S6"]],
		rarity : "very rare",
		magicItemTable : "H",
		description : "This amulet bears the arcane sigils of the baelnorn of Myth Drannor & is heavily scarred, as if crushed by stones or bricks. While wearing the amulet, you can use an action to name a familiar location on another plane & make a DC 15 Int check. On a success, you cast Plane Shift. On a failure, you & each creature & object w/i 15 ft travel to a random destination. Roll a d100. 1-60: you travel to a random location on the plane you named. 61-100: you travel to a random plane of existence.",
		descriptionFull : "This amulet bears the arcane sigils of the baelnorn of Myth Drannor and is heavily scarred, as if it had been crushed by stones or bricks. While wearing this amulet, you can use an action to name a location that you are familiar with on another plane of existence. Then make a DC 15 Intelligence check. On a successful check, you cast the Plane Shift spell. On a failure, you and each creature and object within 15 feet of you travel to a random destination. Roll a d100. On a 1-60, you travel to a random location on the plane you named. On a 61-100, you travel to a randomly determined plane of existence.",
		attunement : true,
		weight : 1,
		spellcastingAbility : "class",
		spellcastingBonus : {
			name : "DC 15 Int check",
			spells : ["plane shift"],
			selection : ["plane shift"],
			firstCol : "atwill"
		},
		spellChanges : {
			"plane shift" : {
				description : "DC 15 Int to cast; Me + 8 willing transport to other plane, or spell atk + save to move to random plane",
				components : "V,M\u0192",
				changes : "The spell can be cast at will, but requires a DC 15 Intelligence check to do so, with negative consequences on a failure."
			}
		}
	},
	"amulet of proof against detection and location (ccc-tarot2-6)" : {
		name : "Amulet of Proof Against Detection and Location (CCC-TAROT2-6)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "F",
		attunement : true,
		description : "This amulet of polished ebony features a skull carved from human bone surrounded by a ring of 13 red pyrope garnets shaped like droplets. While attuned, you can make it appear as a silver charm engraved with 13 crows. The amulet can be used as a holy symbol of Bhaal & while wearing it, you're hidden from Divination magic. You can't be targeted by such magic or perceived through magical scrying sensors.",
		descriptionFull : "This amulet of polished ebony features a skull carved from human bone surrounded by a ring of thirteen red pyrope garnets shaped like droplets. While attuned to it, the bearer can make the amulet appear to others as a silver charm engraved with thirteen crows. The amulet can be used as a holy symbol of Bhaal. While wearing this amulet, you are hidden from Divination magic. You can't be targeted by such magic or perceived through magical scrying sensors.",
		weight : 1
	},
	"amulet of proof against detection and location (ccc-tri-32)" : {
		name : "Amulet of Proof Against Detection and Location (CCC-TRI-32)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "F",
		attunement : true,
		description : "This medallion depicts a stylized eclipse: a smooth black onyx surrounded by bronze sun rays. While wearing it, you're hidden from Divination magic. You can't be targeted by such magic or perceived through magical scrying sensors.",
		descriptionFull : "This small medallion depicts a stylized eclipse: a smooth black onyx surrounded by bronze sun rays. While wearing this amulet, you are hidden from Divination magic. You can't be targeted by such magic or perceived through magical scrying sensors.",
		weight : 1
	},
	"aramesha's wisdom (ddex2-16)" : {
		name : "Aramesha's Wisdom (Medallion of Thoughts)",
		source : [["AL","S2"]],
		rarity : "uncommon",
		magicItemTable : "F",
		attunement : true,
		description: "This beautiful silver medallion has an intricate engraving in Celestial upon it – a short poem called “The Hope of Aramesha.” The medallion has 3 charges. While wearing it, you can use an action and expend 1 charge to cast the Detect Thoughts spell (save DC 13) from it. The medallion regains 1d3 expended charges daily at dawn.",
		weight : 1,
		limfeaname : "Medallion of Thoughts",
		usages : 3,
		recovery : "dawn",
		additional : "regains 1d3",
		spellcastingBonus : {
			name : "1 charge",
			spells : ["detect thoughts"],
			selection : ["detect thoughts"],
			firstCol : 1
		},
		fixedDC : 13,
		spellFirstColTitle : "Ch"
		},
	"brooch of shielding (ccc-wwc-6)" : {  // contains contributions by Smashman
		name : "Brooch of Shielding (CCC-WWC-6)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "F",
		attunement : true,
		description: "This white metal brooch depicts the white raised hand of Torm. While wearing this brooch, you have resistance to force damage, and immunity to the Magic Missile spell.",
		descriptionFull: "This white metal brooch depicts the white raised hand of Torm. While wearing this brooch, you have resistance to force damage and you have immunity to damage from the Magic Missile spell.",
		dmgres: ["Force"],
		savetxt: {
			immune: ["Magic Missile spell"]
			}
		},
	"brooch of shielding (dc-poa-nbdd-01)" : {  // contains contributions by Smashman
		name : "Brooch of Shielding (DC-POA-NBDD-01)",
		source : [["AL","S10"]],
		rarity : "uncommon",
		magicItemTable : "F",
		attunement : true,
		description: "This brooch is made of a clear blue stone w/ gold filigree, shaped like the outline of a bird in flight. When it absorbs a magic missile, it chimes w/ a different musical note per missile. While wearing this brooch, you have resistance to force damage and immunity to the Magic Missile spell.",
		descriptionFull: "This brooch is made of a clear blue stone with gold filigree, shaped like the outline of a bird in flight. Every time it absorbs a magic missile, it echoes with the chime of a different musical note per missile. While wearing this brooch, you have resistance to force damage, and you have immunity to damage from the Magic Missile spell.",
		dmgres: ["Force"],
		savetxt: {
			immune: ["Magic Missile spell"]
			}
		},
	"brooch of shielding (ddex2-5)" : {  // contains contributions by Smashman
		name : "Brooch of Shielding (DDEX2-5)",
		source : [["AL","S2"]],
		rarity : "uncommon",
		magicItemTable : "F",
		attunement : true,
		description: "This brooch is fashioned to look like a paint brush whose bristles are aflame. A mad cackling quietly emanates from it every sunset. While wearing this brooch, you have resistance to force damage and immunity to the Magic Missile spell.",
		descriptionFull: "This brooch is fashioned to look like a paint brush whose bristles are aflame. A mad cackling quietly emanates from it every sunset. While wearing this brooch, you have resistance to force damage, and you have immunity to damage from the Magic Missile spell.",
		dmgres: ["Force"],
		savetxt: {
			immune: ["Magic Missile spell"]
			}
		},
	"brooch of shielding (ddal5-3)" : {
		name : "Brooch of Shielding (DDAL5-3)",
		source : [["AL","S5"]],
		rarity : "uncommon",
		magicItemTable : "F",
		attunement : true,
		description: "This brooch is fashioned from a tiny leaf inlaid in gold & silver. While the leaf isn't alive, it changes color with the seasons as if it were. While wearing this brooch, you have resistance to force damage & immunity to the Magic Missile spell.",
		descriptionFull: "This brooch is fashioned from a tiny leaf inlaid in gold and silver. While the leaf isn't alive, it changes color with the seasons as if it were. While wearing this brooch, you have resistance to force damage, and you have immunity to damage from the Magic Missile spell.",
		dmgres: ["Force"],
		savetxt: {
			immune: ["Magic Missile spell"]
			}
		},
	"clockwork amulet (ddal10-8)" : {
		name : "Clockwork Amulet (DDAL10-8)",
		source : [["AL","S10"]],
		rarity : "common",
		magicItemTable : "?",
		description : "Once/dawn when you make an atk roll while wearing this amulet, you can take a 10 on the die instead of rolling. This amulet is a made of a silver dragon’s head encircled by a brass ring studded w/ 10 tiny diamonds that twinkle like stars when the amulet is activated. It contains tiny interlocking gears powered by magic from Mechanus, a plane of clockwork predictability. When you listen to it, you can hear faint ticking & whirring noises.",
		descriptionFull : "This amulet is a silver dragon’s head encircled by a brass ring studded with ten tiny diamonds that twinkle like stars when the amulet is activated.\n   This copper amulet contains tiny interlocking gears and is powered by magic from Mechanus, a plane of clockwork predictability. A creature that puts an ear to the amulet can hear faint ticking and whirring noises coming from within.\n   When you make an attack roll while wearing the amulet, you can forgo rolling the d20 to get a 10 on the die. Once used. this property can't be used again until the next dawn.",
		limfeaname : "Clockwork Amulet",
		usages : 1,
		recovery : "dawn"
		},
	"dark shard amulet (ccc-des-1-6)" : {
		name : "Dark Shard Amulet (CCC-DES-1-6)",
		source : [["AL","CCC"]],
		rarity : "common",
		magicItemTable : "?",
		description : "This necklace was a token gift from Jeny Greenteeth to Lance Brickcrystal. It's dominated by a pendant crafted from a pale green extraplanar amber. Inside is a small millipede that occasionally twitches. You can use it as a spellcasting focus for your warlock spells. Once per long rest, you can use it to cast a warlock cantrip you don't know w/ a DC 10 Int (Arcana) check, wasting the attempt & your action if you fail.",
		descriptionFull : "This item was a token gift from Jeny to Lance Brickcrystal. The necklace is dominated by a pendant crafted from a pale green amber. Inside is a small millipede, that occasionally twitches.\n   While you are wearing it, you gain the following benefits:\n \u2022 You can use the amulet as a spellcasting focus for your warlock spells.\n \u2022 You can try to cast a cantrip that you don't know. The cantrip must be on the warlock spell list, and you must make a DC 10 Intelligence (Arcana) check. If the check succeeds, you cast the spell. If the check fails, so does the spell, and the action used to cast the spell is wasted. In either case, you can't use this property again until you finish a long rest.",
		attunement : true,
		prerequisite : "Requires attunement by a warlock",
		prereqeval : function (v) { return classes.known.warlock ? true : false; },
		limfeaname : "Dark Shard Amulet",
		usages : 1,
		recovery : "long rest",
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// Remove the already known Warlock cantrips
				if (spName == 'warlock-dark shard amulet' && CurrentSpells.warlock && CurrentSpells.warlock.selectCa) {
					var warlockCantrips = CreateSpellList({"class" : "warlock", level : [0,0]});
					var notCantrips = [];
					for (var i = 0; i < warlockCantrips.length; i++) {
						if (CurrentSpells.warlock.selectCa.indexOf(warlockCantrips[i]) !== -1) notCantrips.push(warlockCantrips[i]);
					}
					if (!spList.notspells) spList.notspells = [];
					spList.notspells = spList.notspells.concat(notCantrips);
				}
			}
		],
		spellAdd : [
			function (spellKey, spellObj, spName, isDuplicate) {
				if (spName == 'warlock-dark shard amulet') {
					spellObj.firstCol = "";
				}
			}
		]
	},
	eval : function () {
		CurrentSpells['warlock-dark shard amulet'] = {
			name : 'Dark Shard Amulet (item)',
			ability : "class",
			list : { 'class' : 'warlock', level : [0, 0] },
			known : { cantrips : 0, spells : 'list' },
			bonus : {
				bon1 : {
					name : 'Just select "Full List"',
					spells : []
				},
				bon2 : {
					name : 'in the bottom right',
					spells : []
				}
			},
			typeList : 4,
			refType : "item",
			firstCol : ""
		};
		SetStringifieds('spells'); CurrentUpdates.types.push('spells');
		},
	removeeval : function () {
		delete CurrentSpells['dark shard amulet'];
		SetStringifieds('spells'); CurrentUpdates.types.push('spells');
		}
	},
	"dark shard amulet (ccc-gel-1)" : {
		name : "Dark Shard Amulet (CCC-GEL-1)",
		source : [["AL","CCC"]],
		rarity : "common",
		magicItemTable : "?",
		description : "This amulet is fashioned from a single shard of twisted purple & teal extraplanar crystal from The Far Realm. You can use it as a spellcasting focus for your warlock spells. Once per long rest, you can use it to cast a warlock cantrip you don't know w/ a DC 10 Int (Arcana) check, wasting the attempt & your action if you fail.",
		descriptionFull : "This amulet is fashioned from a single shard of twisted purple and teal extraplanar crystal originating from The Far Realm. While you are wearing it, you gain the following benefits:\n \u2022 You can use the amulet as a spellcasting focus for your warlock spells.\n \u2022 You can try to cast a cantrip that you don't know. The cantrip must be on the warlock spell list, and you must make a DC 10 Intelligence (Arcana) check. If the check succeeds, you cast the spell. If the check fails, so does the spell, and the action used to cast the spell is wasted. In either case, you can't use this property again until you finish a long rest.",
		attunement : true,
		prerequisite : "Requires attunement by a warlock",
		prereqeval : function (v) { return classes.known.warlock ? true : false; },
		limfeaname : "Dark Shard Amulet",
		usages : 1,
		recovery : "long rest",
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// Remove the already known Warlock cantrips
				if (spName == 'warlock-dark shard amulet' && CurrentSpells.warlock && CurrentSpells.warlock.selectCa) {
					var warlockCantrips = CreateSpellList({"class" : "warlock", level : [0,0]});
					var notCantrips = [];
					for (var i = 0; i < warlockCantrips.length; i++) {
						if (CurrentSpells.warlock.selectCa.indexOf(warlockCantrips[i]) !== -1) notCantrips.push(warlockCantrips[i]);
					}
					if (!spList.notspells) spList.notspells = [];
					spList.notspells = spList.notspells.concat(notCantrips);
				}
			}
		],
		spellAdd : [
			function (spellKey, spellObj, spName, isDuplicate) {
				if (spName == 'warlock-dark shard amulet') {
					spellObj.firstCol = "";
				}
			}
		]
	},
	eval : function () {
		CurrentSpells['warlock-dark shard amulet'] = {
			name : 'Dark Shard Amulet (item)',
			ability : "class",
			list : { 'class' : 'warlock', level : [0, 0] },
			known : { cantrips : 0, spells : 'list' },
			bonus : {
				bon1 : {
					name : 'Just select "Full List"',
					spells : []
				},
				bon2 : {
					name : 'in the bottom right',
					spells : []
				}
			},
			typeList : 4,
			refType : "item",
			firstCol : ""
		};
		SetStringifieds('spells'); CurrentUpdates.types.push('spells');
		},
	removeeval : function () {
		delete CurrentSpells['dark shard amulet'];
		SetStringifieds('spells'); CurrentUpdates.types.push('spells');
		}
	},
	"dark shard amulet (ddal10-7)" : {
		name : "Dark Shard Amulet (DDAL10-7)",
		source : [["AL","S10"]],
		rarity : "common",
		magicItemTable : "?",
		description : "This amulet is made of ice that never melts and is engraved with the Draconic word vorelrasvym, meaning “beautiful treasure.” You can use it as a spellcasting focus for your warlock spells. Once per long rest, you can use it to cast a warlock cantrip you don't know w/ a DC 10 Intelligence (Arcana) check, wasting the attempt and your action if you fail.",
		descriptionFull : "This amulet is made of ice that never melts and is engraved with the Draconic word vorelrasvym, meaning “beautiful treasure.”\n   This amulet is fashioned from a single shard of resilient extraplanar material originating from the realm of your warlock patron. While you are wearing it, you gain the following benefits:\n \u2022 You can use the amulet as a spellcasting focus for your warlock spells.\n \u2022 You can try to cast a cantrip that you don't know. The cantrip must be on the warlock spell list, and you must make a DC 10 Intelligence (Arcana) check. If the check succeeds, you cast the spell. If the check fails, so does the spell, and the action used to cast the spell is wasted. In either case, you can't use this property again until you finish a long rest.",
		attunement : true,
		prerequisite : "Requires attunement by a warlock",
		prereqeval : function (v) { return classes.known.warlock ? true : false; },
		limfeaname : "Dark Shard Amulet",
		usages : 1,
		recovery : "long rest",
	calcChanges : {
		spellList : [
			function(spList, spName, spType) {
				// Remove the already known Warlock cantrips
				if (spName == 'warlock-dark shard amulet' && CurrentSpells.warlock && CurrentSpells.warlock.selectCa) {
					var warlockCantrips = CreateSpellList({"class" : "warlock", level : [0,0]});
					var notCantrips = [];
					for (var i = 0; i < warlockCantrips.length; i++) {
						if (CurrentSpells.warlock.selectCa.indexOf(warlockCantrips[i]) !== -1) notCantrips.push(warlockCantrips[i]);
					}
					if (!spList.notspells) spList.notspells = [];
					spList.notspells = spList.notspells.concat(notCantrips);
				}
			}
		],
		spellAdd : [
			function (spellKey, spellObj, spName, isDuplicate) {
				if (spName == 'warlock-dark shard amulet') {
					spellObj.firstCol = "";
				}
			}
		]
	},
	eval : function () {
		CurrentSpells['warlock-dark shard amulet'] = {
			name : 'Dark Shard Amulet (item)',
			ability : "class",
			list : { 'class' : 'warlock', level : [0, 0] },
			known : { cantrips : 0, spells : 'list' },
			bonus : {
				bon1 : {
					name : 'Just select "Full List"',
					spells : []
				},
				bon2 : {
					name : 'in the bottom right',
					spells : []
				}
			},
			typeList : 4,
			refType : "item",
			firstCol : ""
		};
		SetStringifieds('spells'); CurrentUpdates.types.push('spells');
		},
	removeeval : function () {
		delete CurrentSpells['dark shard amulet'];
		SetStringifieds('spells'); CurrentUpdates.types.push('spells');
		}
	},
	"guardian emblem (dc-poa-hag-sf4)" : {
		name : "Guardian Emblem (DC-POA-HAG-SF4)",
		source : [["AL","S10"]],
		rarity : "uncommon",
		magicItemTable : "?",
		prerequisite : "Requires attunement by a cleric or paladin",
		prereqeval : function(v) {
			return v.isSpellcaster && (classes.known.cleric ? true : false || classes.known.paladin ? true: false);
			},
		description : "This emblem features the holy symbol of Ilmater and feels heavier than usual due to the weight of its former owner's oath. As a reaction, you can use 1 charge to turn a critical hit on yourself or a creature you can see within 30 ft into a normal hit. You can use an action to attach/detach the emblem to a suit of armor or a shield. All charges are regained at dawn.",
		descriptionFull : "This emblem features the holy symbol of Ilmater and feels heavier than usual due to the weight of its former owner's oath. As an action, you can attach the emblem to a suit of armor or a shield or remove it.\n  The emblem has 3 charges. When you or a creature you can see within 30 feet of you suffers a critical hit while you're wearing the emblem, you can use your reaction to expend 1 charge to turn the critical hit into a normal hit instead.\n  The emblem regains all expended charges daily at dawn.",
		attunement : true,
		limfeaname : "Guardian Emblem",
		usages : 3,
		recovery : "dawn",
		action : [
			["action", " (Attach/Detach)"],
			["reaction", " (Cancel Critical)"]
				]
	},
	"holy symbol of kyuss (ddal0-10)" : {
		name : "Holy Symbol of Kyuss (Talisman of Ultimate Evil)",
		source : [["AL","S0"]],
		rarity : "legendary",
		magicItemTable : "I",
		description : "This platinum disc is a holy symbol of Kyuss: a skull w/ worms emerging from eyes, nose, & mouth. This item symbolizes unrepentant evil. While in your possession, you must spend 5 DT days btwn each adventure, lest you be consumed. If consumed, you are instantly & permanently retired from AL play. If an evil cleric/ paladin, you can use this as a holy symbol & get a +2 bonus on spell atks. As an action, spend 1 charge to have a visible good creature w/i 120 ft make a DC 20 Dex save or be destroyed. Non-evil creatures take necrotic dmg/turn touching, good=8d6 / neutral=6d6.",
		descriptionLong : "This platinum disc has the holy symbol of Kyuss on its face: a skull with intertwined worms emerging from the eyes, nose, & mouth. This item symbolizes unrepentant evil. While in your possession, you must spend 5 DT days between each adventure, lest you be consumed by Kyuss. If consumed, you are instantly & permanently retired from AL play. If an evil cleric or paladin, you can use it as a holy symbol & get a +2 bonus on your spell atks. As an action, use 1 charge to target 1 visible good creature on the ground within 120 ft. A flaming fissure opens & it must pass a DC 20 Dex save or fall into the fissure & be destroyed, leaving no remains. The talisman is destroyed when the last charge is used. Non-evil creatures take necrotic dmg per turn touching, 8d6 if good or 6d6 if neutral.",
		descriptionFull : "This platinum disc has the holy symbol of Kyuss on its face: a skull with intertwined worms emerging from the eyes, nose, and mouth. The worms appear to move ever so slightly. This item symbolizes unrepentant evil. While in possession of this item, you must spend 5 downtime days between every adventure in meditation, lest your soul and body be consumed by Kyuss; if you are consumed, you are immediately and permanently retired from D&D Adventurers League play.\n   This item symbolizes unrepentant evil. A creature that is neither good nor evil in alignment takes 6d6 necrotic damage upon touching the talisman. A good creature takes 8d6 necrotic damage upon touching the talisman. Either sort of creature takes the damage again each time it ends its turn holding or carrying the talisman.\n   If you are an evil cleric or paladin, you can use the talisman as a holy symbol, and you gain a +2 bonus to spell attack rolls while you wear or hold it.\n   The talisman has 6 charges. If you are wearing or holding it, you can use an action to expend 1 charge from the talisman and choose one creature you can see on the ground within 120 feet of you. If the target is of good alignment, a flaming fissure opens under it. The target must succeed on a DC 20 Dexterity saving throw or fall into the fissure and be destroyed, leaving no remains. The fissure then closes, leaving no trace of its existence. When you expend the last charge, the talisman dissolves into foul-smelling slime and is destroyed.",
		attunement : true,
		weight : 1,
		prerequisite : "Requires attunement by a creature of evil alignment",
		prereqeval : function(v) { return (/evil/i).test(What("Alignment")); },
		limfeaname : "Talisman of Ultimate Evil",
		usages : 6,
		recovery : "never",
		action : [["action", ""]],
		calcChanges : {
			spellCalc : [
				function (type, spellcasters, ability) {
					if (type == "attack" && (classes.known.paladin || classes.known.cleric) && (/evil/i).test(What("Alignment"))) return 2;
				},
				"If I'm an evil cleric or paladin, I gain a +2 bonus on my spell attack rolls while wearing or holding the Talisman of Ultimate Evil."
			]
		}
	},
	"medallion of thoughts (ccc-bmg moon11-3)" : {
		name : "Medallion of Thoughts (CCC-BMG MOON11-3)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "F",
		attunement : true,
		description: "This medallion is made out of polished silver & shaped like a small mirror. Any thoughts detected appear in the mirrored surface as either images or as words on a fogged over surface. The medallion has 3 charges. While wearing it, you can use an action & expend 1 charge to cast the Detect Thoughts spell (save DC 13) from it. The medallion regains 1d3 expended charges daily at dawn.",
		descriptionFull: "This medallion is made out of polished silver and shaped like a small mirror. Any thoughts detected by the device appear in the mirrored surface as either images or the surface fogs over and words appear. The medallion has 3 charges. While wearing it, you can use an action and expend 1 charge to cast the Detect Thoughts spell (save DC 13) from it. The medallion regains 1d3 expended charges daily at dawn.",
		weight : 1,
		limfeaname : "Medallion of Thoughts",
		usages : 3,
		recovery : "dawn",
		additional : "regains 1d3",
		spellcastingBonus : {
			name : "1 charge",
			spells : ["detect thoughts"],
			selection : ["detect thoughts"],
			firstCol : 1
		},
		fixedDC : 13,
		spellFirstColTitle : "Ch"
		},
	"necklace of adaptation (ddep9-1)" : {
		name : "Necklace of Adaptation (DDEP9-1)",
		source : [["AL","S9"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "The pendant of this necklace is an ovoid puzzle box of jagged black metal that screeches as it is operated. To activate the item, the puzzle box must be manipulated into a new configuration. While wearing this necklace, you can breathe normally in any environment, & have advantage on saving throws made against harmful gases & vapors (such as Cloudkill & Stinking Cloud effects, inhaled poisons, & some dragon breath weapons).",
		descriptionFull : "The pendant of this necklace is an ovoid puzzle box of jagged black metal that screeches as it is operated. To activate the item, the puzzle box must be manipulated into a new configuration. While wearing this necklace, you can breathe normally in any environment, and you have advantage on saving throws made against harmful gases and vapors (such as Cloudkill and Stinking Cloud effects, inhaled poisons, and the breath weapons of some dragons).",
		weight : 1,
		attunement : true,
		savetxt : { adv_vs : ["gases", "vapors"] }
	},
	"necklace of fireballs (ccc-cic-15)" : {
		name : "Necklace of Fireballs (CCC-CIC-15)",
		source : [["AL","CCC"]],
		rarity : "rare",
		magicItemTable : "C",
		description : "While wearing this necklace, a tattoo in the shape of Ϫ appears on your throat. The tattoo disappears if the necklace is removed. The necklace has 6 beads. As an action, you can detach a bead & throw it up to 60 ft where it detonates as a 3rd-lvl Fireball (save DC 15). You can hurl multiple beads at a time, increasing the lvl of the Fireball by 1 for each bead past the 1st. ",
		descriptionFull : "While wearing this necklace, a tattoo in the shape of Ϫ appears on the wearer's throat. The tattoo disappears if the necklace is removed. This necklace has 6 beads.\n   This necklace has 6 beads hanging from it. You can use an action to detach a bead and throw it up to 60 feet away. When it reaches the end of its trajectory, the bead detonates as a 3rd-level Fireball spell (save DC 15).\n   You can hurl multiple beads, or even the whole necklace, as one action. When you do so, increase the level of the Fireball by 1 for each bead beyond the first.",
		weight : 1,
		limfeaname : "Necklace of Fireballs",
		usages : "6",
		recovery : "Never",
		spellcastingBonus : {
			name : "Fireball",
			spells : ["fireball"],
			selection : ["fireball"]
		},
		fixedDC : 15,
		spellChanges : {
			"fireball" : {
				description : "20-ft rad all crea 8d6 (+1d6/extra bead) Fire dmg; save halves; unattended flammable objects ignite",
				components : "M\u2020",
				compMaterial : "Using the Necklace of Fireballs to cast Fireball requires removing and destorying one or more of the beads from it.",
				changes : "Using the Necklace of Fireballs to cast Fireball requires removing and destorying one or more of the beads from it. The damage is that of a Fireball cast a 3rd-level, +1 level per bead thrown as part of the same action beyond the first."
			}
		}
	},
	"necklace of the legions (ccc-ohayo-con1-3)" : {
		name : "Necklace of the Legions (Necklace of Fireballs)",
		source : [["AL","CCC"]],
		rarity : "rare",
		magicItemTable : "C",
		description : "When a bead from this necklace is thrown, the ear-splitting roar of the legions of hell charging into battle can be heard in the surrounding area. The necklace has 7 beads. As an action, you can detach a bead & throw it up to 60 ft where it detonates as a 3rd-level Fireball (save DC 15). You can hurl multiple beads at a time, increasing the level of the Fireball by 1 for each bead past the 1st. ",
		descriptionFull : "When a bead from this necklace is thrown, the ear-splitting roar of the legions of hell charging into battle can be heard in the surrounding area.\n   This necklace has 7 beads hanging from it. You can use an action to detach a bead and throw it up to 60 feet away. When it reaches the end of its trajectory, the bead detonates as a 3rd-level Fireball spell (save DC 15).\n   You can hurl multiple beads, or even the whole necklace, as one action. When you do so, increase the level of the Fireball by 1 for each bead beyond the first.",
		weight : 1,
		limfeaname : "Necklace of Fireballs",
		usages : "7",
		recovery : "Never",
		spellcastingBonus : {
			name : "Fireball",
			spells : ["fireball"],
			selection : ["fireball"]
		},
		fixedDC : 15,
		spellChanges : {
			"fireball" : {
				description : "20-ft rad all crea 8d6 (+1d6/extra bead) Fire dmg; save halves; unattended flammable objects ignite",
				components : "M\u2020",
				compMaterial : "Using the Necklace of Fireballs to cast Fireball requires removing and destorying one or more of the beads from it.",
				changes : "Using the Necklace of Fireballs to cast Fireball requires removing and destorying one or more of the beads from it. The damage is that of a Fireball cast a 3rd-level, +1 level per bead thrown as part of the same action beyond the first."
			}
		}
	},
	"necklace of prayer beads (ddep2)" : {
		name : "Necklace of Prayer Beads (DDEP2)",
		source : [["AL","S2"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "Pearls of white, blue, black, green & purple are strung on a delicate string of seaweed & bound with a seashell clasp. Curiously, the necklace is always damp. 5 of the pearls are magical & can each be used to cast a spell once per dawn as a bonus action. The DM randomly selects the spells from: Bless, Cure Wounds \u0026 Lesser Restoration, Greater Restoration, Branding Smite, Planar Ally, & Wind Walk. (No duplicates)",
		descriptionLong : "Pearls of white, blue, black, green, & even purple are strung on what seems to be a delicate string of seaweed & bound with a seashell clasp. Curiously, the necklace is always damp. 5 of the pearls are magical & can be used to cast a spell once per dawn as a bonus action. The DM randomly selects the spells from: blessing bead (Bless), curing bead (Cure Wounds \u0026 Lesser Restoration), favor bead (Greater Restoration), smiting bead (Branding Smite), summons bead (Planar Ally), & wind walking bead (Wind Walk). (No duplicates)",
		descriptionFull : "Pearls of white, blue, black, green, and even purple are strung on what seems to be a delicate string of seaweed and bound with a seashell clasp. Curiously, the necklace is always damp.\n   This necklace has 5 magic pearls and a variety of nonmagical pearls. If a magic bead is removed from the necklace, that bead loses its magic.\n   Six types of magic beads exist. The DM determines the type of each bead on this necklace randomly and it has no more than one bead of a single type. To use one, you must be wearing the necklace. Each bead contains a spell that you can cast from it as a bonus action (using your spell save DC if a save is necessary). Once a magic bead's spell is cast, that bead can't be used again until the next dawn.\n\n" + toUni("d20\tBead of ...\tSpell") + "\n1-6\tBlessing\t\tBless\n7-12\tCuring\t\tCure Wounds (2nd level) or Lesser Restoration\n13-16\tFavor\t\tGreater Restoration\n17-18\tSmiting\t\tBranding Smite\n19\tSummons   \tPlanar Ally\n20\tWind walking\tWind Walk",
		attunement : true,
		weight : 1,
		limfeaname : "Necklace of Prayer Beads",
		usages : "1d4+2",
		recovery : "dawn",
		spellcastingAbility : "class",
		spellFirstColTitle : "Us",
		spellcastingBonus : {
			name : "Bead Spell",
			spells : ["bless", "cure wounds", "lesser restoration", "greater restoration", "branding smite", "planar ally", "wind walk"],
			times : 7
		},
		calcChanges : {
			spellAdd : [
				function (spellKey, spellObj, spName) {
					if ((/necklace of prayer beads/i).test(spName) && spellObj.time !== "1 bns") {
						spellObj.time = "1 bns";
						if (spellKey == "cure wounds") {
							spellObj.description = "1 living creature heals 2d8+spellcasting ability modifier HP";
							return "Using the Necklace of Prayer Beads Cure Wounds is cast as a 2nd-level spell and only takes a bonus action.";
						} else {
							return "The casting time is only a bonus action.";
						}
					}
				}
			]
		}
	},
	"periapt of health (ccc-an-2)" : { // contributed by AelarTheElfRogue
		name : "Periapt of Health (CCC-AN-2)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "C",
		description : "This periapt is a diamond-shaped emerald pendant with the elvish word for “health” floating inside the gem. You are immune to contracting any disease while you wear it. If you are already infected with a disease, the effects of the disease are suppressed.",
		weight : 1,
		savetxt : { immune : ["disease"] }
	},
	"periapt of health (ddal9-4)" : { // contributed by AelarTheElfRogue
		name : "Periapt of Health (DDAL9-4)",
		source : [["AL","S9"]],
		rarity : "uncommon",
		magicItemTable : "C",
		description : "This charm consists of an irregularly shaped emerald hanging from a thick silver chain. You are immune to contracting any disease while you wear this pendant. If you are already infected with a disease, the effects of the disease are suppressed.",
		weight : 1,
		savetxt : { immune : ["disease"] }
	},
	"periapt of proof against poison (ccc-rcc-1-6)" : { // contributed by AelarTheElfRogue
		name : "Periapt of Proof Against Poison (CCC-RCC-1-6)",
		source : [["AL","CCC"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "This heavy leather cord contains a brilliant-cut emerald pendant. While you wear it, poisons have no effect on you. You are immune to the poisoned condition and have immunity to poison damage.",
		weight : 1,
		savetxt : { immune : ["poison"] }
	},
	"periapt of wound closure (ccc-bld1-1)" : {   // contains contributions by AelarTheElfRogue
		name : "Periapt of Wound Closure (CCC-BLD1-1)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "This delicate silver chain has a brilliant green gem held in a pendant the shape of a coiled snake. While wearing it, you stabilize whenever you are dying at the start of your turn. In addition, when you roll a Hit Die to regain hp, double the number of hit points restored.",
		descriptionFull : "This delicate silver chain has a brilliant-cut green gem held in a pendant the shape of a coiled snake. While you wear this pendant, you stabilize whenever you are dying at the start of your turn. In addition, whenever you roll a Hit Die to regain hit points, double the number of hit points it restores.",
		attunement : true,
		weight : 1
	},
	"periapt of wound closure (ccc-bmg-11 hill1-2)" : {   // contains contributions by AelarTheElfRogue
		name : "Periapt of Wound Closure (CCC-BMG-11 HILL1-2)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "This fine gold pendant has a small golden charm showing 2 upturned, open hands w/ long, graceful fingers holding 3 small crystals. If you aren't a construct or of fey origin, you suffer an allergic reaction while attuning & for 2d4 rounds after each use. This takes the form of sneezing, coughing, itching, watery eyes, etc. While wearing the periapt, you stabilize whenever you're dying at the start of your turn. Also, when you roll a Hit Die to regain hp, double the amt restored.",
		descriptionFull : "This fine gold pendant boasts a small, golden charm depicting two upturned, open hands with long, graceful fingers holding a set of three small crystals. It does have one minor drawback. Unless the wielder is a construct or of fey origin (including elves and half-elves), they suffer a non-life threatening allergic reaction during the entire short rest they are attuning to the item, as well as for 2d4 rounds after each use. The allergic reaction may take the form of sneezing, coughing, itching, or watery eyes and may vary from use to use. While you wear this pendant, you stabilize whenever you are dying at the start of your turn. In addition, whenever you roll a Hit Die to regain hit points, double the number of hit points it restores.",
		attunement : true,
		weight : 1
	},
	"periapt of wound closure (ccc-bmg-moon3-1)" : {   // contains contributions by AelarTheElfRogue
		name : "Periapt of Wound Closure (CCC-BMG-MOON3-1)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "This necklace is made from a single piece of quartz crystal on a band woven from the grey beard hairs of an ancient dwarven clan leader. Attuning to it makes you very thirsty for ale. While wearing the periapt, you stabilize whenever you're dying at the start of your turn. Also, when you roll a Hit Die to regain hit points, double the amount restored.",
		descriptionFull : "This necklace is comprised of a single piece of quartz crystal, held to the wearer’s neck by a band made from the woven grey beard hairs of an ancient dwarven clan leader. Attuning to it makes the wearer very thirsty for ale.\n   While you wear this pendant, you stabilize whenever you are dying at the start of your turn. In addition, whenever you roll a Hit Die to regain hit points, double the number of hit points it restores.",
		attunement : true,
		weight : 1
	},
	"periapt of wound closure (ccc-thent1-2)" : {   // contains contributions by AelarTheElfRogue
		name : "Periapt of Wound Closure (CCC-THENT1-2)",
		source : [["AL","S5"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "Silvered hummingbird wings holding a clear crystal make up this pendant. Whem its magic is used, the crystal takes on a deep red hue that fades away at the next dawn. While wearing this pendant, you stabilize whenever you are dying at the start of your turn. In addition, when you roll a Hit Die to regain hp, double the number of hit points restored.",
		descriptionFull : "Silvered wings, like those of a hummingbird, hold between them a clear crystal. If the effect of the pendant occurs, the crystal takes on a deep red hue, which fades away at the next dawn. While you wear this pendant, you stabilize whenever you are dying at the start of your turn. In addition, whenever you roll a Hit Die to regain hit points, double the number of hit points it restores.",
		attunement : true,
		weight : 1
	},
	"periapt of wound closure (ddep5-2)" : {   // contains contributions by AelarTheElfRogue
		name : "Periapt of Wound Closure (DDEP5-2)",
		source : [["AL","S5"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "This wide, leather choker is set w a blood-red stone the size of a man’s fist. The stone glows with a faint red light that pulses in time with the wearer’s heartbeat. While wearing this pendant, you stabilize whenever you are dying at the start of your turn. In addition, when you roll a Hit Die to regain hp, double the number of hit points restored.",
		descriptionFull : "This wide, leather choker is set with a blood-red stone the size of a man’s fist. The stone glows with a faint red light that pulses in time with the wearer’s heartbeat. While you wear this pendant, you stabilize whenever you are dying at the start of your turn. In addition, whenever you roll a Hit Die to regain hit points, double the number of hit points it restores.",
		attunement : true,
		weight : 1
	},
	"scarab of protection (ddal7-18)" : {
		name : "Scarab of Protection (DDAL7-18)",
		source : [["AL","S7"]],
		rarity : "legendary",
		magicItemTable : "I",
		description : "This pin is carved in the likeness of Moa the Jaculi, trickster god of Omu. While wearing this scarab, you are hidden from scrying while asleep but it becomes unattuned if you lie. The pin grants adv. on saves against spells. If you fail a save against a necromancy spell or an effect from an undead, you can expend 1 charge as a reaction to succeed. The scarab has 12 charges & crumbles into dust once used up.",
		descriptionFull : "This pin is carved in the likeness of Moa the Jaculi, trickster god of Omu. While you wear this scarab, you are hidden from scrying while you sleep but if you ever tell a lie the scarab becomes unattuned. If you hold this medallion in your hand for 1 round, an inscription appears on its surface revealing its magical nature. It provides two benefits while it is on your person:\n \u2022 You have advantage on saving throws against spells.\n \u2022 The scarab has 12 charges. If you fail a saving throw against a necromancy spell or a harmful effect originating from an undead creature, you can use your reaction to expend 1 charge and turn the failed save into a successful one. The scarab crumbles into powder and is destroyed when its last charge is expended.",
		attunement : true,
		savetxt : { adv_vs : ["spells"] },
		limfeaname : "Scarab of Protection",
		usages : 12,
		recovery : "Never",
		action : [["reaction", ""]]
	},
	"scarab of protection (ddal-drw08)" : {
		name : "Scarab of Protection (DDAL-DRW08)",
		source : [["AL","DRW"]],
		rarity : "legendary",
		magicItemTable : "I",
		description : "This particular medallion is made of coral and shaped like a crab. It hangs on a kelp necklace. The scarab grants adv. on saves against spells. If you fail a save against a necromancy spell or an effect from an undead, you can expend 1 charge as a reaction to succeed. The scarab has 12 charges & crumbles into dust once the last charge is used.",
		descriptionFull : "This particular medallion is made of coral and shaped like a crab. It hangs on a kelp necklace. If you hold this medallion in your hand for 1 round, an inscription appears on its surface revealing its magical nature. It provides two benefits while it is on your person:\n \u2022 You have advantage on saving throws against spells.\n \u2022 The scarab has 12 charges. If you fail a saving throw against a necromancy spell or a harmful effect originating from an undead creature, you can use your reaction to expend 1 charge and turn the failed save into a successful one. The scarab crumbles into powder and is destroyed when its last charge is expended.",
		attunement : true,
		savetxt : { adv_vs : ["spells"] },
		limfeaname : "Scarab of Protection",
		usages : 12,
		recovery : "Never",
		action : [["reaction", ""]]
	},
	"ward of the martyr (ccc-tarot1-3)" : { // contributed by AelarTheElfRogue
		name : "Ward of the Martyr (Periapt of Health)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "C",
		description : "This periapt of health takes the form of a pair of silver bound hands on a rope made of the hair of penitents. A priest of Ilmater may use it as a holy symbol. You are immune to contracting any disease while you wear this pendant. If you are already infected with a disease, the effects of the disease are suppressed.",
		weight : 1,
		savetxt : { immune : ["disease"] }
	},
}

MagicItemsList["al outerwear"] = {
		name : "AL Outerwear",
		allowDuplicates : true,
		type : "wondrous item",
	choices : ["Cape of the Mountebank (DDAL4-7)","Cloak of Arachnida (DDAL9-12)","Cloak of the Bat (CCC-BMG-44 PHLAN4-2)","Cloak of the Bat (DDEP7-1)","Cloak of the Bat (DDHC-MORD-01)","Cloak of Billowing (DDHC-XGE-01)","Cloak of Displacement (CCC-SFBAY-2-1)","Cloak of Displacement (DDAL5-5)","Cloak of Elvenkind (DDEX1-8)", "Cloak of Invisibility (DDEP6-3)","Cloak of Many Fashions (CCC-GSP1-3)","Cloak of Many Fashions (CCC-ROLL20-2)","Cloak of Protection (CCC-BWM-4-2)","Cloak of Protection (CCC-WWC-4)","Cloak of Protection (DDEP2)","Cloak of Protection (DDAL6-1)","Cloak of Protection (DDAL8-6)","Cloak of Protection (DDIA04)","Cosmic Chasuble, Robe of Stars (CCC-TRI-28)","Dryad's Cloak (DDAL0-2A)","Gray Robe of the Archmagi (DDAL0-3)","Llyneth’s Cloak of Mists (CCC-BMG-MOON2-3)","Mantle of Freedom (CCC-TAROT2-8)","Mantle of Spell Resistance (DDEX1-13)","Mantle of Spell Resistance (DDEP9-1)","Ordine Sage's Robes (CCC-TAROT1-1)","Piwafwi Cloak of Elvenkind (CCC-GARY-7)","Robe of Eyes (CCC-BMG-42 HULB4-3)","Robe of Eyes (DDEX1-14)","Robe of Scintillating Colors (CCC-TRI-1)","Robe of Stars (DDEX3-16)","Robe of Useful Items (CCC-GSP-PHIL1-3)","Robe of Useful Items (CCC-KUMORI-1-2)","Robe of Useful Items (DDAL10-4)","Sea Hag's Cloak (CCC-GAD1-1)","Thayvian Mantle of Spell Resistance (CCC-ST2-1)","Wings of Flying (CCC-TRI-4)","Wings of Flying (DDEP2)","Winter Wolf Cloak (DDAL0-13)"],
	"cape of the mountebank (ddal4-7)" : {  // contains contributions by Smashman
		name : "Cape of the Mountebank (DDAL4-7)",
		source : [["AL","S4"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "This long cape is made of light-grey silk trimmed in coarse, black fur. Although obviously high quality, it appears tattered & worn & smells faintly of brimstone. You can use the cape to cast Dimension Door as an action once per day. When you disappear, you leave behind a cloud of stale dust & appear in a similar cloud at your destination. The dust lightly obscures both spaces & dissipates at the end of your next turn, or in a light or stronger wind.",
		descriptionFull : "This long cape is made of light-grey silk trimmed in coarse, black fur. Although it is obviously of high quality, it appears tattered and worn. Instead of smoke, a cloud of stale dust is left behind when the wearer disappears. This cape smells faintly of brimstone. While wearing it, you can use it to cast the Dimension Door spell as an action. This property of the cape can't be used again until the next dawn.\n   When you disappear, you leave behind a cloud of smoke, and you appear in a similar cloud of smoke at your destination. The smoke lightly obscures the space you left and the space you appear in, and it dissipates at the end of your next turn. A light or stronger wind disperses the smoke.",
		limfeaname : "Cape of the Mountebank",
		usages : 1,
		recovery : "dawn",
		spellcastingBonus : {
			name: "Cape of the Mountebank",
			spells: ["dimension door"],
			selection: ["dimension door"],
			firstCol : "oncelr"
			}
		},
	"cloak of arachnida (ddal9-12)" : {
		name : "Cloak of Arachnida (DDAL9-12)",
		source : [["AL","S9"]],
		rarity : "very rare",
		magicItemTable : "H",
		description : "This cloak has been in Avernus for eons, worn in constant conflict, and whispers warnings to its bearer. While actively using its properties, you feel a harmless flash of pain, and gain a +2 bonus to initiative when not incapacitated. The cloak grants resistance to poison dmg, climbing speed equal to your walking speed, even along vertical surfaces and upside down while keeping your hands free, immunity to being caught in webs, the ability to move through webs as if difficult terrain, & the ability to cast Web once per dawn.",
		descriptionFull : "This cloak has been in Avernus for ages and been worn in constant conflict. While actively using any properties of the item, the bearer experiences a harmless flash of pain. In addition, the cloak whispers warnings to its bearer, granting a +2 bonus to initiative if the bearer isn’t incapacitated. This fine garment is made of black silk interwoven with faint silvery threads. While wearing it, you gain the following benefits:\n \u2022 You have resistance to poison damage.\n \u2022 You have a climbing speed equal to your walking speed.\n \u2022 You can move up, down, and across vertical surfaces and upside down along ceilings, while leaving your hands free.\n \u2022 You can't be caught in webs of any sort and can move through webs as if they were difficult terrain.\n \u2022 You can use an action to cast the Web spell (save DC 13). The web created by the spell fills twice its normal area. Once used, this property of the cloak can't be used again until the next dawn.",
		attunement : true,
		addMod : { type : "skill", field : "Init", mod : 2, text : "+2 bonus on initiative rolls." },
		limfeaname : "Cloak of Arachnida",
		usages : 1,
		recovery : "dawn",
		additional : "cast web",
		fixedDC : 13,
		speed : { climb : { spd : "walk", enc : "walk" } },
		spellcastingBonus : {
			name : "Once per dawn",
			spells : ["web"],
			selection : ["web"],
			firstCol : "oncelr"
		},
		spellChanges : {
			"web": {
				description : "2\xD7 20-ft cubes, anchored, all save or restrained; dif. ter.; lightly obscures; Str check vs. DC 13 to free"
			}
		}
	},
	"cloak of the bat (ccc-bmg-44 phlan4-2)" : {
		name : "Cloak of the Bat (CCC-BMG-44 PHLAN4-2)",
		source : [["AL","CCC"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "This tattered black cloak is so dark it seems to absorb light & so fine that it's tossed fiercely in the slightest breeze. The cloak grants adv. on Stealth (Dex) checks. In dim light/darkness, you can fly w/ the cloak &, once/dawn, use it to transform into a bat as if casting Polymorph. To fly, at 40 ft speed, you must grip its edges w/ both hands. While in the form of the bat, you retain your Int., Wis., & Charisma scores.",
		descriptionFull : "A tattered black cloak that seems so dark that it absorbs light, and so fine that it can be tossed about fiercely in even the slightest breeze.\n   While wearing this cloak, you have advantage on Dexterity (Stealth) checks. In an area of dim light or darkness, you can grip the edges of the cloak with both hands and use it to fly at a speed of 40 feet. If you ever fail to grip the cloak's edges while flying in this way, or if you are no longer in dim light or darkness, you lose this flying speed.\n   While wearing the cloak in an area of dim light or darkness, you can use your action to cast Polymorph on yourself, transforming into a bat. While you are in the form of the bat, you retain your Intelligence, Wisdom, and Charisma scores. The cloak can't be used this way again until the next dawn.",
		attunement : true,
		limfeaname : "Cloak of the Bat",
		usages : 1,
		recovery : "dawn",
		additional : "Polymorph",
		advantages : [["Stealth", true]],
		spellcastingBonus : {
			name : "Only self into bat",
			spells : ["polymorph"],
			selection : ["polymorph"],
			firstCol : "oncelr"
		},
		spellChanges : {
			"polymorph" : {
				range : "Self",
				description : "Only cast in dim light or darkness; I transform into a bat, gaining its stats, but I keep my Int, Wis, Cha",
				changes : "The spell can only turn the wearer into a bat, but the wearer keeps its Intelligence, Wisdom, and Charisma scores."
			}
		}
	},
	"cloak of the bat (ddep7-1)" : {
		name : "Cloak of the Bat (DDEP7-1)",
		source : [["AL","S7"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "This leathery cloak is made of the small, green scales of a pteranodon. While attuned, you gain a powerful appetite for fish. This cloak grants adv. on Stealth (Dex) checks. In dim light/darkness, you can fly w/ the cloak &, once/dawn, use it to transform into a bat as if casting Polymorph. To fly, at 40 ft speed, you must grip its edges w/ both hands. While in the form of the bat, you retain your Int., Wis., & Charisma scores.",
		descriptionFull : "This leathery cloak is made of the small, green scales of a pteranodon. When attuned to, the wearer gains a powerful appetite for fish. While wearing this cloak, you have advantage on Dexterity (Stealth) checks. In an area of dim light or darkness, you can grip the edges of the cloak with both hands and use it to fly at a speed of 40 feet. If you ever fail to grip the cloak's edges while flying in this way, or if you are no longer in dim light or darkness, you lose this flying speed.\n   While wearing the cloak in an area of dim light or darkness, you can use your action to cast Polymorph on yourself, transforming into a bat. While you are in the form of the bat, you retain your Intelligence, Wisdom, and Charisma scores. The cloak can't be used this way again until the next dawn.",
		attunement : true,
		limfeaname : "Cloak of the Bat",
		usages : 1,
		recovery : "dawn",
		additional : "Polymorph",
		advantages : [["Stealth", true]],
		spellcastingBonus : {
			name : "Only self into bat",
			spells : ["polymorph"],
			selection : ["polymorph"],
			firstCol : "oncelr"
		},
		spellChanges : {
			"polymorph" : {
				range : "Self",
				description : "Only cast in dim light or darkness; I transform into a bat, gaining its stats, but I keep my Int, Wis, Cha",
				changes : "The spell can only turn the wearer into a bat, but the wearer keeps its Intelligence, Wisdom, and Charisma scores."
			}
		}
	},
	"cloak of the bat (ddhc-mord-01)" : {
		name : "Cloak of the Bat (DDHC-MORD-01)",
		source : [["AL","MtoF"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "This cloak is made of hundreds of large, black feathers. It grants grants adv. on Stealth (Dex) checks. In dim light/darkness, you can fly w/ the cloak &, once/dawn, use it to transform into a raven as if casting Polymorph. To fly, at 40 ft speed, you must grip its edges w/ both hands. While in the form of the raven, you retain your Int., Wis., & Charisma scores.",
		descriptionFull : "This cloak is made of hundreds of large, black feathers. While wearing this cloak, you have advantage on Dexterity (Stealth) checks. In an area of dim light or darkness, you can grip the edges of the cloak with both hands and use it to fly at a speed of 40 feet. If you ever fail to grip the cloak's edges while flying in this way, or if you are no longer in dim light or darkness, you lose this flying speed.\n   While wearing the cloak in an area of dim light or darkness, you can use your action to cast Polymorph on yourself, transforming into a raven. While you are in the form of the raven, you retain your Intelligence, Wisdom, and Charisma scores. The cloak can't be used this way again until the next dawn.",
		attunement : true,
		limfeaname : "Cloak of the Bat (Raven)",
		usages : 1,
		recovery : "dawn",
		additional : "Polymorph",
		advantages : [["Stealth", true]],
		spellcastingBonus : {
			name : "Only self into raven",
			spells : ["polymorph"],
			selection : ["polymorph"],
			firstCol : "oncelr"
		},
		spellChanges : {
			"polymorph" : {
				range : "Self",
				description : "Only cast in dim light or darkness; I transform into a raven, gaining its stats, but I keep my Int, Wis, Cha",
				changes : "The spell can only turn the wearer into a raven, but the wearer keeps its Intelligence, Wisdom, and Charisma scores."
			}
		}
	},
	"cloak of billowing (ddhc-xge-01)" : {
		name : "Cloak of Billowing (DDHC-XGE-01)",
		source : [["AL","XGE"]],
		rarity : "common",
		magicItemTable : "?",
		description : "This magnificent sable cloak is inlaid with stitched alchemical formulae and smells of turpentine. While wearing this cloak, you can use a bonus action to make it billow dramatically.",
		action : [["bonus action", "Cloak of Billowing"]]
		},
	"cloak of displacement (ccc-sfbay-2-1)" : {   // contains contributions by Smashman
		name : "Cloak of Displacement (CCC-SFBAY-2-1)",
		source : [["AL","CCC"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "This cloak is made from a rare cloth found only in the Feywild and is covered in blue runes. While wearing the cloak, creatures have disadv. on atk rolls against you. If you take dmg, this property stops working until your next turn. It's also suppressed if you're incapacitated, restrained, or unable to move.",
		descriptionFull : "This item is a cloak made from a rare cloth found only in the Feywild. It is covered in blue runes. While you wear this cloak, it projects an illusion that makes you appear to be standing in a place near your actual location, causing any creature to have disadvantage on attack rolls against you. If you take damage, the property ceases to function until the start of your next turn. This property is suppressed while you are incapacitated, restrained, or otherwise unable to move.",
		attunement : true
	},
	"cloak of displacement (ddal5-5)" : {   // contains contributions by Smashman
		name : "Cloak of Displacement (DDAL5-5)",
		source : [["AL","S5"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "This cloak has a bone toggle & is made of the pelt of a smooth, black-furred creature. The gold-embroidered hem shows a poem: “Six men in pain; six men rent. Blood, it falls like rain; broken bodies bent. Six men plead & six men cry; Tearing arm & leg, six men die.”. While wearing the cloak, creatures have disadv. on atk rolls against you. If you take dmg, this property stops working until your next turn. It's also suppressed if you're incapacitated, restrained, or unable to move.",
		descriptionFull : "This cloak is made of the pelt of a smooth, black-furred creature. A bone toggle fastens the cloak around its wearer’s neck. Close examination of the gold-embroidered hem reveals a poem that reads (in Common): “Six men in pain; six men rent. Blood, it falls like rain; broken bodies bent. Six men plead; and six men cry; Tearing arm and leg, six men die.” While you wear this cloak, it projects an illusion that makes you appear to be standing in a place near your actual location, causing any creature to have disadvantage on attack rolls against you. If you take damage, the property ceases to function until the start of your next turn. This property is suppressed while you are incapacitated, restrained, or otherwise unable to move.",
		attunement : true
	},
	"cloak of elvenkind (ddex1-8)" : {
		name : "Cloak of Elvenkind (DDEX1-8)",
		source : [["AL","S1"]],
		rarity : "uncommon",
		magicItemTable : "F",
		attunement : true,
		description: "This supple light green cloak embroidered with a delicate leaf pattern makes you feel comfortable when worn, suffering no harm in temperatures from 0 ̊ F to 120 ̊ F. While you wear this cloak with its hood up, Wisdom (Perception) checks made to see you have disadv., & you have adv. on Dexterity (Stealth) checks made to hide, as the cloak's color shifts to camouflage you. Pulling the hood up or down requires an action.",
		descriptionFull: "This supple light green cloak embroidered with a delicate leaf pattern makes you feel comfortable when worn, suffering no harm from temperatures as cold as 0 ̊ Farenheit or as warm as 120 ̊ Farenheit. While you wear this cloak with its hood up, Wisdom (Perception) checks made to see you have disadvantage, and you have advantage on Dexterity (Stealth) checks made to hide, as the cloak's color shifts to camouflage you. Pulling the hood up or down requires an action.",
		action : [["action", "Cloak of Elvenkind (hood up/down)"]],
		savetxt : { immune : ["temps btwn 0 ̊ & 120 ̊ F"] },
		eval : function () {
			if (CurrentMagicItems.known.indexOf("boots of elvenkind") !== -1) {
				SetProf("advantage", true, ["Stealth", true], "Cloak and Boots of Elvenkind (magic items)");
			}
		},
		removeeval : function () {
			SetProf("advantage", false, ["Stealth", true], "Cloak and Boots of Elvenkind (magic items)");
		}
		},
	"cloak of invisibility (ddep6-3)" : {
		name : "Cloak of Invisibility (DDEP6-3)",
		source : [["AL","S6"]],
		rarity : "legendary",
		magicItemTable : "I",
		description : "Woven from the strands of an undead spider’s web, this sticky cloak renders the wearer invisible when the hood is up (as action). It smells of dust & a faintly cloying scent lingers when you move. Once/dawn, you can use your action to grow undead spider legs from the cloak & gain a 30ft climb speed on stone & webs for 10 min. While invisible, anything you carry or wear is invisible too. It works for 2 hours, in 1 min increments & regains 1 hr of use/uninterrupted 12 hrs of rest.",
		descriptionFull : "Woven from the strands of an undead spider’s web, this sticky cloak renders the wearer invisible when the hood is pulled over your head. It smells faintly of dust and has a faintly cloying lingering scent when you move. Additionally, you can use your action to sprout undead spider legs from the cloak and gain a climb speed of 30 feet on stone and webs for ten minutes; once you use this ability, you cannot use it again until the following dawn.\n   While you are invisible, anything you are carrying or wearing is invisible with you. You become visible when you cease wearing the hood. Pulling the hood up or down requires an action.\n   Deduct the time you are invisible, in increments of 1 minute, from the cloak's maximum duration of 2 hours. After 2 hours of use, the cloak ceases to function. For every uninterrupted period of 12 hours the cloak goes unused, it regains 1 hour of duration.",
		attunement : true,
		limfeaname : "Cloak of Invisibility",
		action : [["action", " (hood up/down, climb speed)"]],
		usages : "120 min",
		recovery : "Special",
		additional : "regain 1h/12h",
		extraLimitedFeatures : [{
			name : "Cloak of Invis. (30ft climb speed)",
			usages : 1,
			recovery : "dawn"
		}],
	},
	"cloak of many fashions (ccc-gsp1-3)" : { 
		name : "Cloak of Many Fashions (CCC-GSP1-3)",
		source : [["AL","CCC"]],
		rarity : "common",
		magicItemTable : "?",
		description : "This cloak is bright orange with large brown diagonal lines. Its fine quality and the brand, “Cadorna,” is embroidered on the inside. As a bonus action while wearing the cloak, you can change the style, color, and apparent quality of the garment. The cloak's weight doesn't change. Although it can duplicate the look of other magic cloaks, it doesn't gain their properties.",
		descriptionFull : "This is a bright orange cloak and designed with large brown diagonal lines. This garment is of fine quality and underneath, the brand, “Cadorna,” is embroidered on it.\n   While wearing this cloak, you can use a bonus action to change the style, color, and apparent quality of the garment. The cloak's weight doesn't change. Regardless of its appearance, the cloak can't be anything but a cloak. Although it can duplicate the appearance of other magic cloaks, it doesn't gain their magical properties.",
		action : [["bonus action", "Cloak of Many Fashions"]]
	},
	"cloak of many fashions (ccc-roll20-2)" : { 
		name : "Cloak of Many Fashions (CCC-ROLL20-2)",
		source : [["AL","CCC"]],
		rarity : "common",
		magicItemTable : "?",
		description : "This cloak is part of the Reclamator uniform. They wear the cloak w/ a rugged brown appearance & a large ribbed collar, or as a black cloak w/ wolf fur along the collar. As a bonus action while wearing it, you can change the style, color, & apparent quality of the garment. The cloak's weight doesn't change. It can duplicate the look of other magic cloaks, but doesn't gain their properties.",
		descriptionFull : "This cloak is worn as part of the Reclamator uniform. Reclamators normally wear the cloak with a rugged brown appearance and a large ribbed collar. In certain circumstances, Reclamators choose to use a modified version of their cloaks; black with wolf fur along the collar.\n   While wearing this cloak, you can use a bonus action to change the style, color, and apparent quality of the garment. The cloak's weight doesn't change. Regardless of its appearance, the cloak can't be anything but a cloak. Although it can duplicate the appearance of other magic cloaks, it doesn't gain their magical properties.",
		action : [["bonus action", "Cloak of Many Fashions"]]
	},
	"cloak of protection (ccc-bwm-4-2)" : { 
		name : "Cloak of Protection (CCC-BWM-4-2)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "This cloak displays a dizzying variety of eyes, including some that look decidedly otherworldly. These blind eyes stare sightlessly in all directions. You gain a +1 bonus to AC & saving throws while you wear this cloak.",
		descriptionFull : "This cloak displays a dizzying variety of eyes, including some that look decidedly otherworldly. These blind eyes stare sightlessly in all directions. You gain a +1 bonus to AC & saving throws while you wear this cloak.",
		attunement : true,
		extraAC : [{name : "Cloak of Protection", mod : 1, magic : true, text : "I gain a +1 bonus to AC while attuned."}],
		addMod : [{ type : "save", field : "all", mod : 1, text : "While I wear the Cloak of Protection, I gain a +1 bonus to all my saving throws." }]
	},
	"cloak of protection (ccc-wwc-4)" : { 
		name : "Cloak of Protection (CCC-WWC-4)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "This crimson cloak is made of heavy wool. It has black edging & an interior of amber silk. The golden clasp resembles two interlocking hands. You gain a +1 bonus to AC & saving throws while you wear this cloak.",
		descriptionFull : "This crimson cloak is made of heavy wool. It contains black edging and an interior of amber silk. Its golden clasp resembles two interlocking hands. You gain a +1 bonus to AC & saving throws while you wear this cloak.",
		attunement : true,
		extraAC : [{name : "Cloak of Protection", mod : 1, magic : true, text : "I gain a +1 bonus to AC while attuned."}],
		addMod : [{ type : "save", field : "all", mod : 1, text : "While I wear the Cloak of Protection, I gain a +1 bonus to all my saving throws." }]
	},
	"cloak of protection (ddep2)" : { 
		name : "Cloak of Protection (DDEP2)",
		source : [["AL","S2"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "This cloak is more of a mantle, covering only your shoulders & head with the hood drawn. It's made of scales of thin stone, studded with small crystals & sewn together with fine golden wire. You gain a +1 bonus to AC & saving throws while you wear this cloak.",
		descriptionFull : "This cloak is more a mantle; covering only the shoulders and head with the hood drawn. However, it is made of what appears to be scales of thin stone, studded with small crystals and sewn together with fine, golden wire. You gain a +1 bonus to AC & saving throws while you wear this cloak.",
		attunement : true,
		extraAC : [{name : "Cloak of Protection", mod : 1, magic : true, text : "I gain a +1 bonus to AC while attuned."}],
		addMod : [{ type : "save", field : "all", mod : 1, text : "While I wear the Cloak of Protection, I gain a +1 bonus to all my saving throws." }]
	},
	"cloak of protection (ddal6-1)" : { 
		name : "Cloak of Protection (DDAL6-1)",
		source : [["AL","S6"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "Made of tattered, patched canvas & stitched together with coarse twine, a homelier cloak you'll never see. The only exceptional part of the beastly thing is the saucer-sized black dragon scale that hangs over your chest when the cloak is worn. It's glossy & bears the sigil of Nightscale herself. You gain a +1 bonus to AC & saving throws while you wear this cloak.",
		descriptionFull : "Made of tattered, patched canvas and stitched together with thick, coarse twine, a homelier cloak you'll likely never see. The only exceptional part of the beastly thing is the saucer-sized black dragon scale that hangs over the wearer's chest when the cloak is worn. It is glossy & bears the sigil of Nightscale herself. You gain a +1 bonus to AC & saving throws while you wear this cloak.",
		attunement : true,
		extraAC : [{name : "Cloak of Protection", mod : 1, magic : true, text : "I gain a +1 bonus to AC while attuned."}],
		addMod : [{ type : "save", field : "all", mod : 1, text : "While I wear the Cloak of Protection, I gain a +1 bonus to all my saving throws." }]
	},
	"cloak of protection (ddal8-6)" : { 
		name : "Cloak of Protection (DDAL8-6)",
		source : [["AL","S8"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "While wearing this dark red cape, your skin takes on a deathly pallor and you gain a +1 bonus to AC & saving throws.",
		attunement : true,
		extraAC : [{name : "Cloak of Protection", mod : 1, magic : true, text : "I gain a +1 bonus to AC while attuned."}],
		addMod : [{ type : "save", field : "all", mod : 1, text : "While I wear the Cloak of Protection, I gain a +1 bonus to all my saving throws." }]
	},
	"cloak of protection (ddia04)" : { 
		name : "Cloak of Protection (DDIA04)",
		source : [["AL:SE","CoS"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "This heavy black cloak is made of rough wool with a hood trimmed in black wolf fur. When worn, you find that your sense of smell is heightened - as is your hunger for undercooked meat. The cloak grants a +2 bonus to initiative checks & a +1 bonus to AC & saving throws.",
		descriptionFull : "This heavy black cloak is made of rough wool with a hood trimmed in black wolf fur. When worn, the wearer finds that their sense of smell is heightened - as is their hunger for undercooked meat. The cloak grants a +2 bonus to initiative checks and you gain a +1 bonus to AC & saving throws.",
		attunement : true,
		extraAC : [{name : "Cloak of Protection", mod : 1, magic : true, text : "I gain a +1 bonus to AC while attuned."}],
		addMod : [
			{ type : "save", field : "all", mod : 1, text : "While I wear the Cloak of Protection, I gain a +1 bonus to all my saving throws." },
			{ type : "skill", field : "Init", mod : 2, text : "+2 bonus on initiative rolls." }
		],
	},
	"cosmic chasuble, robe of stars (ccc-tri-28)" : {    // contains contributions by SoilentBrad
		name : "Cosmic Chasuble, Robe of Stars (CCC-TRI-28)",
		source : [["AL","S3"]],
		rarity : "very rare",
		magicItemTable : "H",
		description : "This deep blue ritual gown is covered in fine embroidery of suns, stars, moons & other heavenly bodies. At night, the ornaments swirl & whirl, traveling slowly across the robe. While wearing it, you gain +1 to saves & dream of far worlds & alien landscapes. 6 stars are special. As an action, remove 1 star to cast Magic Missile at 5th-lvl. Daily at dusk, 1d6 removed stars reappear. While wearing the robe, you can enter the Astral Plane w/ an action. You remain there until you return to the previous plane w/ another action. You reappear in the same space, or the nearest unoccupied space.",
		descriptionFull : "An exquisite ritual gown, this deep blue garment is covered in finely detailed embroidery depicting suns, stars, moons, planets and other heavenly bodies. At night, these embroidered ornaments swirl and whirl, traveling slowly across the robe’s fibers. If you sleep in it, you dream of far worlds and alien landscapes. You gain a +1 bonus to saving throws while you wear it.\n   Six stars, located on the robe's upper front portion, are particularly large. While wearing this robe, you can use an action to pull off one of the stars and use it to cast Magic Missile as a 5th-level spell. Daily at dusk, 1d6 removed stars reappear on the robe.\n   While you wear the robe, you can use an action to enter the Astral Plane along with everything you are wearing and carrying. You remain there until you use an action to return to the plane you were on. You reappear in the last space you occupied, or if that space is occupied, the nearest unoccupied space.",
		attunement : true,
		weight : 4,
		limfeaname : "Robe of Stars",
		action : [["action", ""]],
		usages : 6,
		recovery : "Dusk",
		additional : "regains 1d6",
		addMod: [{ type: "save", field: "all", mod: 1, text: "While wearing the Robe of Stars, I gain a +1 bonus to all my saving throws." }],
		spellFirstColTitle: "Ch",
		spellcastingBonus: {
			name: "1 charge",
			spells: ["magic missile"],
			selection: ["magic missile"],
			firstCol: 1
		},
		spellChanges : {
			"magic missile" : {
				description : "8 darts hit creature(s) I can see for 1d4+1 Force dmg per dart",
				changes : "Magic Missile cast from the Robe of Stars is always at 5th-level."
				}
			}
		},
	"dryad's cloak (ddal0-2a)" : { 
		name : "Dryad's Cloak (Cloak of Protection)",
		source : [["AL","S0"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "This cloak reflects the color of the seasons; green in summer, gold in autumn, mottled brown in winter and in spring is mottled in pale shades of green and cream. While wearing this cloak, you gain a +1 bonus to AC & saving throws.",
		attunement : true,
		extraAC : [{name : "Cloak of Protection", mod : 1, magic : true, text : "I gain a +1 bonus to AC while attuned."}],
		addMod : [{ type : "save", field : "all", mod : 1, text : "While I wear the Cloak of Protection, I gain a +1 bonus to all my saving throws." }]
	},
	"gray robe of the archmagi (ddal0-3)" : { // contains contributions by SoilentBrad
		name : "Gray Robe of the Archmagi (DDAL0-3)",
		source : [["AL","S0"]],
		rarity : "legendary",
		magicItemTable : "I",
		description : "Originally crafted during the height of the Netherese Empire, this robe is a warm gray color & very plush. It is stitched with silver thread & the back is covered by Rhaugilath’s arcane sigil mixed with the sign of Mystryl. While wearing the robe, you have adv. on saves against spells & magical effects & add +2 to both your spell save DC & spell atk rolls. Also, if not wearing armor, your base AC is 15 + Dex modifier.",
		descriptionFull : "Originally crafted during the height of the Netherese Empire, this robe is a warm gray color and very plush. It is stitched with silver thread and the back is covered by Rhaugilath’s arcane sigil mixed with the sign of Mystryl. You must be of Neutral alignment to attune to this robe.\n   You gain these benefits while wearing the robe:\n \u2022 If you aren't wearing armor, your base Armor Class is 15 + your Dexterity modifier.\n \u2022 You have advantage on saving throws against spell and other magical effects.\n \u2022 Your spell save DC and spell attack bonus each increase by 2.",
		attunement : true,
		prerequisite : "Requires attunement by a neutral sorcerer, warlock, or wizard",
		prereqeval : function(v) { return (classes.known.sorcerer || classes.known.warlock || classes.known.wizard) && !(/good|evil/i).test(What("Alignment")); },
		weight : 4,
		savetxt : { adv_vs : ["spells", "magical effects"] },
		calcChanges : {
			spellCalc : [
				function (type, spellcasters, ability) {
					if (type != "prepare") return 2;
				},
				"While wearing the Robe of the Archmagi my spell save DC and spell attack bonus each increase by 2."
			]
		},
		armorAdd: "Gray Robe of the Archmagi",
		armorOptions: [{
			regExpSearch: /^(?=.*robe)(?=.*gray)(?=.*(archmage|archmagi)).*$/i,
			name : "Gray Robe of the Archmagi",
			source : [["AL","S0"]],
			ac : 15,
			weight : 4
		}]
	},
	"llyneth’s cloak of mists (ccc-bmg-moon2-3)" : {
		name : "Llyneth’s Cloak of Mists (Cloak of Elvenkind)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "F",
		attunement : true,
		description: "This cloak is made of fine gray wool & edged with embroidered silver knotwork. The wool blends into the mists of the Moonshaes. The inside is lined with small pockets for holding herbs or spell components. While you wear this cloak with its hood up, Wis (Perception) checks made to see you have disadv., & you have adv. on Dex (Stealth) checks made to hide, as the cloak's color shifts to camouflage you. Pulling the hood up or down requires an action.",
		descriptionFull: "This cloak is made of fine gray wool and edged with embroidered silver knotwork. The wool blends into the mists common in the Moonshaes. The inside is lined with small pockets perfect for holding herb samples or spell components.\n   While you wear this cloak with its hood up, Wisdom (Perception) checks made to see you have disadvantage, and you have advantage on Dexterity (Stealth) checks made to hide, as the cloak's color shifts to camouflage you. Pulling the hood up or down requires an action.",
		action : [["action", "Cloak of Elvenkind (hood up/down)"]],
		eval : function () {
			if (CurrentMagicItems.known.indexOf("boots of elvenkind") !== -1) {
				SetProf("advantage", true, ["Stealth", true], "Cloak and Boots of Elvenkind (magic items)");
			}
		},
		removeeval : function () {
			SetProf("advantage", false, ["Stealth", true], "Cloak and Boots of Elvenkind (magic items)");
		}
	},
	"mantle of freedom (ccc-tarot2-8)" : {
		name : "Mantle of Freedom (Cloak of Billowing)",
		source : [["AL","CCC"]],
		rarity : "common",
		magicItemTable : "?",
		description : "This cloak is made of stark white silk embroidered with golden thread in the shape of two grand wings. It seems to be the result of a failed attempt to create wings of flying. While wearing this cloak, you can use a bonus action to make it billow dramatically.",
		descriptionFull : "This cloak is made of stark white silk embroidered with golden thread in the shape of two grand wings. Those with arcane ability might note it appears to be the result of a failed attempt at creating wings of flying. While wearing this cloak, you can use a bonus action to make it billow dramatically.",
		action : [["bonus action", "Cloak of Billowing"]]
		},
	"mantle of spell resistance (ddex1-13)" : {
		name : "Mantle of Spell Resistance (DDEX1-13)",
		source : [["AL","S1"]],
		rarity : "rare",
		magicItemTable : "G",
		attunement : true,
		savetxt : { adv_vs : ["spells"] },
		description: "This fine linen crimson cloak is edged with cloth-of-gold, and bears a gold clasp. The wearer’s ears tingle when a spell targets the wearer, whether or not it takes effect. While attuned to and wearing this cloak, you have advantage on saving throws against spells."
		},
	"mantle of spell resistance (ddep9-1)" : {
		name : "Mantle of Spell Resistance (DDEP9-1)",
		source : [["AL","S9"]],
		rarity : "rare",
		magicItemTable : "G",
		attunement : true,
		savetxt : { adv_vs : ["spells"] },
		description: "This sleeveless shawl is made from the stitched skin of many demons and devils. While attuned to and wearing this cloak, you have advantage on saving throws against spells."
		},
	"ordine sage's robes (ccc-tarot1-1)" : {
		name : "Ordine Sage's Robes (Robe of Useful Items)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "B",
		description : "This white robe has gold detailing & very orderly patterns. The robe gives you a sense of assuredness, as if there's a purpose to everything. As an action while donned, you can detach 1 patch, which becomes the item shown. The robe turns ordinary once out of patches. It has 4 patches determined by DM, 4 potions of healing, 1st lvl spell scroll, 100 gp, a mechanical riding horse w/ saddle bags & 2 each: dagger, bullseye lantern (filled & lit), steel mirror, 10-ft pole, 50 ft hemp rope, sack.",
		descriptionFull : "This white robe has gold detailing, and all of its patterns look very orderly. The robe itself gives its wearer a sense of assuredness, as if there is a purpose to every action taken and seen. While wearing the robe, you can use an action to detach one of the patches, causing it to become the object or creature it represents. Once the last patch is removed, the robe becomes an ordinary garment.\n\nThe robe has two of each of the following patches:\n \u2022 Dagger\n \u2022 Bullseye lantern (filled and lit)\n \u2022 Steel mirror\n \u2022 10-foot pole\n \u2022 Hempen rope (50 feet, coiled)\n \u2022 Sack\n\nIn addition, the robe has 4 potions of healing, 1st lvl spell scroll, 100 gp, a mechanical riding horse w/ saddle bags & 4 patches determined by the DM. The DM chooses the patches or determines them randomly.\n\n" + toUni("d100\tPatch") + "\n01-08\tBag of 100 gp\n09-15\tSilver coffer (1 foot long, 6 inches wide and deep) worth 500 gp\n16-22\tIron door (up to 10 feet wide and 10 feet high, barred on one side of your choice), which you can place in an opening you can reach; it conforms to fit the opening, attaching and hinging itself\n23-30\t10 gems worth 100 gp each\n31-44\tWooden ladder (24 feet long)\n45-51\tA riding horse with saddle bags\n52-59\tPit (a cube 10 feet on a side), which you can place on the ground within 10 feet of you\n60-68\t4 potions of healing\n69-75\tRowboat (12 feet long)\n76-83\tSpell scroll containing one spell of 1st to 3rd level\n84-90\t2 mastiffs\n91-96\tWindow (2 feet by 4 feet, up to 2 feet deep), which you can place on a vertical surface you can reach\n97-00\tPortable ram",
		weight : 4,
		action : ["action", "Robe of Useful Items"],
	},
	"piwafwi cloak of elvenkind (ccc-gary-7)" : {
		name : "Piwafwi Cloak of Elvenkind (CCC-GARY-7)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "F",
		attunement : true,
		description: "This silky black cloak is clearly of drow manufacture & loses its magic if exposed to sunlight for 1 hr uninterrupted. While you wear this cloak with its hood up, Wis (Perception) checks made to see you have disadv., & you have adv. on Dex (Stealth) checks made to hide, as the cloak's color shifts to camouflage you. Pulling the hood up or down requires an action.",
		descriptionFull: "This silky black cloak is clearly of drow manufacture & loses its magic if exposed to sunlight for 1 hr uninterrupted. While you wear this cloak with its hood up, Wisdom (Perception) checks made to see you have disadvantage, and you have advantage on Dexterity (Stealth) checks made to hide, as the cloak's color shifts to camouflage you. Pulling the hood up or down requires an action.",
		action : [["action", "Cloak of Elvenkind (hood up/down)"]],
		eval : function () {
			if (CurrentMagicItems.known.indexOf("boots of elvenkind") !== -1) {
				SetProf("advantage", true, ["Stealth", true], "Cloak and Boots of Elvenkind (magic items)");
			}
		},
		removeeval : function () {
			SetProf("advantage", false, ["Stealth", true], "Cloak and Boots of Elvenkind (magic items)");
		}
	},
	"robe of eyes (ccc-bmg-42 hulb4-3)" : {   // contains contributions by SoilentBrad
		name : "Robe of Eyes (CCC-BMG-42 HULB4-3)",
		source : [["AL","CCC"]],
		rarity : "rare",
		magicItemTable : "G",
		description: "The strange robe is adorned with eyelike patterns. It moves to an unseen wind & feels oddly warm to the touch. When worn, you hear distant soft whispers easily lost among regular sounds. Sometimes you think they form words of advice & wisdom. The robe gives adv. on sight-based Perception checks, 360 degree vision, see invisible/ethereal out to 120 ft, darkvision 120 ft, but you can't close or avert your eyes. If Light is cast on it or Daylight w/i 5 ft, you're blinded for 1 min. Con save (DC 11-Light, 15-Daylight) at end of turn to end.",
		descriptionFull : "The strange robe seems to move around to some unseen wind and it feels oddly warm to the touch. When worn you hear distant soft whispers easily lost against regular background sounds. There are no individual words, but sometimes you think you actually do understand its words of advice and wisdom.\n   This robe is adorned with eyelike patterns. While you wear the robe, you gain the following benefits:\n \u2022 The robe lets you see in all directions, and you have advantage on Wisdom (Perception) checks that rely on sight.\n \u2022 You have darkvision out to a range of 120 feet.\n \u2022 You can see invisible creatures and objects, as well as see into the Ethereal Plane, out to a range of 120 feet.\n\nThe eyes on the robe can't be closed or averted. Although you can close or avert your own eyes, you are never considered to be doing so while wearing this robe.\n   A Light spell cast on the robe or a Daylight spell cast within 5 feet of the robe causes you to be blinded for 1 minute. At the end of each of your turns, you can make a Constitution saving throw (DC 11 for Light or DC 15 for Daylight), ending the blindness on a success.",
		attunement : true,
		weight : 4,
		vision: [
			["Darkvision", "fixed 120"],
			["See invisible/ethereal", "fixed 120"],
			["Adv. on Perception checks based on sight", 0]
			]
		},
	"robe of eyes (ddex1-14)" : {   // contains contributions by SoilentBrad
		name : "Robe of Eyes (DDEX1-14)",
		source : [["AL","S1"]],
		rarity : "rare",
		magicItemTable : "G",
		description: "The eyelike patterns embroidered upon this dark blue robe glow when w/i 100 ft of strong elemental power, such as a gate to an elemental plane or a formidable elemental. This robe gives adv. on sight-based Perception checks, 360 degree vision, see invisible/ethereal out to 120 ft, darkvision 120 ft, but you can't close or avert your eyes. If Light is cast on it or Daylight w/i 5 ft, you're blinded for 1 min, Con save (DC 11-Light, 15-Daylight) at end of each turn to end.",
		descriptionFull : "The eyelike patterns embroidered upon this dark blue robe glow faintly when within 100 feet of a source of strong elemental power, such as a gate to an elemental plane or a formidable elemental creature. This robe is adorned with eyelike patterns. While you wear the robe, you gain the following benefits:\n \u2022 The robe lets you see in all directions, and you have advantage on Wisdom (Perception) checks that rely on sight.\n \u2022 You have darkvision out to a range of 120 feet.\n \u2022 You can see invisible creatures and objects, as well as see into the Ethereal Plane, out to a range of 120 feet.\n\nThe eyes on the robe can't be closed or averted. Although you can close or avert your own eyes, you are never considered to be doing so while wearing this robe.\n   A Light spell cast on the robe or a Daylight spell cast within 5 feet of the robe causes you to be blinded for 1 minute. At the end of each of your turns, you can make a Constitution saving throw (DC 11 for Light or DC 15 for Daylight), ending the blindness on a success.",
		attunement : true,
		weight : 4,
		vision: [
			["Darkvision", "fixed 120"],
			["See invisible/ethereal", "fixed 120"],
			["Adv. on Perception checks based on sight", 0]
			]
		},
	"robe of scintillating colors (ccc-tri-1)" : { // contains contributions by SoilentBrad
		name : "Robe of Scintillating Colors (CCC-TRI-1)",
		source : [["AL","CCC"]],
		rarity : "very rare",
		magicItemTable : "H",
		description : "While attuned to this robe, your eyes turn milky white & black ichor drips from their corners. You gain an aversion to mirrors & reflective surfaces, & react unfavorably to criticism. The robe has 3 charges, regaining 1d3 at dawn. As an action, use 1 charge to shed 30-ft radius bright light, 30-ft dim light until your next turn ends; all in 30 ft that see you make a DC 15 Wis save or stunned until effect ends. While lit, all that see you have disadv. on atks against you.",
		descriptionFull : "While attuned to this item, your eyes turn a milky white and black ichor drips from their corners. Those attuned also gain a strong aversion to mirrors and other reflective surfaces, coupled with the urge to react unfavorably to any criticism.\n   This robe has 3 charges, and it regains 1d3 expended charges daily at dawn. While you wear it, you can use an action and expend 1 charge to cause the garment to display a shifting pattern of dazzling hues until the end of your next turn. During this time, the robe sheds bright light in a 30-foot radius and dim light for an additional 30 feet. Creatures that can see you have disadvantage on attack rolls against you. In addition, any creature in the bright light that can see you when the robe's power is activated must succeed on a DC 15 Wisdom saving throw or become stunned until the effect ends.",
		attunement : true,
		weight : 4,
		limfeaname : "Robe of Scintillating Colors",
		usages : 3,
		recovery : "dawn",
		additional : "regains 1d3",
		action : [["action", ""]]
	},
	"robe of stars (ddex3-16)" : {    // contains contributions by SoilentBrad
		name : "Robe of Stars (DDEX3-16)",
		source : [["AL","S3"]],
		rarity : "very rare",
		magicItemTable : "H",
		description : "This robe is made of rough-spun, blue wool w/ stars of faded gray cloth embroidered in silver. While wearing this robe, you gain +1 to saves. 6 stars are special. As an action, remove 1 star to cast Magic Missile at 5th-lvl. Daily at dusk, 1d6 removed stars reappear. While wearing the robe, you can enter the Astral Plane w/ an action. You remain there until you return to the previous plane w/ another action. You reappear in the same space, or the nearest unoccupied space.",
		descriptionFull : "This robe is made of rough-spun, blue wool with stars of faded gray cloth embroidered in silver. You gain a +1 bonus to saving throws while you wear it.\n   Six stars, located on the robe's upper front portion, are particularly large. While wearing this robe, you can use an action to pull off one of the stars and use it to cast Magic Missile as a 5th-level spell. Daily at dusk, 1d6 removed stars reappear on the robe.\n   While you wear the robe, you can use an action to enter the Astral Plane along with everything you are wearing and carrying. You remain there until you use an action to return to the plane you were on. You reappear in the last space you occupied, or if that space is occupied, the nearest unoccupied space.",
		attunement : true,
		weight : 4,
		limfeaname : "Robe of Stars",
		action : [["action", ""]],
		usages : 6,
		recovery : "Dusk",
		additional : "regains 1d6",
		addMod: [{ type: "save", field: "all", mod: 1, text: "While wearing the Robe of Stars, I gain a +1 bonus to all my saving throws." }],
		spellFirstColTitle: "Ch",
		spellcastingBonus: {
			name: "1 charge",
			spells: ["magic missile"],
			selection: ["magic missile"],
			firstCol: 1
		},
		spellChanges : {
			"magic missile" : {
				description : "8 darts hit creature(s) I can see for 1d4+1 Force dmg per dart",
				changes : "Magic Missile cast from the Robe of Stars is always at 5th-level."
				}
			}
		},
	"robe of useful items (ccc-gsp-phil1-3)" : {
		name : "Robe of Useful Items (CCC-GSP-PHIL1-3)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "B",
		description : "This black cloth robe is lined w/ white piping like a spider’s web; its patches resemble items cocooned in webbing. The coat-of-arms of House Urten’Nach, a lost drow family, is embroidered on its collar. As an action while donned, you can detach 1 patch, which becomes the item shown. The robe turns ordinary once out of patches. It has 2 each: dagger, bullseye lantern (filled & lit), steel mirror, 10-ft pole, 50 ft hemp rope, sack, mastiff. It also has a 12-ft rowboat, 4 potions of healing, pit (10ft cube), portable ram, iron door (up to 10x10 ft), a window (2x4 ft) & a riding horse w/ saddle bags.",
		descriptionFull : "The black cloth of this robe is lined with white piping, resembling a spider’s web, and its patches resemble the various items cocooned in webbing. The coat-of-arms of House Urten’Nach, an old drow family lost to history, is embroidered onto the robe’s collar. The family was believed to be eliminated during the Dracorage of 1373 DR, but its leaders fought bravely against the flight of dragons that razed Ylraphon to the ground, allowing many other lives to escape. The make of the robe is a clearly that of a drow exile.\n   This robe has cloth patches of various shapes and colors covering it. While wearing the robe, you can use an action to detach one of the patches, causing it to become the object or creature it represents. Once the last patch is removed, the robe becomes an ordinary garment.\n\nThe robe has two of each of the following patches:\n \u2022 Dagger\n \u2022 Bullseye lantern (filled and lit)\n \u2022 Steel mirror\n \u2022 10-foot pole\n \u2022 Hempen rope (50 feet, coiled)\n \u2022 Sack\n\nThe robe also has a 12-ft rowboat, 4 potions of healing, a pit (a cube 10 feet on a side), which you can place on the ground within 10 feet of you, a portable ram, an iron door (up to 10 feet wide and 10 feet high, barred on one side of your choice), which you can place in an opening you can reach; it conforms to fit the opening, attaching and hinging itself; a window (2 feet by 4 feet, up to 2 feet deep), which you can place on a vertical surface you can reach, and a riding horse w/ saddle bags.",
		weight : 4,
		action : ["action", "Robe of Useful Items"],
	},
	"robe of useful items (ccc-kumori-1-2)" : {
		name : "Robe of Useful Items (CCC-KUMORI-1-2)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "B",
		description : "This old robe has much of its glory bleached out, but the telltale threads of torn-off patches show silhouettes of its original colors. As an action while donned, you can detach 1 patch, which becomes the item shown. The robe turns ordinary once out of patches. It has 2 each: dagger, bullseye lantern (filled & lit), steel mirror, 10-ft pole, 50 ft hemp rope, sack, 10-ft pit, mastiff. It also has a 12-ft rowboat, 24-ft wooden ladder, 4 potions of healing, silver coffer (500 gp), portable ram, & a riding horse w/ saddle bags.",
		descriptionFull : "This old robe has much of its glory bleached out, but the telltale threads of torn-off patches show silhouettes of its original colors. While wearing the robe, you can use an action to detach one of the patches, causing it to become the object or creature it represents. Once the last patch is removed, the robe becomes an ordinary garment.\n\nThe robe has two of each of the following patches:\n \u2022 Dagger\n \u2022 Bullseye lantern (filled and lit)\n \u2022 Steel mirror\n \u2022 10-foot pole\n \u2022 Hempen rope (50 feet, coiled)\n \u2022 Sack\n\nIn addition, the robe has a 12-foot rowboat, a 24-foot wooden ladder, 4 potions of healing, a silver coffer (500 gp), a portable ram, 2 mastiffs, 2 pits (a cube 10 feet on a side), which you can place on the ground within 10 feet of you, and a riding horse w/ saddle bags.",
		weight : 4,
		action : ["action", "Robe of Useful Items"],
	},
	"robe of useful items (ddal10-4)" : {
		name : "Robe of Useful Items (DDAL10-4)",
		source : [["AL","S10"]],
		rarity : "uncommon",
		magicItemTable : "B",
		description : "This robe is made of expertly tanned mountain goat hide. The items shown in its patches are spartan, but high quality. The wearer suffers no harm in temps from −20 ̊ F to 120 ̊ F. As an action while donned, you can detach 1 patch, which becomes the item shown. The robe turns ordinary once out of patches. It has 7 patches determined by the DM & 2 each: dagger, bullseye lantern (filled & lit), steel mirror, 10-ft pole, 50 ft hemp rope, sack.",
		descriptionFull : "This robe is made of expertly tanned mountain goat hide. The items depicted in its patches are of spartan design, but exceedingly high quality. The wearer suffers no harm in temperatures as cold as −20 degrees Fahrenheit or as warm as 120 degrees Fahrenheit. While wearing the robe, you can use an action to detach one of the patches, causing it to become the object or creature it represents. Once the last patch is removed, the robe becomes an ordinary garment.\n\nThe robe has two of each of the following patches:\n \u2022 Dagger\n \u2022 Bullseye lantern (filled and lit)\n \u2022 Steel mirror\n \u2022 10-foot pole\n \u2022 Hempen rope (50 feet, coiled)\n \u2022 Sack\n\nIn addition, the robe has 7 other patches. The DM chooses the patches or determines them randomly.\n\n" + toUni("d100\tPatch") + "\n01-08\tBag of 100 gp\n09-15\tSilver coffer (1 foot long, 6 inches wide and deep) worth 500 gp\n16-22\tIron door (up to 10 feet wide and 10 feet high, barred on one side of your choice), which you can place in an opening you can reach; it conforms to fit the opening, attaching and hinging itself\n23-30\t10 gems worth 100 gp each\n31-44\tWooden ladder (24 feet long)\n45-51\tA riding horse with saddle bags\n52-59\tPit (a cube 10 feet on a side), which you can place on the ground within 10 feet of you\n60-68\t4 potions of healing\n69-75\tRowboat (12 feet long)\n76-83\tSpell scroll containing one spell of 1st to 3rd level\n84-90\t2 mastiffs\n91-96\tWindow (2 feet by 4 feet, up to 2 feet deep), which you can place on a vertical surface you can reach\n97-00\tPortable ram",
		weight : 4,
		action : ["action", "Robe of Useful Items"],
		savetxt : { immune : ["temps btwn -20 ̊ & 120 ̊ F"] },
	},
	"sea hag's cloak (ccc-gad1-1)" : {
		name : "Sea Hag's Cloak (Cloak of the Manta Ray)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "B",
		description : "This dark green cloak is sewn together from seaweed & kelp. While wearing it with its hood up, you can breathe underwater & have a swim speed of 60 ft. You also suffer no harm in temps from -20 ̊ F to 120 ̊ F. Pulling the hood up or down requires an action.",
		descriptionFull : "This dark green cloak seems to be sewn together out of seaweed and kelp. Its wearer suffers no harm in temperatures as cold as -20 degrees Fahrenheit or as warm as 120 degrees Fahrenheit.\n   While wearing this cloak with its hood up, you can breathe underwater, and you have a swimming speed of 60 feet. Pulling the hood up or down requires an action.",
		action : [["action", "Cloak of the Manta Ray (hood up/down)"]],
		speed : { swim : { spd : "fixed 60", enc : "fixed 50" } },
		savetxt : { immune : ["temps btwn -20 ̊ & 120 ̊ F"] }
	},
	"thayvian mantle of spell resistance (ccc-st2-1)" : {
		name : "Thayvian Mantle of Spell Resistance (CCC-ST2-1)",
		source : [["AL","CCC"]],
		rarity : "rare",
		magicItemTable : "G",
		attunement : true,
		savetxt : { adv_vs : ["spells"] },
		description: "This crimson cloak is embroidered with golden sigils of Thay. When the wearer of this cloak is presented with an opportunity to act in a selfish or malevolent way, this item heightens their urge to do so. While attuned to and wearing this cloak, you have advantage on saving throws against spells."
		},
	"wings of flying (ccc-tri-4)" : {
		name : "Wings of Flying (CCC-TRI-4)",
		source : [["AL","CCC"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "The cloak is made of well-kept roc feathers & silk thread. While wearing it, you can use an action to speak its command word. This causes roc wings sprout from your back for 1 hr or until you repeat the command as an action. Your wingspan is only 10 ft instead of a roc’s normal 200 ft wingspan but your wings cast a full 200 ft shadow. The wings give you a flying speed of 60 ft. When they disappear, you can't use them again for 1d12 hrs.",
		descriptionFull : "The cloak is made of well-kept roc feathers and silk thread. When activated, roc wings sprout from your back, though the wingspan is only 10 feet instead of a roc’s normal 200 foot wingspan. While smaller, the shadow they cast is of a roc’s full wingspan of 200 feet.\n   While wearing this cloak, you can use an action to speak its command word. This turns the cloak into a pair of bat wings or bird wings on your back for 1 hour or until you repeat the command word as an action. The wings give you a flying speed of 60 feet. When they disappear, you can't use them again for 1d12 hours.",
		attunement : true,
		limfeaname : "Wings of Flying",
		usages : 1,
		action : [["action", " (start/stop)"]],
		recovery : "1d12 h"
	},
	"wings of flying (ddep2)" : {
		name : "Wings of Flying (DDEP2)",
		source : [["AL","S2"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "This cloak is fashioned from hundreds of overlapping feathers sewn to a backing of thin leather. While wearing the cloak, you can use an action to speak its command word & turn it into a beautiful pair of immense, feathered wings of scintillating color. They last for 1 hr or until you repeat the command as an action. The wings give you a flying speed of 60 ft. When they disappear, you can't use them again for 1d12 hrs.",
		descriptionFull : "This cloak is fashioned from hundreds of overlapping feathers sewn to a backing of thin, lightweight leather. When activated, the cloak turns into a beautiful pair of immense, feathered wings of scintillating color.\n   While wearing this cloak, you can use an action to speak its command word. This turns the cloak into a pair of bat wings or bird wings on your back for 1 hour or until you repeat the command word as an action. The wings give you a flying speed of 60 feet. When they disappear, you can't use them again for 1d12 hours.",
		attunement : true,
		limfeaname : "Wings of Flying",
		usages : 1,
		action : [["action", " (start/stop)"]],
		recovery : "1d12 h"
	},
	"winter wolf cloak (ddal0-13)" : {
		name : "Winter Wolf Cloak (Hell Hound Cloak)",
		source : [["AL","S10"]],
		rarity : "rare",
		magicItemTable : "H",
		description : "This dark cloak is made of cured winter wolf hide. As an action, you can command this cloak to Polymorph you into a winter wolf for 1 hour, or until you stop it as a bonus action. The 6th time you use it and every time after, you must make a DC 15 Cha save or be stuck in winter wolf form until dispelled or you drop to 0 HP. If you remain in winter wolf form for 6 hours, it becomes permanent.",
		descriptionFull : "This dark cloak is made of cured winter wolf hide. As an action, you can command the cloak to transform you into a winter wolf for up to 1 hour. The transformation otherwise functions as the Polymorph spell, but you can use a bonus action to revert to your normal form.\n   " + toUni("Curse") + ". This cloak is cursed with the essence of a winter wolf, and becoming attuned to it extends the curse to you. Until the curse is broken with Remove Curse or similar magic, you are unwilling to part with the cloak, keeping it within reach at all times.\n   The sixth time you use the cloak, and each time thereafter, you must make a DC 15 Charisma saving throw. On a failed save, the transformation lasts until dispelled or until you drop to 0 hit points, and you can't willingly return to normal form. If you ever remain in winter wolf form for 6 hours, the transformation becomes permanent and you lose your sense of self. All your statistics are then replaced by those of a winter wolf. Thereafter, only Remove Curse or similar magic allows you to regain your identity and return to normal. If you remain in this permanent form for 6 days, only a Wish spell can reverse the transformation.",
		attunement : true,
		weight : 1,
		action : [["action", "Winter Wolf Cloak (Polymorph)"],["bonus action", "Winter Wolf Cloak (Revert)"]],
		cursed : true
		},
}
	
MagicItemsList["al rings"] = {
		name : "AL Rings",
		type : "ring",
		allowDuplicates : true,
	choices : ["Ring of Animal Influence (DDAL4-13)","Ring of Earth Elemental Command (DDAL-DRWEP02)","Ring of Evasion (DDEX1-3)","Ring of Evasion (DDEP7-2)","Ring of Fire Resistance (DDEX1-5)", "Ring of Fire Resistance (DDAL8-8)","Ring of Free Action (DDAL9-10)","Ring of Invisibility (DDEP8-3)","Ring of Jumping (CCC-DDSC-2)","Ring of Jumping (DC-POA-LEGIT-SV-02)","Ring of Jumping (DDAL5-10)","Ring of Jumping (DDEP7-2)","Ring of Mind Shielding (CCC-TRI-33)","Ring of Mind Shielding (DDEX2-6)","Ring of Mind Shielding (DDAL8-4)","Ring of Protection (DDEX3-15)", "Ring of the Ram (CCC-GHC-7)","Ring of the Ram (CCC-TRI-8)","Ring of Regeneration (CCC-MIND1-2)","Ring of Shooting Stars (DDEP5-2)","Ring of Shooting Stars (DDAL8-15)","Ring of Spell Storing (DDAL4-8)", "Ring of Spell Storing (DDEP5-2)","Ring of Swimming (CCC-ALMOG-27 DAGON1-2)","Ring of Swimming (DDAL5-6)","Ring of Telekinesis (DDEP0-1)","Ring of Warmth (CCC-ELF-1)","Ring of Warmth (CCC-WWC-5)","Ring of Water Walking (DDEX2-7)"],
	"ring of animal influence (ddal4-13)" : {
		name : "Ring of Animal Influence (DDAL4-13)",
		source : [["AL","S4"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "This ring has 3 charges, regaining 1d3 expended charges at dawn. It's decorated with canid & raptor symbols & the wearer feels predatory urges, desiring a diet of fresh meat. As an action while wearing the ring, you can expend 1 charge to cast a spell (save DC 13): Animal Friendship, Speak with Animals, or Fear. Fear cast from this ring can target only beasts that have an Int of 3 or less.",
		limfeaname : "Ring of Animal Influence",
		usages : 3,
		recovery : "dawn",
		additional : "regains 1d3",
		fixedDC : 13,
		spellFirstColTitle : "Ch",
		spellcastingBonus : [{
			name : "1 charge",
			spells : ["animal friendship", "speak with animals", "fear"],
			selection : ["animal friendship", "speak with animals", "fear"],
			firstCol : "1",
			times : 3
		}],
		spellChanges : {
			"fear" : {
				description : "All beasts Int<4 save or frightened, Dash to get away; extra save at end of turn if not in line of sight",
				changes : "Only affects beasts that have an Intelligence of 3 or lower."
			}
		}
	},
		"ring of earth elemental command (ddal-drwep02)" : {
			name : "Ring of Earth Elemental Command (DDAL-DRWEP02)",
			rarity : "legendary",
			magicItemTable : "I",
			source : [["AL","DRW"]],
			description : "This ring is made of beaten brass & set w/ a many-faceted apatite stone. While attuned, your skin is extremely dry & prone to cracking. Only the finest lotions & oils keep this at bay. You know Terran, ignore difficult terrain of rubble/rocks/dirt, have adv. on atks vs. elementals from Earth Plane, & they have disadv. vs. you. This ring has 5 charges. Spend 2 to cast dominate monster on an earth elemental (DC 17). Once you have killed 1, you resist acid dmg, can move through solid earth or rock like difficult terrain, & cast more spells.",
			descriptionFull : "The ring is made of beaten brass and set with a many-faceted apatite stone. While attuned to this item, your skin becomes extremely dry and is prone to cracking. Only the finest lotions and oils can keep this effect at bay. While wearing this ring, you have advantage on attack rolls against elementals from the Elemental Plane of Earth and they have disadvantage on attack rolls against you. In addition, you have access to properties based on the Elemental Plane of Earth.\n   The ring has 5 charges. It regains 1d4+1 expended charges daily at dawn. Spells cast from the ring have a save DC of 17.\n   You can expend 2 of the ring's charges to cast Dominate Monster on an earth elemental. In addition, you can move in difficult terrain that is composed of rubble, rocks, or dirt as if it were normal terrain. You can also speak and understand Terran.\n   If you help slay an earth elemental while attuned to the ring, you gain access to the following additional properties:\n \u2022 You have resistance to acid damage.\n \u2022 You can move through solid earth or rock as if those areas were difficult terrain. If you end your turn there, you are shunted out to the nearest unoccupied space you last occupied.\n \u2022 You can cast the following spells from the ring, expending the necessary number of charges: Stone Shape (2 charges), Stoneskin (3 charges), or Wall of Stone (3 charges).",
			languageProfs : ["Terran"],
			dmgres : ["Acid"],
			fixedDC : 17,
			spellFirstColTitle : "Ch",
			spellcastingBonus : [{
				name : "2 charges",
				spells : ["dominate monster", "stone shape"],
				selection : ["dominate monster", "stone shape"],
				firstCol : 2,
				times : 2
			}, {
				name : "3 charges",
				spells : ["stoneskin", "wall of stone"],
				selection : ["stoneskin", "wall of stone"],
				firstCol : 3,
				times : 2
			}],
			spellChanges : {
				"dominate monster" : {
					description : "Earth elemental save or charmed, follows telepathic commands, 1 a for complete control; save on dmg",
					changes : "Can only affect an earth elemental."
				}
			},
			limfeaname : "Ring of Earth Elemental Command"
		},
	"ring of evasion (ddex1-3)" : {
		name : "Ring of Evasion (DDEX1-3)",
		rarity : "rare",
		source : [["AL","S1"]],
		magicItemTable : "G",
		attunement : true,
		description: "This intricate thin silver ring is decorated w/ tiny opalescent stones & glows w/ a pale radiance (dim light, 5-ft radius) in moonlight. The ring has 3 charges, and it regains 1d3 expended charges daily at dawn. As a reaction when you fail a Dexterity saving throw while wearing it, you can expend 1 of its charges to succeed on that saving throw instead.",
		limfeaname : "Ring of Evasion",
		usages : 3,
		recovery : "dawn",
		additional : "regains 1d3",
		action : [["reaction", ""]]
			},
	"ring of evasion (ddep7-2)" : {
		name : "Ring of Evasion (DDEP7-2)",
		rarity : "rare",
		source : [["AL","S7"]],
		magicItemTable : "G",
		attunement : true,
		description: "This ring of dark wood drips thick, viscous oil that soaks through even the thickest gloves. The ring has 3 charges, and it regains 1d3 expended charges daily at dawn. As a reaction when you fail a Dexterity saving throw while wearing it, you can expend 1 of its charges to succeed on that saving throw instead.",
		limfeaname : "Ring of Evasion",
		usages : 3,
		recovery : "dawn",
		additional : "regains 1d3",
		action : [["reaction", ""]]
			},
	"ring of fire resistance (ddex1-5)" : {
		name : "Ring of Fire Resistance (DDEX1-5)",
		source : [["AL","S1"]],
		rarity : "rare",
		magicItemTable : "G",
		description: "This delicate copper ring is fitted with a beautiful fire agate and is always warm to the touch. While attuned to this wing and wearing it, you gain resistance to fire damage.",
		attunement : true,
		dmgres : ["Fire"]
		},
	"ring of fire resistance (ddal8-8)" : {
		name : "Ring of Fire Resistance (DDAL8-8)",
		source : [["AL","S8"]],
		rarity : "rare",
		magicItemTable : "G",
		description: "This simple ring of twisted brass wire is warm to the touch. While attuned to this wing and wearing it, you gain resistance to fire damage.",
		attunement : true,
		dmgres : ["Fire"]
		},
	"ring of free action (ddal9-10)" : {
		name : "Ring of Free Action (DDAL9-10)",
		source : [["AL","S9"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "This ring is fashioned from a single piece of bone-white chalk. While worn, the wearer feels fleeting pangs of nausea when around food or other situations where strong odors are present. Additionally, difficult terrain doesn't cost you extra movement, and magic can neither reduce your speed nor cause you to be paralyzed or restrained.",
		attunement : true,
		savetxt : { immune : ["paralyzed", "restrained"] }
	},
	"ring of invisibility (ddep8-3)" : {
		name : "Ring of Invisibility (DDEP8-3)",
		source : [["AL","S8"]],
		rarity : "legendary",
		magicItemTable : "I",
		description : "This cold steel ring is invisible when unworn but becomes visible when slipped onto the wearer’s finger. While wearing this ring, you can turn invisible as an action. Anything you are wearing or carrying – apart from this ring – is invisible with you. You remain invisible until the ring is removed, you attack or cast a spell, or you use a bonus action to become visible again. To avoid being spotted while invisible, you must cover the ring with a glove.",
		attunement : true,
		action : [["action", "Ring of Invisibility (start)"], ["bonus action", "Ring of Invisibility (stop)"]]
	},
	"ring of jumping (ccc-ddsc-2)" : {
		name : "Ring of Jumping (CCC-DDSC-2)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "This item takes the shape of a ring of clouds around the wielder’s finger. Wisps of white smoke circle around the user whenever they jump, making them feel lighter than air. While wearing the ring, you can cast the Jump spell from it as a bonus action at will, but can target only yourself when you do so.",
		attunement : true,
		action : [["bonus action", "Ring of Jumping"]],
		spellcastingBonus : {
			name : "Self Only",
			spells : ["jump"],
			selection : ["jump"],
			firstCol : "atwill"
		},
		spellChanges : {
			"jump" : {
				time : "1 bns",
				range : "Self",
				changes : "The casting time is only a bonus action instead of an action and it can only affect the wearer."
			},
		}
	},
	"ring of jumping (dc-poa-legit-sv-02)" : {
		name : "Ring of Jumping (DC-POA-LEGIT-SV-02)",
		source : [["AL","S10"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "A hexagonal-shaped ring made of patinated bronze. Faint curving etchings are visible on its surface. Despite its irregular shape, it does not feel uncomfortable to wear. While wearing the ring, you can cast the Jump spell from it as a bonus action at will, but can target only yourself when you do so.",
		attunement : true,
		action : [["bonus action", "Ring of Jumping"]],
		spellcastingBonus : {
			name : "Self Only",
			spells : ["jump"],
			selection : ["jump"],
			firstCol : "atwill"
		},
		spellChanges : {
			"jump" : {
				time : "1 bns",
				range : "Self",
				changes : "The casting time is only a bonus action instead of an action and it can only affect the wearer."
			},
		}
	},
	"ring of jumping (ddal5-10)" : {
		name : "Ring of Jumping (DDAL5-10)",
		source : [["AL","S5"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "This ring is made of interlocking pieces of animal chitin. When activated, it creates a loud, chirping sound; similar to that of a cricket that can be heard 100 feet away. While wearing the ring, you can cast the Jump spell from it as a bonus action at will, but can target only yourself when you do so.",
		attunement : true,
		action : [["bonus action", "Ring of Jumping"]],
		spellcastingBonus : {
			name : "Self Only",
			spells : ["jump"],
			selection : ["jump"],
			firstCol : "atwill"
		},
		spellChanges : {
			"jump" : {
				time : "1 bns",
				range : "Self",
				changes : "The casting time is only a bonus action instead of an action and it can only affect the wearer."
			},
		}
	},
	"ring of jumping (ddep7-2)" : {
		name : "Ring of Jumping (DDEP7-2)",
		source : [["AL","S7"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "This ring is fashioned of a dozen grasshopper wings meticulously stitched together with fine, silver wire. When used, the wearer emits a chirping noise that is audible within 30 feet. While wearing the ring, you can cast the Jump spell from it as a bonus action at will, but can target only yourself when you do so.",
		attunement : true,
		action : [["bonus action", "Ring of Jumping"]],
		spellcastingBonus : {
			name : "Self Only",
			spells : ["jump"],
			selection : ["jump"],
			firstCol : "atwill"
		},
		spellChanges : {
			"jump" : {
				time : "1 bns",
				range : "Self",
				changes : "The casting time is only a bonus action instead of an action and it can only affect the wearer."
			},
		}
	},
	"ring of mind shielding (ccc-tri-33)" : {
		name : "Ring of Mind Shielding (CCC-TRI-33)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description: "This gold ring bears an intricate pattern of polished gems that resembles a human brain. While wearing it, you're immune to magic that lets creatures read your thoughts, determine lies, know alignment, or know creature type. Creatures can mentally communicate w/ you only if allowed. Action to make the ring invisible. If you die while wearing the ring, your soul enters it, unless occupied. As long as your soul is in the ring, you can communicate w/ the wearer.",
		descriptionFull : "This gold ring bears an intricate pattern of polished gems that vaguely resembles a human brain. While wearing the ring, you are immune to magic that allows other creatures to read your thoughts, determine whether you are lying, know your alignment, or know your creature type. Creatures can telepathically communicate with you only if you allow it.\n   You can use an action to cause the ring to become invisible until you use another action to make it visible, until you remove the ring, or until you die.\n   If you die while wearing the ring, your soul enters it, unless it already houses a soul. You can remain in the ring or depart for the afterlife. As long as your soul is in the ring, you can telepathically communicate with any creature wearing it. The wearer can't prevent this telepathic communication.",
		attunement : true,
		action : [["action", "Ring of Mind Shielding: (in)visible"]],
		savetxt : { immune : ["magic reading my thoughts, truthfulness, alignment, or creature type"] }
		},
	"ring of mind shielding (ddex2-6)" : {
		name : "Ring of Mind Shielding (DDEX2-6)",
		source : [["AL","S2"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description: "This plain, silver ring is engraved w/ the holy symbol of Ilmater, a pair of hands bound with cord. While wearing it, you're immune to magic that lets creatures read your thoughts, determine lies, know alignment, or know creature type. Creatures can mentally communicate w/ you only if allowed. Action to make the ring invisible. If you die while wearing the ring, your soul enters it, unless occupied. As long as your soul is in the ring, you can communicate w/ the wearer.",
		descriptionFull : "This plain, silver ring is engraved w/ the holy symbol of Ilmater, a pair of hands bound with cord. While wearing this ring, you are immune to magic that allows other creatures to read your thoughts, determine whether you are lying, know your alignment, or know your creature type. Creatures can telepathically communicate with you only if you allow it.\n   You can use an action to cause the ring to become invisible until you use another action to make it visible, until you remove the ring, or until you die.\n   If you die while wearing the ring, your soul enters it, unless it already houses a soul. You can remain in the ring or depart for the afterlife. As long as your soul is in the ring, you can telepathically communicate with any creature wearing it. The wearer can't prevent this telepathic communication.",
		attunement : true,
		action : [["action", "Ring of Mind Shielding: (in)visible"]],
		savetxt : { immune : ["magic reading my thoughts, truthfulness, alignment, or creature type"] }
		},
	"ring of mind shielding (ddal8-4)" : {
		name : "Ring of Mind Shielding (DDAL8-4)",
		source : [["AL","S8"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description: "This ornate silver ring is engraved with the words “Be Where They Are Not” in the Alzhedo language of southwestern Faerûn. While wearing it, you're immune to magic that lets creatures read your thoughts, determine lies, know alignment, or know creature type. Creatures can mentally communicate w/ you only if allowed. Action to make the ring invisible. If you die while wearing the ring, your soul enters it, unless occupied. As long as your soul is in the ring, you can communicate w/ the wearer.",
		descriptionFull : "This ornate silver ring is engraved with the words “Be Where They Are Not” in the Alzhedo language of southwestern Faerûn. While wearing this ring, you are immune to magic that allows other creatures to read your thoughts, determine whether you are lying, know your alignment, or know your creature type. Creatures can telepathically communicate with you only if you allow it.\n   You can use an action to cause the ring to become invisible until you use another action to make it visible, until you remove the ring, or until you die.\n   If you die while wearing the ring, your soul enters it, unless it already houses a soul. You can remain in the ring or depart for the afterlife. As long as your soul is in the ring, you can telepathically communicate with any creature wearing it. The wearer can't prevent this telepathic communication.",
		attunement : true,
		action : [["action", "Ring of Mind Shielding: (in)visible"]],
		savetxt : { immune : ["magic reading my thoughts, truthfulness, alignment, or creature type"] }
		},
	"ring of protection (ddex3-15)" : {
		name : "Ring of Protection (DDEX3-15)",
		source : [["AL","S3"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "This ancient drow ring is made of cool black spider silk, when worn it causes the user to feel self-assured and over confident. You gain a +1 bonus to AC and saving throws while wearing this ring.",
		attunement : true,
		extraAC : [{name : "Ring of Protection", mod : 1, magic : true, text : "I gain a +1 bonus to AC while attuned."}],
		addMod : [{ type : "save", field : "all", mod : 1, text : "While I wear the Ring of Protection, I gain a +1 bonus to all my saving throws." }]
	},
	"ring of the ram (ccc-ghc-7)" : {
		name : "Ring of the Ram (CCC-GHC-7)",
		source : [["AL","CCC"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "Crafted of cold iron in the likeness of a jutting fist, this ring is always slightly cold to the touch. You have an itching desire to break small, fragile objects while wearing it. The ring has 3 charges, regaining 1d3 at dawn. As an action, you can make a ranged atk on a target in 60 ft, w/ a +7 to hit. Per charge used: 2d10 force dmg & pushed 5ft. If you target an unattended object, you can try to break it w/ +5 per charge on the Str check.",
		descriptionFull : "Crafted of cold iron and fashioned with the likeness of a jutting fist, this ring is always slightly cold to the touch. You have an itching desire to break small, fragile objects while wearing the ring.\n   This ring has 3 charges, and it regains 1d3 expended charges daily at dawn. While wearing the ring, you can use an action to expend 1 to 3 of its charges to attack one creature you can see within 60 feet of you. The ring produces a spectral ram's head and makes its attack roll with a +7 bonus. On a hit, for each charge you spend, the target takes 2d10 force damage and is pushed 5 feet away from you.\n   Alternatively, you can expend 1 to 3 of the ring's charges as an action to try to break an object you can see within 60 feet of you that isn't being worn or carried. The ring makes a Strength check with a +5 bonus for each charge you spend.",
		attunement : true,
		weaponsAdd : ["Ring of the Ram"],
		weaponOptions : {
			regExpSearch : /^(?=.*ring)(?=.*ram).*$/i,
			name : "Ring of the Ram",
			source : [["SRD", 238], ["D", 193], ["AL","CCC"]],
			ability : 0,
			type : "Magic Item",
			damage : [2, 10, "force"],
			range : "60 ft",
			description : "Damage is per charge used, also pushes 5 ft away per charge used",
			abilitytodamage : false,
			modifiers : [7, ""]
		}
	},
	"ring of the ram (ccc-tri-8)" : {
		name : "Ring of the Ram (CCC-TRI-8)",
		source : [["AL","CCC"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "This ring is made of the bones & crystallized fog left by the spellplagued leviathan, Aipelon. With each use, a whale’s head emerges instead of a ram & its cry of pain & anger fills your ears. The ring has 3 charges, regaining 1d3 at dawn. As an action, you can make a ranged atk on a target in 60 ft, w/ a +7 to hit. Per charge used: 2d10 force dmg & pushed 5ft. If you target an unattended object, you can try to break it w/ +5 per charge on the Str check.",
		descriptionFull : "This ring is made from the bones and crystallized fog left from the spellplagued leviathan, Aipelon. When activated, a whale’s head emerges rather than a ram, and its cry of pain and anger fills the user’s ears with each use.\n   This ring has 3 charges, and it regains 1d3 expended charges daily at dawn. While wearing the ring, you can use an action to expend 1 to 3 of its charges to attack one creature you can see within 60 feet of you. The ring produces a spectral ram's head and makes its attack roll with a +7 bonus. On a hit, for each charge you spend, the target takes 2d10 force damage and is pushed 5 feet away from you.\n   Alternatively, you can expend 1 to 3 of the ring's charges as an action to try to break an object you can see within 60 feet of you that isn't being worn or carried. The ring makes a Strength check with a +5 bonus for each charge you spend.",
		attunement : true,
		weaponsAdd : ["Ring of the Ram"],
		weaponOptions : {
			regExpSearch : /^(?=.*ring)(?=.*ram).*$/i,
			name : "Ring of the Ram",
			source : [["SRD", 238], ["D", 193], ["AL","CCC"]],
			ability : 0,
			type : "Magic Item",
			damage : [2, 10, "force"],
			range : "60 ft",
			description : "Damage is per charge used, also pushes 5 ft away per charge used",
			abilitytodamage : false,
			modifiers : [7, ""]
		}
	},
	"ring of regeneration (ccc-mind1-2)" : {
		name : "Ring of Regeneration (CCC-MIND1-2)",
		source : [["AL","CCC"]],
		rarity : "very rare",
		attunement : true,
		magicItemTable : "H",
		description : "This band of emerald is engraved with the face of a snarling troll. While healing you, the ring radiates a comfortable warmth & the troll’s expression changes to a wicked grin. While wearing this ring, you regain 1d6 hp every 10 min, provided that you have at least 1 hp. If you lose a body part, the ring regrows the missing part after 1d6+1 days if you have at least 1 hp the whole time.",
		descriptionFull : "This band of emerald is engraved with the face of a snarling troll. While the ring works to heal its wearer, it radiates a comfortable warmth and the troll head’s expression changes to a wicked grin.\n   While wearing this ring, you regain 1d6 hit points every 10 minutes, provided that you have at least 1 hit point. If you lose a body part, the ring causes the missing part to regrow and return to full functionality after 1d6+1 days if you have at least 1 hit point the whole time."
	},
	"ring of shooting stars (ddep5-2)" : {
		name : "Ring of Shooting Stars (DDEP5-2)",
		source : [["AL","S5"]],
		rarity : "very rare",
		magicItemTable : "H",
		description : "This ring appears to be made of pure light w/ motes of twinkling radiance within. When used, rainbow sparks dance around the wearer’s hand. The ring has 6 charges & regains 1d6 charges at dawn. While wearing the ring in dim light/darkness, you can cast Dancing Lights & Light at will. As an action, expend charges to cast Faerie Fire, Ball Lightning, or Shooting Stars (see 3rd page notes). All spell DC 15.",
		descriptionFull : "This ring appears to be made of pure light w/ motes of twinkling radiance within. When used, rainbow sparks dance around the wearer’s hand. While wearing this ring in dim light or darkness, you can cast Dancing Lights and Light from the ring at will. Casting either spell from the ring requires an action.\n   The ring has 6 charges for the following other properties. The ring regains 1d6 expended charges daily at dawn.\n   " + toUni("Faerie Fire") + ". You can expend 1 charge as an action to cast Faerie Fire from the ring.\n   " + toUni("Ball Lightning") + ". You can expend 2 charges as an action to create one to four 3-foot-diameter spheres of lightning. The more spheres you create, the less powerful each sphere is individually.\n   Each sphere appears in an unoccupied space you can see within 120 feet of you. The spheres last as long as you concentrate (as if concentrating on a spell), up to 1 minute. Each sphere sheds dim light in a 30-foot radius.\n   As a bonus action, you can move each sphere up to 30 feet, but no farther than 120 feet away from you. When a creature other than you comes within 5 feet of a sphere, the sphere discharges lightning at that creature and disappears. That creature must make a DC 15 Dexterity saving throw. On a failed save, the creature takes lightning damage based on the number of spheres you created (4 spheres = 2d4, 3 spheres = 2d6, 2 spheres = 5d4, 1 sphere = 4d12).\n   " + toUni("Shooting Stars") + ". \n   You can expend 1 to 3 charges as an action. For every charge you expend, you launch a glowing mote of light from the ring at a point you can see within 60 feet of you. Each creature within a 15-foot cube originating from that point is showered in sparks and must make a DC 15 Dexterity saving throw. taking 5d4 fire damage on a failed save, or half as much damage on a successful one.",
		attunement : true,
		toNotesPage : [{
			name : "Ball Lightning",
			popupName : "Ball Lightning function of Ring of Shooting Stars",
			page3notes : true,
			additional : "2 charges",
			note : [
				"As an action, I can create 1-4 spheres of lightning of 3-ft diameter within 120 ft",
				"These last while I concentrate, up to 1 min; As a bonus action, I can more them 30 ft",
				"When a creature (not me) comes within 5 ft of a sphere, it discharges and disappears",
				"The target must make a DC 15 Dex save or take lightning damage",
				"A sphere sheds dim light in 30-ft radius, its damage depends on the number created:",
				" \u2022 1 sphere: 4d12;    \u2022 2 spheres: 5d4;    \u2022 3 spheres: 2d6;    \u2022 4 spheres: 2d4"
			]
		}, {
			name : "Shooting Stars",
			popupName : "Shooting Stars function of Ring of Shooting Stars",
			page3notes : true,
			additional : "1-3 charges",
			note : [
				"As an action, I can launch one mote of light per expended charge to a point within 60 ft",
				"All creatures within a 15-ft cube originating from those points take 5d4 fire damage",
				"The targets can make a DC 15 Dexterity saving throw to halve the damage"
			]
		}],
		limfeaname : "Ring of Shooting Stars",
		usages : 6,
		recovery : "dawn",
		additional : "regains 1d6",
		fixedDC : 15,
		spellFirstColTitle : "Ch",
		spellcastingBonus : [{
			name : "At will",
			spells : ["dancing lights", "light"],
			selection : ["dancing lights", "light"],
			firstCol : "atwill",
			times : 2
		}, {
			name : "1 charge",
			spells : ["faerie fire"],
			selection : ["faerie fire"],
			firstCol : 1
		}, {
			name : "Ball lightning (2 chr)",
			spells : ["flaming sphere"],
			selection : ["flaming sphere"],
			firstCol : 2
		}, {
			name : "Shooting stars (1-3 chr)",
			spells : ["magic missile"],
			selection : ["magic missile"],
			firstCol : "1+"
		}],
		spellChanges : {
			"flaming sphere" : { // change into Ball Lightning
				name : "Ball Lightning",
				source : [["SRD", 237], ["D", 192]],
				level : "",
				school : "Evoc",
				time : "1 a",
				range : "120 ft",
				components : "M\u0192",
				compMaterial : "Spells cast by magic items don't require any components other than the magic item itself.",
				duration : "Conc, 1 min",
				save : "Dex",
				description : "1-4 spheres; bns a move all 30 ft; 1st crea in 5 ft save or Lightning dmg (1:4d12, 2:5d4, 3:2d6, 4:2d4)",
				descriptionFull : "You can expend 2 charges from the ring of shooting starts as an action to create one to four 3-foot-diameter spheres of lightning. The more spheres you create, the less powerful each sphere is individually.\n   Each sphere appears in an unoccupied space you can see within 120 feet of you. The spheres last as long as you concentrate (as if concentrating on a spell), up to 1 minute. Each sphere sheds dim light in a 30-foot radius.\n   As a bonus action, you can move each sphere up to 30 feet, but no farther than 120 feet away from you. When a creature other than you comes within 5 feet of a sphere, the sphere discharges lightning at that creature and disappears. That creature must make a DC 15 Dexterity saving throw. On a failed save, the creature takes lightning damage based on the number of spheres you created (4 spheres = 2d4, 3 spheres = 2d6, 2 spheres = 5d4, 1 sphere = 4d12).",
				completeRewrite : true, // indicates that the changes here even overwrite the tooltip
				changes : "The listing of 'Flaming Sphere' has been completely changed to reflect the 'Ball Lightning' ability of the Ring of Shooting Stars. Even the information above is changed."
			},
			"magic missile" : { // change into Shooting Stars
				name : "Shooting Stars",
				source : [["SRD", 237], ["D", 192]],
				level : "",
				school : "Evoc",
				time : "1 a",
				range : "60 ft",
				components : "M\u0192",
				compMaterial : "Spells cast by magic items don't require any components other than the magic item itself.",
				duration : "Instantaneous",
				description : "15-ft cube in range per expended charge; all crea in cubes take 5d4 Fire damage, save halves",
				descriptionFull : "You can expend 1 to 3 charges from the ring of shooting starts as an action. For every charge you expend, you launch a glowing mote of light from the ring at a point you can see within 60 feet of you. Each creature within a 15-foot cube originating from that point is showered in sparks and must make a DC 15 Dexterity saving throw. taking 5d4 fire damage on a failed save, or half as much damage on a successful one.",
				completeRewrite : true, // indicates that the changes here even overwrite the tooltip
				changes : "The listing of 'Magic Missile' has been completely changed to reflect the 'Shooting Stars' ability of the Ring of Shooting Stars. Even the information above is changed."
			}
		}
	},
	"ring of shooting stars (ddal8-15)" : {
		name : "Ring of Shooting Stars (DDAL8-15)",
		source : [["AL","S8"]],
		rarity : "very rare",
		magicItemTable : "H",
		description : "While wearing this ring, you are filled with feelings of safety and contentment, unless you bear witness to the symbol of Shar. Then you feel only rage. The ring has 6 charges & regains 1d6 charges at dawn. While wearing the ring in dim light/darkness, you can cast Dancing Lights & Light at will. As an action, expend charges to cast Faerie Fire, Ball Lightning, or Shooting Stars (see 3rd page notes). All spell DC 15.",
		descriptionFull : "While wearing this ring, you are filled with feelings of safety and contentment, unless you bear witness to the symbol of Shar. Then you feel only rage. While wearing this ring in dim light or darkness, you can cast Dancing Lights and Light from the ring at will. Casting either spell from the ring requires an action.\n   The ring has 6 charges for the following other properties. The ring regains 1d6 expended charges daily at dawn.\n   " + toUni("Faerie Fire") + ". You can expend 1 charge as an action to cast Faerie Fire from the ring.\n   " + toUni("Ball Lightning") + ". You can expend 2 charges as an action to create one to four 3-foot-diameter spheres of lightning. The more spheres you create, the less powerful each sphere is individually.\n   Each sphere appears in an unoccupied space you can see within 120 feet of you. The spheres last as long as you concentrate (as if concentrating on a spell), up to 1 minute. Each sphere sheds dim light in a 30-foot radius.\n   As a bonus action, you can move each sphere up to 30 feet, but no farther than 120 feet away from you. When a creature other than you comes within 5 feet of a sphere, the sphere discharges lightning at that creature and disappears. That creature must make a DC 15 Dexterity saving throw. On a failed save, the creature takes lightning damage based on the number of spheres you created (4 spheres = 2d4, 3 spheres = 2d6, 2 spheres = 5d4, 1 sphere = 4d12).\n   " + toUni("Shooting Stars") + ". \n   You can expend 1 to 3 charges as an action. For every charge you expend, you launch a glowing mote of light from the ring at a point you can see within 60 feet of you. Each creature within a 15-foot cube originating from that point is showered in sparks and must make a DC 15 Dexterity saving throw. taking 5d4 fire damage on a failed save, or half as much damage on a successful one.",
		attunement : true,
		toNotesPage : [{
			name : "Ball Lightning",
			popupName : "Ball Lightning function of Ring of Shooting Stars",
			page3notes : true,
			additional : "2 charges",
			note : [
				"As an action, I can create 1-4 spheres of lightning of 3-ft diameter within 120 ft",
				"These last while I concentrate, up to 1 min; As a bonus action, I can more them 30 ft",
				"When a creature (not me) comes within 5 ft of a sphere, it discharges and disappears",
				"The target must make a DC 15 Dex save or take lightning damage",
				"A sphere sheds dim light in 30-ft radius, its damage depends on the number created:",
				" \u2022 1 sphere: 4d12;    \u2022 2 spheres: 5d4;    \u2022 3 spheres: 2d6;    \u2022 4 spheres: 2d4"
			]
		}, {
			name : "Shooting Stars",
			popupName : "Shooting Stars function of Ring of Shooting Stars",
			page3notes : true,
			additional : "1-3 charges",
			note : [
				"As an action, I can launch one mote of light per expended charge to a point within 60 ft",
				"All creatures within a 15-ft cube originating from those points take 5d4 fire damage",
				"The targets can make a DC 15 Dexterity saving throw to halve the damage"
			]
		}],
		limfeaname : "Ring of Shooting Stars",
		usages : 6,
		recovery : "dawn",
		additional : "regains 1d6",
		fixedDC : 15,
		spellFirstColTitle : "Ch",
		spellcastingBonus : [{
			name : "At will",
			spells : ["dancing lights", "light"],
			selection : ["dancing lights", "light"],
			firstCol : "atwill",
			times : 2
		}, {
			name : "1 charge",
			spells : ["faerie fire"],
			selection : ["faerie fire"],
			firstCol : 1
		}, {
			name : "Ball lightning (2 chr)",
			spells : ["flaming sphere"],
			selection : ["flaming sphere"],
			firstCol : 2
		}, {
			name : "Shooting stars (1-3 chr)",
			spells : ["magic missile"],
			selection : ["magic missile"],
			firstCol : "1+"
		}],
		spellChanges : {
			"flaming sphere" : { // change into Ball Lightning
				name : "Ball Lightning",
				source : [["SRD", 237], ["D", 192]],
				level : "",
				school : "Evoc",
				time : "1 a",
				range : "120 ft",
				components : "M\u0192",
				compMaterial : "Spells cast by magic items don't require any components other than the magic item itself.",
				duration : "Conc, 1 min",
				save : "Dex",
				description : "1-4 spheres; bns a move all 30 ft; 1st crea in 5 ft save or Lightning dmg (1:4d12, 2:5d4, 3:2d6, 4:2d4)",
				descriptionFull : "You can expend 2 charges from the ring of shooting starts as an action to create one to four 3-foot-diameter spheres of lightning. The more spheres you create, the less powerful each sphere is individually.\n   Each sphere appears in an unoccupied space you can see within 120 feet of you. The spheres last as long as you concentrate (as if concentrating on a spell), up to 1 minute. Each sphere sheds dim light in a 30-foot radius.\n   As a bonus action, you can move each sphere up to 30 feet, but no farther than 120 feet away from you. When a creature other than you comes within 5 feet of a sphere, the sphere discharges lightning at that creature and disappears. That creature must make a DC 15 Dexterity saving throw. On a failed save, the creature takes lightning damage based on the number of spheres you created (4 spheres = 2d4, 3 spheres = 2d6, 2 spheres = 5d4, 1 sphere = 4d12).",
				completeRewrite : true, // indicates that the changes here even overwrite the tooltip
				changes : "The listing of 'Flaming Sphere' has been completely changed to reflect the 'Ball Lightning' ability of the Ring of Shooting Stars. Even the information above is changed."
			},
			"magic missile" : { // change into Shooting Stars
				name : "Shooting Stars",
				source : [["SRD", 237], ["D", 192]],
				level : "",
				school : "Evoc",
				time : "1 a",
				range : "60 ft",
				components : "M\u0192",
				compMaterial : "Spells cast by magic items don't require any components other than the magic item itself.",
				duration : "Instantaneous",
				description : "15-ft cube in range per expended charge; all crea in cubes take 5d4 Fire damage, save halves",
				descriptionFull : "You can expend 1 to 3 charges from the ring of shooting starts as an action. For every charge you expend, you launch a glowing mote of light from the ring at a point you can see within 60 feet of you. Each creature within a 15-foot cube originating from that point is showered in sparks and must make a DC 15 Dexterity saving throw. taking 5d4 fire damage on a failed save, or half as much damage on a successful one.",
				completeRewrite : true, // indicates that the changes here even overwrite the tooltip
				changes : "The listing of 'Magic Missile' has been completely changed to reflect the 'Shooting Stars' ability of the Ring of Shooting Stars. Even the information above is changed."
			}
		}
	},
	"ring of spell storing (ddal4-8)" : {    // contains contributions by Fourleafclov
		name : "Ring of Spell Storing (DDAL4-8)",
		source : [["AL","S4"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "This ring looks like a plain gold band, though tarnished & chipped, & can be attuned to in 1 min. When wearer casts an arcane spell, they feel cold & faint of breath. The ring can hold 5 lvls of spells. Any creature can cast into the ring w/ a 1st-5th lvl spell slot, which is stored if space. You can cast stored spells from the ring, freeing up space, using original caster's atk bonus, save DC, spellcasting modifier, & spell slot lvl.",
		descriptionFull : "This ring appears to be a plain gold band, though tarnished and chipped. When the wearer casts an arcane spell they feel cold and faint of breath (an unsettling experience that causes no damage or condition change). A character may attune to this item in 1 minute. This ring stores spells cast into it, holding them until the attuned wearer uses them. The ring can store up to 5 levels worth of spells at a time. When found, it contains 1d6-1 levels of stored spells chosen by the DM.\n   Any creature can cast a spell of 1st through 5th level into the ring by touching the ring as the spell is cast. The spell has no effect, other than to be stored in the ring. If the ring can't hold the spell, the spell is expended without effect. The level of the slot used to cast the spell determines how much space it uses.\n   While wearing this ring, you can cast any spell stored in it. The spell uses the slot level, spell save DC, spell attack bonus, and spellcasting ability of the original caster, but is otherwise treated as if you cast the spell. The spell cast from the ring is no longer stored in it, freeing up space.",
		attunement : true,
		allowDuplicates : true,
		limfeaname : "Ring of Spell Storing",
		usages : "5 lvls",
		recovery : " Cast"
	},
	"ring of spell storing (ddep5-2)" : {
		name : "Ring of Spell Storing (DDEP5-2)",
		source : [["AL","S5"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "The head of this ring is shaped like a lidded dwarven tankard. The wearer can use their thumb to lift the tankard’s hinged lid & unleash the magic bound within. The ring can hold 5 lvls of spells. Any creature can cast into the ring w/ a 1st-5th lvl spell slot, which is stored if space. You can cast stored spells from the ring, freeing up space, using original caster's atk bonus, save DC, spellcasting modifier, & spell slot lvl.",
		descriptionFull : "The head of this ring is fashioned like a lidded dwarven tankard. The wearer can use their thumb to lift the tankard’s hinged lid, unleashing the magic bound within. This ring stores spells cast into it, holding them until the attuned wearer uses them. The ring can store up to 5 levels worth of spells at a time. When found, it contains 1d6-1 levels of stored spells chosen by the DM.\n   Any creature can cast a spell of 1st through 5th level into the ring by touching the ring as the spell is cast. The spell has no effect, other than to be stored in the ring. If the ring can't hold the spell, the spell is expended without effect. The level of the slot used to cast the spell determines how much space it uses.\n   While wearing this ring, you can cast any spell stored in it. The spell uses the slot level, spell save DC, spell attack bonus, and spellcasting ability of the original caster, but is otherwise treated as if you cast the spell. The spell cast from the ring is no longer stored in it, freeing up space.",
		attunement : true,
		allowDuplicates : true,
		limfeaname : "Ring of Spell Storing",
		usages : "5 lvls",
		recovery : " Cast"
	},
	"ring of swimming (ccc-almog-27 dagon1-2)" : {
		name : "Ring of Swimming (CCC-ALMOG-27 DAGON1-2)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "B",
		description : "While wearing this ring, you have no dreams or nightmares. Despite your restful slumber, you feel uneasy, as if your dreams are being consumed by an unseen force. You have a swimming speed of 40 ft while wearing this ring.",
		descriptionFull : "While wearing this ring, the user has no dreams or nightmares. Despite their restful slumber, the user experiences a sense of unease, as if the dreams are being drawn away and consumed by some unseen force. You have a swimming speed of 40 feet while wearing this ring.",
		speed : { swim : { spd : "fixed 40", enc : "fixed 30" } }
	},
	"ring of swimming (ddal5-6)" : {
		name : "Ring of Swimming (DDAL5-6)",
		source : [["AL","S5"]],
		rarity : "uncommon",
		magicItemTable : "B",
		description : "This ring is made of a single piece of cartilage carved to look like the open jaws of a shark closing around the wearer’s finger. You have a swimming speed of 40 feet while wearing this ring.",
		speed : { swim : { spd : "fixed 40", enc : "fixed 30" } }
	},
	"ring of telekinesis (ddep0-1)" : {
		name : "Ring of Telekinesis (DDEP0-1)",
		source : [["AL","S0"]],
		rarity : "very rare",
		magicItemTable : "H",
		description : "This ring is crafted of electrum & free of adornement save faint draconic runes etched on the inside of the band. When used, the ring emits a high pitched rining, not unlike a tuning fork. While wearing this ring, you can cast the Telekinesis spell at will, but you can only target an object up to 1000 lb that isn't being worn or carried.",
		descriptionFull : "This ring is crafted of electrum and free of adornement save faint draconic runes etched on the inside of the band. When used by an attuned owner the ring emits a high pitched rining, not unlike a tuning fork. While wearing this ring, you can cast the Telekinesis spell at will, but you can only target an object up to 1000 lb that isn't being worn or carried. You can move it up to 30 ft in any direction, but not more than 60 ft away from you. You can exert fine control on it, such as manipulating a tool, opening a door, or pouring out its contents.",
		attunement : true,
		spellcastingBonus : {
			name : "At will",
			spells : ["telekinesis"],
			selection : ["telekinesis"],
			firstCol : "atwill"
		},
		spellChanges : {
			"telekinesis" : {
				description : "Move 1 object up to 1000 lb 30 ft and exert fine control over it; as 1 a following rounds",
				changes : "The Ring of Telekinesis only allows manupilation of unattended objects."
			}
		}
	},
	"ring of warmth (ccc-elf-1)" : {
		name : "Ring of Warmth (CCC-ELF-1)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "At first glance, this platinum ring is engraved w/ golden leaves. Upon closer inspection, it shows a story of an elven man & human woman falling in love. Two elven words are engraved on the inside, but the text is too ancient to understand. These may be names of the first half elf's parents or just the notes of the lovebirds' song. While wearing this ring, you have resistance to cold dmg. You & everything you wear/carry are unharmed by temperatures as low as -50 \u00B0F.",
		descriptionFull : "At first glance, this platinum ring has golden leaves engraved onto it. Upon closer inspection, though, you notice it depicts a story of an elven man and human woman falling in love. Two elven words are engraved on the inside of the ring, likely the couples’ names, but the text is too ancient for anyone to understand. One might wonder whether these are the names of the parents of the first half elf, or just the notes of two lovebirds' song. The real question is where did Bert find this ring in the first place!\n   While wearing this ring, you have resistance to cold damage. In addition, you and everything you wear and carry are unharmed by temperatures as low as -50 degrees Fahrenheit.",
		attunement : true,
		dmgres : ["Cold"]
	},
	"ring of warmth (ccc-wwc-5)" : {
		name : "Ring of Warmth (CCC-WWC-5)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "The band of this ring is made of unblemished silver that's slightly cool to the touch. While wearing it, you have resistance to cold dmg. You & everything you wear/carry are unharmed by temperatures as low as -50 \u00B0F.",
		descriptionFull : "The band of this ring is made of unblemished silver that is slightly cool to the touch.\n   While wearing this ring, you have resistance to cold damage. In addition, you and everything you wear and carry are unharmed by temperatures as low as -50 degrees Fahrenheit.",
		attunement : true,
		dmgres : ["Cold"]
	},
	"ring of water walking (ddex2-7)" : {
		name : "Ring of Water Walking (DDEX2-7)",
		source : [["AL","S2"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description: "This band of flaking, rusted iron band seems to be constantly damp and quickly soaks through any gloves worn over it. While wearing this ring, you can stand on and move across any liquid surface as if it were solid ground.",
		},
}
	
MagicItemsList["al rods"] = {
	name : "AL Rods",
	type : "rod",
	allowDuplicates : true,
	choices : ["Chauncey’s Codbone Cosherer (CCC-COTN-1-1)","Immovable Rod (CCC-DWB-CW-1)","Immovable Rod (CCC-TRI-16)","Lor’Shon va’Na’eel, Rod of Absorption (DDAL0-2E)","Rod of Absorption (CCC-HATMS2-2)","Rod of Absorption (CCC-TRI-2)","Rod of Alertness (DDAL0-3)","Rod of the Pact Keeper +1 (DDEX2-8)", "Rod of the Pact Keeper +2 (DDEX3-13)","Rod of the Pact Keeper +2 (DDAL9-20)","Rod of Resurrection (DDAL8-18)","Rod of Rulership (CCC-ELF-4)","Rod of Rulership (CCC-TRI-3)","Rod of Security (DDAL0-1)"],
	"chauncey’s codbone cosherer (ccc-cotn-1-1)" : {
		name : "Chauncey’s Codbone Cosherer (Immovable Rod)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "B",
		description : "This gnarled stick is a mix of bramble, vine & birchwood, twisted around the spine of a humongous Moonsea Cod. Druidic runes are etched in the handle, their meaning lost to the seasons. You can thread a line though the spine to a crude reel made of a sea chub’s skull. While activated, if any fish-like beasts are w/i 10ft, the skull exclaims, “You got a bite!”. Action to press button on end, magically fixing the rod in place or making it movable. Once fixed, it holds 8000 lb. More causes it to deactivate. DC 30 Str check to move 10ft.",
		descriptionFull : "This gnarled stick is a warped mix of bramble, vine and birchwood, twisted around the spine of a humongous Moonsea Cod. Druidic runes are etched in the handle, their meaning, lost through the seasons. The fish spine permits threading of a line down to a crude reel made of a sea chub’s skull. While activated, if there are any fish-like beasts within 10ft. of the rod, it will shake, and the skull will excitedly exclaim, “You got a bite! You got a bite!”. There's a button on one end. You can use an action to press the button, which causes the rod to become magically fixed in place. Until you or another creature uses an action to push the button again, the rod doesn't move, even if it is defying gravity. The rod can hold up to 8,000 pounds of weight. More weight causes the rod to deactivate and fall. A creature can use an action to make a DC 30 Strength check, moving the fixed rod up to 10 feet on a success",
		weight : 2,
		action : [["action", "Immovable Rod (activate/deactivate)"]]
	},
	"immovable rod (ccc-dwb-cw-1)" : {
		name : "Immovable Rod (CCC-DWB-CW-1)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "B",
		description : "This well-worn rod is made of dragon talons and scales and has a button on one end. While active, you can hear the tiny whir of a small motor. You can use an action to press the button, magically fixing the rod in place or making it movable. Once fixed, it holds 8000 lb. More causes it to deactivate. DC 30 Str check to move 10ft.",
		descriptionFull : "This well-worn rod is made of dragon talons and scales and has a button on one end. While active, you can hear the tiny whir of a small motor. You can use an action to press the button, which causes the rod to become magically fixed in place. Until you or another creature uses an action to push the button again, the rod doesn't move, even if it is defying gravity. The rod can hold up to 8,000 pounds of weight. More weight causes the rod to deactivate and fall. A creature can use an action to make a DC 30 Strength check, moving the fixed rod up to 10 feet on a success",
		weight : 2,
		action : [["action", "Immovable Rod (activate/deactivate)"]]
	},
	"immovable rod (ccc-tri-16)" : {
		name : "Immovable Rod (CCC-TRI-16)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "B",
		description : "This rod is a beautifully crafted collector’s item made of jet-black obsidian, with veins of bright purple crystal & golden filigree & has a button on one end. You can use an action to press the button, magically fixing the rod in place or making it movable. Once fixed, it holds 8000 lb. More causes it to deactivate. DC 30 Str check to move 10ft.",
		descriptionFull : "This rod is a beautifully crafted collector’s item made of jet-black obsidian, with veins of bright purple crystal and golden filigree and has a button on one end. You can use an action to press the button, which causes the rod to become magically fixed in place. Until you or another creature uses an action to push the button again, the rod doesn't move, even if it is defying gravity. The rod can hold up to 8,000 pounds of weight. More weight causes the rod to deactivate and fall. A creature can use an action to make a DC 30 Strength check, moving the fixed rod up to 10 feet on a success",
		weight : 2,
		action : [["action", "Immovable Rod (activate/deactivate)"]]
	},
	"lor’shon va’na’eel, rod of absorption (ddal0-2e)" : {
		name : "Lor’Shon va’Na’eel, Rod of Absorption",
		source : [["AL","S0"]],
		rarity : "very rare",
		magicItemTable : "H",
		description : "The Lor’Shon va’Na’eel empathically imparts a seething hunger to destroy others' magic & funnel that power into the holder. The obsidian rod doesn't control your actions but fills your dreams w/ scorn for others who employ magic & hubris for your talents. When grasped, the end of this rod wraps firmly around your wrist. As a reaction, you can absorb a spell targeting only you, w/o an area of effect. It does nothing & its spell slot lvl is stored in the rod. You can expend these lvls as slots to power your own spells up to 5th-lvl. Once the rod has absorbed 50 lvls, the magic disappears.",
		descriptionLong : "The Lor’Shon va’Na’eel empathically imparts a seething hunger to destroy the magic of others and funnel that power into the holder. The obsidian rod doesn't control your actions but fills your dreams with scorn for others who employ magic and hubris for your talents. When grasped by the attuned, the end of this rod wraps firmly around your wrist. As a reaction while holding this rod, you can use it to absorb a spell targeting only you and without an area of effect. The spell has no effect and its energy is stored in the rod. This energy has the same level as the spell when it was cast. Once the rod has absorbed 50 levels, it can absorb no more. You can expend these levels as if they are spell slots to power your own spells up to 5th-level and only for spell slot levels you have access to otherwise; i.e. you can expend 3 lvls to cast one of your spells using a 3rd-lvl spell slot. When the rod can't absorb any more lvls and has no energy left, it becomes nonmagical.",
		descriptionFull : "The Lor’Shon va’Na’eel empathically imparts a seething hunger to destroy the magic of others and funnel that power into the holder. The obsidian rod does not control the owner’s actions but fills their dreams with scorn for others who employ magic and hubris for the owner’s talents. When grasped by the attuned, the end of this rod wraps firmly around the wielder’s wrist.\n   While holding this rod, you can use your reaction to absorb a spell that is targeting only you and not with an area of effect. The absorbed spell's effect is canceled, and the spell's energy\u2014not the spell itself\u2014is stored in the rod. The energy has the same level as the spell when it was cast. The rod can absorb and store up to 50 levels of energy over the course of its existence. Once the rod absorbs 50 levels of energy, it can't absorb more. If you are targeted by a spell that the rod can't store, the rod has no effect on that spell.\n   When you become attuned to the rod, you know how many levels of energy the rod has absorbed over the course of its existence, and how many levels of spell energy it currently has stored.\n   If you are a spellcaster holding the rod, you can convert energy stored in it into spell slots to cast spells you have prepared or know. You can create spell slots only of a level equal to or lower than your own spell slots, up to a maximum of 5th level. You use the stored levels in place of your slots, but otherwise cast the spell as normal. For example, you can use 3 levels stored in the rod as a 3rd-level spell slot.\n   A newly found rod has 1d10 levels of spell energy stored in it already. A rod that can no longer absorb spell energy and has no energy remaining becomes nonmagical.",
		attunement : true,
		weight : 2,
		action : [["reaction", "Rod of Absorption"]],
		extraLimitedFeatures : [{
			name : "Rod of Absorption [Total Levels Absorbed]",
			usages : 50,
			recovery : "Never"
		}, {
			name : "Rod of Absorption [Stored Levels]",
			usages : " ",
			recovery : "Never"
		}],
	},
	"rod of absorption (ccc-hatms2-2)" : {
		name : "Rod of Absorption (CCC-HATMS2-2)",
		source : [["AL","CCC"]],
		rarity : "very rare",
		magicItemTable : "H",
		description : "The rod is a 2-ft length of suth-wood, carved w/ alchemical symbols. As a reaction while holding it, you can absorb a spell targeting only you, w/o an area of effect. It does nothing & its spell slot lvl is stored in the rod. You can expend these lvls as slots to power your spells up to 5th-lvl. Once the rod has absorbed 50 lvls, the magic disappears.",
		descriptionLong : "The rod is a 2-ft length of suth-wood, carved with various alchemical symbols. As a reaction while holding this rod, you can use it to absorb a spell targeting only you & without an area of effect. The spell has no effect & its energy is stored in the rod. This energy has the same level as the spell when it was cast. Once the rod has absorbed 50 levels, it can absorb no more. You can expend these levels as if they are spell slots to power your own spells up to 5th-level & only for spell slot levels you have access to otherwise; i.e. you can expend 3 levels to cast one of your spells using a 3rd-level spell slot. When the rod can't absorb any more levels & has no energy left, it becomes nonmagical.",
		descriptionFull : "The rod is a two-foot long rod of suth-wood, carved with various alchemical symbols.\n   While holding this rod, you can use your reaction to absorb a spell that is targeting only you and not with an area of effect. The absorbed spell's effect is canceled, and the spell's energy\u2014not the spell itself\u2014is stored in the rod. The energy has the same level as the spell when it was cast. The rod can absorb and store up to 50 levels of energy over the course of its existence. Once the rod absorbs 50 levels of energy, it can't absorb more. If you are targeted by a spell that the rod can't store, the rod has no effect on that spell.\n   When you become attuned to the rod, you know how many levels of energy the rod has absorbed over the course of its existence, and how many levels of spell energy it currently has stored.\n   If you are a spellcaster holding the rod, you can convert energy stored in it into spell slots to cast spells you have prepared or know. You can create spell slots only of a level equal to or lower than your own spell slots, up to a maximum of 5th level. You use the stored levels in place of your slots, but otherwise cast the spell as normal. For example, you can use 3 levels stored in the rod as a 3rd-level spell slot.\n   A newly found rod has 1d10 levels of spell energy stored in it already. A rod that can no longer absorb spell energy and has no energy remaining becomes nonmagical.",
		attunement : true,
		weight : 2,
		action : [["reaction", "Rod of Absorption"]],
		extraLimitedFeatures : [{
			name : "Rod of Absorption [Total Levels Absorbed]",
			usages : 50,
			recovery : "Never"
		}, {
			name : "Rod of Absorption [Stored Levels]",
			usages : " ",
			recovery : "Never"
		}],
	},
	"rod of absorption (ccc-tri-2)" : {
		name : "Rod of Absorption (CCC-TRI-2)",
		source : [["AL","CCC"]],
		rarity : "very rare",
		magicItemTable : "H",
		description : "Made from the thigh bone of a Drow Matron, this rod has black veins along its length. You hear Lloth screaming w/ incoherent rage when absorbing spells & develop a fondness for spiders, which are often found near you. As a reaction while holding the rod, you can absorb spells targeting only you, w/o an area of effect. It does nothing & its spell slot lvl is stored in the rod. You can expend these lvls as slots to power your spells up to 5th-lvl. Once the rod has absorbed 50 lvls, the magic disappears.",
		descriptionLong : "Made from the thigh bone of a Drow Matron of Lloth, this rod has black veins along its length. You hear Lloth screaming with incoherent rage when absorbing spells and develop a fondness for spiders of all types. Spiders tend to found near or on the wielder. As a reaction while holding this rod, you can use it to absorb a spell targeting only you & without an area of effect. The spell has no effect & its energy is stored in the rod. This energy has the same level as the spell when it was cast. Once the rod has absorbed 50 levels, it can absorb no more. You can expend these levels as if they are spell slots to power your own spells up to 5th-level & only for spell slot levels you have access to otherwise; i.e. you can expend 3 levels to cast one of your spells using a 3rd-level spell slot. When the rod can't absorb any more levels & has no energy left, it becomes nonmagical.",
		descriptionFull : "Made from the thigh bone of a Drow Matron of Lloth, this rod has veins of midnight black along the length of it. When absorbing spell levels, the wielder hears Lloth screaming with incoherent rage as the spell is absorbed. While attuned to this item, the wielder develops a fondness for spiders of all types and spiders tend to found near or on the wielder.\n   While holding this rod, you can use your reaction to absorb a spell that is targeting only you and not with an area of effect. The absorbed spell's effect is canceled, and the spell's energy\u2014not the spell itself\u2014is stored in the rod. The energy has the same level as the spell when it was cast. The rod can absorb and store up to 50 levels of energy over the course of its existence. Once the rod absorbs 50 levels of energy, it can't absorb more. If you are targeted by a spell that the rod can't store, the rod has no effect on that spell.\n   When you become attuned to the rod, you know how many levels of energy the rod has absorbed over the course of its existence, and how many levels of spell energy it currently has stored.\n   If you are a spellcaster holding the rod, you can convert energy stored in it into spell slots to cast spells you have prepared or know. You can create spell slots only of a level equal to or lower than your own spell slots, up to a maximum of 5th level. You use the stored levels in place of your slots, but otherwise cast the spell as normal. For example, you can use 3 levels stored in the rod as a 3rd-level spell slot.\n   A newly found rod has 1d10 levels of spell energy stored in it already. A rod that can no longer absorb spell energy and has no energy remaining becomes nonmagical.",
		attunement : true,
		weight : 2,
		action : [["reaction", "Rod of Absorption"]],
		extraLimitedFeatures : [{
			name : "Rod of Absorption [Total Levels Absorbed]",
			usages : 50,
			recovery : "Never"
		}, {
			name : "Rod of Absorption [Stored Levels]",
			usages : " ",
			recovery : "Never"
		}],
	},
	"rod of alertness (ddal0-3)" : { // contains contributions by SoilentBrad
		name : "Rod of Alertness (DDAL0-3)",
		source : [["AL","S0"]],
		rarity : "very rare",
		magicItemTable : "H",
		description : "This slender crystal rod is topped with flanged head made of obsidian, & tipped with horrifically sharp silver needles. The center seems to be filled with a curious liquid, within which several eyes are floating. While holding the rod, you have adv. on initiative & Perception chks & can cast certain spells. As an action once/dawn, you can plant it in the ground so it sheds 60-ft radius bright light, dim for another 60 ft for 10 min. In the bright light, you & your allies gain +1 AC, +1 bonus to saves, & can sense invisible hostiles.",
		descriptionLong : "This slender crystal rod is topped with flanged head made of obsidian, and tipped with horrifically sharp silver needles. The center seems to be filled with a curious liquid, within which several free-floating eyes can be spotted. While holding this rod, you have advantage on initiative and Wisdom (Perception) checks. As an action, you can use it to cast either Detect Evil and Good, Detect Magic, Detect Poison and Disease, or See Invisibility. As an action once per dawn, you can plant the rod in the ground, making its head shed bright light in a 60-ft radius and dim light for another 60 ft. This lasts 10 minutes or until a creature pulls the rod from the ground as an action. While in the bright light, you and your allies gain +1 bonus to AC and saving throws and can sense the location of any invisible hostile creatures that are within the bright light.",
		descriptionFull : "This slender crystal rod is topped with flanged head made of obsidian, and tipped with horrifically sharp silver needles. The center seems to be filled with a curious liquid, within which several free-floating eyes can be spotted. It has the following properties.\n   " + toUni("Alertness") + ". While holding the rod, you have advantage on Wisdom (Perception) checks and on rolls for initiative.\n   " + toUni("Spells") + ". While holding the rod, you can use an action to cast one of the following spells from it: Detect Evil and Good, Detect Magic, Detect Poison and Disease, or See Invisibility.\n   " + toUni("Protective Aura") + ". As an action, you can plant the haft end of the rod in the ground, whereupon the rod's head sheds bright light in a 60-foot radius and dim light for an additional 60 feet. While in that bright light, you and any creature that is friendly to you gain a +1 bonus to AC and saving throws and can sense the location of any invisible hostile creature that is also in the bright light.\n   The rod's head stops glowing and the effect ends after 10 minutes, or when a creature uses an action to pull the rod from the ground. This property can't be used again until the next dawn.",
		attunement : true,
		weight : 2,
		usages : 1,
		recovery : "dawn",
		limfeaname : "Rod of Alertness (Plant in Ground)",
		advantages : [["Initiative", true], ["Perception", true]],
		vision : [["Adv. on Perception checks", 0]],
		action : [["action", ""]],
		spellcastingBonus: [{
			name: "Robe of Alertness",
			spells: ["detect evil and good", "detect magic", "detect poison and disease", "see invisibility"],
			selection: ["detect evil and good", "detect magic", "detect poison and disease", "see invisibility"],
			times: 4
		}]
	},
	"rod of the pact keeper +1 (ddex2-8)" : {
		name : "Rod of the Pact Keeper +1 (DDEX2-8)",
		source : [["AL","S2"]],
		attunement : true,
		description: "This rod is always covered in a thin layer of slippery, foul—smelling slime, whenever it is drawn or picked up, the creature doing so must succeed on a DC 10 Dexterity saving throw or drop it. While holding this rod, you gain a +1 bonus to spell attack rolls and to the saving throw DCs of you warlock spells. As an action once per long rest, you can regain one warlock spell slot while holding the rod.",
		weight : 2,
		prerequisite : "Requires attunement by a warlock",
		prereqeval : function(v) { return classes.known.warlock; },
		limfeaname : "Rod of the Pact Keeper (warlock spell slot)",
		usages : 1,
		recovery : "long rest",
		action : [["action", ""]],
		rarity : "uncommon",
		magicItemTable : "F",
		calcChanges : {
			spellCalc : [
				function (type, spellcasters, ability) {
					if (type != "prepare" && (/warlock/).test(spellcasters)) return 1;
				},
				"I gain a +1 bonus to spell attack rolls and to the saving throw DCs of my warlock spells."
				],
		}
	},
	"rod of the pact keeper +2 (ddex3-13)" : {
		name : "Rod of the Pact Keeper +2 (DDEX3-13)",
		source : [["AL","S3"]],
		attunement : true,
		description: "This rod looks like three tentacles wrapped around each other. Upon speaking the word “Xicvizt”, the tentacles writhe as though alive and are wreathed in purple fire that sheds dim light in a 5-foot radius. While holding this rod, you gain a +2 bonus to spell attack rolls and to the saving throw DCs of you warlock spells. As an action once per long rest, you can regain one warlock spell slot while holding the rod.",
		weight : 2,
		prerequisite : "Requires attunement by a warlock",
		prereqeval : function(v) { return classes.known.warlock; },
		limfeaname : "Rod of the Pact Keeper (warlock spell slot)",
		usages : 1,
		recovery : "long rest",
		action : [["action", ""]],
		rarity : "rare",
		magicItemTable : "G",
		calcChanges : {
			spellCalc : [
				function (type, spellcasters, ability) {
					if (type != "prepare" && (/warlock/).test(spellcasters)) return 2;
				},
				"I gain a +2 bonus to spell attack rolls and to the saving throw DCs of my warlock spells."
				],
		}
	},
	"rod of the pact keeper +2 (ddal9-20)" : {
		name : "Rod of the Pact Keeper +2 (DDAL9-20)",
		source : [["AL","S9"]],
		attunement : true,
		description: "This rod has an opal carved like a clawed fist clutching a skull at its tip. The haft is covered in the names of angels, written backwards in Infernal. While holding this rod, you gain a +2 bonus to spell attack rolls and to the saving throw DCs of you warlock spells. As an action once per long rest, you can regain one warlock spell slot while holding the rod.",
		weight : 2,
		prerequisite : "Requires attunement by a warlock",
		prereqeval : function(v) { return classes.known.warlock; },
		limfeaname : "Rod of the Pact Keeper (warlock spell slot)",
		usages : 1,
		recovery : "long rest",
		action : [["action", ""]],
		rarity : "rare",
		magicItemTable : "G",
		calcChanges : {
			spellCalc : [
				function (type, spellcasters, ability) {
					if (type != "prepare" && (/warlock/).test(spellcasters)) return 2;
				},
				"I gain a +2 bonus to spell attack rolls and to the saving throw DCs of my warlock spells."
				],
		}
	},
	"rod of resurrection (ddal8-18)" : {
		name : "Rod of Resurrection (DDAL8-18)",
		source : [["AL","S8"]],
		rarity : "legendary",
		magicItemTable : "I",
		description : "This rod is engraved with sun symbols and bejeweled with faceted citrines. It glows equal to a torch when within 100 ft. of undead. The rod has 5 charges and regains 1 expended charge daily at dawn. While holding it, you can use an action to expend 1 charge and cast Heal from it, or expend 5 charges and cast Resurrection. If the rod is reduced to 0 charges, roll a d20. On a 1, the rod disappears in a burst of radiance.",
		descriptionFull : "This rod is engraved with sun symbols and bejeweled with faceted citrines. It glows equal to a torch when within 100 ft. of undead. The rod has 5 charges. While you hold it, you can use an action to cast one of the following spells from it: Heal (expends 1 charge) or Resurrection (expends 5 charges).\n   The rod regains 1 expended charge daily at dawn. If the rod is reduced to 0 charges, roll a d20. On a 1, the rod disappears in a burst of radiance.",
		attunement : true,
		weight : 2,
		prerequisite : "Requires attunement by a cleric, druid, or paladin",
		prereqeval : function(v) { return classes.known.cleric || classes.known.druid || classes.known.paladin ? true : false; },
		limfeaname : "Rod of Resurrection",
		usages : 5,
		recovery : "dawn",
		additional : "regains 1",
		spellFirstColTitle: "Ch",
		spellcastingBonus : [{
			name : "1 charge",
			spells : ["heal"],
			selection : ["heal"],
			firstCol : 1
		}, {
			name : "5 charges",
			spells : ["resurrection"],
			selection : ["resurrection"],
			firstCol : 5
		}],
		spellChanges : {
			"resurrection" : {
				time : "1 a",
				changes : "Casting time is only 1 action instead of 1 hour."
					},
				}
			},
	"rod of rulership (ccc-elf-4)" : {
		name : "Rod of Rulership (CCC-ELF-4)",
		source : [["AL","CCC"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "This rod is made from bone with dried bloodstains all over it that can't be cleaned. You often feel forgetful & have a strange craving for meat. As an action once per dawn, you can use the rod to have visible chosen creatures w/i 120 ft make a DC 15 Wis save or be charmed for 8 hrs. While charmed, a target regards you as a trusted leader. It stops being charmed if you or your allies harm it or command it to go against its nature.",
		descriptionFull : "This rod is made out of bone with dried blood stains all over it that can not be cleaned. The bearer of this rod often feels forgetful and has a strange craving for meat.\n   You can use an action to present the rod and command obedience from each creature of your choice that you can see within 120 feet of you. Each target must succeed on a DC 15 Wisdom saving throw or be charmed by you for 8 hours. While charmed in this way, the creature regards you as its trusted leader. If harmed by you or your companions, or commanded to do something contrary to its nature, a target ceases to be charmed in this way. The rod can't be used again until the next dawn.",
		attunement : true,
		weight : 2,
		limfeaname : "Rod of Rulership",
		usages : 1,
		action : [["action", ""]],
		recovery : "dawn"
	},
	"rod of rulership (ccc-tri-3)" : {
		name : "Rod of Rulership (CCC-TRI-3)",
		source : [["AL","CCC"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "This ornate wooden rod is dark green & 2.5 ft long. It has a heavy circular scepter head, w/ green banding & rubies interlaid in a gold crown. The base is a gold-leafed leather pommel w/ a tassel. As an action once per dawn, you can use the rod to have visible chosen creatures w/i 120 ft make a DC 15 Wis save or be charmed for 8 hrs. While charmed, a target regards you as a trusted leader. It stops being charmed if you or your allies harm it or command it to go against its nature.",
		descriptionFull : "This ornate wooden rod is a dark green hue, about two and a half feet in length. The head of the rod is a circular, heavy scepter head, with green banding and rubies interlaid into a gold crown. The base of the rod is a gold-leafed leather pommel with a tassel.\n   You can use an action to present the rod and command obedience from each creature of your choice that you can see within 120 feet of you. Each target must succeed on a DC 15 Wisdom saving throw or be charmed by you for 8 hours. While charmed in this way, the creature regards you as its trusted leader. If harmed by you or your companions, or commanded to do something contrary to its nature, a target ceases to be charmed in this way. The rod can't be used again until the next dawn.",
		attunement : true,
		weight : 2,
		limfeaname : "Rod of Rulership",
		usages : 1,
		action : [["action", ""]],
		recovery : "dawn"
	},
	"rod of security (ddal0-1)" : {
		name : "Rod of Security (DDAL0-1)",
		source : [["AL","S0"]],
		rarity : "very rare",
		magicItemTable : "H",
		description : "This wrought iron rod is covered in tiny padlocks & always cold to the touch. As an action, the rod will transport you & up to 6 willing creatures to a comfortable cabin with no exit. The windows show a dark & foreboding forest & a tall spired castle through the gloom. After 24 hrs or as another action, you & your allies return to the exact location you left. Creatures within the cabin don't age, have enough to eat & drink, & regain HP every hour as if having spent 1 HD.",
		descriptionFull : "This wrought iron rod is covered in tiny padlocks and always cold to the touch. As an action, the rod will transport you and up to six willing companions to a comfortable cabin with no exit save for the rod. The windows display a dark and foreboding forest, and a tall spired castle can be seen through the gloom. After 24 hours or as another action, you and your allies return to the exact location from which you left.\n   For each hour spent in the extraplanar space, a visitor regains hit points as if it had spent 1 Hit Die. Also, creatures don't age while in the space, although time passes normally.\n   When the time runs out or you use an action to end it, all visitors reappear in the location they occupied when you activated the rod, or an unoccupied space nearest that location. The rod can't be used again until ten days have passed.",
		weight : 2,
		limfeaname : "Rod of Security",
		usages: 1,
		recovery: "10 days",
		action : [["action", ""]]
	},
}
	
MagicItemsList["al wands"] = {
		name : "AL Wands",
		type : "wand",
		allowDuplicates : true,
	choices : ["Auntie Helena's Wand of Paralysis (CCC-TAROT2-3)","Ilmater's Respite, Wand of Smiles (CCC-ELF-3-2)","Rooster, Wand of Wonder (DDAL0-3)","Wand of Binding (DDAL4-10)","Wand of Fear (CCC-BMG-45 PHLAN4-3)","Wand of Magic Detection (DDEX1-2)", "Wand of Lightning Bolts (DDEX2-9)", "Wand of Lightning Bolts (DDEP7-2)","Wand of Lightning Bolts (DDAL8-9)","Wand of Magic Missiles (CCC-SKULL1-2)","Kianne Statuette, Wand of Magic Missiles (CCC-TAROT2-9)","Wand of Magic Missiles (CCC-WWC-1)","Wand of Polymorph (DDAL7-13)","Wand of Polymorph (DDEP7-2)","Wand of Pyrotechnics (DDAL0-7)","Wand of Secrets (CCC-SQC-3-1)","Wand of Secrets (DDAL8-1)","Wand of Secrets (DDAL9-14)","Wand of Smiles (DDIA-XGE)","Wand of the War Mage +1 (DDEX3-10)","Wand of the War Mage +2 (CCC-ROZK1-1)","Wand of the War Mage +3 (CCC-MIND1-3)","Wand of the War Mage +3 (DDEP7-2)","Wand of Web (DDAL5-7)","Wand of Wonder (CCC-CIC-5)"],
	"auntie helena's wand of paralysis (ccc-tarot2-3)" : {
		name : "Auntie Helena's Wand of Paralysis (CCC-TAROT2-3)",
		source : [["AL","CCC"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "This prickly gnarled piece of a corrupted Treant is activated by a drop of blood. It has 7 charges, regaining 1d6+1 at dawn. As an action, you can spend 1 charge to have a creature w/i 60 ft make a DC 15 Con save or be paralyzed for 1 min. It can repeat the save at the end of each turn. When a creature fails the save, they imagine themselves turning into a twisted, rotted tree. 5% chance the wand is destroyed when last charge used.",
		descriptionFull : "This prickly gnarled piece of a corrupted Treant requires a drop of blood to activate. When a creature fails their saving throw, they envision themselves turning into a twisted, rotted tree.\n   This wand has 7 charges. While holding it, you can use an action to expend 1 of its charges to cause a thin blue ray to streak from the tip toward a creature you can see within 60 feet of you. The target must succeed on a DC 15 Constitution saving throw or be paralyzed for 1 minute. At the end of each of the target's turns, it can repeat the saving throw, ending the effect on itself on a success.\n   The wand regains 1d6+1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.",
		attunement : true,
		weight : 1,
		prerequisite : "Requires attunement by a spellcaster",
		prereqeval : function(v) { return v.isSpellcaster; },
		action : [["action", "Wand of Paralysis"]]
	},
	"ilmater's respite, wand of smiles (ccc-elf-3-2)" : {
		name : "Ilmater's Respite, Wand of Smiles (CCC-ELF-3-2)",
		source : [["AL","CCC"]],
		rarity : "common",
		magicItemTable : "?",
		description : "This wand crafted from an illithid tentacle feels like it's squirming in you hand. Anyone staring at it for a minute hears an ominous voice in their head: “WARNING: best used on strangers & loved ones.” It has 3 charges, regained at dawn. As an action, expend 1 charge & target a visible humanoid w/i 30 ft. The target must pass a DC 10 Charisma save or be forced to smile for 1 min. If you expend the last charge, roll a d20. On a 1, the wand turns into a wand of scowls.",
		descriptionFull : "This wand crafted from an illithid tentacle feels like it is constantly squirming in the user’s hand. Anyone staring at the wand for a minute hears an ominous voice in their head: “WARNING: best used on strangers and loved ones.”\n  This wand has 3 charges. While holding it, you can use an action to expend 1 of its charges and target a humanoid you can see within 30 feet of you. The target must succeed on a DC 10 Charisma saving throw or be forced to smile for 1 minute.\n   The wand regains all expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand transforms into a wand of scowls.",
		weight : 1,
		limfeaname : "Wand of Smiles",
		action : [["action", ""]],
		usages : 3,
		recovery : "dawn"
	},
	"rooster, wand of wonder (ddal0-3)" : {
		name : "Rooster (Wand of Wonder)",
		source : [["AL","S0"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "Rhaugilath’s efforts to record the history of the Netherese Empire sometimes incorporated unsavory elements, such as the transmogrification of a chaos sorcerer into this elegant wand. Covered in swirls, whorls, dizzying patterns, knobs, & clicky bits, it thrums & hums in your hand. The wand has 7 charges, regaining 1d6+1 at dawn. When using the last charge, 5% chance the wand is destroyed. As an action while holding it, expend 1 charge, choose a target w/i 120 ft, & roll a 1d100 to see the effect, see Notes page.",
		descriptionFull : "Rhaugilath’s efforts to record the history of the Netherese Empire sometimes incorporated some unsavory elements… such as the transmogrification of a chaos sorcerer into this elegant wand. Covered in swirls, whorls, dizzying patterns, knobs, and clicky bits, it thrums and hums in your hand.\n   This wand has 7 charges. While holding it, you can use an action to expend 1 of its charges and choose a target within 120 feet of you. The target can be a creature, an object, or a point in space. Roll d100 and consult the following table to discover what happens." + desc([
			"If the effect causes you to cast a spell from the wand, the spell's save DC is 15. If the spell normally has a range expressed in feet, its range becomes 120 feet if it isn't already.",
			"If an effect covers an area, you must center the spell on and include the target. If an effect has multiple possible subjects, the DM randomly determines which ones are affected.",
			"The wand regains 1d6+1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into dust and is destroyed.\n",
			toUni("d100 and effects"),
			toUni("01-05") + ". You cast Slow.",
			toUni("06-10") + ". You cast Faerie Fire.",
			toUni("11-15") + ". You are stunned until the start of your next turn, believing something awesome just happened.",
			toUni("16-20") + ". You cast Gust of Wind.",
			toUni("21-25") + ". You cast Detect Thoughts on the target you chose. If you didn't target a creature, you instead take 1d6 psychic damage.",
			toUni("26-30") + ". You cast Stinking Cloud.",
			toUni("31-33") + ". Heavy rain falls in a 60-foot radius centered on the target. The area becomes lightly obscured. The rain falls until the start of your next turn.",
			toUni("34-36") + ". An animal appears in the unoccupied space nearest the target. The animal isn't under your control and acts as it normally would. Roll a d100 to determine which animal appears. On a 01-25, a rhinoceros appears; on a 26-50, an elephant appears; and on a 51-100, a rat appears.",
			toUni("37-46") + ". You cast Lightning Bolt.",
			toUni("47-49") + ". A cloud of 600 oversized butterflies fills a 30-foot radius centered on the target. The area becomes heavily obscured. The butterflies remain for 10 minutes.",
			toUni("50-53") + ". You enlarge the target as if you had cast Enlarge/Reduce. If the target can't be affected by that spell or if you didn't target a creature, you become the target.",
			toUni("54-58") + ". You cast Darkness.",
			toUni("59-62") + ". Grass grows on the ground in a 60-foot radius centered on the target. If grass is already there, it grows to ten times its normal size and remains overgrown for 1 minute.",
			toUni("63-65") + ". An object of the DM's choice disappears into the Ethereal Plane. The object must be neither worn nor carried, within 120 feet of the target, and no larger than 10 feet in any dimension.",
			toUni("66-69") + ". You shrink yourself as if you had cast Enlarge/Reduce on yourself.",
			toUni("70-79") + ". You cast Fireball.",
			toUni("80-84") + ". You cast Invisibility.",
			toUni("85-87") + ". Leaves grow from the target. If you chose a point in space as the target, leaves sprout from the creature nearest to that point. Unless they are picked off, the leaves turn brown and fall off after 24 hours.",
			toUni("88-90") + ". A stream of 1d4 \xD7 10 gems, each worth 1 gp, shoots from the wand's tip in a line 30 feet long and 5 feet wide. Each gem deals 1 bludgeoning damage, and the total damage of the gems is divided equally among all creatures in the line.",
			toUni("91-95") + ". A burst of colorful shimmering light extends from you in a 30-foot radius. You and each creature in the area that can see must succeed on a DC 15 Constitution saving throw or become blinded for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
			toUni("96-97") + ". The target's skin turns bright blue for 1d10 days. If you chose a point in space, the creature nearest to that point is affected.",
			toUni("98-00") + ". If you targeted a creature, it must make a DC 15 Constitution saving throw. If you didn't target a creature, you become the target and must make the saving throw. If the saving throw fails by 5 or more, the target is instantly petrified. On any other failed save, the target is restrained and begins to turn to stone. While restrained in this way, the target must repeat the saving throw at the end of its next turn, becoming petrified on a failure or ending the effect on a success. The petrification lasts until the target is freed by the Greater Restoration spell or similar magic."
		]),
		attunement : true,
		weight : 1,
		prerequisite : "Requires attunement by a spellcaster",
		prereqeval : function(v) { return v.isSpellcaster; },
		usages : 7,
		recovery : "dawn",
		additional : "regains 1d6+1",
		toNotesPage : [{
			name : "Table of Effects",
			popupName : "Wand of Wonder's Table of Effects",
			note : [
				"As an action I can expend 1 of the wand's 7 charges and choose a target within 120 ft of me. The target can be a creature, an object, or a point in space. Roll a d100 and consult the effect below to discover what happens.",
				"If the effect causes me to cast a spell from the wand, the spell's save DC is 15. If the spell normally has a range expressed in feet, its range becomes 120 ft if it isn't already.",
				"If an effect covers an area, I must center the spell on and include the target. If an effect has multiple possible subjects, the DM randomly determines which ones are affected.",
				"\nd100 RESULT AND EFFECTS",
				"01-05: I cast Slow.",
				"06-10: I cast Faerie Fire.",
				"11-15: I am stunned until the start of my next turn, believing something awesome just happened.",
				"16-20: I cast Gust of Wind.",
				"21-25: I cast Detect Thoughts on the target I chose. If I didn't target a creature, I instead take 1d6 psychic damage.",
				"26-30: I cast Stinking Cloud.",
				"31-33: Heavy rain falls in a 60-ft radius centered on the target. The area becomes lightly obscured. The rain falls until the start of my next turn.",
				"34-36: An animal appears in the unoccupied space nearest the target. The animal isn't under my control and acts as it normally would. Roll a d100 to determine which animal appears. On a 01-25, a rhinoceros appears; on a 26-50, an elephant appears; and on a 51-100, a rat appears.",
				"37-46: I cast Lightning Bolt.",
				"47-49: A cloud of 600 oversized butterflies fills a 30-ft radius centered on the target. The area becomes heavily obscured. The butterflies remain for 10 minutes.",
				"50-53: I enlarge the target as if I had cast Enlarge/Reduce. If the target can't be affected by that spell or if I didn't target a creature, I become the target.",
				"54-58: I cast Darkness.",
				"59-62: Grass grows on the ground in a 60-ft radius centered on the target. If grass is already there, it grows to ten times its normal size and remains overgrown for 1 minute.",
				"63-65: An object of the DM's choice disappears into the Ethereal Plane. The object must be neither worn nor carried, within 120 ft of the target, and no larger than 10 ft in any dimension.",
				"66-69: I shrink myself as if I had cast Enlarge/Reduce on myself.",
				"70-79: I cast Fireball.",
				"80-84: I cast Invisibility.",
				"85-87: Leaves grow from the target. If I chose a point in space as the target, leaves sprout from the creature nearest to that point. Unless they are picked off, the leaves turn brown and fall off after 24 hours.",
				"88-90: A stream of 1d4 \xD7 10 gems, each worth 1 gp, shoots from the wand's tip in a line 30 ft long and 5 ft wide. Each gem deals 1 bludgeoning damage, and the total damage of the gems is divided equally among all creatures in the line.",
				"91-95: A burst of colorful shimmering light extends from me in a 30-ft radius. Me and each creature in the area that can see must succeed on a DC 15 Constitution saving throw or become blinded for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
				"96-97: The target's skin turns bright blue for 1d10 days. If I chose a point in space, the creature nearest to that point is affected.",
				"98-00: If I targeted a creature, it must make a DC 15 Constitution saving throw. If I didn't target a creature, I become the target and must make the saving throw. If the saving throw fails by 5 or more, the target is instantly petrified. On any other failed save, the target is restrained and begins to turn to stone. While restrained in this way, the target must repeat the saving throw at the end of its next turn, becoming petrified on a failure or ending the effect on a success. The petrification lasts until the target is freed by the Greater Restoration spell or similar magic."
			]
		}],
		fixedDC : 15,
		spellcastingBonus : {
			name : "Random option",
			spells : ["slow", "faerie fire", "gust of wind", "detect thoughts", "stinking cloud", "lightning bolt", "enlarge/reduce", "darkness", "fireball", "invisibility"],
			selection : ["slow", "faerie fire", "gust of wind", "detect thoughts", "stinking cloud", "lightning bolt", "enlarge/reduce", "darkness", "fireball", "invisibility"],
			times : 10
		},
		spellChanges : {
			"darkness" : { range : "120 ft", changes : "All Wand of Wonder spells have a range of 120 ft." },
			"enlarge/reduce" : { range : "120 ft", changes : "All Wand of Wonder spells have a range of 120 ft." },
			"faerie fire" : { range : "120 ft", changes : "All Wand of Wonder spells have a range of 120 ft." },
			"stinking cloud" : { range : "120 ft", changes : "All Wand of Wonder spells have a range of 120 ft." }
		}
	},
	"wand of binding (ddal4-10)" : {
		name : "Wand of Binding (DDAL4-10)",
		source : [["AL","S4"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "This wand is made from amber carved to look like strands of rope wrapped around a skeletal hand w/ the index finger outstretched. Its owner is plagued by nightmares of being buried alive & leaving important things undone. The wand has 7 charges for its spells, regaining 1d6+1 at dawn. 1 charge to gain adv. on grapple escape chk or saves vs. paralyzed/restrained, latter uses reaction. 5% chance of destruction if use last charge.",
		descriptionLong : "This wand is made of a piece of amber carved to look like strands of rope entwined around a skeletal hand with the index finger outstretched. The owner’s dreams are plagued by nightmares of being buried alive and leaving important things left unfinished. The wand has 7 charges, regaining 1d6+1 at dawn. You can expend charges to cast (save DC 17) Hold Monster (5 charges) or Hold Person (2 charges). As a reaction, you can expend 1 charge to gain adv. on a save to avoid being paralyzed or restrained. You can also expend 1 charge to gain adv. on a check to escape a grapple. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.",
		descriptionFull : "This wand is made of a piece of amber carved to look like strands of rope entwined around a skeletal hand with the index finger outstretched. The owner’s dreams are plagued by nightmares of being buried alive and leaving important things left unfinished. The wand has 7 charges for the following properties. It regains 1d6+1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.\n   " + toUni("Spells") + ". While holding the wand, you can use an action to expend some of its charges to cast one of the following spells (save DC 17): Hold Monster (5 charges) or Hold Person (2 charges).\n   " + toUni("Assisted Escape") + ". While holding the wand, you can use your reaction to expend 1 charge and gain advantage on a saving throw you make to avoid being paralyzed or restrained, or you can expend 1 charge and gain advantage on any check you make to escape a grapple.",
		attunement : true,
		weight : 1,
		prerequisite : "Requires attunement by a spellcaster",
		prereqeval : function(v) { return v.isSpellcaster; },
		limfeaname : "Wand of Binding",
		action : [["reaction", "Wand of Binding (adv. on save)"]],
		usages : 7,
		recovery : "dawn",
		additional : "regains 1d6+1",
		spellFirstColTitle : "Ch",
		fixedDC : 17,
		spellcastingBonus : [{
			name : "2 charges",
			spells : ["hold person"],
			selection : ["hold person"],
			firstCol : 2
		}, {
			name : "5 charges",
			spells : ["hold monster"],
			selection : ["hold monster"],
			firstCol : 5
		}]
	},
	"wand of fear (ccc-bmg-45 phlan4-3)" : {
		name : "Wand of Fear (CCC-BMG-45 PHLAN4-3)",
		source : [["AL","CCC"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "This simple wand is made of trees from the Glumpen Swamp & wrapped in strands of black leather. The skull of a small fanged reptile is lashed to one end w/ a black diamond on its forehead. The wand has 7 charges, regaining 1d6+1 at dawn. You can use it to cast Command (1 charge), or as an action have all in a 60-ft cone (2 charges) make a DC 15 Wis save or be frightened & move away from you for 1 min (save end of each turn). 5% chance the wand is destroyed when last charge used.",
		descriptionLong : "This simple wand is made of trees from the Glumpen Swamp & wrapped in strands of black leather. The skull of a small fanged reptile is lashed to one end with a prominent black diamond on its forehead. The wand has 7 charges, regaining 1d6+1 charges at dawn. As an action, you can expend 1 charge to cast Command, but only to use \"flee\" or \"grovel\". You can also use an action to expend 2 charges, causing the wand's tip to emit a 60-ft cone of light. All within the cone must make a DC 15 Wis save or be frightened for 1 minute. While frightened, a target moves away from you as fast as possible, can only use the Dash action, and is unwilling to move within 30 ft of you, but can repeat the save at the end of each turn. When the last charge is used, roll a d20. On a 1, the wand crumbles into ashes.",
		descriptionFull : "This simple stick is made from the trees that grow in the Glumpen Swamp. It is wrapped in strands of black leather. The skull of a small fanged reptile is lashed to one end. On its forehead is a prominent black diamond.\n   This wand has 7 charges for the following properties. It regains 1d6+1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.\n   " + toUni("Command") + ". While holding the wand, you can use an action to expend 1 charge and command another creature to flee or grovel, as with the Command spell (save DC 15).\n   " + toUni("Cone of Fear") + ". While holding the wand, you can use an action to expend 2 charges, causing the wand's tip to emit a 60-foot cone of amber light. Each creature in the cone must succeed on a DC 15 Wisdom saving throw or become frightened of you for 1 minute. While it is frightened in this way, a creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevent it from moving. If it has nowhere it can move, the creature can use the Dodge action. At the end of each of its turns, a creature can repeat the saving throw, ending the effect on itself on a success.",
		attunement : true,
		weight : 1,
		limfeaname : "Wand of Fear",
		usages : 7,
		recovery : "dawn",
		additional : "regains 1d6+1",
		spellFirstColTitle : "Ch",
		fixedDC : 15,
		spellcastingBonus : {
			name : "1 charge",
			spells : ["command"],
			selection : ["command"],
			firstCol : 1
		},
		spellChanges : {
			"command" : {
				description : '1 creature save or has to follow an one-word command on its next turn, either "flee" or "grovel"',
				changes : 'When casting form the Wand of Fear, I can only use the "flee" or "grovel" command.'
			}
		}
	},
	"wand of lightning bolts (ddex2-9)" : {
		name : "Wand of Lightning Bolts (DDEX2-9)",
		source : [["AL","S2"]],
		rarity : "rare",
		magicItemTable : "G",
		attunement : true,
		description: "This slender rod of glass feels solid, but appears to have a constant storm of thunderclouds roiling within. It has 7 charges, regaining 1d6+1 at dawn. As an action, you can expend 1 or more of its charges to cast Lightning Bolt (save DC 15) from it as a 3rd level spell. The spell slot level increases by one for each charge expended after the first. When using the last charge, 5% chance the wand is destroyed.",
		descriptionFull : "This slender rod of glass feels solid, but appears to have a constant storm of thunderclouds roiling within.  The wand has 7 charges. While holding it, you can use an action to expend 1 or more of its charges to cast the Lightning Bolt spell (save DC 15) from it. For 1 charge, you cast the 3rd-level version of the spell. You can increase the spell slot level by one for each additional charge you expend.\n   The wand regains 1d6+1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.",
		weight : 1,
		prerequisite : "Requires attunement by a spellcaster",
		prereqeval : function(v) { return v.isSpellcaster; },
		limfeaname : "Wand of Lightning Bolts",
		usages : 7,
		recovery : "dawn",
		additional : "regains 1d6+1",
		spellFirstColTitle : "Ch",
		fixedDC : 15,
		spellcastingBonus : {
			name : "1+ charges",
			spells : ["lightning bolt"],
			selection : ["lightning bolt"],
			firstCol : "1+"
		},
		spellChanges : {
			"lightning bolt" : {
				description : "100-ft long 5-ft wide all 8d6 Lightn. dmg (+1d6/extra charge); save halves; unattended objects ignite",
				changes : "For 1 charge, it is cast as the 3rd-level version of the spell, but I can increase the spell slot level by one for each additional charge expended."
				},
			}
		},
	"wand of lightning bolts (ddep7-2)" : {
		name : "Wand of Lightning Bolts (DDEP7-2)",
		source : [["AL","S7"]],
		rarity : "rare",
		magicItemTable : "G",
		attunement : true,
		description: "This slender glass wand is wrapped in a tight coil of thin copper wire. When used, your hair stands up on end. It has 7 charges, regaining 1d6+1 at dawn. As an action, expend 1 or more of its charges to cast Lightning Bolt (save DC 15) from it as a 3rd level spell. The spell slot lvl increases by one for each charge expended after the first. When using the last charge, 5% chance the wand is destroyed.",
		descriptionFull : "This slender glass wand is wrapped in a tight coil of thin copper wire. When used, the wielder’s hair stands up on end. The wand has 7 charges. While holding it, you can use an action to expend 1 or more of its charges to cast the Lightning Bolt spell (save DC 15) from it. For 1 charge, you cast the 3rd-level version of the spell. You can increase the spell slot level by one for each additional charge you expend.\n   The wand regains 1d6+1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.",
		weight : 1,
		prerequisite : "Requires attunement by a spellcaster",
		prereqeval : function(v) { return v.isSpellcaster; },
		limfeaname : "Wand of Lightning Bolts",
		usages : 7,
		recovery : "dawn",
		additional : "regains 1d6+1",
		spellFirstColTitle : "Ch",
		fixedDC : 15,
		spellcastingBonus : {
			name : "1+ charges",
			spells : ["lightning bolt"],
			selection : ["lightning bolt"],
			firstCol : "1+"
		},
		spellChanges : {
			"lightning bolt" : {
				description : "100-ft long 5-ft wide all 8d6 Lightn. dmg (+1d6/extra charge); save halves; unattended objects ignite",
				changes : "For 1 charge, it is cast as the 3rd-level version of the spell, but I can increase the spell slot level by one for each additional charge expended."
				},
			}
		},
	"wand of lightning bolts (ddal8-9)" : {
		name : "Wand of Lightning Bolts (DDAL8-9)",
		source : [["AL","S8"]],
		rarity : "rare",
		magicItemTable : "G",
		attunement : true,
		description: "This black wand is decorated with an intricate symbol of the dark goddess Shar. Each time this wand is used, the wielder forgets all their bonds for 10 minutes. It has 7 charges, regaining 1d6+1 at dawn. As an action, expend 1 or more of its charges to cast Lightning Bolt (save DC 15) from it as a 3rd level spell. The spell slot lvl increases by one for each charge expended after the first. When using the last charge, 5% chance the wand is destroyed.",
		descriptionFull : "This black wand is decorated with an intricate symbol of the dark goddess Shar. Each time this wand is used, the wielder forgets all their bonds for 10 minutes. The wand has 7 charges. While holding it, you can use an action to expend 1 or more of its charges to cast the Lightning Bolt spell (save DC 15) from it. For 1 charge, you cast the 3rd-level version of the spell. You can increase the spell slot level by one for each additional charge you expend.\n   The wand regains 1d6+1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.",
		weight : 1,
		prerequisite : "Requires attunement by a spellcaster",
		prereqeval : function(v) { return v.isSpellcaster; },
		limfeaname : "Wand of Lightning Bolts",
		usages : 7,
		recovery : "dawn",
		additional : "regains 1d6+1",
		spellFirstColTitle : "Ch",
		fixedDC : 15,
		spellcastingBonus : {
			name : "1+ charges",
			spells : ["lightning bolt"],
			selection : ["lightning bolt"],
			firstCol : "1+"
		},
		spellChanges : {
			"lightning bolt" : {
				description : "100-ft long 5-ft wide all 8d6 Lightn. dmg (+1d6/extra charge); save halves; unattended objects ignite",
				changes : "For 1 charge, it is cast as the 3rd-level version of the spell, but I can increase the spell slot level by one for each additional charge expended."
				},
			}
		},
	"wand of magic detection (ddex1-2)" : {
		name : "Wand of Magic Detection (DDEX1-2)",
		source : [["AL","S1"]],
		rarity : "uncommon",
		magicItemTable : "B",
		description: "This silver-tipped wooden wand makes a loud chiming sound when used. The wand has 3 charges. While holding it, I can expend 1 charge as an action to cast Detect Magic from it. The wand regains 1d3 expended charges daily at dawn.",
		weight : 1,
		limfeaname : "Wand of Magic Detection",
		usages : 3,
		recovery : "dawn",
		additional : "regains 1d3",
		spellFirstColTitle : "Ch",
		spellcastingBonus : {
			name : "1 charge",
			spells : ["detect magic"],
			selection : ["detect magic"],
		firstCol : 1}
		},
	"wand of magic missiles (ccc-skull1-2)" : {
		name : "Wand of Magic Missiles (CCC-SKULL1-2)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "The entire length of this dark wood wand is laced in a thin line of silver. It has 7 charges, regaining 1d6+1 at dawn. As an action, you can expend 1 or more charges to cast Magic Missile from the wand. It starts at 1st lvl & increases by 1 lvl for each charge after the first. When the last charge is used, roll a d20. On a 1, the wand crumbles into ashes.",
		descriptionFull : "The entire length of this dark wood wand is laced in a thin line of silver. It has 7 charges. While holding it, you can use an action to expend 1 or more of its charges to cast the Magic Missile spell from it. For 1 charge, you cast the 1st-level version of the spell. You can increase the spell slot level by one for each additional charge you expend.\n   The wand regains 1d6+1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.",
		weight : 1,
		limfeaname : "Wand of Magic Missiles",
		usages : 7,
		recovery : "dawn",
		additional : "regains 1d6+1",
		spellFirstColTitle : "Ch",
		spellcastingBonus : {
			name : "1+ charges",
			spells : ["magic missile"],
			selection : ["magic missile"],
			firstCol : "1+"
		},
		spellChanges : {
			"magic missile" : {
				description : "3+1/extra charge darts hit creature(s) I can see for 1d4+1 Force dmg per dart",
				changes : "For 1 charge, it is cast as the 1st-level version of the spell, but I can increase the spell slot level by one for each additional charge expended."
			}
		}
	},
	"kianne statuette, wand of magic missiles (ccc-tarot2-9)" : {
		name : "Kianne Statuette (Wand of Magic Missile)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "This small statuette is a woman w/ one arm outstretched & a crystal ball in the other. A face appears in the crystal if you use 3 or more charges at once. Those who've met Kianne Amblerown recognize her likeness. It has 7 charges, regaining 1d6+1 at dawn. As an action, you can expend 1 or more charges to cast Magic Missile from the item. It starts at 1st lvl & increases by 1 lvl for each extra charge. When using the last charge, 5% chance the wand is destroyed.",
		descriptionFull : "This small statuette is of a woman with outstretched arm and a crystal ball in her other hand. A woman’s face appears in the crystal ball if you use 3 charges or more at once. Those who have met Kianne Amblerown sees an uncanny likeness between her and the statuette and face.\n   It has 7 charges. While holding it, you can use an action to expend 1 or more of its charges to cast the Magic Missile spell from it. For 1 charge, you cast the 1st-level version of the spell. You can increase the spell slot level by one for each additional charge you expend.\n   The wand regains 1d6+1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.",
		weight : 1,
		limfeaname : "Wand of Magic Missiles",
		usages : 7,
		recovery : "dawn",
		additional : "regains 1d6+1",
		spellFirstColTitle : "Ch",
		spellcastingBonus : {
			name : "1+ charges",
			spells : ["magic missile"],
			selection : ["magic missile"],
			firstCol : "1+"
		},
		spellChanges : {
			"magic missile" : {
				description : "3+1/extra charge darts hit creature(s) I can see for 1d4+1 Force dmg per dart",
				changes : "For 1 charge, it is cast as the 1st-level version of the spell, but I can increase the spell slot level by one for each additional charge expended."
			}
		}
	},
	"wand of magic missiles (ccc-wwc-1)" : {
		name : "Wand of Magic Missiles (CCC-WWC-1)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "This unremarkable 1 ft wand resembles a crooked piece of dried driftwood. Despite its frail appearance, it's quite solid. It has 7 charges, regaining 1d6+1 at dawn. As an action, you can expend 1 or more charges to cast Magic Missile from the wand. It starts at 1st lvl & increases by 1 lvl for each charge after the first. When the last charge is used, roll a d20. On a 1, the wand crumbles into ashes.",
		descriptionFull : "This unremarkable wand resembles a crooked piece of dried driftwood one foot in length. In spite of its frail appearance and light weight, it is quite solid. It has 7 charges. While holding it, you can use an action to expend 1 or more of its charges to cast the Magic Missile spell from it. For 1 charge, you cast the 1st-level version of the spell. You can increase the spell slot level by one for each additional charge you expend.\n   The wand regains 1d6+1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.",
		weight : 1,
		limfeaname : "Wand of Magic Missiles",
		usages : 7,
		recovery : "dawn",
		additional : "regains 1d6+1",
		spellFirstColTitle : "Ch",
		spellcastingBonus : {
			name : "1+ charges",
			spells : ["magic missile"],
			selection : ["magic missile"],
			firstCol : "1+"
		},
		spellChanges : {
			"magic missile" : {
				description : "3+1/extra charge darts hit creature(s) I can see for 1d4+1 Force dmg per dart",
				changes : "For 1 charge, it is cast as the 1st-level version of the spell, but I can increase the spell slot level by one for each additional charge expended."
			}
		}
	},
	"wand of polymorph (ddal7-13)" : {
		name : "Wand of Polymorph (DDAL7-13)",
		source : [["AL","S7"]],
		rarity : "very rare",
		magicItemTable : "H",
		description : "Carrying this wand on your person causes fits of restless sleep — your nights are filled w/ dreams of soaring above the canopy on feathered wings, burrowing among the roots of immense trees with thick claws, & other goings on that jungle critters enjoy. The slender, foot-long length of grey stone is otherwise unexceptional. It has 7 charges & regains 1d6+1 charges at dawn. As an action, you can expend 1 charge to cast Polymorph (DC 15). 5% chance to be destroyed when last charge used.",
		descriptionFull : "Having this wand on one’s person causes fits of restless sleep—where the owner’s nights are filled with wonderful dreams of soaring above the canopy on wide, feathered wings; burrowing among the roots of immense trees with wide, thick claws; and the other goings on that jungle critters seem to enjoy so much. Aside from this, the slender, foot-long length of grey stone is otherwise unexceptional. This wand has 7 charges. While holding it, you can use an action to expend 1 of its charges to cast the Polymorph spell (save DC 15) from it.\n   The wand regains 1d6+1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.",
		attunement : true,
		weight : 1,
		prerequisite : "Requires attunement by a spellcaster",
		prereqeval : function(v) { return v.isSpellcaster; },
		limfeaname : "Wand of Polymorph",
		usages : 7,
		recovery : "dawn",
		additional : "regains 1d6+1",
		spellFirstColTitle : "Ch",
		fixedDC : 15,
		spellcastingBonus : {
			name : "1 charge",
			spells : ["polymorph"],
			selection : ["polymorph"],
			firstCol : 1
		}
	},
	"wand of polymorph (ddep7-2)" : {
		name : "Wand of Polymorph (DDEP7-2)",
		source : [["AL","S7"]],
		rarity : "very rare",
		magicItemTable : "H",
		description : "This wand is made of what appears to be the skeletal finger of some unusually-large humanoid. When wielded, it occasionally flexes and twitches. It has 7 charges and regains 1d6+1 charges at dawn. As an action, you can expend 1 charge to cast the Polymorph spell (DC 15) from it. 5% chance to be destroyed when last charge used.",
		descriptionFull : "This wand is made of what appears to be the skeletal finger of some unusually-large humanoid. When wielded, it occasionally flexes and twitches. This wand has 7 charges. While holding it, you can use an action to expend 1 of its charges to cast the Polymorph spell (save DC 15) from it.\n   The wand regains 1d6+1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.",
		attunement : true,
		weight : 1,
		prerequisite : "Requires attunement by a spellcaster",
		prereqeval : function(v) { return v.isSpellcaster; },
		limfeaname : "Wand of Polymorph",
		usages : 7,
		recovery : "dawn",
		additional : "regains 1d6+1",
		spellFirstColTitle : "Ch",
		fixedDC : 15,
		spellcastingBonus : {
			name : "1 charge",
			spells : ["polymorph"],
			selection : ["polymorph"],
			firstCol : 1
		}
	},
	"wand of pyrotechnics (ddal0-7)" : {
		name : "Wand of Pyrotechnics",
		source : [["AL","S0"]],
		magicItemTable : "?",
		description : "This long, slender rod of black iron is tipped w/ a chunk of smoldering coal. It can be used like an ink pen, but traces scorched lines on paper instead of ink. The wand has 7 charges, regaining 1d6+1 at dawn, 5% chance it's destroyed when last charge is used. As an action, you can expend 1 charge to create a harmless burst of sound & light at a point you can see up to 60 ft away, w/ the noise traveling 300 ft. The light is as bright as a torch but lasts only a second.",
		descriptionFull : "This long, slender rod of black iron is tipped with a chunk of smoldering coal. It can be used like an ink pen, but traces scorched lines on paper instead of ink. This wand has 7 charges. While holding it, you can use an action to expend 1 of its charges and create a harmless burst of multicolored light at a point you can see up to 60 feet away. The burst of light is accompanied by a crackling noise that can be heard up to 300 feet away. The light is as bright as a torch flame but lasts only a second.\n   The wand regains 1d6+1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand erupts in a harmless pyrotechnic display and is destroyed.",
		weight : 1,
		limfeaname : "Wand of Pyrotechnics",
		action : [["action", ""]],
		usages : 3,
		recovery : "dawn",
		additional : "regains 1d6+1"
	},
	"wand of secrets (ccc-sqc-3-1)" : {
		name : "Wand of Secrets (CCC-SQC-3-1)",
		source : [["AL","CCC"]],
		rarity : "uncommon",
		magicItemTable : "B",
		description : "Shaped liked a wooden spatula, this wand emits the scent of freshly baked bread & cinnamon when used. If used to stir or prepare food, it enhances the natural flavors of the food. The wand has 3 charges. While holding it. you can use an action to expend 1 charge, & if a secret door or trap is within 30 feet, the wand pulses & points at the nearest one. The wand regains 1d3 expended charges at dawn.",
		descriptionFull : "Shaped liked a wooden spatula, this wand emits the scent of freshly baked bread and cinnamon when used. If used to stir or prepare food, the wand enhances the natural flavors of the food, making it more delicious.\n	The wand has 3 charges. While holding it. you can use an action to expend 1 of its charges, and if a secret door or trap is within 30 ft of you, the wand pulses and points at the one nearest to you. The wand regains 1d3 expended charges daily at dawn.",
		weight : 1,
		limfeaname : "Wand of Secrets",
		usages : 3,
		recovery : "dawn",
		additional : "regains 1d3",
		action : [["action", ""]]
	},
	"wand of secrets (ddal8-1)" : {
		name : "Wand of Secrets (DDAL8-1)",
		source : [["AL","S8"]],
		rarity : "uncommon",
		magicItemTable : "B",
		description : "The wand has 3 charges. While holding it. you can use an action to expend 1 charge, & if a secret door or trap is within 30 ft of you, the wand pulses & points at the nearest one. The wand regains 1d3 expended charges at dawn. By whispering a secret to yourself that you have never told anyone, you can cause the tip of this wand to glow with light equal to a candle.",
		descriptionFull : "The wand has 3 charges. While holding it. you can use an action to expend 1 of its charges, and if a secret door or trap is within 30 feet of you, the wand pulses and points at the one nearest to you. The wand regains 1d3 expended charges daily at dawn.\n  By whispering a secret to themselves that they have never told anyone, the owner can cause the tip of this wand to glow with light equal to a candle.",
		weight : 1,
		limfeaname : "Wand of Secrets",
		usages : 3,
		recovery : "dawn",
		additional : "regains 1d3",
		action : [["action", ""]]
	},
	"wand of secrets (ddal9-14)" : {
		name : "Wand of Secrets (DDAL9-14)",
		source : [["AL","S9"]],
		rarity : "uncommon",
		magicItemTable : "B",
		description : "This slender wand appears to have been fashioned from a human fibula. One end of the wand is wrapped in bloodsoaked cord which stains the hands of those who hold it. The wand has 3 charges. While holding it, you can use an action to expend 1 charge; if a secret door or trap is within 30 ft of you, the wand pulses & points at the closest one. The wand regains 1d3 expended charges at dawn.",
		descriptionFull : "This slender wand appears to have been fashioned from a human fibula. One end of the wand is wrapped in bloodsoaked cord which stains the hands of those who hold it. The wand has 3 charges. While holding it, you can use an action to expend 1 of its charges, and if a secret door or trap is within 30 feet of you, the wand pulses and points at the one nearest to you. The wand regains 1d3 expended charges daily at dawn.",
		weight : 1,
		limfeaname : "Wand of Secrets",
		usages : 3,
		recovery : "dawn",
		additional : "regains 1d3",
		action : [["action", ""]]
	},
	"wand of smiles (ddia-xge)" : {
		name : "Wand of Smiles (DDIA-XGE)",
		source : [["AL","XGE"]],
		rarity : "common",
		magicItemTable : "?",
		description : "This wand was carved from black walnut & has a lacquered finish w/ a stylized grinning face carved into one end. It has 3 charges, regained at dawn. As an action, you can expend 1 charge & target a visible humanoid w/i 30 ft. The target must pass a DC 10 Charisma save or be forced to smile for 1 min. If you expend the last charge, roll a d20. On a 1, the wand turns into a wand of scowls.",
		descriptionFull : "This wand was carved from black walnut and has a lacquered finish with a stylized grinning face carved into one end.\n  This wand has 3 charges. While holding it, you can use an action to expend 1 of its charges and target a humanoid you can see within 30 feet of you. The target must succeed on a DC 10 Charisma saving throw or be forced to smile for 1 minute.\n   The wand regains all expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand transforms into a wand of scowls.",
		weight : 1,
		limfeaname : "Wand of Smiles",
		action : [["action", ""]],
		usages : 3,
		recovery : "dawn"
	},
	"wand of the war mage +1 (ddex3-10)" : {
		name : "Wand of the War Mage +1 (DDEX3-10)",
		source : [["AL","S3"]],
		rarity : "uncommon",
		magicItemTable : "F",
		attunement : true,
		weight : 1,
		prerequisite : "Requires attunement by a spellcaster",
		prereqeval : function(v) { return v.isSpellcaster; },
		description : "Crafted of sturdy beech wood, this rather stout wand sports arcane runes etched in silver along its length and solid silver orbs capping each end. While you are holding this arcane focus, you gain a +1 bonus to spell attack rolls and ignore half cover when making a spell attack.",
		calcChanges : {
			spellCalc : [
				function (type, spellcasters, ability) {
						if (type == "attack") return 1;
					},
					"I gain a +1 bonus to spell attack rolls."
				]
			}
		},
	"wand of the war mage +2 (ccc-rozk1-1)" : {
		name : "Wand of the War Mage +2 (CCC-ROZK1-1)",
		source : [["AL","CCC"]],
		rarity : "rare",
		magicItemTable : "G",
		attunement : true,
		weight : 1,
		prerequisite : "Requires attunement by a spellcaster",
		prereqeval : function(v) { return v.isSpellcaster; },
		description : "This foot-long, twisted iron spike emits a faint coppery scent when channeling magical energies. While you are holding this arcane focus, you gain a +2 bonus to spell attack rolls and ignore half cover when making a spell attack.",
		calcChanges : {
			spellCalc : [
				function (type, spellcasters, ability) {
						if (type == "attack") return 2;
					},
					"I gain a +2 bonus to spell attack rolls."
				]
			}
		},
	"wand of the war mage +3 (ccc-mind1-3)" : {
		name : "Wand of the War Mage +3 (CCC-MIND1-3)",
		source : [["AL","CCC"]],
		rarity : "very rare",
		magicItemTable : "H",
		attunement : true,
		weight : 1,
		prerequisite : "Requires attunement by a spellcaster",
		prereqeval : function(v) { return v.isSpellcaster; },
		description : "This copper wand is inscribed with runes in both the infernal and ignan languages. The symbol of the Zhentarim encircles the tip of the wand. While you are holding this arcane focus, you gain a +3 bonus to spell attack rolls and ignore half cover when making a spell attack.",
		calcChanges : {
			spellCalc : [
				function (type, spellcasters, ability) {
						if (type == "attack") return 3;
					},
					"I gain a +3 bonus to spell attack rolls."
				]
			}
		},
	"wand of the war mage +3 (ddep7-2)" : {
		name : "Wand of the War Mage +3 (DDEP7-2)",
		source : [["AL","S7"]],
		rarity : "very rare",
		magicItemTable : "H",
		attunement : true,
		weight : 1,
		prerequisite : "Requires attunement by a spellcaster",
		prereqeval : function(v) { return v.isSpellcaster; },
		description : "This thick wand is made of polished steel with a weapon-like pommel, and can be wielded in combat like a mace. While you are holding this arcane focus, you gain a +3 bonus to spell attack rolls and ignore half cover when making a spell attack.",
		weaponsAdd : ["Mace (Wand of the War Mage)"],
			weaponOptions : {
			baseWeapon : "mace",
			name : "Mace (Wand of the War Mage)",
				},
		calcChanges : {
			spellCalc : [
				function (type, spellcasters, ability) {
						if (type == "attack") return 3;
					},
					"I gain a +3 bonus to spell attack rolls."
				]
			}
		},
	"wand of web (ddal5-7)" : {
		name : "Wand of Web (DDAL5-7)",
		source : [["AL","S5"]],
		rarity : "uncommon",
		magicItemTable : "F",
		description : "This short, squat wand is fashioned from single piece of white wood tipped with a pair of black diamonds cut to resemble spinnerets. It has 7 charges & regains 1d6+1 expended charges at dawn. As an action, expend 1 charge to cast Web (save DC 15). When using the last charge, 5% chance the wand is destroyed.",
		descriptionFull : "This short, squat wand is fashioned from single piece of white wood tipped with a pair of black diamonds cut to resemble spinnerets. It has 7 charges. While holding it, you can use an action to expend 1 of its charges to cast the Web spell (save DC 15) from it.\n   The wand regains 1d6+1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.",
		attunement : true,
		weight : 1,
		prerequisite : "Requires attunement by a spellcaster",
		prereqeval : function(v) { return v.isSpellcaster; },
		limfeaname : "Wand of Web",
		usages : 7,
		recovery : "dawn",
		additional : "regains 1d6+1",
		spellFirstColTitle : "Ch",
		fixedDC : 15,
		spellcastingBonus : {
			name : "1 charge",
			spells : ["web"],
			selection : ["web"],
			firstCol : 1
		}
	},
	"wand of wonder (ccc-cic-5)" : {
		name : "Wand of Wonder (CCC-CIC-5)",
		source : [["AL","CCC"]],
		rarity : "rare",
		magicItemTable : "G",
		description : "This golden wand decorated with a multitude of brightly covered spheres. The wand has 7 charges, regaining 1d6+1 at dawn. If you use the last charge, roll a d20. On a 1, the wand is destroyed. As an action while holding it, expend 1 charge, choose a target w/i 120 ft, & roll a 1d100 to see the effect, see Notes page.",
		descriptionFull : "This golden wand decorated with a multitude of brightly covered spheres.\n   This wand has 7 charges. While holding it, you can use an action to expend 1 of its charges and choose a target within 120 feet of you. The target can be a creature, an object, or a point in space. Roll d100 and consult the following table to discover what happens." + desc([
			"If the effect causes you to cast a spell from the wand, the spell's save DC is 15. If the spell normally has a range expressed in feet, its range becomes 120 feet if it isn't already.",
			"If an effect covers an area, you must center the spell on and include the target. If an effect has multiple possible subjects, the DM randomly determines which ones are affected.",
			"The wand regains 1d6+1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into dust and is destroyed.\n",
			toUni("d100 and effects"),
			toUni("01-05") + ". You cast Slow.",
			toUni("06-10") + ". You cast Faerie Fire.",
			toUni("11-15") + ". You are stunned until the start of your next turn, believing something awesome just happened.",
			toUni("16-20") + ". You cast Gust of Wind.",
			toUni("21-25") + ". You cast Detect Thoughts on the target you chose. If you didn't target a creature, you instead take 1d6 psychic damage.",
			toUni("26-30") + ". You cast Stinking Cloud.",
			toUni("31-33") + ". Heavy rain falls in a 60-foot radius centered on the target. The area becomes lightly obscured. The rain falls until the start of your next turn.",
			toUni("34-36") + ". An animal appears in the unoccupied space nearest the target. The animal isn't under your control and acts as it normally would. Roll a d100 to determine which animal appears. On a 01-25, a rhinoceros appears; on a 26-50, an elephant appears; and on a 51-100, a rat appears.",
			toUni("37-46") + ". You cast Lightning Bolt.",
			toUni("47-49") + ". A cloud of 600 oversized butterflies fills a 30-foot radius centered on the target. The area becomes heavily obscured. The butterflies remain for 10 minutes.",
			toUni("50-53") + ". You enlarge the target as if you had cast Enlarge/Reduce. If the target can't be affected by that spell or if you didn't target a creature, you become the target.",
			toUni("54-58") + ". You cast Darkness.",
			toUni("59-62") + ". Grass grows on the ground in a 60-foot radius centered on the target. If grass is already there, it grows to ten times its normal size and remains overgrown for 1 minute.",
			toUni("63-65") + ". An object of the DM's choice disappears into the Ethereal Plane. The object must be neither worn nor carried, within 120 feet of the target, and no larger than 10 feet in any dimension.",
			toUni("66-69") + ". You shrink yourself as if you had cast Enlarge/Reduce on yourself.",
			toUni("70-79") + ". You cast Fireball.",
			toUni("80-84") + ". You cast Invisibility.",
			toUni("85-87") + ". Leaves grow from the target. If you chose a point in space as the target, leaves sprout from the creature nearest to that point. Unless they are picked off, the leaves turn brown and fall off after 24 hours.",
			toUni("88-90") + ". A stream of 1d4 \xD7 10 gems, each worth 1 gp, shoots from the wand's tip in a line 30 feet long and 5 feet wide. Each gem deals 1 bludgeoning damage, and the total damage of the gems is divided equally among all creatures in the line.",
			toUni("91-95") + ". A burst of colorful shimmering light extends from you in a 30-foot radius. You and each creature in the area that can see must succeed on a DC 15 Constitution saving throw or become blinded for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
			toUni("96-97") + ". The target's skin turns bright blue for 1d10 days. If you chose a point in space, the creature nearest to that point is affected.",
			toUni("98-00") + ". If you targeted a creature, it must make a DC 15 Constitution saving throw. If you didn't target a creature, you become the target and must make the saving throw. If the saving throw fails by 5 or more, the target is instantly petrified. On any other failed save, the target is restrained and begins to turn to stone. While restrained in this way, the target must repeat the saving throw at the end of its next turn, becoming petrified on a failure or ending the effect on a success. The petrification lasts until the target is freed by the Greater Restoration spell or similar magic."
		]),
		attunement : true,
		weight : 1,
		prerequisite : "Requires attunement by a spellcaster",
		prereqeval : function(v) { return v.isSpellcaster; },
		usages : 7,
		recovery : "dawn",
		additional : "regains 1d6+1",
		toNotesPage : [{
			name : "Table of Effects",
			popupName : "Wand of Wonder's Table of Effects",
			note : [
				"As an action I can expend 1 of the wand's 7 charges and choose a target within 120 ft of me. The target can be a creature, an object, or a point in space. Roll a d100 and consult the effect below to discover what happens.",
				"If the effect causes me to cast a spell from the wand, the spell's save DC is 15. If the spell normally has a range expressed in feet, its range becomes 120 ft if it isn't already.",
				"If an effect covers an area, I must center the spell on and include the target. If an effect has multiple possible subjects, the DM randomly determines which ones are affected.",
				"\nd100 RESULT AND EFFECTS",
				"01-05: I cast Slow.",
				"06-10: I cast Faerie Fire.",
				"11-15: I am stunned until the start of my next turn, believing something awesome just happened.",
				"16-20: I cast Gust of Wind.",
				"21-25: I cast Detect Thoughts on the target I chose. If I didn't target a creature, I instead take 1d6 psychic damage.",
				"26-30: I cast Stinking Cloud.",
				"31-33: Heavy rain falls in a 60-ft radius centered on the target. The area becomes lightly obscured. The rain falls until the start of my next turn.",
				"34-36: An animal appears in the unoccupied space nearest the target. The animal isn't under my control and acts as it normally would. Roll a d100 to determine which animal appears. On a 01-25, a rhinoceros appears; on a 26-50, an elephant appears; and on a 51-100, a rat appears.",
				"37-46: I cast Lightning Bolt.",
				"47-49: A cloud of 600 oversized butterflies fills a 30-ft radius centered on the target. The area becomes heavily obscured. The butterflies remain for 10 minutes.",
				"50-53: I enlarge the target as if I had cast Enlarge/Reduce. If the target can't be affected by that spell or if I didn't target a creature, I become the target.",
				"54-58: I cast Darkness.",
				"59-62: Grass grows on the ground in a 60-ft radius centered on the target. If grass is already there, it grows to ten times its normal size and remains overgrown for 1 minute.",
				"63-65: An object of the DM's choice disappears into the Ethereal Plane. The object must be neither worn nor carried, within 120 ft of the target, and no larger than 10 ft in any dimension.",
				"66-69: I shrink myself as if I had cast Enlarge/Reduce on myself.",
				"70-79: I cast Fireball.",
				"80-84: I cast Invisibility.",
				"85-87: Leaves grow from the target. If I chose a point in space as the target, leaves sprout from the creature nearest to that point. Unless they are picked off, the leaves turn brown and fall off after 24 hours.",
				"88-90: A stream of 1d4 \xD7 10 gems, each worth 1 gp, shoots from the wand's tip in a line 30 ft long and 5 ft wide. Each gem deals 1 bludgeoning damage, and the total damage of the gems is divided equally among all creatures in the line.",
				"91-95: A burst of colorful shimmering light extends from me in a 30-ft radius. Me and each creature in the area that can see must succeed on a DC 15 Constitution saving throw or become blinded for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
				"96-97: The target's skin turns bright blue for 1d10 days. If I chose a point in space, the creature nearest to that point is affected.",
				"98-00: If I targeted a creature, it must make a DC 15 Constitution saving throw. If I didn't target a creature, I become the target and must make the saving throw. If the saving throw fails by 5 or more, the target is instantly petrified. On any other failed save, the target is restrained and begins to turn to stone. While restrained in this way, the target must repeat the saving throw at the end of its next turn, becoming petrified on a failure or ending the effect on a success. The petrification lasts until the target is freed by the Greater Restoration spell or similar magic."
			]
		}],
		fixedDC : 15,
		spellcastingBonus : {
			name : "Random option",
			spells : ["slow", "faerie fire", "gust of wind", "detect thoughts", "stinking cloud", "lightning bolt", "enlarge/reduce", "darkness", "fireball", "invisibility"],
			selection : ["slow", "faerie fire", "gust of wind", "detect thoughts", "stinking cloud", "lightning bolt", "enlarge/reduce", "darkness", "fireball", "invisibility"],
			times : 10
		},
		spellChanges : {
			"darkness" : { range : "120 ft", changes : "All Wand of Wonder spells have a range of 120 ft." },
			"enlarge/reduce" : { range : "120 ft", changes : "All Wand of Wonder spells have a range of 120 ft." },
			"faerie fire" : { range : "120 ft", changes : "All Wand of Wonder spells have a range of 120 ft." },
			"stinking cloud" : { range : "120 ft", changes : "All Wand of Wonder spells have a range of 120 ft." }
		}
	},
}