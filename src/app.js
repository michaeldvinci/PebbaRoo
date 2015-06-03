var UI = require('ui');

/// app setup
var days = [
   {
      title: "Thursday",
      subtitle: "Day 1"
   },
   {
      title: "Friday",
      subtitle: "High-Five Friday"
   },
   {
      title: "Saturday",
      subtitle: "ClusterQuack"
   },
   {
      title: "Sunday",
      subtitle: "Final Day"
   }
];

var daysMenu = new UI.Menu({
   sections: [{
      title: 'Bonnaroo 2015',
      items: days
   }]
});

daysMenu.show();

var thursday = [
   {
      title: "This Tent"
   },
   {
      title: "That Tent"
   },
   {
      title: "The Other Tent"
   },
   {
      title: "Silent Disco"
   },
   {
      title: "Xmas Barn"
   }
];

var thursdayMenu = new UI.Menu({
   sections: [{
      title: 'Thursday',
      items: thursday
   }]
});

var otherDay = [
   {
      title: "What Stage"
   },
   {
      title: "Which Stage"
   },
   {
      title: "This Tent"
   },
   {
      title: "That Tent"
   },
   {
      title: "The Other Tent"
   },
   {
      title: "Silent Disco"
   },
   {
      title: "Xmas Barn"
   }
];

var fridayMenu = new UI.Menu({
   sections: [{
      title: 'Friday',
      items: otherDay
   }]
});

var saturdayMenu = new UI.Menu({
   sections: [{
      title: 'Saturday',
      items: otherDay
   }]
});

var sundayMenu = new UI.Menu({
   sections: [{
      title: 'Sunday',
      items: otherDay
   }]
});

//Thurs Sched
var thursdayThis = [
   {
      title: "Unlocking the Truth",
      subtitle: "545-630",
      scrollable: true
   },
   {
      title: "Strand of Oaks",
      subtitle: "700-745"
   },
   {
      title: "Iceage",
      subtitle: "815-900"
   },
   {
      title: "The Growlers",
      subtitle: "930-1015"
   },
   {
      title: "Courtney Barnett",
      subtitle: "1045-1130"
   },
   {
      title: "Mac Demarco",
      subtitle: "1215-100"
   }
];

var thursdayThisMenu = new UI.Menu({
   sections: [{
      title: 'This Tent [Thurs]',
      items: thursdayThis
   }]
});

var thursdayThat = [
   {
      title: "Dej Loaf",
      subtitle: "645-730"
   },
   {
      title: "Dopapod",
      subtitle: "800-845"
   },
   {
      title: "Houndmouth",
      subtitle: "915-1000"
   },
   {
      title: "Tove Lo",
      subtitle: "1030-1130"
   },
   {
      title: "Jungle",
      subtitle: "1200-100"
   }
];

var thursdayThatMenu = new UI.Menu({
   sections: [{
      title: 'That Tent [Thurs]',
      items: thursdayThat
   }]
});

var thursdayOther = [
   {
      title: "DMA's",
      subtitle: "600-645"
   },
   {
      title: "Ryan weaver",
      subtitle: "715-800"
   },
   {
      title: "Temples",
      subtitle: "830-915"
   },
   {
      title: "Glass Animals",
      subtitle: "945-1030"
   },
   {
      title: "Benjamin Booker",
      subtitle: "1100-1145"
   },
   {
      title: "Gramatik",
      subtitle: "1215-115"
   }
];

var thursdayOtherMenu = new UI.Menu({
   sections: [{
      title: 'The Other Tent [Thurs]',
      items: thursdayOther
   }]
});

var thursdaySilent = [
   {
      title: "Quickie Mart",
      subtitle: "530-830"
   },
   {
      title: "The Unsheathed",
      subtitle: "830-1030"
   },
   {
      title: "Matoma",
      subtitle: "1030-1200"
   },
   {
      title: "Quickie Mart",
      subtitle: "1200-200"
   }   
];

var thursdaySilentMenu = new UI.Menu({
   sections: [{
      title: 'Silent Disco [Thurs]',
      items: thursdaySilent
   }]
});

var thursdayJake = [
   {
      title: "Tiki Disco",
      subtitle: "400-630"
   },
   {
      title: "New Breed Brass Band",
      subtitle: "700-800"
   },
   {
      title: "Full Service Party",
      subtitle: "815-1230"
   },
   {
      title: "SnickleFritz",
      subtitle: "100-200"
   },
   {
      title: "Tiki Disco",
      subtitle: "230-600"
   }
];

