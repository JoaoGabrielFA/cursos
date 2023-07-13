#include<iostream>

using namespace std;

int main(){
    int x, y;
    
    cout<<"Escreva dois numeros: "<<endl;
    cin>>x;
    cin>>y;
    
    while(x != y){
        if(y>x){
            cout<<"CRESCENTE!"<<endl;
        }else{
            cout<<"DECRESCENTE!"<<endl;
        };
        
        cout<<"Escreva mais dois numeros: "<<endl;
        cin>>x;
        cin>>y;
    };
    
    return 0;
};