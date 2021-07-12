 document.getElementById('rollCharacter').onclick = function generateCharacter() {

 dndRace = ["Dragonborn", "Drow", "Hill Dwarf", "Mountain Dwarf", "Dark Elf (Drow)", "High Elf",
  "Wood Elf", "Forest Gnome", "Rock Gnome",
 "Half-Elf", "Half-Orc", "Lightfoot Halfling", "Stout Halfling", "Human", "Human (Variant)", 
 "Tiefling (Asmodeus Bloodline)"]; //PHB Races
 dndClass = ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", 
 "Rogue", "Sorcerer", "Warlock", "Wizard"]; //PHB Classes
 dndSubclass = [];
 characterRace = [];
 characterSubclass = [];
 characterClass = [];
;

 
 if (document.getElementById('AI').checked ) {
      dndRace.push("Verdan");

    };
    //if chosen as a source material this will add the races and classes from Aquisitions Incorporated

// No races added in the Dubgein Master Guide

// No races added in Van Richten's Guide to Ravenloft

  if (document.getElementById('SCAG').checked ) {
    dndRace.push("Devil's Tongue Tiefling");
    dndRace.push("Duergar");
    dndRace.push("Feral Tiefling");
    dndRace.push("Ghostwise Halfling");
    dndRace.push("Hellfire Tiefling");
    dndRace.push("Winged Tiefling");
  
  };
  //if chosen as a source material this will add the races and classes from  Sword Coast Adventurer's Guild

  if (document.getElementById('Volo').checked ) {
    dndRace.push("Bugbear");
    dndRace.push("Fallen Aasimar");
    dndRace.push("Firbolg");
    dndRace.push("Goblin");
    dndRace.push("Goliath");
    dndRace.push("Hobgoblin");
    dndRace.push("Kenku");
    dndRace.push("Kobold");
    dndRace.push("Lizardfolk");
    dndRace.push("Orc");
    dndRace.push("Protector Aasimar");
    dndRace.push("Scourge Aasimar");
    dndRace.push("Tabaxi");
    dndRace.push("Triton");
    dndRace.push("Yuan-Ti (Pureblood)");
   
  };
  //if chosen as a source material this will add the races and classes from Volo's Guide to Monsters


// No races added in Xanathar's Guide to Everything

//if chosen as a source material this will add the races and classes from Xanathar's Guide to Everything

  if (document.getElementById('MToF').checked ) {
  dndRace.push("Gith");
  dndRace.push("Duergar");
  dndRace.push("Spring Eladrin");
  dndRace.push("Summer Eladrin");
  dndRace.push("Autumn Eladrin");
  dndRace.push("Winter Eladrin");
  dndRace.push("Sea Elf");
  dndRace.push("Shadar-Kai");
  dndRace.push("Deep Gnome");
  dndRace.push("Tiefling (Baalzebul Bloodline)");
  dndRace.push("Tiefling (Dispater Bloodline)");
  dndRace.push("Tiefling (Fierna Bloodline)");
  dndRace.push("Tiefling (Glasya Bloodline)");
  dndRace.push("Tiefling (Levistus Bloodline)");
  dndRace.push("Tiefling (Mammon Bloodline)");
  dndRace.push("Tiefling (Mephistopheles Bloodline)");
  dndRace.push("Tiefling (Zariel Bloodline)");
  
};
//if chosen as a source material this will add the races and classes from Mordekainen's Tome of Foes

  if (document.getElementById('Ravnica').checked ) {
    dndRace.push("Centaur");
    dndRace.push("Loxodon");
    dndRace.push("Minotaur");
    dndRace.push("Simic Hybrid");

  };
  //if chosen as a source material this will add the races and classes from Guildmaster's Guide to Ravnica

  if (document.getElementById('Eberron').checked ) {
    dndRace.push("Beasthide Shifter");
    dndRace.push("Bugbear");
    dndRace.push("Changeling");
    dndRace.push("Goblin");
    dndRace.push("Hobgoblin");
    dndRace.push("Kalashtar");
    dndRace.push("Longtooth Shifter");
    dndRace.push("Mark Of Detection Half Elf");
    dndRace.push("Mark Of Finding Half-Orc");
    dndRace.push("Mark Of Finding Human");
    dndRace.push("Mark Of Healing Halfling");
    dndRace.push("Mark Of Hospitality Halfling");
    dndRace.push("Mark Of Making Human");
    dndRace.push("Mark Of Passage Human");
    dndRace.push("Mark Of Scribing Gnome");
    dndRace.push("Mark Of Sentinal Human");
    dndRace.push("Mark Of Shadow Elf");
    dndRace.push("Mark Of Storm Half-Elf");
    dndRace.push("Mark Of Warding Dwarf");
    dndRace.push("Orc Of Eberron");
    dndRace.push("Swiftstride Shifter");
    dndRace.push("Warforged");
    dndRace.push("Wildhunt Shifter");
    
    dndClass.push("Artificer");
      // Artificer was added in Eberron: Rising fom the Last War

  };
  //if chosen as a source material this will add the races and classes from Eberron: Rising fom the Last War

  if (document.getElementById('Theros').checked ) {
    dndRace.push("Centaur");
    dndRace.push("Leonin");
    dndRace.push("Minotaur");
    dndRace.push("Satyr");
    dndRace.push("Triton");
   
  };
  //if chosen as a source material this will add the races and classes from Mythic Odysseys of Theros

  if (document.getElementById('EE').checked ) {
    dndRace.push("Aarakocra");
    dndRace.push("Air Genasi");
    dndRace.push("Deep Gnome");
    dndRace.push("Earth Genasi");
    dndRace.push("Fire Genasi");
    dndRace.push("Goliath");
    dndRace.push("Water Genasi");

   };
  //if chosen as a source material this will add the races and classes from Elemental Evil 

  if (document.getElementById('Tortle').checked ) {
    dndRace.push("Tortle"); //Shockingly only Tortles were addedd in The Tortle Package
  
  };
  //if chosen as a source material this will add the races and classes from The Tortle Package

  if ( document.getElementById('TCoE').checked ) {
      // No races added in Tasha's Couldran of Everything
    dndClass.push("Artificer");
      // Artificer was added Tasha's Couldran of Everything
 };
    //if chosen as a source material this will add the races and classes from Tasha's Cauldon of Everything

// this is to filter out duplicate races as some races are in multiple books
dndRace.forEach((item)=>{ 
  if(!characterRace.includes(item)){
    characterRace.push(item);}})

  // this is to filter out duplicate races as some races are in multiple books
  
  // this is to filter out duplicate races as some races are in multiple books
   dndClass.forEach((item)=>{ 
  if(!characterClass.includes(item)){
    characterClass.push(item);}})
    // this is to filter out duplicate races as some races are in multiple books
  


  randRace1 = Math.floor(Math.random() * characterRace.length); //generates a random character race
  randClass1 = Math.floor(Math.random() * characterClass.length); //generates a random character class



// Bellow is to create an array of potential subclasses based on the class created above

//Artificer Subclasses
if (document.getElementById('Eberron').checked && characterClass[randClass1] == "Artificer") {  
  dndSubclass.push("Alchemist", "Artillerist", "Battle Smith")
};
 
if (document.getElementById('TCoE').checked && characterClass[randClass1] == "Artificer") {  
    dndSubclass.push("Alchemist", "Armorer", "Artillerist", "Battle Smith")
};

//Barbarian Subclasses
if (document.getElementById('PHB').checked && characterClass[randClass1] == "Barbarian") {  
  dndSubclass.push("Path of the Beserker", "Path of the Totem Warrior")
};

if (document.getElementById('SCAG').checked && characterClass[randClass1] == "Barbarian") {  
  dndSubclass.push("Path of the Battlerager")
};

if (document.getElementById('XGtE').checked && characterClass[randClass1] == "Barbarian") {  
  dndSubclass.push("Path of the Ancestral Guardian", "Path of the Storm Herald", "Zealot")
};

if (document.getElementById('TCoE').checked && characterClass[randClass1] == "Barbarian") {  
  dndSubclass.push("Path of the Beast", "Path of Wild Magic")
};

//Bard Subclasses
if (document.getElementById('PHB').checked && characterClass[randClass1] == "Bard") {  
  dndSubclass.push("College of Lore", "College of Valor")
};

if (document.getElementById('Ravenloft').checked && characterClass[randClass1] == "Bard") {  
  dndSubclass.push("College of Spirits")
};

if (document.getElementById('XGtE').checked && characterClass[randClass1] == "Bard") {  
  dndSubclass.push("College of Glamour", "College of Swords", "College of Whispers")
};

if (document.getElementById('Theros').checked && characterClass[randClass1] == "Bard") {  
  dndSubclass.push("College of Eloquence")
};

if (document.getElementById('TCoE').checked && characterClass[randClass1] == "Bard") {  
  dndSubclass.push("College of Eloquence")
};

//Cleric Subclasses
if (document.getElementById('PHB').checked && characterClass[randClass1] == "Cleric") {  
  dndSubclass.push("Knowledge Domain", "Life Domain", "Light Domain", "Nature Domain", 
  "Tempest Domain", "Trickery Domain", "War Domain")
};

