function titleCase(str) {

// 1er filtre: On met tout en lowerCase et on decompose la phrase en tableau avec les elements avec split()
let splited = str.toLowerCase().split(" ") 
// On boucle sur les elements du tableau
for (var i = 0; i < splited.length; i++) {
       splited[i] = splited[i].charAt(0).toUpperCase() + splited[i].substring(1);
       // On doit extraire la 1ere lettre, la mettre en uppercase et ajouter au reste du mot 
       // ----------------------------------------------------------------------------------------
       // charAt(0) extrait la 1ere lettre (index 0 de la string) et toUpperCase() le met en majuscule
       // Concatenation avec le reste avec substring (substring stocke le reste du mot)
   }
  return splited.join(" ") // retour au format string avec les mots en UpperCase
}

titleCase("I'm a little tea pot");
