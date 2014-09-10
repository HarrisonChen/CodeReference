#include "list.h"
#include <iostream>

using namespace std;

void test(List &list, int function, int data){
	switch(function){
		case 1:
			list.popFront();
			break;
		case 2:
			list.popBack();
			break;
		case 3:
			list.pushFront(data);
			break;
		case 4:
			list.pushBack(data);
			break;
		default:
			break;
	}
}

int main(){
	List list = List();
	
	int data = 0;
	int cmd = 0;

	do{
		printf("Input integer (-999 to quit): ");
		cin >> data;

		if(data != -999){
			printf("1) popFront()\n2) popBack()\n3) pushFront(int)\n4) pushBack(int)\n");
			cin >> cmd;

			test(list, cmd, data);
			list.print();
		}
		else{
			break;
		}
	}
	while(true);

	return 0;
}