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
var formattedName = HTMLheaderName.replace("%data%", bio.name)
$("#header").append(formattedName);


//Skills
var formattedSkill = "";
function arrayToHTML(index,arr) {
	formattedSkill = HTMLskills.replace("%data%", arr[index]);
	$("#skills").append(formattedSkill);
}

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for (var i = 0, len = bio.skills.length; i < len; i++) {
  	arrayToHTML(i,bio.skills);
	}
}