if (document.getElementById('DMG').checked && characterClass[randClass1] == "Cleric") {  
  dndSubclass.push("Death Domain")
};

if (document.getElementById('SCAG').checked && characterClass[randClass1] == "Cleric") {  
  dndSubclass.push("Arcana Domain")
};

if (document.getElementById('XGtE').checked && characterClass[randClass1] == "Cleric") {  
  dndSubclass.push("Forge Domain", "Grave Domain")
};

if (document.getElementById('Ravnica').checked && characterClass[randClass1] == "Cleric") {  
  dndSubclass.push("Order Domain")
};

if (document.getElementById('TCoE').checked && characterClass[randClass1] == "Cleric") {  
  dndSubclass.push("Peace Domain", "Order Domain", "Twilight Domain")
};

//Druid Subclasses
if (document.getElementById('PHB').checked && characterClass[randClass1] == "Druid") {  
  dndSubclass.push("Circle of the Land", "Circle of the Moon")
};

if (document.getElementById('XGtE').checked && characterClass[randClass1] == "Druid") {  
  dndSubclass.push("Circle of Dreams", "Circle of the Shepherd")
};

if (document.getElementById('Ravnica').checked && characterClass[randClass1] == "Druid") {  
  dndSubclass.push("Circle of Spores")
};

if (document.getElementById('TCoE').checked && characterClass[randClass1] == "Druid") {  
  dndSubclass.push("Circle of Spores", "Circle of Stars", "Circle of Wildfire")
};

//Fighter Subclasses
if (document.getElementById('PHB').checked && characterClass[randClass1] == "Fighter") {  
  dndSubclass.push("Battle Master", "Champion", "Eldritch Knight")
};

if (document.getElementById('XGtE').checked && characterClass[randClass1] == "Fighter") {  
  dndSubclass.push("Arcane Archer", "Cavalier", "Samurai")
};

if (document.getElementById('SCAG').checked && characterClass[randClass1] == "Fighter") {  
  dndSubclass.push("Banneret")
};

if (document.getElementById('EGtW').checked && characterClass[randClass1] == "Fighter") {  
  dndSubclass.push("Echo Knight")
};

if (document.getElementById('TCoE').checked && characterClass[randClass1] == "Fighter") {  
  dndSubclass.push("Psi Warrior", "Rune Knight")
}

//Monk Subclasses
if (document.getElementById('PHB').checked && characterClass[randClass1] == "Monk") {  
  dndSubclass.push("Way of the Four Elements", "Way of the Open Hand", "Way of the Shadow")
};

if (document.getElementById('XGtE').checked && characterClass[randClass1] == "Monk") {  
  dndSubclass.push("Way of the Drunken Master", "Way of the Kensei", "Way of the Sun Soul")
};

if (document.getElementById('SCAG').checked && characterClass[randClass1] == "Monk") {  
  dndSubclass.push("Way of the Long Death", "Way of the Sun Soul")
};

if (document.getElementById('TCoE').checked && characterClass[randClass1] == "Monk") {  
  dndSubclass.push("Way of the Astral Self", "Way of Mercy")
};

//Paladin Subclasses
if (document.getElementById('PHB').checked && characterClass[randClass1] == "Paladin") {  
  dndSubclass.push("Oath of the Ancients", "Oath of Devotion", "Oath of Vengeance")
};

if (document.getElementById('XGtE').checked && characterClass[randClass1] == "Paladin") {  
  dndSubclass.push("Oath of Conquest", "Oath of Redemption")
};

if (document.getElementById('DMG').checked && characterClass[randClass1] == "Paladin") {  
  dndSubclass.push("Oathbreaker")
};

if (document.getElementById('Theros').checked && characterClass[randClass1] == "Paladin") {  
  dndSubclass.push("Oath of Glory")
};

if (document.getElementById('SCAG').checked && characterClass[randClass1] == "Paladin") {  
  dndSubclass.push("Oath of the Crown")
};

if (document.getElementById('TCoE').checked && characterClass[randClass1] == "Paladin") {  
  dndSubclass.push("Oath of Glory", "Oath of the Watchers")
};

//Ranger Subclasses
if (document.getElementById('PHB').checked && characterClass[randClass1] == "Ranger") {  
  dndSubclass.push("Beast Master Conclave", "Hunter Conclave")
};

if (document.getElementById('XGtE').checked && characterClass[randClass1] == "Ranger") {  
  dndSubclass.push("Gloom Stalker Conclave", "Horizon Walker Conclave", "Monster Slayer Conclave")
};

if (document.getElementById('TCoE').checked && characterClass[randClass1] == "Ranger") {  
  dndSubclass.push("Fey Wanderer Conclave", "Swarmkeeper Conclave")
};

//Rogue Subclasses
if (document.getElementById('PHB').checked && characterClass[randClass1] == "Rogue") {  
  dndSubclass.push("Arcane Trickter", "Assassin", "Theif")
};

if (document.getElementById('XGtE').checked && characterClass[randClass1] == "Rogue") {  
  dndSubclass.push("Inquisitive", "Mastermind", "Scout", "Swashbuckler")
};

if (document.getElementById('TCoE').checked && characterClass[randClass1] == "Rogue") {  
  dndSubclass.push("Phantom", "Soul Knife")
};

//Sorcerer Subclasses
if (document.getElementById('PHB').checked && characterClass[randClass1] == "Sorcerer") {  
  dndSubclass.push("Draconic Bloodline", "Wild Magic")
};

if (document.getElementById('XGtE').checked && characterClass[randClass1] == "Sorcerer") {  
  dndSubclass.push("Divine Soul", "Shadow", "Storm")
};

if (document.getElementById('SCAG').checked && characterClass[randClass1] == "Sorcerer") {  
  dndSubclass.push("Storm")
};

if (document.getElementById('TCoE').checked && characterClass[randClass1] == "Sorcerer") {  
  dndSubclass.push("Aberrant Mind", "Clockwork Soul")
};


//Warlock Subclasses
if (document.getElementById('PHB').checked && characterClass[randClass1] == "Warlock") {  
  dndSubclass.push("Archfey Patron", "Fiend Patron", "Great Old One Patron")
};

if (document.getElementById('XGtE').checked && characterClass[randClass1] == "Warlock") {  
  dndSubclass.push("Celestial Patron", "Hexblade Patron")
};

if (document.getElementById('SCAG').checked && characterClass[randClass1] == "Warlock") {  
  dndSubclass.push("Undying Patron")
};

if (document.getElementById('Ravenloft').checked && characterClass[randClass1] == "Warlock") {  
  dndSubclass.push("Undead Patron")
};

if (document.getElementById('TCoE').checked && characterClass[randClass1] == "Warlock") {  
  dndSubclass.push("Fathomless Patron", "Genie Patron")
};


//Wizard Subclasses
if (document.getElementById('PHB').checked && characterClass[randClass1] == "Wizard") {  
  dndSubclass.push("School of Abjuration", "School of Conjuration", "School of Divination",
   "School of Enchantment", "School of Evocation", "School of Illusion", "School of Necromancy",
    "School of Transmutation")
};

if (document.getElementById('XGtE').checked && characterClass[randClass1] == "Wizard") {  
  dndSubclass.push("School of War Magic")
};

if (document.getElementById('SCAG').checked && characterClass[randClass1] == "Wizard") {  
  dndSubclass.push("Bladesinger")
};

if (document.getElementById('EGtW').checked && characterClass[randClass1] == "Wizard") {  
  dndSubclass.push("School of Chronurgy", "School of Gravitrugy")
};

if (document.getElementById('TCoE').checked && characterClass[randClass1] == "Wizard") {  
  dndSubclass.push("Bladesinger", "Order of Scribes")
};

 

randSubclass1 = Math.floor(Math.random() * characterSubclass.length); //generates a random character subclass

// this is to filter out duplicate subclasses as some subclasses are in multiple books
  dndSubclass.forEach((item)=>{ 
    if(!characterSubclass.includes(item)){
      characterSubclass.push(item);}})

    // this is to filter out duplicate subclasses as some subclasses are in multiple books


stat1roll1 = Math.floor(Math.random() * 5 + 1);
stat1roll2 = Math.floor(Math.random() * 5 + 1);
stat1roll3 = Math.floor(Math.random() * 5 + 1);
stat1roll4 = Math.floor(Math.random() * 5 + 1);
stat1Array = [stat1roll1, stat1roll2, stat1roll3, stat1roll4];

stat1Array.sort()
stat1 = stat1Array[3] + stat1Array[2] + stat1Array[1];


stat2roll1 = Math.floor(Math.random() * 5 + 1);
stat2roll2 = Math.floor(Math.random() * 5 + 1);
stat2roll3 = Math.floor(Math.random() * 5 + 1);
stat2roll4 = Math.floor(Math.random() * 5 + 1);
stat2Array = [stat2roll1, stat2roll2, stat2roll3, stat2roll4];

stat2Array.sort()
stat2 = stat2Array[3] + stat2Array[2] + stat2Array[1];


