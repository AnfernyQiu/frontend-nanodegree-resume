/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio={
    "name":"Rambo Qiu",
    "role":"Frontend Developer",
    "contact":{
        "mobile":"158-1884-1689",
        "email":"anfernyqiu@gmail.com",
        "twitter":"anfernyqiu@gmail.com",
        "GitHub":"https://github.com/AnfernyQiu",
        "blog":"anfernyqiu@gmail.com",
        "location":"China Guangzhou"
    },
        "bioPic":"images/fry.jpg",
        "welcomeMessage":"Welcome to my space",
        "skills":["Programming","Drawing","Design","Saving the World"]
};

var formattedName=HTMLheaderName.replace("%data%",bio.name);
var formattedRole=HTMLheaderRole.replace("%data%",bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var mobile=HTMLmobile.replace("%data%",bio.contact.mobile);
var email=HTMLemail.replace("%data%",bio.contact.email);
var twitter=HTMLtwitter.replace("%data%",bio.contact.twitter);
var Github=HTMLgithub.replace("%data%",bio.contact.GitHub);
var blog=HTMLblog.replace("%data%",bio.contact.blog);
var locationMy=HTMLlocation.replace("%data%",bio.contact.location);
var picture=HTMLbioPic.replace("%data%",bio.bioPic);
var welcomeMsg=HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);


$("#topContacts").append(mobile)
                 .append(email)
                 .append(twitter)
                 .append(Github)
                 .append(blog)
                 .append(locationMy);

var TotalSkill=$.map(bio.skills,function(skill,i){
    return HTMLskills.replace("%data%",skill);
});


//HTMLskillsStart.html(TotalSkill);

$("#header").append(picture)
            .append(welcomeMsg)
            .append(HTMLskillsStart);

$("#skills").html(TotalSkill);