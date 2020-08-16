var generatePasswordButton = document.getElementById("generate");

var upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var special = ['#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','['];
var number = [0,1,2,3,4,5,6,7,8,9];


function generateOptions() {


    var length = parseInt(prompt("How many characters would you like your password to contain?"));
    
    if (length < 8) {
        alert('The password must be at least 8 characters!');
        return;
    }
    if (length > 128) {
        alert('The password must be less than 128 characters!');
        return;
    }

    //prompt user for special characters
    var shouldIncludeSpecialCharacters = confirm("Do you want to include special characters?");
    
    //prompt user for numeric characters
    var shouldIncludeNumeric = confirm("Do you want to include numeric characters?");
    
    //prompt user for lowercase characters
    var shouldIncludeLowercase = confirm("Do you want to include lowercase characters?");
    
    //prompt user for uppercase characters
    var shouldIncludeUppercase = confirm("Do you want to include uppercase characters?");
    
    if (!shouldIncludeLowercase && !shouldIncludeUppercase && !shouldIncludeNumeric && !shouldIncludeSpecialCharacters) {
        alert("Your password must contain at least one special, numeric, lowercase, or uppercase character");
        return;
    }

    var questionOptions = {
        length: length,
        specialCharacters: shouldIncludeSpecialCharacters,
        numeric: shouldIncludeNumeric,
        lowerCase: shouldIncludeLowercase,
        upperCase: shouldIncludeUppercase
    }

    return questionOptions;

}

function generatePassword() {

    var options = generateOptions();
    console.log(options)

    var passwordPool = [];
    console.log(passwordPool)

    if (options.specialCharacters) {
        for (i = 0; i < special.length; ++i) {
            passwordPool.push(special[i]);
        }
    } 
    if (options.numeric) {
        for (i = 0; i < number.length; ++i) {
        passwordPool.push(number[i]);
        }
    }
    if (options.lowerCase) {
        for (i = 0; i < lower.length; ++i) {
        passwordPool.push(lower[i]);
        }
    }
    if (options.upperCase) {
        for (i = 0; i < upper.length; ++i) {
        passwordPool.push(upper[i]);
        }
    }

    var finalPassword = [];

    for (let i = 0; i < options.length; ++i) {
        var randomPicker = Math.floor(Math.random() * Math.floor(passwordPool.length));
         finalPassword.push(passwordPool[randomPicker])
    }

    console.log(finalPassword)

    var superFinal = finalPassword.join('');
    console.log(superFinal)

    document.getElementById("password").textContent = superFinal;
}

    var password = "";

generatePasswordButton.addEventListener('click', generatePassword);