var thursdayJakeMenu = new UI.Menu({
   sections: [{
      title: 'Jake & Snake [Thurs]',
      items: thursdayJake
   }]
});

//Friday Sched
var fridayWhat = [
   {
      title: "SOJA",
      subtitle: "330-430"
   },
   {
      title: "Dawes",
      subtitle: "530-630"
   },
   {
      title: "Alabama Shakes",
      subtitle: "730-845"
   },
   {
      title: "Kendrick Lamar",
      subtitle: "945-1100"
   },
   {
      title: "Deadmau5",
      subtitle: "1200-130"
   }
];

var fridayWhatMenu = new UI.Menu({
   sections: [{
      title: 'What Stage [Fri]',
      items: fridayWhat
   }]
});

var fridayWhich = [
   {
      title: "Brown Sabbath",
      subtitle: "200-300"
   },
   {
      title: "Royal Blood",
      subtitle: "345-445"
   },
   {
      title: "Moon Taxi",
      subtitle: "530-630"
   },
   {
      title: "Atmosphere",
      subtitle: "715-815"
   },
   {
      title: "Ben Harper",
      subtitle: "915-1030"
   },
   {
      title: "Earth, Wind & Fire",
      subtitle: "1130-1245"
   }
];

var fridayWhichMenu = new UI.Menu({
   sections: [{
      title: 'Which Stage [Fri]',
      items: fridayWhich
   }]
});

var fridayThis = [
   {
      title: "Tanya Tagaq",
      subtitle: "315-415"
   },
   {
      title: "Against Me!",
      subtitle: "500-600"
   },
   {
      title: "Guster",
      subtitle: "645-745"
   },
   {
      title: "Tears for Fears",
      subtitle: "830-945"
   },
   {
      title: "Run the Jewels",
      subtitle: "1115-1215"
   },
   {
      title: "Odesza",
      subtitle: "100-215"
   }
];

var fridayThisMenu = new UI.Menu({
   sections: [{
      title: 'This Tent [Fri]',
      items: fridayThis
   }]
});

var fridayThat = [
   {
      title: "Pallbearer",
      subtitle: "200-300"
   },
   {
      title: "Between the Buried & Me",
      subtitle: "345-445"
   },
   {
      title: "Rustie",
      subtitle: "530-630"
   },
   {
      title: "Kacey Musgraves",
      subtitle: "715-830"
   },
   {
      title: "MSMW",
      subtitle: "1100-1215"
   },
   {
      title: "STS9",
      subtitle: "200-330"
   }
];

var fridayThatMenu = new UI.Menu({
   sections: [{
      title: 'That Tent [Fri]',
      items: fridayThat
   }]
});

var fridayOther = [
   {
      title: "The Districts",
      subtitle: "115-215"
   },
   {
      title: "King Gizzard and the Lizard Wizard",
      subtitle: "300-400"
   },
   {
      title: "Unknown Mortal Orchestra",
      subtitle: "445-545"
   },
   {
      title: "Sylvan Esso",
      subtitle: "630-730"
   },
   {
      title: "Ben Folds & yMusic",
      subtitle: "815-930"
   },
   {
      title: "Flying Lotus",
      subtitle: "1215-145"
   }
];

var fridayOtherMenu = new UI.Menu({
   sections: [{
      title: 'The Other Tent [Fri]',
      items: fridayOther
   }]
});

var fridaySilent = [
   {
      title: "Motion Potion",
      subtitle: "430-630"
   },
   {
      title: "Attom",
      subtitle: "630-830"
   },
   {
      title: "The Unsheathed",
      subtitle: "830-1030"
   },
   {
      title: "Motion Potion",
      subtitle: "1030-1230"
   },
   {
      title: "Matoma",
      subtitle: "1230-200"
   },
   {
      title: "DJ Prince Hakim",
      subtitle: "200-400"
   }
];

var fridaySilentMenu = new UI.Menu({
   sections: [{
      title: 'Silent Disco [Fri]',
      items: fridaySilent
   }]
});

var fridayJake = [
   {
      title: "Full Service Party",
      subtitle: "200-445"
   },
   {
      title: "New Breed Brass Band",
      subtitle: "500-600"
   },
   {
      title: "Full Service Party",
      subtitle: "615-900"
   },
   {
      title: "Full Service Party",
      subtitle: "1100-100"
   },
   {
      title: "Jon Cleary",
      subtitle: "130-230"
   },
   {
      title: "Tiki Disco",
      subtitle: "300-400"
   },
   {
      title: "Tropical Party",
      subtitle: "400-500"
   },
   {
      title: "Tiki Disco",
      subtitle: "500-600"
   }
];

