'''nomes_carros = ('Jetta Variant', 'Passat', 'Crossfox', 'DS5')

for item in nomes_carros:
  print(item)

carro_1, carro_2, carro_3, carro_4 = nomes_carros

print(carro_1)
print(carro_2)
print(carro_3)
print(carro_4) 

_, A, _, B = nomes_carros

print(A)
print(B)

_, C, *_ = nomes_carros

print(C)'''

carros = ['Jetta Variant', 'Passat', 'Crossfox', 'DS5']
valores = [88078.64, 106161.94, 72832.16, 124549.07]

print(list(zip(carros, valores)))

for item in zip(carros, valores):
  print(item)

for carro, valor in zip(carros, valores):
  print(carro, valor)

for carro, valor in zip(carros, valores):
  if(valor > 100000):
    print(f'{carro}, custa mais de 100 mil!')