const showSkills = document.querySelector("#showSkills");
const showTraining = document.querySelector("#showTraining");
const skills = document.querySelector("#Skills");
const training = document.querySelector("#Training");
const hobbies = document.querySelector("#Hobbies");
const aSkill = document.querySelector("#aSkill");
const aTraining = document.querySelector("#aTraining");
const hobbiesEnlace = document.querySelector("#hobbiesEnlace");
const trainigEnlace = document.querySelector("#trainigEnlace");
const aboutMeEnlace = document.querySelector("#aboutMeEnlace");


const defaultStyle = "2px solid #cdcdcd";

function showBottom(obj){
    skills.style.borderBottom=defaultStyle;
    training.style.borderBottom=defaultStyle;
    hobbies.style.borderBottom=defaultStyle;
    obj.style.borderBottom="5px solid";
}

// OCULTAR
function ocultarSkills(){
    showSkills.style.display="none";
}
function ocultarTrainig(){
    showTraining.style.display="none";
}
function mostrarInformacion(obj,dis){
    obj.style.display=dis;
}
function cambiarColorLetra(argAhref){
    aSkill.style.color="#fff";
    aTraining.style.color="#fff";
    argAhref.style.color="rgb(205 205 205)";
}
function mostrarInformacionSkill(){
    ocultarTrainig();
    showBottom(skills);
    cambiarColorLetra(aSkill);
    mostrarInformacion(showSkills,"grid");
}
function mostrarInformacionTraining(){
    ocultarSkills();
    showBottom(training);
    cambiarColorLetra(aTraining);
    mostrarInformacion(showTraining,"flex");
}

// INFORMACION
skills.addEventListener("click", mostrarInformacionSkill);
training.addEventListener("click", mostrarInformacionTraining);

// ENLACE
hobbiesEnlace.addEventListener("click", mostrarInformacionTraining);
trainigEnlace.addEventListener("click", mostrarInformacionTraining);
aboutMeEnlace.addEventListener("click", mostrarInformacionSkill);