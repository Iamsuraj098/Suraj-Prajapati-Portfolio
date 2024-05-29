var rotate = document.getElementsByClassName("common");
var uparrow= document.getElementsByClassName("fa-solid fa-angle-down");
var detail = document.getElementsByClassName("detail");
var main = document.getElementsByTagName("main");
var move = document.getElementsByClassName("explanation");
const a = [0, 0, 0, 0, 0];
const b = [0, 0, 0, 0, 0];
const flag = [0, 0, 0, 0, 0];

function skill(){
    let text = "<h3>Frontend</h3> <p>HTML, CSS, JavaScript, React</p> <h3>Backend</h3> <p>JDBC, DBMS(My SQL),  JSP, Servlet, Spring MVC, Spring ORM</p> <h3>Tools</h3> <p>Eclipse J2EE, VS Code, PyCharm, Figma</p> <h3>Other Programming</h3> <p>Java, C, Python, Data Structure, OOPs </p> <h3>Soft Skill</h3><p>Good - Analytical Troubleshooting, Collaborative Team Player, Communication</p>";
    if(a[0]==0){
        a[0] = 1;
        uparrow[0].style.transition = "0.5s";
        uparrow[0].style.rotate = "180deg";
        if(flag[0] == 0){
            flag[0] = 1;
            rotate[0].style.borderBottom = "0px";
            detail[0].style.padding = "0% 0% 0% 3%";
            detail[0].innerHTML += text;
            detail[0].style.borderBottom = "1px solid rgb(199, 199, 199)";
        }
    }
    else{
        b[0] = 0;
        a[0] = 0;
        uparrow[0].style.transition = "0.5s";
        uparrow[0].style.rotate = "0deg";
        flag[0] = 0;
        rotate[0].style.borderBottom = "1px solid rgb(199, 199, 199)";
        detail[0].style.padding = "0%";
        detail[0].innerHTML -= text;
        detail[0].innerHTML = "";
        detail[0].style.borderBottom = "0px";
    }
}
rotate[0].addEventListener("mousedown", function(){
    skill();
})

function project(){
    let text1 = "<h3>Solar System Based On Virtual Reality</h3><p>Associated with AKTU</p><p>Duration: Sep 2023 - Dec 2023</p> <p>Description: To make education easy and better experience regarding how solor system work in 3D way</p> <p>Tool: Unity Game Engin and VS Code</p> <p>Language: C#</p> <p>Hardware: VR Player</p> <p>Team Member names: Siddhant, Shivansh, Sagar</p>";
    let text_link1 = "<p>GitHub Link</p>";
    let result1 = text_link1.link("#");
    let text2 = "<h3>Desktop Assisant</h3> <p>Associated with AKTU</p><p>Duration: Sep 2022 - Jan 2023</p> <p>Description: We make a voice assistant like google assistant but it for the laptop and pc. Here we commands like open wordpad or any system application and live google search. These all operation perform through the voice</p><p>Language : Python</p> <p>IDE used: PyCharm</p> <p>Team Member names: Sunny</p>";
    let text_link2 = "<p>GitHub Link</p>"
    let result2 = text_link2.link("https://github.com/Iamsuraj098/Desktop-Assistants");
    let text3 = "<h3>Portfolio</h3><p>Language: HTML, CSS, JavaScript</p><p>IDE use: VS Code</p>";
    let text_link3 = "<p>GitHub Link</p>";
    let result3 = text_link3.link("https://github.com/Iamsuraj098/Suraj-Prajapati-Portfolio");
    if(a[1]==0){
        uparrow[1].style.transition = "0.5s";
        uparrow[1].style.rotate = "180deg";
        if(flag[1] == 0){
            flag[1] = 1;
            rotate[1].style.borderBottom = "0px";
            detail[1].style.padding = "0% 0% 0% 3%";
            detail[1].innerHTML += text1;
            detail[1].innerHTML += result1;
            detail[1].innerHTML += text2;
            detail[1].innerHTML += result2;
            detail[1].innerHTML += text3;
            detail[1].innerHTML += result3;
            detail[1].style.borderBottom = "1px solid rgb(199, 199, 199)";
        }
        a[1] = 1;
    }
    else{
        a[1] = 0;
        b[1] = 0;
        uparrow[1].style.transition = "0.5s";
        uparrow[1].style.rotate = "0deg";
        flag[1] = 0;
        rotate[1].style.borderBottom = "1px solid rgb(199, 199, 199)";
        detail[1].style.padding = "0%";
        detail[1].innerHTML -= text1;
        detail[1].innerHTML -= text2;
        detail[1].innerHTML -= text3;
        detail[1].innerHTML = "";
        detail[1].style.borderBottom = "0px";
    }
}
rotate[1].addEventListener("mousedown", function(){
    project();
})

