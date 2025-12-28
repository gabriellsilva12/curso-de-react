import { useState } from "react";
import Input from "./input";

function AddTasks({ onClickAddtask }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    return (

        <div className="p-6 flex flex-col gap-2 bg-slate-200 rounded-md shadow">
            <Input
                type="text"
                placeholder="Digite sua tarefa aqui!"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />

            <Input
                type="text"
                placeholder="Descrição da tarefa"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />
            <button
                onClick={() => {
                    onClickAddtask(title, description)
                    setTitle('')
                    setDescription('')
                }}
                className="bg-slate-500 font-medium text-white py-2 px-4 rounded-md active:bg-green-700 active:text-slate-200">
                Adicionar tarefa
            </button>
        </div>
    )
}

export default AddTasks;