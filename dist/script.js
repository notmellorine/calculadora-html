var buttons = document.querySelectorAll('button');
var visorElement = document.getElementById('visor');
console.log(buttons);
buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        var ClickedButton = event.currentTarget;
        if (ClickedButton.id === 'btn-limpar') {
            limpar();
        }
        else if (ClickedButton.id === 'btn-apagar') {
            apagar();
        }
        else if (ClickedButton.id === 'btn-igual') {
            calcular();
        }
        else {
            var buttonText = (ClickedButton.textContent || ClickedButton.innerText).trim();
            exib(buttonText);
        }
    });
});
function exib(text) {
    if (visorElement) {
        if (visorElement.innerText === '0') {
            visorElement.innerText = text;
        }
        else {
            visorElement.innerText += text;
        }
    }
}
function limpar() {
    if (visorElement) {
        visorElement.innerText = '0';
    }
}
function apagar() {
    if (visorElement && visorElement.innerText !== '0') {
        let conteudo = visorElement.innerText;
        if (conteudo.length === 1) {
            visorElement.innerText = '0';
        }
        else {
            visorElement.innerText = conteudo.substring(0, conteudo.length - 1);
        }
    }
}

function calcular() {
    var total = 0;
    if (visorElement) {
        var total_1 = eval(visorElement.innerText);
        visorElement.innerText = total_1;
    }
}

export {};
//# sourceMappingURL=script.js.map