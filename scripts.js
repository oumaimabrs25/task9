document.addEventListener("DOMContentLoaded", () => {
    const addNewBtn = document.getElementById('addNewBtn');
    const popupForm = document.getElementById('popupForm');
    const closeBtn = document.getElementById('closeBtn');
    const todoForm = document.getElementById('todoForm');
    const todosZone = document.getElementById('todoList');

    
    addNewBtn.addEventListener('click', () => {
        popupForm.style.display = 'flex';
    });

   
    closeBtn.addEventListener('click', () => {
        popupForm.style.display = 'none';
    });

 
    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const deadline = document.getElementById('deadline').value;

        const todoItem = createTodoItem(title, description, deadline);

        todosZone.appendChild(todoItem);

        
        todoForm.reset();
        popupForm.style.display = 'none';
    });

    
    function createTodoItem(title, description, deadline) {
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo-item');

        const content = document.createElement('div');
        content.className = 'content';
        content.innerHTML = `<h3>${title}</h3><p>${description}</p><span class="deadline">${deadline}</span>`;

        const checkBtn = document.createElement('button');
        checkBtn.className = 'action-btn done';
        checkBtn.innerHTML = '&#10004;';

        const removeBtn = document.createElement('button');
        removeBtn.className = 'action-btn remove';
        removeBtn.innerHTML = '&#10006;';

        todoItem.appendChild(content);
        todoItem.appendChild(checkBtn);
        todoItem.appendChild(removeBtn);

        
        checkBtn.addEventListener('click', () => {
            todoItem.classList.toggle('done');
        });

       
        removeBtn.addEventListener('click', () => {
            todosZone.removeChild(todoItem);
        });

        return todoItem;
    }
});
