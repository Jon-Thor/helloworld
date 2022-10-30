

const Harry = {
    Firstname: "Harry",
    Lastname: "potter",
    haircolor: "black",
}

const Hermione = {
    Firstname: "Hermione",
    Lastname: "Granger",
    haircolor: "brown",
}

const Ron = {
    Firstname: "Ron",
    Lastname: "Weasley",
    haircolor: "red",
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

/*Second project*/
destructwizards = (wiz1,wiz2,wiz3) => {
    var {Firstname: harryfirstname, Lastname: harrylastname} =wiz1
    var {Firstname: hermionefirstname, Lastname: hermionelastname} =wiz2
    var {Firstname: ronfirstname, Lastname: ronlastname} =wiz3

    const Harryfullname = harryfirstname + " " + harrylastname;
    const Hermionefullname = hermionefirstname  + " " +  hermionelastname;
    const Ronfullname = ronfirstname + " " +  ronlastname;

    return({
        Harryfullname: Harryfullname,
        Hermionefullname: Hermionefullname,
        Ronfullname: Ronfullname,
    })
}


const renderallwizards = () => {
    var i = 0;
    const newcolors = [Harry.haircolor,Hermione.haircolor,Ron.haircolor]
    const allthewizard = destructwizards(Harry,Hermione,Ron)
    console.log(allthewizard)
    const wizardlist = [allthewizard]
    wizardlist.forEach(wizard => console.log(wizard))
    wizardlist.forEach((wizard) => {
        for(let names in wizard){
        let wizardElement = document.createElement("li");
        wizardElement.textContent = allthewizard[names]
        wizardElement.style.cssText = `color: ${newcolors[i]}`
        document.body.appendChild(wizardElement)
        i++
    }
    })
}

renderallwizards()
renderallwizards()

/*Second project*/

const user1 = {
    name: "Paul",
    age: 20,
    salary: 60000,
}

const user2 = {
    name: "Lisa",
    age: 30,
    salary: 90000,
}

const average = (person1, person2) =>{
    var {age: persononeage,salary: person1salary} = person1
    

    var {age: persontwoage,salary: person2salary} = person2

    const avgage = (persononeage + persontwoage) / 2;
    const avgsalary = (person1salary + person2salary) / 2;

    return({
        avgage: avgage,
        avgsalary: avgsalary,
    })
    
}

const averageobject = average(user1,user2)
console.log(averageobject)