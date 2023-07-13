import pandas as pd

dataset = pd.read_csv('Python para Data Science Funções, Pacotes e Pandas\db.csv',
                       sep = ';', index_col = 0)
'''
print(dataset.head())
print(dataset['Valor'])
print(type(dataset['Valor']))
print(type(dataset[['Valor']]))
print(dataset[0:3])
print(dataset.loc['Passat'])


print(dataset.loc[['Passat', 'DS5'], ['Motor', 'Valor']])
print(dataset.loc[:, ['Motor', 'Valor']])

print(dataset.iloc[[1]])
print(dataset.iloc[1:4])
print(dataset.iloc[1:4, [0, 5, 2]])
print(dataset.iloc[[1, 22, 42], [0, 5, 2]])
print(dataset.iloc[:, [0, 5, 2]])

'''