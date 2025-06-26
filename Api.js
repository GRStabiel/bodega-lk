const URL = 'https://api.adviceslip.com/advice';

const ConselhoTela = document.getElementById('frase-tela');

async function chamarApi(){
    try {
        const recebe = await fetch(URL, { cache: 'no-cache' });

        const dados = await recebe.json();

        const aviso = dados.slip.advice;

        ConselhoTela.textContent = aviso;

    } catch(problema){
        console.error("Problema Em Buscar Frase Da Api",problema);
        ConselhoTela.textContent = "Não Foi Possivel Buscar Frase Motivacional";
    }
}

chamarApi();