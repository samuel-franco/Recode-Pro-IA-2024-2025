class Caixa:
    def __init__(self):
        self.saldo = 1200

    def sacar(self, valor):
        if valor <= self.saldo:
            self.saldo -= valor
            print(f"Saque de R$ {valor} realizado com sucesso.")
        else:
            print("Saldo insuficiente.")

    def depositar(self, valor):
        self.saldo += valor
        print(f"Depósito de R$ {valor} realizado com sucesso.")

    def exibir_saldo(self):
        return self.saldo

# Exemplo de uso da classe
caixa = Caixa()

caixa.sacar(1200)
print(f"Saldo após saque: R$ {caixa.exibir_saldo()}")