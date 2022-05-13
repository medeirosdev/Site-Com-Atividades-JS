'use strict';

//let banco = [
    //{'tarefa' : ' estudar js' , 'status': ''},
    //{'tarefa' : 'Netflix' , 'statis' : 'checked'}
//]

const getBanco = () => JSON.parse(localStorage.getItem('todoList')) ?? [];
// esse duplo ? é do novo EcmaScript de 2020, ele basicamente fala : se o anterior for vazio, então: logo
// ele fala, se o localstorage.getItem('todolist) for vazio, entao ele passa um array vazio

const setBanco = (banco) => localStorage.setItem('todoList', JSON.stringify(banco))




//<label class="todo__item">
    //<input type="checkbox">
       // <div>teste de item 1</div>
   // <input type="button" value="X">
//</label>
// vamos fazer um script para criar caixas de to do list iguais a essa de cima
const criarItem = (tarefa , status='' , indice) => {  // o status='' significa que por padrao o status é vazio, caso nada seja colocado ali
    const item = document.createElement('label') //cria um elementl label
    item.classList.add("todo__item") //adiciona a classe "todo_list" ao elemento label criado
    item.innerHTML =     //isso cria, dentro do label criado antes, todo esse parágrafo
    `
    <input type="checkbox" ${status} data-indice = ${indice}>
         <div> ${tarefa}</div>                       
    <input type="button" value="X" data-indice = ${indice}>
     
    `
    // o ${} se chama string interpolation, no qual podemos transformar algo dentro das chaves em variável para chamar
    document.getElementById("todoList").appendChild(item)


}
const limparTarefas = () => {
    const todoList = document.getElementById('todoList');
    while(todoList.firstChild){
        todoList.removeChild(todoList.lastChild);
    }
}



const atualizarTela = () => {
    limparTarefas();
    const banco = getBanco();
    banco.forEach ( (item ,indice) => criarItem(item.tarefa , item.status , indice))    // iremos pegar o banco em json lá em cima, e aplicar uma função CriarItem em cada uma para criar uma tarefa com cada objeto
}






const inserirItem = (evento) =>{
    const tecla = evento.key;
    const texto = evento.target.value; // pega o valor do target da onde está sendo escrito
    if (tecla === 'Enter'){
        const banco = getBanco();
        banco.push( {'tarefa' : texto , 'statis' : ''});
        setBanco(banco);
        atualizarTela();
        evento.target.value=''; // limpa a tarefa
    }
}

document.getElementById('newItem').addEventListener('keypress', inserirItem) // nesse eventlistener, ele manda a tecla pressionada no keyopress para a função do lado


const removeritem = (indice) => {
    const banco = getBanco();
    banco.splice(indice, 1);
    setBanco(banco)
    atualizarTela();
}

const atualizaritem = (indice) => {
    const banco = getBanco()
    banco[indice].status  = elemento.dataset.indice === '' ? 'checked' : '' ;
    getBanco(banco)
    atualizarTela()
    // o ? significa então , e o : significa se não
}








const clickItem = (evento) => {
    const elemento = evento.target;
    if (elemento.type === 'button'){
        const indice = elemento.dataset.indice;
        removeritem(indice);
    }

    else if ( elemento.type === 'checkbox'){
        const indice = elemento.dataset.indice;
        atualizaritem(indice)
    }
}











document.getElementById('todoList').addEventListener('click' , clickItem);

























atualizarTela();