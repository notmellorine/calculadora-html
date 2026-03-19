const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('button');
let visorElement = document.getElementById('visor');

buttons.forEach(button => {
    button.addEventListener('click', (event: MouseEvent) =>{
        const ClickedButton = event.currentTarget as HTMLButtonElement;
        
        if(ClickedButton.id === 'btn-limpar'){
            limpar();
        } else if(ClickedButton.id === 'btn-apagar') {
            apagar();
        } else{
            const buttonText: string = (ClickedButton.textContent || ClickedButton.innerText).trim();
            exib(buttonText);
        }
    })
})

function exib(text: string){
    if(visorElement){
        if(visorElement.innerText === '0') {
            visorElement.innerText = text;
        } else {
            visorElement.innerText += text;
        }
    }
}

function limpar() {
    if(visorElement){
        visorElement.innerText = '0';
    }
}

function apagar() {
    if(visorElement && visorElement.innerText !== '0'){
        let conteudo = visorElement.innerText;
        if(conteudo.length === 1){
            visorElement.innerText = '0';
        } else {
            visorElement.innerText =  conteudo.substring(0, conteudo.length -1);
        }
    }
}