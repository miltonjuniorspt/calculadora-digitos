
def calculadora(num1, num2, operacao):
    if operacao == 1:
        return num1 + num2
    elif operacao == 2:
        return num1 - num2
    elif operacao == 3:
        return num1 * num2
    elif operacao == 4:
        return num1 / num2
        
    else:
        return 0  

numero1 = 5
numero2 = 5
operacao = 1

resultado = calculadora(numero1, numero2, operacao)
print("resultado:", resultado)
