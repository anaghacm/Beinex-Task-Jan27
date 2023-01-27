document.addEventListener('DOMContentLoaded', function () {

    const date = new Date();

    //Question No. 1

    let displayDay = document.getElementById('display-day');
    let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thurday', 'Friday', 'Saturday'];
    displayDay.innerText = 'Today is : ' + weekdays[date.getDay()];

    let displayTime = document.getElementById('display-time');
    let timezone = 'AM';
    let hours = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    if (hours > 12) {
        hours -= 12;
        timezone = 'PM';
    }
    displayTime.innerText = "Current Time is : " + hours + timezone + ' : ' + min + ' : ' + sec;

    //Question No. 3
    let displayDate = document.getElementById('display-date');
    let currentDate = date.getDate();
    let currentMonth = date.getMonth() + 1;
    let currentYear = date.getFullYear();
    if (currentDate < 10) {
        currentDate = '0' + currentDate;
    }
    if (currentMonth < 10) {
        currentMonth = '0' + currentMonth;
    }
    displayDate.innerText = currentDate + ' - ' + currentMonth + ' - ' + currentYear;

    //Question No. 4
    let triangleArea = document.getElementById('triangle-area');
    let a = 5, b = 6, c = 7;
    let s = (a + b + c) / 2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    triangleArea.innerText = 'Area of a triangle where lengths of the three of its sides are 5, 6, 7 : ' + area;

    //Question No. 5
    let strAppend = document.getElementById('string-manipulation');
    let str = 'w3resource';
    setInterval(function () {
        let firstChar = str.charAt(0);
        str = str.substring(1, str.length);
        str += firstChar;
        strAppend.innerHTML = str;
    }, 400);

    //Quesion No. 9
    let today = document.getElementById('today');
    let resultq9 = document.getElementById('result-q9');
    let xmas;
    if (date.getMonth() == 11 && date.getDate() > 25) {
        xmas = new Date(date.getFullYear() + 1, 11, 25);
    }
    else {
        xmas = new Date(date.getFullYear(), 11, 25);
    }

    today.innerText = 'Today : ' + currentDate + ' - ' + currentMonth + ' - ' + currentYear;
    //Calculating time in milliseconds and converting to days
    let remDays = Math.floor((xmas.getTime() - date.getTime()) / 86400000);
    if (remDays == 0) {
        resultq9.innerText = "Woww!!! Today is Christmas Day!"
    }
    else {
        resultq9.innerText = "It's " + remDays + ' days remaining for Christmas!';
    }

    //Quesion No. 12
    let getUrl = document.getElementById('get-url');
    getUrl.innerText = 'Current Page URL : ' + window.location.href;
})

//Question No. 6
function checkLeap() {
    let year = document.getElementById('get-year');
    let result = document.getElementById('result');
    if (year.value == '') {
        result.innerText = 'Please enter a valid year';
        result.style.color = 'red';
    }
    else {
        result.style.color = '#2A0800';
        if (year.value % 4 === 0 || year.value % 100 === 0 || year.value % 400 === 0) {
            result.innerText = year.value + ' is a Leap Year';

        }
        else {
            result.innerText = year.value + ' is NOT a Leap Year';
        }
    }
}

//Question No. 7
function checkDay() {
    let year = document.getElementById('year-q7');
    let result = document.getElementById('result-q7');
    if (year.value < 2014 || year.value > 2050) {
        result.innerText = 'Please enter a valid year';
        result.style.color = 'red';
    }
    else {
        result.style.color = '#2A0800';
        let checkDAte = new Date('Jan 1, ' + year.value);
        if (checkDAte.getDay() === 0) {
            result.innerText = '1st January of ' + year.value + ' is a Sunday';

        }
        else {
            result.innerText = '1st January of ' + year.value + ' is NOT a Sunday';
        }
    }
}

//Question No. 8
function checkNumber() {
    let userInput = document.getElementById('year-q8').value;
    let result = document.getElementById('result-q8');
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    if (userInput < 0 || userInput > 10 || userInput == '') {
        result.innerText = 'Please enter a valid number';
        result.style.color = 'red';
    }
    else {
        result.style.color = '#2A0800';

        if (userInput == randomNumber) {
            result.innerText = 'Random Number : ' + randomNumber + ' (Good Work!!!)';

        }
        else {
            result.innerText = 'Random Number : ' + randomNumber + ' (Not Matched..)';
        }
    }
}

//Question No. 10
function quesion10(option) {
    let input1 = document.getElementById('number1').value;
    let input2 = document.getElementById('number2').value;
    let result = document.getElementById('result-q10');
    if (input1 == '' || input2 == '') {
        result.innerText = 'Please enter valid numbers';
        result.style.color = 'red';
    }
    else {
        result.style.color = '#2A0800';
        if (option == 1) {
            result.innerText = 'The result is : ' + input1 * input2;
        }
        else if (option == 2) {
            result.innerText = 'The result is : ' + input1 / input2;
        }
    }
}

