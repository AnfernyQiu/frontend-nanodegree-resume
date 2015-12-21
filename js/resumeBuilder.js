/*
This is empty on purpose! Your code to build the resume will go here.
 */
'use strict';
var bio={
    "name":"Rambo Qiu",
    "role":"Frontend Developer",
    "contacts":{
        "mobile":"158-1884-1689",
        "email":"anfernyqiu@gmail.com",
        "twitter":"anfernyqiu@gmail.com",
        "github":"https://github.com/AnfernyQiu",
        "blog":"anfernyqiu@gmail.com",
        "location":"Guangzhou China"
    },
        "biopic":"images/myImage.jpg",
        "welcomeMessage":"Welcome to my space, and have fun!",
        "skills":["Programming","Drawing","Design","Saving the World"]
};

bio.display=function(bioObj){
    var formattedName=HTMLheaderName.replace("%data%",bioObj.name);
    var formattedRole=HTMLheaderRole.replace("%data%",bioObj.role);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    
    var mobile=HTMLmobile.replace("%data%",bioObj.contacts.mobile);
    var email=HTMLemail.replace("%data%",bioObj.contacts.email);
    var twitter=HTMLtwitter.replace("%data%",bio.contacts.twitter);
    var Github=HTMLgithub.replace("%data%",bioObj.contacts.github);
    var blog=HTMLblog.replace("%data%",bioObj.contacts.blog);
    var locationMy=HTMLlocation.replace("%data%",bioObj.contacts.location);
    var picture=HTMLbioPic.replace("%data%",bioObj.biopic);
    var welcomeMsg=HTMLwelcomeMsg.replace("%data%",bioObj.welcomeMessage);
    
    $("#topContacts").append(mobile)
                     .append(email)
                     .append(twitter)
                     .append(Github)
                     .append(blog)
                     .append(locationMy);
    
    $("#header").append(picture)
                .append(welcomeMsg);
    
    
    if(bioObj.skills.length>0){
        $("#header").append(HTMLskillsStart);
        var TotalSkill=$.map(bioObj.skills,function(skill,i){
            return HTMLskills.replace("%data%",skill);
        });
        $("#skills").html(TotalSkill);
    }

};


var work={
    "jobs":[
        {
            "employer":"Ericsson",
            "title":"Quality Engineer",
            "location":"Guangzhou",
            "dates":"April.2012--June.2015",
            "description":"Quality control and improvement for daily repair activity, train new employee."
        },
        {
            "employer":"Ericsson",
            "title":"Test and Repair Engineer",
            "location":"Beijing",
            "dates":"June.2001--March.2012",
            "description":"Test and repair hardware of RBS, repair return rate analyze and improvement."
        }
    ]
};

work.display=function(workObj){
    for(let workEntity of workObj.jobs){
        $("#workExperience").append(HTMLworkStart);
        var employer=HTMLworkEmployer.replace("%data%",workEntity.employer);
        var jobtitle=HTMLworkTitle.replace("%data%",workEntity.title);
        var workLocation=HTMLworkLocation.replace("%data%",workEntity.location);
        var workDates=HTMLworkDates.replace("%data%",workEntity.dates);
        var workDes=HTMLworkDescription.replace("%data%",workEntity.description);
        $(".work-entry:last").append(employer+jobtitle)
                             .append(workLocation)
                             .append(workDates)
                             .append(workDes);
    }
};

var projects={
    "projects":[
        {
            "title":"Build a webpage game",
            "dates":"2015-2016",
            "description":"Build a classic arcade game Clone",
            "images":[
                {
                    "url":"images/game-250_1x.jpg"
                },
                {
                    "url":"images/game2-250.jpg"
                }
            ]
        },
        {
            "title":"Build an interative resume",
            "dates":"2015-2016",
            "description":"Build an interative resume to show myself and my projects",
             "images":[
                 {
                     "url":"images/resume-250_1x.jpg"
                 },
                 {
                     "url":"images/resume2-250.jpg"
                 }
             ]
        },
        {
            "title":"Build a portfolio",
            "dates":"2015-2016",
            "description":"Build a portfolio website to show my projects",
            "images":[
                {
                    "url":"images/portfolio1-250.jpg"
                },
                {
                    "url":"images/portfolio2-250.jpg"
                }
            ]
        }
        
    ]  
};

 projects.display=function(projects){
        for(let pro of projects.projects){
            $("#projects").append(HTMLprojectStart);
            var proTitle=HTMLprojectTitle.replace("%data%",pro.title);
            var proDate=HTMLprojectDates.replace("%data%",pro.dates);
            var proDes=HTMLprojectDescription.replace("%data%",pro.description);
            $(".project-entry:last").append(proTitle+proDate+proDes);
            if (pro.images.length>0){
                for(let proImg of pro.images){
                    var proImage=HTMLprojectImage.replace("%data%",proImg.url);
                    $(".project-entry:last").append(proImage);
                }

            }
            
}
};