stat3roll1 = Math.floor(Math.random() * 5 + 1);
stat3roll2 = Math.floor(Math.random() * 5 + 1);
stat3roll3 = Math.floor(Math.random() * 5 + 1);
stat3roll4 = Math.floor(Math.random() * 5 + 1);
stat3Array = [stat3roll1, stat3roll2, stat3roll3, stat3roll4];

stat3Array.sort()
stat3 = stat3Array[3] + stat3Array[2] + stat3Array[1];



stat4roll1 = Math.floor(Math.random() * 5 + 1);
stat4roll2 = Math.floor(Math.random() * 5 + 1);
stat4roll3 = Math.floor(Math.random() * 5 + 1);
stat4roll4 = Math.floor(Math.random() * 5 + 1);
stat4Array = [stat4roll1, stat4roll2, stat4roll3, stat4roll4];

stat4Array.sort()
stat4 = stat4Array[3] + stat4Array[2] + stat4Array[1];



stat5roll1 = Math.floor(Math.random() * 5 + 1);
stat5roll2 = Math.floor(Math.random() * 5 + 1);
stat5roll3 = Math.floor(Math.random() * 5 + 1);
stat5roll4 = Math.floor(Math.random() * 5 + 1);
stat5Array = [stat5roll1, stat5roll2, stat5roll3, stat5roll4];

stat5Array.sort()
stat5 = stat5Array[3] + stat5Array[2] + stat5Array[1];


stat6roll1 = Math.floor(Math.random() * 5 + 1);
stat6roll2 = Math.floor(Math.random() * 5 + 1);
stat6roll3 = Math.floor(Math.random() * 5 + 1);
stat6roll4 = Math.floor(Math.random() * 5 + 1);
stat6Array = [stat6roll1, stat6roll2, stat6roll3, stat6roll4];

stat6Array.sort()
stat6 = stat6Array[3] + stat6Array[2] + stat6Array[1];

stats = [stat1, stat1, stat3, stat4, stat5, stat6]


statArray= stats.sort(function(num1, num2){
  if (num1 < num2){
    return 1;
  } else if (num2 < num1){
    return -1;
}
else return 0
});

if (characterClass[randClass1] == "Artificer"){

document.getElementById("hStr").innerHTML = "Strength: " + statArray[4];
document.getElementById("hDex").innerHTML = "Dexterity: " + statArray[1];
document.getElementById("hCon").innerHTML = "Constitution: " + statArray[2];
document.getElementById("hInt").innerHTML = "Intelligence: " + statArray[0];
document.getElementById("hWis").innerHTML = "Wisdom: " + statArray[5];
document.getElementById("hCha").innerHTML = "Charisma: " + statArray[3];
}

else if (characterClass[randClass1] == "Barbarian"){
    
  document.getElementById("hStr").innerHTML = "Strength: " + statArray[0];
  document.getElementById("hDex").innerHTML = "Dexterity: " + statArray[2];
  document.getElementById("hCon").innerHTML = "Constitution: " + statArray[1];
  document.getElementById("hInt").innerHTML = "Intelligence: " + statArray[4];
  document.getElementById("hWis").innerHTML = "Wisdom: " + statArray[5];
  document.getElementById("hCha").innerHTML = "Charisma: " + statArray[3];
}

else if (characterClass[randClass1] == "Bard"){
  
  document.getElementById("hStr").innerHTML = "Strength: " + statArray[4];
  document.getElementById("hDex").innerHTML = "Dexterity: " + statArray[1];
  document.getElementById("hCon").innerHTML = "Constitution: " + statArray[2];
  document.getElementById("hInt").innerHTML = "Intelligence: " + statArray[5];
  document.getElementById("hWis").innerHTML = "Wisdom: " + statArray[3];
  document.getElementById("hCha").innerHTML = "Charisma: " + statArray[0];
}
else if (characterClass[randClass1] == "Cleric"){
  
  document.getElementById("hStr").innerHTML = "Strength: " + statArray[2];
  document.getElementById("hDex").innerHTML = "Dexterity: " + statArray[1];
  document.getElementById("hCon").innerHTML = "Constitution: " + statArray[3];
  document.getElementById("hInt").innerHTML = "Intelligence: " + statArray[4];
  document.getElementById("hWis").innerHTML = "Wisdom: " + statArray[0];
  document.getElementById("hCha").innerHTML = "Charisma: " + statArray[5];
}
else if (characterClass[randClass1] == "Druid"){
  
  document.getElementById("hStr").innerHTML = "Strength: " + statArray[4];
  document.getElementById("hDex").innerHTML = "Dexterity: " + statArray[1];
  document.getElementById("hCon").innerHTML = "Constitution: " + statArray[2];
  document.getElementById("hInt").innerHTML = "Intelligence: " + statArray[3];
  document.getElementById("hWis").innerHTML = "Wisdom: " + statArray[0];
  document.getElementById("hCha").innerHTML = "Charisma: " + statArray[5];
}
else if (characterClass[randClass1] == "Fighter"){
  
  document.getElementById("hStr").innerHTML = "Strength: " + statArray[0];
  document.getElementById("hDex").innerHTML = "Dexterity: " + statArray[1];
  document.getElementById("hCon").innerHTML = "Constitution: " + statArray[2];
  document.getElementById("hInt").innerHTML = "Intelligence: " + statArray[3];
  document.getElementById("hWis").innerHTML = "Wisdom: " + statArray[4];
  document.getElementById("hCha").innerHTML = "Charisma: " + statArray[5];
}
else if (characterClass[randClass1] == "Monk"){
  
  document.getElementById("hStr").innerHTML = "Strength: " + statArray[3];
  document.getElementById("hDex").innerHTML = "Dexterity: " + statArray[0];
  document.getElementById("hCon").innerHTML = "Constitution: " + statArray[2];
  document.getElementById("hInt").innerHTML = "Intelligence: " + statArray[4];
  document.getElementById("hWis").innerHTML = "Wisdom: " + statArray[1];
  document.getElementById("hCha").innerHTML = "Charisma: " + statArray[5];
}
else if (characterClass[randClass1] == "Paladin"){
  
  document.getElementById("hStr").innerHTML = "Strength: " + statArray[0];
  document.getElementById("hDex").innerHTML = "Dexterity: " + statArray[4];
  document.getElementById("hCon").innerHTML = "Constitution: " + statArray[3];
  document.getElementById("hInt").innerHTML = "Intelligence: " + statArray[5];
  document.getElementById("hWis").innerHTML = "Wisdom: " + statArray[4];
  document.getElementById("hCha").innerHTML = "Charisma: " + statArray[2];
}
else if (characterClass[randClass1] == "Ranger"){

  document.getElementById("hStr").innerHTML = "Strength: " + statArray[4];
  document.getElementById("hDex").innerHTML = "Dexterity: " + statArray[0];
  document.getElementById("hCon").innerHTML = "Constitution: " + statArray[2];
  document.getElementById("hInt").innerHTML = "Intelligence: " + statArray[5];
  document.getElementById("hWis").innerHTML = "Wisdom: " + statArray[1];
  document.getElementById("hCha").innerHTML = "Charisma: " + statArray[3];
}

else if (characterClass[randClass1] == "Rogue"){
  
  document.getElementById("hStr").innerHTML = "Strength: " + statArray[4];
  document.getElementById("hDex").innerHTML = "Dexterity: " + statArray[0];
  document.getElementById("hCon").innerHTML = "Constitution: " + statArray[3];
  document.getElementById("hInt").innerHTML = "Intelligence: " + statArray[2];
  document.getElementById("hWis").innerHTML = "Wisdom: " + statArray[5];
  document.getElementById("hCha").innerHTML = "Charisma: " + statArray[1];
}
else if (characterClass[randClass1] == "Sorcerer"){
  
  document.getElementById("hStr").innerHTML = "Strength: " + statArray[5];
  document.getElementById("hDex").innerHTML = "Dexterity: " + statArray[2];
  document.getElementById("hCon").innerHTML = "Constitution: " + statArray[1];
  document.getElementById("hInt").innerHTML = "Intelligence: " + statArray[4];
  document.getElementById("hWis").innerHTML = "Wisdom: " + statArray[3];
  document.getElementById("hCha").innerHTML = "Charisma: " + statArray[0];
}
else if (characterClass[randClass1] == "Warlock"){
  
  document.getElementById("hStr").innerHTML = "Strength: " + statArray[5];
  document.getElementById("hDex").innerHTML = "Dexterity: " + statArray[1];
  document.getElementById("hCon").innerHTML = "Constitution: " + statArray[2];
  document.getElementById("hInt").innerHTML = "Intelligence: " + statArray[3];
  document.getElementById("hWis").innerHTML = "Wisdom: " + statArray[4];
  document.getElementById("hCha").innerHTML = "Charisma: " + statArray[0];
}
else if (characterClass[randClass1] == "Wizard"){
  
  document.getElementById("hStr").innerHTML = "Strength: " + statArray[5];
  document.getElementById("hDex").innerHTML = "Dexterity: " + statArray[1];
  document.getElementById("hCon").innerHTML = "Constitution: " + statArray[2];
  document.getElementById("hInt").innerHTML = "Intelligence: " + statArray[0];
  document.getElementById("hWis").innerHTML = "Wisdom: " + statArray[3];
  document.getElementById("hCha").innerHTML = "Charisma: " + statArray[4];

}

