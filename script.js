function calculateArea() {
    var base = parseFloat(document.getElementById("base").value);
    var height = parseFloat(document.getElementById("height").value);

    if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
        alert("Please enter valid positive numbers for base and height.");
        return;
    }

    var area = 0.5 * base * height;
    document.getElementById("result").innerHTML = "The area of the triangle is: " + area.toFixed(2) + " square units";
}
