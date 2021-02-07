

let input = prompt("What do you want to do (new, list, delete, quit").toLowerCase()

const todos = ['task 1', 'task 2']

while (input !== 'quit') {
    if (input === 'new') {
        let todo = prompt("What is your task?: ")
        todos.push(todo)
    } else if (input === 'list') {
        
        console.log('******************')
        
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`)
        }
            console.log('******************')

        } else if (input === 'delete') {
            let todo = parseInt(prompt("Which task to do wish to delete (by ID): "))
            todos.splice(todo, 1)

        } else if (input === 'quit' && input !== 'q') {
            console.log("Thanks for coming");
            break;
        } else {
            console.log("Not sure what that command is")
        }

        input = prompt("What do you want to do: (new, list, delete, quit").toLowerCase()
    }
