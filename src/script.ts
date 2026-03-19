const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('button');
const visorElement = document.getElementById('visor');

buttons.forEach(button => {
    button.addEventListener('click', (event: MouseEvent) =>{
        const ClickedButton = event.currentTarget as HTMLButtonElement;
        const buttonText: string = ClickedButton.textContent || ClickedButton.innerText;
        
        exib(buttonText)
    })
})

function exib(text: string){
    if(visorElement){
        if(visorElement.innerText === '0' && text !== '.') {
            visorElement.innerText = text;
        } else {
            visorElement.innerText += text;
        }
    }
}