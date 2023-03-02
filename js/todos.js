function loadDataTotos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => displayTodos(data))
}

function displayTodos(todos){
    //get the container
    const todosContainer=document.getElementById('todos-container');
   for(const todo of todos){
    //create the child element
    const todosDiv=document.createElement('div');
    todosDiv.classList.add('todo');
    // set innerText or innerHTML
    todosDiv.innerHTML=`
    <h3>title: ${todo.title}</h3>
    <h3>Id: ${todo.id}</h3>
    <p>Is Completed: ${todo.completed ===true ? 'completed' : 'not Completed' }</p>
    `;
    //append child
    todosContainer.appendChild(todosDiv);
   }

}

loadDataTotos();
