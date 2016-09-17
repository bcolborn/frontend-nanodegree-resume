var bio = {
    "name": "Ben Colborn",
    "role": "Technical Writer",
    "contacts": {
        "Email": "bcolborn@gmail.com",
        "GitHub": "https://github.com/bcolborn",
        "Blog": "http://ditanauts.org",
        "Linkedin": "https://www.linkedin.com/in/bencolborn"
    },
    "skills":[ "Technical writing", "DITA", "Git"],
    "photo": "images/me.jpg"
}
bio.display = function () {
    
    var fmtName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").append(fmtName);
    
    var fmtRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").append(fmtRole);
    
    var fmtImage = HTMLbioPic.replace("%data%", bio.photo);
    $("#header").append(fmtImage);
    
    $("#header").append(HTMLskillsStart);
    for (var item in bio.skills) {
        var fmtSkill = HTMLskills.replace("%data%", bio.skills[item]);
        $("#skills").append(fmtSkill);
    }
    
    var id = "#topContacts";
    displayContacts(id);
}

var work = {
    "jobs":[ {
        "name": "Nutanix, Inc.",
        "position": "Sr. Manager, Technical Publications",
        "location": "San Jose, CA",
        "dates": "November 2011-Present",
        "desc": "Built technical publications department from one technical writer (myself) to eight writers in two locations (San Jose and Bangalore), plus an illustrator and a production specialist."
    },
    {
        "name": "Citrix Systems, Inc.",
        "position": "Principal Courseware Developer, Education",
        "location": "Santa Clara, CA",
        "dates": "August 2007-October 2011",
        "desc": "Developed course material for Citrix virtualization technologies."
    }]
};
work.display = function () {
    for (var item in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        
        var fmtEmployer = HTMLworkEmployer.replace("%data%", work.jobs[item].name);
        var fmtTitle = HTMLworkTitle.replace("%data%", work.jobs[item].position);
        $(".work-entry:last").append(fmtEmployer + fmtTitle);
        
        var fmtDates = HTMLworkDates.replace("%data%", work.jobs[item].dates)
        $(".work-entry:last").append(fmtDates);
        
        var fmtLocation = HTMLworkLocation.replace("%data%", work.jobs[item].location);
        $(".work-entry:last").append(fmtLocation);
        
        var fmtDescription = HTMLworkDescription.replace("%data%", work.jobs[item].desc);
        $(".work-entry:last").append(fmtDescription);
    }
}

var education = {
    "schools":[ {
        "name": "University of Idaho",
        "degree": "B.A.",
        "major": "English",
        "location": "Moscow, ID"
    },
    {
        "name": "San Jose State University",
        "degree": "M.A.",
        "major": "TESOL",
        "location": "San Jose, CA"
    },
    {
        "name": "Katholische Universitaet Eichstaett",
        "degree": "International Student Exchange Program participant",
        "major": "Germanistik",
        "location": "Eichstaett, Germany"
    }]
};
education.display = function () {
    for (var item in education.schools) {
        $("#education").append(HTMLschoolStart);
        
        var fmtSchoolName = HTMLschoolName.replace("%data%", education.schools[item].name);
        var fmtSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[item].degree);
        $(".education-entry:last").append(fmtSchoolName + fmtSchoolDegree);
        
        var fmtSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[item].major);
        $(".education-entry:last").append(fmtSchoolMajor);
        
        var fmtSchoolLocation = HTMLschoolLocation.replace("%data%",
        education.schools[item].location);
        $(".education-entry:last").append(fmtSchoolLocation);
    }
}

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
    }]
};
projects.display = function () {
    for (var item in projects.proj) {
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.proj[item].name));
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.proj[item].dates));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%",
        projects.proj[item].description));
        if (projects.proj[item].images.length > 0) {
            for (var image in projects.proj[item].images) {
                $(".project-entry:last").append(HTMLprojectImage.replace("%data%",
                projects.proj[item].images[image]));
            }
        }
    }
};

function displayContacts(id) {
    for (var item in bio.contacts) {
        var fmtContact = HTMLcontactGeneric.replace("%data%", bio.contacts[item]);
        fmtContact = fmtContact.replace("%contact%", item);
        $(id).append(fmtContact);
    }
}

bio.display();
work.display();
projects.display();
education.display();

var id = "#footerContacts";
displayContacts(id);