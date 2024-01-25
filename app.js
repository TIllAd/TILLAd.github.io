var tabButtons=document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels=document.querySelectorAll(".tabContainer  .tabPanel");

function showPanel(panelIndex,colorCode) {
    tabButtons.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
    });
    tabButtons[panelIndex].style.backgroundColor=colorCode;
    tabButtons[panelIndex].style.color="white";
    tabPanels.forEach(function(node){
        node.style.display="none";
    });
    tabPanels[panelIndex].style.display="block";
    tabPanels[panelIndex].style.backgroundColor=colorCode;
}
showPanel(0,'#f44336');

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function euclid() {
   
    var num1 = parseInt(prompt("Enter the first number:"));
    var num2 = parseInt(prompt("Enter the second number:"));
    
    if (isNaN(num1)) {
        alert("Invalid input for the first number. Please enter a valid number.");
        return;
    }
    
    if (isNaN(num2)) {
        alert("Invalid input for the first number. Please enter a valid number.");
        return;
    }

    var num2 = parseInt(prompt("Enter the second number:"));

   

    while (num2 !== 0) {
        var temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }

    alert("The GCD is: " + num1);
}