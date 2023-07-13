carros = ['Jetta Variant', 'Passat', 'Crossfox', 'DS5']
valores = [88078.64, 106161.94, 72832.16, 124549.07]
dados = dict(zip(carros, valores))

'''print(type(dados))
print(dados['Passat'])
print('Passat' in dados)
print('Fusca' in dados)
print('Fusca' not in dados)
print(len(dados))
print(dados)
dados['DS4'] = 124549.07
print(dados)
del dados['Passat']
print(dados)

dados.update({'Passat': 106161.95, 'Fusca': 150000})
dadosCopy = dados.copy()
print( 'Dados copy: ', dadosCopy)
del dadosCopy['Fusca']
print( 'Dados copy: ', dadosCopy)
print(dadosCopy.pop('Passat'))
print(dadosCopy.pop('Passat', 'Dado não encontrado'))
print( 'Dados copy: ', dadosCopy)
print(dados)
dadosCopy.clear()
print(dadosCopy)'''

'''print(dados.keys())

for key in dados.keys():
  print(dados[key])

print(dados.values())'''

print(dados.items())

for key, value in dados.items():
    print(key, value)

for key, value in dados.items():
  if (value > 100000):
    print(key)