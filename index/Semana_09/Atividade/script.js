const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask(){
  const taskText = taskInput.value.trim();
  if(taskText !== ''){
    const newItem = document.createElement('li');
    newItem.innerHTML = `
    <span>${taskText}</span>
    <button onclick="Edit()">Editar</button>
    <button onclick="Confirm()">Feito</button>
    <button onclick="Delete(this)">Remover</button>
    `;
    taskList.appendChild(newItem);
    taskInput.value = '';
  } else {
    console.log("Input ta vazio");
  }
}

function Delete(button) {
  const itemToRemove = button.parentElement;
  taskList.removeChild(itemToRemove);
}

function Confirm(){
  
}