let todoList = [
    {
        item : 'Buy Milk',
        dueDate : '4/10/2023'
    } ,
    {
        item : 'Go To College',
        dueDate : '4/10/2023'
    }

];

displayItem();

function addTodo(){
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');

    let todoItem = inputElement.value;
    let todoDate = dateElement.value;

    todoList.push({item: todoItem , dueDate: todoDate});
    inputElement.value='';
    dateElement.value='';
    displayItem();

}

function displayItem(){
    let containerElement = document.querySelector('.todo-container');
    let newHtml= '';
    
    for(let i =0 ; i < todoList.length ; i++){
        let {item , dueDate} = todoList[i];
        newHtml +=`
        <span>${item}</span>
        <span>${dueDate}</span>
        
        <button class='btn-delete' onClick="todoList.splice(${i},1);
        displayItem();">Delete</button>
         `;
         // to delete the item we use slice method . here in slice method
         // two arguments are taken ( from where , how many delete )
        }

    containerElement.innerHTML = newHtml;

}