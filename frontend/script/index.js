
/*
 * Représentation du format d'un objet Teddy
 
 class Teddy{
    constructor(jsonTeddy){
        jsonTeddy && Object.assign(this, jsonTeddy);
    }

   
}

/**
 * Gère l'affichage et les interactions de la page d'accueil
 
 
    
 fetch("http://localhost:3000/api/teddies")
 .then(data => data.json())
     .then(jsonListTeddy => {
         for (let jsonTeddy of jsonListTeddy) {
             let teddy = new Teddy(jsonTeddy);
             document.querySelector(".justifyProduits").innerHTML += `


                                                                 <!--produit à l'unité-->
                                                                
                                                                 <a href="" >  
                                                                 <article class="produit" addFavorite" data-id=${teddy._id}>
                                                                    <div class="imgContainer">
                                                                      <img src="${teddy.imageUrl}" alt="${teddy.name}" class="imgProduit">
                                                                         
                                                                             
                                                                           
                                                                            
                                                                        
                                                                    </div>
                                                                    <div class="NomEtPrixCarte">
                                                                        <h3>
                                                                                    ${teddy.name}
                                                                        </h3>
                                                                        <h2>
                                                                           
                                                                                    ${teddy.price /100} €
                                                                            
                                                                        </h2>
                                                                    </div>

                                                                 </article>
                                                                 </a>
                                                                <!-- fin produit à l'unité-->
                                                                 `;
            }

            document.querySelectorAll(".addFavorite").forEach(star => {
                star.addEventListener("click", function() {
                    addFavorites(this.dataset.id);
                    this.setAttribute("class", "fa-stack fa-2x addFavorite activated");
                    if (this.className.indexOf("activated") != -1) {
                        this.setAttribute("class", "fa-stack fa-2x addFavorite");
                        removeFavorites(this.dataset.id);
                    } else {
                        
                        
                    }
                });
            });
        });

*/


affichageDescription ();

function affichageDescription(){
    //erreur404();
    afficherProduit();
    ajoutPanierAccueil();
}






// // Récupérer les articles depuis l'API
// function afficherProduit() {
//     fetch("http://localhost:3000/api/teddies")
//       .then(function (res) {
//         return res.json();
//       })
//       /*.catch((error) => {
//         let produitsContainer = document.querySelector(".produitsContainer");
//         produitsContainer.innerHTML =
//           "Nous n'avons pas réussi à afficher nos nounours. Avez vous bien lancé le serveur local (Port 3000) ? <br>Si le problème persiste, contactez-nous.";
//           produitsContainer.style.textAlign = "center";
//           produitsContainer.style.padding = "30vh 0";
//       })*/
  
//       // Dispatcher les données de chaque produit (prix, nom...) dans le DOM
//       .then(function (resultatAPI) {
//         const articles = resultatAPI;
//         console.log(articles);
//         for (let teddies in articles) {
//           let produitCard = document.createElement("div");
//           document.querySelector(".justifyProduits").appendChild(produitCard);
//           produitCard.classList.add("produit");
  
//           let produitLink = document.createElement("a");
//           produitCard.appendChild(produitLink);
//           produitLink.href = `description.html?id=${resultatAPI[teddies]._id}`;
//           produitLink.classList.add("stretched-link");

         
  
//           let produitImgDiv = document.createElement("div");
//           produitLink.appendChild(produitImgDiv);
//           produitImgDiv.classList.add("product__img");
  
//           let produitImg = document.createElement("img");
//           produitImgDiv.appendChild(produitImg);
//           produitImg.src = resultatAPI[teddies].imageUrl;


//           let produitPanier = document.createElement([type = "submit"]);
//           produitPanierButton.appendChild(produitPanier);
//           produitPanier.innerHTML = `<h4 class="AjouterAuPanierAccueil">Ajouter au panier </h4> `

//           let produitLinkAjoutPanier = document.createElement("a");
//           produitPanier.appendChild(produitLinkAjoutPanier);
//           produitLinkAjoutPanier.href = `description.html?id=${resultatAPI[teddies]._id}`;// trouver un objet qui reprend les caracteristiques
//           // produitLinkAjoutPanier.href = ` panier.html?image=${resultatAPI[teddies].imageUrl}`;
          
//           produitLinkAjoutPanier.classList.add("stretched-link");
//         }
          

           

//           let produitInfosDiv = document.createElement("div");
//           produitLink.appendChild(produitInfosDiv);
//           produitInfosDiv.classList.add("product__infos");
  
//           let produitInfoTitle = document.createElement("div");
//           produitInfosDiv.appendChild(produitInfoTitle);
//           produitInfoTitle.classList.add("product__infos__title");
//           produitInfoTitle.innerHTML = resultatAPI[teddies].name;
  
//           let produitInfoPrice = document.createElement("div");
//           produitInfosDiv.appendChild(produitInfoPrice);
//           produitInfoPrice.classList.add("product__infos__price");

//           // let produitSelectionButton = document.createElement("button");
//           //  produitInfosDiv = appendChild(produitSelectionButton);
//           //  produitSelectionButton.classList.add("product__infos__button")
  
