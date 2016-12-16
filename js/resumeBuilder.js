var formattedName = HTMLheaderName.replace("%data%", "Daniel Maron")
var formattedRole = HTMLheaderRole.replace("%data%", "IT Dilettante")
var formattedEmail = HTMLemail.replace("%data%", "maron.daniel@gmail.com")
var formattedbioPic = HTMLbioPic.replace("%data%", "images/fry.jpg")
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", "I'm the One the prophecy foretold.")
var formattedSkills = HTMLskills.replace("%data%", "This, That, and the Other Things")

var bio = { name: "Daniel Maron",
	role: "IT Dilettante",
	email: "maron.daniel@gmail.com",
	bioPic: "images/fry.jpg",
	welcomeMsg: "I'm the One the prophecy foretold.",
	skills: ["This", "That", "The Other Thing"]
	}


 $("#main").append([bio.name]);
 $("#main").append([bio.role]);
 $("#main").append([bio.email]);
 $("#main").append([bio.bioPic]);
 $("#main").append([bio.welcomeMsg]);
 $("#main").append([bio.skills]);