document.getElementById("randomRace").innerHTML = characterRace[randRace1];
document.getElementById("randomClass").innerHTML = characterClass[randClass1];
document.getElementById("randomSubclass").innerHTML = characterSubclass[randSubclass1];
 


// This is the end of the character generator. from here on out it is the
// REROLLS ONLY

document.getElementById("reRollRace").onclick = function RaceOnly(){

  dndRace = ["Dragonborn", "Drow", "Hill Dwarf", "Mountain Dwarf", "Dark Elf (Drow)", "High Elf",
  "Wood Elf", "Forest Gnome", "Rock Gnome",
 "Half-Elf", "Half-Orc", "Lightfoot Halfling", "Stout Halfling", "Human", "Human (Variant)", 
 "Tiefling (Asmodeus Bloodline)"]; //PHB Races
 characterRace = [];


  randRace2 = Math.floor(Math.random() * characterRace.length); //rerolls character race
 
  if (document.getElementById('AI').checked ) {
    dndRace.push("Verdan");

  };
  //if chosen as a source material this will add the races and classes from Aquisitions Incorporated

// No races added in the Dubgein Master Guide

// No races added in Van Richten's Guide to Ravenloft

if (document.getElementById('SCAG').checked ) {
  dndRace.push("Devil's Tongue Tiefling");
  dndRace.push("Duergar");
  dndRace.push("Feral Tiefling");
  dndRace.push("Ghostwise Halfling");
  dndRace.push("Hellfire Tiefling");
  dndRace.push("Winged Tiefling");

};
//if chosen as a source material this will add the races and classes from  Sword Coast Adventurer's Guild

if (document.getElementById('Volo').checked ) {
  dndRace.push("Bugbear");
  dndRace.push("Fallen Aasimar");
  dndRace.push("Firbolg");
  dndRace.push("Goblin");
  dndRace.push("Goliath");
  dndRace.push("Hobgoblin");
  dndRace.push("Kenku");
  dndRace.push("Kobold");
  dndRace.push("Lizardfolk");
  dndRace.push("Orc");
  dndRace.push("Protector Aasimar");
  dndRace.push("Scourge Aasimar");
  dndRace.push("Tabaxi");
  dndRace.push("Triton");
  dndRace.push("Yuan-Ti (Pureblood)");
 
};
//if chosen as a source material this will add the races and classes from Volo's Guide to Monsters


// No races added in Xanathar's Guide to Everything

//if chosen as a source material this will add the races and classes from Xanathar's Guide to Everything

if (document.getElementById('MToF').checked ) {
dndRace.push("Gith");
dndRace.push("Duergar");
dndRace.push("Spring Eladrin");
dndRace.push("Summer Eladrin");
dndRace.push("Autumn Eladrin");
dndRace.push("Winter Eladrin");
dndRace.push("Sea Elf");
dndRace.push("Shadar-Kai");
dndRace.push("Deep Gnome");
dndRace.push("Tiefling (Baalzebul Bloodline)");
dndRace.push("Tiefling (Dispater Bloodline)");
dndRace.push("Tiefling (Fierna Bloodline)");
dndRace.push("Tiefling (Glasya Bloodline)");
dndRace.push("Tiefling (Levistus Bloodline)");
dndRace.push("Tiefling (Mammon Bloodline)");
dndRace.push("Tiefling (Mephistopheles Bloodline)");
dndRace.push("Tiefling (Zariel Bloodline)");

};
//if chosen as a source material this will add the races and classes from Mordekainen's Tome of Foes

if (document.getElementById('Ravnica').checked ) {
  dndRace.push("Centaur");
  dndRace.push("Loxodon");
  dndRace.push("Minotaur");
  dndRace.push("Simic Hybrid");

};
//if chosen as a source material this will add the races and classes from Guildmaster's Guide to Ravnica

if (document.getElementById('Eberron').checked ) {
  dndRace.push("Beasthide Shifter");
  dndRace.push("Bugbear");
  dndRace.push("Changeling");
  dndRace.push("Goblin");
  dndRace.push("Hobgoblin");
  dndRace.push("Kalashtar");
  dndRace.push("Longtooth Shifter");
  dndRace.push("Mark Of Detection Half Elf");
  dndRace.push("Mark Of Finding Half-Orc");
  dndRace.push("Mark Of Finding Human");
  dndRace.push("Mark Of Healing Halfling");
  dndRace.push("Mark Of Hospitality Halfling");
  dndRace.push("Mark Of Making Human");
  dndRace.push("Mark Of Passage Human");
  dndRace.push("Mark Of Scribing Gnome");
  dndRace.push("Mark Of Sentinal Human");
  dndRace.push("Mark Of Shadow Elf");
  dndRace.push("Mark Of Storm Half-Elf");
  dndRace.push("Mark Of Warding Dwarf");
  dndRace.push("Orc Of Eberron");
  dndRace.push("Swiftstride Shifter");
  dndRace.push("Warforged");
  dndRace.push("Wildhunt Shifter");
  
  dndClass.push("Artificer");
    // Artificer was added in Eberron: Rising fom the Last War

};
//if chosen as a source material this will add the races and classes from Eberron: Rising fom the Last War

if (document.getElementById('Theros').checked ) {
  dndRace.push("Centaur");
  dndRace.push("Leonin");
  dndRace.push("Minotaur");
  dndRace.push("Satyr");
  dndRace.push("Triton");
 
};
//if chosen as a source material this will add the races and classes from Mythic Odysseys of Theros

if (document.getElementById('EE').checked ) {
  dndRace.push("Aarakocra");
  dndRace.push("Air Genasi");
  dndRace.push("Deep Gnome");
  dndRace.push("Earth Genasi");
  dndRace.push("Fire Genasi");
  dndRace.push("Goliath");
  dndRace.push("Water Genasi");

 };
//if chosen as a source material this will add the races and classes from Elemental Evil 

if (document.getElementById('Tortle').checked ) {
  dndRace.push("Tortle"); //Shockingly only Tortles were addedd in The Tortle Package

};
//if chosen as a source material this will add the races and classes from The Tortle Package

if ( document.getElementById('TCoE').checked ) {
    // No races added in Tasha's Couldran of Everything
  dndClass.push("Artificer");
    // Artificer was added Tasha's Couldran of Everything
};
  //if chosen as a source material this will add the races and classes from Tasha's Cauldon of Everything

// this is to filter out duplicate races as some races are in multiple books
dndRace.forEach((item)=>{ 
if(!characterRace.includes(item)){
  characterRace.push(item);}})

// this is to filter out duplicate races as some races are in multiple books

// this is to filter out duplicate races as some races are in multiple books
 dndClass.forEach((item)=>{ 
if(!characterClass.includes(item)){
  characterClass.push(item);}})
  // this is to filter out duplicate races as some races are in multiple books



 randRace1 = Math.floor(Math.random() * characterRace.length); //generates a random character race
 

  document.getElementById("randomRace").innerHTML = characterRace[randRace1];
  document.getElementById("randomClass").innerHTML = characterClass[randClass1];
  document.getElementById("randomSubclass").innerHTML = characterSubclass[randSubclass1];
}

document.getElementById("reRollClass").onclick = function ClassOnly(){
  
 dndClass = ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", 
 "Rogue", "Sorcerer", "Warlock", "Wizard"]; //PHB Classes
 dndSubclass = [];
 characterSubclass = [];
 characterClass = [];
  randClass1 = Math.floor(Math.random() * characterClass.length); //rerolls random character class

 if (document.getElementById('AI').checked ) {
      dndRace.push("Verdan");

    };
    //if chosen as a source material this will add the races and classes from Aquisitions Incorporated

// No races added in the Dubgein Master Guide

// No races added in Van Richten's Guide to Ravenloft

  if (document.getElementById('SCAG').checked ) {
    dndRace.push("Devil's Tongue Tiefling");
    dndRace.push("Duergar");
    dndRace.push("Feral Tiefling");
    dndRace.push("Ghostwise Halfling");
    dndRace.push("Hellfire Tiefling");
    dndRace.push("Winged Tiefling");
  
  };
  //if chosen as a source material this will add the races and classes from  Sword Coast Adventurer's Guild

  if (document.getElementById('Volo').checked ) {
    dndRace.push("Bugbear");
    dndRace.push("Fallen Aasimar");
    dndRace.push("Firbolg");
    dndRace.push("Goblin");
    dndRace.push("Goliath");
    dndRace.push("Hobgoblin");
    dndRace.push("Kenku");
    dndRace.push("Kobold");
    dndRace.push("Lizardfolk");
    dndRace.push("Orc");
    dndRace.push("Protector Aasimar");
    dndRace.push("Scourge Aasimar");
    dndRace.push("Tabaxi");
    dndRace.push("Triton");
    dndRace.push("Yuan-Ti (Pureblood)");
   
  };
  //if chosen as a source material this will add the races and classes from Volo's Guide to Monsters


// No races added in Xanathar's Guide to Everything

