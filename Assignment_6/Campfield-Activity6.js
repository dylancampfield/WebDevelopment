while(true) {
    var entry = parseInt(prompt("Please enter a number grade between 0 and 120. \nEnter -1 to finish.")); //Gets user input

    if(entry == -1) {
        break; //Checks if user is finished entering values
    }
    if(isNaN(entry) || entry < 0 || entry > 120) { //Validation check with error message
        alert("Error: Invalid value. Please only enter numbers between 0 and 120.");
        continue;
    }
    alert("Number grade = " + entry + "\nLetter grade = " + replaceGrades(entry)); //Shows outcome in pop-up window
}

//Takes user entry between 0-120 and returns a letter grade based on the grading scale
function replaceGrades(number) {
    if(number >= 100) {
        return "A";
    } else if(number >= 80) {
        return "B";
    } else if(number >= 70) {
        return "C";
    } else if(number >= 60) {
        return "D";
    } else {
        return "F";
    }
}