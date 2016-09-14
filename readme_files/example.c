#include <stdio.h>

//speling errors are underlined

//some types
struct example{
	char first;
	int *second;
	float third[5];
	double **fourth;
};

void greet(char *_name);

int main(int argc, char **argv){
	if(argc > 1){
		char *name = argv[1];
		greet(name);
	}else{
		printf("I don't know who you are\n");
	}

	return 0;
}

void greet(char *_name){
	printf("hello %s\n", _name);
}
