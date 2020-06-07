var filterCaracter = function(event) {
    return ((event.charCode >= 48 && event.charCode <= 57) || (event.charCode == 44 || event.charCode == 46))
}

function somar() {
    n1 = parseFloat(document.getElementById("number-one").value);
    n2 = parseFloat(document.getElementById("number-two").value);
    result = document.getElementById("result");
    result.value = n1 + n2;
    console.log("Resultado", result.value)
}