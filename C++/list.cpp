#include "list.h"
#include <stdio.h>

List::List(){
	head = 0;
	tail = 0;
}

List::~List(){
	for(Node *temp; head != 0;){
		temp = head->next;
		delete head;
		head = temp;
	}
}

int List::isEmpty(){
	return head == 0;
}

int List::exists(int data){
	for(Node *temp = head; temp != 0; temp = temp->next){
		if(temp->data == data){
			return 1;
		}
	}

	return 0;
}

void List::print(){
	for(Node *temp = head; temp != 0; temp = temp->next){
		printf("%i\n", temp->data);
	}
}

void List::pushFront(int data){
	head = new Node(data, head);

	if(tail == 0){
		tail = head;
	}
}

void List::pushBack(int data){
	tail->next = new Node(data);
	tail = tail->next;

	if(head == 0){
		head = tail;
	}
}

void List::popFront(){
	if(head != 0){
		Node *temp = head;

		if(tail == head){
			tail = head->next;
		}

		head = head->next;
		delete temp;
	}
}

void List::popBack(){
	if(head != 0){

		if(head == tail){
			popFront();
		}
		else{
			Node *temp = head;
			for(; temp->next != 0; temp = temp->next);
			delete tail;
			tail = temp;
		}
	}
}