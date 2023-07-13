#include<stdio.h>

int main(){
    double largura;
    double comprimento;
    double valor;
    
    printf("Digite o valor da largura: ");
    scanf("%lf", &largura);
    
    printf("Digite o valor do comprimento: ");
    scanf("%lf", &comprimento);
    
    printf("Digite o valor do M²: ");
    scanf("%lf", &valor);
  
    int area = largura*comprimento;
    int preco = area*valor;
    
    printf("Area do terreno = %.2lf\n", area);
    printf("Valor do terreno = %.2lf", valor);
    
    return 0;
}