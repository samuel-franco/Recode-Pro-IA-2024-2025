let contatos = [];

function adicionarContato() {
  let nome = document.getElementById("nome").value;
  let telefone = document.getElementById("telefone").value;

  const contato = {
    p_nome: nome,
    p_telefone: telefone,
  };

  contatos.push(contato);
  listarContatos();
  document.getElementById("nome").value = "";
  document.getElementById("telefone").value = "";
}

function listarContatos() {
  const lista = document.getElementById("listaContatos");
  lista.innerHTML = "";
  contatos.forEach((contato, index) => {
    lista.innerHTML += `<li> ${contato.p_nome} - ${contato.p_telefone} 
    <button onclick="atualizarContato(${index})">Atualizar</button> 
    <button onclick="removerContato(${index})">Excluir</button></li>`;
  });
}

function removerContato(index) {
  contatos.splice(index, 1);
  listarContatos();
}

function atualizarContato(index) {
  let novoNome = prompt("Digite o novo nome:", contatos[index].p_nome);
  let novoTelefone = prompt("Digite o novo telefone:", contatos[index].p_telefone);

  if (novoNome !== null && novoTelefone !== null) {
    contatos[index].p_nome = novoNome;
    contatos[index].p_telefone = novoTelefone;
    listarContatos();
  }
}
