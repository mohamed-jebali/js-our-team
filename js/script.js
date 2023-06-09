// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede
// Consigli del giorno:
// Ragioniamo come sempre a step.
// Prima la logica in italiano e poi traduciamo in codice.
// E ricordiamoci che console.log() è nostro amico!


// Wayne Barnett     ounder & CEO      wayne-barnett-founder-ceo.jpg
// Angela Caroll     Chief Editor      angela-caroll-chief-editor.jpg
// Walter Gordon     Office Manager    walter-gordon-office-manager.jpg
// Angela Lopez      Social Media      Manager  angela-lopez-social-media-manager.jpg
// Scott Estrada     Developer         scott-estrada-developer.jpg
// Barbara Ramos     Graphic Designer  barbara-ramos-graphic-designer.jpg




// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

let teamMember = [

    {
        name: "Wayne Barnett",
        role: "founder e CEO",
        image: "wayne-barnett-founder-ceo.jpg",
    },

    {
        name: "Angela Caroll",
        role: "Chief Editor",
        image:  "angela-caroll-chief-editor.jpg",
    },
    {
        name: "Walter Gordon",
        role: "Office Manger",
        image:  "walter-gordon-office-manager.jpg",
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manger",
        image:  "angela-lopez-social-media-manager.jpg",
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        image:  "scott-estrada-developer.jpg",
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        image:  "barbara-ramos-graphic-designer.jpg",
    },
    
];

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

for (let i = 0; i < teamMember.length; i++) {
    console.log("name: ",teamMember[i].name);
    console.log("role: ",teamMember[i].role);
    console.log("image: ",teamMember[i].image);
    console.log("----------");
}


// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe



let ulElement = document.querySelector(".list");


for(let i = 0; i < teamMember.length; i++){
    
    let liElement = document.createElement("li");
    liElement.innerHTML = "name: " + teamMember[i].name;
    ulElement.appendChild(liElement);

    liElement = document.createElement("li");
    liElement.innerHTML = "role: " + teamMember[i].role;
    ulElement.appendChild(liElement);

    liElement = document.createElement("li");
    liElement.innerHTML = "image: " + teamMember[i].image;
    ulElement.appendChild(liElement);

    liElement = document.createElement("li");
    liElement.classList.add("mb-4","li-divider")
    ulElement.appendChild(liElement);
}

// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva

