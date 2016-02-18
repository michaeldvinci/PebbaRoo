var UI = require('ui');

//-- app setup --//


var newMenu = [
   {
      title: "2015",
      subtitle: "Schedule"
   },
   {
      title: "2016",
      subtitle: "Lineup"
   }
];

var days = [
   {
      title: "Thursday",
      subtitle: "Words"
   },
   {
      title: "Friday",
      subtitle: "Words"
   },
   {
      title: "Saturday",
      subtitle: "Words"
   },
   {
      title: "Sunday",
      subtitle: "Words"
   }
];

var choices = [
   {
      title: "By Time"
   },
   {
      title: "By Location"
   }
];

var thurs = [
   {
      title: "Location 1"
   },
   {
      title: "Location 2"
   },
   {
      title: "Location 3"
   },
   {
      title: "Location 4"
   },
   {
      title: "Location 5"
   }
];

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

var thursThis = [
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

var thursThat = [
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

var thursOther = [
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

var thursSilent = [
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

var thursJake = [
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

var friWhat = [
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

var friWhich = [
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

var friThis = [
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

var friThat = [
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

var friOther = [
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

var friSilent = [
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

var friJake = [
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

var satWhat = [
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

var satWhich = [
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

var satThis = [
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

var satThat = [
   {
      title: "Jon Cleary",
      subtitle: "1230-145"
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

var satOther = [
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

var satSilent = [,
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

var satJake = [
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

var sunWhat = [
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

var sunWhich = [
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

var sunThis = [
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

var sunThat = [,
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

var sunOther = [
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

var sunSilent = [
   {
      title: "DJ Logic",
      subtitle: "500-800"
   }
];

var sunJake = [
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


//-- menu creation --//
var newMenuMenu = new UI.Menu({
   sections: [{
      title: 'which?',
      items: newMenu
   }]
});


var daysMenu = new UI.Menu({
   sections: [{
      title: 'conedMiros App',
      items: days
   }]
});

var thursChoices = new UI.Menu({
   sections: [{
      title: 'Order By:',
      items: choices
   }]
});

var friChoices = new UI.Menu({
   sections: [{
      title: 'Order By:',
      items: choices
   }]
});

var satChoices = new UI.Menu({
   sections: [{
      title: 'Order By:',
      items: choices
   }]
});

var sunChoices = new UI.Menu({
   sections: [{
      title: 'Order By:',
      items: choices
   }]
});

var thursStageMenu = new UI.Menu({
   sections: [{
      title: 'Thursday',
      items: thurs
   }]
});

var friStageMenu = new UI.Menu({
   sections: [{
      title: 'Friday',
      items: otherDay
   }]
});

var satStageMenu = new UI.Menu({
   sections: [{
      title: 'Saurday',
      items: otherDay
   }]
});

var sunStageMenu = new UI.Menu({
   sections: [{
      title: 'Sunday',
      items: otherDay
   }]
});

var thursJakeMenu = new UI.Menu({
   sections: [{
      title: 'Jake & Snake [Thurs]',
      items: thursJake
   }]
});

var thursSilentMenu = new UI.Menu({
   sections: [{
      title: 'Silent Disco [Thurs]',
      items: thursSilent
   }]
});

var thursOtherMenu = new UI.Menu({
   sections: [{
      title: 'The Other Tent [Thurs]',
      items: thursOther
   }]
});

var thursThatMenu = new UI.Menu({
   sections: [{
      title: 'That Tent [Thurs]',
      items: thursThat
   }]
});

var thursThisMenu = new UI.Menu({
   sections: [{
      title: 'This Tent [Thurs]',
      items: thursThis
   }]
});

var friJakeMenu = new UI.Menu({
   sections: [{
      title: 'Xmas Barn [Fri]',
      items: friJake
   }]
});

var friSilentMenu = new UI.Menu({
   sections: [{
      title: 'Silent Disco [Fri]',
      items: friSilent
   }]
});

var friOtherMenu = new UI.Menu({
   sections: [{
      title: 'The Other Tent [Fri]',
      items: friOther
   }]
});

var friThatMenu = new UI.Menu({
   sections: [{
      title: 'That Tent [Fri]',
      items: friThat
   }]
});

var friThisMenu = new UI.Menu({
   sections: [{
      title: 'This Tent [Fri]',
      items: friThis
   }]
});

var friWhichMenu = new UI.Menu({
   sections: [{
      title: 'Which Stage [Fri]',
      items: friWhich
   }]
});

var friWhatMenu = new UI.Menu({
   sections: [{
      title: 'What Stage [Fri]',
      items: friWhat
   }]
});

var satJakeMenu = new UI.Menu({
   sections: [{
      title: 'Xmas Barn [Sat]',
      items: satJake
   }]
});

var satSilentMenu = new UI.Menu({
   sections: [{
      title: 'Silent Disco [Sat]',
      items: satSilent
   }]
});

var satOtherMenu = new UI.Menu({
   sections: [{
      title: 'The Other Tent [Sat]',
      items: satOther
   }]
});

var satThatMenu = new UI.Menu({
   sections: [{
      title: 'That Tent [Sat]',
      items: satThat
   }]
});

var satThisMenu = new UI.Menu({
   sections: [{
      title: 'This Tent [Sat]',
      items: satThis
   }]
});

var satWhichMenu = new UI.Menu({
   sections: [{
      title: 'Which Stage [Sat]',
      items: satWhich
   }]
});

var satWhatMenu = new UI.Menu({
   sections: [{
      title: 'What Stage [Sat]',
      items: satWhat
   }]
});

var sunWhatMenu = new UI.Menu({
   sections: [{
      title: 'What Stage [Sun]',
      items: sunWhat
   }]
});

var sunWhichMenu = new UI.Menu({
   sections: [{
      title: 'Which Stage [Sun]',
      items: sunWhich
   }]
});

var sunThisMenu = new UI.Menu({
   sections: [{
      title: 'This Tent [Sun]',
      items: sunThis
   }]
});

var sunThatMenu = new UI.Menu({
   sections: [{
      title: 'That Tent [Sun]',
      items: sunThat
   }]
});

var sunOtherMenu = new UI.Menu({
   sections: [{
      title: 'The Other Tent [Sun]',
      items: sunOther
   }]
});

var sunSilentMenu = new UI.Menu({
   sections: [{
      title: 'Silent Disco [Sun]',
      items: sunSilent
   }]
});

var sunJakeMenu = new UI.Menu({
   sections: [{
      title: 'Xmas Barn [Sun]',
      items: sunJake
   }]
});

var thursTimeMenu = new UI.Menu({
   sections: [{
      title: '4:00',
      items: [{
            title: 'Tiki Disco',
         subtitle: '400-630 : XMas Barn'
      }]
   },{
      title: '5:00',
      items: [{
            title: 'Quickie Mart',
         subtitle: '530-830 : Silent Disco'
      }, {
            title: 'Unlocking the Truth',
         subtitle: '545-630 : This Tent'
      }]
   },{
      title: '6:00',
      items: [{
            title: "DMA's",
         subtitle: '600-645 : Other Tent'
      }, {
            title: "Dej Loaf",
         subtitle: "645-730: That Tent"
      }]
   },{
      title: '7:00',
      items: [{
            title: "Strand of Oaks",
         subtitle: "700-745 : This Tent"
      }, {
            title: "New Breed Brass Band",
         subtitle: "700-800: XMas Barn"
      }, {
            title: "Ryan Weaver",
         subtitle: "715-800: Other Tent"
      }]
   },{
      title: '8:00',
      items: [{
            title: "Dopapod",
         subtitle: "800-845: That Tent"
      }, {
            title: "Full Service Party",
         subtitle: "815-1230: XMas Barn"
      }, {
            title: "Iceage",
         subtitle: "815-900: This Tent"
      }, {
            title: "Full Service Party",
         subtitle: "815-1230: XMas Barn"
      }, {
            title: "Temples",
         subtitle: "830-915: Other Tent"
      }, {
            title: "The Unsheathed",
         subtitle: "830-1030: Silent Disco"
      }]
   },{
      title: '9:00',
      items: [{
            title: "Houndmouth",
         subtitle: "915-1000: That Tent"
      }, {
            title: "The Growlers",
         subtitle: "930-1015: This Tent"
      }, {
            title: "Glass Animals",
         subtitle: "945-1030: Other Tent"
      }]
   },{
      title: '10:00',
      items: [{
            title: "Tove Lo",
         subtitle: "1030-1130: That Tent"
      }, {
            title: "Matoma",
         subtitle: "1030-1200: Silent Disco"
      }, {
            title: "Courtney Barnett",
         subtitle: "1045-1130: This Tent"
      }]
   },{
      title: '11:00',
      items: [{
            title: "Benjamin Booker",
         subtitle: "1100-1145: Other Tent"
      }]
   },{
      title: '12:00',
      items: [{
            title: "Jungle",
         subtitle: "1200-100: That Tent"
      }, {
            title: "Quickie Mart",
         subtitle: "1200-200: Silent Disco"
      }, {
            title: "Mac Demarco",
         subtitle: "1215-100: This Tent"
      }, {
            title: "Gramatik",
         subtitle: "1215-115: Other Tent"
      }]
   },{
      title: '1:00',
      items: [{
            title: "SnickleFritz",
         subtitle: "100-200: XMas Barn"
      }]
   },{
      title: '2:00',
      items: [{
            title: "Tiki Disco",
         subtitle: "230-600: XMas Barn"
      }]
   }]
});

var friTimeMenu = new UI.Menu({
   sections: [{
      title: '1:00',
      items: [{
            title: "The Districts",
         subtitle: "115-215: Other Tent"
      }]
   },{
      title: '2:00',
      items: [{
            title: "Brown Sabbath",
         subtitle: "200-300: Which Stage"
      }, {
            title: "Pallbearer",
         subtitle: "200-300: That Tent"
      }, {
            title: "Full Service Party",
         subtitle: "200-445: XMas Barn"
      }]
   },{
      title: '3:00',
      items: [{
            title: "King Gizzard and the Lizard Wizard",
         subtitle: "300-400: Other Tent"
      }, {
            title: "Tanya Tagaq",
         subtitle: "315-415: This Tent"
      }, {
            title: "SOJA",
         subtitle: "330-430: What Stage"
      }, {
            title: "Royal Blood",
         subtitle: "345-445: Which Stage"
      }, {
            title: "Between the Buried & Me",
         subtitle: "345-445: That Tent"
      }]
   },{
      title: '4:00',
      items: [{
            title: "Motion Potion",
         subtitle: "430-630: Silent Disco"
      }, {
            title: "Unknown Mortal Orchestra",
         subtitle: "445-545: Other Tent"
      }]
   },{
      title: '5:00',
      items: [{
            title: "Against Me!",
         subtitle: "500-600: This Tent"
      }, {
            title: "New Breed Brass Band",
         subtitle: "500-600: XMas Barn"
      }, {
            title: "Dawes",
         subtitle: "530-630: What Stage"
      }, {
            title: "Moon Taxi",
         subtitle: "530-630: Which Stage"
      }, {
            title: "Rustie",
         subtitle: "530-630: That Tent"
      }]
   },{
      title: '6:00',
      items: [{
            title: "Full Service Party",
         subtitle: "615-900: XMas Barn"
      }, {
            title: "Sylvan Esso",
         subtitle: "630-730: Other Tent"
      }, {
            title: "Attom",
         subtitle: "630-830: Silent Disco"
      }, {
            title: "Guster",
         subtitle: "645-745: This Tent"
      }]
   },{
      title: '7:00',
      items: [{
            title: "Kacey Musgraves",
         subtitle: "715-830: That Tent"
      }, {
            title: "Atmosphere",
         subtitle: "715-815: Which Stage"
      }, {
            title: "Alabama Shakes",
         subtitle: "730-845: What Stage"
      }]
   },{
      title: '8:00',
      items: [{
            title: "Ben Folds & yMusic",
         subtitle: "815-930: Other Tent"
      }, {
            title: "Tears for Fears",
         subtitle: "830-945: This Tent"
      }]
   },{
      title: '9:00',
      items: [{
            title: "Ben Harper",
         subtitle: "915-1030: Which Stage"
      }, {
            title: "Kendrick Lamar",
         subtitle: "945-1100: What Stage"
      }]
   },{
      title: '10:00',
      items: [{
            title: "Motion Potion",
         subtitle: "1030-1230: Silent Disco"
      }]
   },{
      title: '11:00',
      items: [{
            title: "MSMW",
         subtitle: "1100-1215: That Tent"
      }, {
            title: "Full Service Party",
         subtitle: "1100-100: XMas Barn"
      }, {
            title: "Run the Jewels",
         subtitle: "1115-1215: This Tent"
      }, {
            title: "Earth, Wind & Fire",
         subtitle: "1130-1245: Which Stage"
      }]
   },{
      title: '12:00',
      items: [{
            title: "Deadmau5",
         subtitle: "1200-130: What Stage"
      }, {
            title: "Flying Lotus",
         subtitle: "1215-145: Other Tent"
      }, {
            title: "Matoma",
         subtitle: "1230-200: Silent Disco"
      }]
   },{
      title: '1:00',
      items: [{
            title: "Odesza",
         subtitle: "100-215: This Tent"
      }, {
            title: "Jon Cleary",
         subtitle: "130-230: XMas Barn"
      }]
   },{
      title: '2:00',
      items: [{
            title: "STS9",
         subtitle: "200-330: That Tent"
      }, {
            title: "DJ Prince Hakim",
         subtitle: "200-400: Silent Disco"
      }]
   },{
      title: '3:00',
      items: [{
            title: "Tiki Disco",
         subtitle: "300-400: XMas Barn"
      }]
   },{
      title: '4:00',
      items: [{
            title: "Tropical Party",
         subtitle: "400-500: XMas Barn"
      }]
   },{
      title: '5:00',
      items: [{
            title: "Tiki Disco",
         subtitle: "500-600: XMas Barn"
      }]
   }]
});

var satTimeMenu = new UI.Menu({
   sections: [{
      title: '12:00',
      items: [{
            title: "Priory",
         subtitle: "1230-130: This Tent"
   }, {
            title: "Jon Cleary",
         subtitle: "1230-145: That Tent"
   }, {
            title: "So Percussion",
         subtitle: "1245-145: Other Tent"
      }]
   },{
      title: '1:00',
      items: [{
      }]
   },{
      title: '2:00',
      items: [{
            title: "Catfish & the Bottlemen",
         subtitle: "200-300: This Tent"
      }, {
            title: "Full Service Party",
         subtitle: "200-500: XMas Barn"
      }, {
            title: "Songhoy Blues",
         subtitle: "215-315: Which Stage"
      }, {  
            title: "Gregory Alan Isakov",
         subtitle: "230-330: That Tent"
      }, {
            title: "Phox",
         subtitle: "230-330: Other Tent"
      }]
   },{
      title: '3:00',
      items: [{
            title: "Trampled by Turtles",
         subtitle: "330-445: What Stage"
      }, {
            title: "E.Feld",
         subtitle: "330-500: Silent Disco"
      }, {
            title: "Woods",
         subtitle: "345-445: This Tent"
      }]
   },{
      title: '4:00',
      items: [{
            title: "Rhiannon Giddens",
         subtitle: "400-500: Which Stage"
      }, {
            title: "Bahamas",
         subtitle: "415-530: That Tent"
      }, {
            title: "SZA",
         subtitle: "415-515: Other Tent"
      }]
   },{
      title: '5:00',
      items: [{
            title: "SnickleFritz",
         subtitle: "500-700: Silent Disco"
      }, {
            title: "Nola Bounce Party",
         subtitle: "500-600: XMas Barn"
      }, {
            title: "Bleachers",
         subtitle: "515-630: This Tent"
      }, {
            title: "Hozier",
         subtitle: "545-700: What Stage"
      }, {
            title: "The War on Drugs",
         subtitle: "545-645: Which Stage"
      }]
   },{
      title: '6:00',
      items: [{
            title: "Full Service Party",
         subtitle: "600-900: XMas Barn"
      }, {
            title: "Jamie XX",
         subtitle: "600-730: Other Tent"
      }, {
            title: "Sturgill Simpson",
         subtitle: "615-730: That Tent"
      }]
   },{
      title: '7:00',
      items: [{
            title: "Belle & Sebastian",
         subtitle: "700-815: This Tent"
      }, {
            title: "Tiki Disco: Silent Disco",
         subtitle: "700-1000: Silent Disco"
      }, {
            title: "Gary Clark Jr.",
         subtitle: "730-830: Which Stage"
      }]
   },{
      title: '8:00',
      items: [{
            title: "My Morning Jacket",
         subtitle: "800-1000: What Stage"
      }, {
            title: "SBTRKT",
         subtitle: "800-930: Other Tent"
      }, {
            title: "Atomic Bomb!",
         subtitle: "815-930: That Tent"
      }]
   },{
      title: '9:00',
      items: [{
            title: "Childish Gambino",
         subtitle: "915-1030: Which Stage"
      }]
   },{
      title: '10:00',
      items: [{
            title: "Mumford & Sons",
         subtitle: "1100-100: What Stage"
      }]
   },{
      title: '11:00',
      items: [{
            title: "DJ Logic",
         subtitle: "1100-1200: Silent Disco"
      }, {
            title: "Full Service Party",
         subtitle: "1100-100: XMas Barn"
      }]
   },{
      title: '12:00',
      items: [{
            title: "Slayer",
         subtitle: "1200-115: This Tent"
      }, {
            title: "Tycho",
         subtitle: "1200-115: That Tent"
      }, {
            title: "Different Sleep",
         subtitle: "1200-1245: Silent Disco"
      }, {
            title: "Nuri",
         subtitle: "1245-130: Silent Disco"
      }]
   },{
      title: '1:00',
      items: [{
            title: "Bassnectar",
         subtitle: "100-215: Which Stage"
      }, {
            title: "Vogue Dance Off",
         subtitle: "100-200: XMas Barn"
      }, {
            title: "Superjam",
         subtitle: "130-300: Other Tent"
      }, {
            title: "Childish Major",
         subtitle: "130-215: Silent Disco"
      }]
   },{
      title: '2:00',
      items: [{
            title: "D'Angelo",
         subtitle: "200-330: This Tent"
      }, {
            title: "Flume",
         subtitle: "200-315: That Tent"
      }, {
            title: "El Dusty",
         subtitle: "215-300: Silent Disco"
      }]
   },{
      title: '3:00',
      items: [{
            title: "Mike Gao",
         subtitle: "300-400: Silent Disco"
      }, {
            title: "Robe Rage",
         subtitle: "300-400: XMas Barn"
      }]
   },{
      title: '4:00',
      items: [{
            title: "90's Rave",
         subtitle: "400-600: XMas Barn"
      }]
   }]
});

var sunTimeMenu = new UI.Menu({
   sections: [{
      title: '12:00',
      items: [{
            title: "Pokey Laforge",
         subtitle: "1215-115: Which Stage"
      }, {
            title: "Shakey Graves",
         subtitle: "1230-115: That Tent"
      }, {
            title: "Christopher Denny",
         subtitle: "1245-200: This Tent"
      }]
   },{
      title: '1:00',
      items: [{
            title: "Jessica Hernandez",
         subtitle: "115-215: Other Tent"
      }, {
            title: "Hurray for Riff Raff",
         subtitle: "145-230: That Tent"
      }]
   },{
      title: '2:00',
      items: [{
            title: "Madisen Ward",
         subtitle: "200-300: Which Stage"
      }, {
            title: "Twenty One Pilots",
         subtitle: "230-345: What Stage"
      }, {
            title: "His Golden Messenger",
         subtitle: "230-345: This Tent"
      }, {
            title: "Shabazz Palaces",
         subtitle: "245-345: Other Tent"
      }]
   },{
      title: '3:00',
      items: [{
            title: "Bela Fleck",
         subtitle: "300-400: That Tent"
      }, {
            title: "Awolnation",
         subtitle: "345-500: Which Stage"
      }]
   },{
      title: '4:00',
      items: [{
            title: "Full Service Party",
         subtitle: "400-500: XMas Barn"
      }, {
            title: "MO",
         subtitle: "415-515: Other Tent"
      }, {
            title: "The Very Best",
         subtitle: "415-515: This Tent"
      }, {
            title: "Spoon",
         subtitle: "445-600: What Stage"
      }, {
            title: "Jerry Douglas",
         subtitle: "445-545: That Tent"
      }]
   },{
      title: '5:00',
      items: [{
            title: "DJ Logic",
         subtitle: "500-800: Silent Disco"
      }, {
            title: "Hip Hop Party",
         subtitle: "500-600: XMas Barn"
      }, {
            title: "Brandi Carlile",
         subtitle: "545-700: Which Stage"
      }, {
            title: "Freddie Gibbs & Madlib",
         subtitle: "545-645: Other Tent"
      }]
   },{
      title: '6:00',
      items: [{
            title: "Rudimental",
         subtitle: "600-715: This Tent"
      }, {
            title: "Reggae Party",
         subtitle: "600-700: XMas Barn"
      }, {
            title: "Punch Brothers",
         subtitle: "630-730: That Tent"
      }]
   },{
      title: '7:00',
      items: [{
            title: "Full Service Party",
         subtitle: "700-900: XMas Barn"
      }, {
            title: "Florence + the Machine",
         subtitle: "700-800: What Stage"
      }, {
         title: "Caribou",
         subtitle: "730-845: Other Tent"
      }, {
            title: "Robert Plant",
         subtitle: "745-900: Which Stage"
      }]
   },{
      title: '8:00',
      items: [{
            title: "G-Eazy",
         subtitle: "800-900: This Tent"
      }, {
            title: "Bluegrass Superjam",
         subtitle: "800-900: That Tent"
      }]
   },{
      title: '9:00',
      items: [{
            title: "Billy Joel",
         subtitle: "900-1130: What Stage"
      }]
   }]
});

var newLineup = new UI.Menu({
   sections: [{
      title: '2016 Lineup',
      items: [{
            title: "Pearl Jam",
      }, {
            title: "Dead & Co.",
      }, {
            title: "LCD Soundsystem",
      }, {
            title: "J. Cole",
      }, {
            title: "Ellie Goulding",
      }, {
            title: "Macklemore",
      }, {
            title: "Tame Impala",
      }, {
            title: "Death Cab for Cutie",
      }, {
            title: "M83",
      }, {
            title: "HAIM",
      }, {
            title: "Halsey",
      }, {
            title: "Ween",
      }, {
            title: "Jason Isbell",
      }, {
            title: "CHVRCHES",
      }, {
            title: "Miguel",
      }, {
            title: "Chris Stapleson",
      }, {
            title: "Judd Apatow & Friends",
      }, {
            title: "The Chainsmokers",
      }, {
            title: "Superjam",
      }, {
            title: "Big Grams",
      }, {
            title: "Band of Horses",
      }, {
            title: "Leon Bridges",
      }, {
            title: "Grace Potter",
      }, {
            title: "Father John Misty",
      }, {
            title: "Adam Devine",
      }, {
            title: "Purity Ring",
      }, {
            title: "The Claypool Lennon Delirium",
      }, {
            title: "Two Door Cinema Club",
      }, {
            title: "Sam Hunt",
      }, {
            title: "Flosstradaumus",
      }, {
            title: "Zeds Dead",
      }, {
            title: "Adventure Club",
      }, {
            title: "Tyler The Creator",
      }, {
            title: "Bridget Everett",
      }, {
            title: "Griz",
      }, {
            title: "Mavis Staples",
      }, {
            title: "TouchPants",
      }, {
            title: "Kurt Vile & the Violators",
      }, {
            title: "",
      }, {
            title: "",
      }, {
            title: "",
      }, {
            title: "",
      }, {
            title: "",
      }, {
            title: "",
      }, {
            title: "",
      }, {
            title: "",
      }, {
            title: "",
      }, {
            title: "",
      }, {
            title: "",
      }, {
            title: "",
      }, {
            title: "",
      }, {
            title: "",
      }, {
            title: "",
      }, {
            title: "",
      }, {
            title: "",
      }, {
            title: "",
      }, {
            title: "",
      }, {
            title: "",
      }, {
            title: "",
      }
      ]
   }]
});

//-- menu selection --//
newMenuMenu.on('select', function(e) {
   if (e.itemIndex == 0) {
      daysMenu.show();
   }
   if (e.itemIndex == 1) {
      newLineup.show();
   }
});


daysMenu.on('select', function(e) {
   if (e.itemIndex == 0) {
      thursChoices.show(); 
   }
   if (e.itemIndex == 1) {
      friChoices.show(); 
   }
   if (e.itemIndex == 2) {
      satChoices.show(); 
   }
   if (e.itemIndex == 3) {
      sunChoices.show(); 
   }
});

thursChoices.on('select', function(e) {
   if (e.itemIndex == 0) {
      thursTimeMenu.show();
   }
   if (e.itemIndex == 1) {
      thursStageMenu.show();
   }
});

friChoices.on('select', function(e) {
   if (e.itemIndex == 0) {
      friTimeMenu.show();
   }
   if (e.itemIndex == 1) {
      friStageMenu.show();
   }
});

satChoices.on('select', function(e) {
   if (e.itemIndex == 0) {
      satTimeMenu.show();
   }
   if (e.itemIndex == 1) {
      satStageMenu.show();
   }
});

sunChoices.on('select', function(e) {
   if (e.itemIndex == 0) {
      sunTimeMenu.show();
   }
   if (e.itemIndex == 1) {
      sunStageMenu.show();
   }
});

thursStageMenu.on('select', function(f) {
   if (f.itemIndex == 0) {
      thursThisMenu.show();
   }
   if (f.itemIndex == 1) {
      thursThatMenu.show();
   }
   if (f.itemIndex == 2) {
      thursOtherMenu.show();
   }
   if (f.itemIndex == 3) {
      thursSilentMenu.show();
   }
   if (f.itemIndex == 4) {
      thursJakeMenu.show();
   }
});

friStageMenu.on('select', function(g) {
   if (g.itemIndex == 0) {
      friWhatMenu.show();
   }
   if (g.itemIndex == 1) {
      friWhichMenu.show();
   }
   if (g.itemIndex == 2) {
      friThisMenu.show();
   }
   if (g.itemIndex == 3) {
      friThatMenu.show();
   }
   if (g.itemIndex == 4) {
      friOtherMenu.show();
   }
   if (g.itemIndex == 5) {
      friSilentMenu.show();
   }
   if (g.itemIndex == 6) {
      friJakeMenu.show();
   }
});

satStageMenu.on('select', function(g) {
   if (g.itemIndex == 0) {
      satWhatMenu.show();
   }
   if (g.itemIndex == 1) {
      satWhichMenu.show();
   }
   if (g.itemIndex == 2) {
      satThisMenu.show();
   }
   if (g.itemIndex == 3) {
      satThatMenu.show();
   }
   if (g.itemIndex == 4) {
      satOtherMenu.show();
   }
   if (g.itemIndex == 5) {
      satSilentMenu.show();
   }
   if (g.itemIndex == 6) {
      satJakeMenu.show();
   }
});

sunStageMenu.on('select', function(g) {
   if (g.itemIndex == 0) {
      sunWhatMenu.show();
   }
   if (g.itemIndex == 1) {
      sunWhichMenu.show();
   }
   if (g.itemIndex == 2) {
      sunThisMenu.show();
   }
   if (g.itemIndex == 3) {
      sunThatMenu.show();
   }
   if (g.itemIndex == 4) {
      sunOtherMenu.show();
   }
   if (g.itemIndex == 5) {
      sunSilentMenu.show();
   }
   if (g.itemIndex == 6) {
      sunJakeMenu.show();
   }
});


//-- config setup --//
Pebble.addEventListener("showConfiguration", function(e) {
   Pebble.openURL("");
});


//-- start app --//
newMenuMenu.show();