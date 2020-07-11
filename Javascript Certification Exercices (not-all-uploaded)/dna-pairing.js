function pairElement(str) {

    let arr = [];

    for (let i = 0, n = str.length; i < n; i++) {

        let temp;
        switch (str[i]) {
            case "A":
                temp = [str[i], "T"]
                arr.push(temp)
            break;

            case "T":
                temp = [str[i], "A"]
                arr.push(temp) 
            break;

            case "C":
                temp = [str[i], "G"]
                arr.push(temp)
            break;

            case "G":
                temp = [str[i], "C"]
                arr.push(temp)
            break;

            default:
                break;
        }
    }
    return arr;
  }