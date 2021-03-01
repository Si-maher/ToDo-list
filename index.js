const form = document.getElementById('form')
const input = document.getElementById('input')
const todoUL = document.getElementById('todo')

const todos = JSON.parse(localStorage.getItem('todos'))

if(todos) {
    todos.forEach(todo => addTodo(todo))
}

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

        todoElement.addEventListener('click', () =>{
            todoElement.classList.toggle('completed')
            updateLocalStorage()
        })


        todoElement.addEventListener('contextmenu', (e) => {
            e.preventDefault()
            todoElement.remove()
            updateLocalStorage()
        })
        todoUL.appendChild(todoElement)

        input.value = ''

        updateLocalStorage()
    }
}
        function updateLocalStorage() {
            todoElements = document.querySelectorAll('li')
            const todos = []

            todoElements.forEach(todoElement=> {
                todos.push ({
                    text:todoElement.innerText,
                    completed:todoElement.classList.contains('completed')
                })
            })
            localStorage.setItem('todos', JSON.stringify(todos))

        }



