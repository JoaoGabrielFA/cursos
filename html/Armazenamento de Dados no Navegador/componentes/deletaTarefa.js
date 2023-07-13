const deletarTarefa = (atualiza, id) => { 
    const index = id;
    const tarefasCadastrdas = JSON.parse(localStorage.getItem('tarefas'));

    tarefasCadastrdas.splice(index, 1);
    localStorage.setItem('tarefas', JSON.stringify(tarefasCadastrdas));
    atualiza();
}

const BotaoDeleta = (atualiza, id) => { 
    const botaoDeleta = document.createElement('button')

    botaoDeleta.innerText = 'deletar'
    botaoDeleta.addEventListener('click', () => deletarTarefa(atualiza, id))

    return botaoDeleta
}

export default BotaoDeleta