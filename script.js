function check() {
    var x;
    x = document.getElementById('in_kg').value;
    if(isNaN(x) || x <= 0){
        window.alert("Enter number greater than zero");
    }else{
        var num;
        num = x * 1000;
        document.getElementById('grams').value = num;
        num = x * 2.2046;
        document.getElementById('pounds').value = num;
        num = x * 1000000;
        document.getElementById('mg').value = num;
        num = x * 0.0011023;
        document.getElementById('tonnes').value = num;
        num = x * 35.274;
        document.getElementById('ounce').value = num;
        num = x * 2.2046;

    }
};