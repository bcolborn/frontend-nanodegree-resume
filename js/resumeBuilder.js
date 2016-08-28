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

var work =[ {
    "name": "Nutanix, Inc.",
    "position": "Sr. Manager, Technical Publications",
    "location": "San Jose, CA",
    "dates": "November 2011-Present",
    "desc": "Built technical publications department from one technical writer (myself) to \
    eight writers in two locations (San Jose and Bangalore), plus an illustrator and a production specialist."
},
{
    "name": "Citrix Systems, Inc.",
    "position": "Principal Courseware Developer, Education",
    "location": "Santa Clara, CA",
    "dates": "August 2007-October 2011",
    "desc": "Developed course material for Citrix virtualization technologies."
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
    
    for (skill in bio.skills) {
        var fmtSkill = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(fmtSkill);
    }
}

function displayWork() {
    for (job in work) {
        $("#workExperience").append(HTMLworkStart);
        
        var fmtEmployer = HTMLworkEmployer.replace("%data%", work[job].name);
        var fmtTitle = HTMLworkTitle.replace("%data%", work[job].position);
        $(".work-entry:last").append(fmtEmployer + fmtTitle);
        
        var fmtDates = HTMLworkDates.replace("%data%", work[job].dates)
        $(".work-entry:last").append(fmtDates);
        
        var fmtLocation = HTMLworkLocation.replace("%data%", work[job].location);
        $(".work-entry:last").append(fmtLocation);
        
        var fmtDescription = HTMLworkDescription.replace("%data%", work[job].desc);
        $(".work-entry:last").append(fmtDescription);
    }
}

displayWork();

$(document).click(function(loc) {
    logClicks(loc.pageX,loc.pageY);    
});