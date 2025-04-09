let sections = document.querySelectorAll("div section");
let navlinks = document.querySelectorAll("header nav a");
// code for active class on click

$(document).on("click", "nav a", function () {
  $(this).addClass("active").siblings().removeClass("active");
});

// code for active class on scroll
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 200;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((link) => {
        link.classList.remove("active");
      });

      // Sélectionnez le lien de navigation correspondant et ajoutez-lui la classe "active"
      let correspondingLink = document.querySelector(
        "header nav a[href='#" + id + "']"
      );
      if (correspondingLink) {
        correspondingLink.classList.add("active");
      }
    }
  });
};

// function to add the stars
function Star() {
  let count = 800;
  let space = document.querySelector(".scene");
  let i = 0;
  while (i < count) {
    let star = document.createElement("i");
    let x = Math.floor(Math.random() * window.innerWidth);
    let y = Math.floor(Math.random() * window.innerHeight);
    let duration = Math.random() * 10;
    let size = Math.random() * 2;

    star.style.left = Math.floor(Math.random() * 99) + "%";
    star.style.top = Math.floor(Math.random() * 99) + "%";
    star.style.width = 1 + size + "px";
    star.style.height = 1 + size + "px";

    star.style.animationDuration = 5 + duration + "s";
    star.style.animationDelay = "10s";

    space.appendChild(star);
    i++;
  }
}

Star();

/// contact me function

var Send = document.getElementById("Send_Email");
Send.addEventListener("click", sendEmail);

function sendEmail() {
  var name = document.getElementById("name").value;
  var family_name = document.getElementById("family_name").value;
  var Emailadress = document.getElementById("Emailadress").value;
  var telephone = document.getElementById("tel").value;
  var Message = document.getElementById("Message").value;

  if (
    isValidString(name) &&
    isValidString(family_name) &&
    isValidEmail(Emailadress) &&
    isValidTel(telephone) &&
    isValidMessage(Message)
  ) {
    Email.send({
      SecureToken: "0d0a489e-457f-40ec-8ffe-f6d94d9a82ce",
      To: "faycalmeziani1@gmail.com",
      From: "cle.faycal26@gmail.com",
      Subject: "New Message from" + name + " " + family_name,
      Body:
        "Name: " +
        name +
        "<br> Family Name: " +
        family_name +
        "<br> Email : " +
        Emailadress +
        "<br> tel :" +
        telephone +
        "<br> Message: <br> " +
        Message,
    }).then((message) => alert(message));

    document.getElementById("name").value = "";
    document.getElementById("family_name").value = "";
    document.getElementById("Emailadress").value = "";
    document.getElementById("tel").value = "";
    document.getElementById("Message").value = "";
  }
}


// Projects Part
// var Projects = [
//   {
//     id: "1",
//     name: "Kerrili",
//     Category: "Web Design",
//     Client: "Teacher",
//     Project_date: "17/09/2023",
//     Project_url: "first link",
//     Details:
//       "this is bref details about the application",
//     images: ["./images/test.png"],
//   },
//   {
//     id: "2",
//     name: "GenCo èè1",
//     Category: "Web Application",
//     Client: "PFC jury ",
//     Project_date: "02/07/2023",
//     Project_url: "http:bdvgdvgv.com",
//     Details:
//       "sdjbcscjbjh<vcjvvgcdgvghvgvsdjbsqhbcjsqvchgkshgkcvhscvhgsqvjhsclkx,shcvsqcjyvqscbhjmvcuesg uy  nbgafaycak mezinaii",
//     images: ["./images/test3.png"],
//   },
//   {
//     id: "3",
//     name: "Flowers Shop",
//     Category: "Web Application",
//     Client: "Teacher",
//     Project_date: "03/02/2023",
//     Project_url: "http:bdvgdvgv.com",
//     Details:
//       "sdjbcscjbjh<vcjvvgcdgvghvgvsdjbsqhbcjsqvchgkshgkcvhscvhgsqvjhsclkx,shcvsqcjyvqscbhjmvcuesg uy  nbgafaycak mezinaii",
//     images: ["./images/test.png"],
//   },
//   {
//     id: "4",
//     name: "Kerrili 2 ",
//     Category: "Web Design",
//     Client: "Teacher",
//     Project_date: "17/09/2023",
//     Project_url: "http:bdvgdvgv.com",
//     Details:
//       "sdjbcscjbjh<vcjvvgcdgvghvgvsdjbsqhbcjsqvchgkshgkcvhscvhgsqvjhsclkx,shcvsqcjyvqscbhjmvcuesg uy  nbgafaycak mezinaii",
//     images: ["./images/test3.png"],
//   },
//   {
//     id: "5",
//     name: "Flowers Shop 3",
//     Category: "Web Application",
//     Client: "Teacher",
//     Project_date: "03/02/2023",
//     Project_url: "http:bdvgdvgv.com",
//     Details:
//       "sdjbcscjbjh<vcjvvgcdgvghvgvsdjbsqhbcjsqvchgkshgkcvhscvhgsqvjhsclkx,shcvsqcjyvqscbhjmvcuesg uy  nbgafaycak mezinaii",
//     images: ["./images/test3.png"],
//   },
// ];

