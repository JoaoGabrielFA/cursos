#include<stdio.h>

int main() {
    int primeiro, segundo, terceiro, menor;

    printf("Primeiro valor: ");
    scanf("%i", &primeiro);

    printf("Segundo valor: ");
    scanf("%i", &segundo);

    printf("Terceiro valor: ");
    scanf("%i", &terceiro);

    if(primeiro < segundo && primeiro < terceiro){
        menor = primeiro;
    }else if(segundo < primeiro && segundo < terceiro){
        menor = segundo;
    }else(menor = terceiro);

    printf("MENOR = %i", menor);
}