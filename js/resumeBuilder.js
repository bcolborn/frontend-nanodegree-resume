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

var work = [ 
    {
        "name": "Nutanix",
        "position": "Sr. Manager, Technical Publications",
        "years": "November 2011-Present"
    },
    {
        "name": "Citrix",
        "position": "Principal Courseware Developer, Education",
        "years": "2007-2011"
    }];

var education = {
    "schools":[ {
        "name": "University of Idaho",
        "city": "Moscow, ID",
        "degree": "B.A.",
        "major": "English"
    },
    {
        "name": "San Jose State University",
        "city": "San Jose",
        "degree": "M.A.",
        "major": "TESOL"
    }]
};

var projects = {
    "projects":[ {
        "name": "API documentation",
        "description": "Slate for new APIs",
        "url": "http://bcolborn.github.io/slate/"
    },
    {
        "name": "Nutanix support portal",
        "description": "Single location for support and documenation",
        "url": "https://portal.nutanix.com/#/page/docs"
    }]
}

var fmtName = HTMLheaderName.replace("%data%", bio.name);
var fmtRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(fmtRole);
$("#header").prepend(fmtName);

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    
    var fmtSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(fmtSkill); 
    fmtSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(fmtSkill); 
    fmtSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(fmtSkill); 
}

for (job in work) {
    $("#workExperience").append(HTMLworkStart);
    
    var fmtEmployer = HTMLworkEmployer.replace("%data%", work[job].name);
    var fmtTitle = HTMLworkTitle.replace("%data%", work[job].position);
    $(".work-entry:last").append(fmtEmployer + fmtTitle);
}