var education={
    "schools":[ 
        {
            "school":"South China University of Technology",
            "location":"Guangzhou",
            "majors":["electric and information technology","Tennis"],
            "date":2001,
            "degree":"BA",
            "url":"http://www.scut.edu.cn/"
        }
    ],
    "online courses":[
        {
            "title":"Udacity FrontEnd Nanodegree",
            "school":"Udacity",
            "date":2015,
            "url":"http://www.Udacity.com"
        }
    ]
};

education.display=function(eduObj){
    for(let school of eduObj.schools){
        $("#education").append(HTMLschoolStart);
        var schoolEdu=HTMLschoolName.replace("%data%",school.school);
            schoolEdu=schoolEdu.replace("#",school.url);
        var degreeEdu=HTMLschoolDegree.replace("%data%",school.degree);
        var dateEdu=HTMLschoolDates.replace("%data%",school.date);
        var locationEdu=HTMLschoolLocation.replace("%data%",school.location);
        var majorString='Major: ';
        for(let major of school.majors)        
            majorString+=` <i class="fa fa-star"></i>${major}`;
        majorString=`<em><br>${majorString}</em>`;
        
        $(".education-entry:last").append(schoolEdu+degreeEdu)
                                  .append(dateEdu)
                                  .append(locationEdu)
                                  .append(majorString);
    }
    
    for(let onlineCourse of eduObj["online courses"]){
        $("#education").append(HTMLonlineClasses);
        $("#education").append(HTMLschoolStart);
        var onlineTitle=HTMLonlineTitle.replace("%data%",onlineCourse.title);
        var onlineSchool=HTMLonlineSchool.replace("%data%",onlineCourse.school);
        var onlineDate=HTMLonlineDates.replace("%data%",onlineCourse.date);
        var onlineUrl=HTMLonlineURL.replace("%data%",onlineCourse.url);
        $(".education-entry:last").append(onlineTitle+onlineSchool)
                                  .append(onlineDate)
                                  .append(onlineUrl);  
        }
};

/*for(var job in work.jobs){
    if(work.jobs.hasOwnProperty(job)){
        $("#workExperience").append(HTMLworkStart);
        var employer=HTMLworkEmployer.replace("%data%",work["jobs"][job]["employer"]);
        var jobtitle=HTMLworkTitle.replace("%data%",work["jobs"][job]["title"]);
        var workLocation=HTMLworkLocation.replace("%data%",work["jobs"][job]["location"]);
        var workDates=HTMLworkDates.replace("%data%",work["jobs"][job]["dates"]);
        var workDes=HTMLworkDescription.replace("%data%",work["jobs"][job]["description"]);
        $(".work-entry:last").append(employer+jobtitle+workLocation+workDates+workDes);
    }
}

var locationizer=function(work_obj){
    var locArray=[];
    for(let job of work.jobs){
            if(job.location!==null){
                locArray.push(job.location);
            }
    }
    return locArray;
};

console.log(locationizer(work));
*/
/*var interButton='<button>ChangeName</button>';
$("#main").append(interButton);
var inName=function(_name){
    var interName;
    interName=_name.split(" ");
    interName[0]=interName[0][0].toUpperCase()+interName[0].slice(1).toLowerCase();
    interName[1]=interName[1].toUpperCase();
    var fullName=interName.join(" ");
    return fullName;
};

//console.log(inName("Rambo Qiu"));*/

work.display(work);
bio.display(bio);
projects.display(projects);
education.display(education);

$("#mapDiv").append(googleMap);