//if chosen as a source material this will add the races and classes from Xanathar's Guide to Everything

  if (document.getElementById('MToF').checked ) {
  dndRace.push("Gith");
  dndRace.push("Duergar");
  dndRace.push("Spring Eladrin");
  dndRace.push("Summer Eladrin");
  dndRace.push("Autumn Eladrin");
  dndRace.push("Winter Eladrin");
  dndRace.push("Sea Elf");
  dndRace.push("Shadar-Kai");
  dndRace.push("Deep Gnome");
  dndRace.push("Tiefling (Baalzebul Bloodline)");
  dndRace.push("Tiefling (Dispater Bloodline)");
  dndRace.push("Tiefling (Fierna Bloodline)");
  dndRace.push("Tiefling (Glasya Bloodline)");
  dndRace.push("Tiefling (Levistus Bloodline)");
  dndRace.push("Tiefling (Mammon Bloodline)");
  dndRace.push("Tiefling (Mephistopheles Bloodline)");
  dndRace.push("Tiefling (Zariel Bloodline)");
  
};
//if chosen as a source material this will add the races and classes from Mordekainen's Tome of Foes

  if (document.getElementById('Ravnica').checked ) {
    dndRace.push("Centaur");
    dndRace.push("Loxodon");
    dndRace.push("Minotaur");
    dndRace.push("Simic Hybrid");

  };
  //if chosen as a source material this will add the races and classes from Guildmaster's Guide to Ravnica

  if (document.getElementById('Eberron').checked ) {
    dndRace.push("Beasthide Shifter");
    dndRace.push("Bugbear");
    dndRace.push("Changeling");
    dndRace.push("Goblin");
    dndRace.push("Hobgoblin");
    dndRace.push("Kalashtar");
    dndRace.push("Longtooth Shifter");
    dndRace.push("Mark Of Detection Half Elf");
    dndRace.push("Mark Of Finding Half-Orc");
    dndRace.push("Mark Of Finding Human");
    dndRace.push("Mark Of Healing Halfling");
    dndRace.push("Mark Of Hospitality Halfling");
    dndRace.push("Mark Of Making Human");
    dndRace.push("Mark Of Passage Human");
    dndRace.push("Mark Of Scribing Gnome");
    dndRace.push("Mark Of Sentinal Human");
    dndRace.push("Mark Of Shadow Elf");
    dndRace.push("Mark Of Storm Half-Elf");
    dndRace.push("Mark Of Warding Dwarf");
    dndRace.push("Orc Of Eberron");
    dndRace.push("Swiftstride Shifter");
    dndRace.push("Warforged");
    dndRace.push("Wildhunt Shifter");
    
    dndClass.push("Artificer");
      // Artificer was added in Eberron: Rising fom the Last War

  };
  //if chosen as a source material this will add the races and classes from Eberron: Rising fom the Last War

  if (document.getElementById('Theros').checked ) {
    dndRace.push("Centaur");
    dndRace.push("Leonin");
    dndRace.push("Minotaur");
    dndRace.push("Satyr");
    dndRace.push("Triton");
   
  };
  //if chosen as a source material this will add the races and classes from Mythic Odysseys of Theros

  if (document.getElementById('EE').checked ) {
    dndRace.push("Aarakocra");
    dndRace.push("Air Genasi");
    dndRace.push("Deep Gnome");
    dndRace.push("Earth Genasi");
    dndRace.push("Fire Genasi");
    dndRace.push("Goliath");
    dndRace.push("Water Genasi");

   };
  //if chosen as a source material this will add the races and classes from Elemental Evil 

  if (document.getElementById('Tortle').checked ) {
    dndRace.push("Tortle"); //Shockingly only Tortles were addedd in The Tortle Package
  
  };
  //if chosen as a source material this will add the races and classes from The Tortle Package

  if ( document.getElementById('TCoE').checked ) {
      // No races added in Tasha's Couldran of Everything
    dndClass.push("Artificer");
      // Artificer was added Tasha's Couldran of Everything
 };
    //if chosen as a source material this will add the races and classes from Tasha's Cauldon of Everything

