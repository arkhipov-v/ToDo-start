import {useState} from "react";

const CreateTodoField = ({ setTodos }) => {

    const [title, setTitle] = useState('')

    const addTodo = (title) => {
        setTodos(prev => [
            {
                id: new Date(),
                title,
                isCompleted: false,
            },
            ...prev,
        ])
        setTitle('')
    }

    // Testing method
    // window.addTodo = addTodo

    return (
        <div className="flex items-center justify-between mb-4 rounded-2xl border-gray-800 border-2 px-5 py-2 w-full mt-16">
            <input
                type="text"
                onChange={e => setTitle(e.target.value)}
                value={title}
                onKeyPress={e => e.key === 'Enter' && addTodo(title)}
                className="bg-transparent w-full border-none outline-none"
                placeholder="Add a task"
            />
        </div>
    )
}

export default CreateTodoField;