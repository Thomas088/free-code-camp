function truthCheck(collection, pre) {
  //SI TOUTES LES VALEURS SONT TRUE
  return collection.every(elt => elt[pre]);
}


truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

























