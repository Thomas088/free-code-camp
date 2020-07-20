// FCC CASH REGISTER - SHAME.JS

const tableauAntiDoublons = [];

function checkCashRegister(price, cash, cid) {

  const unitesMonnaie = [

    ["PENNY", 0.01], 
    ["NICKEL", 0.05], 
    ["DIME", 0.1], 
    ["QUARTER", 0.25], 
    ["ONE", 1], 
    ["FIVE", 5], 
    ["TEN", 10], 
    ["TWENTY", 20], 
    ["ONE HUNDRED", 100]

  ]

  const resultat = {
    status:"",
    change: []
  }
  
  let aRendre = Number(parseFloat(cash - price).toFixed(2));
  let main = 0;
  let test = [];
  
// ON PARCOURS LES DEVISES EN CASCADE DU PLUS GRAND AU PLUS PETIT
  for (let i = cid.length - 1; i >= 0; i--) { 

    // SI LE MONTANT A RENDRE DIVISEE PAR LA DEVISE EST SUP. A 1 ET QUE LE TIROIR DE DEVISE EN COURS EN CONTIENT AU MOINS UNE 
    // ON AJOUTE A LA MAIN (LA MAIN A POUR ROLE DE RENDRE AU CLIENT...)
    // ON DECOMPTE CE QU'A PRIS LA MAIN DU TIROIR EN COURS
    // ON SOUSTRAIT LA DIFF. DE CE QU'IL Y'A A RENDRE  
    while(Math.trunc(aRendre / unitesMonnaie[i][1]) > 0 && cid[i][1] > 0) {  
      main = Number(parseFloat(main + unitesMonnaie[i][1]).toFixed(2));
      cid[i][1] = Number(parseFloat(cid[i][1] - unitesMonnaie[i][1]).toFixed(2))
      aRendre = Number(parseFloat(aRendre - unitesMonnaie[i][1]).toFixed(2));  
    }
    
   test.unshift([unitesMonnaie[i][0], 0]) // ON ENREGISTRE S'IL N'YA PLUS DE BILLET DANS LE TIROIR

    if(main !== 0) { // SI ON A DU CHANGE EN MAIN 
      if(!(i === 0 && aRendre > 0)) { 
        resultat.change.push([unitesMonnaie[i][0], main])
      }
    } 
    
    main = 0; // ON A RENDU AU CLIENT - ON PASSE A LA DEVISE SUIVANTE
  }
  
 
  
  if (resultat.change.length > 0 && cid.reduce((acc, value) => acc + value[1], 0) === 0) {
     resultat.status = "CLOSED";
     resultat.change =  resultat.change.concat(test);
     resultat.change.splice(1,1); // SHAME... 
    
  } else if(resultat.change.length > 0) {
    resultat.status = "OPEN";
  } else {
    resultat.status = "INSUFFICIENT_FUNDS";
  }
  
  return resultat;
}