var i=0;
var sum = 0;

while (i<10000){
    if(i%3===0 ||i%5===0){sum=i+sum};
	i=i+1;
	}
console.log(sum);