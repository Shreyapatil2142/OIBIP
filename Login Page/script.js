function display() {

    var f = document.getElementById("fname").value;
    var p = document.getElementById("pass").value;
    var a = 'ABC';
    var b = 123;

        if (f == a && p == b) {
            alert("Hello " + a);
        }
        else{
            alert("Enter Correct credentials !!");
        }
    }