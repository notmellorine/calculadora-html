const buttons = document.querySelectorAll('button');
const visorElement = document.getElementById('visor');
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const ClickedButton = event.currentTarget;
        const buttonText = ClickedButton.textContent || ClickedButton.innerText;
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
export {};
//# sourceMappingURL=script.js.map