var num = 27
var counter = 2 
var numhold = 0 
var ar = []
if (num%counter===0){
	ar.push(counter)
	ar.push(num/counter)
	num=num/counter
}
else{counter=counter+1}

}

ar.sort();
ar.pop();

