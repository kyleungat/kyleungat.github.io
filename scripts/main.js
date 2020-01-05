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


window.onload = createProfessionals;


