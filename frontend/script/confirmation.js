displayOrderIdAndPrice();

function displayOrderIdAndPrice() {
  const totalConfirmation = document.querySelector(".total span");
  const orderId = document.querySelector(".orderid span");
  
  totalConfirmation.innerText = localStorage.getItem("total");
  orderId.innerText = localStorage.getItem("orderId");

  // On vide le localStorage pour recommencer plus tard le processus d'achat
  localStorage.clear(); 
}

// function sommeTotalPanier() {
//     let arrayOfPrice = [];
//     let totalPrice = document.querySelector(".total");
  
//     // On push chaque prix du DOM dans un tableau
//     let productPriceAccordingToQuantity = document.querySelectorAll(".price");
//     for (let price in productPriceAccordingToQuantity) {
//       arrayOfPrice.push(productPriceAccordingToQuantity[price].innerHTML);
//     }
  
//     // On enlève les undefined du tableau
//     arrayOfPrice = arrayOfPrice.filter((el) => {
//       return el != undefined;
//     });
  
//     // Transformer en nombre chaque valeur du tableau
//     arrayOfPrice = arrayOfPrice.map((x) => parseFloat(x));
  
//     // Additionner les valeurs du tableau pour avoir le prix total
//     const reducer = (acc, currentVal) => acc + currentVal;
//     arrayOfPrice = arrayOfPrice.reduce(reducer);
  
//     // Affichage du prix avec formatage €
//     totalPrice.innerText = `Total : ${(arrayOfPrice = new Intl.NumberFormat(
//       "fr-FR",
//       {
//         style: "currency",
//         currency: "EUR",
//       }
//     ).format(arrayOfPrice))}`;
//   }