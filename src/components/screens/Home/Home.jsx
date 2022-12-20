import {useState} from "react";
import TodoItem from "./Item/TodoItem";
import CreateTodoField from "./create-todo-field/CreateTodoField";

const data = [
    {
        title: 'Finish the essay collaboration',
        isCompleted: false,
        id: 1,
    },
    {
        title: 'Read next chapter of the book',
        isCompleted: false,
        id: 2,
    },
    {
        title: 'Send the finished assignment',
        isCompleted: false,
        id: 3,
    }
]

const Home = () => {
    const [todos, setTodos] = useState(data)

    const changeTodo = (id) => {
        const copy = [...todos]
        const current = copy.find(t => t.id === id)
        current.isCompleted = !current.isCompleted
        setTodos(copy)
    }

    const removeTodo = id => setTodos([...todos].filter(t => t.id !== id))

    return (
        <div className="text-white w-4/5 mx-auto">
            <h1 className="text-2xl font-bold text-center mb-8">ToDo for starting</h1>
            {todos.map(todo => (
              <TodoItem key={todo.id} todo={todo} changeTodo={changeTodo} removeTodo={removeTodo} />
            ))}

            <CreateTodoField setTodos={setTodos} />
        </div>
    )
}



export default Home;