/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');

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


var thursdayThat = [
   
];

var thursdayOther = [
   
];

var thursdaySilent = [
   
];

var thursdayJake = [
   
];

//Friday Sched
var fridayWhat = [
   
];

var fridayWhich = [
   
];

var fridayThis = [
   
];

var fridayThat = [
   
];

var fridayOther = [
   
];

var fridaySilent = [
   
];

var fridayJake = [
   
];

//Sat Sched
var saturdayWhat = [
   
];

var saturdayWhich = [
   
];

var saturdayThis = [
   
];

var saturdayThat = [
   
];

var saturdayOther = [
   
];

var saturdaySilent = [
   
];

var saturdayJake = [
   
];

//Sun Sched
var sundayWhat = [
   
];

var sundayWhich = [
   
];

var sundayThis = [
   
];

var sundayThat = [
   
];

var sundayOther = [
   
];

var sundaySilent = [
   
];

var sundayJake = [
   
];

var daysMenu = new UI.Menu({
   sections: [{
      title: 'Bonnaroo 2015',
      items: days
   }]
});

daysMenu.show();

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

//Thurs Sched
var thursdayThis = [
   {
      title: "Unlocking the Truth",
      subtitle: "545-630"
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

thursdayMenu.on('select', function(f) {
   if (f.indexItem == 0) {
      thursdayThisMenu.show();
   }
   if (f.indexItem == 1) {
      thursdayThisMenu.show();
   }
   if (f.indexItem == 2) {
      thursdayThisMenu.show();
   }
});