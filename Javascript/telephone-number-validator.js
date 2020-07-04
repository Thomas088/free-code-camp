function telephoneCheck(str) {

const regex = /^([1]?([0-9]{3}| (\([0-9]{3}\)) | [0-9]{3}|(\([0-9]{3}\)))(([-| ]?[0-9]{3}[-| ]?[0-9]{4})?))$/;;
  
  return regex.test(str);
}