//Question No. 11
function convertTemp() {
    let temp = document.getElementById('temp').value;
    let result = document.getElementById('result-q11');
    let radiobtns = document.getElementsByName('temperature');
    let type, finalTemp;
    if (temp == '') {
        result.innerText = 'Please enter a valid temperature';
        result.style.color = 'red';
    }
    else {
        result.style.color = '#2A0800';
        for (let rbtn of radiobtns) {
            if (rbtn.checked) {
                type = rbtn.value;
                break;
            }
        }
        if (type == 'Celsius') {
            finalTemp = (9 * temp / 5) + 32 + ' Fahrenheit';
        }
        else if (type == 'Fahrenheit') {
            finalTemp = (temp - 32) * 5 / 9 + ' Celsius';
        }
        result.innerText = finalTemp;
    }
}

//Question No. 14
function getExtension() {
    let fileName = document.getElementById('get-file').value;
    let result = document.getElementById('result-q14');
    if (fileName == '') {
        result.innerText = 'Please choose a random file';
        result.style.color = 'red';
    }
    else {
        result.style.color = '#2A0800';
        let extension = fileName.substring(fileName.lastIndexOf('.') + 1);
        result.innerText = 'The file extension is : ' + extension;
    }
}

//Question No. 15 and No. 17
function difference(num) {
    let number15 = document.getElementById('get-numberq15').value;
    let number17 = document.getElementById('get-numberq17').value;

    let diff;
    let result15 = document.getElementById('result-q15');
    let result17 = document.getElementById('result-q17');

    if (num == 13) {
        if (number15 == '') {
            result15.innerText = 'Please enter a number';
            result15.style.color = 'red';
        }
        else {
            result15.style.color = '#2A0800';
            if (number15 <= 13) {
                diff = 13 - number15;
            }
            else {
                diff = (number15 - 13) * 2;
            }
            result15.innerText = 'The result is : ' + diff;
        }
    }
    else if (num == 19) {
        if (number17 == '') {
            result17.innerText = 'Please enter a number';
            result17.style.color = 'red';
        }
        else {
            result17.style.color = '#2A0800';
            if (number17 <= 19) {
                diff = 19 - number17;
            }
            else {
                diff = (number17 - 19) * 3;
            }
            result17.innerText = 'The result is : ' + diff;
        }
    }
}

//Question No. 16
function sumNumbers() {
    let input1 = document.getElementById('suminput1').value;
    let input2 = document.getElementById('suminput2').value;
    let result = document.getElementById('result-q16');
    let sum;
    if (input1 == '' || input2 == '') {
        result.innerText = 'Please enter two numbers';
        result.style.color = 'red';
    }
    else {
        result.style.color = '#2A0800';
        if (input1 == input2) {
            sum = (parseInt(input1) + parseInt(input2)) * 3;
        }
        else {
            sum = parseInt(input1) + parseInt(input2);
        }
        result.innerText = 'The result is : ' + sum;
    }
}

//Question No. 18
function checkFifty() {
    let input1 = document.getElementById('firstnum-q18').value;
    let input2 = document.getElementById('secondnum-q18').value;
    let result = document.getElementById('result-q18');
    if (input1 == '' || input2 == '') {
        result.innerText = 'Please enter two numbers';
        result.style.color = 'red';
    }
    else {
        result.style.color = '#2A0800';
        if (input1 == 50 || input2 == 50 || (parseInt(input1) + parseInt(input2)) == 50) {
            result.innerText = 'The result is : True';
        }
        else {
            result.innerText = 'The result is : False';
        }

    }
}

//Question No. 19
function withinTwenty() {
    let number = document.getElementById('get-numberq19').value;
    let result = document.getElementById('result-q19');

    if (number == '') {
        result.innerText = 'Please enter a number';
        result.style.color = 'red';
    }
    else {
        result.style.color = '#2A0800';
        if (Math.abs(100 - number) <= 20 || Math.abs(400 - number) <= 20) {
            result.innerText = 'The given number is in the 20 of 100 or 400';
        }
        else {
            result.innerText = 'The given number is NOT in the 20 of 100 or 400';
        }
    }
}

//Question No. 20
function checkPositive() {
    let input1 = document.getElementById('firstnum-q20').value;
    let input2 = document.getElementById('secondnum-q20').value;
    let result = document.getElementById('result-q20');
    if (input1 == '' || input2 == '') {
        result.innerText = 'Please enter two numbers';
        result.style.color = 'red';
    }
    else {
        result.style.color = '#2A0800';
        if ((input1 < 0 && input2 > 0) || (input1 > 0 && input2 < 0)) {
            result.innerText = 'First number is negetive and second one is positive';
        }
        else {
            result.innerText = 'Condition does not satisfy';
        }
    }
}

//Question No. 21
function modifyString() {
    let str = document.getElementById('get-string').value;
    let result = document.getElementById('result-q21');
    let firstChars = str.substring(0, 2);
    if (str == '') {
        result.innerText = 'Please enter a string';
        result.style.color = 'red';
    }
    else {
        result.style.color = '#2A0800';
        if (firstChars.toLowerCase() == 'py') {
            result.innerText = str;
        }
        else {
            result.innerText = 'Py' + str;
        }
    }
}

