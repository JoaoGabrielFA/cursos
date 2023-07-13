#include<iostream>

using namespace std;

int main() {
    int n, x, y, negativos;

    cout<<"Qual a n da matriz? ";
    cin>>n;
    
    x = n;
    y = n;

    int matriz[x][y];

    for (int ix = 0; ix < n; ix++) {
        for (int iy = 0; iy < n; iy++) {
            cout<<"Elemento["<<ix<<","<<iy<<"]: ";
            cin>>matriz[ix][iy];
        }
    }
    
    cout<<"DIAGONAL PRINCIPAL:"<<endl;
    for (int ix = 0; ix < n; ix++) {
        for (int iy = 0; iy < n; iy++) {
            if(ix == iy){
                cout<<matriz[ix][iy]<<endl;
            }
        }
    }
    
    negativos = 0;
    cout<<"QUANTIDADE DE NEGATIVOS: ";
    for (int ix = 0; ix < n; ix++) {
        for (int iy = 0; iy < n; iy++) {
        	if(matriz[ix][iy] < 0){
        		negativos++;
        	}
    	}
    }
    cout<<negativos;
}