let params = new URL(document.location).searchParams;
let id = params.get("id");

const productCardImg = document.querySelector(".imgUrl");
const productCardName = document.querySelector(".nameProduit");
const productCardDescription = document.querySelector(
  ".detailsProduit"
);
const productCardPrice = document.querySelector(".prixProduit");
const bearNumber = document.querySelector("#nombreDOurson");
const colorSelect = document.querySelector(".couleurProduit");


main();

function main() {
  checkIf404();
  getArticles();
  addToCart();
}

function checkIf404() {
  window.addEventListener("error", (e) => {
      let container = document.querySelector(".bg");
      container.innerHTML = `<p>Cette page n'existe pas. <a class="back-to-home" href="index.html">Retourner dans la boutique ?</a></p>`;
      container.style.padding = "40vh 0";
      container.style.fontSize = "26px";
      let backToHomeLink = document.querySelector(".back-to-home");
      backToHomeLink.style.textDecoration = "underline";
    },
    true
  );
}

function getArticles() {
  // On récupère uniquement le produit dont on a besoin via le paramètre dans la requête
  fetch(`http://localhost:3000/api/teddies/${id}`)
    .then(function (response) {
      return response.json();
    })
    .catch((error) => {
      let container = document.querySelector(".bg");
      container.innerHTML =
        "Nous n'avons pas réussi à afficher nos nounours. Avez-vous bien lancé le serveur local (Port 3000) ? <br>Si le problème persiste, contactez-nous.";
      container.style.textAlign = "center";
      container.style.padding = "45vh 0";
    })
    .then(function (resultatAPI) {
      // On place les données reçues via l'API aux bons endroits sur la page
      article = resultatAPI;
      productCardName.innerHTML = article.name;
      productCardImg.src = article.imageUrl;
      productCardDescription.innerText = article.description;

      // Formatage du prix pour l'afficher en euros
      article.price = article.price / 100;
      productCardPrice.innerText = new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR",
      }).format(article.price);

      let colorSelect = document.getElementById("color-select");
      for (let i = 0; i < article.colors.length; i++) {
        let option = document.createElement("option");
        option.innerText = article.colors[i];
        colorSelect.appendChild(option);
      }
    });
}

function addToCart() {
  const addToCartBtn = document.querySelector(".panierDescriptionAjout");
  const confirmation = document.querySelector(".added-to-cart-confirmation");
  const textConfirmation = document.querySelector(".confirmation-text");
  
  addToCartBtn.addEventListener("click", () => {
    if (bearNumber.value > 0 && bearNumber.value < 100) {
      // ------ Création du produit qui sera ajouté au panier
      let productAdded = {
        name: productCardName.innerHTML,
        price: parseFloat(productCardPrice.innerHTML),
        quantity: parseFloat(document.querySelector("#nombreDOurson").value),
        _id: id,
      };

      // ----------------- Gestion du localStorage
      let arrayProductsInCart = [];
      
      // Si le localStorage existe, on récupère son contenu, on l'insère dans le tableau arrayProductsInCart, puis on le renvoit vers le localStorage avec le nouveau produit ajouté.
      if (localStorage.getItem("products") !== null) {
        arrayProductsInCart = JSON.parse(localStorage.getItem("products"));
        
        
        // Si le LS est vide, on le crée avec le produit ajouté
      } 
        arrayProductsInCart.push(productAdded);
        localStorage.setItem("products", JSON.stringify(arrayProductsInCart));
      

      // Effets visuels lors d'un ajout au panier
      confirmation.style.visibility = "visible";
      textConfirmation.innerHTML = `Vous avez ajouté ${bearNumber.value} ours 🐻 à votre panier !`;
      setTimeout("location.reload(true);", 4000);
      textConfirmation.style.color="white";
    } else {
      confirmation.style.visibility = "visible";
      textConfirmation.style.background = "red";
      textConfirmation.style.border = "red";
      textConfirmation.style.color = "white";
      textConfirmation.style.whiteSpace = "normal";
      textConfirmation.innerText = `La quantité doit être comprise entre 1 et 99 unité`;
    }
  });
}















































//  let params = (new URL(document.location)).searchParams;
//   let _id = params.get('id'); // searchParamas = va chercher cet id specifique dans l'api et pas un autre.

