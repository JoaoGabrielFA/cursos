#include<iostream>
#include<iomanip>

using namespace std;

int main(){
    int n, contagem;
    double media, percentual;
    
    cout<<"Quantas pessoas serao digitadas? ";
    cin>>n;
    
    int idade[n];
    int altura[n];
    string nome[n];
    
    for(int i; i<n; i++){
        cout<<"Dados da "<<i+1<<"a pessoa: "<<endl;
        cout<<"Nome: ";
        cin.ignore(INT_MAX, '\n');
        getline(cin,nome[i]);
        cout<<"Idade: ";
        cin>>idade[i];
        cout<<"Altura: ";
        cin>>altura[i];
        cout<<"\n";
    };
    
    media = 0;
    contagem = 0;
    for(int i; i<n; i++){
        media += altura[i];
        
        if(idade[i] < 16){
            contagem++;
        };
    };
    
    media = (double) media/n;
    cout<<fixed<<setprecision(2);
    cout<<"Altura media: "<<media<<endl;
    
    percentual = (double) contagem*100.0/n;
    cout<<fixed<<setprecision(1);
    cout<<"Pessoas com menos de 16 anos: "<<percentual<<"%"<<endl;
    
    for(int i; i<n; i++){
        if(idade[i] < 16){
            cout<<nome[i]<<endl;
        };
    };
};