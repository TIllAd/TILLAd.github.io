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

    while (num2 !== 0) {
        var temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }

    alert("The GCD is: " + num1);
}

function showTab(tabId) {
    var tabs = document.getElementsByClassName('tab-content');
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].style.display = 'none';
    }

    document.getElementById(tabId).style.display = 'block';
  }