// //index des const utilisées, document= DOM, querySelector = va chercher cette class ou cette id
// const imgCartDescription = document.querySelector(".imgUrl");
// const nomCartDescription = document.querySelector(".nameProduit");
// const detailsCartDescription = document.querySelector(".detailsProduit");
// const prixCartDescription = document.querySelector(".prixProduit");
// const nombreDOursonCartDesription = document.querySelector("#nombreDourson");
// const couleurCarteDescription = document.querySelector(".couleurProduit");

// affichageDescription ();

// function affichageDescription(){
//     //erreur404();
//     afficherProduit();
//     ajoutPanier();
// }

// // function erreur404(){
// //     window.addEventListener("error", (e) =>{
// //         let couvertureDeLaCart = document.querySelector("main");
// //         couvertureDeLaCart.innerHTML = `<h1 class="erreurMessage">Erreur 404 
// //         <a class="retourHomeLink" href="index.html">Retourner dans la boutique ?</a></h1>`;
// //         couvertureDeLaCart.style.padding ="50vh 1";
// //         couvertureDeLaCart.style.fontSize = "50px";
// //         let retourHomeLink = document.querySelector(".retourHomeLink");
// //         retourHomeLink.style.textDecoration = "underline";
// //     },
// //     true
// //   );
// // }

  
// function afficherProduit() {
//     // On récupère uniquement le produit dont on a besoin via le paramètre dans la requête
//     fetch(`http://localhost:3000/api/teddies/${_id}`)
//       .then(function (response) {
//         return response.json();
//       })
//       .catch((error) => {
//         let couvertureDeLaCart = document.querySelector(".couvertureDeLaCart");
//         couvertureDeLaCart.innerHTML =
//           "Nous n'avons pas réussi à afficher nos nounours. Avez-vous bien lancé le serveur local (Port 3000) ? <br>Si le problème persiste, contactez-nous.";
//           couvertureDeLaCart.style.textAlign = "center";
//           couvertureDeLaCart.style.padding = "45vh 0";
//       })
//       .then(function (resultatAPI) {
//         // On place les données reçues via l'API aux bons endroits sur la page
//         teddies = resultatAPI;
        
//         nomCartDescription.innerHTML = teddies.name;
//         imgCartDescription.src = teddies.imageUrl;
//         detailsCartDescription.innerText = teddies.description;
  
//         // Formatage du prix pour l'afficher en euros
//         teddies.price = teddies.price;
//         prixCartDescription.innerText = new Intl.NumberFormat("fr-FR", {
//           style: "currency",
//           currency: "EUR",
//         }).format(teddies.price/100);
  
//         let couleurCarteDescription = document.getElementById("color-select");
//         for (let i = 0; i < teddies.colors.length; i++) {
//           let option = document.createElement("option");
//           option.innerText = teddies.colors[i];
//           couleurCarteDescription.appendChild(option);
//         }
//       });
//   }
 
//   function ajoutPanier() {
//     const boutonAjoutPanier = document.querySelector("panierDescriptionAjout");
//     const confirmation = document.querySelector(".added-to-cart-confirmation");
//     const textConfirmation = document.querySelector(".confirmation-text");
// 0    
//     boutonAjoutPanier.addEventListener("click", () => {
//       if (nombreDOursonCartDesription.value > 0 && nombreDOursonCartDesription.value < 100) {
//         // ------ Création du produit qui sera ajouté au panier
//         let produitAdded = {
//           name: nomCartDescription.innerHTML,
//           price: parseFloat(prixCartDescription.innerHTML),
//           quantity: parseFloat(document.querySelector("#nombreDOurson").value),
//           _id: _id,
         
//         };
  
//         // ----------------- Gestion du localStorage
       
//       // ----------------- Gestion du localStorage
//       let arrayProductsInCart = [];
        
