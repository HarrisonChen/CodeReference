#include "list.h"
#include <stdio.h>

List::List(){
	head = NULL;
	tail = NULL;
}

List::~List(){
	for(Node *temp; isEmpty();){
		temp = head->next;
		delete head;
		head = temp;
	}
}

int List::isEmpty(){
	return head == NULL;
}

int List::exists(int data){
	for(Node *temp = head; temp != NULL; temp = temp->next){
		if(temp->data == data){
			return 1;
		}
	}

	return 0;
}

void List::print(){
	for(Node *temp = head; temp != NULL; temp = temp->next){
		printf("%i\n", temp->data);
	}
}

void List::pushFront(int data){
	head = new Node(data, head);

	if(tail == NULL){
		tail = head;
	}
}

void List::pushBack(int data){
	tail->next = new Node(data);
	tail = tail->next;

	if(head == NULL){
		head = tail;
	}
}

void List::popFront(int data){
	if(head != NULL){
		Node *temp = head;

		if(tail == head){
			tail = head->next;
		}

		head = head->next;
		delete temp;
	}
}

void List::popBack(int data){
	if(head != NULL){

		if(head == tail){
			popFront();
		}
		else{
			Node *temp = head;
			for(; temp->next != NULL; temp = temp->next);
			delete tail;
			tail = temp;
		}
	}
}