var fridayJakeMenu = new UI.Menu({
   sections: [{
      title: 'Xmas Barn [Fri]',
      items: fridayJake
   }]
});

//Sat Sched
var saturdayWhat = [
   {
      title: "Trampled by Turtles",
      subtitle: "330-445"
   },
   {
      title: "Hozier",
      subtitle: "545-700"
   },
   {
      title: "My Morning Jacket",
      subtitle: "800-1000"
   },
   {
      title: "Mumford & Sons",
      subtitle: "1100-100"
   }
];

var saturdayWhatMenu = new UI.Menu({
   sections: [{
      title: 'What Stage [Fri]',
      items: saturdayWhat
   }]
});

var saturdayWhich = [
   {
      title: "Songhoy Blues",
      subtitle: "215-315"
   },
   {
      title: "Rhiannon Giddens",
      subtitle: "400-500"
   },
   {
      title: "The War on Drugs",
      subtitle: "545-645"
   },
   {
      title: "Gary Clark Jr.",
      subtitle: "730-830"
   },
   {
      title: "Childish Gambino",
      subtitle: "915-1030"
   },
   {
      title: "Bassnectar",
      subtitle: "100-215"
   }
];

var saturdayWhichMenu = new UI.Menu({
   sections: [{
      title: 'Which Stage [Fri]',
      items: saturdayWhich
   }]
});

var saturdayThis = [
   {
      title: "Priory",
      subtitle: "1230-130"
   },
   {
      title: "Catfish & the Bottlemen",
      subtitle: "200-300"
   },
   {
      title: "Woods",
      subtitle: "345-445"
   },
   {
      title: "Bleachers",
      subtitle: "515-630"
   },
   {
      title: "Belle & Sebastian",
      subtitle: "700-815"
   },
   {
      title: "Slayer",
      subtitle: "1200-115"
   },
   {
      title: "D'Angelo",
      subtitle: "200-330"
   }
];

var saturdayThisMenu = new UI.Menu({
   sections: [{
      title: 'This Tent [Fri]',
      items: saturdayThis
   }]
});

var saturdayThat = [
   {
      title: "Jon Cleary",
      subtitle: ""
   },
   {
      title: "Gregory Alan Isakov",
      subtitle: "230-330"
   },
   {
      title: "Bahamas",
      subtitle: "415-530"
   },
   {
      title: "Sturgill Simpson",
      subtitle: "615-730"
   },
   {
      title: "Atomic Bomb!",
      subtitle: "815-930"
   },
   {
      title: "Tycho",
      subtitle: "1200-115"
   },
   {
      title: "Flume",
      subtitle: "200-315"
   }
];

var saturdayThatMenu = new UI.Menu({
   sections: [{
      title: 'That Tent [Fri]',
      items: saturdayThat
   }]
});

var saturdayOther = [
   {
      title: "So Percussion",
      subtitle: "1245-145"
   },
   {
      title: "Phox",
      subtitle: "230-330"
   },
   {
      title: "SZA",
      subtitle: "415-515"
   },
   {
      title: "Jamie XX",
      subtitle: "600-730"
   },
   {
      title: "SBTRKT",
      subtitle: "800-930"
   },
   {
      title: "Superjam",
      subtitle: "130-300"
   }
];

var saturdayOtherMenu = new UI.Menu({
   sections: [{
      title: 'The Other Tent [Fri]',
      items: saturdayOther
   }]
});

var saturdaySilent = [,
   {
      title: "E.Feld",
      subtitle: "330-500"
   },
   {
      title: "SnickleFritz",
      subtitle: "500-700"
   },
   {
      title: "Tiki Disco",
      subtitle: "700-1000"
   },
   {
      title: "DJ Logic",
      subtitle: "100-1200"
   },
   {
      title: "Different Sleep",
      subtitle: "1200-1245"
   },
   {
      title: "Nuri",
      subtitle: "1245-130"
   },
   {
      title: "Childish Major",
      subtitle: "130-215"
   },
   {
      title: "El Dusty",
      subtitle: "215-300"
   },
   {
      title: "Mike Gao",
      subtitle: "300-400"
   }
];

var saturdaySilentMenu = new UI.Menu({
   sections: [{
      title: 'Silent Disco [Fri]',
      items: saturdaySilent
   }]
});