//         // Si le localStorage existe, on récupère son contenu, on l'insère dans le tableau arrayProductsInCart, puis on le renvoit vers le localStorage avec le nouveau produit ajouté.
//         if (localStorage.getItem("products") !== null) {
//           arrayProductsInCart = JSON.parse(localStorage.getItem("products"));
          
          
//           // Si le LS est vide, on le crée avec le produit ajouté
//         } 
//           arrayProductsInCart.push(produitAdded);
//           localStorage.setItem("products", JSON.stringify(arrayProductsInCart));
        
  
//         // Effets visuels lors d'un ajout au panier
//         confirmation.style.visibility = "visible";
//         textConfirmation.innerHTML = `Vous avez ajouté ${nombreDOurson.value} nounours à votre panier !`;
//         setTimeout("location.reload(true);", 4000);
//       } else {
//         confirmation.style.visibility = "visible";
//         textConfirmation.style.background = "red";
//         textConfirmation.style.border = "red";
//         textConfirmation.style.color = "white";
//         textConfirmation.style.whiteSpace = "normal";
//         textConfirmation.innerText = `La quantité doit être comprise entre 1 et 99,.`;
//       }
//     });









//   }



















































  //centrer la description

  // let centreDescription = document.querySelector('')
  
  // carte tournante //
//   const cartes = document.querySelectorAll('.carte');

// let carteRetournee = false;
// let premiereCarte, secondeCarte;
// let verouillage = false;

// cartes.forEach(carte => {
//     carte.addEventListener('click', retourneCarte)
// })

// function retourneCarte(){

//     if(verouillage) return;

//     this.childNodes[1].classList.toggle('active');

//     if(!carteRetournee){

//         carteRetournee = true;
//         premiereCarte = this;
//         return;
//     }

//     carteRetournee = false;
//     secondeCarte = this;

//      console.log(premiereCarte, secondeCarte);

    
// }


/*local Storage création d'une variable produitsEnregistrésDansLocalStorage*/

//let produitsEnregistrésDansLocalStorage = JSON.parse(localStorage.getItem("favorisPanier"));
//JSON.parse = changer les objets json en chaine de caractére js


// //s'il y a dejà des produits dans le local storage

// if(produitsEnregistrésDansLocalStorage){

// }
// // s'il n'y a rien dans le local storage
// else{
//   produitsEnregistrésDansLocalStorage = [];

// }




  
  // function ajouterPanier() {
  //   const addToCartBtn = document.querySelector(".add-to-cart");
  //   const confirmation = document.querySelector(".added-to-cart-confirmation");
  //   const textConfirmation = document.querySelector(".confirmation-text");
    
  //   addToCartBtn.addEventListener("click", () => {
  //     if (bearNumber.value > 0 && bearNumber.value < 100) {
  //       // ------ Création du produit qui sera ajouté au panier
  //       let productAdded = {
  //         name: productCardName.innerHTML,
  //         price: parseFloat(productCardPrice.innerHTML),
  //         quantity: parseFloat(document.querySelector("#bearNum").value),
  //         _id: id,
  //       };
  
  //       // ----------------- Gestion du localStorage
  //       let arrayProductsInCart = [];
        
  //       // Si le localStorage existe, on récupère son contenu, on l'insère dans le tableau arrayProductsInCart, puis on le renvoit vers le localStorage avec le nouveau produit ajouté.
  //       if (localStorage.getItem("products") !== null) {
  //         arrayProductsInCart = JSON.parse(localStorage.getItem("products"));
          
          
  //         // Si le LS est vide, on le crée avec le produit ajouté
  //       } 
  //         arrayProductsInCart.push(productAdded);
  //         localStorage.setItem("products", JSON.stringify(arrayProductsInCart));
        
  
  //       // Effets visuels lors d'un ajout au panier
  //       confirmation.style.visibility = "visible";
  //       textConfirmation.innerHTML = `Vous avez ajouté ${bearNumber.value} nounours à votre panier !`;
  //       setTimeout("location.reload(true);", 4000);
  //     } else {
  //       confirmation.style.visibility = "visible";
  //       textConfirmation.style.background = "red";
  //       textConfirmation.style.border = "red";
  //       textConfirmation.style.color = "white";
  //       textConfirmation.style.whiteSpace = "normal";
  //       textConfirmation.innerText = `La quantité doit être comprise entre 1 et 99,.`;
  //     }
  //   });
  // }
