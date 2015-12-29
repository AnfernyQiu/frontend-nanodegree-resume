/*
This is empty on purpose! Your code to build the resume will go here.
 */
'use strict';
var bio = {
    "name": "Rambo Qiu",
    "role": "Frontend Developer",
    "contacts": {
        "mobile": "158-1884-1689",
        "email": "anfernyqiu@gmail.com",
        "twitter": "anfernyqiu@gmail.com",
        "github": "https://github.com/AnfernyQiu",
        "blog": "anfernyqiu@gmail.com",
        "location": "Guangzhou China"
    },
    "biopic": "images/fry.jpg",
    "welcomeMessage": "Let's rock and roll! Music show will start at 10PM!",
    "skills": ["Never tired", "Deliver fun", "Fix the earth", "Saving the Universe"]
};

bio.display = function() {
    var bioObj=this;
    var formattedName = HTMLheaderName.replace("%data%", bioObj.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bioObj.role);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    var mobile = HTMLmobile.replace("%data%", bioObj.contacts.mobile);
    var email = HTMLemail.replace("%data%", bioObj.contacts.email);
    var twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var Github = HTMLgithub.replace("%data%", bioObj.contacts.github);
    var blog = HTMLblog.replace("%data%", bioObj.contacts.blog);
    var locationMy = HTMLlocation.replace("%data%", bioObj.contacts.location);
    var picture = HTMLbioPic.replace("%data%", bioObj.biopic);
    var welcomeMsg = HTMLwelcomeMsg.replace("%data%", bioObj.welcomeMessage);

    $("#topContacts").append(mobile)
        .append(email)
        .append(twitter)
        .append(Github)
        .append(blog)
        .append(locationMy);

    $("#header").append(picture)
        .append(welcomeMsg);


    if (bioObj.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        var TotalSkill = $.map(bioObj.skills, function(skill, i) {
            return HTMLskills.replace("%data%", skill);
        });
        $("#skills").html(TotalSkill);
    }

    // display footer contacts
    $("#footerContacts").append(mobile)
        .append(email)
        .append(Github);

};


var work = {
    "jobs": [{
        "employer": "Ericsson",
        "title": "Quality Engineer",
        "location": "Guangzhou",
        "dates": "April.2012--June.2015",
        "description": "Quality control and improvement for daily repair activity, train new employee, develop and maintain software tools."
    }, {
        "employer": "Ericsson",
        "title": "Test and Repair Engineer",
        "location": "Beijing",
        "dates": "June.2001--March.2012",
        "description": "Test and repair hardware of RBS, repair return rate analyze and improvement, knowledge and skills sharing."
    }]
};

work.display = function() {
    var workObj=this;
    for (let workEntity of workObj.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var employer = HTMLworkEmployer.replace("%data%", workEntity.employer);
        var jobtitle = HTMLworkTitle.replace("%data%", workEntity.title);
        var workLocation = HTMLworkLocation.replace("%data%", workEntity.location);
        var workDates = HTMLworkDates.replace("%data%", workEntity.dates);
        var workDes = HTMLworkDescription.replace("%data%", workEntity.description);
        $(".work-entry:last").append(employer + jobtitle)
            .append(workLocation)
            .append(workDates)
            .append(workDes);
    }
};

var projects = {
    "projects": [{
            "title": "A webpage game",
            "dates": "2015-2016",
            "description": "Build a classic arcade game Frogger",
            "github":"#",
            "website":"#",
            "images": ["images/game-250_1x.jpg", "images/game2-250.jpg"]
        }, {
            "title": "An interative resume",
            "dates": "2015-2016",
            "description": "Build an interative resume to show myself and my projects",
            "github":"#",
            "website":"#",
            "images": ["images/resume-250_1x.jpg", "images/resume2-250.jpg"]
        }, {
            "title": "A portfolio website",
            "dates": "2015-2016",
            "description": "Build a portfolio website to show my projects",
            "github":"#",
            "website":"#",
            "images": ["images/portfolio1-250.jpg", "images/portfolio2-250.jpg"]
        }

    ]
};


