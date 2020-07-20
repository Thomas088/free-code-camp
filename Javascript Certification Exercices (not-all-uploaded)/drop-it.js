function dropElements(arr, func) {

  // SI UN DES ITEM DU TABLEAU REPOND AU CRITERE DE LA FONCTION, ON CREE UNE COPIE DU TABLEAU (SLICE) A PARTIR DE L'INDEX DE L'ITEM EN QUESTION (FINDINDEX()) JUSQU'A LA FIN. SI AUCUN DES ITEMS N'Y REPOND -> ON RENVOI UN TABLEAU VIDE

  if (arr.findIndex(func) !== -1) {
    return arr.slice(arr.findIndex(func))
  } else { 
    return [];
  }

}

dropElements([1, 2, 3, 7, 4], function(n) {return n < 3; });
