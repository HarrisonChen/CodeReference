#ifndef _ALGORITHMS_H_
#define _ALGORITHMS_H_

#include "string.h"
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

// 1) Reverse a null terminated string 

void reverse(char* str){
	char temp;
	char* end = str;

	while(*end){
		end++;
	}
	end--;

	while(str < end){
		temp = *str;
		*str++ = *end;
		*end-- = temp;
	}
}

// 2) Determines whether string is a permutation of another

bool isPermutation(std::string a, std::string b){

	if(a.length() == b.length()){
		std::sort(a.begin(), a.end());
		std::sort(b.begin(), b.end());

		if(a == b){
			return true;
		}
	}

	return false;
}

// 3) Rotate NxN matrix by 90 degrees

// make more memory efficient later ~~~
void rotate90(int** matrix, int n){

	int** new_matrix = new int*[n];
	for(int i = 0; i < n; ++i){
		new_matrix[i] = new int[n];
	}

	for(int i = 0; i < n; ++i){
		for(int j = 0; j < n; ++j){
			new_matrix[j][n-1-i] = matrix[i][j];
		}
	}

	for(int i = 0; i < n; ++i){
		for(int j = 0; j < n; ++j){
			matrix[i][j] = new_matrix[i][j];
		}
	}
}

// 4) Implement mergesort

vector<int> merge(vector<int> left, vector<int> right){
	vector<int> merged_array;
	int left_size = left.size();
	int right_size = right.size();
	int i = 0;
	int l = 0;
	int r = 0;
	
	for(; l < left_size && r < right_size; ++i){
		if(left[l] < right[r]){
			merged_array.push_back(left[l]);
			++l;
		}
		else{
			merged_array.push_back(right[r]);
			++r;
		}
	}

	if(l < left_size){
		merged_array.push_back(left[l]);
		++l;
		++i;
	}
	if(r < right_size){
		merged_array.push_back(right[r]);
		++r;
		++i;
	}

	return merged_array;
}

vector<int> mergesort(vector<int> array){
	if(array.size() <= 1){
		return array;
	}

	int size = array.size();
	int mid = size / 2;
	vector<int> left(mid);
	vector<int> right(size - mid);

	for(int i = 0; i < left.size(); ++i){
		left[i] = array[i];
	}

	for(int i = 0; i < right.size(); ++i){
		right[i] = array[mid + i];
	}

	left = mergesort(left);
	right = mergesort(right);

	return merge(left, right);
}



#endif "_ALGORITHMS_H_"