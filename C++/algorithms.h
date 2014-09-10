#ifndef _ALGORITHMS_H_
#define _ALGORITHMS_H_

#include "string.h"
#include <algorithm>
#include <iostream>

// Reverse a null terminated string 

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

// Determines whether string is a permutation of another

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

#endif "_ALGORITHMS_H_"