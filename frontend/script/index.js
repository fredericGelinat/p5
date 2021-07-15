affichageDescription ();

function affichageDescription(){
    //erreur404();
    afficherProduit();
    //ajoutPanierAccueil();
}



// let params = (new URL(document.location)).searchParams;
// var _id = params.get('id'); // searchParamas = va chercher cet id specifique dans l'api et pas un autre.



  
// Récupérer les articles depuis l'API
function afficherProduit() {
  fetch("http://localhost:3000/api/teddies")
    .then(function (res) {
      return res.json();
    })
    .catch((error) => {
      let produitsContainer = document.querySelector(".produitsContainer");
      produitsContainer.innerHTML =
        " Avez vous bien lancé le serveur local (Port 3000) ?";
        produitsContainer.style.textAlign = "center";
        produitsContainer.style.padding = "30vh 0";
    })

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



       

        // let produitLinkAjoutPanier = document.createElement("a");
        // produitPanier.appendChild(produitLinkAjoutPanier);
        // produitLinkAjoutPanier.href = `description.html?id=${resultatAPI[teddies]._id}`;// trouver un objet qui reprend les caracteristiques
        // // produitLinkAjoutPanier.href = ` panier.html?image=${resultatAPI[teddies].imageUrl}`;
        
        // produitLinkAjoutPanier.classList.add("stretched-link");
      
        


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





        // let produitPanierButtonDiv = document.createElement("div");
        // document.querySelector(".justifyProduits").appendChild(produitPanierButtonDiv);
        // produitPanierButtonDiv.classList.add("buttonAjouterPanier");
        

        // let panierBtnAccueilLink = document.createElement("a");
        // produitPanierButtonDiv.appendChild(panierBtnAccueilLink)
        // panierBtnAccueilLink.href = `panier.html?id=${resultatAPI[teddies]._id}`;
        // panierBtnAccueilLink.classList.add("lienVersPanier")

        // let ajoutPanierButton = document.createElement("div");
        // panierBtnAccueilLink.appendChild(ajoutPanierButton);
        // ajoutPanierButton.innerHTML = `<i class="fas fa-info-circle"></i> `

        
      };
    })
};

//   function ajoutPanierAccueil() {
//     let params = new URL(document.location).searchParams;
//     let id = params.get("id"); 
// const boutonAjoutPanierAccueil = document.querySelector(".justifyProduits");
// // const confirmation = document.querySelector(".added-to-cart-confirmation");
// // const textConfirmation = document.querySelector(".confirmation-text");
    
// const productCardImg = document.querySelector(".imgUrl");
// const productCardName = document.querySelector(".product__infos__title");
// const productCardDescription = document.querySelector(
//   ".detailsProduit"
// );
// const productCardPrice = document.querySelector(".product__infos__price");
// const bearNumber = document.querySelector("#nombreDOurson");
// const colorSelect = document.querySelector(".couleurProduit");


// boutonAjoutPanierAccueil.addEventListener("click",  () => {
//     if (boutonAjoutPanierAccueil > 1){
//      // ------ Création du produit qui sera ajouté au panier
//       let produitAdded = {
//         name: productCardName.innerHTML,
//         price: parseFloat(productCardPrice.innerHTML),
//         // quantity: parseFloat(document.querySelector("#nombreDOurson").value),
//         _id: id,
       
//       };
      
//       // ----------------- Gestion du localStorage
     
//     // ----------------- Gestion du localStorage
//     let arrayProductsInCart = [];
      
//       // Si le localStorage existe, on récupère son contenu, on l'insère dans le tableau arrayProductsInCart, puis on le renvoit vers le localStorage avec le nouveau produit ajouté.
//       if (localStorage.getItem("products") !== null) {
//         arrayProductsInCart = JSON.parse(localStorage.getItem("products"));
        
        
//         // Si le LS est vide, on le crée avec le produit ajouté
//       } 
//         arrayProductsInCart.push(produitAdded);
//         localStorage.setItem("products", JSON.stringify(arrayProductsInCart));
      

//       // Effets visuels lors d'un ajout au panier
//       confirmation.style.visibility = "visible";
//       textConfirmation.innerHTML = `Vous avez ajouté ${nombreDOurson.value} nounours à votre panier !`;
//       setTimeout("location.reload(true);", 4000);
//     }
//     else {
//       confirmation.style.visibility = "visible";
//       textConfirmation.style.background = "red";
//       textConfirmation.style.border = "red";
//       textConfirmation.style.color = "white";
//       textConfirmation.style.whiteSpace = "normal";
//       textConfirmation.innerText = `La quantité doit être comprise entre 1 et 99 unité`;
//     }
//   });
// }
  






