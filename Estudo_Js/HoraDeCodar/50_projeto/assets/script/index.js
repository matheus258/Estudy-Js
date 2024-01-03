// Funcao adiciona tarefa
function addTask() {
  // Titulo da tarefa
  const taskTitle = document.querySelector("#newTask").value;
  if (taskTitle) {
    const template = document.querySelector(".template");

    const newModel = template.cloneNode(true);

    // Adiciona title
    const ValorTexto = document.createTextNode(taskTitle);
    newModel.querySelector(".taskTitle").appendChild(ValorTexto);

    // remove
    newModel.classList.remove("template");
    newModel.classList.remove("hide");

    //Adicionar na Lista
    const list = document.querySelector("#taskList");
    list.appendChild(newModel);
  } else {
    alert("Valor Invalido, preencha o campo!!");
  }
}

const btnTarefa = document.querySelector("#add-btn");

btnTarefa.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("Button Funcionando");

  addTask();
});
