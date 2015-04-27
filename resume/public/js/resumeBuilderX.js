var formattedName = HTMLheaderName.replace("%data%", "Subhra Ghosh");
var formattedRole = HTMLheaderRole.replace("%data%", "Program Manager");

$("#header").append(formattedRole);
$("#header").prepend(formattedName);

var awesomeThoughts = "I am Subhra and I am awesome!";
var funThoughts = awesomeThoughts.replace("awesome", "fun");
console.log (awesomeThoughts);
console.log (funThoughts);
$("#main").append("Speed of Light = ");

//Calculated the Distance Light Travel in one nanosec
var speed_of_light = 299792458;   //meters per second
var centimeters = 100;            //one meter is 100 centimeters
var nanosecond = 1.0/1000000000;  //one billionth of a second

//Speef of light in nanosec/cm
var distance = speed_of_light * centimeters * nanosecond;

$("#main").append(distance);
$("#main").append(" nanosecond/cm. ");
$("#main").append(funThoughts);

var s = "audacity";
var newString = s.slice(1,2);
newString = newString.toUpperCase();
newString = newString.concat(s.slice(2,s.length));
var s2 = s = s[1].toUpperCase() + s.slice(2);

console.log (s);
console.log (newString);
console.log (s2);
console.log (s2.length);

var old_array = [0,0,7]
var newArray = [];
newArray = old_array.slice(0);
var lastNumber = newArray.pop();
newArray.push(lastNumber + 1);
console.log(newArray) 

var oldName = "AlbERt EINstEiN";
var finalName = oldName;
//var res = oldName.split(" ");
//res[1] = res[1].toUpperCase();
//res[0] = res[0].toLowerCase();
//finalName = finalName[0] + res[0].slice(1) + " " + res[1];
//finalName = finalName.toUpperCase();
//finalName = finalName.slice(6);
//var oneName = oldName.slice(1,6);
//finalName = oldName[0] + oneName.toLowerCase() + finalName;

var names = oldName.split(" ");
names[1] = names[1].toUpperCase();
names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
finalName = names.join(" ");

//Work Object 
var work = {};
work.position = "Delta C";
work.employer = "IGATE";
work.years = 18;
work.city = "Pune";

//education Object 
var edu_short = {};
edu_short["school"] = "CEC";
edu_short["passout"] = "1994";
edu_short["city"] = "Chandrapur";

// edu object
var edu = {
	"school" : "Chandrapur Engineering College" ,
	"schoolcity" : "Chandrapur",
    "major" : "Computer Technology",
    "minor" : "None",
    "graduationyear" : "1997",
    "courses" : ["Graphics", "OS", "Networking"],
    "years" : 4 
}

//Header Class Data
$("#header").append(HTMLheaderName.replace("%data%", bio.name));
$("#header").append(HTMLheaderRole.replace("%data%", bio.role));
$("#header").append(HTMLbioPic.replace("%data%", bio.pic));
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcome));
$("#header").append(HTMLlocation.replace("%data%", bio.contact));
$("#header").append(HTMLskills.replace("%data%", bio.skills));

//Main Class Data
$("#main").append(HTMLworkEmployer.replace("%data%", work.employer));
$("#main").append(HTMLschoolName.replace("%data%", education.school));


