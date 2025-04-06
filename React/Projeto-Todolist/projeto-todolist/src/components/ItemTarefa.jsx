import React from "react";


function IntemTarefa({tarefa, onRemove, onToggleConcluida}) {
    return (
        <div className='item-tarefa'>
            <span className={tarefa.concluida ? 'concluida' : ''}>
                {tarefa.texto}
            </span>
            <button onClick={onRemove}>❌</button>
            <button onClick={onToggleConcluida}>✅</button>
        </div>
    )
}

export default IntemTarefa;