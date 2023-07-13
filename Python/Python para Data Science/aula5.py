import matplotlib.pyplot as plt

x = list(range(1,9))
y = [8, 10, 7, 8, 9, 3, 1, 8]

plt.plot(x, y, marker='o')
plt.title('Notas de matemática')
plt.xlabel('Provas')
plt.ylabel('Notas')
plt.show()