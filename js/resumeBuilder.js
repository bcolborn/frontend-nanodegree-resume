    var data = {
        "bio": "https://raw.githubusercontent.com/bcolborn/frontend-nanodegree-resume/master/data/bio.json",
        "profile": "https://raw.githubusercontent.com/bcolborn/frontend-nanodegree-resume/master/data/Profile.csv",
        "education": "https://raw.githubusercontent.com/bcolborn/frontend-nanodegree-resume/master/data/Education.csv",
        "jobs": "https://raw.githubusercontent.com/bcolborn/frontend-nanodegree-resume/master/data/Positions.csv",
        "projects": "https://raw.githubusercontent.com/bcolborn/frontend-nanodegree-resume/master/data/Projects.csv",
        "publication": "https://raw.githubusercontent.com/bcolborn/frontend-nanodegree-resume/master/data/Publications.csv"
    };

    $.getJSON(data.bio, {
        format: "json"
    }).done(function (data) {
        //console.log(data);
        bioDisplay(data.bio);
        contactDisplay(data.bio.contacts, "#footerContacts");
        
        if (document.getElementsByClassName('flex-item').length === 0) {
            document.getElementById('lets-connect').style.display = 'none';
        }
    });

    $.get(data.profile, {
        format: "text"
    }).done(function (data) {
        var profile = csv2obj(data)
        profileDisplay(profile);
    });

    $.get(data.jobs, {
        format: "text"
    }).done(function (data) {
        var jobs = csv2obj(data)
        workDisplay(jobs);
        if (document.getElementsByClassName('work-entry').length === 0) {
            document.getElementById('workExperience').style.display = 'none';
        }
    });

    $.get(data.projects, {
        format: "text"
    }).done(function (data) {
        var projects = csv2obj(data)
        //console.log(projects);
        projectsDisplay(projects);
        if (document.getElementsByClassName('project-entry').length === 0) {
            document.getElementById('projects').style.display = 'none';
        }
    });

    $.get(data.publication, {
        format: "text"
    }).done(function (data) {
        var publications = csv2obj(data);
        publicationsDisplay(publications);
        if (document.getElementsByClassName('project-entry').length === 0) {
            document.getElementById('publications').style.display = 'none';
        }
    });

    $.get(data.education, {
        format: "text"
    }).done(function (data) {
        var education = csv2obj(data);
        eduDisplay(education);
        if (document.getElementsByClassName('education-entry').length === 0) {
            document.getElementById('education').style.display = 'none';
        }
    });

    // Display functions for each section

    function contactDisplay(contacts, id) {
        for (var item in contacts) {
            if (contacts[item].startsWith("http")) {
                var fmtContact = HTMLcontactWeb.replace(/%data%/g, contacts[item]);
            } else {
                var fmtContact = HTMLcontactGeneric.replace(/%data%/g, contacts[item]);
            }
            fmtContact = fmtContact.replace("%contact%", item);
            $(id).append(fmtContact);
        }
    }

    function bioDisplay(bio) {        
        $("#header").append(HTMLheaderRole.replace("%data%", bio.role));
        
        $("#header").append(HTMLflexWrap);
        $("#header-flex-wrap").append(HTMLbioPic.replace("%data%", bio.photo));
        
        $("#header-flex-wrap").append(HTMLskillsStart);
        for (var item in bio.skills) {
            var fmtSkill = HTMLskills.replace("%data%", bio.skills[item]);
            $("#skills-list").append(fmtSkill);
        }
    }

    function profileDisplay(profile) {
        $("#header").prepend(HTMLheaderName.replace("%data%", profile[0].FirstName + " " + profile[0].LastName));
        
        $("#skills").before(HTMLsummaryStart);
        $("#summary").append(HTMLsummary.replace("%data%", profile[0].Summary));     
    }

    function workDisplay(jobs) {
        jobs = jobs.sort(function (a, b) {
            var a_year = a.StartDate.split("/")[1];
            var b_year = b.StartDate.split("/")[1];
            return parseFloat(b_year) - parseFloat(a_year);
        });
        
        for (var item in jobs) {
            $("#workExperience").append(HTMLworkStart);
            
            var fmtEmployer = HTMLworkEmployer.replace("%data%", jobs[item].CompanyName);
            var fmtTitle = HTMLworkTitle.replace("%data%", jobs[item].Title);
            $(".work-entry:last").append(fmtTitle + fmtEmployer);
            
            var dates = convertDate(jobs[item].StartDate) + " to " + convertDate(jobs[item].EndDate);
            $(".work-entry:last").append(HTMLworkDates.replace("%data%", dates));
            
            $(".work-entry:last").append(HTMLworkLocation.replace("%data%", jobs[item].Location));
            
            $(".work-entry:last").append(HTMLgeneralDescription.replace("%data%", jobs[item].Description));
        }
    }

    function projectsDisplay(proj) {
        for (var item in proj) {
            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", proj[item].Title).replace("%url%", proj[item].Url));
            $(".project-entry:last").append(HTMLgeneralDescription.replace("%data%",
                proj[item].Description));
        }
    };

    function publicationsDisplay(pubs) {
        /* pubs = pubs.sort(function (a, b) {
            var a_year = a.Date.split("/")[1];
            var b_year = b.Date.split("/")[1];
            return parseFloat(b_year) - parseFloat(a_year);
        }); */
        for (var item in pubs) {
            $("#publications").append(HTMLpublicationStart);
            $(".project-entry:last").append(HTMLpublicationTitle.replace("%data%",
                pubs[item].Name).replace("%url%", pubs[item].Url));
            $(".project-entry:last").append(HTMLpublicationPublisher.replace("%data%", pubs[item].Publisher));
            $(".project-entry:last").append(HTMLpublicationDates.replace("%data%", convertDate(pubs[item].Date)));
            $(".project-entry:last").append(HTMLgeneralDescription.replace("%data%",
                pubs[item].Description));
        }
    };

    function eduDisplay(schools) {
        for (var item in schools) {
            $("#education").append(HTMLschoolStart);
            
            var fmtSchoolDegree = HTMLschoolDegree.replace("%data%", schools[item].DegreeName);
            var fmtSchoolName = HTMLschoolName.replace("%data%", schools[item].SchoolName);
            $(".education-entry:last").append(fmtSchoolDegree + fmtSchoolName);

            $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", schools[item].Major));
            
            $(".education-entry:last").append(HTMLschoolLocation.replace("%data%",
                schools[item].Location));

            $(".education-entry:last").append(HTMLgeneralDescription.replace("%data%",
                schools[item].Notes));

            $(".education-entry:last").append(HTMLgeneralDescription.replace("%data%",
                "Activities: " + schools[item].Activities));
        }
    }

    // Utility functions

    function parse(row) {
        var insideQuote = false,
        entries =[],
        entry =[];
        row.split('').forEach(function (character) {
            if (character === '"') {
                insideQuote = ! insideQuote;
            } else {
                if (character == "," && ! insideQuote) {
                    entries.push(entry.join(''));
                    entry =[];
                } else {
                    entry.push(character);
                }
            }
        });
        
        entries.push(entry.join(''));
        return entries;
    }

    function csv2obj(csv) {

        // Split the input into lines
        lines = csv.split('\n').filter(String);
        
        // Extract column names from the first line
        columnNamesLine = lines[0].replace(/\s+/g, "");
        columnNames = parse(columnNamesLine);
        //console.log(columnNames);
        
        // Extract data from subsequent lines
        dataLines = lines.slice(1);
        data = dataLines.map(parse);
        
        var dataObjects = data.map(function (arr) {
            var dataObject = {
            };
            columnNames.forEach(function (columnName, i) {
                dataObject[columnName] = arr[i];
            });
            return dataObject;
        });
        
        //console.log(JSON.stringify(dataObjects));
        return dataObjects;
    }

    function convertDate(mmyyyy) {
        if (mmyyyy.match(/\d{1,2}\/\d{4}/)) {
            var month = mmyyyy.split("/")[0] -1;
            var year = mmyyyy.split("/")[1];
            var d = new Date(year, month);
            locale = "en-us",
            month = d.toLocaleString(locale, {
                month: "long"
            });
            year = d.toLocaleString(locale, {
                year: "numeric"
            });
            date = month + " " + year;
            //console.log(date);
        } else {
            date = 'Present';
        }
        return date;
    }