projects.display=function(){
    var projects=this;
    for (let pro of projects.projects){
        $("#projects").append(HTMLporjectStartPanel);
        var proTitle = HTMLprojectTitlePanel.replace("%data%", pro.title);
        var proLinkGit = HTMLprojectGithub.replace("%gdata%", pro.github);
        var proLinkWeb = HTMLprojectWebsite.replace("%wdata%", pro.website);
        var proLink = $(proLinkGit+proLinkWeb);
        var proHead = $(proTitle);
        proHead.append(proLink);

        var proBody = HTMLprojectBodyPanel.replace("%dates%", pro.dates);
        proBody = proBody.replace("%descpt%", pro.description);
        $(".panel-success:last").append(proHead)
                                .append(proBody);
        if (pro.images.length > 0) {
            for (let proImg of pro.images) {
                var proImage = HTMLprojectImagePanel.replace("%img%", proImg);
                $(".panel-success:last").find(".panel-body")
                                        .append(proImage);
            }

        }
    }
};

var education = {
    "schools": [{
        "name": "South China University of Technology",
        "location": "Guangzhou",
        "majors": ["electric and information technology", "Tennis"],
        "dates": "1997-2001",
        "degree": "BA",
        "url": "http://www.scut.edu.cn/"
    }],
    "onlineCourses": [{
        "title": "Udacity FrontEnd Nanodegree",
        "school": "Udacity",
        "date": "2015-2016",
        "url": "http://www.Udacity.com"
    }]
};

education.display = function() {
    var eduObj=this;
    for (let school of eduObj.schools) {
        $("#education").append(HTMLschoolStart);
        var schoolEdu = HTMLschoolName.replace("%data%", school.name);
        schoolEdu = schoolEdu.replace("#", school.url);
        var degreeEdu = HTMLschoolDegree.replace("%data%", school.degree);
        var dateEdu = HTMLschoolDates.replace("%data%", school.dates);
        var locationEdu = HTMLschoolLocation.replace("%data%", school.location);
        var majorString = 'Major: ';
        for (let major of school.majors)
            majorString += ` <i class="fa fa-star"></i>${major}`;

        majorString = `<em><br>${majorString}</em>`;

        $(".education-entry:last").append(schoolEdu + degreeEdu)
            .append(dateEdu)
            .append(locationEdu)
            .append(majorString);
    }

    for (let onlineCourse of eduObj.onlineCourses) {
        $("#education").append(HTMLonlineClasses);
        $("#education").append(HTMLschoolStart);
        var onlineTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
        var onlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
        var onlineDate = HTMLonlineDates.replace("%data%", onlineCourse.date);
        var onlineUrl = HTMLonlineURL.replace("%data%", onlineCourse.url);
        $(".education-entry:last").append(onlineTitle + onlineSchool)
            .append(onlineDate)
            .append(onlineUrl);
    }
};

//Below JSON object and it's function are to deliver content to the infowindow.
var metaLocation = {
    "location": [{
            "name": "Beijing",
            "description": "Beijing is the capital of the People's Republic of China and one of the most populous cities in the world. Its total population in 2013 was 21,150,000.[8] The city proper is the 3rd most populous in the world. The metropolis, located in northern China, is governed as a direct-controlled municipality under the national government with 16 urban, suburban, and rural districts.[9] Beijing Municipality is surrounded by Hebei Province with the exception of neighboring Tianjin Municipality to the southeast; together the three divisions form the Jingjinji metropolitan region and the national capital region of China.",
            "images": [{
                "url": "images/Beijing.jpg"
            }]

        }, {
            "name": "Guangzhou",
            "description": "Guangzhou (also known as Canton, and less commonly as Kwangchow)[6] is the capital and largest city of Guangdong province in South China.[7] Located on the Pearl River, about 120 km (75 mi) north-northwest of Hong Kong and 145 km (90 mi) north of Macau, Guangzhou serves as an important national transportation hub and trading port.[8] One of the five National Central Cities,[9] it holds sub-provincial administrative status.",
            "images": [{
                "url": "images/Guangzhou.jpg"
            }]
        }

    ]
};

metaLocation.show = function(locationName) {
    var htmlString;
    for (let location of metaLocation["location"]) {
        if (location["name"] === locationName) {
            htmlString = `<div id="popcontent" class="popcontent">` +
                `<h2>${location["name"]}</h2><hr>` +
                `<img src="${location["images"][0]["url"]}" class="popimage">` +
                `<p>${location["description"]}</p></div>`;
        }
    }
    return htmlString;
}


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

console.log(inName("Rambo Qiu"));*/

work.display();
bio.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);