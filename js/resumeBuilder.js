/* BEGIN DATA DECLARATION */


// Bio and contact information
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
	"bioPic": "images/fry.jpg",
	display: function() {

		var formattedName = HTMLheaderName.replace("%data%", bio.name)
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role)
		var formattedBioPic = HTMLbioPic.replace("%data%", "images/fry.jpg")
		var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", "Doing All The Things")
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email)
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github)
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile)
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter)
		var formattedSkill = "";

		
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		$("#header").append(formattedWelcomeMsg);
		$("#header").append(formattedBioPic);

		$("#topContacts").append(formattedEmail);
		$("#topContacts").append(formattedGithub);
		$("#topContacts").append(formattedMobile);
		$("#topContacts").append(formattedTwitter);
		if (bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			for (var i in bio.skills) {
		  		formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
				$("#skills").append(formattedSkill);
			}
		}
	}
}

// Education
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
	],
	display: function() {
		var formattedSchool = ""
		var formattedSchoolLoc = ""
		var formattedSchoolDates = ""
		var formattedSchoolMajor = ""
		var formattedSchoolDegree = ""

		education.schools.forEach(function(school){

				$("#education").append(HTMLschoolStart);
				formattedSchool = HTMLschoolName.replace("%data%", school.name);
				formattedSchoolLoc = HTMLschoolLocation.replace("%data%", school.location);
				formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
				formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors);
				formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);

				$(".education-entry:last").append(formattedSchool);
				$(".education-entry:last").append(formattedSchoolLoc);
				$(".education-entry:last").append(formattedSchoolDates);
				$(".education-entry:last").append(formattedSchoolMajor);
				$(".education-entry:last").append(formattedSchoolDegree);
			}
		);


		$("#education").append(HTMLonlineClasses);
		
		var formattedOlcTitle = ""
		var formattedOlcSchool = ""
		var formattedOlcDates = ""
		var formattedOlcURL = ""

		education.onlineCourses.forEach(function(olc){

				formattedOlcTitle = HTMLonlineTitle.replace("%data%", olc.title);
				formattedOlcSchool = HTMLonlineSchool.replace("%data%", olc.school);
				formattedOlcDates = HTMLonlineDates.replace("%data%", olc.date);
				formattedOlcURL = HTMLonlineURL.replace("%data%", olc.url);

				$(".education-entry:last").append(formattedOlcTitle);
				$(".education-entry:last").append(formattedOlcSchool);
				$(".education-entry:last").append(formattedOlcDates);
				$(".education-entry:last").append(formattedOlcURL);
			}
		);

	}
}

// Work history
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
	],
	display: function() {
		var formattedEmployer = ""
		var formattedTitle = ""
		var formattedWorkDates = ""
		var formattedWorkkDesc = ""

		work.jobs.forEach(function(position){

				$("#workExperience").append(HTMLworkStart);
				formattedEmployer = HTMLworkEmployer.replace("%data%", position.employer);
				formattedTitle = HTMLworkTitle.replace("%data%", position.title);
				formattedWorkDates = HTMLworkDates.replace("%data%", position.dates);
				formattedWorkkDesc = HTMLworkDescription.replace("%data%", position.description);

				$(".work-entry:last").append(formattedEmployer + formattedTitle);
				$(".work-entry:last").append(formattedWorkDates);
				$(".work-entry:last").append(formattedWorkkDesc);
			}
		);
	}
}

// Projects
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
		],
	display: function() {

		var formattedProjectTitle = ""
		var formattedProjectDates = ""
		var formattedProjectDesc = ""
		var formattedProjectImage = ""

		projects.project.forEach(function(project){

			$("#projects").append(HTMLprojectStart);
			formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title)
			formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates)
			formattedProjectDesc = HTMLprojectDescription.replace("%data%", project.description)

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDesc);

			project.images.forEach(function(img){
				var tmpImage = "images/" + img;
				formattedProjectImage = HTMLprojectImage.replace("%data%", tmpImage);
				$(".project-entry:last").append(formattedProjectImage);
			});
		});
	}
}

/* END DATA DECLARATION */


// Function to internationalize name
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

// Display main sections
bio.display();
work.display();
projects.display();
education.display();


// Display map div
$("#mapDiv").append(googleMap);

// Display Internationalize button
$("#main").append(internationalizeButton);
