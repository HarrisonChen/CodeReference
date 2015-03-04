function fib(n){
	if(n == 0){
		return 0;
	}
	if(n == 1){
		return 1;
	}

	var a = fib(n-2);
	var b = fib(n-1);

	return (a + b);
};

var memTable = {};

function fib2(n){
	if(n == 0){
		return 0;
	}
	if(n == 1){
		return 1;
	}

	var a;
	var b;

	if(memTable[n-2]){
		a = memTable[n-2];
	}
	else{
		a = fib2(n-2);
		memTable[n-2] = a;
	}

	if(memTable[n-1]){
		b = memTable[n-1];
	}
	else{
		b = fib2(n-1);
		memTable[n-1] = b;
	}

	return (a + b);
};

console.log(fib2(50));