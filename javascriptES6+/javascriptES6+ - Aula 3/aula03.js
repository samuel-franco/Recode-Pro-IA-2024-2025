function adicionar () {
 
    let lista = document.getElementById("lista");
 
    let novoItem = document.createElement("li");
 
    novoItem.textContent = "Novo item da lista";
 
    lista.appendChild(novoItem);
 
}
 
function remover () {
 
    let lista = document.getElementById("lista");
    lista.removeChild(lista.lastChild);
 
}