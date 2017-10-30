var Calculator = prompt("Which Calculator would you like to use? Press A for Advanced and B for Basic, If you would like to use the BMI calculator press X. To use the MPG calculator press M.");

if (Calculator == "B") {
  var input1 = prompt("Welcome to the Basic Calculator, please input your first value.");
  alert(input1);
  var input2 = prompt("please input the second number");
  alert(input2);
  var inputOp = prompt("please input the operator");
    if (inputOp == "+") {
        Answer = parseFloat(input1) + parseFloat(input2);
        alert("The result is " + Answer);
    } else if (inputOp == "-") {
        Answer = parseFloat(input1) - parseFloat(input2);
        alert("The result is " + Answer);
    }else if (inputOp == "*") {
        Answer = parseFloat(input1) * parseFloat(input2);
        alert("The result is " + Answer);
    }else if (inputOp == "/") {
        Answer = parseFloat(input1) / parseFloat(input2);
        alert("The result is " + Answer);
    }
} else if (Calculator == "A") {
    var input1 = prompt("Welcome to the Advanced Calculator, please input your value.");
    alert(input1);
    var input2 = prompt("Please input your second value");
    alert(input2)
    var inputOp = prompt("please indicate which operateor to use; 'power' function or 'root' function")
      if (inputOp == "power") {
        Answer = Math.pow(parseFloat(input1), parseFloat(input2));
        alert("The result is " + Answer);
      }
      if (inputOp == "root") {
        Answer = Math.sqrt(parseFloat(input1));
        alert("The result is " + Answer);
      }
} else if (Calculator == "X") {
    var system = prompt("Please choose between the metric(m) and imperial(i) system");
    if (system == "m") {
      alert("Metric System (metres, kilograms)");
      var height = prompt("What is your height in metres?");
      var weight = prompt("What is your weight in kilograms?");
      Answer1 = parseFloat(weight) / parseFloat(height);
      Answer2 = parseFloat(Answer1) / parseFloat(height);
      alert("Your BMI is " + Answer2);
} else if (system == "i") {
    alert("Imperial System (Pounds, Feet)");
    var height = prompt("What is your height in inches (12 inches for every foot)");
    var weight = prompt("What is your weight in pounds?")
    Answer1 = parseFloat(weight) * 703;
    Answer2 = parseFloat(height) * parseFloat(height)
    Answer3 = Answer1 / Answer2;
    alert("Your BMI is " + Answer3)
}
} else if (Calculator == "M") {
    alert("Trip Calculator; This will calculate the duration and cost of the trip.")
    var vel = prompt("what is the average speed of the trip? (in miles per hour)")
    var dist = prompt("How far are you travelling? (in miles)")
    var mpg = prompt("What is your average mpg?")
    var cost = prompt("How much does the fuel cost? (per gallon)")
    timeAnswer = parseFloat(dist) / parseFloat(vel)
    alert("The trip will take " + timeAnswer "hours")
    if (vel < "61") {
      costpg = (parceFloat(dist) / parceFloat(mpg)) * parceFloat(cost);
      alert("The cost of fuel for travel is " + costpg);
    }
  }
