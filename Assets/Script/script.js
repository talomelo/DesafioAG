document.addEventListener('DOMContentLoaded', () => {
    // Seleciona os elementos da lista ordenada para tarefas diurnas e noturnas
    const dayTasks = document.querySelector('.task-table:nth-child(1) ol');
    const nightTasks = document.querySelector('.task-table:nth-child(2) ol');
    // Seleciona os campos de entrada para entradas de tarefas diurnas e noturnas
    const dayTaskInput = document.getElementById('day-task-input');
    const nightTaskInput = document.getElementById('night-task-input');
    // Selecione os botões para adicionar tarefas às listas diurnas e noturnas
    const addDayTaskButton = document.getElementById('add-day-task');
    const addNightTaskButton = document.getElementById('add-night-task');

    // Função para adicionar uma nova tarefa à lista de tarefas fornecida
    const addTask = (taskList, task) => {
        const li = document.createElement('li');
        li.textContent = task;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => taskList.removeChild(li);
        li.appendChild(removeButton);
        taskList.appendChild(li);
    };

    // Ouvinte de eventos para o botão de adição de tarefa diária
    addDayTaskButton.addEventListener('click', () => {
        const task = dayTaskInput.value.trim();
        if (task) {
            addTask(dayTasks, task);
            dayTaskInput.value = '';
        }
    });

    // Ouvinte de eventos para o botão de adição de tarefa noturna
    addNightTaskButton.addEventListener('click', () => {
        const task = nightTaskInput.value.trim();
        if (task) {
            addTask(nightTasks, task);
            nightTaskInput.value = '';
        }
    });

    // Example of adding tasks dynamically
    addTask(dayTasks, 'New Day Task');
    addTask(nightTasks, 'New Night Task');
});

