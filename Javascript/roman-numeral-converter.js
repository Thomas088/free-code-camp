function convertToRoman(num) {

  // On referencent les nombres romains et les chiffres
  const unitsRoman = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  const units = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const tensRoman = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  const tens = [10, 20, 30, 40, 50, 60, 70, 80, 90];

  const hundredsRoman = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  const hundreds = [100, 200, 300, 400, 500, 600, 700, 800, 900];

  const thousandsRoman = ["M", "MM", "MMM"];
  const thousands = [1000, 2000, 3000];


  function replaceToRoman(value, array) {

    // Position de la valeur a transformer en nombre romain
    let position;

    // Unités ? Dizaines ? Centaines ? 
    switch (splited.indexOf(value)) {

      case 0 :
          position = units.findIndex((number) => value === number);
          array.splice(array.indexOf(value), 1, unitsRoman[position]);
        break;
        
      case 1 :
          position = tens.findIndex((number) => value === number);
          array.splice(array.indexOf(value), 1, tensRoman[position]);
        break;
      
      case 2 :
          position = hundreds.findIndex((number) => value === number);
          array.splice(array.indexOf(value), 1, hundredsRoman[position]);
        break;
        
      case 3 :
          position = thousands.findIndex((number) => value === number);
          array.splice(array.indexOf(value), 1, thousandsRoman[position]);
        break;

        default :
          break;
    }

  }

  // const result = [];

  // Décortique le nombre et on l'inverse pour trier facilement des unites au miliers

  const splited = num.toString()
                     .split("")
                     .map((number) => Number(number))
                     .reverse();

  // Multiplie chaque elements d'index pour récuperer sa valeur exacte (unites, dizaines, centaines...)
  // On le multipliera par 10 a chaque tour.
  let multiplier = 1 
  

  for(let i = 0; i < splited.length; i++) {
    splited[i] = splited[i] * multiplier;
    replaceToRoman(splited[i], splited); 
    multiplier = multiplier * 10; 
  }

    return splited.reverse().join("");
}