// var Cards = document.getElementById("cards");
// var active_card = "1";
// var title = document.getElementById("title");
// var Category = document.getElementById("Category");
// var Client = document.getElementById("Client");
// var Project_date = document.getElementById("Project_date");
// var Project_url = document.getElementById("Project_url");
// var Details = document.getElementById("Details");
// var project_details = document.getElementById("project_details");

// function CreateCards() {
//   Projects.forEach((Project) => {
//     var img = Project.images["0"];
//     var div = document.createElement("div");
//     div.style.backgroundImage = "url(" + img + ")";
//     div.style.backgroundSize = "cover";
//     div.classList.add("card");
//     div.setAttribute("data-custom-id", Project.id);
//     Cards.appendChild(div);
//     if (Project.id === "1") {
//       div.classList.add("activecard");
//     }
//   });
// }

// function UpdateProprety(PropName, Propname) {
//   var p = PropName.querySelector("p");
//   if (p) {
//     PropName.removeChild(p);
//   }
//   newp = document.createElement("p");
//   newp.innerHTML += Projects[active_card][Propname];
//   PropName.appendChild(newp);
// }
// function UpdateLink(LinkName, Linkname) {
//   var a = LinkName.querySelector("a");
//   if (a) {
//     LinkName.removeChild(a);
//   }
//   newa = document.createElement("a");
//   newa.href = Projects[active_card][Linkname];
//   newa.innerHTML += Projects[active_card][Linkname];
//   LinkName.appendChild(newa);
// }

// CreateCards();

// // Swipping between projects

// var right_arrow = document.getElementById("right_arrow");
// var left_arrow = document.getElementById("left_arrow");
// var card_list = document.querySelectorAll(".card");
// var background_container = document.querySelector(".project_container");
// var translation = 0;
// var count = 0;

// right_arrow.addEventListener("click", () => {
//   if (count < 4) {
//     left_arrow.style.display = "block";
//     translation = translation - 210;
//     card_list.forEach((ele) => {
//       ele.classList.remove("activecard");
//       ele.style.transition = "transform 2s";
//       ele.style.transform = "translateX(" + translation + "px)";
//     });
//     card_list[count + 1].classList.add("activecard");
//     count++;
//     background_container.style.backgroundImage =
//       "url(" + Projects[count]["images"][0] + ")";
//     if (count == 4) {
//       right_arrow.style.display = "none";
//     }
//     active_card = count;
//     /// update informations
//     title.innerHTML = Projects[active_card].name;
//     // categoty
//     UpdateProprety(Category, "Category");
//     // client
//     UpdateProprety(Client, "Client");
//     // project date
//     UpdateProprety(Project_date, "Project_date");
//     // Project_url
//     UpdateLink(Project_url, "Project_url");
//     // details
//     UpdateProprety(Details, "Details");
//   }
// });
// left_arrow.addEventListener("click", () => {
//   if (count > 0) {
//     right_arrow.style.display = "block";
//     translation = translation + 210;
//     card_list.forEach((ele) => {
//       ele.classList.remove("activecard");
//       ele.style.transition = "transform 2s";
//       ele.style.transform = "translateX(" + translation + "px)";
//     });
//     card_list[count - 1].classList.add("activecard");
//     count--;
//     background_container.style.backgroundImage =
//       "url(" + Projects[count]["images"][0] + ")";
//     if (count == 0) {
//       left_arrow.style.display = "none";
//     }
//     active_card = count;
//     /// update informations
//     title.innerHTML = Projects[active_card].name;
//     // categoty
//     UpdateProprety(Category, "Category");
//     // client
//     UpdateProprety(Client, "Client");
//     // project date
//     UpdateProprety(Project_date, "Project_date");
//     // Project_url
//     UpdateLink(Project_url, "Project_url");
//     // details
//     UpdateProprety(Details, "Details");
//   }
// });

