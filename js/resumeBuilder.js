var bio = {
	"name": "Daniel Maron",
	"role": "IT Dilettante",
	"contacts": {
		"mobile": "555-444-5435",
		"email": "test@test.com",
		"github": "https://github.com/navi219",
		"twitter": "@yourface",
		"location": "Columbus, OH"
	},
	"welcomeMsg": "I'm the One the prophecy foretold.",
	"skills": ["This", "That", "The Other Thing"],
	"bioPic": "images/fry.jpg"
}

var education = {
	"schools": [
		{	"name": "UNC",
			"location": "Springfield, IL",
			"degree": "B.A.",
			"majors": "Communication",
			"dates": 1993,
			"url": "www.google.com"
		},
		{	"name": "Googball U",
			"location": "Nome, AK",
			"degree": "B.S.",
			"majors": "Bribery",
			"dates": 1983,
			"url": "www.disinfo.com"
		}
		],
	"onlineCourses": [
		{	"title": "Online Fun Party Class",
			"school": "U of Phoenix",
			"date": 2016,
			"url": "http://www.phoboes.com"
		}
	]
}


var work = {
	"jobs": [
		{	"employer": "FacelessCorp",
			"title": "Senior IT Support Specialist",
			"location": "Charlotte, VA",
			"dates": "2005 - Present",
			"description": "Led a team of evil geniuses to develop scathing comebacks on social media. Managed team conflict by basing bonuses on team success."
		},
		{	"employer": "Brogovingian",
			"title": "Field Services",
			"location": "Temple, AZ",
			"dates": "2003 - 2005",
			"description": "Leveled the playing field for all interested parties. Maximized ROI by leveraging distributed resources in a globalized context. Yay me."
		},
		{	"employer": "Road",
			"title": "Traffic Pylon",
			"location": "Topeka, KS",
			"dates": "1999",
			"description": "All work and no play made Jack a dull boy. All work and no play made Jack a dull boy. All work and no play made Jack a dull boy. All work and no play made Jack a dull boy. All work and no play made Jack a dull boy. All work and no play made Jack a dull boy. All work and no play made Jack a dull boy. All work and no play made Jack a dull boy."
		}
	]
}

var projects = {
	"project": [
		{
			"title": "Fizzbat",
			"url": "www.fizzbat.com",
			"role": "Senior Designer",
			"dates": "1997",
			"description": "Big deal, big deals, the best deals. Leveraged incredible resources to do fantastic things. So good.",
			"images": ["buddhasm.gif"]
		},
		{
			"title": "Dorfbing",
			"url": "www.dorfbingreal.com",
			"role": "Tester",
			"dates": "1999",
			"description": "If you have to ask you'll never know. If you have to ask you'll never know. \
			If you have to ask you'll never know. If you have to ask you'll never know. If you have to ask you'll never know. \
			If you have to ask you'll never know. If you have to ask you'll never know.",
			"images": ["rocksm.gif"]
		},
		{
			"title": "Ugly Monkey",
			"dates": "2012 - 2013",
			"role": "Director",
			"description": "All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play \
			makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. \
			All work and no play makes Jack a dull boy. All work and no play makes Jack a dull boy. All work and no play makes \
			Jack a dull boy. All work and no play makes Jack a dull boy.",
			"images": ["contactsm.gif", "dragsm.gif"]
		},
		{
			"title": "Formika",
			"dates": "2011 - present",
			"role": "Actor",
			"description": "NOPE NOPE NOPE NOPE NOPE NOPE NOPE NOPE NOPE NOPE NOPE NOPE NOPE NOPE NOPE NOPE NOPE NOPE NOPE NOPE \
			NOPE NOPE NOPE NOPE NOPE NOPE NOPE NOPE NOPE NOPE NOPE NOPE NOPE NOPE NOPE NOPE NOPE NOPE NOPE NOPE NOPE NOPE \
			NOPE NOPE NOPE NOPE NOPE NOPE NOPE NOPE NOPE",
			"images": ["bmansm.gif"]
		}
		]
}

//Name

var nameIsInt = -1;

function inName() {
    var newName = bio.name.split(" ");

if (nameIsInt < 0) {
    newName[0] = newName[0].charAt(0).toUpperCase() + newName[0].substr(1).toLowerCase();
    
    newName[1] = newName[1].toUpperCase();
    
    }


 	newName = newName.join(' ');

 	nameIsInt = nameIsInt * (-1);

    return newName;
}

var formattedName = HTMLheaderName.replace("%data%", bio.name)
var formattedBioPic = HTMLbioPic.replace("%data%", "images/fry.jpg")
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", "Doing All The Things")

$("#header").append(formattedName);
$("#header").append(formattedWelcomeMsg);
$("#header").prepend(formattedBioPic);



//Contact
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email)
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile)
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter)

$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedTwitter);



//Skills
var formattedSkill = "";

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	for (var i in bio.skills) {
  		formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkill);
	}
}


//Work
var formattedEmployer = ""
var formattedTitle = ""
var formattedWorkDates = ""
var formattedWorkkDesc = ""

function displayWork() {
for (position in work.jobs) {
	if (work.jobs.hasOwnProperty(position)) {
		$("#workExperience").append(HTMLworkStart);
		//console.log("Position: " + j);
		formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[position].employer);
		formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[position].title);
		formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[position].dates);
		formattedWorkkDesc = HTMLworkDescription.replace("%data%", work.jobs[position].description);

		$(".work-entry:last").append(formattedEmployer + formattedTitle);
		$(".work-entry:last").append(formattedWorkDates);
		$(".work-entry:last").append(formattedWorkkDesc);
	}
}
}

displayWork();


// Projects
projects.display = function() {

	var formattedProjectTitle = ""
	var formattedProjectDates = ""
	var formattedProjectDesc = ""
	var formattedProjectImage = ""
	var imgArray = []

	for (proj in projects.project) {

		if (projects.project.hasOwnProperty(proj)) {

		formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.project[proj].title)
		formattedProjectDates = HTMLprojectDates.replace("%data%", projects.project[proj].dates)
		formattedProjectDesc = HTMLprojectDescription.replace("%data%", projects.project[proj].description)
		
		projects.project[proj].images.forEach(function(img){
			var tmpImage = "images/" + img;
			formattedProjectImage = HTMLprojectImage.replace("%data%", tmpImage);
			imgArray.push(formattedProjectImage);
			});	


		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(formattedProjectTitle);
		$(".project-entry:last").append(formattedProjectDates);
		$(".project-entry:last").append(formattedProjectDesc);
		$(".project-entry:last").append(formattedProjectImage);
		}
	}
}

//Map

$("#mapDiv").append(googleMap);


projects.display();

$("#main").append(internationalizeButton);