//           // Formatage du prix pour l'afficher en euros
//           resultatAPI[teddies].price = resultatAPI[teddies].price / 100;
//           produitInfoPrice.innerHTML = new Intl.NumberFormat("fr-FR", {
//             style: "currency",
//             currency: "EUR",
//           }).format(resultatAPI[teddies].price);



          
//         });
//       };
  
// Récupérer les articles depuis l'API
function afficherProduit() {
  fetch("http://localhost:3000/api/teddies")
    .then(function (res) {
      return res.json();
    })
    /*.catch((error) => {
      let produitsContainer = document.querySelector(".produitsContainer");
      produitsContainer.innerHTML =
        "Nous n'avons pas réussi à afficher nos nounours. Avez vous bien lancé le serveur local (Port 3000) ? <br>Si le problème persiste, contactez-nous.";
        produitsContainer.style.textAlign = "center";
        produitsContainer.style.padding = "30vh 0";
    })*/

    // Dispatcher les données de chaque produit (prix, nom...) dans le DOM
    .then(function (resultatAPI) {
      const articles = resultatAPI;
      console.log(articles);
      for (let teddies in articles) {
        let produitCard = document.createElement("div");
        document.querySelector(".justifyProduits").appendChild(produitCard);
        produitCard.classList.add("produit");

        let produitLink = document.createElement("a");
        produitCard.appendChild(produitLink);
        produitLink.href = `description.html?id=${resultatAPI[teddies]._id}`;
        produitLink.classList.add("stretched-link");

       

        let produitImgDiv = document.createElement("div");
        produitLink.appendChild(produitImgDiv);
        produitImgDiv.classList.add("product__img");

        let produitImg = document.createElement("img");
        produitImgDiv.appendChild(produitImg);
        produitImg.src = resultatAPI[teddies].imageUrl;


        let produitPanierButton = document.createElement("button");
        produitLink.appendChild(produitPanierButton);
        produitPanierButton.classList.add("product__button");
        
        let produitPanier = document.createElement([type = "submit"]);
        produitPanierButton.appendChild(produitPanier);
        produitPanier.innerHTML = `<h4 class="AjouterAuPanierAccueil"> Détails</h4> `

        let produitLinkAjoutPanier = document.createElement("a");
        produitPanier.appendChild(produitLinkAjoutPanier);
        produitLinkAjoutPanier.href = `description.html?id=${resultatAPI[teddies]._id}`;// trouver un objet qui reprend les caracteristiques
        // produitLinkAjoutPanier.href = ` panier.html?image=${resultatAPI[teddies].imageUrl}`;
        
        produitLinkAjoutPanier.classList.add("stretched-link");
      
        

         

        let produitInfosDiv = document.createElement("div");
        produitLink.appendChild(produitInfosDiv);
        produitInfosDiv.classList.add("product__infos");

        let produitInfoTitle = document.createElement("div");
        produitInfosDiv.appendChild(produitInfoTitle);
        produitInfoTitle.classList.add("product__infos__title");
        produitInfoTitle.innerHTML = resultatAPI[teddies].name;

        let produitInfoPrice = document.createElement("div");
        produitInfosDiv.appendChild(produitInfoPrice);
        produitInfoPrice.classList.add("product__infos__price");

        // let produitSelectionButton = document.createElement("button");
        //  produitInfosDiv = appendChild(produitSelectionButton);
        //  produitSelectionButton.classList.add("product__infos__button")

        // Formatage du prix pour l'afficher en euros
        resultatAPI[teddies].price = resultatAPI[teddies].price / 100;
        produitInfoPrice.innerHTML = new Intl.NumberFormat("fr-FR", {
          style: "currency",
          currency: "EUR",
        }).format(resultatAPI[teddies].price);



        
      };
    })
};
  function ajoutPanierAccueil() {
    const boutonAjoutPanierAccueil = document.querySelector("button");
    // const confirmation = document.querySelector(".added-to-cart-confirmation");
    // const textConfirmation = document.querySelector(".confirmation-text");
    
    boutonAjoutPanierAccueil.addEventListener("click", () => {
      
        // ------ Création du produit qui sera ajouté au panier
        let produitAdded = {
          name: nomCartDescription.innerHTML,
          price: parseFloat(prixCartDescription.innerHTML),
          // quantity: parseFloat(document.querySelector("#nombreDOurson").value),
          _id: _id,
         
        };
  
        // ----------------- Gestion du localStorage
       
      // ----------------- Gestion du localStorage
      let arrayProductsInCart = [];
        
        // Si le localStorage existe, on récupère son contenu, on l'insère dans le tableau arrayProductsInCart, puis on le renvoit vers le localStorage avec le nouveau produit ajouté.
        if (localStorage.getItem("products") !== null) {
          arrayProductsInCart = JSON.parse(localStorage.getItem("products"));
          
          
          // Si le LS est vide, on le crée avec le produit ajouté
        } 
          arrayProductsInCart.push(produitAdded);
          localStorage.setItem("products", JSON.stringify(arrayProductsInCart));
        
  
        // Effets visuels lors d'un ajout au panier
        confirmation.style.visibility = "visible";
        textConfirmation.innerHTML = `Vous avez ajouté ${nombreDOurson.value} nounours à votre panier !`;
        setTimeout("location.reload(true);", 4000);
      
    });









  }