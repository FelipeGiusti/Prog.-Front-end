let divContainer = document.querySelector('.image');

function mostrar(){
    if(divContainer.style.display === 'none' || divContainer.style.display === ''){
        divContainer.style.display = 'flex';
    } else {
        alert("Tabela de jogos já está sendo mostrada em tela");
    };
}