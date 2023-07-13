import pandas as pd

dataset = pd.read_csv('Python para Data Science Funções, Pacotes e Pandas\db.csv',
                       sep = ';', index_col = 0)

#for item in dataset: print(item)

#print(list(dataset.iterrows()))

for index, row in dataset.iterrows(): 
    if(2019 - row['Ano']!= 0):
        dataset.loc[index, 'Km_media'] = row['Quilometragem'] / (2019 - row['Ano'])
    else: 
        dataset.loc[index, 'Km_media'] = 0

print(dataset)