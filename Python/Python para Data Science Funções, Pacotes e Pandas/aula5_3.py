import pandas as pd

dataset = pd.read_csv('Python para Data Science Funções, Pacotes e Pandas\db.csv',
                       sep = ';', index_col = 0)

#select = dataset.Motor == 'Motor Diesel'
#print(dataset[select])
#print(dataset[(dataset.Motor == 'Motor Diesel') & (dataset.Zero_km == True)])

print(dataset.query('Motor == "Motor Diesel" and Zero_km == True'))