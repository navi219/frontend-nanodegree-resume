var formattedName = HTMLheaderName.replace("%data%", "Daniel Maron")
var formattedRole = HTMLheaderRole.replace("%data%", "IT Dilettante")
var formattedEmail = HTMLemail.replace("%data%", "maron.daniel@gmail.com")
var formattedbioPic = HTMLbioPic.replace("%data%", "images/fry.jpg")
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", "I'm the One the prophecy foretold.")
var formattedSkills = HTMLskills.replace("%data%", "This, That, and the Other Things")

var bio = {
	"name": "Daniel Maron",
	"role": "IT Dilettante",
	"email": "maron.daniel@gmail.com",
	"bioPic": "images/fry.jpg",
	"welcomeMsg": "I'm the One the prophecy foretold.",
	"skills": ["This", "That", "The Other Thing"]
}

var work = {
	"position": "IT Support Specialist",
	"employer": "FacelessCorp",
	"tenure": 13,
	"city": "Ralleigh"
}

var education = {}
	education["name"] = "UNC"
	education["years"] = "1989-1993"
	education["city"] = "Springfield"

 $("#main").append([bio.name]);
 $("#main").append([bio.role]);
 $("#main").append([bio.email]);
 $("#main").append([bio.bioPic]);
 $("#main").append([bio.welcomeMsg]);
 $("#main").append([bio.skills]);

 $("#main").append(work["position"]);
 $("#main").append([education.name]);
