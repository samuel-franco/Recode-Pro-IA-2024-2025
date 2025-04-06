import { useState } from "react"
import ListaTarefas from "./components/ListaTarefas"
import './App.css'

function App() {
  const [tarefas, setTarefas] = useState([
    { texto: "Comprar pão"},
    { texto: "Lavar o carro"}
  ]);

  const [novaTarefa, setNovaTarefa] = useState("")

  const handleRemove = (index) => {
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1)
    setTarefas(novasTarefas)
  }

  const handleInputChange = (event) => {
    setNovaTarefa(event.target.value)
  }

  const handleAddTarefa = () => {
    if (novaTarefa.trim() != "") {
      const novasTarefas = [...tarefas];
      novasTarefas.push({ texto: novaTarefa })
      setTarefas(novasTarefas)
      setNovaTarefa("")
    }
  }

  const handleToggleConcluida = (index) => {
    const novasTarefas = [...tarefas]
    novasTarefas[index].concluida = !novasTarefas[index].concluida;
    setTarefas(novasTarefas)
  }

  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <input 
      type="text"
      value={novaTarefa}
      onChange={handleInputChange}
      placeholder="Adicionar Tarefa"
       />
       <button onClick={handleAddTarefa}>Adicionar</button>
      <ListaTarefas tarefas={tarefas} onRemove={handleRemove} onToggleConcluida={handleToggleConcluida} />
    </div>
  )
}

export default App
