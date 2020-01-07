function createProfessionals(){
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4 && xhr.status === 200){
            const responseJSON = JSON.parse(xhr.response);
            const container = document.querySelector(".skill-container ul");
            for (let i = 0; i < responseJSON.length; i++) {
                const li = document.createElement("li");
                const name = document.createElement("span");
                const progressbar = document.createElement("progress");
                const percentage = document.createElement("span");

                name.classList.add("right");
                name.textContent = responseJSON[i]["name"];
                progressbar.max = 100;
                progressbar.value = responseJSON[i]["progress"];
                percentage.textContent = `${responseJSON[i]["progress"]}%`;
                percentage.classList.add("left");
    
                li.appendChild(name);
                li.appendChild(progressbar);
                li.appendChild(percentage);
                container.appendChild(li);
            }
        }
    };
    xhr.open("GET", "../resources/professionals.json");
    xhr.send();
}

function fadeIn(){
    const skill = document.querySelector(".skill-container");
    const portfolio = document.querySelector(".portfolio-item");
    const timeline = document.querySelector(".timeline");
    const experience = document.querySelectorAll(".experience-container");
    const contact = document.querySelector(".contact-card");
    if( window.pageYOffset + document.documentElement.clientHeight >= skill.offsetTop && document.documentElement.clientHeight < skill.offsetTop) skill.classList.add("visible");
    if( window.pageYOffset + document.documentElement.clientHeight >= portfolio.offsetTop && document.documentElement.clientHeight < portfolio.offsetTop) portfolio.classList.add("visible");
    for (let i = 0; i < experience.length; i++){
        console.log(experience[i].offsetParent);
        if( window.pageYOffset + document.documentElement.clientHeight >= experience[i].offsetTop + timeline.offsetTop) experience[i].classList.add("visible");
    }
    if( window.pageYOffset + document.documentElement.clientHeight >= contact.offsetTop ) contact.classList.add("visible");
    // portfolio
}

window.onload = createProfessionals;
window.addEventListener("scroll", fadeIn );

