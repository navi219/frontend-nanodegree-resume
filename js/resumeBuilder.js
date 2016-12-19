var bio = {
	"name": "Daniel Maron",
	"role": "IT Dilettante",
	"email": "maron.daniel@gmail.com",
	"bioPic": "images/fry.jpg",
	"welcomeMsg": "I'm the One the prophecy foretold.",
	"skills": ["This", "That", "The Other Thing"]
}

var work = {
	"positions": [
		{	"title": "Senior IT Support Specialist",
			"employer": "FacelessCorp",
			"dates": "2005 - Present",
			"city": "Ralleigh",
			"desc": "Led a team of evil geniuses to develop scathing comebacks on social media. Managed team conflict by basing bonuses on team success."
		},
		{	"title": "Field Services",
			"employer": "Brogovingian",
			"dates": "2003 - 2005",
			"city": "Temple",
			"desc": "Leveled the playing field for all interested parties. Maximized ROI by leveraging distributed resources in a globalized context. Yay me."
		},
		{	"title": "Traffic Pylon",
			"employer": "Road",
			"dates": "1999",
			"city": "Topeka",
			"desc": "All work and no play made Jack a dull boy. All work and no play made Jack a dull boy. All work and no play made Jack a dull boy. All work and no play made Jack a dull boy. All work and no play made Jack a dull boy. All work and no play made Jack a dull boy. All work and no play made Jack a dull boy. All work and no play made Jack a dull boy."
		}
	]
}

var education = {
	"schools": [
	{
		"school": "UNC",
		"city": "Springfield",
		"major": "Sociology",
		"minor": "Communication",
		"years": "1989-1993",
		"url": "www.google.com"
	},
	{
		"school": "Googball U",
		"city": "Nome",
		"major": "Bribery",
		"minor": ["Subterfuge","Con Art History"],
		"years": "1977-1983",
		"url": "www.disinfo.com"
	}
]
}

var projects = {
	"websites": [
		{
			"name": "Fizzbat",
			"url": "www.fizzbat.com",
			"role": "Senior Designer",
			"years": "1997"
		},
		{
			"name": "Dorfbing",
			"url": "www.dorfbingreal.com",
			"role": "Tester",
			"years": "1999"
		}
		],
	"movies": [
		{
			"name": "Ugly Monkey",
			"year": "2013",
			"role": "Directory"
		},
		{
			"name": "Formika",
			"year": "2011",
			"role": "Actor"
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
for (position in work.positions) {
	if (work.positions.hasOwnProperty(position)) {
		$("#workExperience").append(HTMLworkStart);
		//console.log("Position: " + j);
		formattedEmployer = HTMLworkEmployer.replace("%data%", work.positions[position].employer);
		formattedTitle = HTMLworkTitle.replace("%data%", work.positions[position].title);
		formattedWorkDates = HTMLworkDates.replace("%data%", work.positions[position].dates);
		formattedWorkkDesc = HTMLworkDescription.replace("%data%", work.positions[position].desc);

		$(".work-entry:last").append(formattedEmployer + formattedTitle);
		$(".work-entry:last").append(formattedWorkDates);
		$(".work-entry:last").append(formattedWorkkDesc);
	}
}
}

displayWork();




$("#main").append(internationalizeButton);
