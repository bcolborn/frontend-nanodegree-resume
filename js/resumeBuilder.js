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