var saturdayJake = [
   {
      title: "Full Service Party",
      subtitle: "200-500"
   },
   {
      title: "Nola Bounce Party",
      subtitle: "500-600"
   },
   {
      title: "Full Service Party",
      subtitle: "600-900"
   },
   {
      title: "Full Service Party",
      subtitle: "1100-100"
   },
   {
      title: "Vogue Dance Off",
      subtitle: "100-200"
   },
   {
      title: "Robe Rage",
      subtitle: "300-400"
   },
   {
      title: "90's Rave",
      subtitle: "400-600"
   }
];

var saturdayJakeMenu = new UI.Menu({
   sections: [{
      title: 'Xmas Barn [Fri]',
      items: saturdayJake
   }]
});

//Sun Sched
var sundayWhat = [
   {
      title: "Twenty One Pilots",
      subtitle: "230-345"
   },
   {
      title: "Spoon",
      subtitle: "445-600"
   },
   {
      title: "Florence + the Machine",
      subtitle: "700-800"
   },
   {
      title: "Billy Joel",
      subtitle: "900-1130"
   }
];

var sundayWhatMenu = new UI.Menu({
   sections: [{
      title: 'What Stage [Fri]',
      items: sundayWhat
   }]
});

var sundayWhich = [
   {
      title: "Pokey Laforge",
      subtitle: "1215-115"
   },
   {
      title: "Madisen Ward",
      subtitle: "200-300"
   },
   {
      title: "Awolnation",
      subtitle: "345-500"
   },
   {
      title: "Brandi Carlile",
      subtitle: "545-700"
   },
   {
      title: "Robert Plant",
      subtitle: "745-900"
   }
];

var sundayWhichMenu = new UI.Menu({
   sections: [{
      title: 'Which Stage [Fri]',
      items: sundayWhich
   }]
});

var sundayThis = [
   {
      title: "Christopher Denny",
      subtitle: "1245-200"
   },
   {
      title: "His Golden Messenger",
      subtitle: "230-345"
   },
   {
      title: "The Very Best",
      subtitle: "415-515"
   },
   {
      title: "Rudimental",
      subtitle: "600-715"
   },
   {
      title: "G-Eazy",
      subtitle: "800-900"
   }
];

var sundayThisMenu = new UI.Menu({
   sections: [{
      title: 'This Tent [Fri]',
      items: sundayThis
   }]
});

var sundayThat = [,
   {
      title: "Shakey Graves",
      subtitle: "1230-115"
   },
   {
      title: "Hurray for Riff Raff",
      subtitle: "145-230"
   },
   {
      title: "Bela Fleck",
      subtitle: "300-400"
   },
   {
      title: "Jerry Douglas",
      subtitle: "445-545"
   },
   {
      title: "Punch Brothers",
      subtitle: "630-730"
   },
   {
      title: "Bluegrass Superjam",
      subtitle: "800-900"
   }
];

var sundayThatMenu = new UI.Menu({
   sections: [{
      title: 'That Tent [Fri]',
      items: sundayThat
   }]
});

var sundayOther = [
   {
      title: "Jessica Hernandez",
      subtitle: "115-215"
   },
   {
      title: "Shabazz Palaces",
      subtitle: "245-345"
   },
   {
      title: "MO",
      subtitle: "415-515"
   },
   {
      title: "Freddie Gibbs & Madlib",
      subtitle: "545-645"
   },
   {
      title: "Caribou",
      subtitle: "730-845"
   }
];

var sundayOtherMenu = new UI.Menu({
   sections: [{
      title: 'The Other Tent [Fri]',
      items: sundayOther
   }]
});

var sundaySilent = [
   {
      title: "DJ Logic",
      subtitle: "500-800"
   }
];

var sundaySilentMenu = new UI.Menu({
   sections: [{
      title: 'Silent Disco [Fri]',
      items: sundaySilent
   }]
});

var sundayJake = [
   {
      title: "Full Service Party",
      subtitle: "400-500"
   },
   {
      title: "Hip Hop Party",
      subtitle: "500-600"
   },
   {
      title: "Reggae Party",
      subtitle: "600-700"
   },
   {
      title: "Full Service Party",
      subtitle: "700-900"
   }
];

var sundayJakeMenu = new UI.Menu({
   sections: [{
      title: 'Xmas Barn [Fri]',
      items: sundayJake
   }]
});

daysMenu.on('select', function(e) {
   if (e.itemIndex == 0) {
      thursdayMenu.show(); 
   }
   if (e.itemIndex == 1) {
      fridayMenu.show(); 
   }
   if (e.itemIndex == 2) {
      saturdayMenu.show(); 
   }
   if (e.itemIndex == 3) {
      sundayMenu.show(); 
   }
});