// this is to filter out duplicate races as some races are in multiple books
dndRace.forEach((item)=>{ 
  if(!characterRace.includes(item)){
    characterRace.push(item);}})

  // this is to filter out duplicate races as some races are in multiple books
  
  // this is to filter out duplicate races as some races are in multiple books
   dndClass.forEach((item)=>{ 
  if(!characterClass.includes(item)){
    characterClass.push(item);}})
    // this is to filter out duplicate races as some races are in multiple books
  
  randClass1 = Math.floor(Math.random() * characterClass.length); //generates a random character class

  if (document.getElementById('Eberron').checked && characterClass[randClass1] == "Artificer") {  
    dndSubclass.push("Alchemist", "Artillerist", "Battle Smith")
  };
   
  if (document.getElementById('TCoE').checked && characterClass[randClass1] == "Artificer") {  
      dndSubclass.push("Alchemist", "Armorer", "Artillerist", "Battle Smith")
  };
  
  //Barbarian Subclasses
  if (document.getElementById('PHB').checked && characterClass[randClass1] == "Barbarian") {  
    dndSubclass.push("Path of the Beserker", "Path of the Totem Warrior")
  };
  
  if (document.getElementById('SCAG').checked && characterClass[randClass1] == "Barbarian") {  
    dndSubclass.push("Path of the Battlerager")
  };
  
  if (document.getElementById('XGtE').checked && characterClass[randClass1] == "Barbarian") {  
    dndSubclass.push("Path of the Ancestral Guardian", "Path of the Storm Herald", "Zealot")
  };
  
  if (document.getElementById('TCoE').checked && characterClass[randClass1] == "Barbarian") {  
    dndSubclass.push("Path of the Beast", "Path of Wild Magic")
  };
  
  //Bard Subclasses
  if (document.getElementById('PHB').checked && characterClass[randClass1] == "Bard") {  
    dndSubclass.push("College of Lore", "College of Valor")
  };
  
  if (document.getElementById('Ravenloft').checked && characterClass[randClass1] == "Bard") {  
    dndSubclass.push("College of Spirits")
  };
  
  if (document.getElementById('XGtE').checked && characterClass[randClass1] == "Bard") {  
    dndSubclass.push("College of Glamour", "College of Swords", "College of Whispers")
  };
  
  if (document.getElementById('Theros').checked && characterClass[randClass1] == "Bard") {  
    dndSubclass.push("College of Eloquence")
  };
  
  if (document.getElementById('TCoE').checked && characterClass[randClass1] == "Bard") {  
    dndSubclass.push("College of Eloquence")
  };
  
  //Cleric Subclasses
  if (document.getElementById('PHB').checked && characterClass[randClass1] == "Cleric") {  
    dndSubclass.push("Knowledge Domain", "Life Domain", "Light Domain", "Nature Domain", 
    "Tempest Domain", "Trickery Domain", "War Domain")
  };
  
  if (document.getElementById('DMG').checked && characterClass[randClass1] == "Cleric") {  
    dndSubclass.push("Death Domain")
  };
  
  if (document.getElementById('SCAG').checked && characterClass[randClass1] == "Cleric") {  
    dndSubclass.push("Arcana Domain")
  };
  
  if (document.getElementById('XGtE').checked && characterClass[randClass1] == "Cleric") {  
    dndSubclass.push("Forge Domain", "Grave Domain")
  };
  
  if (document.getElementById('Ravnica').checked && characterClass[randClass1] == "Cleric") {  
    dndSubclass.push("Order Domain")
  };
  
  if (document.getElementById('TCoE').checked && characterClass[randClass1] == "Cleric") {  
    dndSubclass.push("Peace Domain", "Order Domain", "Twilight Domain")
  };
  
  //Druid Subclasses
  if (document.getElementById('PHB').checked && characterClass[randClass1] == "Druid") {  
    dndSubclass.push("Circle of the Land", "Circle of the Moon")
  };
  
  if (document.getElementById('XGtE').checked && characterClass[randClass1] == "Druid") {  
    dndSubclass.push("Circle of Dreams", "Circle of the Shepherd")
  };
  
  if (document.getElementById('Ravnica').checked && characterClass[randClass1] == "Druid") {  
    dndSubclass.push("Circle of Spores")
  };
  
  if (document.getElementById('TCoE').checked && characterClass[randClass1] == "Druid") {  
    dndSubclass.push("Circle of Spores", "Circle of Stars", "Circle of Wildfire")
  };
  
  //Fighter Subclasses
  if (document.getElementById('PHB').checked && characterClass[randClass1] == "Fighter") {  
    dndSubclass.push("Battle Master", "Champion", "Eldritch Knight")
  };
  
  if (document.getElementById('XGtE').checked && characterClass[randClass1] == "Fighter") {  
    dndSubclass.push("Arcane Archer", "Cavalier", "Samurai")
  };
  
  if (document.getElementById('SCAG').checked && characterClass[randClass1] == "Fighter") {  
    dndSubclass.push("Banneret")
  };
  
  if (document.getElementById('EGtW').checked && characterClass[randClass1] == "Fighter") {  
    dndSubclass.push("Echo Knight")
  };
  
  if (document.getElementById('TCoE').checked && characterClass[randClass1] == "Fighter") {  
    dndSubclass.push("Psi Warrior", "Rune Knight")
  }
  
  //Monk Subclasses
  if (document.getElementById('PHB').checked && characterClass[randClass1] == "Monk") {  
    dndSubclass.push("Way of the Four Elements", "Way of the Open Hand", "Way of the Shadow")
  };
  
  if (document.getElementById('XGtE').checked && characterClass[randClass1] == "Monk") {  
    dndSubclass.push("Way of the Drunken Master", "Way of the Kensei", "Way of the Sun Soul")
  };
  
  if (document.getElementById('SCAG').checked && characterClass[randClass1] == "Monk") {  
    dndSubclass.push("Way of the Long Death", "Way of the Sun Soul")
  };
  
  if (document.getElementById('TCoE').checked && characterClass[randClass1] == "Monk") {  
    dndSubclass.push("Way of the Astral Self", "Way of Mercy")
  };
  
  //Paladin Subclasses
  if (document.getElementById('PHB').checked && characterClass[randClass1] == "Paladin") {  
    dndSubclass.push("Oath of the Ancients", "Oath of Devotion", "Oath of Vengeance")
  };
  
  if (document.getElementById('XGtE').checked && characterClass[randClass1] == "Paladin") {  
    dndSubclass.push("Oath of Conquest", "Oath of Redemption")
  };
  
  if (document.getElementById('DMG').checked && characterClass[randClass1] == "Paladin") {  
    dndSubclass.push("Oathbreaker")
  };
  
  if (document.getElementById('Theros').checked && characterClass[randClass1] == "Paladin") {  
    dndSubclass.push("Oath of Glory")
  };
  
  if (document.getElementById('SCAG').checked && characterClass[randClass1] == "Paladin") {  
    dndSubclass.push("Oath of the Crown")
  };
  
  if (document.getElementById('TCoE').checked && characterClass[randClass1] == "Paladin") {  
    dndSubclass.push("Oath of Glory", "Oath of the Watchers")
  };
  
  //Ranger Subclasses
  if (document.getElementById('PHB').checked && characterClass[randClass1] == "Ranger") {  
    dndSubclass.push("Beast Master Conclave", "Hunter Conclave")
  };
  
  if (document.getElementById('XGtE').checked && characterClass[randClass1] == "Ranger") {  
    dndSubclass.push("Gloom Stalker Conclave", "Horizon Walker Conclave", "Monster Slayer Conclave")
  };
  
  if (document.getElementById('TCoE').checked && characterClass[randClass1] == "Ranger") {  
    dndSubclass.push("Fey Wanderer Conclave", "Swarmkeeper Conclave")
  };
  
  //Rogue Subclasses
  if (document.getElementById('PHB').checked && characterClass[randClass1] == "Rogue") {  
    dndSubclass.push("Arcane Trickter", "Assassin", "Theif")
  };
  
  if (document.getElementById('XGtE').checked && characterClass[randClass1] == "Rogue") {  
    dndSubclass.push("Inquisitive", "Mastermind", "Scout", "Swashbuckler")
  };
  
  if (document.getElementById('TCoE').checked && characterClass[randClass1] == "Rogue") {  
    dndSubclass.push("Phantom", "Soul Knife")
  };
  
  //Sorcerer Subclasses
  if (document.getElementById('PHB').checked && characterClass[randClass1] == "Sorcerer") {  
    dndSubclass.push("Draconic Bloodline", "Wild Magic")
  };
  
  if (document.getElementById('XGtE').checked && characterClass[randClass1] == "Sorcerer") {  
    dndSubclass.push("Divine Soul", "Shadow", "Storm")
  };
  
  if (document.getElementById('SCAG').checked && characterClass[randClass1] == "Sorcerer") {  
    dndSubclass.push("Storm")
  };
  
  if (document.getElementById('TCoE').checked && characterClass[randClass1] == "Sorcerer") {  
    dndSubclass.push("Aberrant Mind", "Clockwork Soul")
  };
  
  
  //Warlock Subclasses
  if (document.getElementById('PHB').checked && characterClass[randClass1] == "Warlock") {  
    dndSubclass.push("Archfey Patron", "Fiend Patron", "Great Old One Patron")
  };
  
  if (document.getElementById('XGtE').checked && characterClass[randClass1] == "Warlock") {  
    dndSubclass.push("Celestial Patron", "Hexblade Patron")
  };
  
  if (document.getElementById('SCAG').checked && characterClass[randClass1] == "Warlock") {  
    dndSubclass.push("Undying Patron")
  };
  
  if (document.getElementById('Ravenloft').checked && characterClass[randClass1] == "Warlock") {  
    dndSubclass.push("Undead Patron")
  };
  
  if (document.getElementById('TCoE').checked && characterClass[randClass1] == "Warlock") {  
    dndSubclass.push("Fathomless Patron", "Genie Patron")
  };
  
  
  //Wizard Subclasses
  if (document.getElementById('PHB').checked && characterClass[randClass1] == "Wizard") {  
    dndSubclass.push("School of Abjuration", "School of Conjuration", "School of Divination",
     "School of Enchantment", "School of Evocation", "School of Illusion", "School of Necromancy",
      "School of Transmutation")
  };
  
  if (document.getElementById('XGtE').checked && characterClass[randClass1] == "Wizard") {  
    dndSubclass.push("School of War Magic")
  };
  
  if (document.getElementById('SCAG').checked && characterClass[randClass1] == "Wizard") {  
    dndSubclass.push("Bladesinger")
  };
  
  if (document.getElementById('EGtW').checked && characterClass[randClass1] == "Wizard") {  
    dndSubclass.push("School of Chronurgy", "School of Gravitrugy")
  };
  
  if (document.getElementById('TCoE').checked && characterClass[randClass1] == "Wizard") {  
    dndSubclass.push("Bladesinger", "Order of Scribes")
  }
    
    // this is to filter out duplicate subclasses
     dndSubclass.forEach((item)=>{ 
    if(!characterSubclass.includes(item)){
      characterSubclass.push(item);}})
      // this is to filter out duplicate subclasses

  randSubclass1 = Math.floor(Math.random() * characterSubclass.length);

  document.getElementById("randomRace").innerHTML = characterRace[randRace1];
  document.getElementById("randomClass").innerHTML = characterClass[randClass1];
  document.getElementById("randomSubclass").innerHTML = characterSubclass[randSubclass1];

  }