function experience(){
    let text = "<h3>Internships</h3> <h4>Fronted Development: Oasis Infobyte</h4> <p> Duration: Sep-Oct 2023 <br> Description: Here I got 4 task which i had completed in 1 month.</p>;
    if(a[2]==0){
        uparrow[2].style.transition = "0.5s";
        uparrow[2].style.rotate = "180deg";
        if(flag[2] == 0){
            flag[2] = 1;
            rotate[2].style.borderBottom = "0px";
            detail[2].style.padding = "0% 0% 0% 3%";
            detail[2].innerHTML += text;
            detail[2].style.borderBottom = "1px solid rgb(199, 199, 199)";
        }
        a[2] = 1;
    }
    else{
        a[2] = 0;
        b[2] = 0;
        uparrow[2].style.transition = "0.5s";
        uparrow[2].style.rotate = "0deg";
        flag[2] = 0;
        rotate[2].style.borderBottom = "1px solid rgb(199, 199, 199)";
        detail[2].style.padding = "0%";
        detail[2].innerHTML -= text;
        detail[2].innerHTML = "";
        detail[2].style.borderBottom = "0px";
    }
}
rotate[2].addEventListener("mousedown", function(){
    experience();
})

function education(){
    let text = "<h3>Bacholore of Technology (Pursuing)</h3> <p>Dr. A.P.J Abdul Kalam University(AKTU) Lucknow U.P</p> <h3>Intermediate  (2018-20)</h3> <p>Holy Child Academy Ruhhata Jaunpur</p> <h3>High School  (2016-18)</h3> <p>Surya Bali Shingh Public School Miyapur Jaunpur</p>";
    if(a[3]==0){
        uparrow[3].style.transition = "0.5s";
        uparrow[3].style.rotate = "180deg";
        if(flag[3] == 0){
            flag[3] = 1;
            rotate[3].style.borderBottom = "0px";
            detail[3].style.padding = "0% 0% 0% 3%";
            detail[3].innerHTML += text;
            detail[3].style.borderBottom = "1px solid rgb(199, 199, 199)";
        }
        a[3] = 1;
    }
    else{
        a[3] = 0;
        b[3] = 0;
        uparrow[3].style.transition = "0.5s";
        uparrow[3].style.rotate = "0deg";
        flag[3] = 0;
        rotate[3].style.borderBottom = "1px solid rgb(199, 199, 199)";
        detail[3].style.padding = "0%";
        detail[3].innerHTML -= text;
        detail[3].innerHTML = "";
        detail[3].style.borderBottom = "0px";
    }
}
rotate[3].addEventListener("mousedown", function(){
    education();
})

function certificate(){
    let text = "<h3>Certification in Frontend Development</h3> <p>Udemy Course</p> <h3>Certification in Data Base Management System</h3> <p>Associated with AKTU</p> <h3>Certification in Python Language</h3> <p>Associated with AKTU</p> <h3>Certification in C Language</h3> <p>Associated with AKTU</p> <h3>Certification in Data Structure</h3> <p>Associated with AKTU</p><h3>Certification in Java</h3> <p>Associated with CRC Training</p>";
    if(a[4]==0){
        uparrow[4].style.transition = "0.5s";
        uparrow[4].style.rotate = "180deg";
        if(flag[4] == 0){
            flag[4] = 1;
            rotate[4].style.borderBottom = "0px";
            detail[4].style.padding = "0% 0% 0% 3%";
            detail[4].innerHTML += text;
            detail[4].style.borderBottom = "1px solid rgb(199, 199, 199)";
        }
        a[4] = 1;
    }
    else{
        a[4] = 0;
        b[4] = 0;
        uparrow[4].style.transition = "0.5s";
        uparrow[4].style.rotate = "0deg";
        flag[4] = 0;
        rotate[4].style.borderBottom = "1px solid rgb(199, 199, 199)";
        detail[4].style.padding = "0%";
        detail[4].innerHTML -= text;
        detail[4].innerHTML = "";
        detail[4].style.borderBottom = "0px";
    }
}

rotate[4].addEventListener("mousedown", function(){
    certificate();
})

function change1(){
    if(b[0]==0){
        skill();
        window.scroll({
            top: 670,
            behavior: "smooth",
        });
        b[0] = 1;
    }
}
function change2(){
    project();
    if(b[1]==0){
        window.scroll({
            top: 740,
            behavior: "smooth",
        });
        b[1] = 1
    }
}
function change3(){
    experience();
    if(b[2]==0){
        window.scroll({
            top: 800,
            behavior: "smooth",
        });
        b[2] = 1
    }
}
function change4(){
    education();
    if(b[3]==0){
        window.scroll({
            top: 850,
            behavior: "smooth",
        });
        b[3] = 1
    }
}
function change5(){
    certificate();
    if(b[4]==0){
        window.scroll({
            top: 900,
            behavior: "smooth",
        });
        b[4] = 1
    }
}
