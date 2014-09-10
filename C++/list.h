#ifndef _LIST_H_
#define _LIST_H_

class Node{

public:
	int data;
	Node *next;
	Node(int data, Node *next = NULL){
		this->data = data;
		this->next = next;
	}
};

class List{

	Node *head;

public:
	List();
	~List();

	int isEmpty();
	int exists(int);

	void print();
	void pushFront(int);
	void pushBack(int);
	void popFront(int);
	void popBack(int);
};

#endif "_LIST_H_"
