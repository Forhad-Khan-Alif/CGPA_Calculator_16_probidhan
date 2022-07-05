function _final_gpa() {
    var a1 = document.getElementById("one").value;
    var a2 = document.getElementById("two").value;
    var a3 = document.getElementById("three").value;
    var a4 = document.getElementById("four").value;
    var a5 = document.getElementById("five").value;
    var a6 = document.getElementById("six").value;
    var a7 = document.getElementById("seven").value;
    var a8 = document.getElementById("eight").value;
    var _final = (parseFloat(a1) * 5) / 100 + (parseFloat(a2) * 5) / 100 + (parseFloat(a3) * 5) / 100 + (
        parseFloat(a4) * 10) / 100 + (parseFloat(a5) * 15) / 100 + (parseFloat(a6) * 20) / 100 + (
        parseFloat(a7) * 25) / 100 + (parseFloat(a8) * 15) / 100;
    document.getElementById("ften").value = _final; 
}

function myFunction() {
    location.reload();
}

function _myFunction() {
    window.print()
}