const concluirTarefa = (atualiza, id) => {
    const tarefasCadastrdas = JSON.parse(localStorage.getItem('tarefas'));

    tarefasCadastrdas[id].concluida = !tarefasCadastrdas[id].concluida;
    localStorage.setItem('tarefas', JSON.stringify(tarefasCadastrdas));

    atualiza();
}

const BotaoConclui = (atualiza, id) => { 
    const botaoConclui = document.createElement('button')  
    
    botaoConclui.classList.add('check-button')
    botaoConclui.innerText = 'concluir'

    botaoConclui.addEventListener('click', () => concluirTarefa(atualiza, id))

    return botaoConclui

}

export default BotaoConclui

