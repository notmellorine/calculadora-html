var buttons = document.querySelectorAll('button');
var visorElement = document.getElementById('visor');
buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        var ClickedButton = event.currentTarget;
        var buttonText = ClickedButton.textContent || ClickedButton.innerText;
        exib(buttonText);
    });
});
function exib(text) {
    if (visorElement) {
        if (visorElement.innerText === '0' && text !== '.') {
            visorElement.innerText = text;
        }
        else {
            visorElement.innerText += text;
        }
    }
}