/*fetch('http://localhost:3000/api/teddies/${id}',
{
    "method": "POST",
    headers: {
        'Accept': 'application/json', 
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    "body": JSON.stringify({ favorites: getFavoritesId() })
}).then(data => data.json())
.then(jsonListTeddy => {
    for (let jsonTeddy of jsonListTeddy) {
        let teddy = new Teddy(jsonTeddy);
        document.querySelectorAll("#cartContaineur").innerHTML += 
                                                            `
<article class="produit">
<div class="imgContainer article">
 <img src=${teddy.imageUrl}alt="ours numero un" class="imgProduit">
 <button class="btnDuPanier addFavorite" data-id=${teddy._id}>
     <i class=" fas fa-shopping-cart"></i>
     ajouter au panier de merde
 </button>
</div>
 <h3 class="nameProduit">${teddy.name}</h3>
 <h4 class="prixProduit">${teddy.price / 100}</h4>
 <h4 class="detailsProduit">${teddy.description}</h4>
 <h3>${teddy.colors}</h3>
 <div class="quantiteProduit">
 <label for="nombreDOurson">Quantité :</label>
 <input id="nombreDOurson" type="number" name="nombreDOurson" value="1" min="1">
</div>
<div class="couleurProduit">
                        <label for="color-select">Couleur :</label>
                        <select name="color" id="color-select">
                        </select>
</div>
<div class="added-to-cart-confirmation">
<p class="confirmation-text"></p>
</div>
<div class="product-card__infos__buttons">
<a href="index.html">
    <div class="product-card__infos__button back-to-home">
        Revenir aux peluches
    </div>
</a>
<a href="#">
    <div class="product-card__infos__button add-to-cart">
        Ajouter au panier
    </div>
</a>
</div>
</article>`
                                                            
                                                            ;
    }
    document.querySelectorAll(".addFavorite").forEach(star => {
        star.addEventListener("click", function () {
            if (this.className.indexOf("activated") != -1) {
                this.setAttribute("class", "fas fa-shopping-cart addFavorite");
                removeFavorites(this.dataset.id);
            } else {
                this.setAttribute("class", "fas fa-shopping-cart addFavorite activated");
                addFavorites(this.dataset.id);
            }
        });
    });
});
*/





// /*const cartAccueilClick = document.querySelector('.justifyProduits');
// const pageDescription = [`${id}`];
// cartAccueilClick.addEventListener('click', (e) =>  {
//     e.preventDefault(); //empeche l'actualisation de la page
  


// });*/

//  let params = (new URL(document.location)).searchParams;
//  let _id = params.get('id'); // searchParamas = va chercher cet id specifique dans l'api et pas un autre.
 //index des const utilisées, document= DOM, querySelector = va chercher cette class ou cette id
// const imgCartDescription = document.querySelector(".imgUrl");
// const nomCartDescription = document.querySelector(".nameProduit");
//  const detailsCartDescription = document.querySelector(".detailsProduit");
//  const prixCartDescription = document.querySelector(".prixProduit");
//  const nombreDOursonCartDesription = document.querySelector("#nombreDOurson");
//  const couleurCarteDescription = document.querySelector(".color-select");

// affichageDescription ();

// function affichageDescription(){
//     erreur404();
//     afficherProduit();
//     ajoutPanier();
// }

// function erreur404(){
//     window.addEventListener("error", (e) =>{
//         let couvertureDeLaCart = document.querySelector("main");
//         couvertureDeLaCart.innerHTML = `<h1 class="erreurMessage">Erreur 404 
//         <a class="retourHomeLink" href="index.html">Retourner dans la boutique ?</a></h1>`;
//         couvertureDeLaCart.style.padding ="50vh 1";
//         couvertureDeLaCart.style.fontSize = "50px";
//         let retourHomeLink = document.querySelector(".retourHomeLink");
//         retourHomeLink.style.textDecoration = "underline";
//     },
//     true
//   );
// }

  
//  function afficherProduit() {
//        // On récupère uniquement le produit dont on a besoin via le paramètre dans la requête
//     fetch(`http://localhost:3000/api/teddies/${_id}`)
//       .then(function (response) {
//                  return response.json();
//      })
//     .catch((error) => {
//       let couvertureDeLaCart = document.querySelector(".couvertureDeLaCart");
//          couvertureDeLaCart.innerHTML =
//            "Nous n'avons pas réussi à afficher nos nounours. Avez-vous bien lancé le serveur local (Port 3000) ? <br>Si le problème persiste, contactez-nous.";
//            couvertureDeLaCart.style.textAlign = "center";
//            couvertureDeLaCart.style.padding = "45vh 0";
//        })
//        .then(function (resultatAPI) {
//          // On place les données reçues via l'API aux bons endroits sur la page
//          teddies = resultatAPI;
//                  nomCartDescription.innerHTML = teddies.name;
//                  imgCartDescription.src = teddies.imageUrl;
//                  detailsCartDescription.innerText = teddies.description;
  