//Question No. 22
function removeChar() {
    let str = document.getElementById('get-inputstr').value;
    let index = document.getElementById('get-index').value;
    let result = document.getElementById('result-q22');
    if (str == '' || index == '') {
        result.innerText = 'Please enter a string and an index value';
        result.style.color = 'red';
    }
    else {

        if (index > str.length - 1) {
            result.innerText = 'Please enter a valid index between 0 and ' + (str.length - 1);
            result.style.color = 'red';
        }
        else {
            result.style.color = '#2A0800';
            result.innerText = 'Updated string : ' + str.replace(str[index], '');
        }
    }
}

//Question No. 23
function interChange() {
    let str = document.getElementById('get-string23').value;
    let result = document.getElementById('result-q23');

    if (str.length < 1) {
        result.innerText = 'Please enter a string';
        result.style.color = 'red';
    }
    else if (str.length == 1) {
        result.innerText = 'Updated string : ' + str;
    }
    else {
        result.style.color = '#2A0800';
        let firstChar = str.charAt(0);
        let lastChar = str.charAt(str.length - 1);
        str = str.substring(1, str.length);
        str = str.substring(0, str.length - 1);
        str = lastChar + str + firstChar;
        result.innerText = 'Updated string : ' + str;
    }
}

//Question No. 24
function modifybyFirst() {
    let str = document.getElementById('get-string24').value;
    let result = document.getElementById('result-q24');

    if (str.length < 1) {
        result.innerText = 'Please enter a string';
        result.style.color = 'red';
    }
    else {
        result.style.color = '#2A0800';
        let firstChar = str.charAt(0);
        str = firstChar + str + firstChar;
        result.innerText = 'Updated string : ' + str;
    }
}

//Question No. 25
function multipleCheck() {
    let number = document.getElementById('get-num25').value;
    let result = document.getElementById('result-q25');

    if (number < 0 || number == '') {
        result.innerText = 'Please enter a positive number';
        result.style.color = 'red';
    }
    else {
        result.style.color = '#2A0800';
        if (number % 3 == 0) {
            if (number % 7 == 0) {
                result.innerText = 'Given number is a multiple of 3 and 7';
            }
            else {
                result.innerText = 'Given number is a multiple of 3';
            }
        }
        else if (number % 7 == 0) {
            result.innerText = 'Given number is a multiple of 7';
        }
    }
}

//Question No. 26
function question26() {
    let str = document.getElementById('get-string26').value;
    let result = document.getElementById('result-q26');

    if (str.length < 1) {
        result.innerText = 'Please enter a string';
        result.style.color = 'red';
    }
    else {
        result.style.color = '#2A0800';
        let lastThree = str.substring(str.length - 3, str.length);
        str = lastThree + str + lastThree;
        result.innerText = 'Updated string : ' + str;
    }
}

//Question No. 27
function question27() {
    let str = document.getElementById('get-string27').value;
    let result = document.getElementById('result-q27');

    if (str.length < 1) {
        result.innerText = 'Please enter a string';
        result.style.color = 'red';
    }
    else {
        result.style.color = '#2A0800';
        let firstfour = str.substring(0, 4);
        if (firstfour.toLowerCase() == 'java') {
            result.innerText = 'String starts with the word java';
        }
        else {
            result.innerText = 'String does not start with the word java';
        }
    }
}

//Question No. 28
function question28() {
    let input1 = document.getElementById('firstnum-q28').value;
    let input2 = document.getElementById('secondnum-q28').value;
    let result = document.getElementById('result-q28');
    if (input1 == '' || input2 == '') {
        result.innerText = 'Please enter two numbers';
        result.style.color = 'red';
    }
    else {
        result.style.color = '#2A0800';
        if ((input1 <= 99 && input1 >= 50) || (input2 >= 50 && input2 <= 99)) {
            result.innerText = 'Either of the numbers are in the given range';
        }
        else {
            result.innerText = 'Condition does not satisfy';
        }
    }
}

//Question No. 29
function question29() {
    let input1 = document.getElementById('firstnum-q29').value;
    let input2 = document.getElementById('secondnum-q29').value;
    let input3 = document.getElementById('thirdnum-q29').value;
    let result = document.getElementById('result-q29');
    if (input1 == '' || input2 == '' || input3=='') {
        result.innerText = 'Please enter three numbers';
        result.style.color = 'red';
    }
    else {
        result.style.color = '#2A0800';
        if ((input1 <= 99 && input1 >= 50) || (input2 >= 50 && input2 <= 99) ||  (input3 >= 50 && input3 <= 99)) {
            result.innerText = 'One of the given numbers are in the specified range';
        }
        else {
            result.innerText = 'Condition does not satisfy';
        }
    }
}

//Question No. 30
function question30() {
    let str = document.getElementById('get-string30').value;
    let result = document.getElementById('result-q30');

    if (str.length < 1) {
        result.innerText = 'Please enter a string';
        result.style.color = 'red';
    }
    else {
        result.style.color = '#2A0800';
        let scriptCheck = str.substring(4, 10);
        if(scriptCheck.toLowerCase()=='script'){
            str=str.substring(0,4)+str.substring(10, str.length);
        }
        result.innerText = 'Result string : ' + str;
    }
}