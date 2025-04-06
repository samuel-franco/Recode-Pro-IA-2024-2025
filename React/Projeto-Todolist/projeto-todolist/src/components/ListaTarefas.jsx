import React from "react";
import ItemTarefa from "./ItemTarefa";


function ListaTarefas ({tarefas, onRemove, onToggleConcluida}) {
    return (
        <div className = "lista-tarefas">
            {tarefas.map((tarefa, index) => (
                <ItemTarefa
                    key={index}
                    tarefa={tarefa}
                    onRemove={() => onRemove(index)} 
                    onToggleConcluida={() => onToggleConcluida(index)}
                    />
            ))} 
        </div>
    )
}

export default ListaTarefas;