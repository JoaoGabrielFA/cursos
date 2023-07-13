import pandas as pd

dataset = pd.read_csv('Python para Data Science Funções, Pacotes e Pandas\db.csv',
                       sep = ';', index_col = 0)

#print(dataset.info())
#print(dataset.Quilometragem.isna())
#print(dataset[dataset.Quilometragem.isna()])

#dataset.fillna(0, inplace = True)
#print(dataset.info())
#print(dataset.query('Zero_km == True'))

print(dataset)
dataset.dropna(subset = ['Quilometragem'], inplace = True)
print(dataset)