var name = "Ben Colborn";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Technical Writer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);