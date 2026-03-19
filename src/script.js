var buttons = document.querySelectorAll('button');
var visorElement = document.getElementById('visor');
buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        var ClickedButton = event.currentTarget;
        if (ClickedButton.id === 'btn-limpar') {
            limpar();
        }
        else if (ClickedButton.id === 'btn-apagar') {
            apagar();
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
        var conteudo = visorElement.innerText;
        if (conteudo.length === 1) {
            visorElement.innerText = '0';
        }
        else {
            visorElement.innerText = conteudo.substring(0, conteudo.length - 1);
        }
    }
}
