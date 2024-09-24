const rotate = document.getElementsByClassName("common");
const uparrow = document.getElementsByClassName("fa-solid fa-angle-down");
const detail = document.getElementsByClassName("detail");
const main = document.getElementsByTagName("main");
const move = document.getElementsByClassName("explanation");
const a = [0, 0, 0, 0, 0];
const b = [0, 0, 0, 0, 0];
const flag = [0, 0, 0, 0, 0];

const sections = [
    {
        text: "<h3>Frontend</h3> <p>HTML, CSS, JavaScript, React</p> <h3>Backend</h3> <p>JDBC, DBMS, MySQL,  JSP, Servlet, Spring Boot(Pursuing)</p> <h3>Tools</h3> <p>VS Code, PyCharm, Figma, Eclipse</p> <h3>Programming</h3> <p>Java, C, Python, Data Structure, OOPs </p> <h3>Interpersonal Skill</h3><p>Communication skill, Team working skill, Problem solving and logic building skill</p>",
        element: rotate[0],
        arrow: uparrow[0],
        detail: detail[0],
        flagIndex: 0,
    },
    {
        text: `<h3>AdoptEase</h3>
               <p>Java Web Development Training</p>
               <p>Organisation: CRC Training</p>
               <p>Duration: Jul 2024 - Aug 2024</p> 
               <p>Description: Developed a comprehensive platform to connect pet adopters with pets while offering
                premium pet care products. Streamlined the adoption process and integrated supply management.</p> 
               <p>Tool: Eclipse</p> <p>Language: HTML, CSS, Bootstrap, Java, JDBC, JSP, Servlet, MySql.</p> 
               <p>GitHub Link: <a href="https://github.com/Iamsuraj098/Suraj-Prajapati-Portfolio">Solar System</a></p>
               <h3>Solar System Based On Virtual Reality</h3>
               <p>Associated with AKTU</p><p>Duration: Sep 2023 - Dec 2023</p> 
               <p>Description: To make education easy and better experience regarding how solor system work in 3D way</p> 
               <p>Tool: Unity Game Engine and VS Code</p> <p>Language: C#</p> 
               <p>Hardware: VR Player</p> <p>Team Member names: Siddhant, Shivansh, Sagar</p>
               <p>GitHub Link: <a href="https://github.com/Iamsuraj098/Suraj-Prajapati-Portfolio">Solar System</a></p>
               <h3>Desktop Assistant</h3> 
               <p>Associated with AKTU</p><p>Duration: Sep 2022 - Jan 2023</p> 
               <p>Description: We make a voice assistant like google assistant but it for the laptop and pc. Here we commands like open wordpad or any system application and live google search. These all operation perform through the voice</p><p>Language : Python</p> <p>IDE used: PyCharm</p> <p>Team Member names: Sunny</p>
               <p>GitHub Link: <a href="https://github.com/Iamsuraj098/Desktop-Assistants">Desktop Assistant</a></p>
               <h3>Portfolio</h3>
               <p>Language: HTML, CSS, JavaScript</p>
               <p>IDE use: VS Code</p>
               <p>GitHub Link: <a href="https://github.com/Iamsuraj098/Suraj-Prajapati-Portfolio">Portfolio</a></p>`,
        element: rotate[1],
        arrow: uparrow[1],
        detail: detail[1],
        flagIndex: 1,
    },
    {
        text: "<h3>Internships</h3> <h4>Fronted Development: Oasis Infobyte</h4> <p> Duration: Sep-Oct 2023 <br> Description: Here I got 4 task which i had completed in 1 month. Best Task was to make a Login Page</p> <h3>Jobs</h3> <p>Fresher</p>",
        element: rotate[2],
        arrow: uparrow[2],
        detail: detail[2],
        flagIndex: 2,
    },
    {
        text: "<h3>Bachelor of Technology (Pursuing)</h3> <p>Dr. A.P.J Abdul Kalam University(AKTU) Lucknow U.P</p> <h3>Intermediate (2018-20)</h3> <p>Holy Child Academy Ruhhata Jaunpur</p> <h3>High School (2016-18)</h3> <p>Surya Bali Singh Public School Miyapur Jaunpur</p>",
        element: rotate[3],
        arrow: uparrow[3],
        detail: detail[3],
        flagIndex: 3,
    },
    {
        text: "<h3>Certification in Frontend Development</h3> <p>Udemy Course</p> <h3>Certification in Data Base Management System</h3> <p>Associated with AKTU</p> <h3>Certification in Python Language</h3> <p>Associated with AKTU</p> <h3>Certification in C Language</h3> <p>Associated with AKTU</p> <h3>Certification in Data Structure</h3> <p>Associated with AKTU</p><h3>Certification in Java</h3> <p>Associated with CRC Training</p>",
        element: rotate[4],
        arrow: uparrow[4],
        detail: detail[4],
        flagIndex: 4,
    },
];

function toggleSection(index) {
    const section = sections[index];
    if (a[index] === 0) {
        a[index] = 1;
        section.arrow.style.transition = "0.5s";
        section.arrow.style.transform = "rotate(180deg)";
        if (flag[index] === 0) {
            flag[index] = 1;
            section.element.style.borderBottom = "0px";
            section.detail.style.padding = "0% 0% 0% 3%";
            section.detail.innerHTML += section.text;
            section.detail.style.borderBottom = "1px solid rgb(199, 199, 199)";
        }
    } else {
        a[index] = 0;
        b[index] = 0;
        section.arrow.style.transition = "0.5s";
        section.arrow.style.transform = "rotate(0deg)";
        flag[index] = 0;
        section.element.style.borderBottom = "1px solid rgb(199, 199, 199)";
        section.detail.style.padding = "0%";
        section.detail.innerHTML = "";
        section.detail.style.borderBottom = "0px";
    }
}

sections.forEach((section, index) => {
    section.element.addEventListener("mousedown", () => toggleSection(index));
});

function scrollToSection(index, offset) {
    if (b[index] === 0) {
        toggleSection(index);
        window.scroll({
            top: offset,
            behavior: "smooth",
        });
        b[index] = 1;
    }
}

function change1() { scrollToSection(0, 670); }
function change2() { scrollToSection(1, 740); }
function change3() { scrollToSection(2, 800); }
function change4() { scrollToSection(3, 850); }
function change5() { scrollToSection(4, 900); }
