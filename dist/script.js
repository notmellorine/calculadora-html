const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const ClickedButton = event.currentTarget;
        const buttonText = ClickedButton.textContent || ClickedButton.innerText;
        const number = Number(buttonText);
        console.log(number);
    });
});
export {};
//# sourceMappingURL=script.js.map