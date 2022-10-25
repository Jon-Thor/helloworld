

const Harry = {
    Firstname: "Harry",
    Lastname: "potter",
    haircolor: "Black",
}

const Hermione = {
    Firstname: "Hermione",
    Lastname: "Granger",
    color: "Brown",
}

const Ron = {
    Firstname: "Ron",
    Lastname: "Weasley",
    haircolor: "Red",
}

const HarryHTML = document.getElementById("Harry")
const HermioneHTML = document.getElementById("Hermione")
const RonHTML = document.getElementById("Ron")



colors = (c) => c;

fullnames = (a,b) => a + " " + b;

firstnamesfunc = (d) => d;

HarryHTML.innerHTML = firstnamesfunc(Harry.Firstname)
HermioneHTML.innerHTML = firstnamesfunc(Hermione.Firstname)
RonHTML.innerHTML = firstnamesfunc(Ron.Firstname )

var button = document.getElementById("btn")

let i = 1;

button.addEventListener("click", () =>{
    
    if(i == 1){
    HarryHTML.innerHTML = fullnames(Harry.Firstname , Harry.Lastname)
    HermioneHTML.innerHTML = fullnames(Hermione.Firstname , Hermione.Lastname)
    RonHTML.innerHTML = fullnames(Ron.Firstname , Ron.Lastname)
    
    HarryHTML.style.color = colors(Harry.haircolor)
    HermioneHTML.style.color = colors(Hermione.color)
    RonHTML.style.color = colors(Ron.haircolor)

    i = 2;
}else if (i = 2){
    HarryHTML.style.color = "Black"
    HermioneHTML.style.color = "Black"
    RonHTML.style.color = "Black"
    
    HarryHTML.innerHTML = firstnamesfunc(Harry.Firstname)
    HermioneHTML.innerHTML = firstnamesfunc(Hermione.Firstname)
    RonHTML.innerHTML = firstnamesfunc(Ron.Firstname)

    i = 1;
}

    
})





