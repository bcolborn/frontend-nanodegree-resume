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
    "jobs":[ {
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
    }]
};

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
    "proj":[ {
        "name": "API documentation",
        "description": "Slate for new APIs",
        "dates": "2016",
        "url": "http://bcolborn.github.io/slate/",
        "images":[]
    },
    {
        "name": "Nutanix support portal",
        "description": "Single location for support and documenation",
        "dates": "August 2014-Present",
        "url": "https://portal.nutanix.com/#/page/docs",
        "images":[]
    }],
    "display": function () {
        for (item in projects.proj) {
            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.proj[item].name));
            $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.proj[item].dates));
            $(".project-entry:last").append(HTMLprojectDescription.replace("%data%",
            projects.proj[item].description));
            if (projects.proj[item].images.length > 0) {
                for (image in projects.proj[item].images) {
                    $(".project-entry:last").append(HTMLprojectImage.replace("%data%",
                    projects.proj[item].images[image]));
                }
            }
        }
    }
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
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        
        var fmtEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].name);
        var fmtTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
        $(".work-entry:last").append(fmtEmployer + fmtTitle);
        
        var fmtDates = HTMLworkDates.replace("%data%", work.jobs[job].dates)
        $(".work-entry:last").append(fmtDates);
        
        var fmtLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(fmtLocation);
        
        var fmtDescription = HTMLworkDescription.replace("%data%", work.jobs[job].desc);
        $(".work-entry:last").append(fmtDescription);
    }
}

displayWork();
projects.display();

$(document).click(function (loc) {
    logClicks(loc.pageX, loc.pageY);
});

$("#main").append(internationalizeButton);

function inName(name) {
    var first = name.split(" ")[0];
    first = first.substr(0, 1).toUpperCase() + first.substr(1).toLowerCase();
    var last = name.split(" ")[1].toUpperCase();
    
    return first + " " + last;
}