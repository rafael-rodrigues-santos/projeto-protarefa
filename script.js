// Permite apenas a digitação de números, ponto e vírgula
let filterCaracter = function (event) {
  return (
    (event.charCode >= 48 && event.charCode <= 57) ||
    event.charCode == 44 ||
    event.charCode == 46
  );
};

// Verifica se os inputs estão preenchidos
// Se não estiver remove a classe numbers e adciona a classe erro
// Se estiverem preenchidos, realiza a soma e preenche o resultado na input result
function somar() {
  n1 = document.querySelector("#number-one");
  n2 = document.querySelector("#number-two");
  result = document.querySelector("#result");
  if (n1.value == "") {
    n1.classList.add("erro");
  } else if (n2.value == "") {
    n2.classList.add("erro");
  } else {
    result.value = parseFloat(n1.value) + parseFloat(n2.value);
    n1.classList.remove("erro");
    n2.classList.remove("erro");
  }
}
