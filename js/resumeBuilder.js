var bio = {
    "name": "Ben Colborn",
    "role": "Technical Writer",
    "contacts": {
        "email": "bcolborn@gmail.com",
        "github": "bcolborn"
    },
    "skills":[ "Technical writing", "DITA", "Git"],
    "photo": "images/me.jpg"
}

var work = {
};
work.position = "Sr. Manager, Technical Publications";
work.employer = "Nutanix";
work.years = "November 2011-Present";

var education = {
    "schools":[ {
        "name": "University of Idaho",
        "city": "Moscow, ID",
        "degree": "B.A.",
        "major": "English"
    }, {
        "name": "San Jose State University",
        "city": "San Jose",
        "degree": "M.A.",
        "major": "TESOL"
    }]
};


var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedRole);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedName);

var formattedContact = HTMLemail.replace("%data%", bio.contacts.email);
$("#header").append(formattedContact);

var formattedPhoto = HTMLbioPic.replace("%data%", bio.photo);
$("#header").append(formattedPhoto);

var formattedSkills = HTMLskills.replace("%data%", bio.skills);
$("#main").append(formattedSkills);

$("#main").append(work[ "position"]);
$("#main").append(education.name);