//                  // Formatage du prix pour l'afficher en euros
                 
//                  teddies.price = teddies.price;
//                  prixCartDescription.innerText = new Intl.NumberFormat("fr-FR", {
//                              style: "currency",
//            currency: "EUR",
//                    }).format(teddies.price/100);
  
//         let couleurCarteDescription = document.getElementById("color-select");        
//          for (let i = 0; i < teddies.colors.length; i++) {

//            let option = document.createElement("option");
//            option.innerText = teddies.colors[i];
//            couleurCarteDescription.appendChild(option);
//          }
//        });
//    }
 
//    function ajoutPanier() {
//      const boutonAjoutPanier = document.querySelector("button");
//      const confirmation = document.querySelector(".added-to-cart-confirmation");
//      const textConfirmation = document.querySelector(".confirmation-text");
    
//      boutonAjoutPanier.addEventListener("click", () => {
//        if (nombreDOursonCartDesription.value > 0 && nombreDOursonCartDesription.value < 100) {
//          // ------ Création du produit qui sera ajouté au panier
//                   let produitAdded = {
//            name: nomCartDescription.innerHTML,
//            price: parseFloat(prixCartDescription.innerHTML),
//            quantity: parseFloat(document.querySelector("#nombreDOurson").value),
//            _id: _id,
         
//         };
  
// //         // ----------------- Gestion du localStorage
       
// //       // ----------------- Gestion du localStorage
//        let arrayProductsInCart = [];
        
// //         // Si le localStorage existe, on récupère son contenu, on l'insère dans le tableau arrayProductsInCart, puis on le renvoit vers le localStorage avec le nouveau produit ajouté.
//          if (localStorage.getItem("products") !== null) {
//           arrayProductsInCart = JSON.parse(localStorage.getItem("products"));
          
          
// //           // Si le LS est vide, on le crée avec le produit ajouté
//         } 
//                    arrayProductsInCart.push(produitAdded);
//            localStorage.setItem("products", JSON.stringify(arrayProductsInCart));
        
//       }
//     }
         // Effets visuels lors d'un ajout au panier
//         confirmation.style.visibility = "visible";
//         textConfirmation.innerHTML = `Vous avez ajouté ${nombreDOurson.value} nounours à votre panier !`;
//         setTimeout("location.reload(true);", 4000);
//       } else {
//         confirmation.style.visibility = "visible";
//         textConfirmation.style.background = "red";
//         textConfirmation.style.border = "red";
//         textConfirmation.style.color = "white";
//         textConfirmation.style.whiteSpace = "normal";
//         textConfirmation.innerText = `La quantité doit être comprise entre 1 et 99,.`;
//       }
//     });









//   }


//   //centrer la description

//   // let centreDescription = document.querySelector('')
  
//   // carte tournante //
//   const cartes = document.querySelectorAll('.carte');

// let carteRetournee = false;
// let premiereCarte, secondeCarte;
// let verouillage = false;

// cartes.forEach(carte => {
//     carte.addEventListener('click', retourneCarte)
// })

// function retourneCarte(){

//     if(verouillage) return;

//     this.childNodes[1].classList.toggle('active');

//     if(!carteRetournee){

//         carteRetournee = true;
//         premiereCarte = this;
//         return;
//     }

//     carteRetournee = false;
//     secondeCarte = this;

//      console.log(premiereCarte, secondeCarte);

    
// }


// // /* local Storage création d'une variable produitsEnregistrésDansLocalStorage*/

// // let produitsEnregistrésDansLocalStorage = JSON.parse(localStorage.getItem("favorisPanier"));
// // //JSON.parse = changer les objets json en chaine de caractére js


// // //s'il y a dejà des produits dans le local storage

// // if(produitsEnregistrésDansLocalStorage){

// // }
// // // s'il n'y a rien dans le local storage
// // else{
// //   produitsEnregistrésDansLocalStorage = [];

