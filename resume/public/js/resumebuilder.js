//Bio Object 
var bio  = {
	"name" : "Subhra Ghosh",
	"role" : "Program Manager",
	"contacts"  : {
	  "mobile"  : "818.319.6446",
	  "city"    : "Los Angles",
	  "email"   : "mail@subhra.com",
	  "github"  : "sjghosh",
	  "twitter" : "@sjghosh" 	
	},
	"pic"     : "images/fry.jpg",
	"welcome" : "Welcome to My Resume. This is my life.",
	"skills"  : ["Java", "CSS", "HTML", "PMP", "Awesome"]
};


var education = {
	"schools" : [ 
	  {
	  	"name" : "ST. Xaviers",
	  	"location" : "Hazaribagh",
	  	"majors"   : ["English", "Bengali"],
	  	"date"     : "04/31/1997"	  
	  }, 
	  {
	  	"name" : "DAV Public School",
	  	"location" : "Hazaribagh",
	  	"majors"   : ["English", "Computers"],
	  	"date"     : "04/31/1994"	  
	  }, 
	  {
	  	"name" : "Chandrapur Engineering College",
	  	"location" : "Chandrapur",
	  	"majors"   : ["CT"],
	  	"date"     : "04/31/1999"
	  } 
	]
}


var work = {
	"jobs" : [ 
	  {
	  	"employer" : "ST. Xaviers",
	  	"location" : "Hazaribagh",
	  	"title" : ["English", "Bengali"],
	  	"dates" : "04/31/1997",
	  	"description" : "04/31/1997"	  		  
	  },
	  {
	  	"employer" : "ST. Xaviers",
	  	"location" : "Hazaribagh",
	  	"title" : ["English", "Bengali"],
	  	"dates" : "04/31/1997",
	  	"description" : "04/31/1997"	  		  
	  }
	]
}

//Header Class Data
$("#header").append(HTMLheaderName.replace("%data%", bio.name));
$("#header").append(HTMLheaderRole.replace("%data%", bio.role));
$("#header").append(HTMLbioPic.replace("%data%", bio.pic));
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcome));
$("#header").append(HTMLlocation.replace("%data%", bio.contact));
$("#header").append(HTMLskills.replace("%data%", bio.skills));

//Main Class Data
$("#main").append(HTMLworkEmployer.replace("%data%", work.jobs[0].employer));
$("#main").append(HTMLschoolName.replace("%data%", education.schools[0].name));


