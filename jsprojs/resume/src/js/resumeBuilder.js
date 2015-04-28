//Bio Object 
var bio  = {
        "name" : "Subhra Ghosh",
        "role" : "Program Manager",
        "contacts" : {
            "mobile" : "818.319.6446",
            "location" : "Los Angles",
            "email" : "mail@subhra.com",
            "github" : "sjghosh",
            "twitter" : "@sjghosh"
        },
        "pic"     : "images/fry.jpg",
        "welcome" : "Welcome to My Resume. This is my life.",
        "skills"  : ["Java", "CSS", "HTML", "PMP", "Awesome"]
    };
var education = {
        "schools" : [
            {
                "name" : "ST. XAVIERS",
                "location" : "Hazaribagh",
                "degree"   : "SC",
                "majors"   : ["English", "Bengali"],
                "date"     : "04/31/1997",
                "url"     : "www.gogle.com"
            },
            {
                "name" : "DAV PUBLIC SCHOOL",
                "location" : "Hazaribagh",
                "degree"   : "SSC",
                "majors" : ["English", "Computers"],
                "date" : "04/31/1994",
                "url"     : "www.yahoo.com"
            },
            {
                "name" : "Chandrapur Engineering College",
                "location" : "Chandrapur",
                "degree"   : "gaduation",
                "majors"   : ["CT"],
                "date"     : "04/31/1999",
                "url"     : "www.msn.com"
            }]
    };
var work = {
        "jobs" : [
            {
                "employer" : "PATNI COMPUTES LTD",
                "location" : "PUNE",
                "title" : "PROJECT MANAGER",
                "dates" : "04/31/1997",
                "description" : "Started as SE TO PROJECT MANAGER"
            },
            {
                "employer" : "IGATE COMPUTES",
                "location" : "PUNE",
                "title" : "PROGRAM MANAGER",
                "dates" : "04/31/2011",
                "description" : "MOVED FRPM PM TO PgM"
            }]
    };
var projects = {
        "project" : [
            {
                "title" : "PATNI COMPUTES LTD",
                "dates" : "04/13/1997",
                "description" : "Started as SE TO PROJECT MANAGER",
                "images" : "images/197x148.gif"
            },
            {
                "title" : "PATNI COMPUTES LTD",
                "dates" : "04/13/1997",
                "description" : "Started as SE TO PROJECT MANAGER",
                "images" : "images/197x148.gif"
            }]
    };
var OnlineCourse = {
        "course" : [
            {
                "title" : "MS in Mainframe",
                "dates" : "04/13/1997",
                "school" : "Aptech",
                "url" : "www.aptech.com"
            },
            {
                "title" : "MS in Mainframe",
                "dates" : "04/13/1997",
                "school" : "Aptech",
                "url" : "www.aptech.com"
            }]
    };

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
$("#main").append(HTMLschoolName.replace("%data%", education.schools[0].location));
$("#main").append(HTMLschoolName.replace("%data%", education.schools[1].name));
$("#main").append(HTMLschoolName.replace("%data%", education.schools[1].location));
$("#main").append(HTMLworkEmployer.replace("%data%", work.jobs[0].employer));
$("#main").append(HTMLschoolName.replace("%data%", OnlineCourse.course[0].title));
