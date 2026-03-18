const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', (event: MouseEvent) =>{
        const ClickedButton = event.currentTarget as HTMLButtonElement;
        const buttonText: string = ClickedButton.textContent || ClickedButton.innerText;
        const number = Number(buttonText);
        console.log(number);
    })
})
