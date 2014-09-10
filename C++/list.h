#ifndef _LIST_H_
#define _LIST_H_

class Node{

public:
	int data;
	Node *next;
	Node(int data, Node *next = 0){
		this->data = data;
		this->next = next;
	}
};

class List{

	Node *head, *tail;

public:
	List();
	~List();

	int isEmpty();
	int exists(int);

	void print();
	void pushFront(int);
	void pushBack(int);
	void popFront();
	void popBack();
};

#endif "_LIST_H_"
