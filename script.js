// seleciona todos os botões da calculadora
const buttons = document.querySelectorAll(".button");

// seleciona a caixa de texto onde os números e operações serão exibidos
const display = document.querySelector(".display-text");

// adiciona um listener de eventos em cada botão da calculadora
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    // obtém o valor do botão clicado
    const value = button.textContent;

    // verifica se o botão clicado é um número
    if (!isNaN(value) || value === ".") {
      // adiciona o valor ao display
      display.value += value;
    } else if (value === "C") {
      // limpa o display
      display.value = "";
    } else if (value === "+/-") {
      // inverte o sinal do número no display
      display.value = display.value * -1;
    } else if (value === "%") {
      // calcula a porcentagem do número no display
      display.value = display.value / 100;
    } else if (value === "=") {
      // calcula o resultado da operação no display
      display.value = eval(display.value);
    } else if (value === "DEL") {
      // remove o último caractere do valor atual do display
      display.value = display.value.slice(0, -1);
    } else if (value === "√") {
      display.value = Math.sqrt(parseFloat(display.value));
    } else {
      // adiciona o operador ao display
      display.value += " " + value + " ";
    }
  });
});