document.getElementById("reRollSubclass").onclick = function SubclassOnly(){


 dndSubclass = [];
 characterSubclass = [];



//Artificer Subclasses
if (document.getElementById('Eberron').checked && characterClass[randClass1] == "Artificer") {  
  dndSubclass.push("Alchemist", "Artillerist", "Battle Smith")
};
 
if (document.getElementById('TCoE').checked && characterClass[randClass1] == "Artificer") {  
    dndSubclass.push("Alchemist", "Armorer", "Artillerist", "Battle Smith")
};

//Barbarian Subclasses
if (document.getElementById('PHB').checked && characterClass[randClass1] == "Barbarian") {  
  dndSubclass.push("Path of the Beserker", "Path of the Totem Warrior")
};

if (document.getElementById('SCAG').checked && characterClass[randClass1] == "Barbarian") {  
  dndSubclass.push("Path of the Battlerager")
};

if (document.getElementById('XGtE').checked && characterClass[randClass1] == "Barbarian") {  
  dndSubclass.push("Path of the Ancestral Guardian", "Path of the Storm Herald", "Zealot")
};

if (document.getElementById('TCoE').checked && characterClass[randClass1] == "Barbarian") {  
  dndSubclass.push("Path of the Beast", "Path of Wild Magic")
};

//Bard Subclasses
if (document.getElementById('PHB').checked && characterClass[randClass1] == "Bard") {  
  dndSubclass.push("College of Lore", "College of Valor")
};

if (document.getElementById('Ravenloft').checked && characterClass[randClass1] == "Bard") {  
  dndSubclass.push("College of Spirits")
};

if (document.getElementById('XGtE').checked && characterClass[randClass1] == "Bard") {  
  dndSubclass.push("College of Glamour", "College of Swords", "College of Whispers")
};

if (document.getElementById('Theros').checked && characterClass[randClass1] == "Bard") {  
  dndSubclass.push("College of Eloquence")
};

if (document.getElementById('TCoE').checked && characterClass[randClass1] == "Bard") {  
  dndSubclass.push("College of Eloquence")
};

//Cleric Subclasses
if (document.getElementById('PHB').checked && characterClass[randClass1] == "Cleric") {  
  dndSubclass.push("Knowledge Domain", "Life Domain", "Light Domain", "Nature Domain", 
  "Tempest Domain", "Trickery Domain", "War Domain")
};

if (document.getElementById('DMG').checked && characterClass[randClass1] == "Cleric") {  
  dndSubclass.push("Death Domain")
};

if (document.getElementById('SCAG').checked && characterClass[randClass1] == "Cleric") {  
  dndSubclass.push("Arcana Domain")
};

if (document.getElementById('XGtE').checked && characterClass[randClass1] == "Cleric") {  
  dndSubclass.push("Forge Domain", "Grave Domain")
};

if (document.getElementById('Ravnica').checked && characterClass[randClass1] == "Cleric") {  
  dndSubclass.push("Order Domain")
};

if (document.getElementById('TCoE').checked && characterClass[randClass1] == "Cleric") {  
  dndSubclass.push("Peace Domain", "Order Domain", "Twilight Domain")
};

//Druid Subclasses
if (document.getElementById('PHB').checked && characterClass[randClass1] == "Druid") {  
  dndSubclass.push("Circle of the Land", "Circle of the Moon")
};

if (document.getElementById('XGtE').checked && characterClass[randClass1] == "Druid") {  
  dndSubclass.push("Circle of Dreams", "Circle of the Shepherd")
};

if (document.getElementById('Ravnica').checked && characterClass[randClass1] == "Druid") {  
  dndSubclass.push("Circle of Spores")
};

if (document.getElementById('TCoE').checked && characterClass[randClass1] == "Druid") {  
  dndSubclass.push("Circle of Spores", "Circle of Stars", "Circle of Wildfire")
};

//Fighter Subclasses
if (document.getElementById('PHB').checked && characterClass[randClass1] == "Fighter") {  
  dndSubclass.push("Battle Master", "Champion", "Eldritch Knight")
};

if (document.getElementById('XGtE').checked && characterClass[randClass1] == "Fighter") {  
  dndSubclass.push("Arcane Archer", "Cavalier", "Samurai")
};

if (document.getElementById('SCAG').checked && characterClass[randClass1] == "Fighter") {  
  dndSubclass.push("Banneret")
};

if (document.getElementById('EGtW').checked && characterClass[randClass1] == "Fighter") {  
  dndSubclass.push("Echo Knight")
};

if (document.getElementById('TCoE').checked && characterClass[randClass1] == "Fighter") {  
  dndSubclass.push("Psi Warrior", "Rune Knight")
}

//Monk Subclasses
if (document.getElementById('PHB').checked && characterClass[randClass1] == "Monk") {  
  dndSubclass.push("Way of the Four Elements", "Way of the Open Hand", "Way of the Shadow")
};

if (document.getElementById('XGtE').checked && characterClass[randClass1] == "Monk") {  
  dndSubclass.push("Way of the Drunken Master", "Way of the Kensei", "Way of the Sun Soul")
};

if (document.getElementById('SCAG').checked && characterClass[randClass1] == "Monk") {  
  dndSubclass.push("Way of the Long Death", "Way of the Sun Soul")
};

if (document.getElementById('TCoE').checked && characterClass[randClass1] == "Monk") {  
  dndSubclass.push("Way of the Astral Self", "Way of Mercy")
};

//Paladin Subclasses
if (document.getElementById('PHB').checked && characterClass[randClass1] == "Paladin") {  
  dndSubclass.push("Oath of the Ancients", "Oath of Devotion", "Oath of Vengeance")
};

if (document.getElementById('XGtE').checked && characterClass[randClass1] == "Paladin") {  
  dndSubclass.push("Oath of Conquest", "Oath of Redemption")
};

if (document.getElementById('DMG').checked && characterClass[randClass1] == "Paladin") {  
  dndSubclass.push("Oathbreaker")
};

if (document.getElementById('Theros').checked && characterClass[randClass1] == "Paladin") {  
  dndSubclass.push("Oath of Glory")
};

if (document.getElementById('SCAG').checked && characterClass[randClass1] == "Paladin") {  
  dndSubclass.push("Oath of the Crown")
};

if (document.getElementById('TCoE').checked && characterClass[randClass1] == "Paladin") {  
  dndSubclass.push("Oath of Glory", "Oath of the Watchers")
};

//Ranger Subclasses
if (document.getElementById('PHB').checked && characterClass[randClass1] == "Ranger") {  
  dndSubclass.push("Beast Master Conclave", "Hunter Conclave")
};

if (document.getElementById('XGtE').checked && characterClass[randClass1] == "Ranger") {  
  dndSubclass.push("Gloom Stalker Conclave", "Horizon Walker Conclave", "Monster Slayer Conclave")
};

if (document.getElementById('TCoE').checked && characterClass[randClass1] == "Ranger") {  
  dndSubclass.push("Fey Wanderer Conclave", "Swarmkeeper Conclave")
};

//Rogue Subclasses
if (document.getElementById('PHB').checked && characterClass[randClass1] == "Rogue") {  
  dndSubclass.push("Arcane Trickter", "Assassin", "Theif")
};

if (document.getElementById('XGtE').checked && characterClass[randClass1] == "Rogue") {  
  dndSubclass.push("Inquisitive", "Mastermind", "Scout", "Swashbuckler")
};

if (document.getElementById('TCoE').checked && characterClass[randClass1] == "Rogue") {  
  dndSubclass.push("Phantom", "Soul Knife")
};

//Sorcerer Subclasses
if (document.getElementById('PHB').checked && characterClass[randClass1] == "Sorcerer") {  
  dndSubclass.push("Draconic Bloodline", "Wild Magic")
};

if (document.getElementById('XGtE').checked && characterClass[randClass1] == "Sorcerer") {  
  dndSubclass.push("Divine Soul", "Shadow", "Storm")
};

if (document.getElementById('SCAG').checked && characterClass[randClass1] == "Sorcerer") {  
  dndSubclass.push("Storm")
};

if (document.getElementById('TCoE').checked && characterClass[randClass1] == "Sorcerer") {  
  dndSubclass.push("Aberrant Mind", "Clockwork Soul")
};


//Warlock Subclasses
if (document.getElementById('PHB').checked && characterClass[randClass1] == "Warlock") {  
  dndSubclass.push("Archfey Patron", "Fiend Patron", "Great Old One Patron")
};

if (document.getElementById('XGtE').checked && characterClass[randClass1] == "Warlock") {  
  dndSubclass.push("Celestial Patron", "Hexblade Patron")
};

if (document.getElementById('SCAG').checked && characterClass[randClass1] == "Warlock") {  
  dndSubclass.push("Undying Patron")
};

if (document.getElementById('Ravenloft').checked && characterClass[randClass1] == "Warlock") {  
  dndSubclass.push("Undead Patron")
};

if (document.getElementById('TCoE').checked && characterClass[randClass1] == "Warlock") {  
  dndSubclass.push("Fathomless Patron", "Genie Patron")
};


//Wizard Subclasses
if (document.getElementById('PHB').checked && characterClass[randClass1] == "Wizard") {  
  dndSubclass.push("School of Abjuration", "School of Conjuration", "School of Divination",
   "School of Enchantment", "School of Evocation", "School of Illusion", "School of Necromancy",
    "School of Transmutation")
};

if (document.getElementById('XGtE').checked && characterClass[randClass1] == "Wizard") {  
  dndSubclass.push("School of War Magic")
};

if (document.getElementById('SCAG').checked && characterClass[randClass1] == "Wizard") {  
  dndSubclass.push("Bladesinger")
};

if (document.getElementById('EGtW').checked && characterClass[randClass1] == "Wizard") {  
  dndSubclass.push("School of Chronurgy", "School of Gravitrugy")
};

if (document.getElementById('TCoE').checked && characterClass[randClass1] == "Wizard") {  
  dndSubclass.push("Bladesinger", "Order of Scribes")
}

// this is to filter out duplicate subclasses
   dndSubclass.forEach((item)=>{ 
  if(!characterSubclass.includes(item)){
    characterSubclass.push(item);}})
    // this is to filter out duplicate subclasses


randSubclass1 = Math.floor(Math.random() * characterSubclass.length);  //rerolls random character subclass

document.getElementById("randomRace").innerHTML = characterRace[randRace1];
document.getElementById("randomClass").innerHTML = characterClass[randClass1];
document.getElementById("randomSubclass").innerHTML = characterSubclass[randSubclass1]};


