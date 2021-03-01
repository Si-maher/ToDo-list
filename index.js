const form = document.getElementById('form')
const input = document.getElementById('input')
const todoUL = document.getElementById('todo')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    addTodo()
})

function addTodo(todo) {
    let todoText = input.value

    if(todo) {
        todoText = todo.text
    }
    if(todoText) {
        const todoElement = document.createElement('li')
        if(todo && todo.completed) {
            todoElement.classList.add('completed')
        }
        todoElement.innerText = todoText

        todoElement.addEventListener('click', () => todoElement.classList.toggle('completed'))


        todoUL.appendChild(todoElement)

        input.value = ''
    }
}