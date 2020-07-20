function translatePigLatin(str) { 

    let temp = "";
    let result = "";
    let isConsonant = (val) => Boolean(["a", "e", "i", "o", "u"].indexOf(val) === -1);

    for (let i = 0, n = str.length; i < n; i++) {

         if(!isConsonant(str[0])) {
            return str.concat("way")
        } else if (isConsonant(str[i])) {
            temp += str[i];
        } else {
            result = str.substring(str.indexOf(str[i]), str.length)
            return result.concat(temp, "ay");
        } 
    }
    return str.concat("ay");
} 