var names = ["Tom", "Lily", "Jose", "Sarah"];
var height = [65, 60, 72, 68];

var $ = function (id) { return document.getElementById(id); };



window.onload = function () {
    $("show_results").onclick = showResult;
    $("add").onclick = addHeight;
    $("display_height").onclick = displayHeight;
    $("name").focus();
};

function showResult() {
    var average = 0;
    var highest = 0;
    var highestName = "";
    for(i = 0; i < height.length; i++) {
        average += height[i];
        if(height[i] > highest){
            highest = height[i];
            highestName = names[i];
        }
    }
    average = average/height.length;
    document.getElementById("results").innerHTML = "<h2>Results</h2><p>Average Height = " + average + "</p>" + "<p>Highest height = " + highestName + " with a height of " + highest + "</p>";
}

function displayHeight() {
    var heightTable = "<h2>Heights</h2><th>Name</th><th>Heights</th>";
    for(i = 0; i < height.length; i++) {
        heightTable = heightTable + "<tr><td>" + names[i] + "</td><td>" + height[i] + "</td></tr>";
    }
    document.getElementById("height_table").innerHTML = heightTable;
}

function addHeight() {
    if(document.getElementById("name").value == "" || parseInt(document.getElementById("height").value) < 0 || parseInt(document.getElementById("height").value) > 100 || isNaN(parseInt(document.getElementById("height").value))) {
        alert("You must enter a name and a valid height");
        $("name").focus();
        return false;
    }
    names.push(document.getElementById("name").value);
    height.push(parseInt(document.getElementById("height").value));
    $("name").focus();
}