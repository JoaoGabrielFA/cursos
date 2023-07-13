#include<stdio.h>

int main(){
    
    double primeiraNota, segundaNota, notaFinal;
    
    printf("Digite a primeira nota: ");
    scanf("%lf", &primeiraNota);
    
    printf("Digite a segunda nota: ");
    scanf("%lf", &segundaNota);
    
    notaFinal = primeiraNota + segundaNota;
    
    printf("NOTA FINAL: %.1lf\n", notaFinal);
    
    if(notaFinal < 60.0){
        printf("REPROVADO");
    }else{
        printf("APROVADO");
    };
}