// // }




  
//   /*function addToCart() {
//     const addToCartBtn = document.querySelector(".add-to-cart");
//     const confirmation = document.querySelector(".added-to-cart-confirmation");
//     const textConfirmation = document.querySelector(".confirmation-text");
    
//     addToCartBtn.addEventListener("click", () => {
//       if (bearNumber.value > 0 && bearNumber.value < 100) {
//         // ------ Création du produit qui sera ajouté au panier
//         let productAdded = {
//           name: productCardName.innerHTML,
//           price: parseFloat(productCardPrice.innerHTML),
//           quantity: parseFloat(document.querySelector("#bearNum").value),
//           _id: id,
//         };
  
//         // ----------------- Gestion du localStorage
//         let arrayProductsInCart = [];
        
//         // Si le localStorage existe, on récupère son contenu, on l'insère dans le tableau arrayProductsInCart, puis on le renvoit vers le localStorage avec le nouveau produit ajouté.
//         if (localStorage.getItem("products") !== null) {
//           arrayProductsInCart = JSON.parse(localStorage.getItem("products"));
          
          
//           // Si le LS est vide, on le crée avec le produit ajouté
//         } 
//           arrayProductsInCart.push(productAdded);
//           localStorage.setItem("products", JSON.stringify(arrayProductsInCart));
        
  
//         // Effets visuels lors d'un ajout au panier
//         confirmation.style.visibility = "visible";
//         textConfirmation.innerHTML = `Vous avez ajouté ${bearNumber.value} nounours à votre panier !`;
//         setTimeout("location.reload(true);", 4000);
//       } else {
//         confirmation.style.visibility = "visible";
//         textConfirmation.style.background = "red";
//         textConfirmation.style.border = "red";
//         textConfirmation.style.color = "white";
//         textConfirmation.style.whiteSpace = "normal";
//         textConfirmation.innerText = `La quantité doit être comprise entre 1 et 99,.`;
//       }
//     });
//   }
// /*fetch('http://localhost:3000/api/teddies/${id}',
// {
//     "method": "POST",
//     headers: {
//         'Accept': 'application/json', 

//         'Content-Type': 'application/json'
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     "body": JSON.stringify({ favorites: getFavoritesId() })
// }).then(data => data.json())
// .then(jsonListTeddy => {
//     for (let jsonTeddy of jsonListTeddy) {
//         let teddy = new Teddy(jsonTeddy);
//         document.querySelectorAll("#cartContaineur").innerHTML += 
//                                                             `
// <article class="produit">
// <div class="imgContainer article">
//  <img src=${teddy.imageUrl}alt="ours numero un" class="imgProduit">
//  <button class="btnDuPanier addFavorite" data-id=${teddy._id}>
//      <i class=" fas fa-shopping-cart"></i>
//      ajouter au panier de merde
//  </button>
// </div>
//  <h3 class="nameProduit">${teddy.name}</h3>
//  <h4 class="prixProduit">${teddy.price / 100}</h4>
//  <h4 class="detailsProduit">${teddy.description}</h4>
//  <h3>${teddy.colors}</h3>

//  <div class="quantiteProduit">
//  <label for="nombreDOurson">Quantité :</label>
//  <input id="nombreDOurson" type="number" name="nombreDOurson" value="1" min="1">
// </div>
// <div class="couleurProduit">
//                         <label for="color-select">Couleur :</label>
//                         <select name="color" id="color-select">
//                         </select>
// </div>
// <div class="added-to-cart-confirmation">
// <p class="confirmation-text"></p>
// </div>
// <div class="product-card__infos__buttons">
// <a href="index.html">
//     <div class="product-card__infos__button back-to-home">
//         Revenir aux peluches
//     </div>
// </a>
// <a href="#">
//     <div class="product-card__infos__button add-to-cart">
//         Ajouter au panier
//     </div>
// </a>
// </div>


// </article>`
                                                            
//                                                             ;
//     }

//     document.querySelectorAll(".addFavorite").forEach(star => {
//         star.addEventListener("click", function () {
//             if (this.className.indexOf("activated") != -1) {
//                 this.setAttribute("class", "fas fa-shopping-cart addFavorite");
//                 removeFavorites(this.dataset.id);
//             } else {
//                 this.setAttribute("class", "fas fa-shopping-cart addFavorite activated");
//                 addFavorites(this.dataset.id);
//             }
//         });
//     });
    //  )}
