clientes = {}

def cadastrar_cliente ():
    nome_cliente = input("Digite o nome do cliente: ")
    telefone = input("Digite o telefone do cliente: ")
    pet = input("Digite o nome do pet: ")
    
    clientes[nome] = {
        'telefone': telefone,
        'pet': pet
    }
    print(f"Cliente {nome_cliente} cadastrado com sucesso!")
    
def listar_clientes ():
    if not clientes:
        print("Nenhum cliente cadastrado.")
    else:
        print("Clientes cadastrados:")
        for nome_cliente, info in clientes.items():
            print(f"Nome: {nome_cliente}, Telefone: {info['telefone']}, Pet: {info['pet']}")