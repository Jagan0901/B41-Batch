var header           = document.createElement("h1");
header.innerHTML     = "OBJECTS AND ITS INTERNAL REPRESENTATION IN JAVASCRIPT";
var subHeader3       = document.createElement("h6");
subHeader3.innerHTML = ` Object Definition `;
var para3            = document.createElement("p");
para3.innerHTML      = `A Javascript object is a collection of named values having state and behaviour.
For instance: Person, Car, Bike, Pen, Computer,etc…,
`;
var subHeader4       = document.createElement("h6");
subHeader4.innerHTML = "Let’s take an example :"
var para4            = document.createElement("p");
para4.innerHTML      = `Properties will be firstName, lastName, age, nature and eyecolor and Value will be Stefan, Salvatore, 168, Vampire and blue. In Javascript we write,
`;
var para5            = document.createElement("p");
para5.innerHTML      = `const person = {
    firstName =”Stefan” ;
    lastName = “Salvatore” ;
    age           = 168 ;
    nature     = “Vampire” ; 
    eyecolor = “blue” ; 
    }

`;
subHeader3.append(para3);
subHeader4.append(para4);
subHeader4.append(para5);
header.append(subHeader3);
header.append(subHeader4);
document.body.append(header);