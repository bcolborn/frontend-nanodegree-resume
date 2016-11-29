var resumeData =
"https://raw.githubusercontent.com/bcolborn/frontend-nanodegree-resume/master/js/resumeBuilder.json";

$.getJSON(resumeData, {
    format: "json"
}).done(function (data) {
    console.log(data.bio.role);
    
    var name = data.bio.name;
    var role = data.bio.role;
    
    var fmtRole = HTMLheaderRole.replace("%data%", role);
    $("#header").append(fmtRole);
});

var fmtName = HTMLheaderName.replace("%data%", name);
$("#header").append(fmtName);