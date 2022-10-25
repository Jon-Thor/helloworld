

const Harry = {
    Firstname: "Harry",
    Lastname: "potter",
    haircolor: "Black",
}

const Hermione = {
    Firstname: "Hermione",
    Lastname: "Granger",
    haircolor: "Brown",
}

const Ron = {
    Firstname: "Ron",
    Lastname: "Weasley",
    haircolor: "Red",
}

const HarryHTML = document.getElementById("Harry")
const HermioneHTML = document.getElementById("Hermione")
const RonHTML = document.getElementById("Ron")



colors = (a,b,c) => {
    HarryHTML.style.color = a
    HermioneHTML.style.color = b
    RonHTML.style.color = c
}

fullnames = () => {
    HarryHTML.innerHTML = Harry.Firstname + " " + Harry.Lastname
    HermioneHTML.innerHTML = Hermione.Firstname + " " + Hermione.Lastname
    RonHTML.innerHTML = Ron.Firstname + " " + Ron.Lastname
};

firstnamesfunc = () => {
    HarryHTML.innerHTML = Harry.Firstname
    HermioneHTML.innerHTML = Hermione.Firstname
    RonHTML.innerHTML = Ron.Firstname
};

firstnamesfunc();

var button = document.getElementById("btn")

let i = 1;

button.addEventListener("click", () =>{
    
    if(i == 1){
    
        fullnames();
    
        colors(Harry.haircolor,Hermione.haircolor,Ron.haircolor)
        
        i = 2;
}else if (i = 2){
    colors("Black","Black","Black")
    
    firstnamesfunc();
    
    i = 1;
}

    
})