// function ajoutPanier() {
//    const boutonAjoutPanier = document.getElementsByClassName("button");
//   // const confirmation = document.querySelector(".added-to-cart-confirmation");
//   // const textConfirmation = document.querySelector(".confirmation-text");
//   const nombreDOursonCartDesription = document.querySelector("button");
// const nomCartDescription = document.querySelector(".nameProduit");
// const prixCartDescription = document.querySelector(".prixProduit");
//   const produitAdded = {
//     name: nomCartDescription.innerHTML,
//     price: parseFloat(prixCartDescription.innerHTML),
//     quantity: parseFloat(document.querySelector("#nombreDOurson")),
//     _id: _id,}
//   // let li = document.getElementsByTagName("li");
//   // let buttons = document.getElementsByTagName("span");
  
//   Array.from(nombreDOursonCartDesription).forEach(b => {
//     b.addEventListener("click", function() {
//       console.log(produitAdded);
//     });
//   });






//   boutonAjoutPanier.addEventListener("click", () => {
//     if (nombreOursonLabel.value > 0 && nombreOursonLabel.value < 100) {
//       // ------ Création du produit qui sera ajouté au panier
      
       
//       };

//        //----------------- Gestion du localStorage
     
//      //----------------- Gestion du localStorage
//     let arrayProductsInCart = [];
      
//        //Si le localStorage existe, on récupère son contenu, on l'insère dans le tableau arrayProductsInCart, puis on le renvoit vers le localStorage avec le nouveau produit ajouté.
//       if (localStorage.getItem("products") !== null) {
//         arrayProductsInCart = JSON.parse(localStorage.getItem("products"));
        
        
//         // Si le LS est vide, on le crée avec le produit ajouté
       
//         arrayProductsInCart.push(produitAdded);
//         localStorage.setItem("products", JSON.stringify(arrayProductsInCart));
      

//       // Effets visuels lors d'un ajout au panier
//       confirmation.style.visibility = "visible";
//       textConfirmation.innerHTML = `Vous avez ajouté ${nombreDOurson.value} nounours à votre panier !`;
//       setTimeout("location.reload(true);", 4000);
//   } 
//     else {
//       confirmation.style.visibility = "visible";
//       textConfirmation.style.background = "red";
//       textConfirmation.style.border = "red";
//       textConfirmation.style.color = "white";
//       textConfirmation.style.whiteSpace = "normal";
//       textConfirmation.innerText = `La quantité doit être comprise entre 1 et 99,.`;
//     }
  
  












  // function ajoutPanierAccueil() {
  //   const boutonAjoutPanierAccueil = document.querySelector("button");
  //   // const confirmation = document.querySelector(".added-to-cart-confirmation");
  //   // const textConfirmation = document.querySelector(".confirmation-text");
  //   const nomCartDescription = document.querySelector(".product__infos__title");
  //   boutonAjoutPanierAccueil.addEventListener("click", () => {
      
  //       // ------ Création du produit qui sera ajouté au panier
  //       let produitAdded = {
  //         name: nomCartDescription.innerHTML,
  //         price: parseFloat(prixCartDescription.innerHTML),
  //         // quantity: parseFloat(document.querySelector("#nombreDOurson").value),
  //         _id: _id,
         
  //       };
  
  //       // ----------------- Gestion du localStorage
       
  //     // ----------------- Gestion du localStorage
  //     let arrayProductsInCart = [];
        
  //       // Si le localStorage existe, on récupère son contenu, on l'insère dans le tableau arrayProductsInCart, puis on le renvoit vers le localStorage avec le nouveau produit ajouté.
  //       if (localStorage.getItem("products") !== null) {
  //         arrayProductsInCart = JSON.parse(localStorage.getItem("products"));
          
          
  //         // Si le LS est vide, on le crée avec le produit ajouté
  //       } 
  //         arrayProductsInCart.push(produitAdded);
  //         localStorage.setItem("products", JSON.stringify(arrayProductsInCart));
        
  
  //       // Effets visuels lors d'un ajout au panier
  //       confirmation.style.visibility = "visible";
  //       textConfirmation.innerHTML = `Vous avez ajouté ${nombreDOurson.value} nounours à votre panier !`;
  //       setTimeout("location.reload(true);", 4000);
      
  //   });


  // }




  
// 
