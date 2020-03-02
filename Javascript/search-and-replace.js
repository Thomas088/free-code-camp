function myReplace(str, before, after) {

    let splited = str.split(" ");
    let upperCaseRegex = /[A-Z]/;

    let checkUpperCase = (elt) => { 
        let firstletter = elt.charAt(0);
        return upperCaseRegex.test(firstletter);
    };

    for (let i = 0, n = splited.length; i < n; i++) {    
        if (splited[i] === before) {   
            if(checkUpperCase(splited[i])) {
                let toUpper = after.charAt(0).toUpperCase() + after.slice(1);
                splited.splice(splited.indexOf(splited[i]), 1, toUpper);
                return splited.join(" ");
            } 
            splited.splice(splited.indexOf(splited[i]), 1, after)     
            return splited.join(" ");
        }
    }
  }