document.getElementById("reRollStats").onclick = function statsOnly(){

  stat1roll1 = Math.floor(Math.random() * 5 + 1);
  stat1roll2 = Math.floor(Math.random() * 5 + 1);
  stat1roll3 = Math.floor(Math.random() * 5 + 1);
  stat1roll4 = Math.floor(Math.random() * 5 + 1);
  stat1Array = [stat1roll1, stat1roll2, stat1roll3, stat1roll4];
  
  stat1Array.sort()
  stat1 = stat1Array[3] + stat1Array[2] + stat1Array[1];
  
  
  stat2roll1 = Math.floor(Math.random() * 5 + 1);
  stat2roll2 = Math.floor(Math.random() * 5 + 1);
  stat2roll3 = Math.floor(Math.random() * 5 + 1);
  stat2roll4 = Math.floor(Math.random() * 5 + 1);
  stat2Array = [stat2roll1, stat2roll2, stat2roll3, stat2roll4];
  
  stat2Array.sort()
  stat2 = stat2Array[3] + stat2Array[2] + stat2Array[1];
  
  
  stat3roll1 = Math.floor(Math.random() * 5 + 1);
  stat3roll2 = Math.floor(Math.random() * 5 + 1);
  stat3roll3 = Math.floor(Math.random() * 5 + 1);
  stat3roll4 = Math.floor(Math.random() * 5 + 1);
  stat3Array = [stat3roll1, stat3roll2, stat3roll3, stat3roll4];
  
  stat3Array.sort()
  stat3 = stat3Array[3] + stat3Array[2] + stat3Array[1];
  
  
  
  stat4roll1 = Math.floor(Math.random() * 5 + 1);
  stat4roll2 = Math.floor(Math.random() * 5 + 1);
  stat4roll3 = Math.floor(Math.random() * 5 + 1);
  stat4roll4 = Math.floor(Math.random() * 5 + 1);
  stat4Array = [stat4roll1, stat4roll2, stat4roll3, stat4roll4];
  
  stat4Array.sort()
  stat4 = stat4Array[3] + stat4Array[2] + stat4Array[1];
  
  
  
  stat5roll1 = Math.floor(Math.random() * 5 + 1);
  stat5roll2 = Math.floor(Math.random() * 5 + 1);
  stat5roll3 = Math.floor(Math.random() * 5 + 1);
  stat5roll4 = Math.floor(Math.random() * 5 + 1);
  stat5Array = [stat5roll1, stat5roll2, stat5roll3, stat5roll4];
  
  stat5Array.sort()
  stat5 = stat5Array[3] + stat5Array[2] + stat5Array[1];
  
  
  stat6roll1 = Math.floor(Math.random() * 5 + 1);
  stat6roll2 = Math.floor(Math.random() * 5 + 1);
  stat6roll3 = Math.floor(Math.random() * 5 + 1);
  stat6roll4 = Math.floor(Math.random() * 5 + 1);
  stat6Array = [stat6roll1, stat6roll2, stat6roll3, stat6roll4];
  
  stat6Array.sort()
  stat6 = stat6Array[3] + stat6Array[2] + stat6Array[1];
  
  stats = [stat1, stat1, stat3, stat4, stat5, stat6]
  
  
  statArray= stats.sort(function(num1, num2){
    if (num1 < num2){
      return 1;
    } else if (num2 < num1){
      return -1;
  }
  else return 0
  });
  
  if (characterClass[randClass1] == "Artificer"){
  
  document.getElementById("hStr").innerHTML = "Strength: " + statArray[4];
  document.getElementById("hDex").innerHTML = "Dexterity: " + statArray[1];
  document.getElementById("hCon").innerHTML = "Constitution: " + statArray[2];
  document.getElementById("hInt").innerHTML = "Intelligence: " + statArray[0];
  document.getElementById("hWis").innerHTML = "Wisdom: " + statArray[5];
  document.getElementById("hCha").innerHTML = "Charisma: " + statArray[3];
  }
  
  else if (characterClass[randClass1] == "Barbarian"){
      
    document.getElementById("hStr").innerHTML = "Strength: " + statArray[0];
    document.getElementById("hDex").innerHTML = "Dexterity: " + statArray[2];
    document.getElementById("hCon").innerHTML = "Constitution: " + statArray[1];
    document.getElementById("hInt").innerHTML = "Intelligence: " + statArray[4];
    document.getElementById("hWis").innerHTML = "Wisdom: " + statArray[5];
    document.getElementById("hCha").innerHTML = "Charisma: " + statArray[3];
  }
  
  else if (characterClass[randClass1] == "Bard"){
    
    document.getElementById("hStr").innerHTML = "Strength: " + statArray[4];
    document.getElementById("hDex").innerHTML = "Dexterity: " + statArray[1];
    document.getElementById("hCon").innerHTML = "Constitution: " + statArray[2];
    document.getElementById("hInt").innerHTML = "Intelligence: " + statArray[5];
    document.getElementById("hWis").innerHTML = "Wisdom: " + statArray[3];
    document.getElementById("hCha").innerHTML = "Charisma: " + statArray[0];
  }
  else if (characterClass[randClass1] == "Cleric"){
    
    document.getElementById("hStr").innerHTML = "Strength: " + statArray[2];
    document.getElementById("hDex").innerHTML = "Dexterity: " + statArray[1];
    document.getElementById("hCon").innerHTML = "Constitution: " + statArray[3];
    document.getElementById("hInt").innerHTML = "Intelligence: " + statArray[4];
    document.getElementById("hWis").innerHTML = "Wisdom: " + statArray[0];
    document.getElementById("hCha").innerHTML = "Charisma: " + statArray[5];
  }
  else if (characterClass[randClass1] == "Druid"){
    
    document.getElementById("hStr").innerHTML = "Strength: " + statArray[4];
    document.getElementById("hDex").innerHTML = "Dexterity: " + statArray[1];
    document.getElementById("hCon").innerHTML = "Constitution: " + statArray[2];
    document.getElementById("hInt").innerHTML = "Intelligence: " + statArray[3];
    document.getElementById("hWis").innerHTML = "Wisdom: " + statArray[0];
    document.getElementById("hCha").innerHTML = "Charisma: " + statArray[5];
  }
  else if (characterClass[randClass1] == "Fighter"){
    
    document.getElementById("hStr").innerHTML = "Strength: " + statArray[0];
    document.getElementById("hDex").innerHTML = "Dexterity: " + statArray[1];
    document.getElementById("hCon").innerHTML = "Constitution: " + statArray[2];
    document.getElementById("hInt").innerHTML = "Intelligence: " + statArray[3];
    document.getElementById("hWis").innerHTML = "Wisdom: " + statArray[4];
    document.getElementById("hCha").innerHTML = "Charisma: " + statArray[5];
  }
  else if (characterClass[randClass1] == "Monk"){
    
    document.getElementById("hStr").innerHTML = "Strength: " + statArray[3];
    document.getElementById("hDex").innerHTML = "Dexterity: " + statArray[0];
    document.getElementById("hCon").innerHTML = "Constitution: " + statArray[2];
    document.getElementById("hInt").innerHTML = "Intelligence: " + statArray[4];
    document.getElementById("hWis").innerHTML = "Wisdom: " + statArray[1];
    document.getElementById("hCha").innerHTML = "Charisma: " + statArray[5];
  }
  else if (characterClass[randClass1] == "Paladin"){
    
    document.getElementById("hStr").innerHTML = "Strength: " + statArray[0];
    document.getElementById("hDex").innerHTML = "Dexterity: " + statArray[4];
    document.getElementById("hCon").innerHTML = "Constitution: " + statArray[3];
    document.getElementById("hInt").innerHTML = "Intelligence: " + statArray[5];
    document.getElementById("hWis").innerHTML = "Wisdom: " + statArray[4];
    document.getElementById("hCha").innerHTML = "Charisma: " + statArray[2];
  }
  else if (characterClass[randClass1] == "Ranger"){
  
    document.getElementById("hStr").innerHTML = "Strength: " + statArray[4];
    document.getElementById("hDex").innerHTML = "Dexterity: " + statArray[0];
    document.getElementById("hCon").innerHTML = "Constitution: " + statArray[2];
    document.getElementById("hInt").innerHTML = "Intelligence: " + statArray[5];
    document.getElementById("hWis").innerHTML = "Wisdom: " + statArray[1];
    document.getElementById("hCha").innerHTML = "Charisma: " + statArray[3];
  }
  
  else if (characterClass[randClass1] == "Rogue"){
    
    document.getElementById("hStr").innerHTML = "Strength: " + statArray[4];
    document.getElementById("hDex").innerHTML = "Dexterity: " + statArray[0];
    document.getElementById("hCon").innerHTML = "Constitution: " + statArray[3];
    document.getElementById("hInt").innerHTML = "Intelligence: " + statArray[2];
    document.getElementById("hWis").innerHTML = "Wisdom: " + statArray[5];
    document.getElementById("hCha").innerHTML = "Charisma: " + statArray[1];
  }
  else if (characterClass[randClass1] == "Sorcerer"){
    
    document.getElementById("hStr").innerHTML = "Strength: " + statArray[5];
    document.getElementById("hDex").innerHTML = "Dexterity: " + statArray[2];
    document.getElementById("hCon").innerHTML = "Constitution: " + statArray[1];
    document.getElementById("hInt").innerHTML = "Intelligence: " + statArray[4];
    document.getElementById("hWis").innerHTML = "Wisdom: " + statArray[3];
    document.getElementById("hCha").innerHTML = "Charisma: " + statArray[0];
  }
  else if (characterClass[randClass1] == "Warlock"){
    
    document.getElementById("hStr").innerHTML = "Strength: " + statArray[5];
    document.getElementById("hDex").innerHTML = "Dexterity: " + statArray[1];
    document.getElementById("hCon").innerHTML = "Constitution: " + statArray[2];
    document.getElementById("hInt").innerHTML = "Intelligence: " + statArray[3];
    document.getElementById("hWis").innerHTML = "Wisdom: " + statArray[4];
    document.getElementById("hCha").innerHTML = "Charisma: " + statArray[0];
  }
  else if (characterClass[randClass1] == "Wizard"){
    
    document.getElementById("hStr").innerHTML = "Strength: " + statArray[5];
    document.getElementById("hDex").innerHTML = "Dexterity: " + statArray[1];
    document.getElementById("hCon").innerHTML = "Constitution: " + statArray[2];
    document.getElementById("hInt").innerHTML = "Intelligence: " + statArray[0];
    document.getElementById("hWis").innerHTML = "Wisdom: " + statArray[3];
    document.getElementById("hCha").innerHTML = "Charisma: " + statArray[4];
  
  }}};