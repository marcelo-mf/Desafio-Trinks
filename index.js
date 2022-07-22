let message = '';

function verifyNumber() {

    let number = document.querySelector(".number-input").value;
    const messageNumber = number;
    let happyLucky = {happy: false, lucky: false};

    const isLucky = findLuckyNumber(number);
    if(isLucky) happyLucky.lucky = true;

    for (let i = 0; i <= 100; i++) {
        
        let stringDigits = number.toString().split('');
        let digits = stringDigits.map(Number);
        let digitsSquareSum = digits.reduce((total, num) => total + num**2, 0);

        if(digitsSquareSum === 1){
            happyLucky.happy = true;

            break
        }

        number = digitsSquareSum;
    };

    if(happyLucky.happy && happyLucky.lucky){
        message = `<h2>${messageNumber} é feliz 😀 e sortudo 🍀<h2>`
    } else if(!happyLucky.happy && happyLucky.lucky){
        message = `<h2>${messageNumber} não é feliz 😔, mas é sortudo 🍀<h2>`
    } else if(!happyLucky.happy && !happyLucky.lucky){
        message = `<h2>${messageNumber} não é feliz 😔 e não é sortudo 🐈‍⬛<h2>`
    } else if(happyLucky.happy && !happyLucky.lucky){
        message = `<h2>${messageNumber} é feliz 😀, mas não é sortudo 🐈‍⬛<h2>`
    }

    document.querySelector('.result-text').innerHTML += message;
    document.querySelector('.form-container').classList.add("hide");
    document.querySelector('.result-container').classList.remove("hide");
}

function findLuckyNumber(stringNumber) {

    const luckyNumbers = [1, 3, 7, 9, 13, 15, 21, 25, 31, 33, 37, 43, 49, 51, 63, 67, 69, 73, 75, 79, 87, 93, 99];
    const number = parseInt(stringNumber);
    let left = 0;
    let rigth = luckyNumbers.length - 1;
  
    while (left <= rigth) {
        
        const middle = Math.floor((left + rigth) / 2);
        const element = luckyNumbers[middle];
        console.log(element);
        if(number === element){
            return true;
        } else if(element < number) {
            left = middle + 1;
        } else{
            rigth = middle - 1;
        };  
    }
    
    return false
}

function verifyAnother() {

    document.querySelector(".number-input").value = '';
    window.location.reload();
}