thursdayMenu.on('select', function(f) {
   if (f.itemIndex == 0) {
      thursdayThisMenu.show();
   }
   if (f.itemIndex == 1) {
      thursdayThatMenu.show();
   }
   if (f.itemIndex == 2) {
      thursdayOtherMenu.show();
   }
   if (f.itemIndex == 3) {
      thursdaySilentMenu.show();
   }
   if (f.itemIndex == 4) {
      thursdayJakeMenu.show();
   }
});

fridayMenu.on('select', function(g) {
   if (g.itemIndex == 0) {
      fridayWhatMenu.show();
   }
   if (g.itemIndex == 1) {
      fridayWhichMenu.show();
   }
   if (g.itemIndex == 2) {
      fridayThisMenu.show();
   }
   if (g.itemIndex == 3) {
      fridayThatMenu.show();
   }
   if (g.itemIndex == 4) {
      fridayOtherMenu.show();
   }
   if (g.itemIndex == 5) {
      fridaySilentMenu.show();
   }
   if (g.itemIndex == 6) {
      fridayJakeMenu.show();
   }
});

saturdayMenu.on('select', function(g) {
   if (g.itemIndex == 0) {
      saturdayWhatMenu.show();
   }
   if (g.itemIndex == 1) {
      saturdayWhichMenu.show();
   }
   if (g.itemIndex == 2) {
      saturdayThisMenu.show();
   }
   if (g.itemIndex == 3) {
      saturdayThatMenu.show();
   }
   if (g.itemIndex == 4) {
      saturdayOtherMenu.show();
   }
   if (g.itemIndex == 5) {
      saturdaySilentMenu.show();
   }
   if (g.itemIndex == 6) {
      saturdayJakeMenu.show();
   }
});

sundayMenu.on('select', function(g) {
   if (g.itemIndex == 0) {
      sundayWhatMenu.show();
   }
   if (g.itemIndex == 1) {
      sundayWhichMenu.show();
   }
   if (g.itemIndex == 2) {
      sundayThisMenu.show();
   }
   if (g.itemIndex == 3) {
      sundayThatMenu.show();
   }
   if (g.itemIndex == 4) {
      sundayOtherMenu.show();
   }
   if (g.itemIndex == 5) {
      sundaySilentMenu.show();
   }
   if (g.itemIndex == 6) {
      sundayJakeMenu.show();
   }
});

///config setup
var mConfig = {};

Pebble.addEventListener("ready", function(e) {
  loadLocalData();
  returnConfigToPebble();
});

Pebble.addEventListener("showConfiguration", function(e) {
	Pebble.openURL(mConfig.configureUrl);
});

Pebble.addEventListener("webviewclosed",
  function(e) {
    if (e.response) {
      var config = JSON.parse(e.response);
      saveLocalData(config);
      returnConfigToPebble();
    }
  }
);

function saveLocalData(config) {

  //console.log("loadLocalData() " + JSON.stringify(config));

  localStorage.setItem("invert", parseInt(config.invert)); 
  localStorage.setItem("bluetoothvibe", parseInt(config.bluetoothvibe)); 
  localStorage.setItem("hourlyvibe", parseInt(config.hourlyvibe)); 
  
  loadLocalData();

}
function loadLocalData() {
  
	mConfig.invert = parseInt(localStorage.getItem("invert"));
	mConfig.bluetoothvibe = parseInt(localStorage.getItem("bluetoothvibe"));
	mConfig.hourlyvibe = parseInt(localStorage.getItem("hourlyvibe"));
	mConfig.configureUrl = "http://michaeldvinci.com/pebbaroo/pebbaroo-config.html";

	if(isNaN(mConfig.invert)) {
		mConfig.invert = 0;
	}
	if(isNaN(mConfig.bluetoothvibe)) {
		mConfig.bluetoothvibe = 0;
	}
	if(isNaN(mConfig.hourlyvibe)) {
		mConfig.hourlyvibe = 0;
	}   

  //console.log("loadLocalData() " + JSON.stringify(mConfig));
}
function returnConfigToPebble() {
  //console.log("Configuration window returned: " + JSON.stringify(mConfig));
  Pebble.sendAppMessage({
    "invert":parseInt(mConfig.invert), 
    "bluetoothvibe":parseInt(mConfig.bluetoothvibe), 
    "hourlyvibe":parseInt(mConfig.hourlyvibe)
  });    
}