#include "algorithms.h"
#include <iostream>
#include <vector>

using namespace std;

void test3(){
	int** matrix = new int*[3];
	for(int i = 0; i < 10; ++i){
		matrix[i] = new int[3];
	}

	for(int i = 0; i < 3; ++i){
		for(int j = 0; j < 3; ++j){
			matrix[i][j] = j;
			cout << matrix[i][j] << " ";
		}
		cout << endl;
	}

	cout << endl;

	rotate90(matrix, 3);

	for(int i = 0; i < 3; ++i){
		for(int j = 0; j < 3; ++j){
			cout << matrix[i][j] << " ";
		}
		cout << endl;
	}
}

void test4(){
	int myints[] = { 1, 5, 3, 11, 9, 8, 7, 6, 55, 11 };
	vector<int> unsorted_array (myints, myints + sizeof(myints) / sizeof(int) );
	vector<int> sorted_array;
	sorted_array = mergesort(unsorted_array);
	for(int i = 0; i < sorted_array.size(); ++i){
		cout << sorted_array[i] << " ";
	}
	cout << endl;
}

int main(){

	test4();

	return 0;
}