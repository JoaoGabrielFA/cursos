# nome = 'João'
# print(type(nome))

# idades = [18, 22, 15, 50]
# print(type(idades))
# print(idades[1:])

# def verifica_se_pode_dirigir(idade):
#     if idade >= 18:
#         print(f'{idade} anos, Já pode dirigir')
#     else:
#         print(f'{idade} anos, Não pode dirigir')

# for idade in idades:
#     verifica_se_pode_dirigir(idade)

# def verifica_se_pode_dirigir(idades):
#     for idade in idades:
#         if idade >= 18:
#             print(f'{idade} anos, Já pode dirigir')
#         else:
#             print(f'{idade} anos, Não pode dirigir')
# 
# verifica_se_pode_dirigir(idades)

permissoes = []
idades = [20, 14, 40]  

def verifica_se_pode_dirigir(idades, permissoes):
    for idade in idades:
        if idade >= 18:
            permissoes.append(True)
        else:
            permissoes.append(False)
          
    for permissao in permissoes:
        if permissao == True:
            print('Tem permissão para dirigir')
        else:
            print('Não tem permissão para dirigir')

verifica_se_pode_dirigir(idades, permissoes)