// // see mor btn 

// project_details.addEventListener('click',(e)=>{
//   e.preventDefault
//   alert('this functionality is not availble yet !  \n Thank you !  ')

// })


// project book 
/// book flipping papers

// const prevBtn = document.querySelector("#prev-btn");
// const nextBtn = document.querySelector("#next-btn");
// const book = document.querySelector("#book");
// const paper1 = document.querySelector("#p1");
// const paper2 = document.querySelector("#p2");
// const paper3 = document.querySelector("#p3");


// //event Listners
// prevBtn.addEventListener("click", getPrevPage);
// nextBtn.addEventListener("click", getNextpage);

// // logic
// let currentlocation = 1;
// let numOfpages = 4;
// let maxLocation = numOfpages + 1;

// function openbook() {
//   book.style.transform = "translateX(50%)";
//   prevBtn.style.transform = "translateX(-201px)";
//   nextBtn.style.transform = "translateX(201px)";
// }
// function closebook(isAtBegining) {
//   if (isAtBegining) {
//     book.style.transform = "translateX(0%)";
//   } else {
//     book.style.transform = "translateX(100%)";
//   }

//   prevBtn.style.transform = "translateX(0px)";
//   nextBtn.style.transform = "translateX(0px)";
// }
// function getNextpage() {
//   if (currentlocation < maxLocation) {
//     switch (currentlocation) {
//       case 1:
//         openbook();
//         paper1.classList.add("flipped");
//         paper1.style.zIndex = "1";
//         break;
//       case 2:
//         paper2.classList.add("flipped");
//         paper2.style.zIndex = "2";
//         break;
//       case 3:
//         paper3.classList.add("flipped");
//         paper3.style.zIndex = "3";
//         closebook();
//         break;
//       default:
//         throw new Error("unknown state");
//     }
//     currentlocation++;
//   }
// }
// function getPrevPage() {
//   if (currentlocation > 1) {
//     switch (currentlocation) {
//       case 2:
//         closebook(true);
//         paper1.classList.remove("flipped");
//         paper1.style.zIndex = "3";
//         break;
//       case 3:
//         paper2.classList.remove("flipped");
//         paper2.style.zIndex = "2";
//         break;
//       case 4:
//         openbook();
//         paper3.classList.remove("flipped");
//         paper3.style.zIndex = "1";
//         break;
//       default:
//         throw new Error("unknown state");
//     }
//     currentlocation--;
//   }
// }


 // Contact form
        const contactForm = document.getElementById('contactForm');
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            if (name && email && subject && message) {
                // Ici vous pouvez ajouter le code pour envoyer l'email
                // Par exemple avec EmailJS ou une requête AJAX
                
                Email.send({
                    SecureToken: "0d0a489e-457f-40ec-8ffe-f6d94d9a82ce",
                    To: 'faycalmeziani1@gmail.com',
                    From: email,
                    Subject: subject,
                    Body: `Nom: ${name}<br>Email: ${email}<br>Message: ${message}`
                }).then(
                    message => {
                        alert('Message envoyé avec succès!');
                        contactForm.reset();
                    }
                ).catch(
                    error => alert('Une erreur est survenue. Veuillez réessayer.')
                );
            } else {
                alert('Veuillez remplir tous les champs.');
            }
        });
      