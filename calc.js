//defining buttons
var sumBtn = document.getElementById('sum');
var subBtn = document.getElementById('subtract');
var mulBtn = document.getElementById('multiply');
var divBtn = document.getElementById('division');

//mathematical functions
function sum() {
    var n1 = document.getElementById('number-1').value;
    var n2 = document.getElementById('number-2').value;
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    n1 = n1 + n2;
    return n1;

}

function subtract(a, b) {
    var n1 = document.getElementById('number-1').value;
    var n2 = document.getElementById('number-2').value;
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    n1 = n1 - n2;
    return n1;
}

function multiply(a, b) {
    var n1 = document.getElementById('number-1').value;
    var n2 = document.getElementById('number-2').value;
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    n1 = n1 * n2;
    return n1;
}

//function devByZero(num) {}

function division(a, b) {
    var n1 = document.getElementById('number-1').value;
    var n2 = document.getElementById('number-2').value;
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);

    //checks if number 2 is zero
    if (n2 == 0) {
        document.getElementById("show").style.fontSize = "60px";
        document.getElementById("show").style.paddingTop = "20px";
        n1 = "You can't divide by 0!";
        return n1;
    } else {
        n1 = n1 / n2;
        return n1;
    }

}



function displayResult(val) {
    if (isNaN(val) == true && !(val == "You can't divide by 0!")) {
        document.getElementById("show").innerHTML = 'value not set';
    } else {
        document.getElementById("show").innerHTML = val.toFixed(2);

    }

}

//Button events - onclick button action
sumBtn.addEventListener("click", function () {
    var ans = sum();
    displayResult(ans);

});


subBtn.addEventListener("click", function () {
    var ans = subtract();
    displayResult(ans);

});

mulBtn.addEventListener("click", function () {
    var ans = multiply();
    displayResult(ans);

});

divBtn.addEventListener("click", function () {
    var ans = division();
    displayResult(ans);

});